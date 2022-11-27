var Body = {setcolor : function(color) {document.querySelector('body').style.color = color;},};
	Body["setbackgroundColor"] = function(color){document.querySelector('body').style.backgroundColor = color;};
	
var Article = {};
	Article["setcolor"] = function(color){document.querySelector('article').style.color = color;};
	
var Header ={};
	Header["setbordercolor"] = function(color){document.querySelector('header').style.borderColor = color;};

var colorchip = {
	"Pink" : "#D16893",
};
function entireColorChange(color){
	var divlist = document.querySelectorAll('div'); var alist = document.querySelectorAll('a');
		var i = 0; 
		while(i < divlist.length){divlist[i].style.borderColor = color; i=i+1;}
		var k = 0;
		while(k < alist.length){alist[k].style.color = color; k=k+1;}
}

function nightDayShift(SELF){								   
							if( SELF.value ==='NIGHT.ver'){ 
									
							Body.setbackgroundColor('black');
							Body.setcolor('white');
							Header.setbordercolor('white');
							SELF.value = 'DAY.ver';
							entireColorChange('white');
							}																	 
							else { 
							Body.setbackgroundColor('white');
							Body.setcolor('black');
							Header.setbordercolor(colorchip.Pink);
							SELF.value = 'NIGHT.ver';				   
							entireColorChange(colorchip.Pink);
							}
}// 위 함수에서 if(){}와 else{}서 SELF.value를 x로 대체하면 안된다. 왜 인지는 모르겠다.//
  // colorchip이라는 object를 정의하고 key(또는 property) 중 하나를 Pink라 하고 값을 #D16893 으로 하였다.//
  // 원래는 document라는 object에서 querySelector 또는 querySelectorAll 같은 method를 이용하여 함수를 설계해야 하나 refactoring을 위해서 각 중요 태그 중 앞자리만 대문자로 한 변수를 object로 정의한 후 각 method를 만들어서 정의한 후 그것을 사용하였다. //