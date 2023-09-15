// 2725. Interval Cancellation

function cancellable(fn, args, t) {
	function cancelFn() {
		clearInterval(timer);
	}

	fn(...args);

	const timer = setInterval(() => {
		return fn(...args);
	}, t);

	return cancelFn;
}
