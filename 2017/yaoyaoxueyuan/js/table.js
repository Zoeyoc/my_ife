var Table = function(ele,data){
	this.ele = ele;
	this.data = data;
	this.init();
}
Table.prototype = {
	init: function() {
		this.render();
		this.addClickEvt();
	},
	render: function() {
		function addTbody(e){

			return '<td>'+e+'</td>';
		}
		var str = '';
		str += '<table><thead><tr>';
		for (let i=0;i<this.data.head.length;i++) {
			if(this.data.isSort[i]==1){
				str += '<th>'+this.data.head[i]+'<span class="up"></span><span class="down"></span></th>';
			}else {
				str += '<th>'+this.data.head[i]+'</th>';
			}
		}
		str += '</tr></thead><tbody>';
		for (let j in this.data.body){
			str += '<tr>';
			str += this.data.body[j].map(addTbody).join('');
			str += '</tr>';
		}
		str += '</tbody></table>';
		this.ele.innerHTML = str;
	},
	upSort: function(btn) {
		var thNode = btn.parentNode;
		var num = $("head").index(thNode);
	},
	addClickEvt: function() {
		let upClick = document.getElementsByClassName('up');
		console.log(upClick);
		for(let i in upClick){addEventHandler(i,'click',this.upSort(i))};
	}
}
	

