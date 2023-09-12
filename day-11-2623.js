// 2623. Memoize

function findArrayIndex(array, item) {
	for (var i = 0; i < array.length; i++) {
		if (array[i][0] == item[0] && array[i][1] == item[1]) {
			return i;
		}
	}
}

function memoize(fn) {
	let storedArgs = [];
	let storedAnswers = [];

	return function (...args) {
		let answer = false;
		let i = findArrayIndex(storedArgs, args);

		if (Number.isInteger(i)) {
			answer = storedAnswers[i];
		}

		if (answer !== false) {
			return answer;
		} else {
			answer = fn(...args);
			storedArgs.push(args);
			storedAnswers.push(answer);
			return answer;
		}
	};
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
	callCount += 1;
	return a + b;
});
console.log(memoizedFn(2, 3));
console.log(memoizedFn(2, 3));
console.log(callCount);
