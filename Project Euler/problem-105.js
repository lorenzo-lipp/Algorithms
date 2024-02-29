/* 
Problem 105: Special subset sums: testing

Let S(A) represent the sum of elements in set A of size n. 
We shall call it a special sum set if for any two non-empty disjoint subsets, B and C, the following properties are true:
S(B)≠S(C); that is, sums of subsets cannot be equal.
If B contains more elements than C then S(B)>S(C).
For example, {81, 88, 75, 42, 87, 84, 86, 65} is not a special sum set because 65 + 87 + 88 = 75 + 81 + 84, whereas {157, 150, 164, 119, 79, 159, 161, 139, 158} satisfies both rules for all possible subset pair combinations and S(A)=1286.
Using sets, an array with one-hundred sets, containing seven to twelve elements (the two examples given above are the first two sets), identify all the special sum sets, A1,A2,…,Ak, and find the value of S(A1)+S(A2)+⋯+S(Ak).
Note: This problem is related to Problem 103 and Problem 106.
*/

function testingSpecialSubsetSums(sets) {
    let sum = 0;

    for (let set of sets) {
        if (isSpecialSubset(set)) {
            sum += set.reduce((a, b) => a + b, 0);
        }
    }

    return sum;
}

function isSpecialSubset(set) {
    let sortedSet = [...set].sort((a, b) => a - b);
    let lowerSums = [sortedSet[0]];
    let upperSums = [sortedSet[sortedSet.length - 1]];

    for (let size = 2; size <= sortedSet.length; size++) {
        lowerSums.push(lowerSums[lowerSums.length - 1] + sortedSet[size - 1]);
        upperSums.push(upperSums[upperSums.length - 1] + sortedSet[sortedSet.length - size]);
    }

    for (let i = 1; i < lowerSums.length; i++) {
        if (lowerSums[i] <= upperSums[i - 1]) return false; 
    }

    let allSums = {
        set: new Set(),
        map: new Map(),
        isDuplicated: false
    }

    for (let i = 1; i < set.length; i++) {
        sumAllSubsets(i, sortedSet, allSums);

        if (allSums.isDuplicated) return false;
    }

    return true;
}

function sumAllSubsets(size, set, allSums) {
    if (size === 1) { 
        for (let num of set) {
            allSums.set.add(num);
            allSums.map.set(num, new Set([num]));
        }
        return; 
    }
    
    let oldSet = allSums.set;
    let oldMap = allSums.map;

    allSums.set = new Set();
    allSums.map = new Map();

    for (let num of set) {
        for (let value of oldSet) {
            if (oldMap.get(value).has(num)) continue;

            let sum = value + num;

            if (allSums.map.get(sum) && allSums.map.get(sum).has(num)) continue;
            
            if (allSums.set.has(sum)) {
                allSums.isDuplicated = true;
                return;
            }

            allSums.set.add(sum);
            allSums.map.set(sum, new Set([...oldMap.get(value), num]));
        }
    }
}

module.exports = { testingSpecialSubsetSums };