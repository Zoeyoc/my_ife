function addEventHandler(ele, event, hanlder) {
    if (ele.addEventListener) {
        ele.addEventListener(event, hanlder, false);
    } else if (ele.attachEvent) {
        ele.attachEvent("on"+event, hanlder);
    } else  {
        ele["on" + event] = hanlder;
    }
}
$ = function(ele) {
  return document.querySelector(ele);
}
var timer = null;
function changeColor(stack) {
	var i = 0;
	stack[i].style.backgroundColor = 'blue';

		timer = setInterval(function(){
				i++;
				if(i<stack.length){
					stack[i-1].style.backgroundColor = 'white';
					stack[i].style.backgroundColor = 'blue';
				}else {
					clearInterval(timer);
					stack[i-1].style.backgroundColor = 'white';
				}
				
			},1000);
	

}
var stack;
function preOrder(node) {
	if(node!=null) {
		stack.push(node);
		preOrder(node.firstElementChild);
		preOrder(node.lastElementChild);
	}
}
function inOrder(node) {
	if(node!=null) {
		inOrder(node.firstElementChild);
		stack.push(node);
		inOrder(node.lastElementChild);
	}
}
function postOrder(node) {
	if(node!=null) {
		postOrder(node.firstElementChild);
		postOrder(node.lastElementChild);
		stack.push(node);
	}
}

var qianxu = $('#qianxu');
addEventHandler(qianxu,'click',function() {
	reset();
	preOrder($('#root'));
	changeColor(stack);
});
addEventHandler($('#zhongxu'),'click',function() {
	reset();
	inOrder($('#root'));
	changeColor(stack);
});
addEventHandler($('#houxu'),'click',function() {
	reset();
	postOrder($('#root'));
	changeColor(stack);
});
function reset() {
	stack = [];
	var divs = document.getElementsByTagName('div');
	for (var i = 0; i < divs.length; i++) {
		divs[i].style.backgroundColor = '#fff';
	}
	clearInterval(timer);
	
}