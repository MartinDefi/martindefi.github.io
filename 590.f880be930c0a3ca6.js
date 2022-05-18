"use strict";(self.webpackChunkapp_titi_frontend=self.webpackChunkapp_titi_frontend||[]).push([[590],{40590:(b,S,o)=>{o.r(S),o.d(S,{MyAccountModule:()=>ot});var D=o(69808),T=o(91083),l=o(11730),m=o(98538),s=o.n(m),t=o(5e3),M=o(94602),h=o(32681),v=o(31657),r=o(53405),c=o(92134),d=o(32075),U=o(75303);function x(i,n){1&i&&(t.TgZ(0,"th",22),t._uU(1,"Act."),t.qZA())}function q(i,n){if(1&i&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.Oqu(e.act)}}function Z(i,n){1&i&&(t.TgZ(0,"th",24),t._uU(1,"Your Staked Value"),t.qZA())}function O(i,n){if(1&i&&(t.TgZ(0,"td",25),t._uU(1),t.ALo(2,"numberFormat"),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.staked,4))}}function B(i,n){1&i&&(t.TgZ(0,"th",24),t._uU(1,"Claimable TiTi Rewards"),t.qZA())}function $(i,n){1&i&&t._UZ(0,"titi-tooltip",27)}function L(i,n){if(1&i&&(t.TgZ(0,"td",25),t._uU(1),t.ALo(2,"numberFormat"),t.YNc(3,$,1,0,"titi-tooltip",26),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.hij("",t.xi3(2,2,e.reward,4)," "),t.xp6(2),t.Q6J("ngIf","TiTi Staking"===e.act)}}function N(i,n){1&i&&(t.TgZ(0,"th",24),t._uU(1,"Dynamic APY"),t.qZA())}function E(i,n){if(1&i&&(t.TgZ(0,"td",25),t._uU(1),t.ALo(2,"numberFormat"),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.hij("",t.xi3(2,1,e.apy,4),"%")}}function I(i,n){1&i&&t._UZ(0,"tr",28)}function Y(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"tr",29),t.NdJ("click",function(){const p=t.CHM(e).$implicit;return t.oxw().onRowClick(p)}),t.qZA()}}function F(i,n){1&i&&(t.TgZ(0,"th",22),t._uU(1,"Act."),t.qZA())}function V(i,n){if(1&i&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.Oqu(e.act)}}function H(i,n){1&i&&(t.TgZ(0,"th",24),t._uU(1,"Total Rewards"),t.qZA())}function Q(i,n){if(1&i&&(t.TgZ(0,"td",25),t._uU(1),t.ALo(2,"numberFormat"),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.hij("",t.xi3(2,1,e.total,4)," TiTi")}}function z(i,n){1&i&&(t.TgZ(0,"th",24),t._uU(1,"Pending Rewards"),t.qZA())}function W(i,n){if(1&i&&(t.TgZ(0,"td",25),t._uU(1),t.ALo(2,"numberFormat"),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.hij("",t.xi3(2,1,e.personal,4)," TiTi")}}function J(i,n){1&i&&(t.TgZ(0,"th",24),t._uU(1,"Expected Daily Rewards"),t.qZA())}function j(i,n){if(1&i&&(t.TgZ(0,"td",25),t._uU(1),t.ALo(2,"numberFormat"),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.hij("",t.xi3(2,1,e.rate,4)," TiTi/Day")}}function K(i,n){1&i&&t._UZ(0,"tr",28)}function G(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"tr",29),t.NdJ("click",function(){const p=t.CHM(e).$implicit;return t.oxw().onRowClick(p)}),t.qZA()}}let X=(()=>{class i{constructor(e,a,u,p,y,g){this.router=e,this.web3Service=a,this.accountService=u,this.use2earnService=p,this.refreshService=y,this.graphService=g,this.displayedColumns1=["act","staked","reward","apy"],this.displayedColumns2=["act","total","personal","rate"],this.dataSource1=[],this.dataSource2=[],this.buyTiUSDReward=P,this.buyTiUSDPersonalReward=0,this.buyTiUSDRewardRate=P/f,this.buyTiUSDPersonalRewardRate=0,this.holdTiUSDReward=_,this.holdTiUSDPersonalReward=0,this.holdTiUSDRewardRate=_/f,this.holdTiUSDPersonalRewardRate=0,this.buyTiTiReward=A,this.buyTiTiPersonalReward=0,this.buyTiTiRewardRate=A/f,this.buyTiTiPersonalRewardRate=0,this.totalClaimableRewards=0,this.distributedTiTiRewards=0,this.usdcMmfStaked=0,this.usdcMmfReward=0,this.usdcMmfApy=0,this.lpMiningStaked=0,this.lpMiningReward=0,this.lpMiningApy=0,this.titiStakingStaked=0,this.titiStakingReward=0,this.titiStakingApy=0,this.clickedRows=new Set,this.TiUSDBalance=0,this.TiTiBalance=0,this.mmfDecimal1=6,this.lpminingDecimal1=18}ngOnInit(){this.initData(),this.unregister=this.refreshService.registerFunction(()=>this.initData())}ngOnDestroy(){this.unregister()}initData(){this.fetchBalanceOfTiUSD(),this.fetchBalanceOfTiTi(),Promise.all([this.fetchUserUse2EarnData(),this.fetchMMFData(),this.fetchLpMiningData(),this.fetchTiTiStakingData()]).then(()=>this.buildDataSource())}fetchMMFData(){return this.accountService.getCurrentAccountAsyn().then(e=>Promise.all([this.web3Service.invokeContract("MMFLPStakingPool","balanceOf",[e]),this.web3Service.invokeContract("MMFLPStakingPool","rewardRate",[]),this.web3Service.invokeContract("MMFLPStakingPool","earned",[e]),this.web3Service.invokeContract("UniswapV2Pair","getReserves",[]),this.graphService.fetchTodayMMFRewardData(l.wE.MAMMSwapPair)]).then(a=>{this.usdcMmfStaked=a[0][0]/10**this.mmfDecimal1;const u=a[1][0];this.usdcMmfReward=a[2][0]/10**18,this.usdcMmfApy=365*(a[3][1]/a[3][0]*u*3600*24/10**18+(a[4].data.mmfrewardDailyData?a[4].data.mmfrewardDailyData.mmfReward:0)/10**this.mmfDecimal1)*100/(a[4].data.pair.fund1/10**this.mmfDecimal1)}))}fetchLpMiningData(){return this.accountService.getCurrentAccountAsyn().then(e=>Promise.all([this.web3Service.invokeContract("LPStakingPool","balanceOf",[e]),this.web3Service.invokeContract("LPStakingPool","earned",[e]),this.web3Service.invokeContract("LPStakingPool","rewardRate",[]),this.web3Service.invokeContract("UniswapV2Pair","getReserves",[]),this.web3Service.invokeContract("LPStakingPool","totalSupply",[])]).then(a=>{this.lpMiningStaked=a[0][0]/10**this.lpminingDecimal1,this.lpMiningReward=a[1][0]/10**18,this.lpMiningApy=1*a[3][0]>0?3600*a[2][0]*24*365*100/(2*a[3][0]):0}))}fetchTiTiStakingData(){return this.accountService.getCurrentAccountAsyn().then(e=>Promise.all([this.web3Service.invokeContract("TiTiStaking","getStakeValue",[e]),this.web3Service.invokeContract("TiTiStaking","users",[e]),this.web3Service.invokeContract("TiTiStaking","WITHDRAW_DURATION",[]),this.web3Service.invokeContract("TiTiStaking","UNBONDING_DURATION",[]),this.graphService.fetchTiTiStakingDailyData(),this.web3Service.invokeContract("TiTiBackendV1","epochNum",[])]).then(([a,u,p,y,g,ct])=>{const R=new(s())(u.share),k=new(s())(u.unbondShare);let C=0;1e3*u.unbondTime+1e3*y[0]<=(new Date).getTime()?this.titiStakingReward=R.isZero()?0:new(s())(a[0]/10**18).mul(k).div(R).toNumber():C=R.isZero()?0:new(s())(a[0]/10**18).mul(k).div(R).toNumber(),this.titiStakingStaked=a[0]/10**18-C-this.titiStakingReward,this.titiStakingApy=g.data.tiTiStakingEpochDailyDatas[0]&&g.data.tiTiStakingEpochDailyDatas[0].epoch.id==ct[0]?100*g.data.tiTiStakingEpochDailyDatas[0].apy:0}))}fetchBalanceOfTiUSD(){this.accountService.getCurrentAccountAsyn().then(e=>this.web3Service.invokeContract("TiUSD","balanceOf",[e]).then(a=>{this.TiUSDBalance=a[0]/10**18}))}fetchBalanceOfTiTi(){this.accountService.getCurrentAccountAsyn().then(e=>this.web3Service.invokeContract("TiTiToken","balanceOf",[e]).then(a=>{this.TiTiBalance=a[0]/10**18}))}fetchUserUse2EarnData(){return this.use2earnService.fetchUserDailyData().then(({data:e})=>{this.buyTiUSDPersonalReward=0,this.holdTiUSDPersonalReward=0,this.buyTiTiPersonalReward=0,this.buyTiUSDPersonalRewardRate=0,this.holdTiUSDPersonalRewardRate=0,this.buyTiTiPersonalRewardRate=0,e.user&&(e.user.dailyUserMint.forEach(a=>{this.buyTiUSDPersonalReward+=this.buyTiUSDRewardRate*a.dailyVolume/a.dailyMint.dailyTotalVolume}),this.holdTiUSDPersonalReward=(1*e.user.rewards+new(s())(e.user.balance).mul(this.rewardPerToken(e.holder).sub(new(s())(e.user.userRewardPerTokenPaid).mul(new(s())("10000")))).div(new(s())("10").pow(new(s())("18"))).toNumber()/1e4)/10**18,e.user.dailyUserSwap.forEach(a=>{this.buyTiTiPersonalReward+=this.buyTiTiRewardRate*a.dailyVolume/a.dailySwap.dailyTotalVolume}),this.buyTiUSDPersonalRewardRate=e.dailyUserMint&&e.dailyUserMint.dailyMint.dailyTotalVolume?this.buyTiUSDRewardRate*e.dailyUserMint.dailyVolume/e.dailyUserMint.dailyMint.dailyTotalVolume:0,this.buyTiTiPersonalRewardRate=e.dailyUserSwap&&e.dailyUserSwap.dailySwap.dailyTotalVolume?this.buyTiTiRewardRate*e.dailyUserSwap.dailyVolume/e.dailyUserSwap.dailySwap.dailyTotalVolume:0,this.holdTiUSDPersonalRewardRate=this.holdTiUSDRewardRate*e.user.balance/e.holder.totalSupply),this.distributedTiTiRewards=((new Date).getTime()-w)/864e5*(this.buyTiUSDRewardRate+this.holdTiUSDRewardRate+this.buyTiTiRewardRate)})}rewardPerToken(e){if(0===Number.parseInt(e.totalSupply))return new(s())(e.rewardPerTokenStored);const a=new(s())(this.lastTimeRewardApplicable()-1*e.lastUpdateTime).mul(new(s())(1e4*this.holdTiUSDRewardRate)).mul(new(s())("1000000000000000000")).div(new(s())(e.totalSupply).mul(new(s())(86400)));return new(s())(e.rewardPerTokenStored).mul(new(s())("10000")).add(a)}lastTimeRewardApplicable(){let e;const a=(new Date).getTime();return e=a<w?w:a<w+24*f*3600*1e3?a:w+24*f*3600*1e3,e/1e3}buildDataSource(){this.dataSource1=[{act:"USDC-MMF",staked:this.usdcMmfStaked,reward:this.usdcMmfReward,apy:this.usdcMmfApy,url:"/mmf"},{act:"LP Mining",staked:this.lpMiningStaked,reward:this.lpMiningReward,apy:this.lpMiningApy,url:"/lpmining"},{act:"TiTi Staking",staked:this.titiStakingStaked,reward:this.titiStakingReward,apy:this.titiStakingApy,url:"/titiStaking"}],this.dataSource2=[{act:"Buy TiUSD in MAMM",total:this.buyTiUSDReward,personal:this.buyTiUSDPersonalReward,rate:this.buyTiUSDPersonalRewardRate,url:"/use2earn/activity/buyTiUSD"},{act:"TiUSD Holder",total:this.holdTiUSDReward,personal:this.holdTiUSDPersonalReward,rate:this.holdTiUSDPersonalRewardRate,url:"/use2earn/activity/holdTiUSD"},{act:"Buy TiTi in Uniswap",total:this.buyTiTiReward,personal:this.buyTiTiPersonalReward,rate:this.buyTiTiPersonalRewardRate,url:"/use2earn/activity/buyTiTi"}]}onRowClick(e){this.router.navigateByUrl(e.url)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(T.F0),t.Y36(l.Uc),t.Y36(M.B),t.Y36(h.Q),t.Y36(v.g),t.Y36(r.h))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-my-account"]],decls:55,vars:14,consts:[[1,"my-account-wrapper"],[1,"mat-elevation-z4","biz-info-card"],[1,"title"],[1,"value"],["text","Coming Soon ~"],[1,"mat-elevation-z4","farm-table-wrapper"],["mat-table","",1,"farm-table",3,"dataSource"],["matColumnDef","act"],["mat-header-cell","","style","width:19%",4,"matHeaderCellDef"],["mat-cell","","style","width:19%",4,"matCellDef"],["matColumnDef","staked"],["mat-header-cell","","style","width:27%",4,"matHeaderCellDef"],["mat-cell","","style","width:27%",4,"matCellDef"],["matColumnDef","reward"],["matColumnDef","apy"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],[1,"mat-elevation-z4","use2earn-table-wrapper"],["mat-table","",1,"use2earn-table",3,"dataSource"],["matColumnDef","total"],["matColumnDef","personal"],["matColumnDef","rate"],["mat-header-cell","",2,"width","19%"],["mat-cell","",2,"width","19%"],["mat-header-cell","",2,"width","27%"],["mat-cell","",2,"width","27%"],["text","Your unlocked claimable TiTi in TiTi-Staking",4,"ngIf"],["text","Your unlocked claimable TiTi in TiTi-Staking"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h2",2),t._uU(3,"TiUSD Balance"),t.qZA(),t.TgZ(4,"span",3),t._uU(5),t.ALo(6,"numberFormat"),t.qZA(),t.qZA(),t.TgZ(7,"div",1),t.TgZ(8,"h2",2),t._uU(9,"TiTi Balance"),t.qZA(),t.TgZ(10,"span",3),t._uU(11),t.ALo(12,"numberFormat"),t.qZA(),t.qZA(),t.TgZ(13,"div",1),t.TgZ(14,"h2",2),t._uU(15,"Your Account Level"),t.qZA(),t.TgZ(16,"span",3),t._uU(17,"Lv. - - "),t._UZ(18,"titi-tooltip",4),t.qZA(),t.qZA(),t.TgZ(19,"div",5),t.TgZ(20,"h2"),t._uU(21,"Farm List"),t.qZA(),t.TgZ(22,"table",6),t.ynx(23,7),t.YNc(24,x,2,0,"th",8),t.YNc(25,q,2,1,"td",9),t.BQk(),t.ynx(26,10),t.YNc(27,Z,2,0,"th",11),t.YNc(28,O,3,4,"td",12),t.BQk(),t.ynx(29,13),t.YNc(30,B,2,0,"th",11),t.YNc(31,L,4,5,"td",12),t.BQk(),t.ynx(32,14),t.YNc(33,N,2,0,"th",11),t.YNc(34,E,3,4,"td",12),t.BQk(),t.YNc(35,I,1,0,"tr",15),t.YNc(36,Y,1,0,"tr",16),t.qZA(),t.qZA(),t.TgZ(37,"div",17),t.TgZ(38,"h2"),t._uU(39,"Use-To-Earn List"),t.qZA(),t.TgZ(40,"table",18),t.ynx(41,7),t.YNc(42,F,2,0,"th",8),t.YNc(43,V,2,1,"td",9),t.BQk(),t.ynx(44,19),t.YNc(45,H,2,0,"th",11),t.YNc(46,Q,3,4,"td",12),t.BQk(),t.ynx(47,20),t.YNc(48,z,2,0,"th",11),t.YNc(49,W,3,4,"td",12),t.BQk(),t.ynx(50,21),t.YNc(51,J,2,0,"th",11),t.YNc(52,j,3,4,"td",12),t.BQk(),t.YNc(53,K,1,0,"tr",15),t.YNc(54,G,1,0,"tr",16),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.Oqu(t.xi3(6,8,a.TiUSDBalance,4)),t.xp6(6),t.Oqu(t.xi3(12,11,a.TiTiBalance,4)),t.xp6(11),t.Q6J("dataSource",a.dataSource1),t.xp6(13),t.Q6J("matHeaderRowDef",a.displayedColumns1),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns1),t.xp6(4),t.Q6J("dataSource",a.dataSource2),t.xp6(13),t.Q6J("matHeaderRowDef",a.displayedColumns2),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns2))},directives:[c.Q,d.BZ,d.w1,d.fO,d.Dz,d.as,d.nj,d.ge,d.ev,D.O5,d.XQ,d.Gk],pipes:[U.p],styles:[".mat-row[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]{border-bottom:1px solid transparent;border-top:1px solid transparent;cursor:pointer}.mat-row[_ngcontent-%COMP%]:hover   .mat-cell[_ngcontent-%COMP%]{border-color:#1de9b6}.my-account-wrapper[_ngcontent-%COMP%]{padding:12px;display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;align-items:center;grid-column-gap:24px;column-gap:24px;grid-row-gap:24px;row-gap:24px}.biz-info-card[_ngcontent-%COMP%]{min-height:80px;padding:18px;grid-column-start:span 2;display:grid;grid-template-columns:1fr 1fr 1fr}.biz-info-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{grid-column-start:span 3;margin-left:48px;margin-bottom:20px}.biz-info-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{grid-column-start:span 2;margin-left:48px;align-self:end;font-size:18px;line-height:18px}.biz-info-card[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{grid-column-start:span 1}.use2earn-table-wrapper[_ngcontent-%COMP%]{grid-column-start:span 6;padding:12px;display:flex;align-items:center;flex-direction:column;min-height:240px}.use2earn-table[_ngcontent-%COMP%]{width:100%;background:transparent}.farm-table-wrapper[_ngcontent-%COMP%]{grid-column-start:span 6;padding:12px;display:flex;align-items:center;flex-direction:column;min-height:240px}.farm-table[_ngcontent-%COMP%]{width:100%;background:transparent}@media screen and (max-width: 1024px){.my-account-wrapper[_ngcontent-%COMP%]{grid-row-gap:12px;row-gap:12px;width:100%;padding:12px}.biz-info-card[_ngcontent-%COMP%]{grid-column-start:span 6}}"]}),i})();const w=16523136e5,f=7,P=2e5,_=2e5,A=2e5,tt=[{path:"",component:X}];let et=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[T.Bz.forChild(tt)],T.Bz]}),i})();var it=o(47423),at=o(87238),nt=o(68326),rt=o(87841);let ot=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[D.ez,et,d.p0,it.ot,at.AV,nt.Ps,rt.m]]}),i})()},53405:(b,S,o)=>{o.d(S,{h:()=>M});var D=o(70022),T=o(94528),l=o(32856),m=o(28321),s=o(11730),t=o(5e3);let M=(()=>{class h{constructor(){this.APIURL="https://api.thegraph.com/subgraphs/name/ookurumi/titi-on-rinkeby",this.client=new D.f({uri:this.APIURL,cache:new T.h})}fetchMMFSwapPairHourData(r){return this.client.query({query:(0,l.Ps)("\n    query($id: ID,$time:Int) {\n      pair(id:$id) {\n        id\n        pairHourData(where: {hourStartTimestamp_gt: $time},orderBy: hourStartTimestamp,orderDirection: desc)  {\n          id\n          hourStartTimestamp\n          fund0\n          fund1\n          token0Price\n          token1Price\n        }\n     }\n   }\n  "),variables:{id:r.toLowerCase(),time:(0,m.Mv)()},fetchPolicy:"network-only"})}fetchMMFSwapPairDailyData(r){return this.client.query({query:(0,l.Ps)("\n    query($id: ID,$time:Int) {\n      pair(id:$id) {\n        id\n        pairDailyData(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          fund0\n          fund1\n          token0Price\n          token1Price\n        }\n     }\n   }\n  "),variables:{id:r.toLowerCase(),time:(0,m.Mv)()},fetchPolicy:"network-only"})}fetchAllSwapPairDailyData(){return this.client.query({query:(0,l.Ps)("\n    query($time:Int) {\n      pairs(orderBy: id,orderDirection: desc) {\n        id\n        fund0\n        fund1\n        prv\n        token1{\n          symbol\n          decimals\n        }\n        token0Twap\n        pairDailyData(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          fund0\n          fund1\n          token0Price\n          token1Price\n          token0Twap\n          prv\n        }\n        pairHourData(where: {hourStartTimestamp_gt: $time},orderBy: hourStartTimestamp,orderDirection: desc)  {\n          id\n          hourStartTimestamp\n          fund0\n          fund1\n          token0Price\n          token1Price\n          token0Twap\n          prv\n        }\n     }\n   }\n  "),variables:{time:(0,m.Mv)()},fetchPolicy:"network-only"})}fetchUniwapPairDailyData(){return this.client.query({query:(0,l.Ps)("\n    query($id: ID,$time:Int) {\n      uniswapPair(id:$id) {\n        fund0\n        fund1\n        liquidity\n        dailyData(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          fund0\n          fund1\n          liquidity\n        }\n     }\n   }\n  "),variables:{id:s.wE.UniswapV2Pair.toLowerCase(),time:(0,m.Mv)()},fetchPolicy:"network-only"})}fetchDailyLPTokenStakedValue(){return this.client.query({query:(0,l.Ps)("\n    query($time:Int) \n    {\n        dailyLPStakings(where: {dayTimestamp_gt: $time},orderBy: dayTimestamp,orderDirection: desc)  {\n          id\n          dayTimestamp\n          stakedValue\n        }\n   }\n  "),variables:{id:s.wE.UniswapV2Pair.toLowerCase(),time:(0,m.Mv)()},fetchPolicy:"network-only"})}fetchMMFRewardDailyData(r){return this.client.query({query:(0,l.Ps)("\n    query($id: ID,$time:Int) {\n      pair(id:$id) {\n        id\n        mmfRewardDailyData(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          mmfReward\n        }\n     }\n   }\n  "),variables:{id:r.toLowerCase(),time:(0,m.Mv)()},fetchPolicy:"network-only"})}fetchTodayMMFRewardData(r){return this.client.query({query:(0,l.Ps)("\n    query($id: ID,$pairId:ID) {\n      mmfrewardDailyData(id:$id) {\n        id\n        dayStartTimestamp\n        mmfReward\n      }\n      pair(id:$pairId) {\n        id\n        fund0\n        fund1\n      }\n   }\n  "),variables:{id:r.toLowerCase()+"-"+Number.parseInt((new Date).getTime()/864e5+""),pairId:r.toLowerCase()},fetchPolicy:"network-only"})}fetchMMFRewardHourDataIn24H(r){return this.client.query({query:(0,l.Ps)("\n    query($id: ID,$time: Int) {\n      pair(id:$id) {\n        id\n        mmfRewardHourData(where: {hourStartTimestamp_gt: $time},orderBy: hourStartTimestamp,orderDirection: desc)  {\n          id\n          hourStartTimestamp\n          mmfReward\n        }\n     }\n   }\n  "),variables:{id:r.toLowerCase(),time:Number.parseInt((new Date).getTime()/1e3-86400+"")},fetchPolicy:"network-only"})}fetchTiTiStakingDailyData(){return this.client.query({query:(0,l.Ps)("\n    query($time:Int) {\n      tiTiStakingEpochDailyDatas(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n        id\n        dayStartTimestamp\n        tvl\n        apy\n        epoch{\n          id\n        }\n      }\n   }\n  "),variables:{time:(0,m.Mv)()},fetchPolicy:"network-only"})}fetchEachEpochTotalReward(r){return this.client.query({query:(0,l.Ps)("\n    query($id: ID) {\n      tiTiStakingEpoches(where: {id_lt: $id}) {\n        tvl\n        totalReward\n     }\n   }\n  "),variables:{id:r},fetchPolicy:"network-only"})}fetchVaultFund(r){return this.client.query({query:(0,l.Ps)("\n    query($id: ID,$time:Int) {\n      fundVault(id:$id) {\n        id\n        address\n        dailyBalance(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          balance\n          token{\n            symbol\n            decimals\n          }\n        }\n     }\n   }\n  "),variables:{id:r,time:(0,m.Mv)()},fetchPolicy:"network-only"})}fetchLastReOrdersData(){return this.client.query({query:(0,l.Ps)("\n    query {\n      reOrders(first: 1, orderBy: lastReordersTime, orderDirection: desc) {\n        id\n        lastReordersTime\n        reordersCondition\n        pavAmount\n      }\n   }\n  "),variables:{},fetchPolicy:"network-only"})}fetchHistoricalMMFStakingEpoch(r){return this.client.query({query:(0,l.Ps)("\n    query ($epochNum:Int){\n      mmfstakingEpoches(where:{epochNum_lt:$epochNum}){\n        epochNum\n        startTimestamp\n        periodFinish\n        totalReward\n      }\n   }\n  "),variables:{epochNum:1*r},fetchPolicy:"network-only"})}fetchHistoricalLPStakingEpoch(r){return this.client.query({query:(0,l.Ps)("\n    query ($epochNum:Int){\n      lpstakingEpoches(where:{epochNum_lt:$epochNum}){\n        epochNum\n        startTimestamp\n        periodFinish\n        totalReward\n      }\n   }\n  "),variables:{epochNum:1*r},fetchPolicy:"network-only"})}fetchTiTiStakingUserRank(r){return this.client.query({query:(0,l.Ps)("\n    query($rank: Int) {\n      tiTiUserStakings(orderBy: stakedValue, orderDirection: desc,first:$rank) {\n        id\n        stakedValue\n      }\n   }\n  "),variables:{rank:r},fetchPolicy:"network-only"})}}return h.\u0275fac=function(r){return new(r||h)},h.\u0275prov=t.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()}}]);