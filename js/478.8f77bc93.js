"use strict";(self["webpackChunkapp_boilerplate"]=self["webpackChunkapp_boilerplate"]||[]).push([[478],{3637:function(e,a,t){t.d(a,{Z:function(){return l}});var n=t(7133);function l(){async function e(e,a,t="top",l=3e3){const o=await n.Mn.create({message:e,position:t,color:a,duration:l});return o.present()}return{openToast:e}}},2345:function(e,a,t){t.d(a,{Z:function(){return c}});t(7658);var n=t(6252),l=t(2262),o=t(3577),i=t(7133),s=t(2201),u={__name:"Button",props:{color:{type:String,default:"primary"},text:{type:String,required:!1},expand:{type:String,default:"block"},size:{type:String,default:"medium"},icon:{default:null,required:!1},iosIcon:{default:null,required:!1},mdIcon:{default:null,required:!1},isLoading:{type:Boolean,default:!1},spinnerName:{type:String,default:"crescent"},iconOnly:{type:Boolean,default:!1},fill:{type:String,default:"solid"},to:{type:[String,Object],required:!1},download:{type:Boolean,default:!1},href:{type:String,required:!1}},setup(e){const a=e,{icon:t,iosIcon:u,mdIcon:r,to:d}=(0,l.BK)(a),c=(0,n.Fl)((()=>t.value||u.value||r.value)),p=(0,s.tv)();function m(){d.value&&p.push(d.value)}return(a,s)=>((0,n.wg)(),(0,n.j4)((0,l.SU)(i.YG),{class:"btn ion-activatable ripple-parent",color:e.color,expand:e.expand,size:e.size,disabled:e.isLoading,fill:e.fill,download:e.download,href:e.href,onClick:s[0]||(s[0]=e=>!!(0,l.SU)(d)&&m())},{default:(0,n.w5)((()=>[e.text&&!e.iconOnly?((0,n.wg)(),(0,n.j4)((0,l.SU)(i.Q$),{key:0,class:(0,o.C_)([c.value?"ml-2":""])},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(e.text),1)])),_:1},8,["class"])):(0,n.kq)("",!0),c.value?((0,n.wg)(),(0,n.j4)((0,l.SU)(i.gu),{key:1,slot:e.iconOnly?"icon-only":"start",ios:(0,l.SU)(u)||(0,l.SU)(t),md:(0,l.SU)(r)||(0,l.SU)(t)},null,8,["slot","ios","md"])):(0,n.kq)("",!0),e.isLoading?((0,n.wg)(),(0,n.j4)((0,l.SU)(i.PQ),{key:2,slot:"end",class:(0,o.C_)(e.iconOnly?"":"ion-margin-start"),name:e.spinnerName},null,8,["class","name"])):(0,n.kq)("",!0),(0,n.Wm)((0,l.SU)(i.H$),{type:"unbounded"})])),_:1},8,["color","expand","size","disabled","fill","download","href"]))}},r=t(3744);const d=(0,r.Z)(u,[["__scopeId","data-v-91873b5e"]]);var c=d},5478:function(e,a,t){t.r(a),t.d(a,{default:function(){return b}});t(7658);var n=t(6252),l=t(2262),o=t(8903),i=t(7133),s=t(2201),u=t(2345),r=t(6110),d=t(7877),c=t(4571),p=t(9876),m=t(9985);function f(e){let a="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=t.length;let l=0;while(l<e)a+=t.charAt(Math.floor(Math.random()*n)),l+=1;return a}const w=(0,p.Q_)("login",{actions:{async setToken(e){await c.u.set({key:"token",value:e})},async setUserData(e){await c.u.set({key:"user",value:JSON.stringify({userId:e.id,userType:e.typeUser,userName:e.userName})})},async login(e){return"admin"===e.email&&"admin"===e.password?await this.fakeLogin():d.Z.post("/login",e).then((async e=>(await this.setToken(e.token),await this.setUserData(e.data),e.data))).catch((e=>e.response))},async fakeLogin(){return await this.setToken(f(20)),await this.setUserData({id:1,typeUser:m.Z.ADMINISTRATOR,userName:"Admin"}),{data:{userType:m.Z.ADMINISTRATOR}}}}});var y=t(4136);function g(){const e=(0,s.tv)();function a(a,t,n=!1){if(!n)return void e.push({name:y.Z[a]||"logout",params:t});const l=e.resolve({name:y.Z[a]||"logout",params:t});window.location=l.href}return{redirectTo:a}}var v=t(3637);function S(){const{openToast:e}=(0,v.Z)(),{redirectTo:a}=g(),t=w();async function n(n){const l={email:n.email,password:n.password};t.login(l).then((t=>(e("Logged with success","success","top"),a(t.data.userType,{anyCustomParams:t.customParams}),Promise.resolve()))).catch((a=>{e("Something was wrong on login","danger","top"),Promise.reject(a)}))}return{userLogin:n,openToast:e,redirectTo:a}}var U=t(2744),h={__name:"Login",setup(e){const{userLogin:a}=S(),t=(0,s.tv)(),d=(0,l.iH)(!1),c=(0,l.iH)({mail:o.X5o,key:o.Jy5,eye:o.iyy,eyeOff:o.YaL,logIn:o.Ib8,enterOutline:o.KFQ}),p=(0,l.iH)({email:"admin",password:"admin"}),m=(0,l.iH)({email:"",password:""}),f=(0,l.iH)(!1);function w(){y()&&(f.value=!0,a(p.value).then((()=>{U.Z.emit("logged")})).finally((()=>{f.value=!1})))}function y(){let e=!0;return p.value.email||(m.value.email="Email invalid",e=!1),p.value.password||(m.value.password="Password invalid",e=!1),e}function g(){t.push({name:"recovery-password"})}return(e,a)=>{const t=(0,n.up)("error-message"),o=(0,n.up)("base-layout");return(0,n.wg)(),(0,n.j4)(o,{"page-default-back-link":"/home","show-menu-button":!1},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(i.Nd),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(i.wI),{size:"12"},{default:(0,n.w5)((()=>[(0,n.Wm)(r.Z,{style:{height:"200px"},src:"assets/icon/logo.png"})])),_:1})])),_:1}),(0,n.Wm)((0,l.SU)(i.Nd),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(i.wI),{size:"12"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(i.Ie),{class:"form-field"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(i.gu),{slot:"start",icon:c.value.mail},null,8,["icon"]),(0,n.Wm)((0,l.SU)(i.pK),{modelValue:p.value.email,"onUpdate:modelValue":a[0]||(a[0]=e=>p.value.email=e),"clear-input":"",required:"",label:"E-mail",type:"email","label-placement":"floating",tabindex:"1",inputmode:"email",placeholder:"admin",onInput:a[1]||(a[1]=e=>m.value.email="")},null,8,["modelValue"])])),_:1}),(0,n.Wm)(t,{text:m.value.email},null,8,["text"])])),_:1}),(0,n.Wm)((0,l.SU)(i.wI),{size:"12"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(i.Ie),{class:"form-field"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(i.gu),{slot:"start",icon:c.value.key},null,8,["icon"]),(0,n.Wm)((0,l.SU)(i.pK),{modelValue:p.value.password,"onUpdate:modelValue":a[2]||(a[2]=e=>p.value.password=e),required:"",name:"password",label:"Password",tabindex:"2","label-placement":"floating",placeholder:"admin","clear-input":"",type:d.value?"text":"password",onInput:a[3]||(a[3]=e=>m.value.password="")},null,8,["modelValue","type"]),(0,n.Wm)((0,l.SU)(i.gu),{slot:"end",icon:d.value?c.value.eyeOff:c.value.eye,class:"pointer",onClick:a[4]||(a[4]=e=>d.value=!d.value)},null,8,["icon"])])),_:1}),(0,n.Wm)(t,{text:m.value.password},null,8,["text"])])),_:1})])),_:1}),(0,n.Wm)((0,l.SU)(i.Nd),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(i.wI),{size:"12"},{default:(0,n.w5)((()=>[(0,n.Wm)(u.Z,{color:"primary",text:"Login",icon:c.value.enterOutline,"is-loading":f.value,onClick:a[5]||(a[5]=e=>w())},null,8,["icon","is-loading"])])),_:1})])),_:1}),(0,n.Wm)((0,l.SU)(i.Nd),{class:"ion-text-center"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(i.wI),{size:"12"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(i.yW),{color:"tertiary",class:"pointer",onClick:a[6]||(a[6]=e=>g())},{default:(0,n.w5)((()=>[(0,n.Uk)(" Forgot password? ")])),_:1})])),_:1})])),_:1})])),_:1})}}},k=t(3744);const _=(0,k.Z)(h,[["__scopeId","data-v-c5eb3ed8"]]);var b=_}}]);
//# sourceMappingURL=478.8f77bc93.js.map