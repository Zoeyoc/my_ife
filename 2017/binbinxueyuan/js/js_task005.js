/*--------------Queue类的定义和测试代码----------------*/
function Queue(){
        this.dataStore = [];
        this.lIn = lIn;
        this.rIn = rIn;
        this.lOut = lOut;
        this.rOut = rOut;
        this.empty = empty;
        this.del = del;
}

//队首入
function lIn(element){
    if (this.dataStore.length<60) {
        this.dataStore.unshift(element);
    }else{
        alert("元素不能超过60个！")
    }
}
//队末入
function rIn(element){
    if (this.dataStore.length<60) {
         this.dataStore.push(element);
    }else{
        alert("元素不能超过60个！")
    }
}
//队首出
function lOut(){
    return this.dataStore.shift();
}
//队末出
function rOut(){
    return this.dataStore.pop();
}

function del(id) {
    return this.dataStore.splice(id,1);
}
//判断数组是否为空
function empty(){
    if(this.dataStore.length == 0){
        return true;
    }else{
        return false;
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
function addEventHandler(ele, event, hanlder) {
    if (ele.addEventListener) {
        ele.addEventListener(event, hanlder, false);
    } else if (ele.attachEvent) {
        ele.attachEvent("on"+event, hanlder);
    } else  {
        ele["on" + event] = hanlder;
    }
}
function randomNum() {
  q.dataStore = [];
  var key;
  for(var i=0;i<30;i++){
    key = parseInt(Math.random()*90+10);
    q.lIn(key);
    
  }
  showQueue(q.dataStore);
}
function swap(ele1, ele2) {
    var temp1 = ele1.style.height;
    var temp2 = ele1.innerHTML;
    var temp3 = ele1.id;
   
    ele1.style.height = ele2.style.height;
    ele1.innerHTML = ele2.innerHTML;
    ele1.id = ele2.id;
    ele2.style.height = temp1;
    ele2.innerHTML = temp2;
    ele2.id = temp3;

    // 如果只是相邻元素swap，可以使用下面这个方法直接交换dom元素
    // 但是考虑到非冒泡排序算法使用swap时不一定是交换相邻元素(比
    // 如插入排序)，所以使用交换高度的方法。注意ele.style.height
    // 和ele.offsetHeight都需要互换

    // ele1.parentNode.insertBefore(ele2, ele1);
};
function bubbleSort(arr) {
      var len = arr.length;
      var i = 0,j = 0;
      timer = setInterval(function() {
        if (i == len) {
            clearInterval(timer);
        }
        if(j == len - 1 - i) {
            i ++;
            j = 0;
        }
        if(arr[j].innerHTML>arr[j+1].innerHTML){
          swap(arr[j],arr[j+1]);
        }
        j ++;
      },100);
        

}


function showQueue(queue) {
    var div = document.getElementById("queue");
         while(div.hasChildNodes()) //当div下还存在子节点时 循环继续
        {
        div.removeChild(div.firstChild);
        }
    for(i=0;i<queue.length;i++){

        var childDiv = document.createElement('div');
        childDiv.id = i;
        childDiv.className = 'q';
        childDiv.innerHTML = queue[i];
        childDiv.onclick = function(){
            
            console.log(que);
            q.del(this.id);
            div.removeChild(this);
            k = 0;
            for(j=0;j<que.length;j++){
                que[j].id = k++; 
            }
        }
        childDiv.style.cssText = "background:red;height:"+ 5*queue[i] + "px;border:1px solid black;";


        div.appendChild(childDiv);
    }
}
q = new Queue();
var div = document.getElementById("queue");
var que = document.getElementsByClassName("q");
window.onload = function() {
    var leftIn = document.getElementById("leftIn");
    var rightIn = document.getElementById("rightIn");
    var leftOut = document.getElementById("leftOut");
    var rightOut = document.getElementById("rightOut");
    var random = document.getElementById("random");
    var bubSort = document.getElementById("bubSort");
    leftIn.onclick = function() {
        var key = document.getElementById("key").value;
        if(IsNotEmpty(key)&&IsNumber(key)){
             key = parseFloat(key);
             // console.log(key);
             q.lIn(key);
             console.log(q.dataStore);
             showQueue(q.dataStore);
         }
    }
    rightIn.onclick = function() {
        var key = document.getElementById("key").value;
        if(IsNotEmpty(key)&&IsNumber(key)){
             key = parseFloat(key);
             // console.log(key);
             q.rIn(key);
             showQueue(q.dataStore);

             console.log(q.dataStore);
         }
    }
    leftOut.onclick = function() {
        alert(q.lOut());
        console.log(q.dataStore);
        showQueue(q.dataStore);

    }
    rightOut.onclick = function() {
        alert(q.rOut());
        console.log(q.dataStore);
        showQueue(q.dataStore);

    }
    addEventHandler(random,'click',randomNum);
    addEventHandler(bubSort,'click',function(){
      bubbleSort(que);
      console.log(que[0].style.height);
    }
      );
}


