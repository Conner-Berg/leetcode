/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
	return JSON.stringify(obj).length === 2;
};

console.log(isEmpty([]));
console.log(isEmpty({}));
console.log(isEmpty(['']));
console.log(isEmpty({ thing: 'yup' }));
