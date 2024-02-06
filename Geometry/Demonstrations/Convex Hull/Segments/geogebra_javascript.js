let {
    evalCommand,
    getAllObjectNames,
    getValue,
    setColor,
    setPointSize,
    deleteObject
} = ggbApplet;

function ggbOnInit() {}

async function getConvexHull(delay) {
    let points = getPoints();

    for (let p1 = 0; p1 <  points.length; p1++) {
        for (let p2 = p1 + 1; p2 <  points.length; p2++) {
            checkLine(points, points[p1], points[p2]);
            await sleep(delay);
        }
    }

    evalCommand("P1 = (0, 0)\nP2 = (0, 0)");
}

function getPoints() {
    let points = [];
    let geogebraPoints = getAllObjectNames("Point").filter(p => p !== "P1" && p !== "P2");

    getAllObjectNames("Segment").filter(p => p !== "l1").forEach(deleteObject);

    for (let point of geogebraPoints) {
        points.push({
            ggbName: point,
            x: getValue(`x(${point})`),
            y: getValue(`y(${point})`),
            belongsTo: 0
        });
    }

    return points;
}

function checkLine(points, p1, p2) {
    if (p1.belongsTo === 2 || p2.belongsTo === 2) return;

    evalCommand(`P1 = ${p1.ggbName}\nP2 = ${p2.ggbName}`);

    if (isExtreme(points, p1, p2)) {
        evalCommand(`Segment(${p1.ggbName}, ${p2.ggbName})`);
        p1.belongsTo++;
        p2.belongsTo++;
    }
}  

function isExtreme(points, p1, p2) {
    let allPointsToLeft = true;
    let allPointsToRight = true;
    
    for (let point of points) {
        if (point === p1 || point === p2) continue;

        let matrix = determinant(p1, p2, point);

        allPointsToLeft = allPointsToLeft && matrix > 0;
        allPointsToRight = allPointsToRight && matrix < 0;

        if (!allPointsToLeft && !allPointsToRight) return false;
    } 

    return true;
}

function determinant(p1, p2, p3) { return p1.x * p2.y + p1.y * p3.x + p2.x * p3.y - p1.y * p2.x - p2.y * p3.x - p3.y * p1.x; }

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }