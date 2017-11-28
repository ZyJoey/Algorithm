function Node(element){
	this.element = element;
	this.next = null;
}

class LinkedList{
	constructor() {
		this._head = null;
		this._length = 0;
	}
	append(element){		//列表尾部添加一个新的项
		const node = new Node(element);
		
		if(this._head === null){
			this._head = node;			
		}else{
			let current = this._head;
			//循环链表，直到找到最后一项
			while(current.next){	
				current = current.next;
			}

			current.next = node;
		}

		this._length++;

	}
	insert(position,element){		//列表特定位置插入一个新的项
		if(position > this._length || position < 0){
			return false;
		}

		const node = new Node(element);

		let index = 0,
			current = this._head,
			previous = null;

		while(index++ < position){
			previous = current;
			current = current.next;
		}

		previous.next = node;
		node.next = current;

		this._length++;

		return true;
	}
	remove(element){				//从列表中移除一项
		let current = this._head,
			previous = null;

		while(current){
			if(current.element === element){
				previous.next = current.next;
				this._length--;

				return current;
			}

			previous = current;
			current = current.next;
		}

		return null;
		
	}
	removeAt(position){				//列表特定位置移除一项
		if(position > this._length || position < 0){
			return false;
		}

		let index = 0;
			current = this._head,
			previous = null;

		while(index++ < position){
			previous = current;
			current = current.next;
		}

		if(current){
			previous.next = current.next;
			this._length--;

			return current;
		}
		return null

	}
	indexOf(element){				//返回元素在列表中的索引
		
		if(this._length === 0){
			return -1;
		}

		let current = this._head,
			index = 0;

		while(current){
			if(current.element === element){
				return index;
			}
			current = current.next;
			index++;
		}

		return -1;
	}
	isEmpty(){
		return this._length === 0 ;
	}
	size(){
		return this._length;
	}
	toString(){
		let current = this._head,
			str = '';

		while(current){
			str = `${str},current.element`;
			current = current.next;
		}

		return str;
	}
	print(){
		console.log(this.toString());
	}

}

module.exports = LinkedList;