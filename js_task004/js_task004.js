/*--------------Queue类的定义和测试代码----------------*/
function Queue(){
        this.dataStore = [];
        this.lIn = lIn;
        this.rIn = rIn;
        this.lOut = lOut;
        this.rOut = rOut;
        this.empty = empty;
}

//队首入
function lIn(element){
    this.dataStore.unshift(element);
}
//队末入
function rIn(element){
    this.dataStore.push(element);
}
//队首出
function lOut(){
    return this.dataStore.shift();
}
//队末出
function rOut(){
    return this.dataStore.pop();
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
        return true; 
      } else { 
        alert("请输入数字！")
        return false; 
      } 
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
        childDiv.innerHTML = queue[i];
        childDiv.style.cssText = 'display:inline; height:50px; margin:5px; background:red';
        div.appendChild(childDiv);
    }
}
window.onload = function() {
    var leftIn = document.getElementById("leftIn");
    var rightIn = document.getElementById("rightIn");
    var leftOut = document.getElementById("leftOut");
    var rightOut = document.getElementById("rightOut");
    var q = new Queue();
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

}


