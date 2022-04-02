"use strict";(self.webpackChunkapp_titi_frontend=self.webpackChunkapp_titi_frontend||[]).push([[781],{28321:(F,w,a)=>{function C(){const o=(new Date).getTime(),i=[];let c=36e5*parseInt(o/36e5+"");for(let h=0;h<720;h++)i.push(c),c-=36e5;return i}function v(){const o=(new Date).getTime(),i=[];let c=864e5*parseInt(o/864e5+"");for(let h=0;h<30;h++)i.push(c),c-=864e5;return i}function l(){const o=(new Date).getTime();return 86400*parseInt(o/864e5+"")-2592e3}function _(e){return e>0?[parseInt(e/864e5+"")+"d",parseInt(e%864e5/36e5+"")+"h",parseInt(e%36e5/6e4+"")+"m"].join(":"):[" -- d"," -- h"," -- m"].join(":")}function D(e){return e>0?[parseInt(e/864e5+"")+"d",parseInt(e%864e5/36e5+"")+"h",parseInt(e%36e5/6e4+"")+"m",parseInt(e%6e4/1e3+"")+"s"].join(":"):[" -- d"," -- h"," -- m"," -- s"].join(":")}function P(e){let o=e;const i=o.substring(0,1),c=o.substring(1,2);if(o.length>1&&"0"===i&&"."!==c&&(o=o.substring(1,2)),"."===i&&(o=""),-1!==o.indexOf(".")){let h=o.substring(o.indexOf(".")+1);-1!==h.indexOf(".")&&(o=o.substring(0,o.indexOf(".")+h.indexOf(".")+1))}return o=o.replace(/[^\d^\.]+/g,""),o}function y(e){let o=P(e);return-1===o.indexOf(".")&&(o+=".0000"),o=o.replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/,"$1$2.$3").replace(".",""),o}a.d(w,{jn:()=>C,Gq:()=>v,Mv:()=>l,fA:()=>_,lR:()=>D,Y4:()=>P,uM:()=>y})},43781:(F,w,a)=>{a.r(w),a.d(w,{TestnetModule:()=>V});var C=a(69808),v=a(91083),l=a(5963),_=a(54004),D=a(28321),P=a(98538),y=a.n(P),e=a(5e3),o=a(53405),i=a(31657),c=a(94602),h=a(11730),O=a(68326),d=a(47423),M=a(75303);function p(r,u){if(1&r&&(e.TgZ(0,"div",31),e.TgZ(1,"span"),e._uU(2),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.qZA(),e.TgZ(5,"span"),e._uU(6),e.ALo(7,"numberFormat"),e.qZA(),e.qZA()),2&r){const t=u.$implicit,n=u.index;e.xp6(2),e.Oqu(n+1),e.xp6(2),e.Oqu(t.address),e.xp6(2),e.hij("",e.xi3(7,3,t.amount,4)," TiTi")}}const f=[{path:"",component:(()=>{class r{constructor(t,n,s,g){this.graphService=t,this.refreshService=n,this.accountService=s,this.web3Service=g,this.USDCBalance=0,this.futureString="2022/04/30 00:00:00",this.TiTiBalance=0,this.stakedTiTi=0,this.myRank="100+",this.rank=100,this.currentAddress="",this.stakingList=[]}ngOnInit(){this.initData(),this.unregister=this.refreshService.registerFunction(()=>this.initData()),this.counter$=(0,l.H)(0,1e3).pipe((0,_.U)(()=>{const t=new Date(this.futureString).getTime()-(new Date).getTime();return(0,D.fA)(t)}))}ngOnDestroy(){this.unregister()}initData(){this.accountService.getCurrentAccountAsyn().then(t=>(this.currentAddress=t,this.fetchTiTiStakingUserRank())),this.fetchBalanceOfUSDC(),this.fetchTiTiBalance(),this.fetchStakedTiTi()}fetchTiTiStakingUserRank(){this.graphService.fetchTiTiStakingUserRank(this.rank).then(({data:t})=>{this.stakingList=t.tiTiUserStakings.map((n,s)=>(n.id===this.currentAddress.toLowerCase()&&(this.myRank=`${s+1}`),{address:n.id,amount:n.stakedValue/10**18}))})}fetchBalanceOfUSDC(){this.accountService.getCurrentAccountAsyn().then(t=>this.web3Service.invokeContract("USDC","balanceOf",[t]).then(n=>{this.USDCBalance=n[0]/10**6}))}fetchTiTiBalance(){return this.accountService.getCurrentAccountAsyn().then(t=>this.web3Service.invokeContract("TiTiToken","balanceOf",[t]).then(n=>{this.TiTiBalance=n[0]/10**18}))}fetchStakedTiTi(){return this.accountService.getCurrentAccountAsyn().then(t=>Promise.all([this.web3Service.invokeContract("TiTiStaking","getStakeValue",[t]),this.web3Service.invokeContract("TiTiStaking","users",[t]),this.web3Service.invokeContract("TiTiStaking","WITHDRAW_DURATION",[]),this.web3Service.invokeContract("TiTiStaking","UNBONDING_DURATION",[]),this.web3Service.invokeContract("TiTiStaking","totalTiTi",[])]).then(([n,s,g,I,R])=>{const S=new(y())(s.share),B=new(y())(s.unbondShare);let N=0,q=0;1e3*s.unbondTime+1e3*I[0]<=(new Date).getTime()?N=S.isZero()?0:Number.parseFloat((new(y())(n[0]).mul(B).div(S).div(new(y())(10**14)).toNumber()/1e4).toFixed(4)):q=S.isZero()?0:Number.parseFloat((new(y())(n[0]).mul(B).div(S).div(new(y())(10**14)).toNumber()/1e4).toFixed(4)),this.stakedTiTi=n[0]/10**18-q-N}))}claimMUSDC(){this.web3Service.invokeContract("USDC","claim",[]).then(t=>{})}claimKovanETH(){window.open("https://ethdrop.dev/")}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(o.h),e.Y36(i.g),e.Y36(c.B),e.Y36(h.Uc))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-testnet"]],decls:85,vars:18,consts:[[1,"testnet-wrapper"],[1,"black-card",2,"grid-column-start","span 3","width","75%","justify-self","center","margin-bottom","40px"],[1,"subtitle"],[1,"subtitle",2,"margin-bottom","36px"],[1,"title"],["routerLink","/testnet",2,"font-size","16px"],[1,"label"],[2,"display","grid","width","100%","grid-template-columns","1fr 1fr 1fr","padding","24px 0"],["mat-raised-button","","routerLink","/mmf",1,"action-button",2,"width","80%","justify-self","start"],["mat-raised-button","","routerLink","/lpmining",1,"action-button",2,"width","80%","justify-self","center"],["mat-raised-button","","routerLink","/use2earn",1,"action-button",2,"width","80%","justify-self","end"],[1,"gradient-card",2,"grid-column-start","span 3","display","grid","width","75%","justify-self","center","grid-template-columns","1fr 1fr 1fr"],[1,"gradient-card-title",2,"grid-column-start","span 3","justify-self","center","width","100%"],[1,"gradient-card-content",2,"grid-column-start","span 3","grid-row-start","span 3","display","grid","width","100%","grid-template-columns","1fr 1fr","row-gap","12px","column-gap","36px"],[2,"justify-self","end"],["mat-raised-button","",1,"action-button",2,"justify-self","end","width","60%",3,"click"],["mat-raised-button","",1,"action-button",2,"justify-self","start","width","60%",3,"click"],[2,"grid-column-start","span 3","height","40px"],[1,"gradient-card",2,"grid-column-start","span 3","display","grid","width","75%","justify-self","center"],[1,"gradient-card-title",2,"width","100%"],[2,"display","grid","grid-template-columns","repeat(12,1fr)","width","100%","row-gap","24px"],[2,"grid-column-start","span 12","justify-self","center"],[2,"grid-column-start","span 3","justify-self","center"],[1,"gradient-card-content",2,"display","grid","grid-template-columns","repeat(12,1fr)","width","100%"],[2,"grid-column-start","span 12","justify-self","center","padding","24px 0 12px"],[2,"grid-column-start","span 2","justify-self","center"],[2,"grid-column-start","span 6","justify-self","center"],[2,"grid-column-start","span 4","justify-self","center"],[1,"divider",2,"grid-column-start","span 12","margin","12px 0"],[2,"grid-column-start","span 12","max-height","250px","min-height","150px","overflow-y","scroll"],["style","display: grid;grid-template-columns:1fr  3fr 2fr;justify-items: center;padding: 8px 0;",4,"ngFor","ngForOf"],[2,"display","grid","grid-template-columns","1fr  3fr 2fr","justify-items","center","padding","8px 0"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"p",2),e._uU(3,"Welcome to TiTi Racecourse"),e.qZA(),e.TgZ(4,"p",3),e._uU(5," Every user can become a heroic TiTi racer"),e.qZA(),e.TgZ(6,"h2",4),e._uU(7," TiTi Equestrian Park "),e.TgZ(8,"a",5),e.TgZ(9,"mat-icon"),e._uU(10," open_in_new "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"div"),e.TgZ(12,"p"),e.TgZ(13,"span",6),e._uU(14,"Activity time:"),e.qZA(),e._uU(15," 2022/04/30 - 2022/05/15"),e.qZA(),e.TgZ(16,"p"),e.TgZ(17,"span",6),e._uU(18,"Activity Rewards: "),e.qZA(),e._uU(19,"Take the top 100 addresses and distribute $10,000 in rewards according to the proportion of TiTi Staked Amount"),e.qZA(),e.TgZ(20,"p"),e.TgZ(21,"span",6),e._uU(22,"Activity content: "),e.qZA(),e._uU(23,"Each user address can receive a certain amount of Mock-USDC every 24 hours. We hope that users can use these Mock-USDC to obtain as many TiTi rewards as possible according to TiTi Tokenomics, and pledge them to the TiTi-Staking Pool. After the event, the top 100 stakers in the TiTi-Staking Pool will be taken, and a reward of $10,000 will be distributed according to the proportion of the stake. "),e.qZA(),e.TgZ(24,"p",6),e._uU(25,"The behavior of obtaining TiTi is as follows:"),e.qZA(),e.TgZ(26,"div",7),e.TgZ(27,"button",8),e._uU(28,"MMF"),e.qZA(),e.TgZ(29,"button",9),e._uU(30,"LP Mining"),e.qZA(),e.TgZ(31,"button",10),e._uU(32,"Use To Earn"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(33,"div",11),e.TgZ(34,"div",12),e.TgZ(35,"h3"),e._uU(36,"Join TiTi Equestrian Park"),e.qZA(),e.qZA(),e.TgZ(37,"div",13),e.TgZ(38,"span"),e._uU(39,"Your Mock-USDC:"),e.qZA(),e.TgZ(40,"span",14),e._uU(41),e.ALo(42,"numberFormat"),e.qZA(),e.TgZ(43,"span"),e._uU(44,"Last Claim Time:"),e.qZA(),e.TgZ(45,"span",14),e._uU(46),e.qZA(),e.TgZ(47,"span"),e._uU(48,"Claim Countdown:"),e.qZA(),e.TgZ(49,"span",14),e._uU(50),e.ALo(51,"async"),e.qZA(),e.TgZ(52,"button",15),e.NdJ("click",function(){return n.claimMUSDC()}),e._uU(53,"Claim 1000 Mock-USDC"),e.qZA(),e.TgZ(54,"button",16),e.NdJ("click",function(){return n.claimKovanETH()}),e._uU(55,"Claim Kovan-ETH"),e.qZA(),e.qZA(),e.qZA(),e._UZ(56,"div",17),e.TgZ(57,"div",18),e.TgZ(58,"div",19),e.TgZ(59,"div",20),e.TgZ(60,"h3",21),e._uU(61,"Total TiTi Staking Ranking"),e.qZA(),e.TgZ(62,"span",22),e._uU(63,"Your TiTi Balance:"),e.qZA(),e.TgZ(64,"span",22),e._uU(65),e.ALo(66,"numberFormat"),e.qZA(),e.TgZ(67,"span",22),e._uU(68,"Your Staked Amount:"),e.qZA(),e.TgZ(69,"span",22),e._uU(70),e.ALo(71,"numberFormat"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(72,"div",23),e.TgZ(73,"h3",24),e._uU(74),e.qZA(),e.TgZ(75,"span",25),e._uU(76,"Rank"),e.qZA(),e.TgZ(77,"span",26),e._uU(78,"Address"),e.qZA(),e.TgZ(79,"span",27),e._uU(80,"Staking Amount"),e.qZA(),e._UZ(81,"div",28),e.TgZ(82,"div",29),e.YNc(83,p,8,6,"div",30),e.qZA(),e.qZA(),e.qZA(),e._UZ(84,"div",17),e.qZA()),2&t&&(e.xp6(41),e.hij("",e.xi3(42,7,n.USDCBalance,4)," Mock-USDC"),e.xp6(5),e.Oqu(n.futureString),e.xp6(4),e.Oqu(e.lcZ(51,10,n.counter$)),e.xp6(15),e.hij("",e.xi3(66,12,n.TiTiBalance,4)," TiTi"),e.xp6(5),e.hij("",e.xi3(71,15,n.stakedTiTi,4)," TiTi"),e.xp6(4),e.hij("Your Rank: #",n.myRank,""),e.xp6(9),e.Q6J("ngForOf",n.stakingList))},directives:[v.yS,O.Hw,d.lW,v.rH,C.sg],pipes:[M.p,C.Ov],styles:[".testnet-wrapper[_ngcontent-%COMP%]{display:grid;width:100%;padding:12px 36px;grid-template-columns:1fr 1fr 1fr}.testnet-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:36px;margin-bottom:24px;font-weight:500}.testnet-wrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:21px;margin:0;font-weight:500}.testnet-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.subtitle[_ngcontent-%COMP%]{font-size:21px!important;color:#45e5c9;margin:0}.title[_ngcontent-%COMP%]{color:#000}.titi-dark-theme[_nghost-%COMP%]   .title[_ngcontent-%COMP%], .titi-dark-theme   [_nghost-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff}.label[_ngcontent-%COMP%]{color:#45e5c9}.titi-dark-theme[_nghost-%COMP%]   .divider[_ngcontent-%COMP%], .titi-dark-theme   [_nghost-%COMP%]   .divider[_ngcontent-%COMP%]{height:1px;width:100%;margin:20px 0;grid-column-start:span 3;background:linear-gradient(90deg,#90fac994,#0F5F4F,#90fac994)}.divider[_ngcontent-%COMP%]{height:1px;width:100%;margin:20px 0;grid-column-start:span 3;background:#afafaf5b}.action-button[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#49CCB3,#25B197)!important;color:#000}"]}),r})()}];let A=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[v.Bz.forChild(f)],v.Bz]}),r})();a(41777);var E=a(90508),x=a(91314),k=(a(70925),a(98962));const H={provide:new e.OlP("mat-menu-scroll-strategy"),deps:[x.aV],useFactory:function(r){return()=>r.scrollStrategies.reposition()}};let W=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[H],imports:[[C.ez,E.BQ,E.si,x.U8],k.ZD,E.BQ]}),r})();var X=a(87841);let V=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[C.ez,A,d.ot,O.Ps,W,X.m]]}),r})()},53405:(F,w,a)=>{a.d(w,{h:()=>y});var C=a(70022),v=a(94528),l=a(32856),_=a(28321),D=a(11730),P=a(5e3);let y=(()=>{class e{constructor(){this.APIURL="https://api.thegraph.com/subgraphs/name/ookurumi/titi-on-kovan",this.client=new C.f({uri:this.APIURL,cache:new v.h})}fetchMMFSwapPairHourData(i){return this.client.query({query:(0,l.Ps)("\n    query($id: ID,$time:Int) {\n      pair(id:$id) {\n        id\n        pairHourData(where: {hourStartTimestamp_gt: $time},orderBy: hourStartTimestamp,orderDirection: desc)  {\n          id\n          hourStartTimestamp\n          fund0\n          fund1\n          token0Price\n          token1Price\n        }\n     }\n   }\n  "),variables:{id:i.toLowerCase(),time:(0,_.Mv)()},fetchPolicy:"network-only"})}fetchMMFSwapPairDailyData(i){return this.client.query({query:(0,l.Ps)("\n    query($id: ID,$time:Int) {\n      pair(id:$id) {\n        id\n        pairDailyData(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          fund0\n          fund1\n          token0Price\n          token1Price\n        }\n     }\n   }\n  "),variables:{id:i.toLowerCase(),time:(0,_.Mv)()},fetchPolicy:"network-only"})}fetchAllSwapPairDailyData(){return this.client.query({query:(0,l.Ps)("\n    query($time:Int) {\n      pairs(orderBy: id,orderDirection: desc) {\n        id\n        fund0\n        fund1\n        prv\n        token1{\n          symbol\n          decimals\n        }\n        token0Twap\n        pairDailyData(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          fund0\n          fund1\n          token0Price\n          token1Price\n          token0Twap\n          prv\n        }\n        pairHourData(where: {hourStartTimestamp_gt: $time},orderBy: hourStartTimestamp,orderDirection: desc)  {\n          id\n          hourStartTimestamp\n          fund0\n          fund1\n          token0Price\n          token1Price\n          token0Twap\n          prv\n        }\n     }\n   }\n  "),variables:{time:(0,_.Mv)()},fetchPolicy:"network-only"})}fetchUniwapPairDailyData(){return this.client.query({query:(0,l.Ps)("\n    query($id: ID,$time:Int) {\n      uniswapPair(id:$id) {\n        fund0\n        fund1\n        liquidity\n        dailyData(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          fund0\n          fund1\n          liquidity\n        }\n     }\n   }\n  "),variables:{id:D.wE.UniswapV2Pair.toLowerCase(),time:(0,_.Mv)()},fetchPolicy:"network-only"})}fetchDailyLPTokenStakedValue(){return this.client.query({query:(0,l.Ps)("\n    query($time:Int) \n    {\n        dailyLPStakings(where: {dayTimestamp_gt: $time},orderBy: dayTimestamp,orderDirection: desc)  {\n          id\n          dayTimestamp\n          stakedValue\n        }\n   }\n  "),variables:{id:D.wE.UniswapV2Pair.toLowerCase(),time:(0,_.Mv)()},fetchPolicy:"network-only"})}fetchMMFRewardDailyData(i){return this.client.query({query:(0,l.Ps)("\n    query($id: ID,$time:Int) {\n      pair(id:$id) {\n        id\n        mmfRewardDailyData(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          mmfReward\n        }\n     }\n   }\n  "),variables:{id:i.toLowerCase(),time:(0,_.Mv)()},fetchPolicy:"network-only"})}fetchTodayMMFRewardData(i){return this.client.query({query:(0,l.Ps)("\n    query($id: ID,$pairId:ID) {\n      mmfrewardDailyData(id:$id) {\n        id\n        dayStartTimestamp\n        mmfReward\n      }\n      pair(id:$pairId) {\n        id\n        fund0\n        fund1\n      }\n   }\n  "),variables:{id:i.toLowerCase()+"-"+Number.parseInt((new Date).getTime()/864e5+""),pairId:i.toLowerCase()},fetchPolicy:"network-only"})}fetchMMFRewardHourDataIn24H(i){return this.client.query({query:(0,l.Ps)("\n    query($id: ID,$time: Int) {\n      pair(id:$id) {\n        id\n        mmfRewardHourData(where: {hourStartTimestamp_gt: $time},orderBy: hourStartTimestamp,orderDirection: desc)  {\n          id\n          hourStartTimestamp\n          mmfReward\n        }\n     }\n   }\n  "),variables:{id:i.toLowerCase(),time:Number.parseInt((new Date).getTime()/1e3-86400+"")},fetchPolicy:"network-only"})}fetchTiTiStakingDailyData(){return this.client.query({query:(0,l.Ps)("\n    query($time:Int) {\n      tiTiStakingEpochDailyDatas(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n        id\n        dayStartTimestamp\n        tvl\n        apy\n        epoch{\n          id\n        }\n      }\n   }\n  "),variables:{time:(0,_.Mv)()},fetchPolicy:"network-only"})}fetchEachEpochTotalReward(i){return this.client.query({query:(0,l.Ps)("\n    query($id: ID) {\n      tiTiStakingEpoches(where: {id_lt: $id}) {\n        tvl\n        totalReward\n     }\n   }\n  "),variables:{id:i},fetchPolicy:"network-only"})}fetchVaultFund(i){return this.client.query({query:(0,l.Ps)("\n    query($id: ID,$time:Int) {\n      fundVault(id:$id) {\n        id\n        address\n        dailyBalance(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          balance\n          token{\n            symbol\n            decimals\n          }\n        }\n     }\n   }\n  "),variables:{id:i,time:(0,_.Mv)()},fetchPolicy:"network-only"})}fetchLastReOrdersData(){return this.client.query({query:(0,l.Ps)("\n    query {\n      reOrders(first: 1, orderBy: lastReordersTime, orderDirection: desc) {\n        id\n        lastReordersTime\n        reordersCondition\n        pavAmount\n      }\n   }\n  "),variables:{},fetchPolicy:"network-only"})}fetchHistoricalMMFStakingEpoch(i){return this.client.query({query:(0,l.Ps)("\n    query ($epochNum:Int){\n      mmfstakingEpoches(where:{epochNum_lt:$epochNum}){\n        epochNum\n        startTimestamp\n        periodFinish\n        totalReward\n      }\n   }\n  "),variables:{epochNum:1*i},fetchPolicy:"network-only"})}fetchHistoricalLPStakingEpoch(i){return this.client.query({query:(0,l.Ps)("\n    query ($epochNum:Int){\n      lpstakingEpoches(where:{epochNum_lt:$epochNum}){\n        epochNum\n        startTimestamp\n        periodFinish\n        totalReward\n      }\n   }\n  "),variables:{epochNum:1*i},fetchPolicy:"network-only"})}fetchTiTiStakingUserRank(i){return this.client.query({query:(0,l.Ps)("\n    query($rank: Int) {\n      tiTiUserStakings(orderBy: stakedValue, orderDirection: desc,first:$rank) {\n        id\n        stakedValue\n      }\n   }\n  "),variables:{rank:i},fetchPolicy:"network-only"})}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=P.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},11730:(F,w,a)=>{a.d(w,{Uc:()=>o,fV:()=>i,wE:()=>c});var C=a(98538),v=a.n(C),l=a(5e3),_=a(5437),D=a(94602),P=a(57261),y=a(48966),e=a(31657);let o=(()=>{class h{constructor(d,M,p,T,f){this.web3ModalService=d,this.accountService=M,this._snackBar=p,this.dialog=T,this.refreshService=f,this.badge=0,this.recentTransaction=new Set(JSON.parse(localStorage.getItem("recentTransaction")||"[]"))}clearBadge(){this.badge=0}initWeb3(){return new Promise((d,M)=>{this.web3?(this.web3.currentProvider||this.web3.setProvider(this.web3ModalService.provider),d()):Promise.all([a.e(445).then(a.t.bind(a,34445,23)),this.web3ModalService.getProvider()]).then(([p,T])=>{this.web3=new p.default(T),d()}).catch(M)})}setProvider(d){return this.initWeb3().then(()=>this.web3.setProvider(d))}invokeContract(d,M,p,T){return this.initWeb3().then(()=>Promise.all([this.getFunctionABI(d,M),this.accountService.getCurrentAccountAsyn()]).then(([f,A])=>{const m=this.web3.eth.abi.encodeFunctionCall(f,p),x={from:A,to:c[d],data:m,value:T};return"view"==f.stateMutability?this.web3.eth.call(x).then(b=>this.web3.eth.abi.decodeParameters(f.outputs,b)):this.web3.eth.sendTransaction(x).on("transactionHash",b=>{const k=Array.from(this.recentTransaction);k.unshift({txHash:b,contractName:d,functionName:M,params:p,receipt:null}),this.recentTransaction=new Set(k),localStorage.setItem("recentTransaction",JSON.stringify(k)),this.badge++}).on("receipt",b=>{this.recentTransaction.forEach(k=>{k.txHash===b.transactionHash&&(k.receipt=b)}),localStorage.setItem("recentTransaction",JSON.stringify(Array.from(this.recentTransaction))),b.status?(this.refreshService.invokeFunctions(),this._snackBar.open("Successful transaction!","close",{horizontalPosition:"center",verticalPosition:"top",duration:3e3})):this._snackBar.open("Transaction failed!","close",{horizontalPosition:"center",verticalPosition:"top",duration:3e3})}).on("error",b=>{this._snackBar.open("Transaction failed!","close",{horizontalPosition:"center",verticalPosition:"top",duration:3e3})}).then(b=>b)})).catch(f=>{throw this._snackBar.open("Unknown Error!","close",{horizontalPosition:"center",verticalPosition:"top",duration:3e3}),f})}getFunctionABI(d,M){return fetch(`/assets/abi/${d}.json`).then(p=>p.text()).then(p=>JSON.parse(p).abi).then(p=>{const T=p.filter(f=>f.name==M&&"function"==f.type);if(0===T.length)throw new Error("No such function");return T[0]})}decodeLog(d,M,p){return this.initWeb3().then(()=>this.web3.eth.abi.decodeLog(d,M,p))}openApproveModal(d,M,p,T){this.accountService.getCurrentAccountAsyn().then(f=>this.invokeContract(d,"allowance",[f,c[p]])).then(f=>{M.gt(new(v())(f[0]))?a.e(288).then(a.bind(a,30288)).then(({ApproveModalComponent:A})=>{const m=this.dialog.open(A);m.componentInstance.approveToken=d,m.componentInstance.approveValue=i.toString(),m.componentInstance.approveSpender=p,m.afterClosed().subscribe(T)}):T(!0)})}}return h.\u0275fac=function(d){return new(d||h)(l.LFG(_.y),l.LFG(D.B),l.LFG(P.ux),l.LFG(y.uw),l.LFG(e.g))},h.\u0275prov=l.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})();const i=new(v())("2").pow(new(v())("256")).sub(new(v())("1")),c={TiUSD:"0xe2450bF757190a621328e9950054F66A67279c3a",TiTiToken:"0x7eF0AB70304A467C1Eb9C8bc0abF9D3cB3325edE",USDC:"0xe9225ee0e82180c64d4F55dd08B7bDC4b15Fc404",MAMMSwapPair:"0xFdA623Ed67307C4eF8e36C0Cc0eE4f5D792a0687",MarketMakerFund:"0xEDc1bB5C8143946abA10cD44e265A32227aa3791",MMFLPStakingPool:"0x62E322a435b4C05e71b63B80da8F766D67e3E0eD",LPStakingPool:"0xC588086986cCDDDa14ccFa31797290A037A1f1FD",RainyDayFundVault:"0xC4B67E8de9Ba576710Ae11B26cd73F9541EC7F26",ProtocolFeeVault:"0xa7F1c31E6638c7545A147B9aCFe8E9149bC9622C",ReOrdersController:"0x62e802eDD404D03c9452754bBb97Dd7B728De050",TiTiStaking:"0x17AD0812cc1DA0855C0A1ECaF97CfB0bcC716ee3",UniswapV2Pair:"0x08a95b02d8b765c56b382324b1695b1ddd982d4d",TiTiBackendV1:"0xeEd4d8D736Eeaf4a4781CD099B6f421823612d0F"}}}]);