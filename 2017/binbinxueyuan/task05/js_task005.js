function addEventHandler(ele, event, hanlder) {
    if (ele.addEventListener) {
        ele.addEventListener(event, hanlder, false);
    } else if (ele.attachEvent) {
        ele.attachEvent("on"+event, hanlder);
    } else  {
        ele["on" + event] = hanlder;
    }
}

//队首入
function lIn(element){
    newRandom = true;
     var newEle = document.createElement("div");
    if (que.length<60) {
        newEle.style.height = element*4 +"px";
        newEle.innerHTML = element;
        newEle.setAttribute('class','q');
        div.insertBefore(newEle,que[0]);
        addEventHandler(newEle,'click',function() {removeEle(newEle)});

    }else{
        alert("元素不能超过60个！")
}
}
//队末入
function rIn(element){
      newRandom = true;
    var newEle = document.createElement("div");
    if (que.length<60) {
        newEle.style.height = element*4 +"px";
        newEle.innerHTML = element;
        newEle.setAttribute('class','q');
        div.appendChild(newEle);
    }else{
        alert("元素不能超过60个！")
    }
}
function removeEle(ele) {
  div.removeChild(ele);
}
//队首出
function lOut(){
    first = div.firstChild;
    alert(first.innerHTML);
    div.removeChild(first);
}
//队末出
function rOut(){
    last = div.lastChild;
    alert(last.innerHTML);
    div.removeChild(last);
}

function IsNotEmpty(input) { 
      if (input != '') { 
        return true; 
      } else { 
        alert("输入为空！")
        return false; 
      } 
    }
 
 
 //验证数字(double类型) [可以包含负号和小数点] 
function IsNumber(input) { 
      var regex = /^-?\d+$|^(-?\d+)(\.\d+)?$/; 
      if (input.match(regex)) { 
            if(input>=10&&input<=100){
                return true;
            }
            else{
               alert("请输入数字10-100");
               return false;
            }       

      } else { 
        alert("请输入数字");
        return false; 
      } 
}

var newRandom;
function randomNum() {
   newRandom = true;
   var div = document.getElementById("queue");
    while(div.hasChildNodes()) //当div下还存在子节点时 循环继续
    {
        div.removeChild(div.firstChild);
        }
  var key;
  for(var i=0;i<30;i++){
    key = parseInt(Math.random()*90+10);
    lIn(key);
    
  }
}
function swap(ele1, ele2) {
    var temp1 = ele1.style.height;
    var temp2 = ele1.innerHTML;
   
    ele1.style.height = ele2.style.height;
    ele1.innerHTML = ele2.innerHTML;
    ele2.style.height = temp1;
    ele2.innerHTML = temp2;


    // 如果只是相邻元素swap，可以使用下面这个方法直接交换dom元素
    // 但是考虑到非冒泡排序算法使用swap时不一定是交换相邻元素(比
    // 如插入排序)，所以使用交换高度的方法。注意ele.style.height
    // 和ele.offsetHeight都需要互换

    // ele1.parentNode.insertBefore(ele2, ele1);
};
function bubbleSort() {
      if(newRandom == true){
        newRandom = false;
      var arr = document.getElementsByClassName("q");
      var len = arr.length;
      var i = 0,j = 0;
      timer = setInterval(function() {
        if(newRandom == false){
        if(j == len - 1 - i) {
            i ++;
            j = 0;
        }
        if (i == len-1 ) {
            clearInterval(timer);
            return;
        }else if(arr[j].innerHTML>arr[j+1].innerHTML){         
          swap(arr[j],arr[j+1]);
        }
        j ++;
        
      }else {
          i = 0;
          j = 0;
          return;
        }
      },100);
    }  
}

function selectionSort() {
  if(newRandom == true){
      newRandom = false;

      var arr = document.getElementsByClassName("q");
      var len = arr.length;
      var i = 0,j = 1;
      console.log(j);
      var minIndex = i;
      timer = setInterval(function() {
        if(newRandom == false){
          if(i !=arr.length){
            
            if(j != arr.length){
              if(arr[j].innerHTML<arr[minIndex].innerHTML)
                 minIndex = j;
                 j++;

              }else {
                   swap(arr[minIndex],arr[i]);
                   i++;
                   j = i + 1;
                   minIndex = i;
              }
        }else {
          clearInterval(timer);
            return;
        }  
      }else {
          i = 0;
          j = 1;
          return;
        }
      },100);
    }  
}

function insertionSort() {
      if(newRandom == true){
        newRandom = false;
      var arr = document.getElementsByClassName("q");
      var len = arr.length;
      var i = 1,j = 0;
      // console.log(j);
      var key = arr[i];
      timer = setInterval(function() {
        if(newRandom == false){
          if(i != len) {
            if((j>=0)&&(arr[j].innerHTML>key.innerHTML)){
              swap(arr[j+1],arr[j]);
              j--;
            }else {
              swap(arr[j+1],key);
              i ++;
              key = arr[i];
              j = i-1;
            }
          }else {
            clearInterval(timer);
          }
        
      }else {
          i = 1;
          j = 0;
          return;
        }
      },100000);
    }  
}

var div = document.getElementById("queue");
var que = document.getElementsByClassName("q");
var leftIn = document.getElementById("leftIn");
var rightIn = document.getElementById("rightIn");
var leftOut = document.getElementById("leftOut");
var rightOut = document.getElementById("rightOut");
var random = document.getElementById("random");
var bubSort = document.getElementById("bubSort");
var selectSort = document.getElementById("selectionSort");
var insertSort = document.getElementById("insertionSort");
    leftIn.onclick = function() {
        var key = document.getElementById("key").value;
        if(IsNotEmpty(key)&&IsNumber(key)){
             key = parseFloat(key);
             // console.log(key);
             lIn(key);
             
         }
    }
    rightIn.onclick = function() {
        var key = document.getElementById("key").value;
        if(IsNotEmpty(key)&&IsNumber(key)){
             key = parseFloat(key);
             rIn(key);       
         }
    }
    leftOut.onclick = function() {
        lOut();

    }
    rightOut.onclick = function() {
        rOut();
    }
    addEventHandler(random,'click',randomNum);
    addEventHandler(bubSort,'click',bubbleSort);
    addEventHandler(selectSort,'click',selectionSort);
    addEventHandler(insertSort,'click',insertionSort);




