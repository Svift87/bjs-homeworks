function compareArrays( arr1, arr2 ) {
    if (arr1.length != arr2.length) {
        console.log(`Массивы ${arr1} и ${arr2} различаются`);
        return false;
    }
	
	function topFunc(e1, i) {
		console.log(`Массивы ${arr1} и ${arr2} идентичны`);
		return e1 === arr2[i];
	}
	console.log(`Массивы ${arr1} и ${arr2} различаются`);
	return arr1.every(topFunc);
}

compareArrays([8, 9], [6]);
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]);
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]);
compareArrays([1, 2, 3], [2, 3, 1]);
compareArrays([8, 1, 2], [8, 1, 2]);

function memoize(fn, limit) {
    let results = [];

    return function(...rest) {
		let args = [...rest];        
		let a = results.find(e1 => compareArrays(e1.args, args));

		if (a) {
			return a.result;
		}

		results.unshift({
			args,
			result: fn(...rest)
		})

		if (results.length > limit) {
			results.shift();
		}

		return results;	
	}
}

let sum = function(...rest) {
	let sum = 0;
	for (let i = 0; i < rest.length; i++) {
		sum += rest[i];
	}
	return (sum);
}

let mSum = memoize(sum, 10);

mSum(3, 4, 5, 6);
mSum(3, 4, 5, 6);
mSum(3, 4, 5);
mSum(2, 3, 2);