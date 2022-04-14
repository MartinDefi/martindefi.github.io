"use strict";(self.webpackChunkapp_titi_frontend=self.webpackChunkapp_titi_frontend||[]).push([[802],{84802:(N,Z,a)=>{a.r(Z),a.d(Z,{LpminingModule:()=>H});var A=a(69808),v=a(91083),g=a(11730),w=a(24102),U=a(98538),c=a.n(U),d=a(28321),k=a(17489),t=a(5e3),b=a(94602),L=a(68326),V=a(22313),I=a(53405),M=a(74696),q=a(31657),F=a(48966),_=a(92134),m=a(67322),S=a(77531),x=a(47423),y=a(4834),P=a(26688),O=a(11523),D=a(75303);function Y(o,h){if(1&o){const i=t.EpF();t.ynx(0),t.TgZ(1,"mat-form-field",8),t.TgZ(2,"mat-label"),t._uU(3),t.ALo(4,"numberFormat"),t.qZA(),t.TgZ(5,"input",24),t.NdJ("input",function(e){return t.CHM(i),t.oxw().onStakingInputValueChange(e)}),t.qZA(),t.TgZ(6,"div",25),t._UZ(7,"mat-icon",26),t._UZ(8,"mat-icon",27),t.qZA(),t.TgZ(9,"button",11),t.NdJ("click",function(){return t.CHM(i),t.oxw().maxStakeInputValue()}),t._uU(10,"MAX"),t.qZA(),t.qZA(),t.TgZ(11,"button",12),t.NdJ("click",function(){return t.CHM(i),t.oxw().onStake()}),t._uU(12),t.qZA(),t.TgZ(13,"mat-form-field",8),t.TgZ(14,"mat-label"),t._uU(15),t.ALo(16,"numberFormat"),t.qZA(),t.TgZ(17,"input",24),t.NdJ("input",function(e){return t.CHM(i),t.oxw().onWithdrawInputValueChange(e)}),t.qZA(),t.TgZ(18,"div",25),t._UZ(19,"mat-icon",26),t._UZ(20,"mat-icon",27),t.qZA(),t.TgZ(21,"button",11),t.NdJ("click",function(){return t.CHM(i),t.oxw().maxWithdrawInputValue()}),t._uU(22,"MAX"),t.qZA(),t.qZA(),t.TgZ(23,"button",12),t.NdJ("click",function(){return t.CHM(i),t.oxw().onWithdraw()}),t._uU(24),t.qZA(),t.BQk()}if(2&o){const i=t.oxw();t.xp6(3),t.hij("Balance:",t.xi3(4,8,i.LPTokenBalance,4)," UNI-V2"),t.xp6(2),t.Q6J("value",i.stakingInputValue),t.xp6(6),t.Q6J("disabled",!i.stakingInputValue||i.isZero(i.stakingInputValue)||i.isLoading),t.xp6(1),t.Oqu(i.isLoading?"waiting...":"STAKE"),t.xp6(3),t.hij("Staked:",t.xi3(16,11,i.stakedLPTokenBalance,4)," UNI-V2"),t.xp6(2),t.Q6J("value",i.withdrawInputValue),t.xp6(6),t.Q6J("disabled",!i.withdrawInputValue||i.isZero(i.withdrawInputValue)||i.isLoading),t.xp6(1),t.Oqu(i.isLoading?"waiting...":"WITHDRAW")}}function j(o,h){if(1&o){const i=t.EpF();t.ynx(0),t.TgZ(1,"div",28),t.TgZ(2,"p"),t._uU(3,"First, you need to call approve before you can perform subsequent operations."),t.qZA(),t.qZA(),t.TgZ(4,"button",12),t.NdJ("click",function(){return t.CHM(i),t.oxw().onApprove()}),t._uU(5),t.qZA(),t.BQk()}if(2&o){const i=t.oxw();t.xp6(4),t.Q6J("disabled",i.isLoading),t.xp6(1),t.Oqu(i.isLoading?"waiting...":"Approve")}}const C=[{token0:"TiUSD",token1:"UniswapV2Pair"}],B=[{path:"",component:(()=>{class o{constructor(i,n,e,r,l,u,f,T,s){this.router=i,this.accountService=n,this.web3Service=e,this.graphService=u,this.echartService=f,this.refreshService=T,this.dialog=s,this.isLoading=!0,this.isApproved=!1,this.pairList=C,this.currentPair=C[0],this.totalStakedLPToken=0,this.LPTokenBalance=0,this.stakedLPTokenBalance=0,this.claimableValue=0,this.decimal0=18,this.decimal1=18,this.stakingInputValue="0.0000",this.withdrawInputValue="0.0000",this.claimInputValue="0.0000",this.rewardRate=0,this.epochNum=0,this.startTime=0,this.periodFinish=0,this.distributedTiTiRewards=0,this.uniswapFund0=0,this.uniswapFund1=0,this.liquidity=0,this.dailyStakedValue=[],this.dailyLiquidity=[],this.titiDailyPrice=[],this.historicalAPY=[0],this.tvl=[],this.LPTokenPrice=0,this.option1={},this.option2={},r.addSvgIconLiteral("USDC",l.bypassSecurityTrustHtml(w.WZ)),r.addSvgIconLiteral("TiUSD",l.bypassSecurityTrustHtml(w.Mg)),r.addSvgIconLiteral("TiTi",l.bypassSecurityTrustHtml(w.FZ))}onStakingInputValueChange(i){this.stakingInputValue=(0,d.Y4)(i.target.value),i.target.value=this.stakingInputValue}onWithdrawInputValueChange(i){this.withdrawInputValue=(0,d.Y4)(i.target.value),i.target.value=this.withdrawInputValue}onClaimInputValueChange(i){this.claimInputValue=(0,d.Y4)(i.target.value),i.target.value=this.claimInputValue}isZero(i){return 0===Number.parseFloat(i)}ngOnInit(){this.initData(),this.fetchApproveInfo();const i=this.refreshService.registerFunction(()=>this.initData()),n=this.refreshService.registerFunctionWithoutInterval(()=>this.fetchApproveInfo());this.unregister=()=>{i(),n()}}ngOnDestroy(){this.unregister()}initData(){this.fetchTotalStakedLPToken(),this.fetchBalanceOfStakedLPToken(),this.fetchBalanceOfLPToken(),this.fetchClaimable(),Promise.all([this.fetchEpochInfo(),this.fetchUniwapPairDailyData(),this.fetchDailyStakedValue(),this.fetchOptions()]).then(()=>{this.calcHistoricalAPY(),this.fetchLPTokenPrice()}).then(()=>this.buildOption())}fetchApproveInfo(){this.isLoading=!0,this.accountService.getCurrentAccountAsyn().then(i=>Promise.all([this.web3Service.invokeContract("UniswapV2Pair","allowance",[i,g.wE.LPStakingPool]),this.web3Service.invokeContract("UniswapV2Pair","balanceOf",[i])]).then(([n,e])=>{"0"!==n[0]&&new(c())(n[0]).gt(e[0])?(this.isApproved=!0,this.isLoading=!1):(this.isApproved=!1,this.isLoading=!1)}))}onApprove(){this.isLoading=!0,this.web3Service.invokeContract("UniswapV2Pair","approve",[g.wE.LPStakingPool,g.fV]).then(i=>{i.status?(this.isApproved=!0,this.isLoading=!1):(this.isApproved=!1,this.isLoading=!1)},i=>{this.isApproved=!1,this.isLoading=!1})}getCurrentEpochTiTiRewards(){return(new Date).getTime()>1e3*this.periodFinish?0:this.rewardRate*(1*this.periodFinish-1*this.startTime)/10**18}buildOption(){this.option1.series[0].data=this.dailyLiquidity,this.option2.series[0].data=this.historicalAPY,this.option1=(0,k.cloneDeep)(this.option1),this.option2=(0,k.cloneDeep)(this.option2)}fetchOptions(){return Promise.all([this.echartService.fetchOption("LPMining-Liquidity"),this.echartService.fetchOption("LPMining-APY")]).then(i=>{this.option1=i[0],this.option2=i[1]})}fetchLPTokenPrice(){this.web3Service.invokeContract("MAMMSwapPair","getDepth",[]).then(i=>{this.LPTokenPrice=this.liquidity>0?2*this.uniswapFund0*(i[1]/10**6/(i[0]/10**18))/(this.liquidity*10**18):0})}calcHistoricalAPY(){const i=Array(30).fill(0);for(let n=0;n<30;n++){const e=this.dailyLiquidity[n]>0?2*this.tvl[n].fund0*this.dailyStakedValue[n]/(this.dailyLiquidity[n]*10**18):0;i[n]=e>0?this.titiDailyPrice[n]*this.rewardRate*86400*365/e:0}this.historicalAPY=i.map(n=>100*n)}fetchTotalStakedLPToken(){this.web3Service.invokeContract("LPStakingPool","totalSupply",[]).then(i=>{this.totalStakedLPToken=i[0]/10**this.decimal1})}fetchBalanceOfLPToken(){this.accountService.getCurrentAccountAsyn().then(i=>this.web3Service.invokeContract("UniswapV2Pair","balanceOf",[i]).then(n=>{this.LPTokenBalance=n[0]/10**this.decimal1}))}fetchBalanceOfStakedLPToken(){this.accountService.getCurrentAccountAsyn().then(i=>this.web3Service.invokeContract("LPStakingPool","balanceOf",[i]).then(n=>{this.stakedLPTokenBalance=n[0]/10**this.decimal1}))}fetchClaimable(){this.accountService.getCurrentAccountAsyn().then(i=>this.web3Service.invokeContract("LPStakingPool","earned",[i]).then(n=>{this.claimableValue=n[0]/10**18;const e=Math.pow(10,4);this.claimInputValue=(Math.floor(this.claimableValue*e)/e).toFixed(4)}))}fetchEpochInfo(){return Promise.all([this.web3Service.invokeContract("LPStakingPool","rewardRate",[]),this.web3Service.invokeContract("LPStakingPool","epochNum",[]),this.web3Service.invokeContract("LPStakingPool","startTime",[]),this.web3Service.invokeContract("LPStakingPool","periodFinish",[])]).then(i=>{this.rewardRate=i[0][0],this.epochNum=i[1][0],this.startTime=i[2][0],this.periodFinish=i[3][0];const n=(new Date).getTime()/1e3;this.distributedTiTiRewards=0,this.distributedTiTiRewards+=this.rewardRate*((n>this.periodFinish?this.periodFinish:n)-this.startTime)/10**18}).then(()=>this.fetchHistoricalLPStakingEpoch())}fetchHistoricalLPStakingEpoch(){return this.graphService.fetchHistoricalLPStakingEpoch(this.epochNum).then(({data:i})=>{i.lpstakingEpoches.forEach(n=>this.distributedTiTiRewards+=n.totalReward)})}fetchDailyStakedValue(){return this.graphService.fetchDailyLPTokenStakedValue().then(({data:i})=>{const n=Array(30).fill(null),e=(0,d.Gq)().reverse();i.dailyLPStakings.forEach(l=>{const u=e.indexOf(1e3*l.dayTimestamp);-1!==u&&(n[u]=l.stakedValue)});let r=0;n.forEach((l,u)=>{null==l?n[u]=r:r=l}),this.dailyStakedValue=n})}fetchUniwapPairDailyData(){return this.graphService.fetchUniwapPairDailyData().then(({data:i})=>{this.uniswapFund0=i.uniswapPair.fund1,this.uniswapFund1=i.uniswapPair.fund0,this.liquidity=i.uniswapPair.liquidity/10**18;const n=Array(30).fill(null),e=Array(30).fill(null),r=Array(30).fill(null),l=(0,d.Gq)().reverse();i.uniswapPair.dailyData.forEach(s=>{const p=l.indexOf(1e3*s.dayStartTimestamp);-1!==p&&(n[p]=s.fund1/s.fund0,e[p]={fund0:s.fund0,fund1:s.fund1},r[p]=s.liquidity/10**18)});let u=0,f={fund0:0,fund1:0},T=0;n.forEach((s,p)=>{null==s?n[p]=u:u=s}),e.forEach((s,p)=>{null==s?e[p]=f:f=s}),r.forEach((s,p)=>{null==s?r[p]=T:T=s}),this.titiDailyPrice=n,this.dailyLiquidity=r,this.tvl=e})}onStake(){this.isLoading=!0;const i=Math.pow(10,4),n=new(c())((0,d.uM)(this.stakingInputValue)).mul(new(c())("10").pow(new(c())(18))).div(new(c())(i));this.web3Service.openApproveModal(this.currentPair.token1,n,"LPStakingPool",e=>{e&&this.web3Service.invokeContract("LPStakingPool","stake",[n.toString()]).then(r=>{this.isLoading=!1},r=>{this.isLoading=!1})})}onWithdraw(){this.isLoading=!0;const i=Math.pow(10,4),n=new(c())((0,d.uM)(this.withdrawInputValue)).mul(new(c())("10").pow(new(c())(6))).div(new(c())(i));this.web3Service.invokeContract("LPStakingPool","withdraw",[n.toString()]).then(e=>{this.isLoading=!1},e=>{this.isLoading=!1})}onClaim(){this.isLoading=!0;const i=Math.pow(10,4);(Math.floor(this.claimableValue*i*10**18)/i).toFixed(0),this.web3Service.invokeContract("LPStakingPool","getReward",[]).then(e=>{this.isLoading=!1,a.e(797).then(a.bind(a,51797)).then(({TitiStakingModalComponent:r})=>{this.dialog.open(r).afterClosed().subscribe(u=>{u&&this.router.navigateByUrl("/titiStaking")})})},e=>{this.isLoading=!1})}onWithdrawAll(){this.web3Service.invokeContract("MarketMakerFund","withdrawAll",[]).then(i=>{})}maxStakeInputValue(){const i=Math.pow(10,4);this.stakingInputValue=(Math.floor(this.LPTokenBalance*i)/i).toFixed(4)}maxWithdrawInputValue(){const i=Math.pow(10,4);this.withdrawInputValue=(Math.floor(this.stakedLPTokenBalance*i)/i).toFixed(4)}maxClaimInputValue(){const i=Math.pow(10,4);this.claimInputValue=(Math.floor(this.claimableValue*i)/i).toFixed(4)}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(v.F0),t.Y36(b.B),t.Y36(g.Uc),t.Y36(L.jv),t.Y36(V.H7),t.Y36(I.h),t.Y36(M.p),t.Y36(q.g),t.Y36(F.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-lpmining"]],decls:87,vars:42,consts:[[1,"lpmining-wrapper"],[1,"lpmining-card","mat-elevation-z4"],[2,"justify-self","center","grid-column-start","1","grid-column-end","4"],["href","https://app.uniswap.org/#/add/v2/0xe2450bF757190a621328e9950054F66A67279c3a/0x7eF0AB70304A467C1Eb9C8bc0abF9D3cB3325edE?chain=kovan","target","_blank",1,"uniswap-link"],[2,"justify-self","start"],[2,"justify-self","end"],["text","Current Epoch TiTi Rewards APY"],[4,"ngIf"],["appearance","outline",1,"lpmining-input"],["type","text","matInput","","disabled","",2,"font-size","18px",3,"value","input"],["matPrefix","","svgIcon","TiTi",2,"padding-right","12px"],["matSuffix","","mat-flat-button","",2,"margin-bottom","12px","background-color","transparent","color","#2DD6B5",3,"click"],["mat-raised-button","","color","primary",1,"lpmining-input-btn",3,"disabled","click"],[1,"pool-info-card","mat-elevation-z4"],[1,"pool-info-title"],[2,"justify-self","center","grid-column-start","span 2"],[2,"justify-self","start","grid-column-start","span 2"],["text","Depth of TiUSD-TiTi pair in Uniswap"],[2,"justify-self","end","grid-column-start","span 2"],["text","Proportion of current staked liquidity in total liquidity"],["text","Total distributed TiTi, including previous epochs"],["text","The amount of TiTi rawards of current epoch"],[1,"pool-chart"],[2,"width","100%","height","100%",3,"option"],["type","text","matInput","","placeholder","0.0000",2,"font-size","18px",3,"value","input"],["matPrefix",""],["svgIcon","TiUSD",2,"margin-right","-6px","float","left"],["svgIcon","TiTi",2,"margin-right","24px"],[2,"grid-column-start","span 2"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h2",2),t._uU(3," TiTi-TiUSD LP Mining "),t.qZA(),t.TgZ(4,"a",3),t._uU(5," Add Liquidity in Uniswap-V2 "),t.qZA(),t.TgZ(6,"span",4),t._uU(7,"Total Staked Value:"),t.qZA(),t._UZ(8,"div"),t.TgZ(9,"span",5),t._uU(10),t.ALo(11,"numberFormat"),t.qZA(),t.TgZ(12,"span",4),t._uU(13,"Your Staked Value:"),t.qZA(),t._UZ(14,"div"),t.TgZ(15,"span",5),t._uU(16),t.ALo(17,"numberFormat"),t.qZA(),t.TgZ(18,"span",4),t._uU(19,"Claimable Rewards:"),t.qZA(),t._UZ(20,"div"),t.TgZ(21,"span",5),t._uU(22),t.ALo(23,"numberFormat"),t.qZA(),t.TgZ(24,"span",4),t._uU(25,"Dynamic APY"),t._UZ(26,"titi-tooltip",6),t._uU(27,": "),t.qZA(),t._UZ(28,"div"),t.TgZ(29,"span",5),t._uU(30),t.ALo(31,"numberFormat"),t.qZA(),t.YNc(32,Y,25,14,"ng-container",7),t.YNc(33,j,6,2,"ng-container",7),t.TgZ(34,"mat-form-field",8),t.TgZ(35,"mat-label"),t._uU(36),t.ALo(37,"numberFormat"),t.qZA(),t.TgZ(38,"input",9),t.NdJ("input",function(r){return n.onClaimInputValueChange(r)}),t.qZA(),t._UZ(39,"mat-icon",10),t.TgZ(40,"button",11),t.NdJ("click",function(){return n.maxClaimInputValue()}),t._uU(41,"MAX"),t.qZA(),t.qZA(),t.TgZ(42,"button",12),t.NdJ("click",function(){return n.onClaim()}),t._uU(43),t.qZA(),t.qZA(),t.TgZ(44,"div",13),t.TgZ(45,"h2",14),t._uU(46,"Pool Info"),t.qZA(),t._UZ(47,"mat-divider"),t.TgZ(48,"mat-chip-list",15),t.TgZ(49,"mat-chip"),t._uU(50,"Yield"),t.qZA(),t.qZA(),t._UZ(51,"mat-divider"),t.TgZ(52,"span",16),t._uU(53,"Total Liquidity"),t._UZ(54,"titi-tooltip",17),t._uU(55,":"),t.qZA(),t.TgZ(56,"span",18),t._uU(57),t.ALo(58,"numberFormat"),t.qZA(),t.TgZ(59,"span",16),t._uU(60,"Staked Ratio"),t._UZ(61,"titi-tooltip",19),t._uU(62,":"),t.qZA(),t.TgZ(63,"span",18),t._uU(64),t.ALo(65,"numberFormat"),t.qZA(),t.TgZ(66,"span",16),t._uU(67,"Distributed TiTi Rewards"),t._UZ(68,"titi-tooltip",20),t._uU(69,":"),t.qZA(),t.TgZ(70,"span",18),t._uU(71),t.ALo(72,"numberFormat"),t.qZA(),t.TgZ(73,"span",16),t._uU(74,"Current Epoch TiTi Rewards"),t._UZ(75,"titi-tooltip",21),t._uU(76,":"),t.qZA(),t.TgZ(77,"span",18),t._uU(78),t.ALo(79,"numberFormat"),t.qZA(),t._UZ(80,"mat-divider"),t.TgZ(81,"mat-chip-list",15),t.TgZ(82,"mat-chip"),t._uU(83,"Historical APY"),t.qZA(),t.qZA(),t._UZ(84,"mat-divider"),t.TgZ(85,"div",22),t._UZ(86,"titi-chart-wrapper",23),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(10),t.hij("$",t.xi3(11,15,n.totalStakedLPToken*n.LPTokenPrice,4),""),t.xp6(6),t.hij("$",t.xi3(17,18,n.stakedLPTokenBalance*n.LPTokenPrice,4),""),t.xp6(6),t.hij("",t.xi3(23,21,n.claimableValue,4)," TiTi"),t.xp6(8),t.hij("",t.xi3(31,24,n.historicalAPY[n.historicalAPY.length-1],4),"%"),t.xp6(2),t.Q6J("ngIf",n.isApproved),t.xp6(1),t.Q6J("ngIf",!n.isApproved),t.xp6(3),t.hij("Claimable:",t.xi3(37,27,n.claimableValue,4)," TiTi"),t.xp6(2),t.Q6J("value",n.claimInputValue),t.xp6(4),t.Q6J("disabled",!n.claimInputValue||n.isZero(n.claimInputValue)||n.isLoading),t.xp6(1),t.Oqu(n.isLoading?"waiting...":"CLAIM"),t.xp6(14),t.hij("$",t.xi3(58,30,n.liquidity*n.LPTokenPrice,4),""),t.xp6(7),t.hij("",t.xi3(65,33,100*n.totalStakedLPToken/n.liquidity,4),"%"),t.xp6(7),t.hij("",t.xi3(72,36,n.distributedTiTiRewards,4)," TiTi"),t.xp6(7),t.hij("",t.xi3(79,39,n.getCurrentEpochTiTiRewards(),4)," TiTi"),t.xp6(8),t.Q6J("option",n.option2))},directives:[_.Q,A.O5,m.KE,m.hX,S.Nt,L.Hw,m.qo,x.lW,m.R9,y.d,P.qn,P.HS,O.o],pipes:[D.p],styles:[".lpmining-wrapper[_ngcontent-%COMP%]{padding:24px;display:grid;grid-template-columns:16fr 8fr 1fr;grid-column-gap:48px;column-gap:48px}.lpmining-card[_ngcontent-%COMP%]{align-self:start;justify-self:start;width:100%;display:grid;grid-template-columns:1fr 1fr 1fr;grid-row-gap:18px;row-gap:18px;align-items:center}.lpmining-input[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:3}.lpmining-btn[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:4}.lpmining-input-btn[_ngcontent-%COMP%]{width:80%;justify-self:end;margin-bottom:18px;height:56px}.pool-info-card[_ngcontent-%COMP%]{align-self:start;justify-self:start;width:100%;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-row-gap:24px;row-gap:24px;align-items:center}.pool-info-title[_ngcontent-%COMP%]{grid-column-start:span 4;justify-self:center}.pool-chart[_ngcontent-%COMP%]{grid-column-start:span 4;justify-self:center;width:100%;height:100%}.uniswap-link[_ngcontent-%COMP%]{justify-self:center;grid-column-start:1;grid-column-end:4;color:#29c7a8}@media screen and (max-width: 1024px){.lpmining-wrapper[_ngcontent-%COMP%]{width:100%;padding:12px;margin:0;display:grid;grid-template-columns:1fr;grid-row-gap:12px;row-gap:12px}.lpmining-card[_ngcontent-%COMP%], .pool-info-card[_ngcontent-%COMP%]{width:100%}}"]}),o})()}];let E=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[v.Bz.forChild(B)],v.Bz]}),o})();var R=a(45922),J=a(87841);let H=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[A.ez,E,S.c,x.ot,L.Ps,y.t,P.Hi,R.F,J.m]]}),o})()}}]);