

//���캯��
function Person(name, age) {
	this.name = name;
	this.age = age;
};

//new��Person����һ��Personʵ����thisָ��js���洴����һ�����󣬲������������
var p1 = new Person('Bob', 28);

//Person��Ϊ���溯�����ã�thisָ��window������ֵundefined
var p2 = Person('Bob', 28);