
/**
 *  ���������캯����ԭ��
 *  �� ������ ʵ�� ʵ������
 */
 
 
 

//���캯��
function Person(name, age) {
	//this��ʼ��ʵ�����Ժͷ���
	this.name = name;
	this.age = age;
	this.say = function() {
		log('Call Person instance say');
	}
};

//��������Ժ��෽��
Person.MaxAge = '200';
Person.eat = function() {
	log('Call Person.eat');
}


//���ԭ�����Ժ�ԭ�ͷ���
Person.prototype.age = '50';
Person.prototype.walk = function() {
	log('Call Person.prototype.walk');
}


//����Personʵ��
var p = new Person('Bob', 28);

//���ʵ������������
p.sex = 'male';
p.sleep = function() {
	log('Call p.sleep');
}

log('Person.MaxAge: ' + Person.MaxAge);
log('p.MaxAge: ' + p.MaxAge);
log('p.age: ' + p.age);
p.say();
p.walk();
p.sleep();
			