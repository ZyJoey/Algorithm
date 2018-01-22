/*
*二叉搜索树：只允许在左侧节点存储（比父节点）小的值，在右侧节点存储（比父节点）大（或相等）的值。
*/

function Node(key){
	this.key = key;
	this.left = null;
	this.right = null;
}
class BinarySearchTree{
	constructor() {
		this._root = null;
	}
	_insertNode(node,newNode){
		if(newNode.key < node.key){
			if(node.left === null){
				node.left = newNode;
			}else{
				this._insertNode(node.left,newNode);
			}
		}else{
			if(node.right === null){
				node.right = newNode;
			}else{
				this._insertNode(node.right,newNode);
			}
		}
	}
	_inOrderTraverseNode(node,cb){
		if(node !== null){
			_inOrderTraverseNode(node.left,cb);
			cb(node.key);
			_inOrderTraverseNode(node.right,cb);
		}
	}
	_preOrderTraverseNode(node,cb){
		if(node !== null){
			cb(node.key);
			_preOrderTraverseNode(node.left,cb);
			_preOrderTraverseNode(node.right,cb);
		}
	}
	_postOrderTraverseNode(node,cb){
		if(node !== null){
			_postOrderTraverseNode(node.left,cb);
			_postOrderTraverseNode(node.right,cb);
			cb(node.key);
		}
	}
	_minNode(node){
		if(node){
			while(node && node.left !== null){
				node = node.left;
			}
			return node.left;
		}	
		return null;
	}
	_maxNode(node){
		if(node){
			while(node && node.right !== null){
				node = node.right;
			}
			return node.right;
		}
		return null;
	}
	_searchNode(node,key){
		if(node === null){
			return false;
		}
		if(key < node.key){
			return this._searchNode(node.left,key);
		}else if(key > node.key){
			return this._searchNode(node.right,key);
		}else{
			return true;
		}
	}
	_removeNode(node,key){
		if(node === null){
			return null;
		}
		if(key < node.key){

		}
	}
	insert(key){
		const newNode = new Node(key);
		if(this._root === null){
			this._root = newNode;
		}else{
			this._insertNode(root,newNode);
		}
	}
	search(key){
		return searchNode(this._root,key);
	}
	inOrderTraverse(cb){		//中序遍历,以从最小到最大的顺序访问所有节点（应用：对树进行排序操作）
		this._inOrderTraverseNode(this._root,cb);
	}
	preOrderTraverse(cb){		//先序遍历，以优先于后代节点的顺序访问每个节点（应用：打印一个结构化的文档）
		this._preOrderTraverseNode(this._root,cb);
	}
	postOrderTraverse(cb){	//后序遍历，先访问节点的后代节点，再访问节点本身（应用：计算一个目录和它的子目录所有文件所占空间大小）
		this._postOrderTraverseNode(this._root,cb);
	}
	min(){
		return this._minNode(this._root);
	}
	max(){
		return this._maxNode(this._root);
	}
	remove(key){
		return this._removeNode(this._root,key);
	}

}