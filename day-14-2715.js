// 2715. Timeout Cancellation

function cancellable(fn, args, t) {
	function cancelFn() {
		clearTimeout(timeoutID);
	}

	let timeoutID = setTimeout(() => {
		return fn(...args);
	}, t);

	return cancelFn;
}

const result = [];

const fn = (x) => x * 5;
const args = [2];
const t = 20;
const cancelT = 50;

const start = performance.now();

const log = (...argsArr) => {
	const diff = Math.floor(performance.now() - start);
	result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelT);

setTimeout(() => {
	cancel();
}, cancelT);

setTimeout(() => {
	console.log(result);
}, maxT + 15);
