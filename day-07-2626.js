// 2626. Array Reduce Transformation

function reduce(nums, fn, init) {
	let accum = init;
	for (let i = 0; i < nums.length; i++) {
		accum = fn(accum, nums[i]);
	}
	return accum;
}

nums = [1, 2, 3, 4];
fn = function sum(accum, curr) {
	return accum + curr;
};
init = 0;
console.log(reduce(nums, fn, init));

nums = [1, 2, 3, 4];
fn = function sum(accum, curr) {
	return accum + curr * curr;
};
init = 100;
console.log(reduce(nums, fn, init));

nums = [];
fn = function sum(accum, curr) {
	return 0;
};
init = 25;
console.log(reduce(nums, fn, init));
