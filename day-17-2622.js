// 2622. Cache With Time Limit

var TimeLimitedCache = function () {
	// Write a class that allows getting and setting key-value pairs
	this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
	let found = this.cache.has(key);
	if (found) clearTimeout(this.cache.get(key).timer);

	// value and duration should be overwritten if the key already exists
	this.cache.set(key, {
		value: value,
		// Once the duration has elapsed, the key should be inaccessible
		timer: setTimeout(() => this.cache.delete(key), duration),
	});

	// return true if the same un-expired key already exists and false otherwise
	return found ? true : false;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
	// if an un-expired key exists, it should return the associated value. Otherwise it should return -1
	return this.cache.has(key) ? this.cache.get(key).value : -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
	// returns the count of un-expired keys
	return this.cache.size;
};

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(2, 42, 1000));
console.log(timeLimitedCache.get(2));
console.log(timeLimitedCache.count());
