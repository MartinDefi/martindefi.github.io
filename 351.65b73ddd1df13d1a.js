"use strict";(self.webpackChunkapp_titi_frontend=self.webpackChunkapp_titi_frontend||[]).push([[351],{28321:(D,w,s)=>{function m(){const a=(new Date).getTime(),l=[];let p=36e5*parseInt(a/36e5+"");for(let y=0;y<720;y++)l.push(p),p-=36e5;return l}function v(){const a=(new Date).getTime(),l=[];let p=864e5*parseInt(a/864e5+"");for(let y=0;y<30;y++)l.push(p),p-=864e5;return l}function _(){const a=(new Date).getTime();return 86400*parseInt(a/864e5+"")-2592e3}function R(o){return o>0?[parseInt(o/864e5+"")+"d",parseInt(o%864e5/36e5+"")+"h",parseInt(o%36e5/6e4+"")+"m"].join(":"):[" -- d"," -- h"," -- m"].join(":")}function d(o){return o>0?[parseInt(o/864e5+"")+"d",parseInt(o%864e5/36e5+"")+"h",parseInt(o%36e5/6e4+"")+"m",parseInt(o%6e4/1e3+"")+"s"].join(":"):[" -- d"," -- h"," -- m"," -- s"].join(":")}function t(o){let a=o;const l=a.substring(0,1),p=a.substring(1,2);if(a.length>1&&"0"===l&&"."!==p&&(a=a.substring(1,2)),"."===l&&(a=""),-1!==a.indexOf(".")){let y=a.substring(a.indexOf(".")+1);-1!==y.indexOf(".")&&(a=a.substring(0,a.indexOf(".")+y.indexOf(".")+1))}return a=a.replace(/[^\d^\.]+/g,""),a}s.d(w,{jn:()=>m,Gq:()=>v,Mv:()=>_,fA:()=>R,lR:()=>d,Y4:()=>t})},10351:(D,w,s)=>{s.r(w),s.d(w,{ActivityModule:()=>E});var m=s(69808),v=s(91083),_=s(5963),R=s(54004),d=s(28321),t=s(5e3),b=s(31657),o=s(32681),a=s(47423),l=s(85899),p=s(75303);function y(i,u){1&i&&(t.TgZ(0,"a",11),t._uU(1,"Swap TiTi in Uniswap-V2"),t.qZA())}function x(i,u){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"mat-progress-bar",16),t.qZA()),2&i){const e=t.oxw().$implicit,r=t.oxw();t.xp6(1),t.Q6J("value",r.activityData[e.uuid])}}function g(i,u){if(1&i&&(t.TgZ(0,"div",17),t._uU(1),t.ALo(2,"async"),t.qZA()),2&i){const e=t.oxw().$implicit,r=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,r.activityData[e.uuid])," ")}}function U(i,u){if(1&i&&(t.TgZ(0,"div",17),t._uU(1),t.qZA()),2&i){const e=t.oxw().$implicit,r=t.oxw();t.xp6(1),t.hij(" ",r.activityData[e.uuid]," ")}}function n(i,u){if(1&i&&(t.TgZ(0,"div",17),t._uU(1),t.ALo(2,"numberFormat"),t.qZA()),2&i){const e=t.oxw().$implicit,r=t.oxw();t.xp6(1),t.hij(" ",t.xi3(2,1,r.activityData[e.uuid],4)," TiTi ")}}function c(i,u){if(1&i&&(t.TgZ(0,"div",12),t.TgZ(1,"div",13),t._uU(2),t.qZA(),t.YNc(3,x,2,1,"div",14),t.YNc(4,g,3,3,"div",15),t.YNc(5,U,2,1,"div",15),t.YNc(6,n,3,4,"div",15),t.qZA()),2&i){const e=u.$implicit;t.xp6(2),t.hij("",e.lable,":"),t.xp6(1),t.Q6J("ngIf","processbar"===e.type),t.xp6(1),t.Q6J("ngIf","countdown"===e.type),t.xp6(1),t.Q6J("ngIf","common"===e.type),t.xp6(1),t.Q6J("ngIf","decimal"===e.type)}}function S(i,u){if(1&i&&(t.ynx(0),t.TgZ(1,"p",18),t._uU(2),t.qZA(),t.BQk()),2&i){const e=t.oxw().$implicit;t.xp6(2),t.hij("",e.text," ")}}function P(i,u){if(1&i&&(t.ynx(0),t.TgZ(1,"div",19),t.TgZ(2,"span",20),t._uU(3," \xb7 "),t.qZA(),t.TgZ(4,"p",21),t._uU(5),t.qZA(),t.qZA(),t.BQk()),2&i){const e=t.oxw().$implicit;t.xp6(5),t.hij(" ",e.text," ")}}function C(i,u){if(1&i&&(t.ynx(0),t.YNc(1,S,3,1,"ng-container",14),t.YNc(2,P,6,1,"ng-container",14),t.BQk()),2&i){const e=u.$implicit;t.xp6(1),t.Q6J("ngIf","Q"===e.type),t.xp6(1),t.Q6J("ngIf","A"===e.type)}}const T=16593552e5,M=[{path:"",component:(()=>{class i{constructor(e,r,f,A){this.refreshService=e,this.activedRoute=r,this.location=f,this.use2earnService=A,this.activityName=""}getCounter(e){const r=new Date(e);return(0,_.H)(0,1e3).pipe((0,R.U)(()=>(0,d.lR)(r.getTime()-(new Date).getTime())))}ngOnInit(){this.initData(),this.unregister=this.refreshService.registerFunction(()=>this.initData())}ngOnDestroy(){this.unregister()}initData(){this.fetchUserData().then(()=>this.getActivityInfo()).then(()=>this.getActivityData()).then(e=>this.rebuildData(e)).then(e=>this.activityData=e)}fetchUserData(){return this.use2earnService.fetchUserData()}getActivityInfo(){return this.activityName=this.activedRoute.snapshot.paramMap.get("activityName"),fetch(`/assets/activity/${this.activityName}.json`).then(e=>e.text()).then(e=>this.activityInfo=JSON.parse(e))}getActivityData(){let e={};const r=(new Date).getTime();switch(this.activityName){case"buyTiUSD":e={activityProgress:r-T<24192e5?100*(r-T)/24192e5:100,activityCountdown:T+24192e5,totalRewards:this.use2earnService.buyTiUSDReward,claimableRewards:this.use2earnService.buyTiUSDPersonalReward-this.use2earnService.buyTiUSDPersonalRewardRate};break;case"holdTiUSD":e={activityProgress:r-T<24192e5?100*(r-T)/24192e5:100,activityCountdown:T+24192e5,totalRewards:this.use2earnService.holdTiUSDReward,claimableRewards:this.use2earnService.holdTiUSDPersonalReward};break;case"buyTiTi":e={activityProgress:r-T<24192e5?100*(r-T)/24192e5:100,activityCountdown:T+24192e5,totalRewards:this.use2earnService.buyTiTiReward,claimableRewards:this.use2earnService.buyTiTiPersonalReward-this.use2earnService.buyTiTiPersonalRewardRate}}return e}rebuildData(e){var r;return null===(r=this.activityInfo)||void 0===r||r.metadata.forEach((f,A)=>{"countdown"===f.type&&(e[f.uuid]=this.getCounter(e[f.uuid]))}),e}goBack(){this.location.back()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(b.g),t.Y36(v.gz),t.Y36(m.Ye),t.Y36(o.Q))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-activity"]],decls:15,vars:4,consts:[[1,"activity-wrapper"],[1,"activity-card","mat-elevation-z4"],[1,"activity-title"],["mat-button","","color","primary",1,"back-btn",3,"click"],["href","https://app.uniswap.org/#/swap?inputCurrency=0xc35d591e9d5D69bf1F2513828CA57B5d15CC66c8&outputCurrency=0x2C8d6418499a1482B8624Dc7Ee64236aA303d30B&chain=rinkeby","target","_blank",4,"ngIf"],[1,""],[1,"activity-data-wrapper"],["class","activity-data-item",4,"ngFor","ngForOf"],[1,"divider"],[1,"descripion"],[4,"ngFor","ngForOf"],["href","https://app.uniswap.org/#/swap?inputCurrency=0xc35d591e9d5D69bf1F2513828CA57B5d15CC66c8&outputCurrency=0x2C8d6418499a1482B8624Dc7Ee64236aA303d30B&chain=rinkeby","target","_blank"],[1,"activity-data-item"],[1,"lable"],[4,"ngIf"],["class","value",4,"ngIf"],["mode","determinate",3,"value"],[1,"value"],[1,"Q"],[2,"display","grid","grid-template-columns","8px auto","padding-left","12px","column-gap","4px"],[2,"font-size","8px"],[1,"A"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"button",3),t.NdJ("click",function(){return r.goBack()}),t._uU(4," < back "),t.qZA(),t.TgZ(5,"h1"),t._uU(6),t.qZA(),t.YNc(7,y,2,0,"a",4),t.qZA(),t.TgZ(8,"div",5),t.TgZ(9,"div",6),t.YNc(10,c,7,5,"div",7),t.qZA(),t._UZ(11,"div",8),t.TgZ(12,"p",9),t._uU(13,"Use-to-earn is an amazing and novel tokenomic paradigm aiming to greatly boost algorithmic stablecoin's user adoption in an unprecedented way. Using TiUSD will always yield your higher earnings than if you use other stablecoins. TiUSD can be illustrated as interest-bearing stablecoin pegging to $1."),t.qZA(),t.YNc(14,C,3,2,"ng-container",10),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(6),t.Oqu(null==r.activityInfo?null:r.activityInfo.name),t.xp6(1),t.Q6J("ngIf","Buy TiTi in Uniswap"===(null==r.activityInfo?null:r.activityInfo.name)),t.xp6(3),t.Q6J("ngForOf",null==r.activityInfo?null:r.activityInfo.metadata),t.xp6(4),t.Q6J("ngForOf",null==r.activityInfo?null:r.activityInfo.description))},directives:[a.lW,m.O5,m.sg,l.pW],pipes:[m.Ov,p.p],styles:[".activity-wrapper[_ngcontent-%COMP%]{padding:12px 36px 12px 12px;width:100%;min-height:calc(100vh - 200px);box-sizing:border-box}.titi-dark-theme[_nghost-%COMP%]   .divider[_ngcontent-%COMP%], .titi-dark-theme   [_nghost-%COMP%]   .divider[_ngcontent-%COMP%]{height:1px;width:100%;margin:16px 0;background:linear-gradient(90deg,rgba(255,255,255,0),#0F5F4F,rgba(255,255,255,0))}.divider[_ngcontent-%COMP%]{height:1px;width:100%;margin:16px 0;background:#dafff8}.activity-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column}.back-btn[_ngcontent-%COMP%]{position:absolute;left:36px;top:36px}.desc-title[_ngcontent-%COMP%]{margin-left:12px;color:#00c997}.descripion[_ngcontent-%COMP%]{padding:4px 12px;font-size:14px;word-wrap:break-word;word-break:break-word;white-space:pre-line;overflow-x:hidden;overflow-y:scroll;margin:0}.Q[_ngcontent-%COMP%]{padding:24px 12px 12px;font-size:28px;word-wrap:break-word;word-break:break-word;white-space:pre-line;overflow-x:hidden;overflow-y:scroll;margin:0}.A[_ngcontent-%COMP%]{padding:0 12px 8px 0;font-size:14px;word-wrap:break-word;word-break:break-word;white-space:pre-line;overflow-x:hidden;overflow-y:scroll;margin:0}.activity-data-wrapper[_ngcontent-%COMP%]{padding:12px;width:60%;margin:0 15%}.activity-data-item[_ngcontent-%COMP%]{margin:28px 0;display:grid;font-size:18px;grid-template-columns:50% 50%;align-items:center}.activity-data-item[_ngcontent-%COMP%]   .lable[_ngcontent-%COMP%]{justify-self:start;align-self:center}.activity-data-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{justify-self:end;align-self:center;color:#2b9177}.titi-dark-theme[_nghost-%COMP%]   .value[_ngcontent-%COMP%], .titi-dark-theme   [_nghost-%COMP%]   .value[_ngcontent-%COMP%]{color:#00ffea}@media screen and (max-width: 1024px){.activity-wrapper[_ngcontent-%COMP%]{width:100%;padding:12px;box-sizing:border-box}.activity-card[_ngcontent-%COMP%]{padding:60px 12px 12px}.activity-title[_ngcontent-%COMP%]{width:100%}.activity-data-wrapper[_ngcontent-%COMP%]{width:100%;box-sizing:border-box}.back-btn[_ngcontent-%COMP%]{position:absolute;left:12px;top:36px}.activity-data-wrapper[_ngcontent-%COMP%]{padding:12px;width:100%;margin:0;box-sizing:border-box}.descripion[_ngcontent-%COMP%]{box-sizing:border-box}}"]}),i})()}];let O=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[v.Bz.forChild(M)],v.Bz]}),i})();var I=s(68326),Z=s(87841);let E=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[m.ez,O,l.Cv,I.Ps,a.ot,Z.m]]}),i})()},32681:(D,w,s)=>{s.d(w,{Q:()=>x});var m=s(70022),v=s(94528),_=s(32856),R=s(98538),d=s.n(R),t=s(5e3),b=s(94602);const o=16593552e5,l=8e5,p=8e5,y=8e5;let x=(()=>{class g{constructor(n){this.accountService=n,this.buyTiUSDReward=l,this.buyTiUSDPersonalReward=0,this.buyTiUSDRewardRate=l/28,this.buyTiUSDPersonalRewardRate=0,this.holdTiUSDReward=p,this.holdTiUSDPersonalReward=0,this.holdTiUSDRewardRate=p/28,this.holdTiUSDPersonalRewardRate=0,this.buyTiTiReward=y,this.buyTiTiPersonalReward=0,this.buyTiTiRewardRate=y/28,this.buyTiTiPersonalRewardRate=0,this.totalClaimableRewards=0,this.distributedTiTiRewards=0,this.APIURL="https://api.thegraph.com/subgraphs/name/ookurumi/titi-use-to-earn",this.client=new m.f({uri:this.APIURL,cache:new v.h})}fetchUserData(){return this.fetchUserDailyData().then(({data:n})=>{this.buyTiUSDPersonalReward=0,this.holdTiUSDPersonalReward=0,this.buyTiTiPersonalReward=0,this.buyTiUSDPersonalRewardRate=0,this.holdTiUSDPersonalRewardRate=0,this.buyTiTiPersonalRewardRate=0,n.user&&(n.user.dailyUserMint.forEach(c=>{1e3*(c.dailyMint.dayStartTimestamp+43200)>=o&&1e3*(c.dailyMint.dayStartTimestamp+43200)<o+24192e5&&(this.buyTiUSDPersonalReward+=this.buyTiUSDRewardRate*c.dailyVolume/c.dailyMint.dailyTotalVolume)}),this.holdTiUSDPersonalReward=new(d())(n.user.rewards).add(new(d())(n.user.balance).mul(this.rewardPerToken(n.holder).sub(new(d())(n.user.userRewardPerTokenPaid))).div(new(d())("10").pow(new(d())("18")))).mul(new(d())("10000")).div(new(d())("10").pow(new(d())("18"))).toNumber()/1e4,n.user.dailyUserSwap.forEach(c=>{1e3*(c.dailySwap.dayStartTimestamp+43200)>=o&&1e3*(c.dailySwap.dayStartTimestamp+43200)<o+24192e5&&(this.buyTiTiPersonalReward+=this.buyTiTiRewardRate*c.dailyVolume/c.dailySwap.dailyTotalVolume)}),this.buyTiUSDPersonalRewardRate=n.dailyUserMint&&n.dailyUserMint.dailyMint.dailyTotalVolume?this.buyTiUSDRewardRate*n.dailyUserMint.dailyVolume/n.dailyUserMint.dailyMint.dailyTotalVolume:0,this.buyTiTiPersonalRewardRate=n.dailyUserSwap&&n.dailyUserSwap.dailySwap.dailyTotalVolume?this.buyTiTiRewardRate*n.dailyUserSwap.dailyVolume/n.dailyUserSwap.dailySwap.dailyTotalVolume:0,this.holdTiUSDPersonalRewardRate=(new Date).getTime()<o+24192e5?this.holdTiUSDRewardRate*n.user.balance/n.holder.totalSupply:0),this.distributedTiTiRewards=(1e3*this.lastTimeRewardApplicable()-o)/864e5*(this.buyTiUSDRewardRate+this.holdTiUSDRewardRate+this.buyTiTiRewardRate)})}rewardPerToken(n){if(0===Number.parseInt(n.totalSupply))return new(d())(n.rewardPerTokenStored);const c=new(d())(this.lastTimeRewardApplicable()-1*n.lastUpdateTime).mul(new(d())(this.holdTiUSDRewardRate).mul(new(d())("1000000000000000000"))).mul(new(d())("1000000000000000000")).div(new(d())(n.totalSupply).mul(new(d())(86400)));return new(d())(n.rewardPerTokenStored).add(c)}lastTimeRewardApplicable(){let n;const c=(new Date).getTime();return n=c<o?o:c<o+24192e5?c:o+24192e5,n/1e3}fetchUserDailyData(){return this.accountService.getCurrentAccountAsyn().then(c=>this.client.query({query:(0,_.Ps)('\n    query($id: ID,$dayId:ID) {\n      user(id:$id){\n        id\n        address\n        rewards\n        balance\n        userRewardPerTokenPaid\n        dailyUserTransfer{\n          dailyTransfer{\n            dayStartTimestamp\n            dailyTotalVolume\n          }\n          dailyVolume\n        }\n        dailyUserMint{\n          dailyMint{\n            dayStartTimestamp\n            dailyTotalVolume\n          }\n          dailyVolume\n        }\n        dailyUserSwap{\n          dailySwap{\n            dayStartTimestamp\n            dailyTotalVolume\n          }\n          dailyVolume\n        }\n      }\n      holder(id:"1"){\n        lastUpdateTime\n        rewardPerTokenStored\n        totalSupply\n      }\n      dailyUserTransfer(id:$dayId){\n        dailyVolume\n        dailyTransfer{\n          dailyTotalVolume\n        }\n      }\n      dailyUserMint(id:$dayId){\n        dailyVolume\n        dailyMint{\n          dailyTotalVolume\n        }\n      }\n      dailyUserSwap(id:$dayId){\n        dailyVolume\n        dailySwap{\n          dailyTotalVolume\n        }\n      }\n   }\n  '),variables:{id:c.toLowerCase(),dayId:c.toLowerCase()+"-"+Number.parseInt(((new Date).getTime()-432e5)/864e5+"")},fetchPolicy:"network-only"}))}}return g.\u0275fac=function(n){return new(n||g)(t.LFG(b.B))},g.\u0275prov=t.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);