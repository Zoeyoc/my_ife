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

//队首入
function lIn(){
  var arr = $('#key').value.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function(a){return a!=''}) ;    
  var str = render(arr);
  var str2 = $('#queue').innerHTML;
  str += str2;
  $('#queue').innerHTML = str;
}

//队末入
function rIn(){
  var arr = $('#key').value.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function(a){return a!=''}) ;
  var str = render(arr);
  $('#queue').innerHTML += str;
}
function render(arr) {
  var newEle = document.createElement("div");
  var str = "";
  for(var i in arr) {
    str += "<div class=\"arr\">" + arr[i] + "</div>";
  }
  return str;
}
//队首出
function lOut(){
    var first = $('#queue').firstChild;
    alert(first.innerHTML);
    $('#queue').removeChild(first);
}
//队末出
function rOut(){
    var last = $('#queue').lastChild;
    alert(last.innerHTML);
    $('#queue').removeChild(last);
}
//查询字符
function query() {
  var queryArr = document.getElementsByClassName("arr"); 
  //消除之前的查询
  var span1 = "<span>";
  var span2 = "</span>";
  // for(i = 0;i<queryArr.length;i++) {
  //     var ele = queryArr[i].innerHTML;
  //     console.log(ele);
  //     ele = ele.replace(new RegExp(span1,"g"),"");
  //     ele = ele.replace(new RegExp(span2,"g"),"");
  //     queryArr[i].innerHTML = ele;
  //   }
  var keyword = $('#query-text').value;
  if(keyword!=null){
    for(i = 0;i<queryArr.length;i++) {
      var ele = queryArr[i].innerHTML;
      console.log(ele);
      ele = ele.replace(new RegExp(span1,"g"),"");
      ele = ele.replace(new RegExp(span2,"g"),"");
      ele = ele.replace(new RegExp(keyword,"g"),"<span>" + keyword + "</span>");
      queryArr[i].innerHTML = ele;
    }
  }
}
function IsNotEmpty(input) { 
      if (input != '') { 
        return true; 
      } else { 
        alert("输入为空！")
        return false; 
      } 
    }

function init() {
    var leftIn = $('#leftIn');
    var rightIn = $('#rightIn');
    var leftOut = $('#leftOut');
    var rightOut = $('#rightOut');
    var queryBtn = $('#query');
    addEventHandler(leftIn,'click',lIn);
    addEventHandler(rightIn,'click',rIn);
    addEventHandler(leftOut,'click',lOut);
    addEventHandler(rightOut,'click',rOut);
    addEventHandler(queryBtn,'click',query);
} 
init();

