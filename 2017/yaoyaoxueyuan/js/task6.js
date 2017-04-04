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
var dragArea = $("#title");
var loginButton = $("#loginButton");
function init() {
  var login = new FloatLayer($("#login"));

	addEventHandler(dragArea,'mousedown',function(evt){
    login.startDrag(evt)
  });
  login.hide();
  addEventHandler(loginButton,'click',function(){
    login.show();
  });

}
init();

