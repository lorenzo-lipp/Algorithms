let { 
    evalCommand,
    getAllObjectNames,
    getValue,
    setColor,
    setPointSize
} = ggbApplet;

function ggbOnInit() {}

async function getConvexHull(delay) {
    let points = getPoints();

    for (let p1 = 0; p1 < points.length; p1++) {
        for (let p2 = p1 + 1; p2 < points.length; p2++) {
            for (let p3 = p2 + 1; p3 < points.length; p3++) {
                for (let p4 = 0; p4 < points.length; p4++) {
                    if (p4 === p1 || p4 === p2 || p4 === p3 || !points[p4].isExtreme) continue;
                    setPointSize(points[p4].ggbName, 7);
                    checkTriangle(points[p1], points[p2], points[p3], points[p4]);
                    await sleep(delay);
                    setPointSize(points[p4].ggbName, 5);
                }
            }
        }
    }

    evalCommand("P1 = (0, 0)\nP2 = (0, 0)\nP3 = (0, 0)");
}

function getPoints() {
    let points = [];
    let geogebraPoints = getAllObjectNames("Point").filter(p => p !== "P1" && p !== "P2" && p !== "P3");

    for (let point of geogebraPoints) {
        points.push({
            ggbName: point,
            x: getValue(`x(${point})`),
            y: getValue(`y(${point})`),
            isExtreme: true
        });
        setColor(point, 77, 77, 255);
    }

    return points;
}

async function checkTriangle(p1, p2, p3, p4) {
    evalCommand(`P1 = ${p1.ggbName}\nP2 = ${p2.ggbName}\nP3 = ${p3.ggbName}`);

    if (isInside(p4, [p1, p2, p3])) {
        p4.isExtreme = false;
        setColor(p4.ggbName, 192, 192, 192);
    }
}

function isInside(point, triangle) {
    let [p1, p2, p3] = triangle;
    let a = toLeft(p1, p2, point);
    let b = toLeft(p2, p3, point);
    if (a !== b) return false;
    let c = toLeft(p3, p1, point);
    if (a !== c) return false;
    return true;
}

function toLeft(lineP1, lineP2, point) { return determinant(lineP1, lineP2, point) > 0; }

function determinant(p1, p2, p3) { return p1.x * p2.y + p1.y * p3.x + p2.x * p3.y - p1.y * p2.x - p2.y * p3.x - p3.y * p1.x; }

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }