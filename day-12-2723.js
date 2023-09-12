// 2723. Add Two Promises

async function addTwoPromises(promise1, promise2) {
	let sum = 0;
	await promise1.then((value) => (sum += value));
	await promise2.then((value) => (sum += value));
	return sum;
}
