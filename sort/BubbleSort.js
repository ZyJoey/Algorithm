/*
*冒泡排序：逐个比较相邻两个数，顺序错误即交换位置，整个过程重复n-1次，因循环一次后的最末尾数字已为最大或最小，于是只须比较n-i次。
*/

Array.prototype.bubbleSort = function(){

	for (let i = 0; i < this.length; i++ ){

		for(let j = 1; j < this.length - i; j++){

			if(this[j] < this[j-1]){

				let temp = this[j];

				this[j] = this[j-1];
				this[j-1] = temp;
			}

		}

	}

	//console.log(this);

	return this;
}

