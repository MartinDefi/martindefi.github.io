"use strict";(self.webpackChunkapp_titi_frontend=self.webpackChunkapp_titi_frontend||[]).push([[351],{10351:(x,m,o)=>{o.r(m),o.d(m,{ActivityModule:()=>Z});var u=o(69808),T=o(91083),f=o(5963),g=o(54004),R=o(28321),t=o(5e3),p=o(31657),w=o(32681),h=o(47423),v=o(85899),_=o(75303);function c(e,r){if(1&e&&(t.TgZ(0,"div"),t._UZ(1,"mat-progress-bar",14),t.qZA()),2&e){const i=t.oxw().$implicit,n=t.oxw();t.xp6(1),t.Q6J("value",n.activityData[i.uuid])}}function U(e,r){if(1&e&&(t.TgZ(0,"div",15),t._uU(1),t.ALo(2,"async"),t.qZA()),2&e){const i=t.oxw().$implicit,n=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,n.activityData[i.uuid])," ")}}function a(e,r){if(1&e&&(t.TgZ(0,"div",15),t._uU(1),t.qZA()),2&e){const i=t.oxw().$implicit,n=t.oxw();t.xp6(1),t.hij(" ",n.activityData[i.uuid]," ")}}function s(e,r){if(1&e&&(t.TgZ(0,"div",15),t._uU(1),t.ALo(2,"numberFormat"),t.qZA()),2&e){const i=t.oxw().$implicit,n=t.oxw();t.xp6(1),t.hij(" ",t.xi3(2,1,n.activityData[i.uuid],4)," TiTi ")}}function D(e,r){if(1&e&&(t.TgZ(0,"div",10),t.TgZ(1,"div",11),t._uU(2),t.qZA(),t.YNc(3,c,2,1,"div",12),t.YNc(4,U,3,3,"div",13),t.YNc(5,a,2,1,"div",13),t.YNc(6,s,3,4,"div",13),t.qZA()),2&e){const i=r.$implicit;t.xp6(2),t.hij("",i.lable,":"),t.xp6(1),t.Q6J("ngIf","processbar"===i.type),t.xp6(1),t.Q6J("ngIf","countdown"===i.type),t.xp6(1),t.Q6J("ngIf","common"===i.type),t.xp6(1),t.Q6J("ngIf","decimal"===i.type)}}function A(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"p",16),t._uU(2),t.qZA(),t.BQk()),2&e){const i=t.oxw().$implicit;t.xp6(2),t.hij("",i.text," ")}}function S(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"div",17),t.TgZ(2,"span",18),t._uU(3," \xb7 "),t.qZA(),t.TgZ(4,"p",19),t._uU(5),t.qZA(),t.qZA(),t.BQk()),2&e){const i=t.oxw().$implicit;t.xp6(5),t.hij(" ",i.text," ")}}function P(e,r){if(1&e&&(t.ynx(0),t.YNc(1,A,3,1,"ng-container",12),t.YNc(2,S,6,1,"ng-container",12),t.BQk()),2&e){const i=r.$implicit;t.xp6(1),t.Q6J("ngIf","Q"===i.type),t.xp6(1),t.Q6J("ngIf","A"===i.type)}}const l=16461792e5,C=[{path:"",component:(()=>{class e{constructor(i,n,y,b){this.refreshService=i,this.activedRoute=n,this.location=y,this.use2earnService=b,this.activityName=""}getCounter(i){const n=new Date(i);return(0,f.H)(0,1e3).pipe((0,g.U)(()=>(0,R.lR)(n.getTime()-(new Date).getTime())))}ngOnInit(){this.initData(),this.unregister=this.refreshService.registerFunction(()=>this.initData())}ngOnDestroy(){this.unregister()}initData(){this.fetchUserData().then(()=>this.getActivityInfo()).then(()=>this.getActivityData()).then(i=>this.rebuildData(i)).then(i=>this.activityData=i)}fetchUserData(){return this.use2earnService.fetchUserData()}getActivityInfo(){return this.activityName=this.activedRoute.snapshot.paramMap.get("activityName"),fetch(`/assets/activity/${this.activityName}.json`).then(i=>i.text()).then(i=>this.activityInfo=JSON.parse(i))}getActivityData(){let i={};const n=(new Date).getTime();switch(this.activityName){case"buyTiUSD":i={activityProgress:n-l<2592e6?100*(n-l)/2592e6:100,activityCountdown:l+2592e6,totalRewards:this.use2earnService.buyTiUSDReward,claimableRewards:this.use2earnService.buyTiUSDPersonalReward};break;case"holdTiUSD":i={activityProgress:n-l<2592e6?100*(n-l)/2592e6:100,activityCountdown:l+2592e6,totalRewards:this.use2earnService.holdTiUSDReward,claimableRewards:this.use2earnService.holdTiUSDPersonalReward};break;case"buyTiTi":i={activityProgress:n-l<2592e6?100*(n-l)/2592e6:100,activityCountdown:l+2592e6,totalRewards:this.use2earnService.buyTiTiReward,claimableRewards:this.use2earnService.buyTiTiPersonalReward}}return i}rebuildData(i){var n;return null===(n=this.activityInfo)||void 0===n||n.metadata.forEach((y,b)=>{"countdown"===y.type&&(i[y.uuid]=this.getCounter(i[y.uuid]))}),i}goBack(){this.location.back()}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(p.g),t.Y36(T.gz),t.Y36(u.Ye),t.Y36(w.Q))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-activity"]],decls:14,vars:3,consts:[[1,"activity-wrapper"],[1,"activity-card","mat-elevation-z4"],[1,"activity-title"],["mat-button","","color","primary",1,"back-btn",3,"click"],[1,""],[1,"activity-data-wrapper"],["class","activity-data-item",4,"ngFor","ngForOf"],[1,"divider"],[1,"descripion"],[4,"ngFor","ngForOf"],[1,"activity-data-item"],[1,"lable"],[4,"ngIf"],["class","value",4,"ngIf"],["mode","determinate",3,"value"],[1,"value"],[1,"Q"],[2,"display","grid","grid-template-columns","8px auto","padding-left","12px","column-gap","4px"],[2,"font-size","8px"],[1,"A"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"button",3),t.NdJ("click",function(){return n.goBack()}),t._uU(4," < back "),t.qZA(),t.TgZ(5,"h1"),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"div",4),t.TgZ(8,"div",5),t.YNc(9,D,7,5,"div",6),t.qZA(),t._UZ(10,"div",7),t.TgZ(11,"p",8),t._uU(12,"Use-to-earn is an amazing and novel tokenomic paradigm aiming to greatly boost algorithmic stablecoin's user adoption in an unprecedented way. Using TiUSD will always yield your higher earnings than if you use other stablecoins. TiUSD can be illustrated as interest-bearing stablecoin pegging to $1."),t.qZA(),t.YNc(13,P,3,2,"ng-container",9),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(6),t.Oqu(null==n.activityInfo?null:n.activityInfo.name),t.xp6(3),t.Q6J("ngForOf",null==n.activityInfo?null:n.activityInfo.metadata),t.xp6(4),t.Q6J("ngForOf",null==n.activityInfo?null:n.activityInfo.description))},directives:[h.lW,u.sg,u.O5,v.pW],pipes:[u.Ov,_.p],styles:[".activity-wrapper[_ngcontent-%COMP%]{padding:12px 36px 12px 12px;width:100%;min-height:calc(100vh - 200px);box-sizing:border-box}.titi-dark-theme[_nghost-%COMP%]   .divider[_ngcontent-%COMP%], .titi-dark-theme   [_nghost-%COMP%]   .divider[_ngcontent-%COMP%]{height:1px;width:100%;margin:16px 0;background:linear-gradient(90deg,rgba(255,255,255,0),#0F5F4F,rgba(255,255,255,0))}.divider[_ngcontent-%COMP%]{height:1px;width:100%;margin:16px 0;background:#dafff8}.activity-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.back-btn[_ngcontent-%COMP%]{position:absolute;left:36px;top:36px}.desc-title[_ngcontent-%COMP%]{margin-left:12px;color:#00c997}.descripion[_ngcontent-%COMP%]{padding:4px 12px;font-size:14px;word-wrap:break-word;word-break:break-word;white-space:pre-line;overflow-x:hidden;overflow-y:scroll;margin:0}.Q[_ngcontent-%COMP%]{padding:24px 12px 12px;font-size:28px;word-wrap:break-word;word-break:break-word;white-space:pre-line;overflow-x:hidden;overflow-y:scroll;margin:0}.A[_ngcontent-%COMP%]{padding:0 12px 8px 0;font-size:14px;word-wrap:break-word;word-break:break-word;white-space:pre-line;overflow-x:hidden;overflow-y:scroll;margin:0}.activity-data-wrapper[_ngcontent-%COMP%]{padding:12px;width:60%;margin:0 15%}.activity-data-item[_ngcontent-%COMP%]{margin:28px 0;display:grid;font-size:18px;grid-template-columns:50% 50%;align-items:center}.activity-data-item[_ngcontent-%COMP%]   .lable[_ngcontent-%COMP%]{justify-self:start;align-self:center}.activity-data-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{justify-self:end;align-self:center;color:#2b9177}.titi-dark-theme[_nghost-%COMP%]   .value[_ngcontent-%COMP%], .titi-dark-theme   [_nghost-%COMP%]   .value[_ngcontent-%COMP%]{color:#00ffea}@media screen and (max-width: 1024px){.activity-wrapper[_ngcontent-%COMP%]{width:100%;padding:12px;box-sizing:border-box}.activity-card[_ngcontent-%COMP%]{padding:60px 12px 12px}.activity-title[_ngcontent-%COMP%]{width:100%}.activity-data-wrapper[_ngcontent-%COMP%]{width:100%;box-sizing:border-box}.back-btn[_ngcontent-%COMP%]{position:absolute;left:12px;top:36px}.activity-data-wrapper[_ngcontent-%COMP%]{padding:12px;width:100%;margin:0;box-sizing:border-box}.descripion[_ngcontent-%COMP%]{box-sizing:border-box}}"]}),e})()}];let M=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[T.Bz.forChild(C)],T.Bz]}),e})();var O=o(68326),I=o(87841);let Z=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.ez,M,v.Cv,O.Ps,h.ot,I.m]]}),e})()},32681:(x,m,o)=>{o.d(m,{Q:()=>_});var u=o(70022),T=o(94528),f=o(32856),g=o(5e3),R=o(94602);const t=16523136e5,w=2e5,h=2e5,v=2e5;let _=(()=>{class c{constructor(a){this.accountService=a,this.buyTiUSDReward=w,this.buyTiUSDPersonalReward=0,this.buyTiUSDRewardRate=w/7,this.buyTiUSDPersonalRewardRate=0,this.holdTiUSDReward=h,this.holdTiUSDPersonalReward=0,this.holdTiUSDRewardRate=h/7,this.holdTiUSDPersonalRewardRate=0,this.buyTiTiReward=v,this.buyTiTiPersonalReward=0,this.buyTiTiRewardRate=v/7,this.buyTiTiPersonalRewardRate=0,this.totalClaimableRewards=0,this.distributedTiTiRewards=0,this.APIURL="https://api.thegraph.com/subgraphs/name/ookurumi/titi-use-to-earn",this.client=new u.f({uri:this.APIURL,cache:new T.h})}fetchUserData(){return this.fetchUserDailyData().then(({data:a})=>{this.buyTiUSDPersonalReward=0,this.holdTiUSDPersonalReward=0,this.buyTiTiPersonalReward=0,this.buyTiUSDPersonalRewardRate=0,this.holdTiUSDPersonalRewardRate=0,this.buyTiTiPersonalRewardRate=0,a.user&&(a.user.dailyUserMint.forEach(s=>{this.buyTiUSDPersonalReward+=this.buyTiUSDRewardRate*s.dailyVolume/s.dailyMint.dailyTotalVolume}),this.holdTiUSDPersonalReward=1*a.user.rewards+a.user.balance*(this.rewardPerToken(a.holder)-a.user.userRewardPerTokenPaid)/10**18,a.user.dailyUserSwap.forEach(s=>{this.buyTiTiPersonalReward+=this.buyTiTiRewardRate*s.dailyVolume/s.dailySwap.dailyTotalVolume}),this.buyTiUSDPersonalRewardRate=a.dailyUserMint&&a.dailyUserMint.dailyMint.dailyTotalVolume?this.buyTiUSDRewardRate*a.dailyUserMint.dailyVolume/a.dailyUserMint.dailyMint.dailyTotalVolume:0,this.buyTiTiPersonalRewardRate=a.dailyUserSwap&&a.dailyUserSwap.dailySwap.dailyTotalVolume?this.buyTiTiRewardRate*a.dailyUserSwap.dailyVolume/a.dailyUserSwap.dailySwap.dailyTotalVolume:0,this.holdTiUSDPersonalRewardRate=this.holdTiUSDRewardRate*a.user.balance/a.holder.totalSupply),this.distributedTiTiRewards=((new Date).getTime()-t)/864e5*(this.buyTiUSDRewardRate+this.holdTiUSDRewardRate+this.buyTiTiRewardRate)})}rewardPerToken(a){return 0===Number.parseInt(a.totalSupply)?a.rewardPerTokenStored:1*a.rewardPerTokenStored+(this.lastTimeRewardApplicable()-a.lastUpdateTime)*this.holdTiUSDRewardRate*10**18/(3600*a.totalSupply*24)}lastTimeRewardApplicable(){let a;const s=(new Date).getTime();return a=s<t?t:s<t+6048e5?s:t+6048e5,a/1e3}fetchUserDailyData(){return this.accountService.getCurrentAccountAsyn().then(s=>this.client.query({query:(0,f.Ps)('\n    query($id: ID,$dayId:ID) {\n      user(id:$id){\n        id\n        address\n        rewards\n        balance\n        userRewardPerTokenPaid\n        dailyUserTransfer{\n          dailyTransfer{\n            dayStartTimestamp\n            dailyTotalVolume\n          }\n          dailyVolume\n        }\n        dailyUserMint{\n          dailyMint{\n            dayStartTimestamp\n            dailyTotalVolume\n          }\n          dailyVolume\n        }\n        dailyUserSwap{\n          dailySwap{\n            dayStartTimestamp\n            dailyTotalVolume\n          }\n          dailyVolume\n        }\n      }\n      holder(id:"1"){\n        lastUpdateTime\n        rewardPerTokenStored\n        totalSupply\n      }\n      dailyUserTransfer(id:$dayId){\n        dailyVolume\n        dailyTransfer{\n          dailyTotalVolume\n        }\n      }\n      dailyUserMint(id:$dayId){\n        dailyVolume\n        dailyMint{\n          dailyTotalVolume\n        }\n      }\n      dailyUserSwap(id:$dayId){\n        dailyVolume\n        dailySwap{\n          dailyTotalVolume\n        }\n      }\n   }\n  '),variables:{id:s.toLowerCase(),dayId:s.toLowerCase()+"-"+Number.parseInt((new Date).getTime()/864e5+"")},fetchPolicy:"network-only"}))}}return c.\u0275fac=function(a){return new(a||c)(g.LFG(R.B))},c.\u0275prov=g.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);