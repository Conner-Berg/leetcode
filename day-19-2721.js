/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
	return new Promise((resolve, reject) => {
		let array = new Array(functions.length);
		let counter = 0;
		functions.forEach((fn, i) => {
			fn()
				.then((response) => {
					array[i] = response;
					counter++;
					if (counter === array.length) resolve(array);
				})
				.catch((error) => reject(error));
		});
	});
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
