webpackJsonp([4],{"8+FI":function(t,i,s){"use strict";var a=new(s("7+uW").default);i.a=a},IOPI:function(t,i,s){var a,h;
/*!
 * sChart JavaScript Library v2.0.0
 * http://blog.gdfengshuo.com/example/sChart/ | Released under the MIT license
 * Date: 2018-04-16T18:59Z
 */
/*!
 * sChart JavaScript Library v2.0.0
 * http://blog.gdfengshuo.com/example/sChart/ | Released under the MIT license
 * Date: 2018-04-16T18:59Z
 */
h=function(t){"use strict";function i(t,i,s,a){this.canvas=document.getElementById(t),this.ctx=this.canvas.getContext("2d"),this.dpi=window.devicePixelRatio||1,this.type=i,this.data=s,this.dataLength=this.data.length,this.showValue=!0,this.autoWidth=!1,this.width=this.canvas.width*this.dpi,this.height=this.canvas.height*this.dpi,this.topPadding=50*this.dpi,this.leftPadding=50*this.dpi,this.rightPadding=0*this.dpi,this.bottomPadding=50*this.dpi,this.yEqual=5,this.yLength=0,this.xLength=0,this.yFictitious=0,this.yRatio=0,this.bgColor="#ffffff",this.fillColor="#1E9FFF",this.axisColor="#666666",this.contentColor="#eeeeee",this.titleColor="#000000",this.title="",this.titlePosition="top",this.radius=100*this.dpi,this.innerRadius=70*this.dpi,this.colorList=["#1E9FFF","#13CE66","#F7BA2A","#FF4949","#72f6ff","#199475","#e08031","#726dd1"],this.legendColor="#000000",this.legendTop=40*this.dpi,this.totalValue=this.getTotalValue(),this.init(a)}return i.prototype={init:function(t){if(0===this.dataLength)return!1;if(t){var i=["topPadding","leftPadding","rightPadding","bottomPadding","radius","innerRadius","legendTop"];for(var s in t)"colorList"===s&&Array.isArray(t[s])?this[s]=t[s].concat(this[s]):i.indexOf(s)>-1?this[s]=t[s]*this.dpi:this[s]=t[s]}t.autoWidth?(this.width=this.canvas.width=this.canvas.parentNode.offsetWidth*this.dpi,this.height=this.canvas.height=this.canvas.parentNode.offsetHeight*this.dpi,this.canvas.setAttribute("style","width:"+this.canvas.parentNode.offsetWidth+"px;height:"+this.canvas.parentNode.offsetHeight+"px;")):(this.canvas.setAttribute("style","width:"+this.canvas.width+"px;height:"+this.canvas.height+"px;"),this.canvas.width*=this.dpi,this.canvas.height*=this.dpi),"bar"===this.type||"line"===this.type?(this.yLength=Math.floor((this.height-this.topPadding-this.bottomPadding-10)/this.yEqual),this.xLength=Math.floor((this.width-this.leftPadding-this.rightPadding-10)/this.dataLength),this.yFictitious=this.getYFictitious(this.data),this.yRatio=this.yLength/this.yFictitious,this.drawBarUpdate()):this.drawPieUpdate()},drawBarUpdate:function(){this.ctx.fillStyle=this.bgColor,this.ctx.fillRect(0,0,this.width,this.height),this.drawAxis(),this.drawPoint(),this.drawTitle(),this.drawBarChart()},drawPieUpdate:function(){this.ctx.fillStyle=this.bgColor,this.ctx.fillRect(0,0,this.width,this.height),this.drawLegend(),this.drawTitle(),this.drawPieChart()},drawBarChart:function(){this.ctx.fillStyle=this.fillColor,this.ctx.strokeStyle=this.fillColor;for(var t=0;t<this.dataLength;t++)this.data[t].left=this.leftPadding+this.xLength*(t+.25),this.data[t].top=this.height-this.bottomPadding-this.data[t].value*this.yRatio,this.data[t].right=this.leftPadding+this.xLength*(t+.75),this.data[t].bottom=this.height-this.bottomPadding,"line"===this.type?(this.ctx.beginPath(),this.ctx.arc(this.data[t].left+this.xLength/4,this.data[t].top,2,0,2*Math.PI,!0),this.ctx.fill(),0!==t&&(this.ctx.moveTo(this.data[t].left+this.xLength/4,this.data[t].top),this.ctx.lineTo(this.data[t-1].left+this.xLength/4,this.data[t-1].top)),this.ctx.stroke()):"bar"===this.type&&this.ctx.fillRect(this.data[t].left,this.data[t].top,this.data[t].right-this.data[t].left,this.data[t].bottom-this.data[t].top),this.showValue&&(this.ctx.font=12*this.dpi+"px Arial",this.ctx.fillText(this.data[t].value,this.data[t].left+this.xLength/4,this.data[t].top-5))},drawPieChart:function(){for(var t=this.width/2,i=this.height/2,s=0,a=0,h=0;h<this.dataLength;h++)this.ctx.beginPath(),this.ctx.fillStyle=this.colorList[h],this.ctx.moveTo(t,i),this.data[h].start=0===h?-Math.PI/2:this.data[h-1].end,this.data[h].end=this.data[h].start+this.data[h].value/this.totalValue*2*Math.PI,this.ctx.arc(t,i,this.radius,this.data[h].start,this.data[h].end),this.ctx.closePath(),this.ctx.fill(),this.data[h].middle=(this.data[h].start+this.data[h].end)/2,s=Math.ceil(Math.abs(this.radius*Math.cos(this.data[h].middle))),a=Math.floor(Math.abs(this.radius*Math.sin(this.data[h].middle))),this.ctx.strokeStyle=this.colorList[h],this.data[h].middle<=0?(this.ctx.textAlign="left",this.ctx.moveTo(t+s,i-a),this.ctx.lineTo(t+s+10,i-a-10),this.ctx.moveTo(t+s+10,i-a-10),this.ctx.lineTo(t+s+this.radius/2,i-a-10),this.ctx.stroke(),this.ctx.fillText(this.data[h].value,t+s+5+this.radius/2,i-a-5)):this.data[h].middle>0&&this.data[h].middle<=Math.PI/2?(this.ctx.textAlign="left",this.ctx.moveTo(t+s,i+a),this.ctx.lineTo(t+s+10,i+a+10),this.ctx.moveTo(t+s+10,i+a+10),this.ctx.lineTo(t+s+this.radius/2,i+a+10),this.ctx.stroke(),this.ctx.fillText(this.data[h].value,t+s+5+this.radius/2,i+a+15)):this.data[h].middle>Math.PI/2&&this.data[h].middle<Math.PI?(this.ctx.textAlign="right",this.ctx.moveTo(t-s,i+a),this.ctx.lineTo(t-s-10,i+a+10),this.ctx.moveTo(t-s-10,i+a+10),this.ctx.lineTo(t-s-this.radius/2,i+a+10),this.ctx.stroke(),this.ctx.fillText(this.data[h].value,t-s-5-this.radius/2,i+a+15)):(this.ctx.textAlign="right",this.ctx.moveTo(t-s,i-a),this.ctx.lineTo(t-s-10,i-a-10),this.ctx.moveTo(t-s-10,i-a-10),this.ctx.lineTo(t-s-this.radius/2,i-a-10),this.ctx.stroke(),this.ctx.fillText(this.data[h].value,t-s-5-this.radius/2,i-a-5));"ring"===this.type&&(this.ctx.beginPath(),this.ctx.fillStyle=this.bgColor,this.ctx.arc(t,i,this.innerRadius,0,2*Math.PI),this.ctx.fill())},drawAxis:function(){this.ctx.beginPath(),this.ctx.strokeStyle=this.axisColor,this.ctx.moveTo(this.leftPadding+.5,this.height-this.bottomPadding+.5),this.ctx.lineTo(this.leftPadding+.5,this.topPadding+.5),this.ctx.moveTo(this.leftPadding+.5,this.height-this.bottomPadding+.5),this.ctx.lineTo(this.width-this.rightPadding-.5,this.height-this.bottomPadding+.5),this.ctx.stroke()},drawPoint:function(){this.ctx.beginPath(),this.ctx.font=12*this.dpi+"px Microsoft YaHei",this.ctx.textAlign="center",this.ctx.fillStyle=this.axisColor;for(var t=0;t<this.dataLength;t++){var i=this.data[t].name,s=this.xLength*(t+1);this.ctx.moveTo(this.leftPadding+s+.5,this.height-this.bottomPadding+.5),this.ctx.lineTo(this.leftPadding+s+.5,this.height-this.bottomPadding+5.5),this.ctx.fillText(i,this.leftPadding+s-this.xLength/2,this.height-this.bottomPadding+15*this.dpi)}this.ctx.stroke(),this.ctx.beginPath(),this.ctx.font=12*this.dpi+"px Microsoft YaHei",this.ctx.textAlign="right",this.ctx.fillStyle=this.axisColor,this.ctx.moveTo(this.leftPadding+.5,this.height-this.bottomPadding+.5),this.ctx.lineTo(this.leftPadding-4.5,this.height-this.bottomPadding+.5),this.ctx.fillText(0,this.leftPadding-10,this.height-this.bottomPadding+5);for(t=0;t<this.yEqual;t++){var a=this.yFictitious*(t+1),h=this.yLength*(t+1);this.ctx.beginPath(),this.ctx.strokeStyle=this.axisColor,this.ctx.moveTo(this.leftPadding+.5,this.height-this.bottomPadding-h+.5),this.ctx.lineTo(this.leftPadding-4.5,this.height-this.bottomPadding-h+.5),this.ctx.stroke(),this.ctx.fillText(a,this.leftPadding-10,this.height-this.bottomPadding-h+5),this.ctx.beginPath(),this.ctx.strokeStyle=this.contentColor,this.ctx.moveTo(this.leftPadding+.5,this.height-this.bottomPadding-h+.5),this.ctx.lineTo(this.width-this.rightPadding-.5,this.height-this.bottomPadding-h+.5),this.ctx.stroke()}},drawTitle:function(){this.title&&(this.ctx.beginPath(),this.ctx.textAlign="center",this.ctx.fillStyle=this.titleColor,this.ctx.font=16*this.dpi+"px Microsoft YaHei","bottom"===this.titlePosition&&this.bottomPadding>=40?this.ctx.fillText(this.title,this.width/2,this.height-5):this.ctx.fillText(this.title,this.width/2,this.topPadding/2+5))},drawLegend:function(){for(var t=0;t<this.dataLength;t++)this.ctx.fillStyle=this.colorList[t],this.ctx.fillRect(10,this.legendTop+15*t*this.dpi,20,11),this.ctx.fillStyle=this.legendColor,this.ctx.font=12*this.dpi+"px Microsoft YaHei",this.ctx.textAlign="left",this.ctx.fillText(this.data[t].name,35,this.legendTop+10+15*t*this.dpi)},getYFictitious:function(t){var i=t.slice(0);i.sort(function(t,i){return-(t.value-i.value)});var s=Math.ceil(i[0].value/this.yEqual),a=s.toString().length-1;return a=a>2?2:a,Math.ceil(s/Math.pow(10,a))*Math.pow(10,a)},getTotalValue:function(){for(var t=0,i=0;i<this.dataLength;i++)t+=this.data[i].value;return t}},i},void 0===(a=function(){return h()}.call(i,s,i,t))||(t.exports=a)},PPOh:function(t,i){},S4mo:function(t,i,s){"use strict";var a=s("IOPI"),h=s.n(a),e={data:function(){return{schart:null,opt:{}}},props:{canvasId:{type:String,default:""},type:{type:String,default:"bar"},data:{type:Array,default:[]},options:{type:Object,required:!1}},mounted:function(){this.renderChart()},methods:{renderChart:function(){this.schart=null,this.opt=this.options,this.width&&this.height||(this.opt?this.opt.autoWidth=!0:this.opt={autoWidth:!0}),this.schart=new h.a(this.canvasId,this.type,this.data,this.opt)}},watch:{data:function(){this.renderChart()},options:function(){this.renderChart()},type:function(){this.renderChart()}}},o={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("canvas",{attrs:{id:this.canvasId}})])},staticRenderFns:[]},n=s("VU/8")(e,o,!1,null,null,null);i.a=n.exports},a52u:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("S4mo"),h=s("8+FI"),e={name:"dashboard",data:function(){return{name:localStorage.getItem("ms_username"),todoList:[{title:"今天要修复100个bug",status:!1},{title:"今天要修复100个bug",status:!1},{title:"今天要写100行代码加几个bug吧",status:!1},{title:"今天要修复100个bug",status:!1},{title:"今天要修复100个bug",status:!0},{title:"今天要写100行代码加几个bug吧",status:!0}],data:[{name:"2018/09/04",value:1083},{name:"2018/09/05",value:941},{name:"2018/09/06",value:1139},{name:"2018/09/07",value:816},{name:"2018/09/08",value:327},{name:"2018/09/09",value:228},{name:"2018/09/10",value:1065}],options:{title:"最近七天每天的用户访问量",showValue:!1,fillColor:"rgb(45, 140, 240)",bottomPadding:30,topPadding:30},options2:{title:"最近七天用户访问趋势",fillColor:"#FC6FA1",axisColor:"#008ACD",contentColor:"#EEEEEE",bgColor:"#F5F8FD",bottomPadding:30,topPadding:30}}},components:{Schart:a.a},computed:{role:function(){return"admin"===this.name?"超级管理员":"普通用户"}},created:function(){this.handleListener(),this.changeDate()},activated:function(){this.handleListener()},deactivated:function(){window.removeEventListener("resize",this.renderChart),h.a.$off("collapse",this.handleBus)},methods:{changeDate:function(){var t=(new Date).getTime();this.data.forEach(function(i,s){var a=new Date(t-864e5*(6-s));i.name=a.getFullYear()+"/"+(a.getMonth()+1)+"/"+a.getDate()})},handleListener:function(){h.a.$on("collapse",this.handleBus),window.addEventListener("resize",this.renderChart)},handleBus:function(t){var i=this;setTimeout(function(){i.renderChart()},300)},renderChart:function(){this.$refs.bar.renderChart(),this.$refs.line.renderChart()}}},o={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("el-card",{staticClass:"mgb20",staticStyle:{height:"252px"},attrs:{shadow:"hover"}},[s("div",{staticClass:"user-info"},[s("img",{staticClass:"user-avator",attrs:{src:"static/img/img.jpg",alt:""}}),t._v(" "),s("div",{staticClass:"user-info-cont"},[s("div",{staticClass:"user-info-name"},[t._v(t._s(t.name))]),t._v(" "),s("div",[t._v(t._s(t.role))])])]),t._v(" "),s("div",{staticClass:"user-info-list"},[t._v("上次登录时间："),s("span",[t._v("2018-01-01")])]),t._v(" "),s("div",{staticClass:"user-info-list"},[t._v("上次登录地点："),s("span",[t._v("东莞")])])]),t._v(" "),s("el-card",{staticStyle:{height:"252px"},attrs:{shadow:"hover"}},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("语言详情")])]),t._v("\n                Vue\n                "),s("el-progress",{attrs:{percentage:71.3,color:"#42b983"}}),t._v("\n                JavaScript\n                "),s("el-progress",{attrs:{percentage:24.1,color:"#f1e05a"}}),t._v("\n                CSS\n                "),s("el-progress",{attrs:{percentage:3.7}}),t._v("\n                HTML\n                "),s("el-progress",{attrs:{percentage:.9,color:"#f56c6c"}})],1)],1),t._v(" "),s("el-col",{attrs:{span:16}},[s("el-row",{staticClass:"mgb20",attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[s("div",{staticClass:"grid-content grid-con-1"},[s("i",{staticClass:"el-icon-lx-people grid-con-icon"}),t._v(" "),s("div",{staticClass:"grid-cont-right"},[s("div",{staticClass:"grid-num"},[t._v("1234")]),t._v(" "),s("div",[t._v("用户访问量")])])])])],1),t._v(" "),s("el-col",{attrs:{span:8}},[s("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[s("div",{staticClass:"grid-content grid-con-2"},[s("i",{staticClass:"el-icon-lx-notice grid-con-icon"}),t._v(" "),s("div",{staticClass:"grid-cont-right"},[s("div",{staticClass:"grid-num"},[t._v("321")]),t._v(" "),s("div",[t._v("系统消息")])])])])],1),t._v(" "),s("el-col",{attrs:{span:8}},[s("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[s("div",{staticClass:"grid-content grid-con-3"},[s("i",{staticClass:"el-icon-lx-goods grid-con-icon"}),t._v(" "),s("div",{staticClass:"grid-cont-right"},[s("div",{staticClass:"grid-num"},[t._v("5000")]),t._v(" "),s("div",[t._v("数量")])])])])],1)],1),t._v(" "),s("el-card",{staticStyle:{height:"403px"},attrs:{shadow:"hover"}},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("待办事项")]),t._v(" "),s("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("添加")])],1),t._v(" "),s("el-table",{staticStyle:{width:"100%","font-size":"14px"},attrs:{data:t.todoList,"show-header":!1,height:"304"}},[s("el-table-column",{attrs:{width:"40"},scopedSlots:t._u([{key:"default",fn:function(i){return[s("el-checkbox",{model:{value:i.row.status,callback:function(s){t.$set(i.row,"status",s)},expression:"scope.row.status"}})]}}])}),t._v(" "),s("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(i){return[s("div",{staticClass:"todo-item",class:{"todo-item-del":i.row.status}},[t._v(t._s(i.row.title))])]}}])}),t._v(" "),s("el-table-column",{attrs:{width:"60"},scopedSlots:t._u([{key:"default",fn:function(i){return[s("i",{staticClass:"el-icon-edit"}),t._v(" "),s("i",{staticClass:"el-icon-delete"})]}}])})],1)],1)],1)],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12}},[s("el-card",{attrs:{shadow:"hover"}},[s("schart",{ref:"bar",staticClass:"schart",attrs:{canvasId:"bar",data:t.data,type:"bar",options:t.options}})],1)],1),t._v(" "),s("el-col",{attrs:{span:12}},[s("el-card",{attrs:{shadow:"hover"}},[s("schart",{ref:"line",staticClass:"schart",attrs:{canvasId:"line",data:t.data,type:"line",options:t.options2}})],1)],1)],1)],1)},staticRenderFns:[]};var n=s("VU/8")(e,o,!1,function(t){s("PPOh")},"data-v-ba906856",null);i.default=n.exports}});