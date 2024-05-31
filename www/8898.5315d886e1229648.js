"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8898],{8898:(k,c,o)=>{o.r(c),o.d(c,{ProfilePageModule:()=>I});var p=o(6814),d=o(2881),u=o(5861),r=o(95),l=o(7852),n=o(9468),h=o(6215);function P(t,a){1&t&&(n.TgZ(0,"ion-title",13),n._uU(1,"Perfil"),n.qZA())}const g=function(){return["basic"]};function M(t,a){1&t&&(n.TgZ(0,"ion-item",11)(1,"ion-label"),n._uU(2,"Datos b\xe1sicos"),n.qZA()()),2&t&&n.Q6J("routerLink",n.DdM(1,g))}function C(t,a){if(1&t&&(n.TgZ(0,"ion-item",14)(1,"ion-avatar",15),n._UZ(2,"img",16),n.qZA(),n.TgZ(3,"ion-label",17)(4,"h2"),n._uU(5),n.qZA(),n.TgZ(6,"p",18),n._uU(7),n.qZA()(),n._UZ(8,"ion-img",12),n.qZA()),2&t){const e=n.oxw();n.Q6J("routerLink",n.DdM(3,g)),n.xp6(5),n.Oqu(e.profile.name),n.xp6(2),n.Oqu(e.profile.email)}}const b=function(t,a){return{title_show:t,title_no_show:a}},x=function(){return["payments"]},O=function(){return["public"]},y=[{path:"",component:(()=>{class t{constructor(e,i,s,f){this.profileService=e,this.fb=i,this.toastController=s,this.location=f,this.litle_text=!1,this.onlyLettersMask={mask:[...Array(80).fill(/^[a-zA-Z\s]/)]},this.phoneMask={mask:[...Array(9).fill(/\d/)]},this.fiscalIdMask={mask:[...Array(8).fill(/\d/),...Array(1).fill(/^[a-zA-Z]/)]},this.maskPredicate=function(){var T=(0,u.Z)(function*(m){return m.getInputElement()});return function(m){return T.apply(this,arguments)}}(),this.isModalOpenPerfil=!1,this.isModalOpenPublico=!1,this.isModalOpenPagos=!1,this.reloadPending=!1,this.loading=!1,this.updateLoading=!1,this.cardForm=new r.cw({cardNumber:new r.NI("",[r.kI.required]),cardExpiration:new r.NI("",[r.kI.required]),cardVerificationCode:new r.NI("",[r.kI.required])})}ngOnInit(){this.profileForm=this.fb.group({name:["",[r.kI.required]],surname1:["",[r.kI.required]],surname2:["",[]],fiscalId:["",[r.kI.pattern(/^\d{8}[A-Za-z]$/)]],phone:["",[r.kI.pattern(/^\d{9}$/)]],birthDate:["",[]],headline:["",[r.kI.maxLength(100)]],description:["",[r.kI.maxLength(500)]],linkedin:[""],twitter:[""],instagram:[""],phonePublic:[!1],emailPublic:[!1]}),this.refreshProfile(void 0)}handleRefresh(e){this.refreshProfile(e)}refreshProfile(e){this.reloadPending=!0,this.profileService.getProfile().subscribe(i=>{this.profile=i,this.profileForm.patchValue(i),e&&e.target.complete()})}cancel(){this.modal.dismiss(null,"cancel")}updateProfile(){this.updateLoading=!0,this.profileService.updateProfile(this.profileForm).subscribe(e=>{this.updateLoading=!1,this.profileForm.markAsPristine(),this.presentToast("bottom","Perfil actualizado")},()=>{this.updateLoading=!1,this.presentToast("bottom","No se ha podido actualizar el perfil")})}presentToast(e,i){var s=this;return(0,u.Z)(function*(){yield(yield s.toastController.create({message:i,duration:1500,position:e})).present()})()}handleScroll(e){this.litle_text=e.detail.scrollTop>42}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(h.H),n.Y36(r.qu),n.Y36(l.yF),n.Y36(p.Ye))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-profile"]],viewQuery:function(e,i){if(1&e&&n.Gf(l.ki,5),2&e){let s;n.iGM(s=n.CRH())&&(i.modal=s.first)}},decls:22,vars:17,consts:[[3,"translucent"],["routerLink","/tickets","slot","start"],["name","arrow-back-outline",1,"icon_x","ion-padding"],["class","ion-text-center ion-custom-title",4,"ngIf"],[3,"fullscreen","scrollEvents","ionScroll"],[1,"ion-padding","text_title_header",3,"ngClass"],["id","container"],["slot","fixed",3,"pullFactor","pullMin","pullMax","ionRefresh"],["lines","none"],["detail","false",3,"routerLink",4,"ngIf"],["detail","false","class","color_item_profile",3,"routerLink",4,"ngIf"],["detail","false",3,"routerLink"],["slot","end","src","../../assets/images/icon_profile_flecha.svg"],[1,"ion-text-center","ion-custom-title"],["detail","false",1,"color_item_profile",3,"routerLink"],["aria-hidden","true","slot","start"],["alt","","src","https://ionicframework.com/docs/img/demos/avatar.svg"],[1,"label_profile"],[1,"text-email"]],template:function(e,i){1&e&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),n._UZ(3,"ion-icon",2),n.qZA(),n.YNc(4,P,2,0,"ion-title",3),n.qZA()(),n.TgZ(5,"ion-content",4),n.NdJ("ionScroll",function(f){return i.handleScroll(f)}),n.TgZ(6,"ion-label",5),n._uU(7,"Perfil"),n.qZA(),n.TgZ(8,"div",6)(9,"ion-refresher",7),n.NdJ("ionRefresh",function(f){return i.handleRefresh(f)}),n._UZ(10,"ion-refresher-content"),n.qZA(),n.TgZ(11,"ion-list",8),n.YNc(12,M,3,2,"ion-item",9),n.YNc(13,C,9,4,"ion-item",10),n.TgZ(14,"ion-item",11)(15,"ion-label"),n._uU(16,"M\xe9todos de pago"),n.qZA(),n._UZ(17,"ion-img",12),n.qZA(),n.TgZ(18,"ion-item",11)(19,"ion-label"),n._uU(20,"Perfil p\xfablico"),n.qZA(),n._UZ(21,"ion-img",12),n.qZA()()()()),2&e&&(n.Q6J("translucent",!0),n.xp6(4),n.Q6J("ngIf",i.litle_text),n.xp6(1),n.Q6J("fullscreen",!0)("scrollEvents",!0),n.xp6(1),n.Q6J("ngClass",n.WLB(12,b,!i.litle_text,i.litle_text)),n.xp6(3),n.Q6J("pullFactor",.5)("pullMin",100)("pullMax",200),n.xp6(3),n.Q6J("ngIf",""==(null==i.profile?null:i.profile.name)||null==(null==i.profile?null:i.profile.name)),n.xp6(1),n.Q6J("ngIf",null!=(null==i.profile?null:i.profile.name)&&null!=(null==i.profile?null:i.profile.name)&&""!=(null==i.profile?null:i.profile.name)),n.xp6(1),n.Q6J("routerLink",n.DdM(15,x)),n.xp6(4),n.Q6J("routerLink",n.DdM(16,O)))},dependencies:[l.BJ,l.Sm,l.W2,l.Gu,l.gu,l.Xz,l.Ie,l.Q$,l.q_,l.nJ,l.Wo,l.wd,l.sr,l.YI,p.mk,p.O5,d.rH],styles:["ion-button[_ngcontent-%COMP%]{width:100%}.btn_profile[_ngcontent-%COMP%]{border-radius:32px;background:var(--Primario-nevent, #5B7EF2);display:flex;width:auto;height:55px;justify-content:center;align-items:center;margin:54px 10% 100px}.icon_x[_ngcontent-%COMP%]{margin-left:0}p.text-email[_ngcontent-%COMP%]{color:#bdbdbd}.datos_basicos[_ngcontent-%COMP%]{margin-bottom:24px}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#fbfbfb;font-family:Poppins;font-size:16px;font-style:normal;font-weight:600;line-height:24px;margin-left:3%}ion-item[_ngcontent-%COMP%]   .label_profile[_ngcontent-%COMP%]{font-weight:400}ion-item[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{margin-right:3%}app-card-preview[_ngcontent-%COMP%]{width:100%}.ios[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: transparent;--ion-color-base: transparent !important;--opacity: .8;text-align:center}.md[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{text-align:center}.ios[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.text_title_header[_ngcontent-%COMP%]{color:#fbfbfb;font-family:Poppins;font-size:28px;font-style:normal;font-weight:600;line-height:42px}ion-list[_ngcontent-%COMP%], .parraf_p[_ngcontent-%COMP%]{margin-top:10%}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], .parraf_p[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-top:24px}.parraf_p[_ngcontent-%COMP%]{color:#bdbdbd;font-family:Poppins;font-size:16px;font-style:normal;font-weight:400;line-height:normal;padding:0 24px 24px}.color_item_profile[_ngcontent-%COMP%]{--ion-item-background: #161616;padding-left:5%;padding-right:5%;box-shadow:0 4px 4px #00000096;--border-radius: 8px}ion-avatar[_ngcontent-%COMP%]{height:51px;width:51px;margin-top:20px;margin-bottom:20px}.md[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], ion-input[_ngcontent-%COMP%]:hover, ion-input[_ngcontent-%COMP%]:focus, ion-input[_ngcontent-%COMP%]:after{--background: #000;--color: #fff;--border-color: #F2F2F2;width:342px;margin-left:auto;margin-right:auto;--padding-bottom: 15px;--padding-end: 10px;--padding-start: 10px}.input-fill-solid.sc-ion-input-md-h[_ngcontent-%COMP%]{border-color:#fff;border-style:solid;border-radius:8px!important}.label-text-wrapper[_ngcontent-%COMP%]{color:#bdbdbd;font-family:Poppins;font-size:14px;font-style:normal;font-weight:400;line-height:normal}.native-wrapper[_ngcontent-%COMP%]{color:#f2f2f2;font-family:Poppins;font-size:16px;font-style:normal;font-weight:400;line-height:normal}.ios[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], ion-input[_ngcontent-%COMP%]:hover, ion-input[_ngcontent-%COMP%]:focus, ion-input[_ngcontent-%COMP%]:after{--background: #000;--color: #fff;--border-color: #F2F2F2;width:342px;margin-left:auto;margin-right:auto;--padding-bottom: 15px;--padding-end: 10px;--padding-start: 10px}.title_no_show[_ngcontent-%COMP%]{visibility:hidden}.title_show[_ngcontent-%COMP%]{visibility:visible}"]}),t})(),children:[]},{path:"create-card",loadChildren:()=>o.e(3829).then(o.bind(o,3829)).then(t=>t.CreateCardPageModule)},{path:"basic",loadChildren:()=>o.e(1317).then(o.bind(o,1317)).then(t=>t.BasicPageModule)},{path:"public",loadChildren:()=>o.e(6522).then(o.bind(o,6522)).then(t=>t.PublicPageModule)},{path:"payments",loadChildren:()=>Promise.all([o.e(8592),o.e(383)]).then(o.bind(o,383)).then(t=>t.PaymentsPageModule)}];let Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[d.Bz.forChild(y),d.Bz]}),t})();var v=o(3554),A=o(5233);let I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[A.U5,l.Pc,r.UX,p.ez,r.u5,v.e,p.ez,Z]}),t})()}}]);