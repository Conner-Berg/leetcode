let createCounter = function(n) {
	return function() {
		const oldN = n
		n++
		return oldN
	}
}

const counter = createCounter(10)
console.log(counter())
console.log(counter())
console.log(counter())
