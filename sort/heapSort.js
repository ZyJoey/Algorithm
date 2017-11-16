/*
*堆排序：
*/

Array.prototype.heapSort = function(){

	//1.最大堆调整，将堆的末端子节点做调整，使得子节点永远小于父节点
	for(let i = ~~(this.length/2) - 1; i >=0 ; i-- ){
		this.adjustHeap(i);
	}


	for(let i = this.length - 1; i > 0 ; i-- ){
		//3.移除第一位根节点，并做最大对调整递归运算
		let temp = this[i];
		this[i] = this[0];
		this[0] = temp;
		this.adjustHeap(0,i);
	}

	return this;
}

Array.prototype.adjustHeap = function(i,len = this.length){
	let left = 2*i + 1,
		right = 2*i + 2,
		max = left;

	if(left >= len){
		return;
	}

	if(right < len){
		max = (this[left] > this[right] ? left : right);
	}

	if(this[i] < this[max]){
		let temp = this[i];
		this[i] = this[max];
		this[max] = temp;
		//2.将堆所有数据重新排序
		return this.adjustHeap(max,len);
	}

}