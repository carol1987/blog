
/**

	typeof��instanceof���÷�
		typeof(x): 
			��;���ж�һ�����������ͣ��������ͻ��Ƕ���
			
			δ����(var a;����aδ����):  "undefined"
			                     ����:  "number"
			                   �ַ���:  "string"
			                   ����ֵ:  "boolean"
			          ����,�����null:  "object"
			                     ����:  "function"
			
		instanceof:
			��;���ж�һ�������Ƿ�ĳ������������ʵ��
			ʵ�ʣ�instanceof�������[[prototype]] chain
			      a instanceof B���鿴����B��prototype�����Ƿ��ڶ���a��[[prototype]]����
				  
 */
 

/**

	 �ж�һ������������
	 
	//1��d�Ƿ�Ϊnull
	d == null;

	//2���ж�typeof d��ֵ
	typeof d;

	//3��typeof dΪobject�������ж��Ƿ�Ϊĳ������������ʵ���������жϾ��������
	typeof d == 'object' && d instanceof Object; //true
	typeof d == 'object' && d instanceof Date; //true

	//�жϾ�������
	typeof d == 'object' && d.constructor == Object; //false
	typeof d == 'object' && d.constructor == Date; //true
	
	//����toString���ж�
	Object.prototype.toString.call(d);
	[object Number]
	[object Boolean]
	[object String]
	[object Undefined]
	[object Null]
	
	[object Object]
	[object Array]
	[object Date]
	[object Function]
	[object RegExp]
	[object Error]

*/
 

 
 
//---------- ����instanceof��typeof -----------

var d = new Date();
log('typeof d: ' + (typeof d)); //object
log('d instanceof Object: ' + (d instanceof Object)); //true
log('d instanceof Date: ' + (d instanceof Date)); //true
log('d.constructor == Object: ' + (d.constructor == Object)); //false
log('d.constructor == Date: ' + (d.constructor == Date)); //true
log('typeof d == "object" && d.constructor == Date: ' + (typeof d == "object" && d.constructor == Date)); //true
log('toString(d): ' + (Object.prototype.toString.call(d))); //[object Date]




