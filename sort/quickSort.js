/*
*快速排序：以左边第一个数为基准数，从右向左查找比基准数小的数字，再从左向右查找比基准数大的数字进行交换，左右相遇则将基准数与该位置交换，以基准数进行划分重复上述过程。
*/

Array.prototype.quickSort = function(left = 0,right = this.length - 1){

	if(left >= right){
		return -1;
	}

	let key = this[left],
		i = left,
		j = right;

	while(i < j){

		while(this[j] >= key && i < j){
			j-- ;
		}

		while(this[i] <= key && i < j){
			i++ ;
		}

		if(i < j){
			let temp = this[i];

			this[i] = this[j];
			this[j] = temp;
		}

	}

	this[left] = this[i];
	this[i] = key;
	
	this.quickSort(left,i - 1);
	this.quickSort(i + 1,right);

	return this;
	
}