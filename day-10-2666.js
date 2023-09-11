// 2666. Allow One Function Call

function once(fn) {
	let called = false;
	return function (...args) {
		if (called) return undefined;
		called = true;
		return fn(...args);
	};
}

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3));
console.log(onceFn(1, 2, 3));
