"use strict";(self["webpackChunkapp_boilerplate"]=self["webpackChunkapp_boilerplate"]||[]).push([[110],{3637:function(e,n,t){t.d(n,{Z:function(){return a}});var l=t(305);function a(){async function e(e,n,t="top",a=3e3){const o=await l.Mn.create({message:e,position:t,color:n,duration:a});return o.present()}return{openToast:e}}},2345:function(e,n,t){t.d(n,{Z:function(){return c}});t(7658);var l=t(6252),a=t(2262),o=t(3577),i=t(305),r=t(2201),u={__name:"Button",props:{color:{type:String,default:"primary"},text:{type:String,required:!1},expand:{type:String,default:"block"},size:{type:String,default:"medium"},icon:{default:null,required:!1},iosIcon:{default:null,required:!1},mdIcon:{default:null,required:!1},isLoading:{type:Boolean,default:!1},spinnerName:{type:String,default:"crescent"},iconOnly:{type:Boolean,default:!1},fill:{type:String,default:"solid"},to:{type:[String,Object],required:!1},download:{type:Boolean,default:!1},href:{type:String,required:!1}},setup(e){const n=e,{icon:t,iosIcon:u,mdIcon:s,to:d}=(0,a.BK)(n),c=(0,l.Fl)((()=>t.value||u.value||s.value)),p=(0,r.tv)();function m(){d.value&&p.push(d.value)}return(n,r)=>((0,l.wg)(),(0,l.j4)((0,a.SU)(i.YG),{class:"btn ion-activatable ripple-parent",color:e.color,expand:e.expand,size:e.size,disabled:e.isLoading,fill:e.fill,download:e.download,href:e.href,onClick:r[0]||(r[0]=e=>!!(0,a.SU)(d)&&m())},{default:(0,l.w5)((()=>[e.text&&!e.iconOnly?((0,l.wg)(),(0,l.j4)((0,a.SU)(i.Q$),{key:0,class:(0,o.C_)([c.value?"ml-2":""])},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.text),1)])),_:1},8,["class"])):(0,l.kq)("",!0),c.value?((0,l.wg)(),(0,l.j4)((0,a.SU)(i.gu),{key:1,slot:e.iconOnly?"icon-only":"start",ios:(0,a.SU)(u)||(0,a.SU)(t),md:(0,a.SU)(s)||(0,a.SU)(t)},null,8,["slot","ios","md"])):(0,l.kq)("",!0),e.isLoading?((0,l.wg)(),(0,l.j4)((0,a.SU)(i.PQ),{key:2,slot:"end",class:(0,o.C_)(e.iconOnly?"":"ion-margin-start"),name:e.spinnerName},null,8,["class","name"])):(0,l.kq)("",!0),(0,l.Wm)((0,a.SU)(i.H$),{type:"unbounded"})])),_:1},8,["color","expand","size","disabled","fill","download","href"]))}},s=t(3744);const d=(0,s.Z)(u,[["__scopeId","data-v-91873b5e"]]);var c=d},4411:function(e,n,t){t.d(n,{Z:function(){return s}});var l=t(6252),a=t(2262),o=t(305);const i={class:"d-flex flex-column"};var r={__name:"NoContent",props:{text:{type:String,default:"Not found &#x1F622"},image:{type:String,default:"assets/vectors/join.svg"}},setup(e){return(n,t)=>((0,l.wg)(),(0,l.iD)("div",i,[(0,l.Wm)((0,a.SU)(o.Xz),{src:e.image},null,8,["src"]),(0,l.Wm)((0,a.SU)(o.yW),{class:"ion-text-center mt-4",innerHTML:e.text},null,8,["innerHTML"])]))}};const u=r;var s=u},9110:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var l=t(6252),a=t(2262),o=t(305),i=t(3637),r=t(2345),u=t(4411),s=t(2094);const d={key:0};var c={__name:"RecoveryPassword",setup(e){const n=(0,s.L)(),{openToast:t}=(0,i.Z)(),c=(0,a.iH)(""),p=(0,a.iH)(!1),m=(0,a.iH)(!1),f=(0,a.iH)({email:""});function v(){c.value?(m.value=!0,n.sendRecoveryPasswordEmail(c.value).then((()=>{t("Recover email sent","success"),p.value=!0})).catch((()=>{t("Something was wrong to send the recover email","danger")})).finally((()=>{m.value=!1}))):f.value.email="Invalid e-mail"}return(e,n)=>{const t=(0,l.up)("error-message"),i=(0,l.up)("base-layout");return(0,l.wg)(),(0,l.j4)(i,{"page-default-back-link":"/login","page-title":"Recovery password","show-menu-button":!1},{default:(0,l.w5)((()=>[p.value?((0,l.wg)(),(0,l.j4)(u.Z,{key:1,image:"assets/vectors/email-sent.svg",text:`A password recovery email has just been sent to the address <b>${c.value}</b> 😉`},null,8,["text"])):((0,l.wg)(),(0,l.iD)("div",d,[(0,l.Wm)((0,a.SU)(o.Ie),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(o.pK),{modelValue:c.value,"onUpdate:modelValue":n[0]||(n[0]=e=>c.value=e),required:"","clear-input":"",label:"E-mail","label-placement":"floating",type:"email",onInput:n[1]||(n[1]=e=>f.value.email="")},null,8,["modelValue"])])),_:1}),(0,l.Wm)(t,{text:f.value.email},null,8,["text"]),(0,l.Wm)(r.Z,{class:"ion-margin-top",text:"Recover","is-loading":m.value,onClick:n[2]||(n[2]=e=>v())},null,8,["is-loading"])]))])),_:1})}}};const p=c;var m=p}}]);
//# sourceMappingURL=110.066e1bd8.js.map