let { 
    getAllObjectNames, 
    deleteObject, 
    getXcoord, 
    getYcoord, 
    evalCommandGetLabels,
    setPointSize,
    setColor,
    getPointSize
} = ggbApplet;

function ggbOnInit() {}

async function getConvexHull(delay) {
    let points = getPoints();

    orderPoints(points);

    let extremeEdges = points.slice(0, 2);
    let extremeSegments = [createSegment(extremeEdges[0], extremeEdges[1])];
    let untestedPoints = points.slice(2).reverse();

    while(untestedPoints.length) {
        let last = extremeEdges[extremeEdges.length - 1];
        let lastButOne = extremeEdges[extremeEdges.length - 2];
        let point = untestedPoints[untestedPoints.length - 1];

        await highlightPoint(point.ggbName, delay);

        if (determinant(lastButOne, last, point) > 0) {
            extremeEdges.push(untestedPoints.pop());
            extremeSegments.push(createSegment(last, extremeEdges[extremeEdges.length - 1]));
            unhighlightPoint(point.ggbName);
        } else {
            extremeEdges.pop();
            deleteObject(extremeSegments.pop());
        }
        
        await sleep(delay);
        
        if (!untestedPoints.length) createSegment(extremeEdges[0], extremeEdges[extremeEdges.length - 1]);
    }
}

function getPoints() {
    let points = [];
    let geogebraPoints = getAllObjectNames("Point");

    getAllObjectNames("Segment").forEach(deleteObject);

    for (let point of geogebraPoints) {
        points.push({
            ggbName: point,
            x: getXcoord(point),
            y: getYcoord(point)
        });
    }

    return points;
}

function orderPoints(points) {
    let lowerThenLeftmost = points[0];

    for (let i = 1; i < points.length; i++) {
        if (points[i].y < lowerThenLeftmost.y ||
            (points[i].y === lowerThenLeftmost.y && points.x < lowerThenLeftmost.x)
        ) lowerThenLeftmost = points[i];
    }

    points.sort((a, b) => a === lowerThenLeftmost ? -1 : -1 * determinant(lowerThenLeftmost, a, b));
}

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

function determinant(p1, p2, p3) { return p1.x * p2.y + p1.y * p3.x + p2.x * p3.y - p1.y * p2.x - p2.y * p3.x - p3.y * p1.x; }

function createSegment(p1, p2) { return evalCommandGetLabels(`Segment(${p1.ggbName}, ${p2.ggbName})`); }

async function highlightPoint(p, delay) { 
    if (getPointSize(p) === 7) return;
    setPointSize(p, 7);
    setColor(p, 255, 51, 72);
    await sleep(delay);
}

function unhighlightPoint(p) { 
    setPointSize(p, 5);
    setColor(p, 77, 77, 255);
}