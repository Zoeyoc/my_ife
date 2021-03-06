/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
var i = 0;
function addAqiData() {
  // var city = document.getElementById("aqi-city-input").value;
  // var quality = document.getElementById("aqi-value-input").value;  

  // if(!isChinaOrLett(city)||!isNumber(quality)){
  //  if(!isChinaOrLett(city)){
      
  //  }
  //  if(!isNumber(quality)){
      
  //  }
  // }
  // else {
  //  var cityReset = document.getElementById("cityReset");
  //  var qualityReset =  document.getElementById("qualityReset");
    // cityReset.style.display = "none";
    // qualityReset.style.display = "none";
  if(city.onblur()&&quality.onblur()){
    aqiData[i] = "\"" + city.value + "\":" + quality.value;
    console.log(aqiData[i]);
    i++;
  }
  
}
/**
 * 判断是否是汉字、字母、数字组成
 */
var city = document.getElementById("aqi-city-input");

city.onblur = function(){     
  str = trim(this.value);

  var regu = "^[a-zA-Z\u4e00-\u9fa5]+$";   
  var re = new RegExp(regu); 
  if (re.test(str)) { 
    var cityReset = document.getElementById("cityReset");
    cityReset.style.display = "none"; 
    return true; 
  }else{ 
    var cityReset = document.getElementById("cityReset");
    cityReset.style.display = "inline"; 
    return false;
    } 
  } 
/* 
用途：检查输入字符串是否符合正整数格式 
输入： 
s：字符串 
返回： 
如果通过验证返回true,否则返回false 

*/ 
var quality = document.getElementById("aqi-value-input");

quality.onblur = function (){   
  str = trim(this.value);
  var regu = "^[0-9]+$"; 
  var re = new RegExp(regu); 
  if (str.search(re) != -1) {
    var qualityReset =  document.getElementById("qualityReset");
    qualityReset.style.display = "none"; 
    return true; 
  } else { 
    var qualityReset =  document.getElementById("qualityReset");
    qualityReset.style.display = "inline";
    return false; 
  } 
} 
/**去掉字符串前后所有空格*/
function trim(str){ 
  return str.replace(/(^\s*)|(\s*$)/g, ""); 
} 
/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
  var qtable = document.getElementById("aqi-table");
  qtable.setAttribute("border","1");
  qtable.setAttribute("width","20%");

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
  var start = aqiData[i-1].indexOf('"');
  var stop = aqiData[i-1].lastIndexOf('"'); 
  var tr = document.createElement("tr");
  tr.innerHTML = "<td>" + aqiData[i-1].substring(start+1,stop) + "</td><td>" + aqiData[i-1].substring(stop+2)  +"</td><td><button class=\"delete\" id=\"" + (i-1) + "\">删除</button></td>";
  var qtable = document.getElementById("aqi-table");
  qtable.appendChild(tr);

  //给新添加的数据绑定删除时间
  var btn = document.getElementsByClassName("delete");
  btn[i-1].onclick = function() {
        // console.log(11);
        delBtnHandle(this);
        i--;
   }
    

}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(obj) {
  // do sth.
  var row1 = obj.parentNode;
  var row2 = row1.parentNode;
  var tab = row2.parentNode;
  console.log(row2);
  tab.removeChild(row2);
  renderAqiList();
}

function init() { 

// 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  var obj = document.getElementById("add-btn");
  renderAqiList();
  obj.onclick = function(){
     // addAqiData();
     addBtnHandle();
  }
 
}

init();