/*
*桶排序：根据数字范围创建一定长度的数组，如数字在50到100之间，则数组长度为51，初始化数组，根据数字对应数组下标并将其值+1，由数组值决定数组下标输出次数。
*/

Array.prototype.bucketSort = function(min,max){

	const range = max - min + 1;

	const _array = new Array(range);

	//用0填充数组
	_array.fill(0);

	for(let i = 0; i < this.length; i++){
		let num = this[i] - min;

		_array[num] ++ ;
	}

	//遍历输出新数组

	const newArray = [];

	for(let i = 0 ; i < _array.length ; i++){
		if(_array[i] === 0){
			continue;
		}else{
			for(let j = 0 ; j < _array[i] ; j++ ){
				newArray.push(i + min);
			}
		}

	}

	//console.log(newArray);

	return newArray;

}

