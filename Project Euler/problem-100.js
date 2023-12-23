/* 
Problem 100: Arranged probability

If a box contains twenty-one colored discs, composed of fifteen blue discs and six red discs, and two discs were taken at random, it can be seen that the probability of taking two blue discs.
P(BB)=(15/21)×(14/20)=1/2
The next such arrangement, for which there is exactly a 50% chance of taking two blue discs at random, is a box containing eighty-five blue discs and thirty-five red discs.
By finding the first arrangement to contain over limit discs in total, determine the number of blue discs that the box would contain.
*/

function arrangedProbability(limit) {
    const blue = [3, 15];
	const red = [4, 21];
	let n = 2;

	while (blue[blue.length - 1] + red[red.length - 1] <= limit) {
		blue.push(6 * blue[n - 1] - blue[n - 2] - 2);
		red.push(6 * red[n - 1] - red[n - 2] - 2);
		n++;
	}

	return blue.find((_, i) => blue[i] + red[i] > limit);
}

module.exports = { arrangedProbability };