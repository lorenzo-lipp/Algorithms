/* 
Problem 103: Special subset sums: optimum

Let S(A) represent the sum of elements in set A of size n. 
We shall call it a special sum set if for any two non-empty disjoint subsets, B and C, the following properties are true:
S(B)≠S(C); that is, sums of subsets cannot be equal.
If B contains more elements than C then S(B)>S(C).
If S(A) is minimised for a given n, we shall call it an optimum special sum set. 
The first five optimum special sum sets are given below.
n=1:{1}
n=2:{1,2}
n=3:{2,3,4}
n=4:{3,5,6,7}
n=5:{6,9,11,12,13}
It seems that for a given optimum set, A={a1,a2,…,an}, the next optimum set is of the form B={b,a1+b,a2+b,…,an+b}, where b is the "middle" element on the previous row.
By applying this "rule" we would expect the optimum set for n=6 to be A={11,17,20,22,23,24}, with S(A)=117. 
However, this is not the optimum set, as we have merely applied an algorithm to provide a near optimum set. 
The optimum set for n=6 is  A={11,18,19,20,22,25}, with S(A)=115 and corresponding set string: 111819202225.
Given that A is an optimum special sum set for n=7, find its set string.
Note: This problem is related to Problem 105 and Problem 106.
*/

function optimumSpecialSumSet(size=7) {
    let set = [1];

    for (let i = 0; i < size - 1; i++) {
        set = nearlyOptimumSet(set);
        set = optimizeSet(set);
    }

    return set.reduce((a, b) => a + String(b), "");
}

function optimizeSet(set) {
    let lowerSums = [set[0]];
    let upperSums = [set[set.length - 1]];

    for (let size = 2; size <= set.length; size++) {
        lowerSums.push(lowerSums[lowerSums.length - 1] + set[size - 1]);
        upperSums.push(upperSums[upperSums.length - 1] + set[set.length - size]);
    }

    let newSet = optimizeAux([...set], lowerSums, upperSums);

    if (isSetInvalid(newSet)) return set;
    return newSet;
}

function optimizeAux(set, lowerSums, upperSums) {
    let middleElement = Math.floor(set.length / 2);

    set[middleElement] -= 2;

    for (let i = middleElement; i < lowerSums.length; i++) lowerSums[i] -= 2;
    for (let i = middleElement - 1; i < upperSums.length; i++) upperSums[i] -= 2;

    if (isSetInvalid(set)) rebalance(set, lowerSums, upperSums, middleElement);

    return set;
}

function rebalance(set, lowerSums, upperSums, middleElement) {
    if (middleElement < 3 || middleElement > set.length - 3) return;

    set[middleElement + 1] -= 1;
    set[middleElement + 2] += 1;
    set[middleElement - 1] -= 1;
    set[middleElement - 2] += 1;

    upperSums[middleElement - 3] += 1;
    upperSums[middleElement] -= 1;
    lowerSums[middleElement - 2] += 1;
    lowerSums[middleElement + 1] -= 1;
}

function isSetInvalid(set) { 
    return (new Set(set)).size !== set.length || 
           !set.every((v, i) => i > 0 ? v > set[i - 1] : true); 
}

function nearlyOptimumSet(previous) {
    let middleElement = previous[Math.floor(previous.length / 2)];

    return new Array(previous.length + 1)
               .fill(middleElement)
               .map((v, i) => i > 0 ? v + previous[i - 1] : v);
}

module.exports = { optimumSpecialSumSet };