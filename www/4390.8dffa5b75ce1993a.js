"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4390],{4390:(D,u,l)=>{l.r(u),l.d(u,{PurchaseDetailModule:()=>y});var s=l(6814),c=l(95),i=l(7852),d=l(3554),g=l(2881),n=l(9468),_=l(3353);function m(e,o){1&e&&(n.TgZ(0,"ion-title",8),n._uU(1,"Detalle de compra"),n.qZA())}function f(e,o){if(1&e&&(n.TgZ(0,"ion-label",28),n._uU(1),n.qZA()),2&e){const t=n.oxw(2);n.xp6(1),n.Oqu(t.purchase.state)}}function h(e,o){if(1&e&&(n.TgZ(0,"ion-label",29),n._uU(1),n.qZA()),2&e){const t=n.oxw(2);n.xp6(1),n.Oqu(t.purchase.state)}}function x(e,o){if(1&e&&(n.TgZ(0,"ion-label",30),n._uU(1),n.qZA()),2&e){const t=n.oxw(2);n.xp6(1),n.Oqu(t.purchase.state)}}function b(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"ion-card",32)(1,"ion-card-content")(2,"h2"),n._uU(3,"Ticket identifier"),n.qZA(),n.TgZ(4,"p"),n._uU(5),n.qZA(),n.TgZ(6,"ion-button",33),n.NdJ("click",function(){const p=n.CHM(t).$implicit,q=n.oxw(3);return n.KtG(q.showAssignationForm(p.ticketId))}),n._uU(7,"Asignar"),n.qZA()()()}if(2&e){const t=o.$implicit;n.xp6(5),n.Oqu(null==t?null:t.ticketId)}}function P(e,o){if(1&e&&(n.TgZ(0,"ion-row")(1,"ion-col")(2,"ion-row")(3,"ion-col",15)(4,"ion-label"),n._uU(5,"Entradas sin asignar"),n.qZA()(),n.TgZ(6,"ion-col",15)(7,"ion-label"),n._uU(8,"Asigna tus entradas para poder disfrutarlas"),n.qZA()()(),n.TgZ(9,"ion-row"),n.YNc(10,b,8,1,"ion-card",31),n.qZA()()()),2&e){const t=n.oxw(2);n.xp6(10),n.Q6J("ngForOf",t.unnasignedTickets)}}function C(e,o){if(1&e&&(n.TgZ(0,"ion-item",34)(1,"ion-label")(2,"h3"),n._uU(3),n.qZA()()()),2&e){const t=o.$implicit;n.xp6(3),n.AsE("",t.quantity,"x ",t.description,"")}}function Z(e,o){1&e&&(n.TgZ(0,"ion-item",34)(1,"ion-label",35),n._uU(2,"No hay experiencias adicionales"),n.qZA()())}function M(e,o){if(1&e&&(n.TgZ(0,"ion-item",34)(1,"ion-label")(2,"h3"),n._uU(3),n.qZA()()()),2&e){const t=o.$implicit;n.xp6(3),n.AsE("",t.quantity,"x ",t.description,"")}}function O(e,o){1&e&&(n.TgZ(0,"ion-item",34)(1,"ion-label",35),n._uU(2,"No hay productos"),n.qZA()())}function T(e,o){if(1&e&&(n.TgZ(0,"ion-grid")(1,"ion-row",9),n._UZ(2,"ion-icon",10),n.YNc(3,f,2,1,"ion-label",11),n.YNc(4,h,2,1,"ion-label",12),n.YNc(5,x,2,1,"ion-label",13),n.qZA(),n.TgZ(6,"ion-row",14)(7,"ion-col")(8,"ion-row")(9,"ion-col",15)(10,"ion-label",16),n._uU(11,"Nombre del evento"),n.qZA()(),n.TgZ(12,"ion-col",17)(13,"ion-label",18),n._uU(14),n.qZA()()(),n.TgZ(15,"ion-row")(16,"ion-col",15)(17,"ion-label",16),n._uU(18,"Identificador de la compra"),n.qZA()(),n.TgZ(19,"ion-col",17)(20,"ion-label",18),n._uU(21),n.qZA()()(),n.TgZ(22,"ion-row")(23,"ion-col",15)(24,"ion-label",16),n._uU(25,"Fecha de compra"),n.qZA()(),n.TgZ(26,"ion-col",17)(27,"ion-label",18),n._uU(28),n.ALo(29,"date"),n.qZA()()()()(),n.YNc(30,P,11,1,"ion-row",6),n._UZ(31,"div",19),n.TgZ(32,"ion-row",20)(33,"ion-col",21)(34,"ion-row")(35,"ion-col",22)(36,"ion-label",23),n._uU(37,"Desglose de compra"),n.qZA()()()()(),n.TgZ(38,"ion-row",20)(39,"ion-col",24)(40,"ion-label",25),n._uU(41,"Experiencias"),n.qZA(),n.YNc(42,C,4,2,"ion-item",26),n.YNc(43,Z,3,0,"ion-item",27),n.qZA()(),n.TgZ(44,"ion-row",20)(45,"ion-col",24)(46,"ion-label",25),n._uU(47,"Productos"),n.qZA(),n.YNc(48,M,4,2,"ion-item",26),n.YNc(49,O,3,0,"ion-item",27),n.qZA()()()),2&e){const t=n.oxw();n.xp6(3),n.Q6J("ngIf","SUCCEEDED"===t.purchase.state),n.xp6(1),n.Q6J("ngIf","FAILED"===t.purchase.state),n.xp6(1),n.Q6J("ngIf","FAILED"!==t.purchase.state&&"SUCCEEDED"!==t.purchase.state),n.xp6(9),n.Oqu(t.purchase.eventName),n.xp6(7),n.Oqu(t.purchase.id),n.xp6(7),n.Oqu(n.xi3(29,11,t.purchase.purchasedAt,"dd/MM/yyyy HH:mm")),n.xp6(2),n.Q6J("ngIf",t.unnasignedTickets.length>0),n.xp6(12),n.Q6J("ngForOf",t.getPurchaseExperiences(t.purchase)),n.xp6(1),n.Q6J("ngIf",0===t.getPurchaseExperiences(t.purchase).length),n.xp6(5),n.Q6J("ngForOf",t.getPurchaseProducts(t.purchase)),n.xp6(1),n.Q6J("ngIf",0===t.getPurchaseProducts(t.purchase).length)}}function w(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",36),n.NdJ("click",function(){n.CHM(t);const r=n.oxw();return n.KtG(r.cancel())}),n._uU(4,"Cancelar"),n.qZA()(),n.TgZ(5,"ion-title"),n._uU(6,"Reasignar entrada"),n.qZA()()(),n.TgZ(7,"ion-content",37)(8,"form",38)(9,"ion-item")(10,"ion-label",39),n._uU(11,"Correo electr\xf3nico"),n.qZA(),n._UZ(12,"ion-input",40),n.qZA()(),n.TgZ(13,"ion-item",34)(14,"ion-label")(15,"p",41),n._uU(16," Importante! Esta acci\xf3n es irreversible. En cuanto reasignes tu entrada, dejar\xe1s de tener acceso a ella y s\xf3lo podr\xe1 ser utilizada por el nuevo fan. "),n.qZA()()(),n.TgZ(17,"ion-button",42),n.NdJ("click",function(){n.CHM(t);const r=n.oxw();return n.KtG(r.confirm())}),n._uU(18,"Asignar"),n.qZA()()}if(2&e){const t=n.oxw();n.xp6(8),n.Q6J("formGroup",t.assignationForm),n.xp6(9),n.Q6J("disabled",!t.assignationForm.dirty||!t.assignationForm.valid)}}const A=[{path:"",component:(()=>{class e{constructor(t,a,r){this.purchaseService=t,this.activatedRoute=a,this.fb=r,this.litle_text=!1,this.loading=!1,this.unnasignedTickets=[]}ngOnInit(){this.loading=!0,this.assignationForm=this.fb.group({email:this.fb.control("",[c.kI.required,c.kI.email])}),this.activatedRoute.paramMap.subscribe(t=>{this.purchaseId=t.params.id,this.purchaseService.getPurchaseDetails(this.purchaseId).subscribe(a=>{this.loading=!1,this.purchase=a,this.unnasignedTickets=a.tickets&&a.tickets.filter(r=>null==r.ownerId)||[],console.log("-----unnasignedTickets---------"),console.log(this.unnasignedTickets)},()=>{this.loading=!1})})}getPurchaseProducts(t){return t?t.movements.filter(a=>"PRODUCT"===a.type):[]}getPurchaseExperiences(t){return t?t.movements.filter(a=>"EXPERIENCE"===a.type):[]}showAssignationForm(t){this.selectedTicketId=t,this.modal.present()}cancel(){this.modal.dismiss(null,"cancel")}confirm(){this.loading=!0,this.purchaseService.assignTicket(this.purchaseId,this.selectedTicketId,this.assignationForm.value).subscribe(()=>{this.loading=!1,this.modal.dismiss(null,"cancel")},()=>{this.loading=!1})}handleScroll(t){this.litle_text=t.detail.scrollTop>42}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(_.B),n.Y36(g.gz),n.Y36(c.qu))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-purchase-detail"]],viewQuery:function(t,a){if(1&t&&n.Gf(i.ki,5),2&t){let r;n.iGM(r=n.CRH())&&(a.modal=r.first)}},decls:10,vars:4,consts:[[3,"translucent"],["slot","start"],["routerLink","/purchases","slot","start"],["name","arrow-back-outline",1,"icon_x","ion-padding"],["class","ion-text-center ion-custom-title",4,"ngIf"],[1,"ion-no-padding",3,"scrollEvents","ionScroll"],[4,"ngIf"],["trigger","open-modal"],[1,"ion-text-center","ion-custom-title"],[1,"col_style"],["name","checkmark-circle-outline",1,"icon_check"],["color","success",4,"ngIf"],["color","danger",4,"ngIf"],["color","primary",4,"ngIf"],[1,"row_dos"],["size","12"],[1,"text_name"],["size","12",1,"no_padding_top"],[1,"label_text"],[1,"linea_desglose"],[1,"desglose"],[1,"ion-no-padding"],["size","12",1,"ion-no-padding"],[1,"label_desglose"],[1,"ion-no-padding","top_desglose"],[1,"label_title"],["lines","none",4,"ngFor","ngForOf"],["lines","none",4,"ngIf"],["color","success"],["color","danger"],["color","primary"],["class","unnasignedTicket",4,"ngFor","ngForOf"],[1,"unnasignedTicket"],["expand","block",3,"click"],["lines","none"],[1,"text_name_sin"],[3,"click"],[1,"ion-padding"],[3,"formGroup"],["position","stacked"],["type","text","placeholder","demo@example.com","fill","outline","formControlName","email"],[1,"important-message"],["expand","block",3,"disabled","click"]],template:function(t,a){1&t&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-buttons",2),n._UZ(4,"ion-icon",3),n.qZA()(),n.YNc(5,m,2,0,"ion-title",4),n.qZA()(),n.TgZ(6,"ion-content",5),n.NdJ("ionScroll",function(p){return a.handleScroll(p)}),n.YNc(7,T,50,14,"ion-grid",6),n.qZA(),n.TgZ(8,"ion-modal",7),n.YNc(9,w,19,2,"ng-template"),n.qZA()),2&t&&(n.Q6J("translucent",!0),n.xp6(5),n.Q6J("ngIf",!a.litle_text),n.xp6(1),n.Q6J("scrollEvents",!0),n.xp6(1),n.Q6J("ngIf",a.purchase))},dependencies:[i.YG,i.Sm,i.PM,i.FN,i.wI,i.W2,i.jY,i.Gu,i.gu,i.pK,i.Ie,i.Q$,i.Nd,i.wd,i.sr,i.ki,i.j9,i.YI,s.sg,s.O5,c._Y,c.JJ,c.JL,c.sg,c.u,g.rH,s.uU],styles:["ion-button[_ngcontent-%COMP%]{width:100%}.btn_profile[_ngcontent-%COMP%]{border-radius:32px;background:var(--Primario-nevent, #5B7EF2);display:flex;width:auto;height:55px;justify-content:center;align-items:center;margin:54px 10% 100px}.icon_x[_ngcontent-%COMP%]{margin-left:0}.datos_basicos[_ngcontent-%COMP%]{margin-bottom:24px}ion-item[_ngcontent-%COMP%]   .text_name_sin[_ngcontent-%COMP%]{font-family:Poppins;font-size:11px;font-weight:400;color:#bdbdbd}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#fbfbfb;font-family:Poppins;font-size:16px;font-style:normal;font-weight:600;line-height:24px;margin-left:3%}ion-item[_ngcontent-%COMP%]   .label_profile[_ngcontent-%COMP%]{font-weight:400}ion-item[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{margin-right:3%}app-card-preview[_ngcontent-%COMP%]{width:100%}.ios[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: transparent;--ion-color-base: transparent !important;--opacity: .8;text-align:center}.md[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{text-align:center}.ios[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.text_title_header[_ngcontent-%COMP%]{color:#fbfbfb;font-family:Poppins;font-size:28px;font-style:normal;font-weight:600;line-height:42px}ion-list[_ngcontent-%COMP%], .parraf_p[_ngcontent-%COMP%]{margin-top:10%}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], .parraf_p[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-top:24px}.parraf_p[_ngcontent-%COMP%]{color:#bdbdbd;font-family:Poppins;font-size:16px;font-style:normal;font-weight:400;line-height:normal;padding:0 24px 24px}.color_item_profile[_ngcontent-%COMP%]{--ion-item-background: #161616;padding-left:5%;padding-right:5%;box-shadow:0 4px 4px #00000096;--border-radius: 8px}ion-avatar[_ngcontent-%COMP%]{height:51px;width:51px;margin-top:20px;margin-bottom:20px}.md[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], ion-input[_ngcontent-%COMP%]:hover, ion-input[_ngcontent-%COMP%]:focus, ion-input[_ngcontent-%COMP%]:after{--background: #000;--color: #fff;--border-color: #F2F2F2;width:342px;margin-left:auto;margin-right:auto;--padding-bottom: 15px;--padding-end: 10px;--padding-start: 10px}.input-fill-solid.sc-ion-input-md-h[_ngcontent-%COMP%]{border-color:#fff;border-style:solid;border-radius:8px!important}.label-text-wrapper[_ngcontent-%COMP%]{color:#bdbdbd;font-family:Poppins;font-size:14px;font-style:normal;font-weight:400;line-height:normal}.native-wrapper[_ngcontent-%COMP%]{color:#f2f2f2;font-family:Poppins;font-size:16px;font-style:normal;font-weight:400;line-height:normal}.ios[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], ion-input[_ngcontent-%COMP%]:hover, ion-input[_ngcontent-%COMP%]:focus, ion-input[_ngcontent-%COMP%]:after{--background: #000;--color: #fff;--border-color: #F2F2F2;width:342px;margin-left:auto;margin-right:auto;--padding-bottom: 15px;--padding-end: 10px;--padding-start: 10px}.text_name[_ngcontent-%COMP%]{color:#bdbdbd;font-weight:400;font-size:11px}.desglose[_ngcontent-%COMP%]{margin-left:4%}.col_style[_ngcontent-%COMP%]{background-color:#1d1d1d;text-align:center;display:flex;justify-content:center;text-transform:lowercase;margin-left:4%;margin-right:4%;padding-bottom:2%;padding-top:2%}.icon_check[_ngcontent-%COMP%]{width:12px;height:12px;margin-top:auto;margin-bottom:auto;margin-right:2%;color:#63ae85}.span_icon[_ngcontent-%COMP%]{color:#63ae85;font-size:14px;font-weight:500}.row_dos[_ngcontent-%COMP%]{margin-left:2%;margin-right:2%;margin-top:1%}.linea_desglose[_ngcontent-%COMP%]{background-color:#2a2a2a;width:92%;height:2px;margin:2% 4% 3%}.label_desglose[_ngcontent-%COMP%]{font-size:18px;font-weight:600}.no_padding_top[_ngcontent-%COMP%]{padding-top:0}.label_text[_ngcontent-%COMP%]{font-size:16px;font-weight:400}.top_desglose[_ngcontent-%COMP%]{margin-top:5%}.label_title[_ngcontent-%COMP%]{font-size:14px;font-weight:600}"]}),e})(),children:[]}];let k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[g.Bz.forChild(A),g.Bz]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[i.Pc,s.ez,c.u5,c.UX,d.e,s.ez,k]}),e})()}}]);