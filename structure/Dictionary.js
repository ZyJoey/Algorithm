class Dictionary{
	constructor() {
		this._dictionary = {};
	}
	set(key,val){		//向字典中添加新元素
		this._dictionary[key] = val;
	}
	remove(key){
		if(this.has(key)){
			delete this._dictionary[key];
			return true;
		}
		return false;
	}
	has(key){
		return this._dictionary.hasOwnProperty(key);
	}
	get(key){
		return this.has(key) ? this._dictionary[key] : undefined;
	}
	clear(){
		this._dictionary = {};
	}
	size(){
		return Object.keys(this._dictionary).length;
	}
	keys(){
		return Object.keys(this._dictionary);
	}
	values(){
		var values = [];
		for(kek in this._dictionary){
			if(this.has(key)){
				values.push(this._dictionary[key]);
			}
		}

		return values;
	}
	getItems(){
		return this._dictionary;
	}
}

module.exports = Dictionary;