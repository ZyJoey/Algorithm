const should = require('should');

require('../sort/bubbleSort');

require('../sort/bucketSort');

require('../sort/selectionSort');

require('../sort/insertionSort');

require('../sort/quickSort');

function getArray(length){

	const arr = new Array(length);

	for(let i = 0 ; i < length ; i++){
		arr[i] = ~~(Math.random() * 10000);
	}

	return arr;
}


const arr = getArray(5000);

//拷贝原始数组

const testArray = arr.slice();

//使用数组提供的排序方法先获取正确排序
const right = arr.sort((a,b) => {
	return a - b;
});

console.log('原始排序：' + testArray);

console.log('正确排序：' + right);


describe('bubbleSort',() => {

	it('测试冒泡排序',() => {
		const copyArray = testArray.slice();
		copyArray.bubbleSort().should.be.eql(right);
	})
})

describe('bucketSort',() => {
	
	it('测试桶排序',() => {
		const copyArray = testArray.slice();
		copyArray.bucketSort(0,10000).should.be.eql(right);
	})
})

describe('selectionSort',() => {
	
	it('测试选择排序',() => {
		const copyArray = testArray.slice();
		copyArray.selectionSort().should.be.eql(right);
	})
})


describe('insertionSort',() => {
	
	it('测试插入排序',() => {
		const copyArray = testArray.slice();
		copyArray.insertionSort().should.be.eql(right);
	})


	it('测试二分法插入排序',() => {
		const copyArray = testArray.slice();
		copyArray.binaryInsertionSort().should.be.eql(right);
	})
})

describe('quickSort',() => {
	
	it('测试快速排序',() => {
		const copyArray = testArray.slice();
		copyArray.quickSort().should.be.eql(right);
	})

})