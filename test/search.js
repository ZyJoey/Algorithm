const should = require('should');

require('../search/binarySearch');

function getArray(length){

	const arr = new Array(length);

	for(let i = 0 ; i < length ; i++){
		arr[i] = ~~(Math.random() * 1000);
	}

	return arr;
}


const arr = getArray(100).sort((a,b) => {
	return a - b;
});


describe('binarySearch',() => {
	it('二分法查找',() => {

		arr.binarySearch(arr[68]).should.be.eql(68);
	})
})