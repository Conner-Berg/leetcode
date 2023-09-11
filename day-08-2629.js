// 2629. Function Composition

function compose(fns) {
	return function (x) {
		let i = fns.length - 1;
		for (i; i >= 0; i--) {
			let currentFn = fns[i];
			x = currentFn(x);
		}
		return x;
	};
}

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4));
