// 2703. Return Length of Arguments Passed

function argumentsLength(...args) {
	return args.length;
}

console.log(argumentsLength(5));

console.log(argumentsLength({}, null, '3'));
