/*
*希尔排序：基于插入排序，将序列按照某个步长n（length/2）分组排序，然后再用一个较小步长n/2分组排序，直至增量为1就是最普通的插入排序了。该算法意在使元素一次向正确位置前进一大步。
*PS:步长选择并非固定length/2,只要最终步长为1即可
*/

Array.prototype.shellSort = function(){

	for(let gap = ~~(this.length / 2); gap >= 1 ; gap = ~~(gap/2)){
		for(let i = gap; i < this.length; i++){
			for(let j = i ; j >= 0 ; j -= gap){
				if(this[j] < this[j - gap]){
					let temp = this[j];
					this[j] = this[j - gap];
					this[j - gap] = temp;
				}else{
					break;
				}
			}
		}
	}

	return this;
}
