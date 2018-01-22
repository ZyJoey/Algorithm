/*
*处理散列表冲突方法：分离链接/线性探查
*/
class HashTable{
	constructor() {
		this._table = [];
	}
	static loseloseHashCode(key){
		let hash = 0;
		for(let i = 0; i < key.length ; i++){
			hash += key.charCodeAt(i);
		}

		return hash % 49;
	}
	static djb2HashCode(key){
		let hash = 5381;
		for(let i = 0; i < key.length; i++){
			hash = hash * 33 + key.charCodeAt(i);
		}
		return hash % 1013;
	}
	put(key,value){
		let pos = HashTable.loseloseHashCode(key);
		this._table[pos] = value;
	}
	remove(key){
		table[HashTable.loseloseHashCode(key)] = undefined;
	}	
	get(key){
		return this._table[HashTable.loseloseHashCode(key)];
	}
}

module.exports = HashTable;
