webpackJsonp([20],{"0EMp":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"案源待立案"}},[a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.data,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"案件主题"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"案源受理时间"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"办理人员"}},[a("span",[e._v(e._s(t.row.id))])]),e._v(" "),a("el-form-item",{attrs:{label:"类型"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"原因"}},[a("span",[e._v(e._s(t.row.address))])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"案件主题",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"案源受理时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"办理人员"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"类型"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"280",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){e.handlelook(t.$index,t.row)}}},[e._v("\n                            已核实\n                        ")]),e._v(" "),a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){e.handlecase(t.$index,t.row)}}},[e._v("\n                            监察意见\n                        ")])]}}])})],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"案源已立案"}},[a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.data,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"案件主题"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"办理人员"}},[a("span",[e._v(e._s(t.row.id))])]),e._v(" "),a("el-form-item",{attrs:{label:"立案日期"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"类型"}},[a("span",[e._v(e._s(t.row.address))])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"案件主题",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"立案时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"办理人员"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"类型"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"280",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){e.handlelook(t.$index,t.row)}}},[e._v("\n                            已核实\n                        ")]),e._v(" "),a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){e.handlecase(t.$index,t.row)}}},[e._v("\n                            监察意见\n                        ")])]}}])})],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"案源不予立案"}},[a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.data,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"案件主题"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"案源受理时间"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"办理人员"}},[a("span",[e._v(e._s(t.row.id))])]),e._v(" "),a("el-form-item",{attrs:{label:"类型"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"原因"}},[a("span",[e._v(e._s(t.row.address))])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"案件主题",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"办理人员"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"类型"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"280",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){e.handlelook(t.$index,t.row)}}},[e._v("\n                            已核实\n                        ")]),e._v(" "),a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){e.handlecase(t.$index,t.row)}}},[e._v("\n                            监察意见\n                        ")])]}}])})],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"协办人",visible:e.handleVisible,width:"50%"},on:{"update:visible":function(t){e.handleVisible=t}}},[a("el-transfer",{attrs:{props:{key:"value",label:"desc"},data:e.data3},model:{value:e.value5,callback:function(t){e.value5=t},expression:"value5"}}),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.handleVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handle}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"查看",visible:e.lookVisible,width:"50%"},on:{"update:visible":function(t){e.lookVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"案件主体"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"移送日期"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"移送单位"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"接收单位"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"移送原因"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.lookVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"退回原因",visible:e.caseVisible,width:"30%"},on:{"update:visible":function(t){e.caseVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"原因描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.caseVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var s=a("VU/8")({name:"5313",data:function(){return{data3:{},url:"./static/vuetable.json",tableData:[],cur_page:1,value5:"",handleVisible:!1,multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,lookVisible:!1,caseVisible:!1,backVisible:!1,delVisible:!1,form:{name:"",date:"",address:""},idx:-1}},created:function(){this.getData()},computed:{data:function(){var e=this;return this.tableData.filter(function(t){for(var a=!1,l=0;l<e.del_list.length;l++)if(t.name===e.del_list[l].name){a=!0;break}if(!a&&t.address.indexOf(e.select_cate)>-1&&(t.name.indexOf(e.select_word)>-1||t.address.indexOf(e.select_word)>-1))return t})}},methods:{handle:function(){},handleCurrentChange:function(e){this.cur_page=e,this.getData()},getData:function(){var e=this;this.$axios.get(this.url).then(function(t){e.tableData=t.data.list})},search:function(){this.is_search=!0},formatter:function(e,t){return e.address},filterTag:function(e,t){return t.tag===e},upload:function(){this.$router.push({path:"upload"})},handlelook:function(e,t){this.idx=e;var a=this.tableData[e];this.form={name:a.name,date:a.date,address:a.address},this.lookVisible=!0},handleback:function(e,t){this.idx=e;var a=this.tableData[e];this.form={name:a.name,date:a.date,address:a.address},this.backVisible=!0},handlecase:function(e,t){this.idx=e;var a=this.tableData[e];this.form={name:a.name,date:a.date,address:a.address},this.caseVisible=!0},handleDelete:function(e,t){this.idx=e,this.delVisible=!0},delAll:function(){var e=this.multipleSelection.length,t="";this.del_list=this.del_list.concat(this.multipleSelection);for(var a=0;a<e;a++)t+=this.multipleSelection[a].name+" ";this.$message.error("删除了"+t),this.multipleSelection=[]},handleSelectionChange:function(e){this.multipleSelection=e},saveEdit:function(){this.$set(this.tableData,this.idx,this.form),this.editVisible=!1,this.$message.success("修改第 "+(this.idx+1)+" 行成功")},deleteRow:function(){this.tableData.splice(this.idx,1),this.$message.success("删除成功"),this.delVisible=!1}}},l,!1,function(e){a("TG0v")},"data-v-9f233b84",null);t.default=s.exports},TG0v:function(e,t){}});