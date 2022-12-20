"use strict";(self.webpackChunkapp_titi_frontend=self.webpackChunkapp_titi_frontend||[]).push([[781],{28321:(A,y,l)=>{function f(){const r=(new Date).getTime(),i=[];let u=36e5*parseInt(r/36e5+"");for(let p=0;p<720;p++)i.push(u),u-=36e5;return i}function T(){const r=(new Date).getTime(),i=[];let u=864e5*parseInt(r/864e5+"");for(let p=0;p<30;p++)i.push(u),u-=864e5;return i}function d(){const r=(new Date).getTime();return 86400*parseInt(r/864e5+"")-2592e3}function g(e){return e>0?[parseInt(e/864e5+"")+"d",parseInt(e%864e5/36e5+"")+"h",parseInt(e%36e5/6e4+"")+"m"].join(":"):[" -- d"," -- h"," -- m"].join(":")}function _(e){return e>0?[parseInt(e/864e5+"")+"d",parseInt(e%864e5/36e5+"")+"h",parseInt(e%36e5/6e4+"")+"m",parseInt(e%6e4/1e3+"")+"s"].join(":"):[" -- d"," -- h"," -- m"," -- s"].join(":")}function b(e){let r=e;const i=r.substring(0,1),u=r.substring(1,2);if(r.length>1&&"0"===i&&"."!==u&&(r=r.substring(1,2)),"."===i&&(r=""),-1!==r.indexOf(".")){let p=r.substring(r.indexOf(".")+1);-1!==p.indexOf(".")&&(r=r.substring(0,r.indexOf(".")+p.indexOf(".")+1))}return r=r.replace(/[^\d^\.]+/g,""),r}l.d(y,{jn:()=>f,Gq:()=>T,Mv:()=>d,fA:()=>g,lR:()=>_,Y4:()=>b})},43781:(A,y,l)=>{l.r(y),l.d(y,{TestnetModule:()=>H});var f=l(69808),T=l(91083),d=l(5963),g=l(54004),_=l(28321),b=l(98538),m=l.n(b),e=l(5e3),r=l(53405),i=l(31657),u=l(94602),p=l(11730),D=l(68326),P=l(47423),R=l(75303);function Z(a,o){if(1&a&&(e.TgZ(0,"div",35),e.TgZ(1,"span"),e._uU(2),e.qZA(),e.TgZ(3,"span",36),e._uU(4),e.qZA(),e.TgZ(5,"span"),e._uU(6),e.ALo(7,"numberFormat"),e.qZA(),e.qZA()),2&a){const t=o.$implicit,n=o.index;e.xp6(2),e.Oqu(n+1),e.xp6(2),e.Oqu(t.address),e.xp6(2),e.hij("",e.xi3(7,3,t.amount,4)," TiTi")}}const E=[{path:"",component:(()=>{class a{constructor(t,n,s,c){this.graphService=t,this.refreshService=n,this.accountService=s,this.web3Service=c,this.USDCBalance=0,this.lastClaimTime=0,this.claimPeriod=0,this.claimable=!1,this.loading=!0,this.TiTiBalance=0,this.stakedTiTi=0,this.myRank="100+",this.rank=1e3,this.currentAddress="",this.stakingList=[]}ngOnInit(){this.initData(),this.unregister=this.refreshService.registerFunction(()=>this.initData()),this.counter$=(0,d.H)(0,1e3).pipe((0,g.U)(()=>{const t=1e3*this.lastClaimTime+1e3*this.claimPeriod-(new Date).getTime();return this.claimable=t<=0&&(new Date).getTime()>16715376e5,(0,_.fA)(t)}))}ngOnDestroy(){this.unregister()}initData(){this.accountService.getCurrentAccountAsyn().then(t=>(this.currentAddress=t,this.fetchTiTiStakingUserRank())),this.fetchBalanceOfUSDC(),this.fetchTiTiBalance(),this.fetchStakedTiTi(),this.fetchLastClaimTime(),this.fetchClaimPeriod()}fetchLastClaimTime(){this.accountService.getCurrentAccountAsyn().then(t=>this.web3Service.invokeContract("USDC","lastClaimTimes",[t]).then(n=>{this.lastClaimTime=1*n[0],this.loading=!1},()=>this.loading=!1))}fetchClaimPeriod(){this.web3Service.invokeContract("USDC","claimPeriod",[]).then(t=>{this.claimPeriod=1*t[0]})}fetchTiTiStakingUserRank(){fetch("/assets/blacklist/blacklist.json").then(t=>t.text()).then(t=>JSON.parse(t).blacklist.map(n=>n.toLowerCase())).then(t=>{this.graphService.fetchTiTiStakingUserRank(this.rank,t).then(({data:n})=>{this.myRank="#1000+",n.tiTiStakings&&n.tiTiStakings.length>0&&(this.stakingList=n.tiTiUserStakings.map((s,c)=>(s.id.toLowerCase()===this.currentAddress.toLowerCase()&&(this.myRank=`#${c+1}`),{address:s.id.substring(0,10)+"**********************"+s.id.substring(32),amount:new(m())(s.share).mul(new(m())(n.tiTiStakings[0].totalAmount)).div(new(m())(n.tiTiStakings[0].totalShare)).mul(new(m())("10000")).div(new(m())("10").pow(new(m())("18"))).toNumber()/1e4}))),t.includes(this.currentAddress.toLowerCase())&&(this.myRank="Blocked")})})}fetchBalanceOfUSDC(){this.accountService.getCurrentAccountAsyn().then(t=>this.web3Service.invokeContract("USDC","balanceOf",[t]).then(n=>{this.USDCBalance=n[0]/10**6}))}fetchTiTiBalance(){return this.accountService.getCurrentAccountAsyn().then(t=>this.web3Service.invokeContract("TiTiToken","balanceOf",[t]).then(n=>{this.TiTiBalance=n[0]/10**18}))}fetchStakedTiTi(){return this.accountService.getCurrentAccountAsyn().then(t=>Promise.all([this.web3Service.invokeContract("TiTiStaking","getStakeValue",[t]),this.web3Service.invokeContract("TiTiStaking","users",[t]),this.web3Service.invokeContract("TiTiStaking","WITHDRAW_DURATION",[]),this.web3Service.invokeContract("TiTiStaking","UNBONDING_DURATION",[]),this.web3Service.invokeContract("TiTiStaking","totalTiTi",[])]).then(([n,s,c,M,C])=>{const v=new(m())(s.share),w=new(m())(s.unbondShare);(new Date).getTime(),v.isZero()||Number.parseFloat((new(m())(n[0]).mul(w).div(v).div(new(m())(10**14)).toNumber()/1e4).toFixed(4)),this.stakedTiTi=n[0]/10**18}))}claimMUSDC(){this.loading=!0,this.web3Service.invokeContract("USDC","claim",[]).then(t=>{this.loading=!1},()=>this.loading=!1)}claimETH(){window.open("https://goerlifaucet.com/")}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(r.h),e.Y36(i.g),e.Y36(u.B),e.Y36(p.Uc))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-testnet"]],decls:126,vars:25,consts:[[1,"testnet-wrapper"],[1,"mat-elevation-z4","testnet-card"],[1,"title",2,"margin-top","24px"],["href","https://blog.titi.finance/titi-testnet-airdrop-round-2-are-now-live-f40847231a32","target","_blank",2,"font-size","16px"],[2,"font-size","18px"],[1,"label"],[2,"width","100%","display","grid","grid-template-columns","2fr 4fr 1fr","row-gap","16px","column-gap","8px","padding","12px","margin-bottom","24px","border","1px solid rgb(132, 188, 173)","border-radius","0px"],[1,"divider",2,"grid-column-start","span 3","margin","4px 0"],[1,"label",2,"font-size","22px","font-weight","bold"],["href","https://docs.google.com/spreadsheets/d/1LQy1-AiACQszlYdngd8d3ZHlzUJNS88Y/edit?usp=sharing&ouid=115524039903493021732&rtpof=true&sd=true","target","_blank"],["href","https://docs.google.com/spreadsheets/d/1ReFo_GQ20iR0ZRIhQ3D4YqlYNRKSU_I-/edit?usp=sharing&ouid=115524039903493021732&rtpof=true&sd=true","target","_blank"],[1,"action-btn-list"],["href","https://galxe.com/TiTiProtocol","target","_blank"],["mat-raised-button","",1,"action-button",2,"width","100%","justify-self","center"],[1,"gradient-card","testnet-card",2,"grid-template-columns","1fr 1fr 1fr"],[1,"gradient-card-title",2,"grid-column-start","span 3","justify-self","center","width","100%"],[1,"gradient-card-content",2,"grid-column-start","span 3","grid-row-start","span 3","display","grid","width","100%","grid-template-columns","1fr 1fr","row-gap","12px","column-gap","36px"],[2,"justify-self","end"],["mat-raised-button","",2,"justify-self","center","width","70%",3,"ngClass","disabled","click"],["mat-raised-button","",1,"action-button",2,"justify-self","center","width","70%",3,"click"],[2,"grid-column-start","span 3","height","40px"],[1,"gradient-card","testnet-card"],[1,"gradient-card-title",2,"width","100%"],[2,"display","grid","grid-template-columns","repeat(12,1fr)","width","100%","row-gap","24px","padding","0 12px"],[2,"grid-column-start","span 12","justify-self","center"],[1,"stakedinfo-label"],[1,"stakedinfo-value"],[1,"gradient-card-content",2,"display","grid","grid-template-columns","repeat(12,1fr)","width","100%"],[2,"grid-column-start","span 12","justify-self","center","padding","24px 0 12px"],[2,"grid-column-start","span 1","justify-self","center"],[2,"grid-column-start","span 7","justify-self","center"],[2,"grid-column-start","span 4","justify-self","center"],[1,"divider",2,"grid-column-start","span 12","margin","12px 0"],[2,"grid-column-start","span 12","width","100%","max-height","250px","min-height","150px","overflow-y","scroll","overflow-x","hidden"],["style","display: grid;grid-template-columns:1fr  7fr 4fr;justify-items: center;padding: 8px 0;",4,"ngFor","ngForOf"],[2,"display","grid","grid-template-columns","1fr  7fr 4fr","justify-items","center","padding","8px 0"],[2,"width","100%","overflow","hidden","text-overflow","ellipsis","text-align","center"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h2",2),e._uU(3," TiTi Testnet Airdrop "),e.TgZ(4,"a",3),e.TgZ(5,"mat-icon"),e._uU(6," open_in_new "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"div"),e.TgZ(8,"p",4),e.TgZ(9,"span",5),e._uU(10,"Testnet Time:"),e.qZA(),e._uU(11," Dec 20, 2022 at 12 a.m. UTC - Jan 3, 2023 at 12 a.m. UTC "),e.qZA(),e.TgZ(12,"p",4),e.TgZ(13,"span",5),e._uU(14,"OAT pick up Time: "),e.qZA(),e._uU(15,"Dec 20, 2022 at 12 a.m. UTC - Jan 4, 2023 at 12 a.m. UTC"),e.qZA(),e.TgZ(16,"p",4),e.TgZ(17,"span",5),e._uU(18,"Prize Distribution"),e.qZA(),e.qZA(),e.TgZ(19,"div",6),e.TgZ(20,"span"),e._uU(21,"Prize"),e.qZA(),e.TgZ(22,"span"),e._uU(23,"To do list"),e.qZA(),e.TgZ(24,"span"),e._uU(25,"Num"),e.qZA(),e._UZ(26,"div",7),e.TgZ(27,"span"),e._uU(28,"OAT-TiTiTestnet"),e.qZA(),e.TgZ(29,"span"),e._uU(30,"Participate in testnet and get OG3 role"),e.qZA(),e.TgZ(31,"span"),e._uU(32,"10000"),e.qZA(),e.TgZ(33,"span"),e._uU(34,"OAT-TiTishilling"),e.qZA(),e.TgZ(35,"span"),e._uU(36,"Complete tasks to get Shilling corporal role"),e.qZA(),e.TgZ(37,"span"),e._uU(38,"1000"),e.qZA(),e.TgZ(39,"span"),e._uU(40,"Whitelist"),e.qZA(),e.TgZ(41,"span"),e._uU(42,"100 winners will be randomly drawn from those who have both OAT1 and OAT2"),e.qZA(),e.TgZ(43,"span"),e._uU(44,"100"),e.qZA(),e.qZA(),e.TgZ(45,"p",8),e._uU(46,"Rules:"),e.qZA(),e.TgZ(47,"p",5),e._uU(48," \u2460 OAT-TiTi Testnet:"),e.qZA(),e.TgZ(49,"p"),e._uU(50,"Get "),e.TgZ(51,"a",9),e._uU(52,"OG3 role"),e.qZA(),e._uU(53," by using testnet product, verify and claim OAT on Galxe. OAT-TiTiTestnet are first come, first served with a total amount of 10,000. "),e.qZA(),e.TgZ(54,"p",5),e._uU(55,"\u2461 OAT-TiTi Shilling: "),e.qZA(),e.TgZ(56,"p"),e._uU(57,"Complete tasks in crew3 or invite frens to get "),e.TgZ(58,"a",10),e._uU(59,"Shilling corporal role"),e.qZA(),e._uU(60," and Claim OAT on Galxe. OAT- TiTiTestnet are first come, first served with a total amount of 10,000."),e.qZA(),e.TgZ(61,"p"),e._uU(62,"After the OAT collection deadline (Jan 4, 2023 at 12 a.m. UTC), 100 winners will be randomly drawn from those who have both OAT-TiTiTestnet and OATTiTishilling. "),e.qZA(),e.TgZ(63,"p",8),e._uU(64,"Note:"),e.qZA(),e.TgZ(65,"p"),e._uU(66,"1. The address for receiving OAT must be the same as the address for connecting to TiTi crew3 Platform."),e.qZA(),e.TgZ(67,"p"),e._uU(68,"2. The higher your role, the greater the probability of getting a whitelist."),e.qZA(),e.TgZ(69,"div",11),e.TgZ(70,"a",12),e.TgZ(71,"button",13),e._uU(72,"Claim OAT on Galxe"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(73,"div",14),e.TgZ(74,"div",15),e.TgZ(75,"h3"),e._uU(76,"Join TiTi Testnet"),e.qZA(),e.qZA(),e.TgZ(77,"div",16),e.TgZ(78,"span"),e._uU(79,"Your Mock-USDC:"),e.qZA(),e.TgZ(80,"span",17),e._uU(81),e.ALo(82,"numberFormat"),e.qZA(),e.TgZ(83,"span"),e._uU(84,"Last Claim Time:"),e.qZA(),e.TgZ(85,"span",17),e._uU(86),e.ALo(87,"date"),e.qZA(),e.TgZ(88,"span"),e._uU(89,"Claim Countdown:"),e.qZA(),e.TgZ(90,"span",17),e._uU(91),e.ALo(92,"async"),e.qZA(),e.TgZ(93,"button",18),e.NdJ("click",function(){return n.claimMUSDC()}),e._uU(94),e.qZA(),e.TgZ(95,"button",19),e.NdJ("click",function(){return n.claimETH()}),e._uU(96,"Claim Goerli-ETH"),e.qZA(),e.qZA(),e.qZA(),e._UZ(97,"div",20),e.TgZ(98,"div",21),e.TgZ(99,"div",22),e.TgZ(100,"div",23),e.TgZ(101,"h3",24),e._uU(102,"Total TiTi Staking Ranking"),e.qZA(),e.TgZ(103,"span",25),e._uU(104,"Your TiTi Balance:"),e.qZA(),e.TgZ(105,"span",26),e._uU(106),e.ALo(107,"numberFormat"),e.qZA(),e.TgZ(108,"span",25),e._uU(109,"Your Staked Amount:"),e.qZA(),e.TgZ(110,"span",26),e._uU(111),e.ALo(112,"numberFormat"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(113,"div",27),e.TgZ(114,"h3",28),e._uU(115),e.qZA(),e.TgZ(116,"span",29),e._uU(117,"Rank"),e.qZA(),e.TgZ(118,"span",30),e._uU(119,"Address"),e.qZA(),e.TgZ(120,"span",31),e._uU(121,"Staking Amount"),e.qZA(),e._UZ(122,"div",32),e.TgZ(123,"div",33),e.YNc(124,Z,8,6,"div",34),e.qZA(),e.qZA(),e.qZA(),e._UZ(125,"div",20),e.qZA()),2&t&&(e.xp6(81),e.hij("",e.xi3(82,10,n.USDCBalance,4)," Mock-USDC"),e.xp6(5),e.Oqu(n.lastClaimTime>0?e.Dn7(87,13,1e3*n.lastClaimTime,"y-M-dd HH:mm:ss","UTC"):"- -"),e.xp6(5),e.Oqu(e.lcZ(92,17,n.counter$)),e.xp6(2),e.Q6J("ngClass",n.claimable?"action-button":"action-button-disabled")("disabled",!n.claimable||n.loading),e.xp6(1),e.Oqu(n.loading?"waiting...":"Claim 1,000 Mock-USDC"),e.xp6(12),e.hij("",e.xi3(107,19,n.TiTiBalance,4)," TiTi"),e.xp6(5),e.hij("",e.xi3(112,22,n.stakedTiTi,4)," TiTi"),e.xp6(4),e.hij("Your Rank: ",n.myRank,""),e.xp6(9),e.Q6J("ngForOf",n.stakingList))},directives:[D.Hw,P.lW,f.mk,f.sg],pipes:[R.p,f.uU,f.Ov],styles:[".testnet-wrapper[_ngcontent-%COMP%]{display:grid;width:100%;padding:12px 36px;grid-template-columns:1fr 1fr 1fr}.testnet-wrapper[_ngcontent-%COMP%]   .testnet-card[_ngcontent-%COMP%]{grid-column-start:span 3;width:75%;justify-self:center;margin-bottom:40px}.testnet-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:36px;margin-bottom:24px;font-weight:500}.testnet-wrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:21px;margin:0;font-weight:500}.testnet-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.subtitle[_ngcontent-%COMP%]{font-size:21px!important;color:#45e5c9;margin:0}.title[_ngcontent-%COMP%]{color:#000}.titi-dark-theme[_nghost-%COMP%]   .title[_ngcontent-%COMP%], .titi-dark-theme   [_nghost-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff}.label[_ngcontent-%COMP%]{color:#45e5c9;margin:24px 0 8px}.titi-dark-theme[_nghost-%COMP%]   .divider[_ngcontent-%COMP%], .titi-dark-theme   [_nghost-%COMP%]   .divider[_ngcontent-%COMP%]{height:1px;width:100%;margin:20px 0;grid-column-start:span 3;background:linear-gradient(90deg,#90fac994,#0F5F4F,#90fac994)}.divider[_ngcontent-%COMP%]{height:1px;width:100%;margin:20px 0;grid-column-start:span 3;background:#afafaf5b}.action-btn-list[_ngcontent-%COMP%]{display:grid;width:100%;grid-template-columns:1fr 1fr 1fr 1fr;padding:12px 0;grid-column-gap:24px;column-gap:24px}.action-button[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#49CCB3,#25B197)!important;color:#000}.stakedinfo-label[_ngcontent-%COMP%], .stakedinfo-value[_ngcontent-%COMP%]{grid-column-start:span 3;justify-self:center}@media screen and (max-width: 1024px){.testnet-wrapper[_ngcontent-%COMP%]   .testnet-card[_ngcontent-%COMP%]{width:100%}.testnet-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center}.action-btn-list[_ngcontent-%COMP%]{grid-row-gap:12px;row-gap:12px}.action-button[_ngcontent-%COMP%], .action-button-disabled[_ngcontent-%COMP%]{grid-column-start:span 2}.stakedinfo-label[_ngcontent-%COMP%]{grid-column-start:span 6;justify-self:start}.stakedinfo-value[_ngcontent-%COMP%]{grid-column-start:span 6;justify-self:end}.gradient-card-content[_ngcontent-%COMP%]{padding:12px 12px 32px}}"]}),a})()}];let U=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[T.Bz.forChild(E)],T.Bz]}),a})();l(41777);var k=l(90508),I=l(91314),q=(l(70925),l(98962));const j={provide:new e.OlP("mat-menu-scroll-strategy"),deps:[I.aV],useFactory:function(a){return()=>a.scrollStrategies.reposition()}};let $=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[j],imports:[[f.ez,k.BQ,k.si,I.U8],q.ZD,k.BQ]}),a})();var Y=l(87841);let H=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[f.ez,U,P.ot,D.Ps,$,Y.m]]}),a})()},53405:(A,y,l)=>{l.d(y,{h:()=>m});var f=l(70022),T=l(94528),d=l(32856),g=l(28321),_=l(11730),b=l(5e3);let m=(()=>{class e{constructor(){this.APIURL="https://api.thegraph.com/subgraphs/name/ookurumi/titi-testnet-v2",this.client=new f.f({uri:this.APIURL,cache:new T.h})}fetchMMFSwapPairHourData(i){return this.client.query({query:(0,d.Ps)("\n    query($id: ID,$time:Int) {\n      pair(id:$id) {\n        id\n        pairHourData(where: {hourStartTimestamp_gt: $time},orderBy: hourStartTimestamp,orderDirection: desc)  {\n          id\n          hourStartTimestamp\n          fund0\n          fund1\n          token0Price\n          token1Price\n        }\n     }\n   }\n  "),variables:{id:i.toLowerCase(),time:(0,g.Mv)()},fetchPolicy:"network-only"})}fetchMMFSwapPairDailyData(i){return this.client.query({query:(0,d.Ps)("\n    query($id: ID,$time:Int) {\n      pair(id:$id) {\n        id\n        pairDailyData(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          fund0\n          fund1\n          mmfFund0\n          mmfFund1\n          token0Price\n          token1Price\n        }\n     }\n   }\n  "),variables:{id:i.toLowerCase(),time:(0,g.Mv)()},fetchPolicy:"network-only"})}fetchAllSwapPairDailyData(){return this.client.query({query:(0,d.Ps)("\n    query($time:Int) {\n      pairs(orderBy: id,orderDirection: desc) {\n        id\n        fund0\n        fund1\n        prv\n        token1{\n          symbol\n          decimals\n        }\n        token0Twap\n        pairDailyData(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          fund0\n          fund1\n          token0Price\n          token1Price\n          token0Twap\n          prv\n        }\n        pairHourData(where: {hourStartTimestamp_gt: $time},orderBy: hourStartTimestamp,orderDirection: desc)  {\n          id\n          hourStartTimestamp\n          fund0\n          fund1\n          token0Price\n          token1Price\n          token0Twap\n          prv\n        }\n     }\n   }\n  "),variables:{time:(0,g.Mv)()},fetchPolicy:"network-only"})}fetchUniwapPairDailyData(){return this.client.query({query:(0,d.Ps)("\n    query($id: ID,$time:Int) {\n      uniswapPair(id:$id) {\n        fund0\n        fund1\n        liquidity\n        dailyData(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          fund0\n          fund1\n          liquidity\n        }\n     }\n   }\n  "),variables:{id:_.wE.UniswapV2Pair.toLowerCase(),time:(0,g.Mv)()},fetchPolicy:"network-only"})}fetchDailyLPTokenStakedValue(){return this.client.query({query:(0,d.Ps)("\n    query($time:Int) \n    {\n        dailyLPStakings(where: {dayTimestamp_gt: $time},orderBy: dayTimestamp,orderDirection: desc)  {\n          id\n          dayTimestamp\n          stakedValue\n        }\n   }\n  "),variables:{id:_.wE.UniswapV2Pair.toLowerCase(),time:(0,g.Mv)()},fetchPolicy:"network-only"})}fetchMMFRewardDailyData(i){return this.client.query({query:(0,d.Ps)("\n    query($id: ID,$time:Int) {\n      pair(id:$id) {\n        id\n        mmfRewardDailyData(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          mmfReward\n        }\n     }\n   }\n  "),variables:{id:i.toLowerCase(),time:(0,g.Mv)()},fetchPolicy:"network-only"})}fetchTodayMMFRewardData(i){return this.client.query({query:(0,d.Ps)("\n    query($id: ID,$pairId:ID) {\n      mmfrewardDailyData(id:$id) {\n        id\n        dayStartTimestamp\n        mmfReward\n      }\n      pair(id:$pairId) {\n        id\n        fund0\n        fund1\n      }\n      pairDailyData(id:$id) {\n        id\n        mmfFund1\n      }\n   }\n  "),variables:{id:i.toLowerCase()+"-"+Number.parseInt((new Date).getTime()/864e5+""),pairId:i.toLowerCase()},fetchPolicy:"network-only"})}fetchMMFRewardHourDataIn24H(i){return this.client.query({query:(0,d.Ps)("\n    query($id: ID,$time: Int) {\n      pair(id:$id) {\n        id\n        mmfRewardHourData(where: {hourStartTimestamp_gt: $time},orderBy: hourStartTimestamp,orderDirection: desc)  {\n          id\n          hourStartTimestamp\n          mmfReward\n        }\n     }\n   }\n  "),variables:{id:i.toLowerCase(),time:Number.parseInt((new Date).getTime()/1e3-86400+"")},fetchPolicy:"network-only"})}fetchTiTiStakingDailyData(){return this.client.query({query:(0,d.Ps)("\n    query($time:Int) {\n      tiTiStakingEpochDailyDatas(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n        id\n        dayStartTimestamp\n        tvl\n        apy\n        epoch{\n          id\n        }\n      }\n   }\n  "),variables:{time:(0,g.Mv)()},fetchPolicy:"network-only"})}fetchEachEpochTotalReward(i){return this.client.query({query:(0,d.Ps)("\n    query($id: ID) {\n      tiTiStakingEpoches(where: {id_lt: $id}) {\n        tvl\n        totalReward\n     }\n   }\n  "),variables:{id:i},fetchPolicy:"network-only"})}fetchVaultFund(i){return this.client.query({query:(0,d.Ps)("\n    query($id: ID,$time:Int) {\n      fundVault(id:$id) {\n        id\n        address\n        dailyBalance(where: {dayStartTimestamp_gt: $time},orderBy: dayStartTimestamp,orderDirection: desc)  {\n          id\n          dayStartTimestamp\n          balance\n          token{\n            symbol\n            decimals\n          }\n        }\n     }\n   }\n  "),variables:{id:i,time:(0,g.Mv)()},fetchPolicy:"network-only"})}fetchLastReOrdersData(){return this.client.query({query:(0,d.Ps)("\n    query {\n      reOrders(first: 1, orderBy: lastReordersTime, orderDirection: desc) {\n        id\n        lastReordersTime\n        reordersCondition\n        pavAmount\n      }\n   }\n  "),variables:{},fetchPolicy:"network-only"})}fetchHistoricalMMFStakingEpoch(i){return this.client.query({query:(0,d.Ps)("\n    query ($epochNum:Int){\n      mmfstakingEpoches(where:{epochNum_lt:$epochNum}){\n        epochNum\n        startTimestamp\n        periodFinish\n        totalReward\n      }\n   }\n  "),variables:{epochNum:1*i},fetchPolicy:"network-only"})}fetchHistoricalLPStakingEpoch(i){return this.client.query({query:(0,d.Ps)("\n    query ($epochNum:Int){\n      lpstakingEpoches(where:{epochNum_lt:$epochNum}){\n        epochNum\n        startTimestamp\n        periodFinish\n        totalReward\n      }\n   }\n  "),variables:{epochNum:1*i},fetchPolicy:"network-only"})}fetchTiTiStakingUserRank(i,u){return this.client.query({query:(0,d.Ps)("\n    query($rank: Int,$blacklist: [String]) {\n      tiTiUserStakings(where:{id_not_in:$blacklist},orderBy: share, orderDirection: desc,first:$rank) {\n        id\n        share\n      }\n      tiTiStakings(first: 1){\n        totalAmount\n        totalShare\n      }\n   }\n  "),variables:{rank:i,blacklist:u},fetchPolicy:"network-only"})}fetchTiUSDCirculation(){const i=`\n    query {\n      tiUSD(id:"${_.wE.TiUSD.toLowerCase()}") {\n        id\n        tiusdCirculation\n      }\n   }\n  `;return this.client.query({query:(0,d.Ps)(i),variables:{},fetchPolicy:"network-only"})}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=b.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);