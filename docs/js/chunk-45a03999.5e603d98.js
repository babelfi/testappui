(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45a03999"],{"11d5":function(e){e.exports=JSON.parse('[{"name":"LAMB","title":"LAMB-A","titlei18":"LAMB-A","token":"LAMB","desc":"Lambda","state":false},{"name":"ETH","title":"ETH-A","titlei18":"ETH-A","token":"ETH","desc":"ETH","state":false},{"name":"SCASH","title":"SCASH-A","titlei18":"SCASH-A","token":"SCASH","desc":"SCASH","state":false},{"name":"HT","title":"HT-A","titlei18":"HT-A","token":"HT","state":false},{"name":"BNB","title":"BNB","titlei18":"BNB","token":"BNB","desc":"BNB","state":true}]')},"16e3":function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return u})),r.d(t,"c",(function(){return h}));var n=r("1da1"),a=(r("96cf"),r("7db0"),r("159b"),r("096f")),o=r("c46f"),i=r("fe74");r("415d");function c(e,t,r,n){return s.apply(this,arguments)}function s(){return s=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n,o){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(r,n,o,t);case 2:return i=e.sent,i.data.forEach((function(e){e.show=b(e.txs,t)})),e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function u(e,t,r,n){return l.apply(this,arguments)}function l(){return l=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n,o){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=3,Object(a["g"])(r,n,o,t);case 3:return i=e.sent,i.data.forEach((function(e){e.show=v(e.txs,t)})),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function d(e,t){var r=o["a"].find(i.tokens,(function(r){if(r.chainId==t&&r.address.toLowerCase()==e.toLowerCase())return r}));return void 0==r?"":r.symbol}function h(e,t){var r=e[0].amount,n=e[1].amount,a=e[0].amount_token_address,o=e[1].amount_token_address;return{inamount:r,outamount:n,tokenA:d(a,t),tokenB:d(o,t)}}function b(e,t){var r=e[0].amount,n=e[0].amount_token_address;return{amount:r,tokenA:d(n,t)}}function v(e,t){var r=e[0].amount,n=e[0].amount_token_address,a=(e[1].amount,e[1].amount_token_address);return{amountA:r,tokenA:d(n,t)||n,amountB:r,tokenB:d(a,t)||a}}},"415d":function(e){e.exports=JSON.parse('{"name":"stacke  Default List","tokens":[{"name":"USDT/scUSD","address":"0xd615665674Ae6e597B9D1758B5d0afB5e0601703","symbol":"USDT/scUSD","decimals":18,"chainId":256,"logoURI":"/tokenlogo/eth48.png"},{"name":"scUSD","address":"0x0824f6b54027Fc44954E8CF2824344d8D54F3290","symbol":"scUSD","decimals":18,"chainId":256,"logoURI":"/tokenlogo/eth48.png"}]}')},"4c53":function(e,t,r){"use strict";var n=r("23e7"),a=r("857a"),o=r("af03");n({target:"String",proto:!0,forced:o("sub")},{sub:function(){return a(this,"sub","","")}})},a230:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("button",{on:{click:e.approve}},[e._v(" 授权操作 ")]),r("br"),r("button",{on:{click:e.join}},[e._v(" 加入操作 ")]),r("br"),r("button",{on:{click:e.queryAvailableassets}},[e._v(" 查询可用lamb ")]),r("br"),r("button",{on:{click:function(t){return e.tokenMint("LAMB")}}},[e._v(" 铸造操作 ")]),r("br"),r("button",{on:{click:e.getSCusdt}},[e._v(" 查询可用的scusdt ")]),r("br"),r("button",{on:{click:function(t){return e.tokenBurn("LAMB")}}},[e._v(" 释放 ")]),r("br"),r("button",{on:{click:function(t){return e.tokenExit("LAMB")}}},[e._v(" 取出LAMB ")]),r("br"),r("button",{on:{click:e.readHistory}},[e._v(" 读取历史记录 ")]),r("br"),r("button",{on:{click:e.chainTokenPrice}},[r("br"),e._v(" 读取ht价格 ")]),r("br"),r("button",{on:{click:e.getearnList}},[e._v(" 读取赚钱列表 ")]),r("br"),r("button",{on:{click:e.syncReward}},[e._v(" 读取铸造金库未提取的奖励 ")]),r("br"),r("button",{on:{click:e.getscsudValtAddress}},[e._v(" scusd 存款 ")]),r("br"),r("button",{on:{click:e.readscsudValt}},[e._v(" scusd 累计存款 ")]),r("br"),r("button",{on:{click:e.withdrawscsudValt}},[e._v(" scusd 取款 ")]),r("br"),r("button",{on:{click:e.readMyLP}},[e._v(" 我的 scusd存款份额 ")]),r("br"),r("button",{on:{click:e.readMyLP2}},[e._v(" 查询我的存款提取的scusd ")]),r("br"),r("button",{on:{click:e.lp2Masterwithdraw}},[e._v(" 提取奖励 ")]),r("button",{on:{click:e.getPriceinfo}},[e._v(" 读取单个交易对价格 ")]),r("br"),r("button",{on:{click:e.History}},[e._v(" 读取历史记录 ")]),r("br"),r("button",{on:{click:e.getfetchSynthAssets}},[e._v(" 批量读取合成资产的余额 ")]),r("br"),r("button",{on:{click:e.readSyntheticHistory}},[e._v(" 读取资产合成历史记录 ")]),r("br"),r("button",{on:{click:e.Getstore}},[e._v(" sdk载入系统数据 ")]),r("br"),r("button",{on:{click:e.openTrove}},[e._v(" 创建 ")]),r("br"),r("button",{on:{click:e.adjustTrove}},[e._v(" 调整 ")]),r("br"),r("br"),r("button",{on:{click:e.closeTrove}},[e._v(" 关闭 ")]),r("br"),r("button",{on:{click:e.changeva}},[e._v(" 构建验证 ")]),r("br"),r("button",{on:{click:e.fee}},[e._v(" 手续费相关 ")]),r("br"),r("button",{on:{click:e.getStabilityPool}},[e._v(" Stability Pool 展示信息相关 ")]),r("br"),r("button",{on:{click:e.stakeLQTStabilityPool}},[e._v(" Stability Pool 存钱 ")]),r("br"),r("button",{on:{click:e.withdrawLUSDFromStabilityPool}},[e._v(" Stability Pool 取钱 ")]),r("br"),r("button",{on:{click:e.withdrawGainsFromStabilityPool}},[e._v(" Stability Pool 提取奖励 ")]),r("br"),r("button",{on:{click:e.transferCollateralGainToTrove}},[e._v(" Stability Pool 提取奖励，并将eth存款 ")]),r("br"),r("button",{on:{click:e.Stakingreadinfo}},[e._v(" Staking 读取信息 ")]),r("br"),r("button",{on:{click:e.Stakingpledge}},[e._v(" Staking 存钱 ")]),r("br"),r("button",{on:{click:e.StakingWithdraw}},[e._v(" Staking 取钱 ")]),r("br"),r("button",{on:{click:e.StakingExtractreward}},[e._v(" Staking 提取奖励 ")])])},a=[],o=r("5530"),i=r("1da1"),c=(r("96cf"),r("d3b7"),r("25f0"),r("99af"),r("4c53"),r("a15b"),r("2f62")),s=r("a26d"),u=r("03e1"),l=r("5b42"),d=r("16e3"),h=r("99e5"),b=r.n(h),v=r("47af"),f=(r("11d5"),r("1062")),p=r("2909"),m=(r("6df3"),r("a004"));r("e7f9");function w(e,t,r,n,a){return g.apply(this,arguments)}function g(){return g=Object(i["a"])(regeneratorRuntime.mark((function e(t,r,n,a,o){var i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=Object(m["o"])(t,r,n.address,!1),e.prev=1,e.next=4,i[a].apply(i,Object(p["a"])(o));case 4:c=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1);case 10:return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e,null,[[1,7]])}))),g.apply(this,arguments)}function k(e,t,r,n,a){return y.apply(this,arguments)}function y(){return y=Object(i["a"])(regeneratorRuntime.mark((function e(t,r,n,a,o){var i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=Object(m["a"])(t,r,n.address,!1),e.prev=1,e.next=4,i[a].apply(i,Object(p["a"])(o));case 4:c=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1);case 10:return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e,null,[[1,7]])}))),y.apply(this,arguments)}function x(e,t,r,n,a){return R.apply(this,arguments)}function R(){return R=Object(i["a"])(regeneratorRuntime.mark((function e(t,r,n,a,o){var i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=Object(m["m"])(t,r,n.address,!1),e.prev=1,e.next=4,i[a].apply(i,Object(p["a"])(o));case 4:c=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1);case 10:return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e,null,[[1,7]])}))),R.apply(this,arguments)}r("adae"),r("167d");var S=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o,i,c,s,l,d,h,b,v,p,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.web3,n=t.chainID,a=t.account,o=t.library,i=t.tokenName,c=Object(u["f"])(n),s="collateralAddress",l=Object(f["c"])(r,i),d=[l],e.next=8,w(o,a,c,s,d);case 8:return h=e.sent,b=Object(u["b"])(n),b.address=h,v="rewarderAddress",p=[],e.next=15,k(o,a,b,v,p);case 15:return m=e.sent,e.abrupt("return",m);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o,i,c,s,l,d,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.web3,n=t.chainID,a=t.account,o=t.library,i=t.tokenName,e.next=4,S({web3:r,chainID:n,account:a,library:o,tokenName:i});case 4:return c=e.sent,s=Object(u["b"])(n),s.address=c,l="getUnClaimedReward",d=[a],e.next=11,x(o,a,s,l,d);case 11:return h=e.sent,e.abrupt("return",h);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=(r("7db0"),r("b0c0"),r("4da2")),T=function(e){var t=O.find((function(t){return e===t.chainId&&"ProxyVault"===t.name}));return t||{}},A=function(e){var t=O.find((function(t){return e===t.chainId&&"MasterChef"===t.name}));return t||{}},D=function(e){var t=O.find((function(t){return e===t.chainId&&"Synthetic"===t.name}));return t||{}};function I(e){var t=e.chainID,r=e.account,n=e.library,a=T(t),o=Object(m["k"])(n,r,a.address,!0);return o}function C(e){var t=e.chainID,r=e.account,n=e.library,a=A(t),o=Object(m["j"])(n,r,a.address,!1);return o}function _(e){var t=e.chainID,r=e.account,n=e.library,a=A(t),o=Object(m["j"])(n,r,a.address,!0);return o}function L(e){var t=e.chainID,r=e.account,n=e.library,a=C({chainID:t,account:r,library:n}),o=Object(f["c"])(b.a,"Synth"),i=a.getUserInfo(o,r);return i}function B(e){var t=e.chainID,r=e.account,n=e.library,a=C({chainID:t,account:r,library:n}),o=Object(f["c"])(b.a,"Synth"),i=a.pendingScash(o,r);return i}function P(e){return M.apply(this,arguments)}function M(){return M=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.chainID,n=t.account,a=t.library,o=D(r),i=Object(m["l"])(a,n,o.address,!0),e.next=5,i.maxExitableAmount(n);case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}function U(e){return E.apply(this,arguments)}function E(){return E=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o,i,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.chainID,n=t.account,a=t.library,o=_({chainID:r,account:n,library:a}),i=Object(f["c"])(b.a,"Synth"),e.next=5,o.estimateGas.withdraw(i);case 5:return c=e.sent,e.next=8,o.withdraw(i,{gasLimit:c});case 8:return s=e.sent,e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}var H=r("1b70"),N=(r("3835"),r("159b"),r("d81d"),r("666b"));var $=r("2332"),F=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,i,c,s,l,d,h,b,v;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.web3,n=t.chainID,a=t.account,i=t.library,c=t.products,s=[],c.forEach((function(e){var t="synths",a=Object(f["c"])(r,e.baseSymbol),o=[a],i=Object(u["d"])(n),c=Object(N["c"])(i);s.push(c[t].apply(c,o))})),l=new $["Provider"](i,n),e.next=6,l.init();case 6:return e.next=8,l.all(s);case 8:return d=e.sent,h=[],d.forEach((function(e){var t=Object(N["d"])({address:e});h.push(t.balanceOf(a))})),e.next=13,l.all(h);case 13:return b=e.sent,v=c.map((function(e,t){var n=r.utils.fromWei(b[t].toString());return Object(o["a"])(Object(o["a"])({},e),{},{assetAmount:n})})),e.abrupt("return",v);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=r("b565"),Y=r("c00b"),W=r("c030"),V=(W.Wallet,W.providers,r("bcab")),q=V.EthersLiquity,Q=V._connectByChainId,J=new G["Percent"](G["MINIMUM_COLLATERAL_RATIO"]).toString(0),z=new G["Percent"](G["CRITICAL_COLLATERAL_RATIO"]).toString(0),Z={data:function(){return{id:"",data:{},maxborrowingRate:"",trove:"",borrowingRate:"",state:{}}},methods:{Stakingreadinfo:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e.$data.state,r.lqtyBalance,n=r.lqtyStake,a=n,a.collateralGain.prettify(4).concat(" ETH"),a.lusdGain.prettify().concat(" ","xxx");case 8:case"end":return t.stop()}}),t)})))()},Stakingpledge:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethersprovider,n=e.ethAddress,a=e.ethChainID,o=Q(r,r.getSigner(n),a,{userAddress:n,frontendTag:Y["a"],useStore:"blockPolled"}),i=q._from(o),t.next=8,i.send.stakeLQTY(1,{gasLimit:8e5});case 8:t.sent;case 10:case"end":return t.stop()}}),t)})))()},StakingWithdraw:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethersprovider,n=e.ethAddress,a=e.ethChainID,o=Q(r,r.getSigner(n),a,{userAddress:n,frontendTag:Y["a"],useStore:"blockPolled"}),i=q._from(o),t.next=8,i.send.unstakeLQTY(1,{gasLimit:8e5});case 8:t.sent;case 10:case"end":return t.stop()}}),t)})))()},StakingExtractreward:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethersprovider,n=e.ethAddress,a=e.ethChainID,o=Q(r,r.getSigner(n),a,{userAddress:n,frontendTag:Y["a"],useStore:"blockPolled"}),i=q._from(o),t.next=8,i.send.withdrawGainsFromStaking({gasLimit:8e5});case 8:t.sent;case 10:case"end":return t.stop()}}),t)})))()},stakeLQTStabilityPool:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethersprovider,n=e.ethAddress,a=e.ethChainID,o=Q(r,r.getSigner(n),a,{userAddress:n,frontendTag:Y["a"],useStore:"blockPolled"}),i=q._from(o),t.next=8,i.send.depositLUSDInStabilityPool(100,Y["a"],{gasLimit:8e5});case 8:t.sent;case 10:case"end":return t.stop()}}),t)})))()},withdrawLUSDFromStabilityPool:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethersprovider,n=e.ethAddress,a=e.ethChainID,o=Q(r,r.getSigner(n),a,{userAddress:n,frontendTag:Y["a"],useStore:"blockPolled"}),i=q._from(o),t.next=8,i.send.withdrawLUSDFromStabilityPool(1,{gasLimit:8e5});case 8:t.sent;case 10:case"end":return t.stop()}}),t)})))()},withdrawGainsFromStabilityPool:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethersprovider,n=e.ethAddress,a=e.ethChainID,o=Q(r,r.getSigner(n),a,{userAddress:n,frontendTag:Y["a"],useStore:"blockPolled"}),i=q._from(o),t.next=8,i.send.withdrawGainsFromStabilityPool({gasLimit:8e5});case 8:t.sent;case 10:case"end":return t.stop()}}),t)})))()},transferCollateralGainToTrove:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethersprovider,n=e.ethAddress,a=e.ethChainID,o=Q(r,r.getSigner(n),a,{userAddress:n,frontendTag:Y["a"],useStore:"blockPolled"}),i=q._from(o),t.next=8,i.send.transferCollateralGainToTrove({gasLimit:8e5});case 8:t.sent;case 10:case"end":return t.stop()}}),t)})))()},getStabilityPool:function(){var e=this.$data.state,t=(e.remainingStabilityPoolLQTYReward,e.stabilityDeposit);e.lusdBalance,e.lusdInStabilityPool,t.collateralGain.prettify(4).concat(" ETH"),t.lqtyReward.prettify().concat(" ","xx")},feeFrom:function(e,t,r){var n=e.whatChanged(t,r);return n&&"invalidCreation"!==n.type&&n.params.borrowLUSD?n.params.borrowLUSD.mul(r):G["Decimal"].ZERO},fee:function(){var e=this.$data.trove,t=new G["Trove"](e.collateral,e.debt),r=this.$data.state,n=(r.total,r.price);t=t.setCollateral(4.5),t=t.setDebt(1e5);this.$data.borrowingRate;var a=e.isEmpty?void 0:e.collateralRatio(n),o=t.isEmpty?void 0:t.collateralRatio(n);G["Difference"].between(o,a)},changeva:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i,c,s,u,l,d,h,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.$data.trove,n=new G["Trove"](r.collateral,r.debt),n=n.setCollateral(4.5),n=n.setDebt(1e5),r,a=e.$data.borrowingRate,o=e.$data.state,i=o.total,c=o.price,s=r.whatChanged(n,a),s){t.next=11;break}return t.abrupt("return",[void 0,void 0]);case 11:if(u=r.apply(s,a),l=i.collateralRatioIsBelowCritical(c),d=i.subtract(r).add(u).collateralRatioIsBelowCritical(c),h={resultingTrove:u,recoveryMode:l,wouldTriggerRecoveryMode:d},"invalidCreation"!==s.type){t.next=18;break}return t.abrupt("return",[void 0,"Debt must be at least ".concat(G["LUSD_MINIMUM_DEBT"].toString())]);case 18:if(b="creation"===s.type?e.validateTroveCreation(s.params,h):"closure"===s.type?e.validateTroveClosure(s.params,h):e.validateTroveAdjustment(s.params,h),!b){t.next=26;break}return t.abrupt("return",[void 0,b]);case 26:return t.abrupt("return",null);case 28:case"end":return t.stop()}}),t)})))()},validateTroveCreation:function(e,t){var r=e.depositCollateral,n=t.resultingTrove,a=t.recoveryMode,o=t.wouldTriggerRecoveryMode,i=this.$data.state,c=i.accountBalance,s=i.price;if(n.debt.lt(G["LUSD_MINIMUM_DEBT"]))return"Debt must be at least ".concat(G["LUSD_MINIMUM_DEBT"].toString());if(a){if(!n.isOpenableInRecoveryMode(s))return"You're not allowed to open a Trove with less than ".concat(z," Collateral\n                Ratio during recovery mode. Please increase your Trove's Collateral Ratio.")}else{if(n.collateralRatioIsBelowMinimum(s))return"Collateral ratio must be at least ".concat(J,".");if(o)return"You're not allowed to open a Trove that would cause the Total Collateral Ratio to fall\n                      below ".concat(z,". Please increase your Trove's Collateral Ratio.")}return r.gt(c)?"The amount you're trying to deposit exceeds your balance by\n                    ".concat(r.sub(c).prettify()," BNB."):null},validateTroveClosure:function(e,t){var r=e.repayLUSD,n=t.recoveryMode,a=t.wouldTriggerRecoveryMode,o=this.$data.state,i=o.numberOfTroves,c=o.lusdBalance;return 1===i?"You're not allowed to close your Trove when there are no other Vaults in the system.":n?"You're not allowed to close your Trove during recovery mode.":null!==r&&void 0!==r&&r.gt(c)?"You need ".concat(r.sub(c).prettify()," more to close your Trove"):a?"You're not allowed to close a Trove if it would cause the Total Collateralization Ratio to\n        fall below ".concat(z,". Please wait until the Total Collateral Ratio\n        increases."):null},validateTroveAdjustment:function(e,t){var r=e.depositCollateral,n=e.withdrawCollateral,a=e.borrowLUSD,o=e.repayLUSD,i=t.originalTrove,c=t.resultingTrove,s=t.recoveryMode,u=t.wouldTriggerRecoveryMode,l=this.$data.state,d=l.price,h=l.accountBalance,b=l.lusdBalance;if(s){if(n)return"You're not allowed to withdraw collateral during recovery mode.";if(a){if(c.collateralRatioIsBelowCritical(d))return"Your collateral ratio must be at least ".concat(z," to borrow during\n                    recovery mode. Please improve your collateral ratio.");if(c.collateralRatio(d).lt(i.collateralRatio(d)))return"You're not allowed to decrease your collateral ratio during recovery mode."}}else{if(c.collateralRatioIsBelowMinimum(d))return"Collateral ratio must be at least ".concat(J,".");if(u)return"The adjustment you're trying to make would cause the Total Collateral Ratio to\n            fall below ".concat(z," . Please increase your Trove's Collateral Ratio.\n            ")}if(o){if(c.debt.lt(G["LUSD_MINIMUM_DEBT"]))return" Debt must be at least ".concat(G["LUSD_MINIMUM_DEBT"].toString());if(o.gt(b))return"The amount you're trying to repay exceeds your balance by ".concat(o.sub(b).prettify())}return r&&r.gt(h)?"The amount you're trying to deposit exceeds your balance by\n                ".concat(r.sub(h).prettify()," ETH"):null},closeTrove:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethersprovider,n=e.ethAddress,a=e.ethChainID,o=Q(r,r.getSigner(n),a,{userAddress:n,frontendTag:"0xc7B375ce501a2432A25d584dF1f40c73c83f9534",useStore:"blockPolled"}),i=q._from(o),t.next=8,i.closeTrove({gasLimit:8e5});case 8:c=t.sent,c.newTrove;case 11:case"end":return t.stop()}}),t)})))()},adjustTrove:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i,c,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethersprovider,n=e.ethAddress,a=e.ethChainID,o=Q(r,r.getSigner(n),a,{userAddress:n,frontendTag:"0xc7B375ce501a2432A25d584dF1f40c73c83f9534",useStore:"blockPolled"}),i=q._from(o),c=e.$data.data.maxborrowingRate,t.next=9,i.adjustTrove({depositCollateral:1.5,borrowLUSD:0},c,{gasLimit:8e5});case 9:s=t.sent,s.newTrove;case 12:case"end":return t.stop()}}),t)})))()},openTrove:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i,c,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethersprovider,n=e.ethAddress,a=e.ethChainID,o=Q(r,r.getSigner(n),a,{userAddress:n,frontendTag:"0xc7B375ce501a2432A25d584dF1f40c73c83f9534",useStore:"blockPolled"}),i=q._from(o),c=e.$data.data.maxborrowingRate,t.next=10,i.openTrove({depositCollateral:2,borrowLUSD:1800},c,{gasLimit:8e5});case 10:s=t.sent,s.newTrove;case 13:case"end":return t.stop()}}),t)})))()},Getstore:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e.ethersprovider,n=e.ethAddress,a=e.ethChainID,o=Q(r,r.getSigner(n),a,{userAddress:n,frontendTag:"0xc7B375ce501a2432A25d584dF1f40c73c83f9534",useStore:"blockPolled"}),i=q._from(o),c=new G["Trove"],c=c.setCollateral(2.5),c=c.setDebt(2e3),i.store.onLoaded=function(){e.$data.data.maxborrowingRate=i.store.state.borrowingRate.add(.005).toString();c.collateralRatio(i.store.state.price);e.$data.trove=i.store.state.trove,e.$data.borrowingRate=i.store.state.borrowingRate,e.$data.state=i.store.state},i.store.subscribe((function(e){var t=e.newState,r=e.oldState;t.price.lt(r.price)})),i.store.start();case 13:case"end":return t.stop()}}),t)})))()},testFN:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i,c,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethersprovider,n=e.ethAddress,a=e.ethChainID,o=Q(r,r.getSigner(n),a,{userAddress:n,frontendTag:"0xc7B375ce501a2432A25d584dF1f40c73c83f9534",useStore:"blockPolled"}),i=q._from(o),c=new G["Trove"],c=c.setCollateral(2.5),c=c.setDebt(2e3),i.store.onLoaded=function(){c.collateralRatio(i.store.state.price)},i.store.subscribe((function(e){var t=e.newState,r=e.oldState;t.price.lt(r.price)})),i.store.start(),t.next=18,i.adjustTrove({depositCollateral:2.2,borrowLUSD:2e3});case 18:s=t.sent,s.newTrove;case 21:case"end":return t.stop()}}),t)})))()},approve:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i,c,d,h,v,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethChainID,n=e.ethersprovider,a=e.ethAddress,o=Object(u["e"])(r),i="target",c=[],t.next=9,Object(s["g"])(n,a,o,i,c);case 9:return d=t.sent,h=Object(u["i"])(r,"LAMB"),v=d,f=b.a.utils.toWei("1000000"),t.next=16,Object(l["a"])(n,a,h,v,f);case 16:t.sent;case 18:case"end":return t.stop()}}),t)})))()},join:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i,c,l,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="LAMB",n=e.ethChainID,a=e.ethersprovider,o=e.ethAddress,i=Object(u["f"])(n),c=Object(s["f"])(a,o,i),l=b.a.utils.stringToHex(r),l=b.a.utils.rightPad(l,64),d=b.a.utils.toWei("1000000"),t.prev=9,t.next=12,c.join(l,d);case 12:t.sent,t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](9);case 19:case"end":return t.stop()}}),t,null,[[9,16]])})))()},queryAvailableassets:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i,c,l,d,h,v,f,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethChainID,n=e.ethersprovider,a=e.ethAddress,o="LAMB",i=b.a.utils.stringToHex(o),i=b.a.utils.rightPad(i,64),c=Object(u["f"])(r),l="collateralAddress",d=[i],t.next=11,Object(s["e"])(n,a,c,l,d);case 11:return h=t.sent,v=Object(u["b"])(r),v.address=h,f="unlockedCollateral",p=[a],t.next=19,Object(s["a"])(n,a,v,f,p);case 19:t.sent;case 21:case"end":return t.stop()}}),t)})))()},tokenMint:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=t.ethChainID,a=t.ethersprovider,o=t.ethAddress,i=Object(u["f"])(n),Object(s["f"])(a,o,i),c=b.a.utils.stringToHex(e),c=b.a.utils.rightPad(c,64),b.a.utils.toWei("10");case 9:case"end":return r.stop()}}),r)})))()},tokenBurn:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=t.ethChainID,a=t.ethersprovider,o=t.ethAddress,i=Object(u["f"])(n),Object(s["f"])(a,o,i),c=b.a.utils.stringToHex(e),c=b.a.utils.rightPad(c,64),b.a.utils.toWei("1");case 9:case"end":return r.stop()}}),r)})))()},tokenExit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i,c,l,d;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.ethChainID,a=t.ethersprovider,o=t.ethAddress,i=Object(u["f"])(n),c=Object(s["f"])(a,o,i),l=b.a.utils.stringToHex(e),l=b.a.utils.rightPad(l,64),d=b.a.utils.toWei("1"),r.prev=8,r.next=11,c.exit(l,d);case 11:r.sent,r.next=18;break;case 15:r.prev=15,r.t0=r["catch"](8);case 18:case"end":return r.stop()}}),r,null,[[8,15]])})))()},getSCusdt:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethersprovider,n=e.ethAddress,a=e.ethChainID,o=Object(u["i"])(a,"scUSD"),t.next=6,Object(s["h"])(r,n,o);case 6:i=t.sent,i&&i.toSignificant(6);case 8:case"end":return t.stop()}}),t)})))()},readHistory:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e.ethAddress,n=e.ethChainID,Object(d["b"])(n,r,1,10);case 3:case"end":return t.stop()}}),t)})))()},readSyntheticHistory:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethAddress,n=e.ethChainID,t.next=4,Object(d["a"])(n,r,1,10);case 4:t.sent;case 6:case"end":return t.stop()}}),t)})))()},chainTokenPrice:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(v["a"])();case 2:e.sent;case 4:case"end":return e.stop()}}),e)})))()},getearnList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e.ethersprovider,n=e.ethAddress,a=e.ethChainID,StakingRewardListbatch(r,n,a);case 4:case"end":return t.stop()}}),t)})))()},syncReward:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.web3,n=e.ethChainID,a=e.ethAddress,o=e.ethersprovider,i="LAMB",t.next=7,j({web3:r,chainID:n,account:a,library:o,tokenName:i});case 7:return t.sent,t.next=11,Object(f["a"])({web3:r,chainID:n,account:a,library:o,tokenName:i});case 11:t.sent;case 13:case"end":return t.stop()}}),t)})))()},getscsudValtAddress:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethChainID,n=e.ethAddress,a=e.ethersprovider,o=I({chainID:r,account:n,library:a}),i=b.a.utils.toWei("10"),t.next=7,o.stake(i);case 7:t.sent;case 9:case"end":return t.stop()}}),t)})))()},readscsudValt:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethChainID,n=e.ethAddress,a=e.ethersprovider,o=I({chainID:r,account:n,library:a}),t.next=7,o.totalSupply();case 7:t.sent;case 9:case"end":return t.stop()}}),t)})))()},withdrawscsudValt:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethChainID,n=e.ethAddress,a=e.ethersprovider,o=I({chainID:r,account:n,library:a}),i=b.a.utils.toWei("1"),t.next=7,o.exit(n,i);case 7:t.sent;case 9:case"end":return t.stop()}}),t)})))()},readMyLP:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethChainID,n=e.ethAddress,a=e.ethersprovider,t.next=5,L({chainID:r,account:n,library:a});case 5:return t.sent,t.next=12,B({chainID:r,account:n,library:a});case 12:t.sent;case 14:case"end":return t.stop()}}),t)})))()},readMyLP2:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethChainID,n=e.ethAddress,a=e.ethersprovider,t.next=5,P({chainID:r,account:n,library:a});case 5:t.sent;case 7:case"end":return t.stop()}}),t)})))()},lp2Masterwithdraw:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethChainID,n=e.ethAddress,a=e.ethersprovider,t.next=5,U({chainID:r,account:n,library:a});case 5:t.sent;case 7:case"end":return t.stop()}}),t)})))()},getPriceinfo:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethChainID,n=e.ethAddress,a=e.ethersprovider,o="lamb_usdt",t.next=6,Object(H["c"])(a,n,r,o);case 6:return i=t.sent,e.$data.id=i[3].toString(),c=["lamb_usdt","ht_usdt","eth_usdt"],t.next=16,Object(H["b"])(a,n,r,c);case 16:i=t.sent;case 18:case"end":return t.stop()}}),t)})))()},History:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethChainID,n=e.ethAddress,a=e.ethersprovider,o="lamb_usdt",i=e.$data.id-0,t.next=7,Object(H["a"])(a,n,r,o,i);case 7:t.sent;case 9:case"end":return t.stop()}}),t)})))()},getfetchSynthAssets:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.ethChainID,n=e.ethAddress,a=e.ethersprovider,o=e.web3,i=["sBTC"],t.next=7,F({web3:o,chainID:r,account:n,library:a,tokenList:i});case 7:t.sent;case 9:case"end":return t.stop()}}),t)})))()}},computed:Object(o["a"])({},Object(c["c"])(["ethAddress","ethChainID","web3","ethersprovider"]))},K=Z,X=r("2877"),ee=Object(X["a"])(K,n,a,!1,null,"878b8ebc",null);t["default"]=ee.exports}}]);
//# sourceMappingURL=chunk-45a03999.5e603d98.js.map