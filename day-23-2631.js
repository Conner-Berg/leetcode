// 2631. Group By

Array.prototype.groupBy = function (fn) {
	const ans = {};
	for (let val of this) {
		const key = fn(val);
		ans[key] ??= [];
		ans[key].push(val);
	}
	return ans;
};

(array = [{ id: '1' }, { id: '1' }, { id: '2' }]),
	(fn = function (item) {
		return item.id;
	});

console.log(array.groupBy(fn));

array = [
	[1, 2, 3],
	[1, 3, 5],
	[1, 5, 9],
];
fn = function (list) {
	return String(list[0]);
};

console.log(array.groupBy(fn));

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
fn = function (n) {
	return String(n > 5);
};

console.log(array.groupBy(fn));
