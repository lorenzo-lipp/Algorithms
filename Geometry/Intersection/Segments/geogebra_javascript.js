let {
    getAllObjectNames,
    getCommandString,
    getXcoord,
    getYcoord,
    evalCommandGetLabels,
    setValue,
    getValue,
    setColor,
    setPointSize,
    setLabelVisible,
    deleteObject
} = ggbApplet;

let isAnimating = false;

function ggbOnInit() {}

async function getIntersections(delay) {
    if (isAnimating) return;

    let points = [];
    let testedSegments = {};
    let segments = getAllObjectNames("Segment");
    isAnimating = true;

    segments.forEach(segment => points.push(...getSegmentPoints(segment)));

    points.sort((a, b) => a.y > b.y || a.y === b.y && a.x < b.x ? -1 : 1);

    clearIntersectionPoints(points);
    await sleep(delay);

    let activeSegments = [];
    let pointsIndex = 0;
    let previousPoint = null;

    while (pointsIndex < points.length) {
        let point = points[pointsIndex];
        let newOrder = null;

        sweepLine(point);
        
        if (previousPoint) highlightPoint(previousPoint, false);
        highlightPoint(point, true);

        if (point.isIntersectionPoint) newOrder = changeOrder(point.segments, activeSegments);
        else if (point.startPoint) newOrder = addSegment(point, points, activeSegments);
        else newOrder = removeSegment(point, activeSegments);

        await testNeighbors(newOrder, points, pointsIndex, testedSegments, delay);
        await sleep(delay);

        previousPoint = point;
        pointsIndex++;
    }

    sweepLine({ y: Infinity });
    highlightPoint(points[points.length - 1], false);
    isAnimating = false;
}

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

function clearIntersectionPoints(points) {
    let ggbPoints = getAllObjectNames("Point");

    ggbPoints.forEach(p => {
        if (p !== "P1" && p !== "P2" && !points.find(v => v.ggbName === p)) {
            deleteObject(p);
        }
    });
}

function getSegmentPoints(segment) {
    let p1 = { segment };
    let p2 = { segment };

    [[_, p1.ggbName, p2.ggbName]] = [...getCommandString(segment).matchAll(/\((.+), (.+)\)/gi)];
    if (!p1.ggbName || !p2.ggbName) return;

    p1.x = getXcoord(p1.ggbName);
    p1.y = getYcoord(p1.ggbName);
    p2.x = getXcoord(p2.ggbName);
    p2.y = getYcoord(p2.ggbName);

    if (p2.y > p1.y || p2.y === p1.y && p2.x < p1.x) [p1, p2] = [p2, p1];
    
    p1.startPoint = true;
    p2.startPoint = false;

    return [p1, p2];
}

function intersection(s1, s2) {
    let q = s1.startPoint;
    let p = s2.startPoint;
    let diff = { x: q.x - p.x, y: q.y - p.y };
    let s = { x: s1.endPoint.x - q.x, y: s1.endPoint.y - q.y };
    let r = { x: s2.endPoint.x - p.x, y: s2.endPoint.y - p.y };
    let rs = crossProduct(r, s);
    let t = crossProduct(diff, s) / rs;
    let u = crossProduct(diff, r) / rs;

    if (u >= 0 && u <= 1 && t >= 0 && t <= 1) return { x: q.x + s.x * u, y: q.y + s.y * u };
}

function sweepLineIntersection(s) {
    let yDiff = s.endPoint.y - s.startPoint.y;
    if (yDiff === 0) return s.startPoint.x;
    let sweepLineY = getValue("sweepLineY");
    let u = (sweepLineY - s.startPoint.y) / yDiff;
    let xDiff = s.endPoint.x - s.startPoint.x;
    return s.startPoint.x + u * xDiff;
}

function crossProduct(p1, p2) { return p1.x * p2.y - p2.x * p1.y }

function createPoint(point) { return evalCommandGetLabels(`(${point.x}, ${point.y})`); }

