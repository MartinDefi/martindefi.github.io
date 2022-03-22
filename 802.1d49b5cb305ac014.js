"use strict";(self.webpackChunkapp_titi_frontend=self.webpackChunkapp_titi_frontend||[]).push([[802],{84802:(N,P,e)=>{e.r(P),e.d(P,{LpminingModule:()=>J});var U=e(69808),w=e(91083),T=e(24102),C=e(98538),u=e.n(C),d=e(28321),k=e(17489),t=e(5e3),b=e(94602),V=e(11730),v=e(68326),I=e(22313),M=e(53405),q=e(74696),x=e(31657),F=e(48966),D=e(92134),f=e(67322),A=e(77531),S=e(47423),L=e(4834),Z=e(26688),O=e(11523),j=e(75303);const y=[{token0:"TiUSD",token1:"UniswapV2Pair"}],R=[{path:"",component:(()=>{class r{constructor(n,i,a,o,h,s,m,g){this.accountService=n,this.web3Service=i,this.graphService=h,this.echartService=s,this.refreshService=m,this.dialog=g,this.pairList=y,this.currentPair=y[0],this.totalStakedLPToken=0,this.LPTokenBalance=0,this.stakedLPTokenBalance=0,this.claimableValue=0,this.decimal0=18,this.decimal1=18,this.stakingInputValue="0.0000",this.withdrawInputValue="0.0000",this.claimInputValue="0.0000",this.rewardRate=0,this.epochNum=0,this.startTime=0,this.periodFinish=0,this.distributedTiTiRewards=0,this.uniswapFund0=0,this.uniswapFund1=0,this.liquidity=0,this.dailyStakedValue=[],this.dailyLiquidity=[],this.titiDailyPrice=[],this.historicalAPY=[],this.tvl=[],this.LPTokenPrice=0,this.option1={},this.option2={},a.addSvgIconLiteral("USDC",o.bypassSecurityTrustHtml(T.WZ)),a.addSvgIconLiteral("TiUSD",o.bypassSecurityTrustHtml(T.Mg)),a.addSvgIconLiteral("TiTi",o.bypassSecurityTrustHtml(T.FZ))}onStakingInputValueChange(n){this.stakingInputValue=(0,d.Y4)(n.target.value),n.target.value=this.stakingInputValue}onWithdrawInputValueChange(n){this.withdrawInputValue=(0,d.Y4)(n.target.value),n.target.value=this.withdrawInputValue}onClaimInputValueChange(n){this.claimInputValue=(0,d.Y4)(n.target.value),n.target.value=this.claimInputValue}isZero(n){return 0===Number.parseFloat(n)}ngOnInit(){this.initData(),this.unregister=this.refreshService.registerFunction(()=>this.initData())}ngOnDestroy(){this.unregister()}initData(){this.fetchTotalStakedLPToken(),this.fetchBalanceOfStakedLPToken(),this.fetchBalanceOfLPToken(),this.fetchClaimable(),Promise.all([this.fetchEpochInfo(),this.fetchUniwapPairDailyData(),this.fetchDailyStakedValue(),this.fetchOptions()]).then(()=>{this.calcHistoricalAPY(),this.fetchLPTokenPrice()}).then(()=>this.buildOption())}getCurrentEpochTiTiRewards(){return(new Date).getTime()>1e3*this.periodFinish?0:this.rewardRate*(1*this.periodFinish-1*this.startTime)/10**18}buildOption(){this.option1.series[0].data=this.dailyLiquidity,this.option2.series[0].data=this.historicalAPY,this.option1=(0,k.cloneDeep)(this.option1),this.option2=(0,k.cloneDeep)(this.option2)}fetchOptions(){return Promise.all([this.echartService.fetchOption("LPMining-Liquidity"),this.echartService.fetchOption("LPMining-APY")]).then(n=>{this.option1=n[0],this.option2=n[1]})}fetchLPTokenPrice(){this.web3Service.invokeContract("MAMMSwapPair","getDepth",[]).then(n=>{this.LPTokenPrice=this.liquidity>0?2*this.uniswapFund0*(n[1]/10**6/(n[0]/10**18))/(this.liquidity*10**18):0})}calcHistoricalAPY(){const n=Array(30).fill(0);for(let i=0;i<30;i++){const a=this.dailyLiquidity[i]>0?2*this.tvl[i].fund0*this.dailyStakedValue[i]/(this.dailyLiquidity[i]*10**18):0;n[i]=a>0?this.titiDailyPrice[i]*this.rewardRate*86400*365/a:0}this.historicalAPY=n.map(i=>100*i)}fetchTotalStakedLPToken(){this.web3Service.invokeContract("LPStakingPool","totalSupply",[]).then(n=>{this.totalStakedLPToken=n[0]/10**this.decimal1})}fetchBalanceOfLPToken(){this.accountService.getCurrentAccountAsyn().then(n=>this.web3Service.invokeContract("UniswapV2Pair","balanceOf",[n]).then(i=>{this.LPTokenBalance=i[0]/10**this.decimal1}))}fetchBalanceOfStakedLPToken(){this.accountService.getCurrentAccountAsyn().then(n=>this.web3Service.invokeContract("LPStakingPool","balanceOf",[n]).then(i=>{this.stakedLPTokenBalance=i[0]/10**this.decimal1}))}fetchClaimable(){this.accountService.getCurrentAccountAsyn().then(n=>this.web3Service.invokeContract("LPStakingPool","earned",[n]).then(i=>{this.claimableValue=i[0]/10**18;const a=Math.pow(10,4);this.claimInputValue=(Math.floor(this.claimableValue*a)/a).toFixed(4)}))}fetchEpochInfo(){return Promise.all([this.web3Service.invokeContract("LPStakingPool","rewardRate",[]),this.web3Service.invokeContract("LPStakingPool","epochNum",[]),this.web3Service.invokeContract("LPStakingPool","startTime",[]),this.web3Service.invokeContract("LPStakingPool","periodFinish",[])]).then(n=>{this.rewardRate=n[0][0],this.epochNum=n[1][0],this.startTime=n[2][0],this.periodFinish=n[3][0];const i=(new Date).getTime()/1e3;this.distributedTiTiRewards=0,this.distributedTiTiRewards+=this.rewardRate*((i>this.periodFinish?this.periodFinish:i)-this.startTime)/10**18}).then(()=>this.fetchHistoricalLPStakingEpoch())}fetchHistoricalLPStakingEpoch(){return this.graphService.fetchHistoricalLPStakingEpoch(this.epochNum).then(({data:n})=>{n.lpstakingEpoches.forEach(i=>this.distributedTiTiRewards+=i.totalReward)})}fetchDailyStakedValue(){return this.graphService.fetchDailyLPTokenStakedValue().then(({data:n})=>{const i=Array(30).fill(null),a=(0,d.Gq)().reverse();n.dailyLPStakings.forEach(h=>{const s=a.indexOf(1e3*h.dayTimestamp);-1!==s&&(i[s]=h.stakedValue)});let o=0;i.forEach((h,s)=>{null==h?i[s]=o:o=h}),this.dailyStakedValue=i})}fetchUniwapPairDailyData(){return this.graphService.fetchUniwapPairDailyData().then(({data:n})=>{this.uniswapFund0=n.uniswapPair.fund0,this.uniswapFund1=n.uniswapPair.fund1,this.liquidity=n.uniswapPair.liquidity/10**18;const i=Array(30).fill(null),a=Array(30).fill(null),o=Array(30).fill(null),h=(0,d.Gq)().reverse();n.uniswapPair.dailyData.forEach(l=>{const p=h.indexOf(1e3*l.dayStartTimestamp);-1!==p&&(i[p]=l.fund1/l.fund0,a[p]={fund0:l.fund0,fund1:l.fund1},o[p]=l.liquidity/10**18)});let s=0,m={fund0:0,fund1:0},g=0;i.forEach((l,p)=>{null==l?i[p]=s:s=l}),a.forEach((l,p)=>{null==l?a[p]=m:m=l}),o.forEach((l,p)=>{null==l?o[p]=g:g=l}),this.titiDailyPrice=i,this.dailyLiquidity=o,this.tvl=a})}onStake(){const n=Math.pow(10,4),i=new(u())((0,d.uM)(this.stakingInputValue)).mul(new(u())("10").pow(new(u())(18))).div(new(u())(n));this.web3Service.openApproveModal(this.currentPair.token1,i,"LPStakingPool",a=>{a&&this.web3Service.invokeContract("LPStakingPool","stake",[i.toString()]).then(o=>{})})}onWithdraw(){const n=Math.pow(10,4),i=new(u())((0,d.uM)(this.withdrawInputValue)).mul(new(u())("10").pow(new(u())(6))).div(new(u())(n));this.web3Service.invokeContract("LPStakingPool","withdraw",[i.toString()]).then(a=>{})}onClaim(){const n=Math.pow(10,4),i=(Math.floor(this.claimableValue*n*10**18)/n).toFixed(0);this.web3Service.invokeContract("LPStakingPool","getReward",[]).then(a=>{e.e(797).then(e.bind(e,51797)).then(({TitiStakingModalComponent:o})=>{this.dialog.open(o).afterClosed().subscribe(s=>{s&&this.web3Service.openApproveModal("TiTiToken",new(u())(i),"TiTiStaking",m=>{m&&this.accountService.getCurrentAccountAsyn().then(g=>this.web3Service.invokeContract("TiTiStaking","stake",[g,new(u())(i).toString()]).then(l=>{}))})})})},a=>{})}onWithdrawAll(){this.web3Service.invokeContract("MarketMakerFund","withdrawAll",[]).then(n=>{})}maxStakeInputValue(){const n=Math.pow(10,4);this.stakingInputValue=(Math.floor(this.LPTokenBalance*n)/n).toFixed(4)}maxWithdrawInputValue(){const n=Math.pow(10,4);this.withdrawInputValue=(Math.floor(this.stakedLPTokenBalance*n)/n).toFixed(4)}maxClaimInputValue(){const n=Math.pow(10,4);this.claimInputValue=(Math.floor(this.claimableValue*n)/n).toFixed(4)}}return r.\u0275fac=function(n){return new(n||r)(t.Y36(b.B),t.Y36(V.Uc),t.Y36(v.jv),t.Y36(I.H7),t.Y36(M.h),t.Y36(q.p),t.Y36(x.g),t.Y36(F.uw))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-lpmining"]],decls:116,vars:52,consts:[[1,"lpmining-wrapper"],[1,"lpmining-card","mat-elevation-z4"],[2,"justify-self","center","grid-column-start","1","grid-column-end","4"],["href","","target","_blank",1,"uniswap-link"],[2,"justify-self","start"],[2,"justify-self","end"],["text","Current Epoch TiTi Rewards APY"],["appearance","outline",1,"lpmining-input"],["type","text","matInput","","placeholder","0.0000",2,"font-size","18px",3,"value","input"],["matPrefix",""],["svgIcon","TiUSD",2,"margin-right","-6px","float","left"],["svgIcon","TiTi",2,"margin-right","24px"],["matSuffix","","mat-flat-button","",2,"margin-bottom","12px","background-color","transparent","color","#2DD6B5",3,"click"],["mat-raised-button","","color","primary",1,"lpmining-input-btn",3,"disabled","click"],["type","text","matInput","","disabled","",2,"font-size","18px",3,"value","input"],["matPrefix","","svgIcon","TiTi",2,"padding-right","12px"],[1,"pool-info-card","mat-elevation-z4"],[1,"pool-info-title"],[2,"justify-self","center","grid-column-start","span 2"],[2,"justify-self","start","grid-column-start","span 2"],["text","Depth of TiUSD-TiTi pair in Uniswap"],[2,"justify-self","end","grid-column-start","span 2"],["text","Proportion of current staked liquidity in total liquidity"],["text","Total distributed TiTi, including previous epochs"],["text","The amount of TiTi rawards of current epoch"],[1,"pool-chart"],[2,"width","100%","height","100%",3,"option"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h2",2),t._uU(3," TiTi-TiUSD LP Mining "),t.qZA(),t.TgZ(4,"a",3),t._uU(5," Add Liquidity in Uniswap-V2 "),t.qZA(),t.TgZ(6,"h3",4),t._uU(7,"Total Staked Value:"),t.qZA(),t._UZ(8,"div"),t.TgZ(9,"h3",5),t._uU(10),t.ALo(11,"numberFormat"),t.qZA(),t.TgZ(12,"h3",4),t._uU(13,"Your Staked Value:"),t.qZA(),t._UZ(14,"div"),t.TgZ(15,"h3",5),t._uU(16),t.ALo(17,"numberFormat"),t.qZA(),t.TgZ(18,"h3",4),t._uU(19,"Claimable Rewards:"),t.qZA(),t._UZ(20,"div"),t.TgZ(21,"h3",5),t._uU(22),t.ALo(23,"numberFormat"),t.qZA(),t.TgZ(24,"h3",4),t._uU(25,"Dynamic APY"),t._UZ(26,"titi-tooltip",6),t._uU(27,":"),t.qZA(),t._UZ(28,"div"),t.TgZ(29,"h3",5),t._uU(30),t.ALo(31,"numberFormat"),t.qZA(),t.TgZ(32,"mat-form-field",7),t.TgZ(33,"mat-label"),t._uU(34),t.ALo(35,"numberFormat"),t.qZA(),t.TgZ(36,"input",8),t.NdJ("input",function(o){return i.onStakingInputValueChange(o)}),t.qZA(),t.TgZ(37,"div",9),t._UZ(38,"mat-icon",10),t._UZ(39,"mat-icon",11),t.qZA(),t.TgZ(40,"button",12),t.NdJ("click",function(){return i.maxStakeInputValue()}),t._uU(41,"MAX"),t.qZA(),t.qZA(),t.TgZ(42,"button",13),t.NdJ("click",function(){return i.onStake()}),t._uU(43,"STAKE"),t.qZA(),t.TgZ(44,"mat-form-field",7),t.TgZ(45,"mat-label"),t._uU(46),t.ALo(47,"numberFormat"),t.qZA(),t.TgZ(48,"input",8),t.NdJ("input",function(o){return i.onWithdrawInputValueChange(o)}),t.qZA(),t.TgZ(49,"div",9),t._UZ(50,"mat-icon",10),t._UZ(51,"mat-icon",11),t.qZA(),t.TgZ(52,"button",12),t.NdJ("click",function(){return i.maxWithdrawInputValue()}),t._uU(53,"MAX"),t.qZA(),t.qZA(),t.TgZ(54,"button",13),t.NdJ("click",function(){return i.onWithdraw()}),t._uU(55,"WITHDRAW"),t.qZA(),t.TgZ(56,"mat-form-field",7),t.TgZ(57,"mat-label"),t._uU(58),t.ALo(59,"numberFormat"),t.qZA(),t.TgZ(60,"input",14),t.NdJ("input",function(o){return i.onClaimInputValueChange(o)}),t.qZA(),t._UZ(61,"mat-icon",15),t.TgZ(62,"button",12),t.NdJ("click",function(){return i.maxClaimInputValue()}),t._uU(63,"MAX"),t.qZA(),t.qZA(),t.TgZ(64,"button",13),t.NdJ("click",function(){return i.onClaim()}),t._uU(65,"CLAIM"),t.qZA(),t.qZA(),t.TgZ(66,"div",16),t.TgZ(67,"h2",17),t._uU(68,"USDC Pool Info"),t.qZA(),t._UZ(69,"mat-divider"),t.TgZ(70,"mat-chip-list",18),t.TgZ(71,"mat-chip"),t._uU(72,"Yield"),t.qZA(),t.qZA(),t._UZ(73,"mat-divider"),t.TgZ(74,"span",19),t._uU(75,"Total Liquidity"),t._UZ(76,"titi-tooltip",20),t._uU(77,":"),t.qZA(),t.TgZ(78,"span",21),t._uU(79),t.ALo(80,"numberFormat"),t.qZA(),t.TgZ(81,"span",19),t._uU(82,"Staked Ratio"),t._UZ(83,"titi-tooltip",22),t._uU(84,":"),t.qZA(),t.TgZ(85,"span",21),t._uU(86),t.ALo(87,"numberFormat"),t.qZA(),t.TgZ(88,"span",19),t._uU(89,"Distributed TiTi Rewards"),t._UZ(90,"titi-tooltip",23),t._uU(91,":"),t.qZA(),t.TgZ(92,"span",21),t._uU(93),t.ALo(94,"numberFormat"),t.qZA(),t.TgZ(95,"span",19),t._uU(96,"Current Epoch TiTi Rewards"),t._UZ(97,"titi-tooltip",24),t._uU(98,":"),t.qZA(),t.TgZ(99,"span",21),t._uU(100),t.ALo(101,"numberFormat"),t.qZA(),t._UZ(102,"mat-divider"),t.TgZ(103,"mat-chip-list",18),t.TgZ(104,"mat-chip"),t._uU(105,"Historical Liquidity"),t.qZA(),t.qZA(),t._UZ(106,"mat-divider"),t.TgZ(107,"div",25),t._UZ(108,"titi-chart-wrapper",26),t.qZA(),t._UZ(109,"mat-divider"),t.TgZ(110,"mat-chip-list",18),t.TgZ(111,"mat-chip"),t._uU(112,"Historical APY"),t.qZA(),t.qZA(),t._UZ(113,"mat-divider"),t.TgZ(114,"div",25),t._UZ(115,"titi-chart-wrapper",26),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(10),t.hij("$",t.xi3(11,19,i.totalStakedLPToken*i.LPTokenPrice,4),""),t.xp6(6),t.hij("$",t.xi3(17,22,i.stakedLPTokenBalance*i.LPTokenPrice,4),""),t.xp6(6),t.hij("",t.xi3(23,25,i.claimableValue,4)," TiTi"),t.xp6(8),t.hij("",t.xi3(31,28,i.historicalAPY[i.historicalAPY.length-1],4),"%"),t.xp6(4),t.hij("Balance:",t.xi3(35,31,i.LPTokenBalance,4)," UNI-V2"),t.xp6(2),t.Q6J("value",i.stakingInputValue),t.xp6(6),t.Q6J("disabled",!i.stakingInputValue||i.isZero(i.stakingInputValue)),t.xp6(4),t.hij("Staked:",t.xi3(47,34,i.stakedLPTokenBalance,4)," UNI-V2"),t.xp6(2),t.Q6J("value",i.withdrawInputValue),t.xp6(6),t.Q6J("disabled",!i.withdrawInputValue||i.isZero(i.withdrawInputValue)),t.xp6(4),t.hij("Claimable:",t.xi3(59,37,i.claimableValue,4)," TiTi"),t.xp6(2),t.Q6J("value",i.claimInputValue),t.xp6(4),t.Q6J("disabled",!i.claimInputValue||i.isZero(i.claimInputValue)),t.xp6(15),t.hij("$",t.xi3(80,40,i.liquidity*i.LPTokenPrice,4),""),t.xp6(7),t.hij("",t.xi3(87,43,100*i.totalStakedLPToken/i.liquidity,4),"%"),t.xp6(7),t.hij("",t.xi3(94,46,i.distributedTiTiRewards,4)," TiTi"),t.xp6(7),t.hij("",t.xi3(101,49,i.getCurrentEpochTiTiRewards(),4)," TiTi"),t.xp6(8),t.Q6J("option",i.option1),t.xp6(7),t.Q6J("option",i.option2))},directives:[D.Q,f.KE,f.hX,A.Nt,f.qo,v.Hw,S.lW,f.R9,L.d,Z.qn,Z.HS,O.o],pipes:[j.p],styles:[".lpmining-wrapper[_ngcontent-%COMP%]{padding:24px;display:grid;grid-template-columns:15fr 9fr 1fr;grid-column-gap:48px;column-gap:48px}.lpmining-card[_ngcontent-%COMP%]{align-self:start;justify-self:start;width:100%;padding:24px 48px;display:grid;grid-template-columns:1fr 1fr 1fr;grid-row-gap:18px;row-gap:18px;align-items:center}.lpmining-input[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:3}.lpmining-btn[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:4}.lpmining-input-btn[_ngcontent-%COMP%]{width:80%;justify-self:end;margin-bottom:18px;height:56px}.pool-info-card[_ngcontent-%COMP%]{align-self:start;justify-self:start;width:100%;padding:12px 24px;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-row-gap:24px;row-gap:24px;align-items:center}.pool-info-title[_ngcontent-%COMP%]{grid-column-start:span 4;justify-self:center}.pool-chart[_ngcontent-%COMP%]{grid-column-start:span 4;justify-self:center;width:100%;height:100%}.uniswap-link[_ngcontent-%COMP%]{justify-self:center;grid-column-start:1;grid-column-end:4;color:#29c7a8}@media screen and (max-width: 1024px){.lpmining-wrapper[_ngcontent-%COMP%]{width:100%;padding:12px;margin:0;display:grid;grid-template-columns:1fr;grid-row-gap:12px;row-gap:12px}.lpmining-card[_ngcontent-%COMP%], .pool-info-card[_ngcontent-%COMP%]{width:100%;padding:24px 12px}}"]}),r})()}];let Y=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[w.Bz.forChild(R)],w.Bz]}),r})();var B=e(45922),E=e(87841);let J=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[U.ez,Y,A.c,S.ot,v.Ps,L.t,Z.Hi,B.F,E.m]]}),r})()}}]);