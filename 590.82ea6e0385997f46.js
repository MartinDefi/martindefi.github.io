"use strict";(self.webpackChunkapp_titi_frontend=self.webpackChunkapp_titi_frontend||[]).push([[590],{28321:(v,w,c)=>{function S(){const n=(new Date).getTime(),r=[];let s=36e5*parseInt(n/36e5+"");for(let l=0;l<720;l++)r.push(s),s-=36e5;return r}function T(){const n=(new Date).getTime(),r=[];let s=864e5*parseInt(n/864e5+"");for(let l=0;l<30;l++)r.push(s),s-=864e5;return r}function u(){const n=(new Date).getTime();return 86400*parseInt(n/864e5+"")-2592e3}function m(d){return d>0?[parseInt(d/864e5+"")+"d",parseInt(d%864e5/36e5+"")+"h",parseInt(d%36e5/6e4+"")+"m"].join(":"):[" -- d"," -- h"," -- m"].join(":")}function p(d){return d>0?[parseInt(d/864e5+"")+"d",parseInt(d%864e5/36e5+"")+"h",parseInt(d%36e5/6e4+"")+"m",parseInt(d%6e4/1e3+"")+"s"].join(":"):[" -- d"," -- h"," -- m"," -- s"].join(":")}function t(d){let n=d;const r=n.substring(0,1),s=n.substring(1,2);if(n.length>1&&"0"===r&&"."!==s&&(n=n.substring(1,2)),"."===r&&(n=""),-1!==n.indexOf(".")){let l=n.substring(n.indexOf(".")+1);-1!==l.indexOf(".")&&(n=n.substring(0,n.indexOf(".")+l.indexOf(".")+1))}return n=n.replace(/[^\d^\.]+/g,""),n}function D(d){let n=t(d);return-1===n.indexOf(".")&&(n+=".0000"),n=n.replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/,"$1$2.$3").replace(".",""),n}c.d(w,{jn:()=>S,Gq:()=>T,Mv:()=>u,fA:()=>m,lR:()=>p,Y4:()=>t,uM:()=>D})},40590:(v,w,c)=>{c.r(w),c.d(w,{MyAccountModule:()=>st});var S=c(69808),T=c(91083),u=c(11730),m=c(98538),p=c.n(m),t=c(5e3),D=c(94602),d=c(32681),n=c(31657),r=c(53405),s=c(92134),l=c(32075),x=c(75303);function q(i,o){1&i&&(t.TgZ(0,"th",20),t._uU(1,"Act."),t.qZA())}function Z(i,o){if(1&i&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Oqu(e.act)}}function O(i,o){1&i&&(t.TgZ(0,"th",20),t._uU(1,"Your Staked Value"),t.qZA())}function $(i,o){if(1&i&&(t.TgZ(0,"td",21),t._uU(1),t.ALo(2,"numberFormat"),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.staked,4))}}function I(i,o){1&i&&(t.TgZ(0,"th",20),t._uU(1,"Claimable TiTi Rewards"),t.qZA())}function B(i,o){1&i&&t._UZ(0,"titi-tooltip",23)}function E(i,o){if(1&i&&(t.TgZ(0,"td",21),t._uU(1),t.ALo(2,"numberFormat"),t.YNc(3,B,1,0,"titi-tooltip",22),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.hij("",t.xi3(2,2,e.reward,4)," "),t.xp6(2),t.Q6J("ngIf","TiTi Staking"===e.act)}}function L(i,o){1&i&&(t.TgZ(0,"th",20),t._uU(1,"Dynamic APY"),t.qZA())}function N(i,o){if(1&i&&(t.TgZ(0,"td",21),t._uU(1),t.ALo(2,"numberFormat"),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.hij("",t.xi3(2,1,e.apy,4),"%")}}function Y(i,o){1&i&&t._UZ(0,"tr",24)}function F(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"tr",25),t.NdJ("click",function(){const y=t.CHM(e).$implicit;return t.oxw().onRowClick(y)}),t.qZA()}}function V(i,o){1&i&&(t.TgZ(0,"th",20),t._uU(1,"Act."),t.qZA())}function H(i,o){if(1&i&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Oqu(e.act)}}function Q(i,o){1&i&&(t.TgZ(0,"th",20),t._uU(1,"Total Rewards"),t.qZA())}function z(i,o){if(1&i&&(t.TgZ(0,"td",21),t._uU(1),t.ALo(2,"numberFormat"),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.hij("",t.xi3(2,1,e.total,4)," TiTi")}}function j(i,o){1&i&&(t.TgZ(0,"th",20),t._uU(1,"Pending Rewards"),t.qZA())}function W(i,o){if(1&i&&(t.TgZ(0,"td",21),t._uU(1),t.ALo(2,"numberFormat"),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.hij("",t.xi3(2,1,e.personal,4)," TiTi")}}function J(i,o){1&i&&(t.TgZ(0,"th",20),t._uU(1,"Expected Rewards Rate"),t.qZA())}function G(i,o){if(1&i&&(t.TgZ(0,"td",21),t._uU(1),t.ALo(2,"numberFormat"),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.hij("",t.xi3(2,1,e.rate,4)," TiTi/Day")}}function K(i,o){1&i&&t._UZ(0,"tr",24)}function X(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"tr",25),t.NdJ("click",function(){const y=t.CHM(e).$implicit;return t.oxw().onRowClick(y)}),t.qZA()}}let tt=(()=>{class i{constructor(e,a,h,y,f,M){this.router=e,this.web3Service=a,this.accountService=h,this.use2earnService=y,this.refreshService=f,this.graphService=M,this.displayedColumns1=["act","staked","reward","apy"],this.displayedColumns2=["act","total","personal","rate"],this.dataSource1=[],this.dataSource2=[],this.buyTiUSDReward=_,this.buyTiUSDPersonalReward=0,this.buyTiUSDRewardRate=_/g,this.buyTiUSDPersonalRewardRate=0,this.transferTiUSDReward=U,this.transferTiUSDPersonalReward=0,this.transferTiUSDRewardRate=U/g,this.transferTiUSDPersonalRewardRate=0,this.holdTiUSDReward=A,this.holdTiUSDPersonalReward=0,this.holdTiUSDRewardRate=A/g,this.holdTiUSDPersonalRewardRate=0,this.buyTiTiReward=k,this.buyTiTiPersonalReward=0,this.buyTiTiRewardRate=k/g,this.buyTiTiPersonalRewardRate=0,this.totalClaimableRewards=0,this.distributedTiTiRewards=0,this.usdcMmfStaked=0,this.usdcMmfReward=0,this.usdcMmfApy=0,this.lpMiningStaked=0,this.lpMiningReward=0,this.lpMiningApy=0,this.titiStakingStaked=0,this.titiStakingReward=0,this.titiStakingApy=0,this.clickedRows=new Set,this.TiUSDBalance=0,this.TiTiBalance=0,this.mmfDecimal1=6,this.lpminingDecimal1=18}ngOnInit(){this.initData(),this.unregister=this.refreshService.registerFunction(()=>this.initData())}ngOnDestroy(){this.unregister()}initData(){this.fetchBalanceOfTiUSD(),this.fetchBalanceOfTiTi(),Promise.all([this.fetchUserUse2EarnData(),this.fetchMMFData(),this.fetchLpMiningData(),this.fetchTiTiStakingData()]).then(()=>this.buildDataSource())}fetchMMFData(){return this.accountService.getCurrentAccountAsyn().then(e=>Promise.all([this.web3Service.invokeContract("MMFLPStakingPool","balanceOf",[e]),this.web3Service.invokeContract("MMFLPStakingPool","rewardRate",[]),this.web3Service.invokeContract("MMFLPStakingPool","earned",[e]),this.web3Service.invokeContract("UniswapV2Pair","getReserves",[]),this.graphService.fetchTodayMMFRewardData(u.wE.MAMMSwapPair)]).then(a=>{this.usdcMmfStaked=a[0][0]/10**this.mmfDecimal1;const h=a[1][0];this.usdcMmfReward=a[2][0]/10**18,this.usdcMmfApy=3600*(a[3][0]/a[3][1]*h/10**18+(a[4].data.mmfrewardDailyData?a[4].data.mmfrewardDailyData.mmfReward:0)/10**this.mmfDecimal1)*24*365/(a[4].data.pair.fund0/10**this.mmfDecimal1)*100}))}fetchLpMiningData(){return this.accountService.getCurrentAccountAsyn().then(e=>Promise.all([this.web3Service.invokeContract("LPStakingPool","balanceOf",[e]),this.web3Service.invokeContract("LPStakingPool","earned",[e]),this.web3Service.invokeContract("LPStakingPool","rewardRate",[]),this.web3Service.invokeContract("UniswapV2Pair","getReserves",[]),this.web3Service.invokeContract("LPStakingPool","totalSupply",[])]).then(a=>{this.lpMiningStaked=a[0][0]/10**this.lpminingDecimal1,this.lpMiningReward=a[1][0]/10**18,this.lpMiningApy=1*a[4][0]>0?a[2][0]*(a[3][0]/a[3][1])*3600*24*365*100/(2*a[4][0]*10**18):0}))}fetchTiTiStakingData(){return this.accountService.getCurrentAccountAsyn().then(e=>Promise.all([this.web3Service.invokeContract("TiTiStaking","getStakeValue",[e]),this.web3Service.invokeContract("TiTiStaking","users",[e]),this.web3Service.invokeContract("TiTiStaking","WITHDRAW_DURATION",[]),this.web3Service.invokeContract("TiTiStaking","UNBONDING_DURATION",[]),this.graphService.fetchTiTiStakingDailyData(),this.web3Service.invokeContract("TiTiBackendV1","epochNum",[])]).then(([a,h,y,f,M,ct])=>{const P=new(p())(h.share),b=new(p())(h.unbondShare);let C=0;1e3*h.unbondTime+1e3*f[0]<=(new Date).getTime()?this.titiStakingReward=P.isZero()?0:new(p())(a[0]/10**18).mul(b).div(P).toNumber():C=P.isZero()?0:new(p())(a[0]/10**18).mul(b).div(P).toNumber(),this.titiStakingStaked=a[0]/10**18-C-this.titiStakingReward,this.titiStakingApy=M.data.tiTiStakingEpochDailyDatas[0]&&M.data.tiTiStakingEpochDailyDatas[0].epoch.id==ct[0]?100*M.data.tiTiStakingEpochDailyDatas[0].apy:0}))}fetchBalanceOfTiUSD(){this.accountService.getCurrentAccountAsyn().then(e=>this.web3Service.invokeContract("TiUSDToken","balanceOf",[e]).then(a=>{this.TiUSDBalance=a[0]/10**18}))}fetchBalanceOfTiTi(){this.accountService.getCurrentAccountAsyn().then(e=>this.web3Service.invokeContract("TiTiToken","balanceOf",[e]).then(a=>{this.TiTiBalance=a[0]/10**18}))}fetchUserUse2EarnData(){return this.use2earnService.fetchUserDailyData().then(({data:e})=>{this.buyTiUSDPersonalReward=0,this.transferTiUSDPersonalReward=0,this.holdTiUSDPersonalReward=0,this.buyTiTiPersonalReward=0,this.buyTiUSDPersonalRewardRate=0,this.transferTiUSDPersonalRewardRate=0,this.holdTiUSDPersonalRewardRate=0,this.buyTiTiPersonalRewardRate=0,e.user.dailyUserMint.forEach(a=>{this.buyTiUSDPersonalReward+=this.buyTiUSDRewardRate*a.dailyVolume/a.dailyMint.dailyTotalVolume}),e.user.dailyUserTransfer.forEach(a=>{this.transferTiUSDPersonalReward+=this.transferTiUSDRewardRate*a.dailyVolume/a.dailyTransfer.dailyTotalVolume}),this.holdTiUSDPersonalReward=1*e.user.rewards+e.user.balance*(this.rewardPerToken(e.holder)-e.user.userRewardPerTokenPaid)/10**18,e.user.dailyUserSwap.forEach(a=>{this.buyTiTiPersonalReward+=this.buyTiTiRewardRate*a.dailyVolume/a.dailySwap.dailyTotalVolume}),this.buyTiUSDPersonalRewardRate=e.dailyUserMint&&e.dailyUserMint.dailyMint.dailyTotalVolume?this.buyTiUSDRewardRate*e.dailyUserMint.dailyVolume/e.dailyUserMint.dailyMint.dailyTotalVolume:0,this.transferTiUSDPersonalRewardRate=e.dailyUserTransfer&&e.dailyUserTransfer.dailyTransfer.dailyTotalVolume?this.transferTiUSDRewardRate*e.dailyUserTransfer.dailyVolume/e.dailyUserTransfer.dailyTransfer.dailyTotalVolume:0,this.buyTiTiPersonalRewardRate=e.dailyUserSwap&&e.dailyUserSwap.dailySwap.dailyTotalVolume?this.buyTiTiRewardRate*e.dailyUserSwap.dailyVolume/e.dailyUserSwap.dailySwap.dailyTotalVolume:0,this.holdTiUSDPersonalRewardRate=this.holdTiUSDRewardRate*e.user.balance/e.holder.totalSupply,this.distributedTiTiRewards=((new Date).getTime()-R)/864e5*(this.buyTiUSDRewardRate+this.transferTiUSDRewardRate+this.holdTiUSDRewardRate+this.buyTiTiRewardRate)})}rewardPerToken(e){return 0===Number.parseInt(e.totalSupply)?e.rewardPerTokenStored:1*e.rewardPerTokenStored+(this.lastTimeRewardApplicable()-e.lastUpdateTime)*this.holdTiUSDRewardRate*10**18/(3600*e.totalSupply*24)}lastTimeRewardApplicable(){let e;const a=(new Date).getTime();return e=a<R?R:a<R+24*g*3600*1e3?a:R+24*g*3600*1e3,e/1e3}buildDataSource(){this.dataSource1=[{act:"USDC-MMF",staked:this.usdcMmfStaked,reward:this.usdcMmfReward,apy:this.usdcMmfApy,url:"/mmf"},{act:"LP Mining",staked:this.lpMiningStaked,reward:this.lpMiningReward,apy:this.lpMiningApy,url:"/lpmining"},{act:"TiTi Staking",staked:this.titiStakingStaked,reward:this.titiStakingReward,apy:this.titiStakingApy,url:"/titiStaking"}],this.dataSource2=[{act:"Buy TiUSD in MAMM",total:this.buyTiUSDReward,personal:this.buyTiUSDPersonalReward,rate:this.buyTiUSDPersonalRewardRate,url:"/use2earn/activity/buyTiUSD"},{act:"Transfer TiUSD",total:this.transferTiUSDReward,personal:this.transferTiUSDPersonalReward,rate:this.transferTiUSDPersonalRewardRate,url:"/use2earn/activity/useTiUSD"},{act:"TiUSD Holder",total:this.holdTiUSDReward,personal:this.holdTiUSDPersonalReward,rate:this.holdTiUSDPersonalRewardRate,url:"/use2earn/activity/buyTiUSD"},{act:"Buy TiTi in Uniswap",total:this.buyTiTiReward,personal:this.buyTiTiPersonalReward,rate:this.buyTiTiPersonalRewardRate,url:"/use2earn/activity/buyTiUSD"}]}onRowClick(e){this.router.navigateByUrl(e.url)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(T.F0),t.Y36(u.Uc),t.Y36(D.B),t.Y36(d.Q),t.Y36(n.g),t.Y36(r.h))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-my-account"]],decls:55,vars:14,consts:[[1,"my-account-wrapper"],[1,"mat-elevation-z4","biz-info-card"],[1,"title"],[1,"value"],["text","Coming Soon ~"],[1,"mat-elevation-z4","farm-table-wrapper"],["mat-table","",1,"farm-table",3,"dataSource"],["matColumnDef","act"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","staked"],["matColumnDef","reward"],["matColumnDef","apy"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],[1,"mat-elevation-z4","use2earn-table-wrapper"],["mat-table","",1,"use2earn-table",3,"dataSource"],["matColumnDef","total"],["matColumnDef","personal"],["matColumnDef","rate"],["mat-header-cell",""],["mat-cell",""],["text","Your unlocked claimable TiTi in TiTi-Staking",4,"ngIf"],["text","Your unlocked claimable TiTi in TiTi-Staking"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h2",2),t._uU(3,"TiUSD Balance"),t.qZA(),t.TgZ(4,"span",3),t._uU(5),t.ALo(6,"numberFormat"),t.qZA(),t.qZA(),t.TgZ(7,"div",1),t.TgZ(8,"h2",2),t._uU(9,"TiTi Balance"),t.qZA(),t.TgZ(10,"span",3),t._uU(11),t.ALo(12,"numberFormat"),t.qZA(),t.qZA(),t.TgZ(13,"div",1),t.TgZ(14,"h2",2),t._uU(15,"Your Account Level"),t.qZA(),t.TgZ(16,"span",3),t._uU(17,"Lv. - - "),t._UZ(18,"titi-tooltip",4),t.qZA(),t.qZA(),t.TgZ(19,"div",5),t.TgZ(20,"h2"),t._uU(21,"Farm List"),t.qZA(),t.TgZ(22,"table",6),t.ynx(23,7),t.YNc(24,q,2,0,"th",8),t.YNc(25,Z,2,1,"td",9),t.BQk(),t.ynx(26,10),t.YNc(27,O,2,0,"th",8),t.YNc(28,$,3,4,"td",9),t.BQk(),t.ynx(29,11),t.YNc(30,I,2,0,"th",8),t.YNc(31,E,4,5,"td",9),t.BQk(),t.ynx(32,12),t.YNc(33,L,2,0,"th",8),t.YNc(34,N,3,4,"td",9),t.BQk(),t.YNc(35,Y,1,0,"tr",13),t.YNc(36,F,1,0,"tr",14),t.qZA(),t.qZA(),t.TgZ(37,"div",15),t.TgZ(38,"h2"),t._uU(39,"Use-To-Earn List"),t.qZA(),t.TgZ(40,"table",16),t.ynx(41,7),t.YNc(42,V,2,0,"th",8),t.YNc(43,H,2,1,"td",9),t.BQk(),t.ynx(44,17),t.YNc(45,Q,2,0,"th",8),t.YNc(46,z,3,4,"td",9),t.BQk(),t.ynx(47,18),t.YNc(48,j,2,0,"th",8),t.YNc(49,W,3,4,"td",9),t.BQk(),t.ynx(50,19),t.YNc(51,J,2,0,"th",8),t.YNc(52,G,3,4,"td",9),t.BQk(),t.YNc(53,K,1,0,"tr",13),t.YNc(54,X,1,0,"tr",14),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.Oqu(t.xi3(6,8,a.TiUSDBalance,4)),t.xp6(6),t.Oqu(t.xi3(12,11,a.TiTiBalance,4)),t.xp6(11),t.Q6J("dataSource",a.dataSource1),t.xp6(13),t.Q6J("matHeaderRowDef",a.displayedColumns1),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns1),t.xp6(4),t.Q6J("dataSource",a.dataSource2),t.xp6(13),t.Q6J("matHeaderRowDef",a.displayedColumns2),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns2))},directives:[s.Q,l.BZ,l.w1,l.fO,l.Dz,l.as,l.nj,l.ge,l.ev,S.O5,l.XQ,l.Gk],pipes:[x.p],styles:[".mat-row[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]{border-bottom:1px solid transparent;border-top:1px solid transparent;cursor:pointer}.mat-row[_ngcontent-%COMP%]:hover   .mat-cell[_ngcontent-%COMP%]{border-color:#1de9b6}.my-account-wrapper[_ngcontent-%COMP%]{padding:12px;display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;align-items:center;grid-column-gap:24px;column-gap:24px;grid-row-gap:24px;row-gap:24px}.biz-info-card[_ngcontent-%COMP%]{min-height:80px;padding:18px;grid-column-start:span 2;display:grid;grid-template-columns:1fr 1fr 1fr}.biz-info-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{grid-column-start:span 3;margin-left:48px;font-size:24px}.biz-info-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{grid-column-start:span 2;margin-left:48px;align-self:end;font-size:18px;line-height:18px}.biz-info-card[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{grid-column-start:span 1}.use2earn-table-wrapper[_ngcontent-%COMP%]{grid-column-start:span 6;padding:12px;display:flex;align-items:center;flex-direction:column;min-height:240px}.use2earn-table[_ngcontent-%COMP%]{width:100%;background:transparent}.farm-table-wrapper[_ngcontent-%COMP%]{grid-column-start:span 6;padding:12px;display:flex;align-items:center;flex-direction:column;min-height:240px}.farm-table[_ngcontent-%COMP%]{width:100%;background:transparent}@media screen and (max-width: 1024px){.my-account-wrapper[_ngcontent-%COMP%]{grid-row-gap:12px;row-gap:12px;width:100%;padding:12px}.biz-info-card[_ngcontent-%COMP%]{grid-column-start:span 6}}"]}),i})();const R=16461792e5,g=30,_=3e7,U=3e7,A=2592e6,k=3e7,et=[{path:"",component:tt}];let it=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[T.Bz.forChild(et)],T.Bz]}),i})();var at=c(47423),rt=c(87238),nt=c(68326),ot=c(87841);let st=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[S.ez,it,l.p0,at.ot,rt.AV,nt.Ps,ot.m]]}),i})()},53405:(v,w,c)=>{c.d(w,{h:()=>D});var S=c(70022),T=c(94528),u=c(32856),m=c(28321),p=c(11730),t=c(5e3);let D=(()=>{class d{constructor(){this.APIURL="https://api.thegraph.com/subgraphs/name/ookurumi/titi-on-kovan",this.client=new S.f({uri:this.APIURL,cache:new T.h})}fetchMMFSwapPairHourData(r){return this.client.query({query:(0,u.Ps)("\n    query($id: ID,$time:Int) {\n      pair(id:$id) {\n        id\n        pairHourData(where: {hourStartTimestamp_gt: $time},orderBy: hourStartTimestamp,orderDirection: desc)  {\n          id\n          hourStartTimestamp\n          fund0\n          fund1\n          token0Price\n          token1Price\n        }\n     }\n   }\n  "),variables:{id:r.toLowerCase(),time:(0,m.Mv)()},fetchPolicy:"network-only"})}fetchMMFSwapPairDailyData(r){return this.client.query({query:(0,u.Ps)("\n    query($id: ID,$time:Int) {\n      pair(id:$id) {\n        id\n        pairDailyData(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          fund0\n          fund1\n          token0Price\n          token1Price\n        }\n     }\n   }\n  "),variables:{id:r.toLowerCase(),time:(0,m.Mv)()},fetchPolicy:"network-only"})}fetchAllSwapPairDailyData(){return this.client.query({query:(0,u.Ps)("\n    query($time:Int) {\n      pairs(orderBy: id,orderDirection: desc) {\n        id\n        fund0\n        fund1\n        prv\n        token1{\n          symbol\n          decimals\n        }\n        token0Twap\n        pairDailyData(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          fund0\n          fund1\n          token0Price\n          token1Price\n          token0Twap\n          prv\n        }\n        pairHourData(where: {hourStartTimestamp_gt: $time},orderBy: hourStartTimestamp,orderDirection: desc)  {\n          id\n          hourStartTimestamp\n          fund0\n          fund1\n          token0Price\n          token1Price\n          token0Twap\n          prv\n        }\n     }\n   }\n  "),variables:{time:(0,m.Mv)()},fetchPolicy:"network-only"})}fetchUniwapPairDailyData(){return this.client.query({query:(0,u.Ps)("\n    query($id: ID,$time:Int) {\n      uniswapPair(id:$id) {\n        fund0\n        fund1\n        liquidity\n        dailyData(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          fund0\n          fund1\n          liquidity\n        }\n     }\n   }\n  "),variables:{id:p.wE.UniswapV2Pair.toLowerCase(),time:(0,m.Mv)()},fetchPolicy:"network-only"})}fetchDailyLPTokenStakedValue(){return this.client.query({query:(0,u.Ps)("\n    query($time:Int) \n    {\n        dailyLPStakings(where: {dayTimestamp_gt: $time},orderBy: dayTimestamp,orderDirection: desc)  {\n          id\n          dayTimestamp\n          stakedValue\n        }\n   }\n  "),variables:{id:p.wE.UniswapV2Pair.toLowerCase(),time:(0,m.Mv)()},fetchPolicy:"network-only"})}fetchMMFRewardDailyData(r){return this.client.query({query:(0,u.Ps)("\n    query($id: ID,$time:Int) {\n      pair(id:$id) {\n        id\n        mmfRewardDailyData(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          mmfReward\n        }\n     }\n   }\n  "),variables:{id:r.toLowerCase(),time:(0,m.Mv)()},fetchPolicy:"network-only"})}fetchTodayMMFRewardData(r){return this.client.query({query:(0,u.Ps)("\n    query($id: ID,$pairId:ID) {\n      mmfrewardDailyData(id:$id) {\n        id\n        dayStartTimestamp\n        mmfReward\n      }\n      pair(id:$pairId) {\n        id\n        fund0\n        fund1\n      }\n   }\n  "),variables:{id:r.toLowerCase()+"-"+Number.parseInt((new Date).getTime()/864e5+""),pairId:r.toLowerCase()},fetchPolicy:"network-only"})}fetchMMFRewardHourDataIn24H(r){return this.client.query({query:(0,u.Ps)("\n    query($id: ID,$time: Int) {\n      pair(id:$id) {\n        id\n        mmfRewardHourData(where: {hourStartTimestamp_gt: $time},orderBy: hourStartTimestamp,orderDirection: desc)  {\n          id\n          hourStartTimestamp\n          mmfReward\n        }\n     }\n   }\n  "),variables:{id:r.toLowerCase(),time:Number.parseInt((new Date).getTime()/1e3-86400+"")},fetchPolicy:"network-only"})}fetchTiTiStakingDailyData(){return this.client.query({query:(0,u.Ps)("\n    query($time:Int) {\n      tiTiStakingEpochDailyDatas(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n        id\n        dayStartTimestamp\n        tvl\n        apy\n        epoch{\n          id\n        }\n      }\n   }\n  "),variables:{time:(0,m.Mv)()},fetchPolicy:"network-only"})}fetchEachEpochTotalReward(r){return this.client.query({query:(0,u.Ps)("\n    query($id: ID) {\n      tiTiStakingEpoches(where: {id_lt: $id}) {\n        tvl\n        totalReward\n     }\n   }\n  "),variables:{id:r},fetchPolicy:"network-only"})}fetchVaultFund(r){return this.client.query({query:(0,u.Ps)("\n    query($id: ID,$time:Int) {\n      fundVault(id:$id) {\n        id\n        address\n        dailyBalance(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          balance\n          token{\n            symbol\n            decimals\n          }\n        }\n     }\n   }\n  "),variables:{id:r,time:(0,m.Mv)()},fetchPolicy:"network-only"})}fetchLastReOrdersData(){return this.client.query({query:(0,u.Ps)("\n    query {\n      reOrders(first: 1, orderBy: lastReordersTime, orderDirection: desc) {\n        id\n        lastReordersTime\n        reordersCondition\n        pavAmount\n      }\n   }\n  "),variables:{},fetchPolicy:"network-only"})}fetchHistoricalMMFStakingEpoch(r){return this.client.query({query:(0,u.Ps)("\n    query ($epochNum:Int){\n      mmfstakingEpoches(where:{epochNum_lt:$epochNum}){\n        epochNum\n        startTimestamp\n        periodFinish\n        totalReward\n      }\n   }\n  "),variables:{epochNum:1*r},fetchPolicy:"network-only"})}fetchHistoricalLPStakingEpoch(r){return this.client.query({query:(0,u.Ps)("\n    query ($epochNum:Int){\n      lpstakingEpoches(where:{epochNum_lt:$epochNum}){\n        epochNum\n        startTimestamp\n        periodFinish\n        totalReward\n      }\n   }\n  "),variables:{epochNum:1*r},fetchPolicy:"network-only"})}fetchTiTiStakingUserRank(r){return this.client.query({query:(0,u.Ps)("\n    query($rank: Int) {\n      tiTiUserStakings(orderBy: stakedValue, orderDirection: desc,first:$rank) {\n        id\n        stakedValue\n      }\n   }\n  "),variables:{rank:r},fetchPolicy:"network-only"})}}return d.\u0275fac=function(r){return new(r||d)},d.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);