const should = require('should');

const Stack = require('../structure/Stack');

const Set = require('../structure/Set');

describe('测试栈',() => {
	const stack = new Stack();

	it('插入a,b,c元素',() => {
		stack.push('a','b','c');	
	})
	it('返回元素个数',()=>{
		stack.size().should.be.eql(3);
	})
	it('删除栈顶元素',()=>{
		stack.pop().should.be.eql('c');
		stack.size().should.be.eql(2);
	})
	it('查询栈顶元素',()=>{
		stack.peek().should.be.eql('b');
		stack.size().should.be.eql(2);
	})

	it('栈是否为空',()=>{
		stack.isEmpty().should.be.false();
	})
	it('打印当前栈',()=>{
		stack.print();
	})

	it('清空栈',()=>{
		stack.clear();
		stack.isEmpty().should.be.true();
	})

});

describe('测试集合',()=>{
	const setA = new Set();
	const setB = new Set();

	it('A集合添加16，17，18,19',() => {
		setA.add(16);
		setA.add(17);
		setA.add(18);	
		setA.add(19);	
		setA.size().should.be.eql(4);
	});

	it('A集合删除19',() => {
		setA.remove(19);	
		setA.size().should.be.eql(3);
	});

	it('B集合添加16，17，18，19，20，21',()=>{
		setB.add(16);
		setB.add(17);
		setB.add(18);
		setB.add(19);
		setB.add(20);	
		setB.add(21);	
		setB.size().should.be.eql(6);
	})

	it('A{16,17,18}与B{16，17，18，19，20，21}的并集',()=>{
		setA.union(setB).values().should.be.eql(['16','17','18','19','20','21']);
	})

	it('A{16,17,18}与B{16，17，18，19，20，21}的交集',()=>{
		setA.intersection(setB).values().should.be.eql(['16','17','18']);
	})

	it('B{16，17，18，19，20，21}与A{16，17，18}的差集',()=>{
		setB.difference(setA).values().should.be.eql(['19','20','21']);
	})

	it('A{16,17,18}是B{16，17，18，19，20，21}的子集',()=>{
		setA.subset(setB).should.be.true;
	})

})

/*describe('测试散列表',()=>{
	
})*/

describe('测试二叉搜索树',()=>{
	
})