// 2634. Filter Elements from Array

function filter(arr, fn) {
	let filteredArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (fn(arr[i], i)) filteredArr.push(arr[i]);
	}
	return filteredArr;
}

arr = [0, 10, 20, 30];
fn = function greaterThan10(n) {
	return n > 10;
};
console.log(filter(arr, fn));

arr = [1, 2, 3];
fn = function firstIndex(n, i) {
	return i === 0;
};
console.log(filter(arr, fn));

arr = [-2, -1, 0, 1, 2];
fn = function plusOne(n) {
	return n + 1;
};
console.log(filter(arr, fn));
