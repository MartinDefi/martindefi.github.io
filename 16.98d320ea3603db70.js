"use strict";(self.webpackChunkapp_titi_frontend=self.webpackChunkapp_titi_frontend||[]).push([[16],{39016:(N,T,n)=>{n.r(T),n.d(T,{MmfModule:()=>E});var A=n(69808),d=n(93075),g=n(91083),p=n(11730),w=n(24102),P=n(98538),s=n.n(P),h=n(28321),x=n(17489),t=n(5e3),D=n(94602),v=n(68326),F=n(22313),b=n(53405),y=n(74696),U=n(31657),L=n(48966),I=n(92134),f=n(67322),Z=n(77531),S=n(47423),k=n(4834),M=n(26688),R=n(11523),V=n(75303);function O(r,u){if(1&r){const i=t.EpF();t.ynx(0),t.TgZ(1,"mat-form-field",8),t.TgZ(2,"mat-label"),t._uU(3),t.ALo(4,"numberFormat"),t.qZA(),t.TgZ(5,"input",19),t.NdJ("input",function(a){return t.CHM(i),t.oxw().onStakingInputValueChange(a)}),t.qZA(),t._UZ(6,"mat-icon",20),t.TgZ(7,"button",11),t.NdJ("click",function(){return t.CHM(i),t.oxw().maxStakeInputValue()}),t._uU(8,"MAX"),t.qZA(),t.qZA(),t.TgZ(9,"button",12),t.NdJ("click",function(){return t.CHM(i),t.oxw().onStake()}),t._uU(10),t.qZA(),t.TgZ(11,"mat-form-field",8),t.TgZ(12,"mat-label"),t._uU(13),t.ALo(14,"numberFormat"),t.qZA(),t.TgZ(15,"input",21),t.NdJ("input",function(a){return t.CHM(i),t.oxw().onWithdrawInputValueChange(a)}),t.qZA(),t._UZ(16,"mat-icon",20),t.TgZ(17,"button",11),t.NdJ("click",function(){return t.CHM(i),t.oxw().maxWithdrawInputValue()}),t._uU(18,"MAX"),t.qZA(),t.qZA(),t.TgZ(19,"button",12),t.NdJ("click",function(){return t.CHM(i),t.oxw().onWithdraw()}),t._uU(20),t.qZA(),t.BQk()}if(2&r){const i=t.oxw();t.xp6(3),t.hij("Balance:",t.xi3(4,8,i.token1Balance,4)," USDC"),t.xp6(2),t.Q6J("ngModel",i.stakingInputValue),t.xp6(4),t.Q6J("disabled",!i.stakingInputValue||i.isZero(i.stakingInputValue)||i.isLoading),t.xp6(1),t.Oqu(i.isLoading?"waiting...":"STAKE"),t.xp6(3),t.hij("Staked:",t.xi3(14,11,i.stakedLPTokenBalance,4)," USDC"),t.xp6(2),t.Q6J("ngModel",i.withdrawInputValue),t.xp6(4),t.Q6J("disabled",!i.withdrawInputValue||i.isZero(i.withdrawInputValue)||i.isLoading),t.xp6(1),t.Oqu(i.isLoading?"waiting...":"WITHDRAW")}}function Y(r,u){if(1&r){const i=t.EpF();t.ynx(0),t.TgZ(1,"div",22),t.TgZ(2,"p"),t._uU(3,"Please approve to gain access to subsequent actions."),t.qZA(),t.qZA(),t.TgZ(4,"button",12),t.NdJ("click",function(){return t.CHM(i),t.oxw().onApprove()}),t._uU(5),t.qZA(),t.BQk()}if(2&r){const i=t.oxw();t.xp6(4),t.Q6J("disabled",i.isLoading),t.xp6(1),t.Oqu(i.isLoading?"waiting...":"Approve")}}const C=[{token0:"TiUSD",token1:"USDC"}],H=[{path:"",component:(()=>{class r{constructor(i,e,a,o,l,c,m,j,J){this.router=i,this.accountService=e,this.web3Service=a,this.graphService=c,this.echartService=m,this.refreshService=j,this.dialog=J,this.isLoading=!0,this.isApproved=!1,this.MMFPairList=C,this.currentMMFPair=C[0],this.mTokenBalance=0,this.claimableValue=0,this.decimal0=18,this.decimal1=6,this.totalStakedLPToken=0,this.stakedLPTokenBalance=0,this.token1Balance=0,this.stakingInputValue="0.0000",this.withdrawInputValue="0.0000",this.claimInputValue="0.0000",this.titiDailyPrice=[],this.mmfRewardDailyData=[],this.mmfTotalReward=0,this.mmfRewardIn24H=0,this.distributedTiTiRewards=0,this.rewardRate=0,this.epochNum=0,this.startTime=0,this.periodFinish=0,this.token1DailyData=[],this.historicalAPY=[{titi:0,mmf:0}],this.option={},o.addSvgIconLiteral("USDC",l.bypassSecurityTrustHtml(w.WZ)),o.addSvgIconLiteral("TiUSD",l.bypassSecurityTrustHtml(w.Mg)),o.addSvgIconLiteral("TiTi",l.bypassSecurityTrustHtml(w.FZ))}calcHistoricalAPY(){this.mmfTotalReward=0;const i=Array(30).fill({titi:0,mmf:0}),e=(0,h.Gq)().reverse();e.forEach((a,o)=>i[o]={titi:this.token1DailyData[o].fund1>0?this.titiDailyPrice[o]*this.rewardRate*86400*100*365*10**this.decimal1/(this.token1DailyData[o].fund1*this.token1DailyData[o].price1*10**this.decimal0):0,mmf:0}),this.mmfRewardDailyData.forEach(a=>{this.mmfTotalReward+=a.mmfReward/10**this.decimal1;const o=e.indexOf(1e3*a.dayStartTimestamp);-1!==o&&(i[o].mmf=this.token1DailyData[o].fund1>0?a.mmfReward*this.token1DailyData[o].price1*100*365/this.token1DailyData[o].fund1*this.token1DailyData[o].price1:0)}),this.historicalAPY=i,this.buildOption()}getCurrentEpochTiTiRewards(){return(new Date).getTime()>1e3*this.periodFinish?0:this.rewardRate*(1*this.periodFinish-1*this.startTime)/10**18}isZero(i){return 0===Number.parseFloat(i)}onStakingInputValueChange(i){this.stakingInputValue=(0,h.Y4)(i.target.value),i.target.value=this.stakingInputValue}onWithdrawInputValueChange(i){this.withdrawInputValue=(0,h.Y4)(i.target.value),i.target.value=this.withdrawInputValue}onClaimInputValueChange(i){this.claimInputValue=(0,h.Y4)(i.target.value),i.target.value=this.claimInputValue}ngOnInit(){this.initData(),this.fetchApproveInfo();const i=this.refreshService.registerFunction(()=>this.initData()),e=this.refreshService.registerFunctionWithoutInterval(()=>this.fetchApproveInfo());this.unregister=()=>{i(),e()}}ngOnDestroy(){this.unregister()}initData(){this.fetchTotalStakedLPToken(),this.fetchBalanceOfStakedLPToken(),this.fetchBalanceOfToken1(),this.fetchBalanceOfmToken(),this.fetchClaimable(),Promise.all([this.fetchTiTiDailyPrice(),this.fetchEpochInfo(),this.fetchMMFRewardDailyData(),this.fetchMMFRewardHourDataIn24H(),this.fetchToken1DailyPrice(),this.fetchOption()]).then(()=>{this.calcHistoricalAPY()})}fetchApproveInfo(){this.isLoading=!0,this.accountService.getCurrentAccountAsyn().then(i=>Promise.all([this.web3Service.invokeContract("USDC","allowance",[i,p.wE.MarketMakerFund]),this.web3Service.invokeContract("USDC","balanceOf",[i])]).then(([e,a])=>{"0"!==e[0]&&new(s())(e[0]).gt(a[0])?(this.isApproved=!0,this.isLoading=!1):(this.isApproved=!1,this.isLoading=!1)}))}onApprove(){this.isLoading=!0,this.web3Service.invokeContract("USDC","approve",[p.wE.MarketMakerFund,p.fV]).then(i=>{i.status?(this.isApproved=!0,this.isLoading=!1):(this.isApproved=!1,this.isLoading=!1)},i=>{this.isApproved=!1,this.isLoading=!1})}fetchOption(){return this.echartService.fetchOption("MMF-APY").then(i=>this.option=i)}buildOption(){this.option.series[0].data=this.historicalAPY.map(i=>i.mmf+i.titi),this.option=(0,x.cloneDeep)(this.option)}fetchTotalStakedLPToken(){this.web3Service.invokeContract("MMFLPStakingPool","totalSupply",[]).then(i=>{this.totalStakedLPToken=parseFloat(new(s())(i[0]).div(new(s())("10").pow(new(s())(this.decimal1-4))).toString())/1e4})}fetchBalanceOfStakedLPToken(){this.accountService.getCurrentAccountAsyn().then(i=>this.web3Service.invokeContract("MMFLPStakingPool","balanceOf",[i]).then(e=>{this.stakedLPTokenBalance=parseFloat(new(s())(e[0]).div(new(s())("10").pow(new(s())(this.decimal1-4))).toString())/1e4}))}fetchBalanceOfToken1(){this.accountService.getCurrentAccountAsyn().then(i=>this.web3Service.invokeContract(this.currentMMFPair.token1,"balanceOf",[i]).then(e=>{this.token1Balance=parseFloat(new(s())(e[0]).div(new(s())("10").pow(new(s())(this.decimal1-4))).toString())/1e4}))}fetchBalanceOfmToken(){this.accountService.getCurrentAccountAsyn().then(i=>this.web3Service.invokeContract("MarketMakerFund","balanceOf",[i]).then(e=>{this.mTokenBalance=parseFloat(new(s())(e[0]).div(new(s())("10").pow(new(s())(2))).toString())/1e4}))}fetchClaimable(){this.accountService.getCurrentAccountAsyn().then(i=>this.web3Service.invokeContract("MMFLPStakingPool","earned",[i]).then(e=>{this.claimableValue=parseFloat(new(s())(e[0]).div(new(s())("10").pow(new(s())(14))).toString())/1e4;const a=Math.pow(10,4);this.claimInputValue=(0,h.Y4)(Math.floor(this.claimableValue*a)/a+"")}))}fetchEpochInfo(){return Promise.all([this.web3Service.invokeContract("MMFLPStakingPool","rewardRate",[]),this.web3Service.invokeContract("MMFLPStakingPool","epochNum",[]),this.web3Service.invokeContract("MMFLPStakingPool","startTime",[]),this.web3Service.invokeContract("MMFLPStakingPool","periodFinish",[])]).then(i=>{this.rewardRate=i[0][0],this.epochNum=i[1][0],this.startTime=i[2][0],this.periodFinish=i[3][0];const e=(new Date).getTime()/1e3;this.distributedTiTiRewards=0,this.distributedTiTiRewards+=this.rewardRate*((e>this.periodFinish?this.periodFinish:e)-this.startTime)/10**18}).then(()=>this.fetchHistoricalMMFStakingEpoch())}fetchTiTiDailyPrice(){return Promise.all([this.graphService.fetchUniwapPairDailyData(),this.web3Service.invokeContract("UniswapV2Pair","getReserves",[])]).then(([{data:i},e])=>{const a=Array(30).fill(null),o=(0,h.Gq)().reverse();0===i.uniswapPair.dailyData.length?a.fill(e[0]/e[1]):i.uniswapPair.dailyData.forEach(c=>{const m=o.indexOf(1e3*c.dayStartTimestamp);-1!==m&&(a[m]=c.fund1/c.fund0)});let l="0";a.forEach((c,m)=>{null==c?a[m]=l:l=a[m]}),this.titiDailyPrice=a})}fetchMMFRewardDailyData(){return this.graphService.fetchMMFRewardDailyData(p.wE.MAMMSwapPair).then(({data:i})=>{this.mmfRewardDailyData=i.pair.mmfRewardDailyData})}fetchMMFRewardHourDataIn24H(){return this.graphService.fetchMMFRewardHourDataIn24H(p.wE.MAMMSwapPair).then(({data:i})=>{this.mmfRewardIn24H=0,i.pair.mmfRewardHourData.forEach(e=>this.mmfRewardIn24H+=e.mmfReward/10**this.decimal1)})}fetchToken1DailyPrice(){return this.graphService.fetchMMFSwapPairDailyData(p.wE.MAMMSwapPair).then(({data:i})=>{const e=Array(30).fill(null),a=(0,h.Gq)().reverse();i.pair.pairDailyData.forEach(l=>{const c=a.indexOf(1e3*l.dayStartTimestamp);-1!==c&&(e[c]={price1:l.fund0*10**this.decimal1/(l.fund1*10**this.decimal0),fund1:l.fund1})});let o={price1:0,fund1:0};e.forEach((l,c)=>{null==l?e[c]=o:o=l}),this.token1DailyData=e})}fetchHistoricalMMFStakingEpoch(){return this.graphService.fetchHistoricalMMFStakingEpoch(this.epochNum).then(({data:i})=>{i.mmfstakingEpoches.forEach(e=>this.distributedTiTiRewards+=e.totalReward)})}onStake(){this.isLoading=!0;const i=Math.pow(10,4),e=new(s())((0,h.uM)(this.stakingInputValue)).mul(new(s())("10").pow(new(s())(this.decimal1))).div(new(s())(i));this.web3Service.openApproveModal(this.currentMMFPair.token1,e,"MarketMakerFund",a=>{a&&this.web3Service.invokeContract("MarketMakerFund","addLiquidity",[e.toString(),!0]).then(o=>{this.isLoading=!1},o=>{this.isLoading=!1})})}onWithdraw(){this.isLoading=!0;const i=Math.pow(10,4),e=new(s())((0,h.uM)(this.withdrawInputValue)).mul(new(s())("10").pow(new(s())(this.decimal1))).div(new(s())(i));this.web3Service.invokeContract("MarketMakerFund","removeLiquidity",[e.toString(),!0]).then(a=>{this.isLoading=!1},a=>{this.isLoading=!1})}onClaim(){this.isLoading=!0;const i=Math.pow(10,4);(Math.floor(this.claimableValue*i*10**18)/i).toFixed(0),this.web3Service.invokeContract("MMFLPStakingPool","getReward",[]).then(a=>{this.isLoading=!1,n.e(797).then(n.bind(n,51797)).then(({TitiStakingModalComponent:o})=>{this.dialog.open(o).afterClosed().subscribe(c=>{c&&this.router.navigateByUrl("/titiStaking")})})},a=>{this.isLoading=!1})}onWithdrawAll(){this.web3Service.invokeContract("MarketMakerFund","withdrawAll",[]).then(i=>{})}maxStakeInputValue(){const i=Math.pow(10,4);this.stakingInputValue=(Math.floor(this.token1Balance*i)/i).toFixed(4)}maxWithdrawInputValue(){const i=Math.pow(10,4);this.withdrawInputValue=(Math.floor(this.stakedLPTokenBalance*i)/i).toFixed(4)}maxClaimInputValue(){const i=Math.pow(10,4);this.claimInputValue=(Math.floor(this.claimableValue*i)/i).toFixed(4)}}return r.\u0275fac=function(i){return new(i||r)(t.Y36(g.F0),t.Y36(D.B),t.Y36(p.Uc),t.Y36(v.jv),t.Y36(F.H7),t.Y36(b.h),t.Y36(y.p),t.Y36(U.g),t.Y36(L.uw))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-mmf"]],decls:86,vars:53,consts:[[1,"mmf-wrapper"],[1,"mmf-card","mat-elevation-z4"],[2,"justify-self","center"],[2,"justify-self","start"],[2,"justify-self","end"],[3,"text"],[2,"justify-self","end","grid-column-start","span 2"],[4,"ngIf"],["appearance","outline",1,"mmf-input"],["type","text","matInput","","disabled","",2,"font-size","18px",3,"ngModel","input"],["matPrefix","","svgIcon","TiTi",2,"padding-right","12px"],["matSuffix","","mat-flat-button","",2,"margin-bottom","12px","background-color","transparent","color","#2DD6B5",3,"click"],["mat-raised-button","","color","primary",1,"mmf-input-btn",3,"disabled","click"],[1,"pool-info-card","mat-elevation-z4"],[1,"pool-info-title"],[2,"justify-self","center","grid-column-start","span 2"],[2,"justify-self","start","grid-column-start","span 2"],[1,"pool-chart"],[2,"width","100%","height","100%",3,"option"],["matInput","","type","text",2,"font-size","18px",3,"ngModel","input"],["matPrefix","","svgIcon","USDC",2,"padding-right","12px"],["type","text","matInput","",2,"font-size","18px",3,"ngModel","input"],[2,"grid-column-start","span 2"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"div"),t.TgZ(3,"h2",2),t._uU(4,"MMF-USDC"),t.qZA(),t._UZ(5,"div"),t.TgZ(6,"span",3),t._uU(7,"Total Staked Value:"),t.qZA(),t._UZ(8,"div"),t.TgZ(9,"span",4),t._uU(10),t.ALo(11,"numberFormat"),t.qZA(),t.TgZ(12,"span",3),t._uU(13,"Your Staked Value:"),t.qZA(),t._UZ(14,"div"),t.TgZ(15,"span",4),t._uU(16),t.ALo(17,"numberFormat"),t.qZA(),t.TgZ(18,"span",3),t._uU(19,"Claimable Rewards :"),t.qZA(),t._UZ(20,"div"),t.TgZ(21,"span",4),t._uU(22),t.ALo(23,"numberFormat"),t.qZA(),t.TgZ(24,"span",3),t._uU(25,"Dynamic APY"),t._UZ(26,"titi-tooltip",5),t.ALo(27,"numberFormat"),t.ALo(28,"numberFormat"),t._uU(29,":"),t.qZA(),t.TgZ(30,"span",6),t._uU(31),t.ALo(32,"numberFormat"),t.ALo(33,"numberFormat"),t.qZA(),t.YNc(34,O,21,14,"ng-container",7),t.YNc(35,Y,6,2,"ng-container",7),t.TgZ(36,"mat-form-field",8),t.TgZ(37,"mat-label"),t._uU(38),t.ALo(39,"numberFormat"),t.qZA(),t.TgZ(40,"input",9),t.NdJ("input",function(o){return e.onClaimInputValueChange(o)}),t.qZA(),t._UZ(41,"mat-icon",10),t.TgZ(42,"button",11),t.NdJ("click",function(){return e.maxClaimInputValue()}),t._uU(43,"MAX"),t.qZA(),t.qZA(),t.TgZ(44,"button",12),t.NdJ("click",function(){return e.onClaim()}),t._uU(45),t.qZA(),t.qZA(),t.TgZ(46,"div",13),t.TgZ(47,"h2",14),t._uU(48,"MMF Rewards Info"),t.qZA(),t._UZ(49,"mat-divider"),t.TgZ(50,"mat-chip-list",15),t.TgZ(51,"mat-chip"),t._uU(52,"USDC Rewards"),t.qZA(),t.qZA(),t._UZ(53,"mat-divider"),t.TgZ(54,"span",16),t._uU(55,"Distributed USDC Rewards:"),t.qZA(),t.TgZ(56,"span",6),t._uU(57),t.ALo(58,"numberFormat"),t.qZA(),t.TgZ(59,"span",16),t._uU(60,"24H USDC Rewards:"),t.qZA(),t.TgZ(61,"span",6),t._uU(62),t.ALo(63,"numberFormat"),t.qZA(),t._UZ(64,"mat-divider"),t.TgZ(65,"mat-chip-list",15),t.TgZ(66,"mat-chip"),t._uU(67,"TiTi Rewards"),t.qZA(),t.qZA(),t._UZ(68,"mat-divider"),t.TgZ(69,"span",16),t._uU(70,"Distributed TiTi Rewards:"),t.qZA(),t.TgZ(71,"span",6),t._uU(72),t.ALo(73,"numberFormat"),t.qZA(),t.TgZ(74,"span",16),t._uU(75,"Current Epoch TiTi Rewards:"),t.qZA(),t.TgZ(76,"span",6),t._uU(77),t.ALo(78,"numberFormat"),t.qZA(),t._UZ(79,"mat-divider"),t.TgZ(80,"mat-chip-list",15),t.TgZ(81,"mat-chip"),t._uU(82,"Historical APY"),t.qZA(),t.qZA(),t._UZ(83,"mat-divider"),t.TgZ(84,"div",17),t._UZ(85,"titi-chart-wrapper",18),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(10),t.hij("$",t.xi3(11,17,e.totalStakedLPToken,4),""),t.xp6(6),t.hij("$",t.xi3(17,20,e.stakedLPTokenBalance,4),""),t.xp6(6),t.hij("",t.xi3(23,23,e.claimableValue,4)," TiTi"),t.xp6(4),t.Q6J("text",t.xi3(27,26,e.historicalAPY[e.historicalAPY.length-1].mmf,4)+"% USDC Rewards APY + "+t.xi3(28,29,e.historicalAPY[e.historicalAPY.length-1].titi,4)+"% TiTi Rewards APY"),t.xp6(5),t.AsE("",t.xi3(32,32,e.historicalAPY[e.historicalAPY.length-1].mmf,4),"% + ",t.xi3(33,35,e.historicalAPY[e.historicalAPY.length-1].titi,4),"%"),t.xp6(3),t.Q6J("ngIf",e.isApproved),t.xp6(1),t.Q6J("ngIf",!e.isApproved),t.xp6(3),t.hij("Claimable:",t.xi3(39,38,e.claimableValue,4)," TiTi"),t.xp6(2),t.Q6J("ngModel",e.claimInputValue),t.xp6(4),t.Q6J("disabled",!e.claimInputValue||e.isZero(e.claimInputValue)||e.isLoading),t.xp6(1),t.Oqu(e.isLoading?"waiting...":"CLAIM"),t.xp6(12),t.hij("",t.xi3(58,41,e.mmfTotalReward,4)," USDC"),t.xp6(5),t.hij("",t.xi3(63,44,e.mmfRewardIn24H,4)," USDC"),t.xp6(10),t.hij("",t.xi3(73,47,e.distributedTiTiRewards,4)," TiTi"),t.xp6(5),t.hij("",t.xi3(78,50,e.getCurrentEpochTiTiRewards(),4)," TiTi"),t.xp6(8),t.Q6J("option",e.option))},directives:[I.Q,A.O5,f.KE,f.hX,Z.Nt,d.Fj,d.JJ,d.On,v.Hw,f.qo,S.lW,f.R9,k.d,M.qn,M.HS,R.o],pipes:[V.p],styles:[".mmf-wrapper[_ngcontent-%COMP%]{padding:24px;display:grid;grid-template-columns:16fr 8fr 1fr;grid-column-gap:48px;column-gap:48px}.mmf-card[_ngcontent-%COMP%]{align-self:start;justify-self:start;width:100%;display:grid;grid-template-columns:1fr 1fr 1fr;grid-row-gap:24px;row-gap:24px;align-items:center}.mmf-input[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:3}.mmf-btn[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:4}.mmf-input-btn[_ngcontent-%COMP%]{width:80%;justify-self:end;margin-bottom:18px;height:56px}.pool-info-card[_ngcontent-%COMP%]{align-self:start;justify-self:start;width:100%;display:grid;grid-template-columns:1fr 2fr 2fr 1fr;grid-row-gap:24px;row-gap:24px;align-items:center}.pool-info-title[_ngcontent-%COMP%]{grid-column-start:span 4;justify-self:center}.pool-chart[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;justify-self:center;width:100%;height:100%}@media screen and (max-width: 1024px){.mmf-wrapper[_ngcontent-%COMP%]{width:100%;padding:12px;display:grid;grid-template-columns:1fr;grid-row-gap:12px;row-gap:12px;margin:0}.mmf-card[_ngcontent-%COMP%]{width:100%}}"]}),r})()}];let _=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[g.Bz.forChild(H)],g.Bz]}),r})();var q=n(45922),B=n(87841);let E=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[A.ez,_,d.u5,Z.c,S.ot,v.Ps,k.t,M.Hi,q.F,B.m]]}),r})()}}]);