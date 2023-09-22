// 2619. Array Prototype Last

Array.prototype.last = function () {
	if (this.length === 0) return -1;
	for (i = this.length - 1; ; ) return this[i];
};

const arr = [1, 2, 3];
console.log(arr.last());

nums = [null, {}, 3];
console.log(nums.last());

nums = [];
console.log(nums.last());
