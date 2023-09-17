// 2637. Promise Time Limit

/* 

In the return async function, resolve the promise with await.
Check the time it took to resolve (with performance.now I think).
If resolve time < t, return resolved promise.
If resolve time > t, return "Time Limit Exceeded"

*/

// function timeLimit(fn, t) {
// 	return function (...args) {
// 		if (t < args) {
// 			fn(t);
// 		} else if (t > args) {
// 			return 'Time Limit Exceeded';
// 		}
// 	};
// }

var timeLimit = function (fn, t) {
	return async function (...args) {
		return new Promise((resolve, reject) => {
			setTimeout(() => reject('Time Limit Exceeded'), t);
			fn(...args).then(resolve, reject);
		});
	};
};

fn = async (n) => {
	await new Promise((res) => setTimeout(res, 100));
	return n * n;
};
inputs = [5];
t = 50;
const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(150).catch(console.log);
