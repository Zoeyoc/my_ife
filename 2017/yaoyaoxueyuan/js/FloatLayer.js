var FloatLayer = function(ele) {
  this.ele = ele;
  this.mask = null;
  this.init();
};
FloatLayer.prototype = {
 show: function() {
    this.ele.style.display = "block";
    this.mask.style.display = "block";
  }, 
 hide: function() {
    this.ele.style.display = "none";
    this.mask.style.display = "none";

  },  
 startDrag: function(evt){
        var self = this;
        var oEvent = evt||event;
            var distanceX = oEvent.clientX - self.ele.offsetLeft;
            var distanceY = oEvent.clientY - self.ele.offsetTop;
            document.onmousemove = function(evt) {
               var oEvent = evt||event;
               var left = oEvent.clientX - distanceX;
               var top = oEvent.clientY - distanceY;
               self.ele.style.top = top + "px";
               self.ele.style.left = left + "px";
            }
                //添加鼠标抬起事件
            document.onmouseup = function () {
                    //清空事件
                  document.onmousemove = null;
                  self.onmouseup = null;
            }
                            
  },
  init: function() {

    this.mask = document.createElement('div');
    this.mask.style.zIndex = 99999;
    this.mask.style.backgroundColor = 'rgba(108,108,108,0.7)';
    this.mask.style.width = window.screen.width + 'px';
    this.mask.style.height = window.screen.height + 'px';
    this.mask.style.position = 'fixed';
    document.body.insertBefore(this.mask,document.body.childNodes[0]);
    var self = this;
    addEventHandler(this.mask,'click',function(evt) {
      self.hide()
    });
    // addEventHandler(this.mask,'click',function(e) {
    //   e.stopPropagation();
    // });
  }
} 
