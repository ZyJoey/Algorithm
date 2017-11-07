/*
*冒泡排序：逐个比较相邻两个数，顺序错误即交换位置，整个过程重复n-1次，因循环一次后的最末尾数字已为最大或最小，于是只须比较n-i次。
*/

function bubble(arr){

	for (let i = 0; i < arr.length; i++ ){
		for(let j = 1; j < arr.length - i; j++){
			if(arr[j] < arr[j-1]){
				let a = arr[j];
				arr[j] = arr[j-1];
				arr[j-1] = a;
			}


		}

	}

	return arr;
}
