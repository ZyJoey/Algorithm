class Stack{
	constructor() {
		this._stack = [];	
	}
	push(...element){		//添加栈顶元素
		return this._stack.push(...element);
	}
	pop(){			//删除栈顶元素
		return this._stack.pop();
	}
	peek(){			//返回栈顶元素（不对栈做任何修改）
		return this._stack[this._stack.length - 1];
	}
	isEmpty(){		//栈是否为空
		return this._stack.length === 0;
	}
	clear(){		//清空栈
		this._stack = [];
	}
	size(){			//返回栈里的元素个数
		return this._stack.length;
	}
	print(){
		console.log(this._stack.toString());
	}
}

module.exports = Stack;