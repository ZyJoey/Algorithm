class Queue{
	constructor() {
		this._queue = [];
	}
	enqueue(...element){	//入队
		return this._queue.push(...element);
	}
	dequeue(){		//出队
		return this._queue.shift();
	}
	front(){		//返回队列第一个元素
		return this._queue[0];
	}
	isEmpty(){
		return this._queue = [];
	}
	size(){
		return this._queue.length;
	}
	print(){
		console.log(this._queue.toString());
	}
}

module.exports = Queue;