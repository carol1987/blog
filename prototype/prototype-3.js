
/**
 *  �̳У�ͨ�������м�ԭ�Ͷ���ʹ������ֻ�̳и���ԭ���еķ��������ԣ����̳и���ʵ������
 */
 

 
 
/**
 * @method extend
 * @description ʵ������̳и���
 * @param subClass {Function} ���๹�캯��
 * @param superClass {Function} ���๹�캯��
 */
function extend(subClass, superClass) {
	var F = function() {};
	F.prototype = superClass.prototype;
	subClass.prototype = new F();
	subClass.prototype.constructor = subClass;
}


// Person constructor
function Person(name, age) {
	this.name = name;
	this.age = age;
};

Person.prototype.say = function() {
	log('Call Person.prototype.say');
}

Person.prototype.eat = function() {
	log('Call Person.prototype.eat');
}


// FE constructor
function FE(name, age, level) {
	// ���ø��๹�캯�����̳и������ԣ���ʼ�����ԣ�
	//Person.call(this, name, age);
	Person.apply(this, arguments);
	this.level = level;
}

// FE extend Person
extend(FE, Person);

FE.prototype.say = function() {
	log('Call FE.prototype.say');
}

FE.prototype.coding = function() {
	log('Call FE.prototype.coding');
}


// create FE instance
log('/** Create fe */');
var fe = new FE('Bob', 28, 'junior');
log('// call fe method');
fe.eat();
fe.say();
fe.coding();

log('// test instanceof');
testInstanceOf(fe, 'fe', 'FE');

log('// test constructor');
log('fe.constructor == FE: ' + (fe.constructor == FE));
log('fe.constructor == Person: ' + (fe.constructor == Person));


/**

���ۣ�
	1��ͨ��FE.prototype = new Person()��ʹ������ԭ�Ͷ������а��������ԭ�Ͷ������Ǵﵽ�˼̳и���ԭ�ͷ�����Ŀ�ģ�
	   ���ҷ�������ʵ���͸���֮��ļ̳й�ϵ(����instanceof�жϹ���)��
	2������ͨ�����ø��๹�캯����ʵ�������ԣ�
	3��ͨ��FE.prototype.constructor = FE����������ԭ�Ͷ����constructor��
	4��ͨ�������м�ԭ�Ͷ���ʹ������ֻ�̳и���ԭ���еķ��������ԣ����̳и���ʵ�����ԣ�
	5��������ԭ���ж���ķ����������θ���ԭ���е�ͬ��������
	
*/