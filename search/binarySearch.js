
/*
*二分法查找
*/

Array.prototype.binarySearch = function(key,min = 0,max = this.length - 1){

	if(min >= max){	//查找失败
		return -1;
	}

	let mid = Math.round((max + min)/ 2);


	console.log(`min:${min},max:${max},mid:${mid}`);

	if(key < this[mid]){
		
		return this.binarySearch(key,min,mid - 1);
	}else if(key > this[mid]){
		
		return this.binarySearch(key,mid + 1,max);
	}

	return mid;

}
