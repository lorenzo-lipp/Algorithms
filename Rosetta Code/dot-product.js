/* 
Dot product

Create a function, to compute the dot product, also known as the scalar product of two vectors.
*/

function dotProduct(arr1, arr2) {
    let product = 0;

    for (let i = 0; i < arr1.length; i++) {
        product += arr1[i] * arr2[i];
    }

    return product;
}

module.exports = { dotProduct };