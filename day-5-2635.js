const array = [1, 2, 3];

function plusone(n) {
	return n + 1;
}

function plusI(n, i) {
	return n + i;
}

function constant() {
	return 42;
}

function map(arr, fn) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		let newIndex = fn(arr[i], i);
		newArr.push(newIndex);
	}
	return newArr;
}

const newArray = map(array, constant);
console.log(newArray);