function sweepLine(point) { 
    setValue("sweepLineY", point.y);
}

function highlightPoint(point, bool) { 
    let color = bool ? [125, 200, 0] : point.isIntersectionPoint ? [255, 0, 0] : [77, 77, 255];
    let size = bool ? 7 : 5;
    setColor(point.ggbName, ...color);
    setPointSize(point.ggbName, size);
}

function highlightSegments(s1, s2, bool) { 
    let color = bool ? [125, 200, 0] : [0, 0, 0];
    setColor(s1.name, ...color);
    setColor(s2.name, ...color);
}

async function testNeighbors(neighbors, points, pointsIndex, testedSegments, delay) {
    for (let i = 0; i < neighbors.length - 1; i++) {
        let s1 = neighbors[i];
        let s2 = neighbors[i + 1];

        if (!s1 || !s2) continue;

        let segmentPair = [s1.name, s2.name].sort().reduce((a, b) => a + b);

        if (testedSegments[segmentPair]) continue;
        testedSegments[segmentPair] = true;

        highlightSegments(s1, s2, true);
        await sleep(delay);
        highlightSegments(s1, s2, false);

        let intersectionPoint = intersection(s1, s2);

        if (intersectionPoint) {
            intersectionPoint.isIntersectionPoint = true;
            intersectionPoint.segments = [s1, s2];
            addPoint(intersectionPoint, points, pointsIndex);
        }

        await sleep(delay / 2);
    }
}

function changeOrder(segments, activeSegments) {
    let fi = null;
    let si = null;

    for (let i = 0; i < activeSegments.length; i++) {
        if (activeSegments[i] === segments[0]) fi = i;
        else if (activeSegments[i] === segments[1]) si = i;
    }

    [activeSegments[fi], activeSegments[si]] = [activeSegments[si], activeSegments[fi]];
    return [activeSegments[fi - 1], activeSegments[fi], null, activeSegments[si], activeSegments[si + 1]];
}

function addSegment(point, points, activeSegments) {
    let endPoint = points.find(p => p.segment === point.segment && !p.startPoint);
    let segment = { 
        name: point.segment,
        startPoint: { x: point.x, y: point.y },
        endPoint: { x: endPoint.x, y: endPoint.y }
    }

    let index = activeSegments.length;
    let sweepLineY = getValue("sweepLineY");
    let segmentX = sweepLineIntersection(segment, sweepLineY);

    for (let i = 0; i < activeSegments.length; i++) {
        let activeSegmentX = sweepLineIntersection(activeSegments[i], sweepLineY);
        if (segmentX < activeSegmentX) {
            index = i;
            break;
        } else if (segmentX === activeSegmentX) {
            index = i + (activeSegments[i].endPoint.x > segment.endPoint.x ? 0 : 1)
        }
    }

    activeSegments.splice(index, 0, segment);
    let neighbors = [activeSegments[index - 1], segment, activeSegments[index + 1]];
    return neighbors;
}

function removeSegment(point, activeSegments) {
    let index = activeSegments.findIndex(segment => point.segment === segment.name);
    let neighbors = [activeSegments[index - 1], activeSegments[index + 1]];
    activeSegments.splice(index, 1);
    return neighbors;
}

function addPoint(point, points, pointsIndex) {
    if (!point) return false;

    let index = null;
    for (let i = 0; i < points.length; i++) {
        if (index && (point.y !== points[i].y || point.x !== points[i].x)) break;
        if (point.y > points[i].y || point.y === points[i].y && point.x <= points[i].x) index = i;
    }

    if (point.isIntersectionPoint) {
        point.ggbName = evalCommandGetLabels(`(${point.x}, ${point.y})`);
        setColor(point.ggbName, 255, 0, 0);
        setLabelVisible(point.ggbName, false);
    }

    if (index === null || index < pointsIndex) return false;

    points.splice(index, 0, point);
    return true;
}