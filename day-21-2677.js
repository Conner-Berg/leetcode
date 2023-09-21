// 2677. Chunk Array

var chunk = function (arr, size) {
	let cloneArr = [...arr];
	let newArr = [];
	const numSubArrs = Math.ceil(arr.length / size);
	for (let i = 0; i < numSubArrs; i++) {
		let subArr = cloneArr.splice(0, size);
		newArr.push(subArr);
	}
	return newArr;
};

console.log(chunk([8, 5, 3, 2, 6], 3));
