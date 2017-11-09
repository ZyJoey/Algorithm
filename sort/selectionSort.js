/*
*选择排序：从给定序列中先找到最小（大）值，放到起始位置，再在剩余序列中继续寻找最小（大）值，放入第二位，依次类推。
*/

Array.prototype.selectionSort = function(){

	for(let i = 0 ; i < this.length - 1; i++){

		let min = i;

		for(let j = i + 1 ; j < this.length ; j++){

			if(this[min] > this[j]){
				min = j;

			}
		}

		let temp = this[i];

		this[i] = this[min];

		this[min] = temp;
		
	}

	//console.log(this);

	return this;

}

