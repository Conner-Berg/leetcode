// 2665. Counter II

const createCounter = function (init) {
	let current = init;

	function increment() {
		return ++current;
	}
	function decrement() {
		return --current;
	}
	function reset() {
		return (current = init);
	}

	return { increment, decrement, reset };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.increment());
