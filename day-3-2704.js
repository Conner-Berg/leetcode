const expect = (val) => {
	const obj = {
		toBe: (val2) => {
			if (val === val2) {
				return true;
			} else {
				throw new Error('Not Equal');
			}
		},
		notToBe: (val3) => {
			if (val !== val3) {
				return true;
			} else {
				throw new Error('Equal');
			}
		},
	};
	return obj;
};

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));
