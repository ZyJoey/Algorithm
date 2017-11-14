/*
*归并排序：将一个序列逐渐拆分成长度为一的若干个序列，两两比较合并直至序列数为一。
*/

Array.prototype.merge = function(leftArr,rightArr){

	let arr = [];

	let i = 0, 
		j = 0,
		k = 0;

	while(i < leftArr.length && j < rightArr.length){
		if(leftArr[i] < rightArr[j]){
			arr[k++] = leftArr[i++];
		}else{
			arr[k++] = rightArr[j++];
		}
	}

	while(i < leftArr.length){
		arr[k++] = leftArr[i++];
	}

	while(j < rightArr.length){
		arr[k++] = rightArr[j++];
	}

	//console.log(arr);
	return arr;
}

Array.prototype.mergeSort = function(arr = this){

	if(arr.length <= 1){
		return arr;
	}

	let mid = ~~(arr.length / 2);

	let leftArr = arr.slice(0,mid);

	let rightArr = arr.slice(mid);
	
	return this.merge(this.mergeSort(leftArr),this.mergeSort(rightArr));

}

