"use strict";(self.webpackChunkapp_titi_frontend=self.webpackChunkapp_titi_frontend||[]).push([[8331],{38331:(u,r,n)=>{n.r(r),n.d(r,{AccountModalComponent:()=>O,AccountModalModule:()=>P});var s=n(69808),l=n(47423),o=n(48966),p=n(63874),i=n(87841),t=n(5e3),d=n(11730),m=n(94602),M=n(5437),h=n(75303);let O=(()=>{class e{constructor(a,c,g){this.web3Service=a,this.accountService=c,this.web3ModalService=g,this.TiUSDBalance=0,this.TiTiBalance=0}ngOnInit(){this.fetchBalanceOfTiUSD(),this.fetchBalanceOfTiTi()}fetchBalanceOfTiUSD(){this.accountService.getCurrentAccountAsyn().then(a=>this.web3Service.invokeContract("TiUSD","balanceOf",[a]).then(c=>{this.TiUSDBalance=c[0]/10**18}))}fetchBalanceOfTiTi(){this.accountService.getCurrentAccountAsyn().then(a=>this.web3Service.invokeContract("TiTiToken","balanceOf",[a]).then(c=>{this.TiTiBalance=c[0]/10**18}))}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(d.Uc),t.Y36(m.B),t.Y36(M.y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-account-modal"]],decls:27,vars:11,consts:[[1,"dialog-wrapper"],["mat-dialog-title","",1,"dialog-header"],[1,"dialog-title"],[1,"spacer"],["mat-button","","color","accent",3,"mat-dialog-close","click"],[1,"divider"],[1,"mat-typography","balance-wrapper"],[1,"lable"],[1,"address"],[1,"balance"],["align","end"],["mat-stroked-button","","color","primary","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(a,c){1&a&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h2",2),t._uU(3,"Current Account"),t.qZA(),t._UZ(4,"span",3),t.TgZ(5,"button",4),t.NdJ("click",function(){return c.web3ModalService.disconnect()}),t._uU(6,"Disconnect"),t.qZA(),t.qZA(),t._UZ(7,"div",5),t.TgZ(8,"mat-dialog-content",6),t.TgZ(9,"span",7),t._uU(10,"Address:"),t.qZA(),t.TgZ(11,"p",8),t._uU(12),t.qZA(),t.TgZ(13,"span",7),t._uU(14,"TiUSD:"),t.qZA(),t.TgZ(15,"span",9),t._uU(16),t.ALo(17,"numberFormat"),t.qZA(),t.TgZ(18,"span",7),t._uU(19,"TiTi:"),t.qZA(),t.TgZ(20,"span",9),t._uU(21),t.ALo(22,"numberFormat"),t.qZA(),t.qZA(),t._UZ(23,"div",5),t.TgZ(24,"mat-dialog-actions",10),t.TgZ(25,"button",11),t._uU(26,"OK"),t.qZA(),t.qZA(),t.qZA()),2&a&&(t.xp6(5),t.Q6J("mat-dialog-close",!0),t.xp6(7),t.Oqu(c.accountService.currentAccount),t.xp6(4),t.Oqu(t.xi3(17,5,c.TiUSDBalance,4)),t.xp6(5),t.Oqu(t.xi3(22,8,c.TiTiBalance,4)),t.xp6(4),t.Q6J("mat-dialog-close",!0))},directives:[o.uh,l.lW,o.ZT,o.xY,o.H8],pipes:[h.p],styles:[".dialog-wrapper[_ngcontent-%COMP%]{width:30vw}.dialog-title[_ngcontent-%COMP%]{color:#2dd6b5;margin:0 8px}.dialog-header[_ngcontent-%COMP%]{display:flex;width:100%}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.balance-wrapper[_ngcontent-%COMP%]{width:calc(30vw - 24px);padding:24px 0;overflow:hidden;display:grid;grid-template-columns:96px auto;grid-column-gap:24px;column-gap:24px;grid-row-gap:18px;row-gap:18px;align-items:center}.balance-wrapper[_ngcontent-%COMP%]   .lable[_ngcontent-%COMP%]{font-size:12px;justify-self:end;color:#2dd6b5}.balance-wrapper[_ngcontent-%COMP%]   .balance[_ngcontent-%COMP%]{font-size:24px;justify-self:start}.balance-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{justify-self:start;font-size:12px;line-height:16px;margin:0}.titi-dark-theme[_nghost-%COMP%]   .divider[_ngcontent-%COMP%], .titi-dark-theme   [_nghost-%COMP%]   .divider[_ngcontent-%COMP%]{height:1px;width:100%;margin:0;background:linear-gradient(90deg,rgba(255,255,255,0),#0F5F4F,rgba(255,255,255,0))}.divider[_ngcontent-%COMP%]{height:1px;width:100%;margin:0;background:#afafaf5b}.titi-dark-theme[_nghost-%COMP%]   .pendding-icon[_ngcontent-%COMP%], .titi-dark-theme   [_nghost-%COMP%]   .pendding-icon[_ngcontent-%COMP%]{color:#ffffa8}.pendding-icon[_ngcontent-%COMP%]{color:#ffc400}@media screen and (max-width: 1024px){.dialog-wrapper[_ngcontent-%COMP%]{width:calc(80vw - 78px);padding:0 12px}.balance-wrapper[_ngcontent-%COMP%]{width:100%}.address[_ngcontent-%COMP%]{width:100%;text-overflow:ellipsis;overflow:hidden;height:12px}}"]}),e})(),P=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.ez,p.Ps,l.ot,o.Is,i.m]]}),e})()},75303:(u,r,n)=>{n.d(r,{p:()=>l});var s=n(5e3);let l=(()=>{class o{transform(i,t){const d=Math.pow(10,t);return(Math.floor(i*d)/d).toFixed(t)}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275pipe=s.Yjl({name:"numberFormat",type:o,pure:!0}),o})()}}]);