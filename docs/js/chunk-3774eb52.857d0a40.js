(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3774eb52"],{"148e":function(t,e,a){"use strict";a("192d")},"192d":function(t,e,a){},"2b34":function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));a("2909"),a("1da1"),a("96cf"),a("d3b7"),a("25f0");var n=a("56eb"),s=a("f179"),i=a("3b1c"),c=a("c00b");function o(t){try{return Object(i["getAddress"])(t)}catch(e){return!1}}function r(t,e){return t.getSigner(e).connectUnchecked()}function l(t,e){return e?r(t,e):t}function u(t,e,a,n){if(!o(t)||t===c["a"])throw Error("Invalid 'address' parameter '".concat(t,"'."));return new s["Contract"](t,e,l(a,n))}function d(t,e,a,n){var s=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if(!a||!n||!t)return null;try{return u(a,n,t,s&&e?e:void 0)}catch(i){return null}}function m(t,e,a,s){return d(t,e,a,n,s)}a("6df3");function p(t,e,a){var n=m(t,e,a.address,!0);return n}},f70b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"remove-dialog"},[a("Modal",{attrs:{"class-name":"simple-modal","footer-hide":!0,closable:!0},model:{value:t.openRemoveDialog,callback:function(e){t.openRemoveDialog=e},expression:"openRemoveDialog"}},[a("div",{staticClass:"simple-content"},[a("p",{staticClass:"title text-center"},[t._v(" "+t._s(t.$t("myPage.dialog.unstake.unstake"))+" "+t._s(t.LAI)+"/"+t._s(t.BNB)+" LP ")]),a("div",{staticClass:"simple-wrapper"},[a("div",{staticClass:"title-content"},[a("span",{staticClass:"card-title"},[t._v(t._s(t.$t("common.amount")))]),a("div",{staticClass:"balance-item"},[a("span",{staticClass:"mr-2 text-secondary"},[t._v(t._s(t.$t("myPage.dialog.unstake.staked"))+" "+t._s(t.LAI)+"/"+t._s(t.BNB)+" LP")]),a("span",[t._v(t._s(t.stakeVal))])])]),a("div",{staticClass:"simple-wrapper flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.stakeVal,expression:"stakeVal"}],staticClass:"amount-input",attrs:{readonly:"",type:"text"},domProps:{value:t.stakeVal},on:{input:function(e){e.target.composing||(t.stakeVal=e.target.value)}}})])]),a("div",{staticClass:"detail-wrapper"},[a("div",{staticClass:"detail-item"},[a("span",[t._v(t._s(t.$t("myPage.dialog.unstake.unstake"))+" "+t._s(t.LAI)+"/"+t._s(t.BNB)+" LP")]),a("p",[t._v(t._s(t.stakeVal)+" "+t._s(t.LAI)+"/"+t._s(t.BNB)+" LP")])])]),a("div",{staticClass:"btn-wrapper"},[t.takeLoading?a("Buttons",{attrs:{height:"48px"}},[t._v(" "+t._s(t.$t("common.loading"))+"... ")]):a("Buttons",{attrs:{height:"48px"},nativeOn:{click:function(e){return t.sendTakeout(e)}}},[t._v(" "+t._s(t.$t("common.confirm"))+" ")])],1)])])],1)},s=[],i=a("5530"),c=a("1da1"),o=(a("96cf"),a("b0c0"),a("99af"),a("d3b7"),a("3ca3"),a("ddb0"),a("2f62")),r=a("2b34"),l=a("5bed"),u={inject:["reload"],data:function(){return{openRemoveDialog:!1,data:{},coinName:"",stakeVal:"",takeLoading:!1}},methods:{open:function(t){this.data=t,this.stakeVal=t&&t.data&&t.data.balance,this.coinName=t&&t.name,this.openRemoveDialog=!0},checkData:function(){return!(this.stakeVal<=0)||(this.$Notice.warning({title:this.$t("notice.n"),desc:this.$t("notice.n31")}),!1)},sendTakeout:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,n,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.checkData()){e.next=2;break}return e.abrupt("return",!1);case 2:return t.takeLoading=!0,a=t.data,e.prev=4,n=Object(r["a"])(t.ethersprovider,t.ethAddress,a),e.next=8,n.estimateGas.withdrawAndClaim();case 8:return s=e.sent,e.next=11,n.withdrawAndClaim({gasLimit:s});case 11:i=e.sent,l["a"].$emit("sendSuccess"),t.openRemoveDialog=!1,l["a"].$emit("sendtx",[i,{okinfo:"".concat(t.$t("common.unstake")," ").concat(t.stakeVal," ").concat(t.LAI,"}/").concat(t.BNB," LP ").concat(t.$t("notice.n42")),failinfo:"".concat(t.$t("common.unstake")," ").concat(t.stakeVal," ").concat(t.LAI,"/").concat(t.BNB," LP ").concat(t.$t("notice.n43"))}]),e.next=21;break;case 17:e.prev=17,e.t0=e["catch"](4),t.$Notice.error({title:t.$t("notice.n32")});case 21:return e.prev=21,t.openRemoveDialog=!1,t.takeLoading=!1,e.finish(21);case 25:case"end":return e.stop()}}),e,null,[[4,17,21,25]])})))()}},components:{Buttons:function(){return a.e("chunk-2d225272").then(a.bind(null,"e2d3"))}},computed:Object(i["a"])({},Object(o["c"])(["ethersprovider","ethAddress","LAI","BNB","BABEL"]))},d=u,m=(a("148e"),a("2877")),p=Object(m["a"])(d,n,s,!1,null,"68347b78",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-3774eb52.857d0a40.js.map