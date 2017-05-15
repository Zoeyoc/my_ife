$ = function(ele) {
  return document.querySelector(ele);
}
function addEventHandler(ele,event,hanlder) {
	if(ele.addEventListener) {
		ele.addEventListener(event,hanlder,false);
	} else if(ele.attachEvent) {
		ele.attachEvent("on" + event,hanlder);
	} else {
		ele["on" + event] = hanlder;
	}
}
var table1 = $(".table");
var data = {
	head:['姓名','语文','数学','英语'],
	isSort:[1,1,0,1],
	body:{
		1:['小李',57,98,75],
		2:['小红',75,96,77]
	}
}
var table = new Table(table1,data);
