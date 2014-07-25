
/**
 *  �̳У��༶�̳�
 *
 *	Object
 *		 |
 *		 Person
 *		      |
 *			   FE
 *		    	 |
 *		    	 CssFE
 *
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
	//��ӶԸ���ԭ�Ͷ��������
	subClass.superclass = superClass.prototype;
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
	FE.superclass.constructor.apply(this, arguments);
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


// CssFE constructor
function CssFE(name, age, level) {
	CssFE.superclass.constructor.apply(this, arguments);
}

// CssFE extend FE
extend(CssFE, FE);

CssFE.prototype.writeStyle = function() {
	log('Call CssFE.prototype.writeStyle');
}


// create cssFE instance
log('/** Create cssFE */');
var cssFE = new CssFE('Bob', 30, 'junior');

log('// call cssFE method');
cssFE.eat();
cssFE.say();
cssFE.coding();
cssFE.writeStyle();

log('// test instanceof');
log('cssFE instanceof Object: ' + (cssFE instanceof Object));
log('cssFE instanceof Person: ' + (cssFE instanceof Person));
log('cssFE instanceof FE: ' + (cssFE instanceof FE));
log('cssFE instanceof CssFE: ' + (cssFE instanceof CssFE));

log('// test constructor');
log('Person.prototype.constructor == Person: ' + (Person.prototype.constructor == Person));
log('FE.prototype.constructor == FE: ' + (FE.prototype.constructor == FE));
log('CssFE.prototype.constructor == CssFE: ' + (CssFE.prototype.constructor == CssFE));


