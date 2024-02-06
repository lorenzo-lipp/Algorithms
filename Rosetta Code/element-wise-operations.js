/* 
Element-wise operations

Implement basic element-wise matrix-matrix and scalar-matrix operations.
addition
subtraction
multiplication
division
exponentiation
The first parameter will be the operation to be performed, for example, "m_add" for matrix addition and "s_add" for scalar addition. 
The second and third parameters will be the matrices on which the operations are to be performed.
*/

function operation(op, arr1, arr2) {
    switch (op) {
        case "m_add":
            return matrixOperation((a, b) => a + b, arr1, arr2);
        case "m_sub":
            return matrixOperation((a, b) => a - b, arr1, arr2);
        case "m_mult":
            return matrixOperation((a, b) => a * b, arr1, arr2);
        case "m_div":
            return matrixOperation((a, b) => a / b, arr1, arr2);
        case "m_exp":
            return matrixOperation((a, b) => a ** b, arr1, arr2);
        case "s_add":
            return scalarOperation((a, b) => a + b, arr1, arr2);
        case "s_sub":
            return scalarOperation((a, b) => a - b, arr1, arr2);
        case "s_mult":
            return scalarOperation((a, b) => a * b, arr1, arr2);
        case "s_div":
            return scalarOperation((a, b) => a / b, arr1, arr2);
        case "s_exp":
            return scalarOperation((a, b) => a ** b, arr1, arr2);
        default:
            throw new Error("Invalid Operation: use one of the following m_add, s_add, m_sub, s_sub, m_mult, s_mult, m_div, s_div, m_exp, s_exp.");
    }
}

function scalarOperation(operation, arr1, b) {
    let newArr = Array(arr1.length);

    for (let i = 0; i < arr1.length; i++) {
        if (Array.isArray(arr1[i])) {
            newArr[i] = scalarOperation(operation, arr1[i], b);
        } else {
            newArr[i] = operation(arr1[i], b);
        }
    }

    return newArr;
}

function matrixOperation(operation, arr1, arr2) {
    let newArr = Array(arr1.length);

    for (let i = 0; i < arr1.length; i++) {
        if (Array.isArray(arr1[i])) {
            newArr[i] = matrixOperation(operation, arr1[i], arr2[i]);
        } else {
            newArr[i] = operation(arr1[i], arr2[i]);
        }
    }

    return newArr;
}

module.exports = { operation };