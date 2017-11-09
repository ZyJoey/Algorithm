/*
*插入排序：假定第一个数为已排序元素，取出下一个元素，从后向前扫描已排序序列，若该元素小于前一个元素，则将该元素向前移动，如果比较操作消耗较大，可优化成二分法查找插入排序
*/

Array.prototype.insertionSort = function(){
	for(let i = 0 ; i < this.length - 1 ; i++){

		for(let j = i + 1; j >= 0 ; j--){
			if(this[j] < this[j - 1]){
				let temp = this[j];

				this[j] = this[j - 1];

				this[j - 1] = temp;
			}else{
				break;
			}
			
		}
	}

	//console.log(this);

	return this;
}

/*
*二分法查找插入排序
*/

Array.prototype.binarySearch = function(key,min = 0,max = this.length - 1){

	if(min >= max){	//位于该区间
		if(this[min] > key){
			return min;
		}else{
			return min + 1;
		}
	}

	let mid = Math.round((max + min)/ 2);


	//console.log(`min:${min},max:${max},mid:${mid}`);

	if(key < this[mid]){
		
		return this.binarySearch(key,min,mid - 1);
	}else if(key > this[mid]){
		
		return this.binarySearch(key,mid + 1,max);
	}

	return mid;

}


Array.prototype.binaryInsertionSort = function(){

	for (let i = 0 ; i < this.length - 1 ; i++){

		//二分法比较
		let pos = this.binarySearch(this[i + 1],0,i);

		for(let j = i + 1 ; j > pos ; j--){
			let temp = this[j];

			this[j] = this[j - 1];

			this[j - 1] = temp;
		}

	}

	return this;
}