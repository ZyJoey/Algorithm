class Set {
	constructor() {
		this._set = {};
	}
	add(val){
		if(this.has(val)){
			return false;
		}

		this._set[val] = val;	//添加一个值的时候，把它同时作为键和值保存，因为这样有利于查找这个值
		return true;
	}
	remove(val){
		if(this.has(val)){
			delete this._set[val];
			return true;
		}
		return false;
	}
	has(val){
		return this._set.hasOwnProperty(val);
	}
	clear(){
		this._set = {};
	}
	size(){
		return Object.keys(this._set).length;
	}
	values(){
		return Object.keys(this._set);
	}
	union(otherSet){		//两个集合的并集
		const unionSet = new Set();

		this.values().map((item,i) => {
			unionSet.add(item);
		});

		otherSet.values().map((item,i) => {
			unionSet.add(item);
		});

		return unionSet;

	}

	intersection(otherSet){		//两个集合的交集
		const intersectionSet = new Set();

		this.values().map((item,i) => {
			if(otherSet.has(item)){
				intersectionSet.add(item);
			}
		});

		return intersectionSet;
	}

	difference(otherSet){
		const differenceSet = new Set();

		this.values().map((item,i) => {
			if(!otherSet.has(item)){
				differenceSet.add(item);
			}
		});

		return differenceSet;
	}

	subset(otherSet){
		if(this.size() > otherSet.size()){
			return false;
		}

		return this.values().every((item,i) => {
			if(otherSet.has(item)){
				return true;
			}else{
				return false;
			}
		})
	}

}
module.exports = Set;