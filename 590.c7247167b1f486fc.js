"use strict";(self.webpackChunkapp_titi_frontend=self.webpackChunkapp_titi_frontend||[]).push([[590],{28321:(_,S,s)=>{function D(){const r=(new Date).getTime(),n=[];let c=36e5*parseInt(r/36e5+"");for(let u=0;u<720;u++)n.push(c),c-=36e5;return n}function w(){const r=(new Date).getTime(),n=[];let c=864e5*parseInt(r/864e5+"");for(let u=0;u<30;u++)n.push(c),c-=864e5;return n}function l(){const r=(new Date).getTime();return 86400*parseInt(r/864e5+"")-2592e3}function p(d){return d>0?[parseInt(d/864e5+"")+"d",parseInt(d%864e5/36e5+"")+"h",parseInt(d%36e5/6e4+"")+"m"].join(":"):[" -- d"," -- h"," -- m"].join(":")}function m(d){return d>0?[parseInt(d/864e5+"")+"d",parseInt(d%864e5/36e5+"")+"h",parseInt(d%36e5/6e4+"")+"m",parseInt(d%6e4/1e3+"")+"s"].join(":"):[" -- d"," -- h"," -- m"," -- s"].join(":")}function t(d){let r=d;const n=r.substring(0,1),c=r.substring(1,2);if(r.length>1&&"0"===n&&"."!==c&&(r=r.substring(1,2)),"."===n&&(r=""),-1!==r.indexOf(".")){let u=r.substring(r.indexOf(".")+1);-1!==u.indexOf(".")&&(r=r.substring(0,r.indexOf(".")+u.indexOf(".")+1))}return r=r.replace(/[^\d^\.]+/g,""),r}s.d(S,{jn:()=>D,Gq:()=>w,Mv:()=>l,fA:()=>p,lR:()=>m,Y4:()=>t})},40590:(_,S,s)=>{s.r(S),s.d(S,{MyAccountModule:()=>ct});var D=s(69808),w=s(91083),l=s(11730),p=s(98538),m=s.n(p),t=s(5e3),k=s(94602),d=s(32681),r=s(31657),n=s(53405),c=s(92134),u=s(32075),x=s(75303);function q(e,o){1&e&&(t.TgZ(0,"th",22),t._uU(1,"Act."),t.qZA())}function Z(e,o){if(1&e&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.Oqu(i.act)}}function O(e,o){1&e&&(t.TgZ(0,"th",24),t._uU(1,"Your Staked Value"),t.qZA())}function $(e,o){if(1&e&&(t.TgZ(0,"td",25),t._uU(1),t.ALo(2,"numberFormat"),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.hij("$ ",t.xi3(2,1,i.staked,4),"")}}function L(e,o){1&e&&(t.TgZ(0,"th",24),t._uU(1,"Claimable TiTi Rewards"),t.qZA())}function B(e,o){1&e&&t._UZ(0,"titi-tooltip",27)}function I(e,o){if(1&e&&(t.TgZ(0,"td",25),t._uU(1),t.ALo(2,"numberFormat"),t.YNc(3,B,1,0,"titi-tooltip",26),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.hij("",t.xi3(2,2,i.reward,4)," "),t.xp6(2),t.Q6J("ngIf","TiTi Staking"===i.act)}}function N(e,o){1&e&&(t.TgZ(0,"th",24),t._uU(1,"Dynamic APY"),t.qZA())}function F(e,o){if(1&e&&(t.TgZ(0,"td",25),t._uU(1),t.ALo(2,"numberFormat"),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.hij("",t.xi3(2,1,i.apy,4),"%")}}function E(e,o){1&e&&t._UZ(0,"tr",28)}function Y(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"tr",29),t.NdJ("click",function(){const y=t.CHM(i).$implicit;return t.oxw().onRowClick(y)}),t.qZA()}}function H(e,o){1&e&&(t.TgZ(0,"th",22),t._uU(1,"Act."),t.qZA())}function Q(e,o){if(1&e&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.Oqu(i.act)}}function z(e,o){1&e&&(t.TgZ(0,"th",24),t._uU(1,"Total Rewards"),t.qZA())}function V(e,o){if(1&e&&(t.TgZ(0,"td",25),t._uU(1),t.ALo(2,"numberFormat"),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.hij("",t.xi3(2,1,i.total,4)," TiTi")}}function j(e,o){1&e&&(t.TgZ(0,"th",24),t._uU(1,"Distributed Rewards"),t.qZA())}function W(e,o){if(1&e&&(t.TgZ(0,"td",25),t._uU(1),t.ALo(2,"numberFormat"),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.hij("",t.xi3(2,1,i.personal,4)," TiTi")}}function J(e,o){1&e&&(t.TgZ(0,"th",24),t._uU(1,"Expected Daily Rewards"),t.qZA())}function G(e,o){if(1&e&&(t.TgZ(0,"td",25),t._uU(1),t.ALo(2,"numberFormat"),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.hij("",t.xi3(2,1,i.rate,4)," TiTi/Day")}}function K(e,o){1&e&&t._UZ(0,"tr",28)}function X(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"tr",29),t.NdJ("click",function(){const y=t.CHM(i).$implicit;return t.oxw().onRowClick(y)}),t.qZA()}}let tt=(()=>{class e{constructor(i,a,h,y,T,f){this.router=i,this.web3Service=a,this.accountService=h,this.use2earnService=y,this.refreshService=T,this.graphService=f,this.displayedColumns1=["act","staked","reward","apy"],this.displayedColumns2=["act","total","personal","rate"],this.dataSource1=[],this.dataSource2=[],this.buyTiUSDReward=A,this.buyTiUSDPersonalReward=0,this.buyTiUSDRewardRate=A/P,this.buyTiUSDPersonalRewardRate=0,this.holdTiUSDReward=C,this.holdTiUSDPersonalReward=0,this.holdTiUSDRewardRate=C/P,this.holdTiUSDPersonalRewardRate=0,this.buyTiTiReward=b,this.buyTiTiPersonalReward=0,this.buyTiTiRewardRate=b/P,this.buyTiTiPersonalRewardRate=0,this.totalClaimableRewards=0,this.distributedTiTiRewards=0,this.usdcMmfStaked=0,this.usdcMmfReward=0,this.usdcMmfApy=0,this.lpMiningStaked=0,this.lpMiningReward=0,this.lpMiningApy=0,this.LPTokenPrice=0,this.titiStakingStaked=0,this.titiStakingReward=0,this.titiStakingApy=0,this.titiPrice=0,this.clickedRows=new Set,this.TiUSDBalance=0,this.TiTiBalance=0,this.mmfDecimal1=6,this.lpminingDecimal1=18}ngOnInit(){this.initData(),this.unregister=this.refreshService.registerFunction(()=>this.initData())}ngOnDestroy(){this.unregister()}initData(){this.fetchBalanceOfTiUSD(),this.fetchBalanceOfTiTi(),Promise.all([this.use2earnService.fetchUserData(),this.fetchMMFData().then(()=>this.fetchLpMiningData()),this.fetchTiTiStakingData()]).then(()=>this.buildDataSource())}fetchBalanceOfStakedLPToken(){return this.accountService.getCurrentAccountAsyn().then(i=>this.web3Service.invokeContract("MMFLPStakingPool","balanceOf",[i]).then(a=>this.web3Service.invokeContract("MarketMakerFund","getShareValue",[a[0]])))}fetchMMFData(){return this.accountService.getCurrentAccountAsyn().then(i=>Promise.all([this.fetchBalanceOfStakedLPToken(),this.web3Service.invokeContract("MMFLPStakingPool","rewardRate",[]),this.web3Service.invokeContract("MMFLPStakingPool","earned",[i]),this.web3Service.invokeContract("UniswapV2Pair","getReserves",[]),this.graphService.fetchTodayMMFRewardData(l.wE.MAMMSwapPair),this.web3Service.invokeContract("MMFLPStakingPool","startTime",[]),this.web3Service.invokeContract("MMFLPStakingPool","periodFinish",[])]).then(a=>{const h=(new Date).getTime()/1e3;this.usdcMmfStaked=a[0][0]/10**this.mmfDecimal1;const y=h>a[6][0]||h<a[5][0]?0:a[1][0];this.usdcMmfReward=a[2][0]/10**18;const f=a[4].data.pair.fund0,v=a[4].data.pair.fund1,g=a[4].data.pairDailyData?a[4].data.pairDailyData.mmfFund1:0;this.usdcMmfApy=0==g?0:365*(a[3][1]/a[3][0]*(v*10**12/f)*y*3600*24/10**18+(a[4].data.mmfrewardDailyData?a[4].data.mmfrewardDailyData.mmfReward:0)/10**this.mmfDecimal1)*100/(g/10**this.mmfDecimal1),this.titiPrice=a[3][1]/a[3][0]*(v*10**12/f)}))}fetchLpMiningData(){return this.accountService.getCurrentAccountAsyn().then(i=>Promise.all([this.web3Service.invokeContract("LPStakingPool","balanceOf",[i]),this.web3Service.invokeContract("LPStakingPool","earned",[i]),this.web3Service.invokeContract("LPStakingPool","rewardRate",[]),this.web3Service.invokeContract("UniswapV2Pair","getReserves",[]),this.web3Service.invokeContract("LPStakingPool","totalSupply",[]),this.web3Service.invokeContract("LPStakingPool","startTime",[]),this.web3Service.invokeContract("LPStakingPool","periodFinish",[]),this.web3Service.invokeContract("MAMMSwapPair","getDepth",[]),this.web3Service.invokeContract("UniswapV2Pair","totalSupply",[])]).then(a=>{const h=(new Date).getTime()/1e3;this.lpMiningStaked=a[0][0]/10**this.lpminingDecimal1,this.lpMiningReward=a[1][0]/10**18;const y=h>a[6][0]||h<a[5][0]?0:a[2][0];this.LPTokenPrice=a[8][0]>0?2*a[3][1]*(a[7][1]/10**6/(a[7][0]/10**18))/a[8][0]:0,this.lpMiningApy=1*a[4][0]>0?this.titiPrice*y*3600*24*365*100/(a[4][0]*this.LPTokenPrice):0}))}fetchTiTiStakingData(){return this.accountService.getCurrentAccountAsyn().then(i=>Promise.all([this.web3Service.invokeContract("TiTiStaking","getStakeValue",[i]),this.web3Service.invokeContract("TiTiStaking","users",[i]),this.web3Service.invokeContract("TiTiStaking","WITHDRAW_DURATION",[]),this.web3Service.invokeContract("TiTiStaking","UNBONDING_DURATION",[]),this.graphService.fetchTiTiStakingDailyData(),this.web3Service.invokeContract("TiTiBackendV1","epochNum",[])]).then(([a,h,y,T,f,v])=>{const g=new(m())(h.share),R=new(m())(h.unbondShare);let U=0;1e3*h.unbondTime+1e3*T[0]<=(new Date).getTime()?this.titiStakingReward=g.isZero()?0:new(m())(a[0]/10**18).mul(R).div(g).toNumber():U=g.isZero()?0:new(m())(a[0]/10**18).mul(R).div(g).toNumber(),this.titiStakingStaked=a[0]/10**18-U-this.titiStakingReward,this.titiStakingApy=f.data.tiTiStakingEpochDailyDatas[0]&&f.data.tiTiStakingEpochDailyDatas[0].epoch.id==v[0]?100*f.data.tiTiStakingEpochDailyDatas[0].apy:0}))}fetchBalanceOfTiUSD(){this.accountService.getCurrentAccountAsyn().then(i=>this.web3Service.invokeContract("TiUSD","balanceOf",[i]).then(a=>{this.TiUSDBalance=a[0]/10**18}))}fetchBalanceOfTiTi(){this.accountService.getCurrentAccountAsyn().then(i=>this.web3Service.invokeContract("TiTiToken","balanceOf",[i]).then(a=>{this.TiTiBalance=a[0]/10**18}))}rewardPerToken(i){if(0===Number.parseInt(i.totalSupply))return new(m())(i.rewardPerTokenStored);const a=new(m())(this.lastTimeRewardApplicable()-1*i.lastUpdateTime).mul(new(m())(this.holdTiUSDRewardRate).mul(new(m())("1000000000000000000"))).mul(new(m())("1000000000000000000")).div(new(m())(i.totalSupply).mul(new(m())(86400)));return new(m())(i.rewardPerTokenStored).add(a)}lastTimeRewardApplicable(){let i;const a=(new Date).getTime();return i=a<M?M:a<M+24*P*3600*1e3?a:M+24*P*3600*1e3,i/1e3}buildDataSource(){this.dataSource1=[{act:"USDC-MMF",staked:this.usdcMmfStaked,reward:this.usdcMmfReward,apy:this.usdcMmfApy,url:"/mmf"},{act:"LP Mining",staked:this.lpMiningStaked*this.LPTokenPrice,reward:this.lpMiningReward,apy:this.lpMiningApy,url:"/lpmining"},{act:"TiTi Staking",staked:this.titiStakingStaked*this.titiPrice,reward:this.titiStakingReward,apy:this.titiStakingApy,url:"/titiStaking"}],this.dataSource2=[{act:"Buy TiUSD in MAMM",total:this.use2earnService.buyTiUSDReward,personal:this.use2earnService.buyTiUSDPersonalReward-this.use2earnService.buyTiUSDPersonalRewardRate,rate:this.use2earnService.buyTiUSDPersonalRewardRate,url:"/use2earn/activity/buyTiUSD"},{act:"TiUSD Holder",total:this.use2earnService.holdTiUSDReward,personal:this.use2earnService.holdTiUSDPersonalReward,rate:this.use2earnService.holdTiUSDPersonalRewardRate,url:"/use2earn/activity/holdTiUSD"},{act:"Buy TiTi in Uniswap",total:this.use2earnService.buyTiTiReward,personal:this.use2earnService.buyTiTiPersonalReward-this.use2earnService.buyTiTiPersonalRewardRate,rate:this.use2earnService.buyTiTiPersonalRewardRate,url:"/use2earn/activity/buyTiTi"}]}onRowClick(i){this.router.navigateByUrl(i.url)}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(w.F0),t.Y36(l.Uc),t.Y36(k.B),t.Y36(d.Q),t.Y36(r.g),t.Y36(n.h))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-my-account"]],decls:55,vars:14,consts:[[1,"my-account-wrapper"],[1,"mat-elevation-z4","biz-info-card"],[1,"title"],[1,"value"],["text","Coming Soon ~"],[1,"mat-elevation-z4","farm-table-wrapper"],["mat-table","",1,"farm-table",3,"dataSource"],["matColumnDef","act"],["mat-header-cell","","style","width:19%",4,"matHeaderCellDef"],["mat-cell","","style","width:19%",4,"matCellDef"],["matColumnDef","staked"],["mat-header-cell","","style","width:27%",4,"matHeaderCellDef"],["mat-cell","","style","width:27%",4,"matCellDef"],["matColumnDef","reward"],["matColumnDef","apy"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],[1,"mat-elevation-z4","use2earn-table-wrapper"],["mat-table","",1,"use2earn-table",3,"dataSource"],["matColumnDef","total"],["matColumnDef","personal"],["matColumnDef","rate"],["mat-header-cell","",2,"width","19%"],["mat-cell","",2,"width","19%"],["mat-header-cell","",2,"width","27%"],["mat-cell","",2,"width","27%"],["text","Your unlocked claimable TiTi in TiTi-Staking",4,"ngIf"],["text","Your unlocked claimable TiTi in TiTi-Staking"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h2",2),t._uU(3,"TiUSD Balance"),t.qZA(),t.TgZ(4,"span",3),t._uU(5),t.ALo(6,"numberFormat"),t.qZA(),t.qZA(),t.TgZ(7,"div",1),t.TgZ(8,"h2",2),t._uU(9,"TiTi Balance"),t.qZA(),t.TgZ(10,"span",3),t._uU(11),t.ALo(12,"numberFormat"),t.qZA(),t.qZA(),t.TgZ(13,"div",1),t.TgZ(14,"h2",2),t._uU(15,"Your Account Level"),t.qZA(),t.TgZ(16,"span",3),t._uU(17,"Lv. - - "),t._UZ(18,"titi-tooltip",4),t.qZA(),t.qZA(),t.TgZ(19,"div",5),t.TgZ(20,"h2"),t._uU(21,"Farm List"),t.qZA(),t.TgZ(22,"table",6),t.ynx(23,7),t.YNc(24,q,2,0,"th",8),t.YNc(25,Z,2,1,"td",9),t.BQk(),t.ynx(26,10),t.YNc(27,O,2,0,"th",11),t.YNc(28,$,3,4,"td",12),t.BQk(),t.ynx(29,13),t.YNc(30,L,2,0,"th",11),t.YNc(31,I,4,5,"td",12),t.BQk(),t.ynx(32,14),t.YNc(33,N,2,0,"th",11),t.YNc(34,F,3,4,"td",12),t.BQk(),t.YNc(35,E,1,0,"tr",15),t.YNc(36,Y,1,0,"tr",16),t.qZA(),t.qZA(),t.TgZ(37,"div",17),t.TgZ(38,"h2"),t._uU(39,"Use-To-Earn List"),t.qZA(),t.TgZ(40,"table",18),t.ynx(41,7),t.YNc(42,H,2,0,"th",8),t.YNc(43,Q,2,1,"td",9),t.BQk(),t.ynx(44,19),t.YNc(45,z,2,0,"th",11),t.YNc(46,V,3,4,"td",12),t.BQk(),t.ynx(47,20),t.YNc(48,j,2,0,"th",11),t.YNc(49,W,3,4,"td",12),t.BQk(),t.ynx(50,21),t.YNc(51,J,2,0,"th",11),t.YNc(52,G,3,4,"td",12),t.BQk(),t.YNc(53,K,1,0,"tr",15),t.YNc(54,X,1,0,"tr",16),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(5),t.Oqu(t.xi3(6,8,a.TiUSDBalance,4)),t.xp6(6),t.Oqu(t.xi3(12,11,a.TiTiBalance,4)),t.xp6(11),t.Q6J("dataSource",a.dataSource1),t.xp6(13),t.Q6J("matHeaderRowDef",a.displayedColumns1),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns1),t.xp6(4),t.Q6J("dataSource",a.dataSource2),t.xp6(13),t.Q6J("matHeaderRowDef",a.displayedColumns2),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns2))},directives:[c.Q,u.BZ,u.w1,u.fO,u.Dz,u.as,u.nj,u.ge,u.ev,D.O5,u.XQ,u.Gk],pipes:[x.p],styles:[".mat-row[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]{border-bottom:1px solid transparent;border-top:1px solid transparent;cursor:pointer}.mat-row[_ngcontent-%COMP%]:hover   .mat-cell[_ngcontent-%COMP%]{border-color:#1de9b6}.my-account-wrapper[_ngcontent-%COMP%]{padding:12px;display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;align-items:center;grid-column-gap:24px;column-gap:24px;grid-row-gap:24px;row-gap:24px}.biz-info-card[_ngcontent-%COMP%]{min-height:80px;padding:18px;grid-column-start:span 2;display:grid;grid-template-columns:1fr 1fr 1fr}.biz-info-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{grid-column-start:span 3;margin-left:48px;margin-bottom:20px}.biz-info-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{grid-column-start:span 2;margin-left:48px;align-self:end;font-size:18px;line-height:18px}.biz-info-card[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{grid-column-start:span 1}.use2earn-table-wrapper[_ngcontent-%COMP%]{grid-column-start:span 6;padding:12px;display:flex;align-items:center;flex-direction:column;min-height:240px}.use2earn-table[_ngcontent-%COMP%]{width:100%;background:transparent}.farm-table-wrapper[_ngcontent-%COMP%]{grid-column-start:span 6;padding:12px;display:flex;align-items:center;flex-direction:column;min-height:240px}.farm-table[_ngcontent-%COMP%]{width:100%;background:transparent}@media screen and (max-width: 1024px){.my-account-wrapper[_ngcontent-%COMP%]{grid-row-gap:12px;row-gap:12px;width:100%;padding:12px}.biz-info-card[_ngcontent-%COMP%]{grid-column-start:span 6}}"]}),e})();const M=16715376e5,P=14,A=5e4,C=5e4,b=1e5,et=[{path:"",component:tt}];let it=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[w.Bz.forChild(et)],w.Bz]}),e})();var at=s(47423),nt=s(87238),rt=s(68326),ot=s(87841);let ct=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[D.ez,it,u.p0,at.ot,nt.AV,rt.Ps,ot.m]]}),e})()},53405:(_,S,s)=>{s.d(S,{h:()=>k});var D=s(70022),w=s(94528),l=s(32856),p=s(28321),m=s(11730),t=s(5e3);let k=(()=>{class d{constructor(){this.APIURL="https://api.thegraph.com/subgraphs/name/ookurumi/titi-testnet-v2",this.client=new D.f({uri:this.APIURL,cache:new w.h})}fetchMMFSwapPairHourData(n){return this.client.query({query:(0,l.Ps)("\n    query($id: ID,$time:Int) {\n      pair(id:$id) {\n        id\n        pairHourData(where: {hourStartTimestamp_gt: $time},orderBy: hourStartTimestamp,orderDirection: desc)  {\n          id\n          hourStartTimestamp\n          fund0\n          fund1\n          token0Price\n          token1Price\n        }\n     }\n   }\n  "),variables:{id:n.toLowerCase(),time:(0,p.Mv)()},fetchPolicy:"network-only"})}fetchMMFSwapPairDailyData(n){return this.client.query({query:(0,l.Ps)("\n    query($id: ID,$time:Int) {\n      pair(id:$id) {\n        id\n        pairDailyData(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          fund0\n          fund1\n          mmfFund0\n          mmfFund1\n          token0Price\n          token1Price\n        }\n     }\n   }\n  "),variables:{id:n.toLowerCase(),time:(0,p.Mv)()},fetchPolicy:"network-only"})}fetchAllSwapPairDailyData(){return this.client.query({query:(0,l.Ps)("\n    query($time:Int) {\n      pairs(orderBy: id,orderDirection: desc) {\n        id\n        fund0\n        fund1\n        prv\n        token1{\n          symbol\n          decimals\n        }\n        token0Twap\n        pairDailyData(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          fund0\n          fund1\n          token0Price\n          token1Price\n          token0Twap\n          prv\n        }\n        pairHourData(where: {hourStartTimestamp_gt: $time},orderBy: hourStartTimestamp,orderDirection: desc)  {\n          id\n          hourStartTimestamp\n          fund0\n          fund1\n          token0Price\n          token1Price\n          token0Twap\n          prv\n        }\n     }\n   }\n  "),variables:{time:(0,p.Mv)()},fetchPolicy:"network-only"})}fetchUniwapPairDailyData(){return this.client.query({query:(0,l.Ps)("\n    query($id: ID,$time:Int) {\n      uniswapPair(id:$id) {\n        fund0\n        fund1\n        liquidity\n        dailyData(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          fund0\n          fund1\n          liquidity\n        }\n     }\n   }\n  "),variables:{id:m.wE.UniswapV2Pair.toLowerCase(),time:(0,p.Mv)()},fetchPolicy:"network-only"})}fetchDailyLPTokenStakedValue(){return this.client.query({query:(0,l.Ps)("\n    query($time:Int) \n    {\n        dailyLPStakings(where: {dayTimestamp_gt: $time},orderBy: dayTimestamp,orderDirection: desc)  {\n          id\n          dayTimestamp\n          stakedValue\n        }\n   }\n  "),variables:{id:m.wE.UniswapV2Pair.toLowerCase(),time:(0,p.Mv)()},fetchPolicy:"network-only"})}fetchMMFRewardDailyData(n){return this.client.query({query:(0,l.Ps)("\n    query($id: ID,$time:Int) {\n      pair(id:$id) {\n        id\n        mmfRewardDailyData(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          mmfReward\n        }\n     }\n   }\n  "),variables:{id:n.toLowerCase(),time:(0,p.Mv)()},fetchPolicy:"network-only"})}fetchTodayMMFRewardData(n){return this.client.query({query:(0,l.Ps)("\n    query($id: ID,$pairId:ID) {\n      mmfrewardDailyData(id:$id) {\n        id\n        dayStartTimestamp\n        mmfReward\n      }\n      pair(id:$pairId) {\n        id\n        fund0\n        fund1\n      }\n      pairDailyData(id:$id) {\n        id\n        mmfFund1\n      }\n   }\n  "),variables:{id:n.toLowerCase()+"-"+Number.parseInt((new Date).getTime()/864e5+""),pairId:n.toLowerCase()},fetchPolicy:"network-only"})}fetchMMFRewardHourDataIn24H(n){return this.client.query({query:(0,l.Ps)("\n    query($id: ID,$time: Int) {\n      pair(id:$id) {\n        id\n        mmfRewardHourData(where: {hourStartTimestamp_gt: $time},orderBy: hourStartTimestamp,orderDirection: desc)  {\n          id\n          hourStartTimestamp\n          mmfReward\n        }\n     }\n   }\n  "),variables:{id:n.toLowerCase(),time:Number.parseInt((new Date).getTime()/1e3-86400+"")},fetchPolicy:"network-only"})}fetchTiTiStakingDailyData(){return this.client.query({query:(0,l.Ps)("\n    query($time:Int) {\n      tiTiStakingEpochDailyDatas(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n        id\n        dayStartTimestamp\n        tvl\n        apy\n        epoch{\n          id\n        }\n      }\n   }\n  "),variables:{time:(0,p.Mv)()},fetchPolicy:"network-only"})}fetchEachEpochTotalReward(n){return this.client.query({query:(0,l.Ps)("\n    query($id: ID) {\n      tiTiStakingEpoches(where: {id_lt: $id}) {\n        tvl\n        totalReward\n     }\n   }\n  "),variables:{id:n},fetchPolicy:"network-only"})}fetchVaultFund(n){return this.client.query({query:(0,l.Ps)("\n    query($id: ID,$time:Int) {\n      fundVault(id:$id) {\n        id\n        address\n        dailyBalance(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          balance\n          token{\n            symbol\n            decimals\n          }\n        }\n     }\n   }\n  "),variables:{id:n,time:(0,p.Mv)()},fetchPolicy:"network-only"})}fetchLastReOrdersData(){return this.client.query({query:(0,l.Ps)("\n    query {\n      reOrders(first: 1, orderBy: lastReordersTime, orderDirection: desc) {\n        id\n        lastReordersTime\n        reordersCondition\n        pavAmount\n      }\n   }\n  "),variables:{},fetchPolicy:"network-only"})}fetchHistoricalMMFStakingEpoch(n){return this.client.query({query:(0,l.Ps)("\n    query ($epochNum:Int){\n      mmfstakingEpoches(where:{epochNum_lt:$epochNum}){\n        epochNum\n        startTimestamp\n        periodFinish\n        totalReward\n      }\n   }\n  "),variables:{epochNum:1*n},fetchPolicy:"network-only"})}fetchHistoricalLPStakingEpoch(n){return this.client.query({query:(0,l.Ps)("\n    query ($epochNum:Int){\n      lpstakingEpoches(where:{epochNum_lt:$epochNum}){\n        epochNum\n        startTimestamp\n        periodFinish\n        totalReward\n      }\n   }\n  "),variables:{epochNum:1*n},fetchPolicy:"network-only"})}fetchTiTiStakingUserRank(n,c){return this.client.query({query:(0,l.Ps)("\n    query($rank: Int,$blacklist: [String]) {\n      tiTiUserStakings(where:{id_not_in:$blacklist},orderBy: share, orderDirection: desc,first:$rank) {\n        id\n        share\n      }\n      tiTiStakings(first: 1){\n        totalAmount\n        totalShare\n      }\n   }\n  "),variables:{rank:n,blacklist:c},fetchPolicy:"network-only"})}fetchTiUSDCirculation(){const n=`\n    query {\n      tiUSD(id:"${m.wE.TiUSD.toLowerCase()}") {\n        id\n        tiusdCirculation\n      }\n   }\n  `;return this.client.query({query:(0,l.Ps)(n),variables:{},fetchPolicy:"network-only"})}}return d.\u0275fac=function(n){return new(n||d)},d.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);