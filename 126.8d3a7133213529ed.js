"use strict";(self.webpackChunkapp_titi_frontend=self.webpackChunkapp_titi_frontend||[]).push([[126],{25126:(N,x,i)=>{i.r(x),i.d(x,{HeaderComponent:()=>ue,HeaderModule:()=>pe});var w=i(54968),v=i(78372),p=i(69808),e=i(5e3),d=i(90508),D=i(70925);const B=["*",[["mat-toolbar-row"]]],k=["*","mat-toolbar-row"],S=(0,d.pj)(class{constructor(o){this._elementRef=o}});let y=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275dir=e.lG2({type:o,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]}),o})(),C=(()=>{class o extends S{constructor(t,n,r){super(t),this._platform=n,this._document=r}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.SBq),e.Y36(D.t4),e.Y36(p.K0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["mat-toolbar"]],contentQueries:function(t,n,r){if(1&t&&e.Suo(r,y,5),2&t){let h;e.iGM(h=e.CRH())&&(n._toolbarRows=h)}},hostAttrs:[1,"mat-toolbar"],hostVars:4,hostBindings:function(t,n){2&t&&e.ekj("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",0===n._toolbarRows.length)},inputs:{color:"color"},exportAs:["matToolbar"],features:[e.qOj],ngContentSelectors:k,decls:2,vars:0,template:function(t,n){1&t&&(e.F$t(B),e.Hsn(0),e.Hsn(1,1))},styles:[".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"],encapsulation:2,changeDetection:0}),o})(),R=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[d.BQ],d.BQ]}),o})();var l=i(68326),m=i(47423),s=i(17144),g=i(63191),c=i(93075),M=i(76360),b=i(15664);const Z=["thumbContainer"],A=["toggleBar"],u=["input"],f=function(o){return{enterDuration:o}},J=["*"],q=new e.OlP("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1})});let z=0;const Q={provide:c.JU,useExisting:(0,e.Gpc)(()=>P),multi:!0};class Y{constructor(a,t){this.source=a,this.checked=t}}const j=(0,d.sb)((0,d.pj)((0,d.Kr)((0,d.Id)(class{constructor(o){this._elementRef=o}}))));let P=(()=>{class o extends j{constructor(t,n,r,h,T,E){super(t),this._focusMonitor=n,this._changeDetectorRef=r,this.defaults=T,this._onChange=U=>{},this._onTouched=()=>{},this._uniqueId="mat-slide-toggle-"+ ++z,this._required=!1,this._checked=!1,this.name=null,this.id=this._uniqueId,this.labelPosition="after",this.ariaLabel=null,this.ariaLabelledby=null,this.change=new e.vpe,this.toggleChange=new e.vpe,this.tabIndex=parseInt(h)||0,this.color=this.defaultColor=T.color||"accent",this._noopAnimations="NoopAnimations"===E}get required(){return this._required}set required(t){this._required=(0,g.Ig)(t)}get checked(){return this._checked}set checked(t){this._checked=(0,g.Ig)(t),this._changeDetectorRef.markForCheck()}get inputId(){return`${this.id||this._uniqueId}-input`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{t||Promise.resolve().then(()=>this._onTouched())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}_onChangeEvent(t){t.stopPropagation(),this.toggleChange.emit(),this.defaults.disableToggleValue?this._inputElement.nativeElement.checked=this.checked:(this.checked=this._inputElement.nativeElement.checked,this._emitChangeEvent())}_onInputClick(t){t.stopPropagation()}writeValue(t){this.checked=!!t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck()}focus(t,n){n?this._focusMonitor.focusVia(this._inputElement,n,t):this._inputElement.nativeElement.focus(t)}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(new Y(this,this.checked))}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.SBq),e.Y36(b.tE),e.Y36(e.sBO),e.$8M("tabindex"),e.Y36(q),e.Y36(M.Qb,8))},o.\u0275cmp=e.Xpm({type:o,selectors:[["mat-slide-toggle"]],viewQuery:function(t,n){if(1&t&&(e.Gf(Z,5),e.Gf(A,5),e.Gf(u,5)),2&t){let r;e.iGM(r=e.CRH())&&(n._thumbEl=r.first),e.iGM(r=e.CRH())&&(n._thumbBarEl=r.first),e.iGM(r=e.CRH())&&(n._inputElement=r.first)}},hostAttrs:[1,"mat-slide-toggle"],hostVars:12,hostBindings:function(t,n){2&t&&(e.Ikx("id",n.id),e.uIk("tabindex",null)("aria-label",null)("aria-labelledby",null),e.ekj("mat-checked",n.checked)("mat-disabled",n.disabled)("mat-slide-toggle-label-before","before"==n.labelPosition)("_mat-animation-noopable",n._noopAnimations))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],required:"required",checked:"checked"},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[e._Bn([Q]),e.qOj],ngContentSelectors:J,decls:16,vars:20,consts:[[1,"mat-slide-toggle-label"],["label",""],[1,"mat-slide-toggle-bar"],["toggleBar",""],["type","checkbox","role","switch",1,"mat-slide-toggle-input","cdk-visually-hidden",3,"id","required","tabIndex","checked","disabled","change","click"],["input",""],[1,"mat-slide-toggle-thumb-container"],["thumbContainer",""],[1,"mat-slide-toggle-thumb"],["mat-ripple","",1,"mat-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-slide-toggle-persistent-ripple"],[1,"mat-slide-toggle-content",3,"cdkObserveContent"],["labelContent",""],[2,"display","none"]],template:function(t,n){if(1&t&&(e.F$t(),e.TgZ(0,"label",0,1),e.TgZ(2,"div",2,3),e.TgZ(4,"input",4,5),e.NdJ("change",function(h){return n._onChangeEvent(h)})("click",function(h){return n._onInputClick(h)}),e.qZA(),e.TgZ(6,"div",6,7),e._UZ(8,"div",8),e.TgZ(9,"div",9),e._UZ(10,"div",10),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"span",11,12),e.NdJ("cdkObserveContent",function(){return n._onLabelTextChange()}),e.TgZ(13,"span",13),e._uU(14,"\xa0"),e.qZA(),e.Hsn(15),e.qZA(),e.qZA()),2&t){const r=e.MAs(1),h=e.MAs(12);e.uIk("for",n.inputId),e.xp6(2),e.ekj("mat-slide-toggle-bar-no-side-margin",!h.textContent||!h.textContent.trim()),e.xp6(2),e.Q6J("id",n.inputId)("required",n.required)("tabIndex",n.tabIndex)("checked",n.checked)("disabled",n.disabled),e.uIk("name",n.name)("aria-checked",n.checked.toString())("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby),e.xp6(5),e.Q6J("matRippleTrigger",r)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",e.VKq(18,f,n._noopAnimations?0:150))}},directives:[d.wG,s.wD],styles:[".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],encapsulation:2,changeDetection:0}),o})(),O=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({}),o})(),W=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[O,d.si,d.BQ,s.Q8],O,d.BQ]}),o})();var I=i(57261),H=i(87238),F=i(48966);let $=0;const K=(0,d.Id)(class{}),L="mat-badge-content";let X=(()=>{class o extends K{constructor(t,n,r,h,T){super(),this._ngZone=t,this._elementRef=n,this._ariaDescriber=r,this._renderer=h,this._animationMode=T,this._color="primary",this._overlap=!0,this.position="above after",this.size="medium",this._id=$++,this._isInitialized=!1}get color(){return this._color}set color(t){this._setColor(t),this._color=t}get overlap(){return this._overlap}set overlap(t){this._overlap=(0,g.Ig)(t)}get content(){return this._content}set content(t){this._updateRenderedContent(t)}get description(){return this._description}set description(t){this._updateHostAriaDescription(t)}get hidden(){return this._hidden}set hidden(t){this._hidden=(0,g.Ig)(t)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&this._renderer.destroyNode(this._badgeElement),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_createBadgeElement(){const t=this._renderer.createElement("span"),n="mat-badge-active";return t.setAttribute("id",`mat-badge-content-${this._id}`),t.setAttribute("aria-hidden","true"),t.classList.add(L),"NoopAnimations"===this._animationMode&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(n)})}):t.classList.add(n),t}_updateRenderedContent(t){const n=`${null!=t?t:""}`.trim();this._isInitialized&&n&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=n),this._content=n}_updateHostAriaDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),t&&this._ariaDescriber.describe(this._elementRef.nativeElement,t),this._description=t}_setColor(t){const n=this._elementRef.nativeElement.classList;n.remove(`mat-badge-${this._color}`),t&&n.add(`mat-badge-${t}`)}_clearExistingBadges(){const t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${L}`);for(const n of Array.from(t))n!==this._badgeElement&&n.remove()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.R0b),e.Y36(e.SBq),e.Y36(b.$s),e.Y36(e.Qsj),e.Y36(M.Qb,8))},o.\u0275dir=e.lG2({type:o,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(t,n){2&t&&e.ekj("mat-badge-overlap",n.overlap)("mat-badge-above",n.isAbove())("mat-badge-below",!n.isAbove())("mat-badge-before",!n.isAfter())("mat-badge-after",n.isAfter())("mat-badge-small","small"===n.size)("mat-badge-medium","medium"===n.size)("mat-badge-large","large"===n.size)("mat-badge-hidden",n.hidden||!n.content)("mat-badge-disabled",n.disabled)},inputs:{disabled:["matBadgeDisabled","disabled"],color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap"],position:["matBadgePosition","position"],content:["matBadge","content"],description:["matBadgeDescription","description"],size:["matBadgeSize","size"],hidden:["matBadgeHidden","hidden"]},features:[e.qOj]}),o})(),ee=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[b.rt,d.BQ],d.BQ]}),o})();var te=i(5437),oe=i(11730),ne=i(94602),ie=i(39249),ae=i(91314);function re(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"button",11,12),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).openAccountModal()}),e.TgZ(2,"div",5),e.TgZ(3,"mat-icon",6),e._uU(4,"account_circle "),e.qZA(),e.TgZ(5,"span"),e._uU(6),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=e.oxw(2);e.Q6J("matTooltip","Current Account: "+t.accountService.currentAccount),e.xp6(6),e.Oqu("Connected")}}function le(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).connectWallet()}),e.TgZ(1,"div",5),e.TgZ(2,"mat-icon",6),e._uU(3,"account_balance_wallet "),e.qZA(),e.TgZ(4,"span"),e._uU(5,"CONNECT WALLET"),e.qZA(),e.qZA(),e.qZA()}}function se(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"mat-toolbar",2),e._UZ(1,"span",3),e.TgZ(2,"button",4),e.NdJ("click",function(){return e.CHM(t),e.oxw().openRecentTransactionDialog()}),e.TgZ(3,"div",5),e.TgZ(4,"mat-icon",6),e._uU(5,"history"),e.qZA(),e.TgZ(6,"span"),e._uU(7,"Transactions"),e.qZA(),e.qZA(),e.qZA(),e.YNc(8,re,7,2,"button",7),e.YNc(9,le,6,0,"button",8),e.TgZ(10,"mat-slide-toggle",9),e.NdJ("toggleChange",function(){return e.CHM(t),e.oxw().changeTheme()}),e.TgZ(11,"mat-icon",10),e._uU(12,"brightness_4"),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=e.oxw();e.Udp("width","100%"),e.xp6(2),e.Q6J("matBadge",t.web3Service.badge)("matBadgeHidden",0===t.web3Service.badge),e.xp6(6),e.Q6J("ngIf",t.accountService.currentAccount),e.xp6(1),e.Q6J("ngIf",!t.accountService.currentAccount),e.xp6(1),e.Q6J("checked",t.themeService.isDarkMode)}}function ce(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"button",15),e.TgZ(1,"mat-icon",16),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).changeTheme()}),e._uU(2,"wb_sunny"),e.qZA(),e.qZA()}}function de(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"button",15),e.TgZ(1,"mat-icon",16),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).changeTheme()}),e._uU(2,"brightness_2"),e.qZA(),e.qZA()}}function ge(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"button",23,12),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).openAccountModal()}),e.TgZ(2,"mat-icon",6),e._uU(3,"account_circle "),e.qZA(),e.qZA()}if(2&o){const t=e.oxw(2);e.Q6J("matTooltip","Current Account: "+t.accountService.currentAccount)}}function me(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"button",20),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).connectWallet()}),e.TgZ(1,"mat-icon",6),e._uU(2,"account_balance_wallet "),e.qZA(),e.qZA()}}function he(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"mat-toolbar",14),e.TgZ(1,"button",15),e.TgZ(2,"mat-icon",16),e.NdJ("click",function(){return e.CHM(t),e.oxw().toggle()}),e._uU(3,"menu"),e.qZA(),e.qZA(),e.TgZ(4,"div",17),e._UZ(5,"img",18),e.qZA(),e._UZ(6,"span",3),e.YNc(7,ce,3,0,"button",19),e.YNc(8,de,3,0,"button",19),e.TgZ(9,"button",20),e.NdJ("click",function(){return e.CHM(t),e.oxw().openRecentTransactionDialog()}),e.TgZ(10,"mat-icon",6),e._uU(11,"history"),e.qZA(),e.qZA(),e.YNc(12,ge,4,1,"button",21),e.YNc(13,me,3,0,"button",22),e.qZA()}if(2&o){const t=e.oxw();e.Udp("width","100%"),e.xp6(7),e.Q6J("ngIf",t.themeService.isDarkMode),e.xp6(1),e.Q6J("ngIf",!t.themeService.isDarkMode),e.xp6(4),e.Q6J("ngIf",t.accountService.currentAccount),e.xp6(1),e.Q6J("ngIf",!t.accountService.currentAccount)}}let ue=(()=>{class o{constructor(t,n,r,h,T,E,U){this.web3ModalService=t,this.web3Service=n,this.accountService=r,this.themeService=h,this._snackBar=T,this.dialog=E,this.overlayContainer=U,this.toggle=()=>{},this.isMobile=document.body.clientWidth<=1024}ngOnInit(){(0,w.R)(window,"resize").pipe((0,v.b)(300)).subscribe(t=>{this.isMobile=document.body.clientWidth<=1024}),this.connectWallet(),this.processOverlayBaseComponentTheme(this.themeService.isDarkMode)}prepareRoute(t){return t.activatedRouteData.animation}connectWallet(){this.web3ModalService.connect().then(t=>{this._snackBar.open("Welcome to TiTi Protocol!","close",{horizontalPosition:"center",verticalPosition:"top",duration:2e3})}).catch(t=>{this.web3ModalService.disconnect(),this._snackBar.open("Error! Connect to wallet failed","close",{horizontalPosition:"center",verticalPosition:"top",duration:4e3})})}openRecentTransactionDialog(){i.e(230).then(i.bind(i,81230)).then(({RecentTransactionDialogComponent:t})=>{this.web3Service.clearBadge(),this.dialog.open(t).afterClosed().subscribe(r=>{console.log(`Dialog result: ${r}`)})})}openAccountModal(){i.e(331).then(i.bind(i,38331)).then(({AccountModalComponent:t})=>{this.dialog.open(t).afterClosed().subscribe(r=>{})})}changeTheme(){this.processOverlayBaseComponentTheme(!this.themeService.isDarkMode),this.themeService.isDarkMode=!this.themeService.isDarkMode}processOverlayBaseComponentTheme(t){const n=this.overlayContainer.getContainerElement(),r="titi-dark-theme";t?n.classList.add(r):n.classList.remove(r)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(te.y),e.Y36(oe.Uc),e.Y36(ne.B),e.Y36(ie.f),e.Y36(I.ux),e.Y36(F.uw),e.Y36(ae.Xj))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-header"]],inputs:{toggle:"toggle"},decls:2,vars:2,consts:[["class","header",3,"width",4,"ngIf"],["class","mobile-header",3,"width",4,"ngIf"],[1,"header"],[1,"spacer"],["mat-stroked-button","","color","primary","matBadgeColor","accent",1,"header-action-wrapper-btn",2,"margin-right","12px",3,"matBadge","matBadgeHidden","click"],[1,"header-action-btn"],[1,"header-action-icon"],["class","header-action-wrapper-btn","mat-stroked-button","","color","primary","style","margin-right:12px;","matTooltipPosition","below","matTooltipHideDelay","200",3,"matTooltip","click",4,"ngIf"],["class","header-action-wrapper-btn","mat-stroked-button","","color","primary","style","margin-right:12px;",3,"click",4,"ngIf"],["color","primary","labelPosition","before",2,"margin-right","12px",3,"checked","toggleChange"],["color","primary",2,"line-height","34px"],["mat-stroked-button","","color","primary","matTooltipPosition","below","matTooltipHideDelay","200",1,"header-action-wrapper-btn",2,"margin-right","12px",3,"matTooltip","click"],["tooltip","matTooltip"],["mat-stroked-button","","color","primary",1,"header-action-wrapper-btn",2,"margin-right","12px",3,"click"],[1,"mobile-header"],["mat-icon-button","","aria-label","header",1,"icon"],["color","primary",3,"click"],[1,"mobile-logo"],["src","assets/imgs/logo.png","alt","logo"],["mat-icon-button","","class","icon","aria-label","header",4,"ngIf"],["mat-icon-button","","color","primary",1,"mobile-header-action-wrapper-btn",3,"click"],["class","mobile-header-action-wrapper-btn","mat-icon-button","","color","primary","matTooltipPosition","below","matTooltipHideDelay","200",3,"matTooltip","click",4,"ngIf"],["class","mobile-header-action-wrapper-btn","mat-icon-button","","color","primary",3,"click",4,"ngIf"],["mat-icon-button","","color","primary","matTooltipPosition","below","matTooltipHideDelay","200",1,"mobile-header-action-wrapper-btn",3,"matTooltip","click"]],template:function(t,n){1&t&&(e.YNc(0,se,13,7,"mat-toolbar",0),e.YNc(1,he,14,6,"mat-toolbar",1)),2&t&&(e.Q6J("ngIf",!n.isMobile),e.xp6(1),e.Q6J("ngIf",n.isMobile))},directives:[p.O5,C,m.lW,X,l.Hw,P,H.gM],styles:[".header[_ngcontent-%COMP%]{z-index:99;position:fixed;background:none;height:8vh}.logo[_ngcontent-%COMP%]{height:100%;display:flex;justify-content:center;align-items:center;margin:24px 0;padding:12px}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.mobile-logo[_ngcontent-%COMP%]{height:5vh;display:flex;justify-content:center;align-items:center;margin-left:8px}.mobile-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80%}.header-action-wrapper-btn[_ngcontent-%COMP%]{border:1px solid #1BD0A3!important;border-radius:8px;font-size:12px}.header-action-wrapper-btn[_ngcontent-%COMP%]:hover{border:1px solid #1ce6b3!important}.mobile-header[_ngcontent-%COMP%]{z-index:99;position:fixed;background:none;height:6vh;background-color:#f5f5f5}.header-action-btn[_ngcontent-%COMP%]{display:grid;grid-template-columns:20px auto;grid-column-gap:8px;column-gap:8px}.header-action-btn[_ngcontent-%COMP%]   .header-action-icon[_ngcontent-%COMP%], .header-action-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{justify-self:center;align-self:center}.titi-dark-theme[_nghost-%COMP%]   .mobile-header[_ngcontent-%COMP%], .titi-dark-theme   [_nghost-%COMP%]   .mobile-header[_ngcontent-%COMP%]{background-color:#06231e99;border-bottom:1px solid rgba(2,172,135,.308);box-shadow:none}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]}),o})(),pe=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[p.ez,R,l.Ps,m.ot,W,I.ZX,H.AV,F.Is,ee]]}),o})()},11730:(N,x,i)=>{i.d(x,{Uc:()=>S,fV:()=>y,wE:()=>C});var w=i(98538),v=i.n(w),p=i(5e3),e=i(5437),d=i(94602),D=i(57261),B=i(48966),k=i(31657);let S=(()=>{class _{constructor(l,m,s,g,c){this.web3ModalService=l,this.accountService=m,this._snackBar=s,this.dialog=g,this.refreshService=c,this.badge=0,this.recentTransaction=new Set(JSON.parse(localStorage.getItem("recentTransaction")||"[]"))}clearBadge(){this.badge=0}initWeb3(){return new Promise((l,m)=>{this.web3?(this.web3.currentProvider||this.web3.setProvider(this.web3ModalService.provider),l()):Promise.all([i.e(445).then(i.t.bind(i,34445,23)),this.web3ModalService.getProvider()]).then(([s,g])=>{this.web3=new s.default(g),l()}).catch(m)})}setProvider(l){return this.initWeb3().then(()=>this.web3.setProvider(l))}invokeContract(l,m,s,g){return this.initWeb3().then(()=>Promise.all([this.getFunctionABI(l,m),this.accountService.getCurrentAccountAsyn()]).then(([c,M])=>{const b=this.web3.eth.abi.encodeFunctionCall(c,s),A={from:M,to:C[l],data:b,value:g};return"view"==c.stateMutability?this.web3.eth.call(A).then(u=>this.web3.eth.abi.decodeParameters(c.outputs,u)):this.web3.eth.sendTransaction(A).on("transactionHash",u=>{const f=Array.from(this.recentTransaction);f.unshift({txHash:u,contractName:l,functionName:m,params:s,receipt:null}),this.recentTransaction=new Set(f),localStorage.setItem("recentTransaction",JSON.stringify(f)),this.badge++}).on("receipt",u=>{this.recentTransaction.forEach(f=>{f.txHash===u.transactionHash&&(f.receipt=u)}),localStorage.setItem("recentTransaction",JSON.stringify(Array.from(this.recentTransaction))),u.status?(this.refreshService.invokeFunctions(),this._snackBar.open("Successful transaction!","close",{horizontalPosition:"center",verticalPosition:"top",duration:3e3})):this._snackBar.open("Transaction failed!","close",{horizontalPosition:"center",verticalPosition:"top",duration:3e3})}).on("error",u=>{this._snackBar.open("Transaction failed!","close",{horizontalPosition:"center",verticalPosition:"top",duration:3e3})}).then(u=>u)})).catch(c=>{throw this._snackBar.open("Unknown Error!","close",{horizontalPosition:"center",verticalPosition:"top",duration:3e3}),c})}getFunctionABI(l,m){return fetch(`/assets/abi/${l}.json`).then(s=>s.text()).then(s=>JSON.parse(s).abi).then(s=>{const g=s.filter(c=>c.name==m&&"function"==c.type);if(0===g.length)throw new Error("No such function");return g[0]})}decodeLog(l,m,s){return this.initWeb3().then(()=>this.web3.eth.abi.decodeLog(l,m,s))}openApproveModal(l,m,s,g){this.accountService.getCurrentAccountAsyn().then(c=>this.invokeContract(l,"allowance",[c,C[s]])).then(c=>{m.gt(new(v())(c[0]))?i.e(288).then(i.bind(i,30288)).then(({ApproveModalComponent:M})=>{const b=this.dialog.open(M);b.componentInstance.approveToken=l,b.componentInstance.approveValue=y.toString(),b.componentInstance.approveSpender=s,b.afterClosed().subscribe(g)}):g(!0)})}}return _.\u0275fac=function(l){return new(l||_)(p.LFG(e.y),p.LFG(d.B),p.LFG(D.ux),p.LFG(B.uw),p.LFG(k.g))},_.\u0275prov=p.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})();const y=new(v())("2").pow(new(v())("256")).sub(new(v())("1")),C={TiUSD:"0xe2450bF757190a621328e9950054F66A67279c3a",TiTiToken:"0x7eF0AB70304A467C1Eb9C8bc0abF9D3cB3325edE",USDC:"0xe9225ee0e82180c64d4F55dd08B7bDC4b15Fc404",MAMMSwapPair:"0xFdA623Ed67307C4eF8e36C0Cc0eE4f5D792a0687",MarketMakerFund:"0xEDc1bB5C8143946abA10cD44e265A32227aa3791",MMFLPStakingPool:"0x62E322a435b4C05e71b63B80da8F766D67e3E0eD",LPStakingPool:"0xC588086986cCDDDa14ccFa31797290A037A1f1FD",RainyDayFundVault:"0xC4B67E8de9Ba576710Ae11B26cd73F9541EC7F26",ProtocolFeeVault:"0xa7F1c31E6638c7545A147B9aCFe8E9149bC9622C",ReOrdersController:"0x62e802eDD404D03c9452754bBb97Dd7B728De050",TiTiStaking:"0x17AD0812cc1DA0855C0A1ECaF97CfB0bcC716ee3",UniswapV2Pair:"0x08a95b02d8b765c56b382324b1695b1ddd982d4d",TiTiBackendV1:"0xeEd4d8D736Eeaf4a4781CD099B6f421823612d0F"}}}]);