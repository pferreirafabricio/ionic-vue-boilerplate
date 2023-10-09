"use strict";(self["webpackChunkapp_boilerplate"]=self["webpackChunkapp_boilerplate"]||[]).push([[681],{7439:function(e,t,r){var n,o,a;r.d(t,{GW:function(){return o},dk:function(){return a},oK:function(){return n}}),function(e){e["Prompt"]="PROMPT",e["Camera"]="CAMERA",e["Photos"]="PHOTOS"}(n||(n={})),function(e){e["Rear"]="REAR",e["Front"]="FRONT"}(o||(o={})),function(e){e["Uri"]="uri",e["Base64"]="base64",e["DataUrl"]="dataUrl"}(a||(a={}))},6077:function(e,t,r){var n=r(614),o=String,a=TypeError;e.exports=function(e){if("object"==typeof e||n(e))return e;throw new a("Can't set "+o(e)+" as a prototype")}},5787:function(e,t,r){var n=r(7976),o=TypeError;e.exports=function(e,t){if(n(t,e))return e;throw new o("Incorrect invocation")}},3013:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,r){var n,o,a,l=r(3013),i=r(9781),u=r(7854),c=r(614),s=r(111),p=r(2597),d=r(648),f=r(6330),m=r(8880),y=r(8052),v=r(7045),g=r(7976),_=r(9518),w=r(7674),S=r(5112),E=r(9711),h=r(9909),A=h.enforce,R=h.get,T=u.Int8Array,x=T&&T.prototype,I=u.Uint8ClampedArray,U=I&&I.prototype,b=T&&_(T),W=x&&_(x),O=Object.prototype,k=u.TypeError,C=S("toStringTag"),D=E("TYPED_ARRAY_TAG"),N="TypedArrayConstructor",z=l&&!!w&&"Opera"!==d(u.opera),Z=!1,B={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},M={BigInt64Array:8,BigUint64Array:8},P=function(e){if(!s(e))return!1;var t=d(e);return"DataView"===t||p(B,t)||p(M,t)},H=function(e){var t=_(e);if(s(t)){var r=R(t);return r&&p(r,N)?r[N]:H(t)}},j=function(e){if(!s(e))return!1;var t=d(e);return p(B,t)||p(M,t)},L=function(e){if(j(e))return e;throw new k("Target is not a typed array")},V=function(e){if(c(e)&&(!w||g(b,e)))return e;throw new k(f(e)+" is not a typed array constructor")},F=function(e,t,r,n){if(i){if(r)for(var o in B){var a=u[o];if(a&&p(a.prototype,e))try{delete a.prototype[e]}catch(l){try{a.prototype[e]=t}catch(c){}}}W[e]&&!r||y(W,e,r?t:z&&x[e]||t,n)}},Y=function(e,t,r){var n,o;if(i){if(w){if(r)for(n in B)if(o=u[n],o&&p(o,e))try{delete o[e]}catch(a){}if(b[e]&&!r)return;try{return y(b,e,r?t:z&&b[e]||t)}catch(a){}}for(n in B)o=u[n],!o||o[e]&&!r||y(o,e,t)}};for(n in B)o=u[n],a=o&&o.prototype,a?A(a)[N]=o:z=!1;for(n in M)o=u[n],a=o&&o.prototype,a&&(A(a)[N]=o);if((!z||!c(b)||b===Function.prototype)&&(b=function(){throw new k("Incorrect invocation")},z))for(n in B)u[n]&&w(u[n],b);if((!z||!W||W===O)&&(W=b.prototype,z))for(n in B)u[n]&&w(u[n].prototype,W);if(z&&_(U)!==W&&w(U,W),i&&!p(W,C))for(n in Z=!0,v(W,C,{configurable:!0,get:function(){return s(this)?this[D]:void 0}}),B)u[n]&&m(u[n],D,n);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:z,TYPED_ARRAY_TAG:Z&&D,aTypedArray:L,aTypedArrayConstructor:V,exportTypedArrayMethod:F,exportTypedArrayStaticMethod:Y,getTypedArrayConstructor:H,isView:P,isTypedArray:j,TypedArray:b,TypedArrayPrototype:W}},7745:function(e,t,r){var n=r(6244);e.exports=function(e,t){var r=0,o=n(t),a=new e(o);while(o>r)a[r]=t[r++];return a}},1843:function(e,t,r){var n=r(6244);e.exports=function(e,t){for(var r=n(e),o=new t(r),a=0;a<r;a++)o[a]=e[r-a-1];return o}},1572:function(e,t,r){var n=r(6244),o=r(9303),a=RangeError;e.exports=function(e,t,r,l){var i=n(e),u=o(r),c=u<0?i+u:u;if(c>=i||c<0)throw new a("Incorrect index");for(var s=new t(i),p=0;p<i;p++)s[p]=p===c?l:e[p];return s}},648:function(e,t,r){var n=r(1694),o=r(614),a=r(4326),l=r(5112),i=l("toStringTag"),u=Object,c="Arguments"===a(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(r){}};e.exports=n?a:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=s(t=u(e),i))?r:c?a(t):"Object"===(n=a(t))&&o(t.callee)?"Arguments":n}},3918:function(e,t,r){var n=r(7293);e.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},7045:function(e,t,r){var n=r(6339),o=r(3070);e.exports=function(e,t,r){return r.get&&n(r.get,t,{getter:!0}),r.set&&n(r.set,t,{setter:!0}),o.f(e,t,r)}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},1060:function(e,t,r){var n=r(1702),o=Error,a=n("".replace),l=function(e){return String(new o(e).stack)}("zxcasd"),i=/\n\s*at [^:]*:[^\n]*/,u=i.test(l);e.exports=function(e,t){if(u&&"string"==typeof e&&!o.prepareStackTrace)while(t--)e=a(e,i,"");return e}},5668:function(e,t,r){var n=r(1702),o=r(9662);e.exports=function(e,t,r){try{return n(o(Object.getOwnPropertyDescriptor(e,t)[r]))}catch(a){}}},9587:function(e,t,r){var n=r(614),o=r(111),a=r(7674);e.exports=function(e,t,r){var l,i;return a&&n(l=t.constructor)&&l!==r&&o(i=l.prototype)&&i!==r.prototype&&a(e,i),e}},4067:function(e,t,r){var n=r(648);e.exports=function(e){var t=n(e);return"BigInt64Array"===t||"BigUint64Array"===t}},6277:function(e,t,r){var n=r(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:n(e)}},9518:function(e,t,r){var n=r(2597),o=r(614),a=r(7908),l=r(6200),i=r(3918),u=l("IE_PROTO"),c=Object,s=c.prototype;e.exports=i?c.getPrototypeOf:function(e){var t=a(e);if(n(t,u))return t[u];var r=t.constructor;return o(r)&&t instanceof r?r.prototype:t instanceof c?s:null}},7674:function(e,t,r){var n=r(5668),o=r(9670),a=r(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{e=n(Object.prototype,"__proto__","set"),e(r,[]),t=r instanceof Array}catch(l){}return function(r,n){return o(r),a(n),t?e(r,n):r.__proto__=n,r}}():void 0)},4599:function(e,t,r){var n=r(7593),o=TypeError;e.exports=function(e){var t=n(e,"number");if("number"==typeof t)throw new o("Can't convert number to bigint");return BigInt(t)}},1694:function(e,t,r){var n=r(5112),o=n("toStringTag"),a={};a[o]="z",e.exports="[object z]"===String(a)},1340:function(e,t,r){var n=r(648),o=String;e.exports=function(e){if("Symbol"===n(e))throw new TypeError("Cannot convert a Symbol value to a string");return o(e)}},1439:function(e,t,r){var n=r(1843),o=r(260),a=o.aTypedArray,l=o.exportTypedArrayMethod,i=o.getTypedArrayConstructor;l("toReversed",(function(){return n(a(this),i(this))}))},7585:function(e,t,r){var n=r(260),o=r(1702),a=r(9662),l=r(7745),i=n.aTypedArray,u=n.getTypedArrayConstructor,c=n.exportTypedArrayMethod,s=o(n.TypedArrayPrototype.sort);c("toSorted",(function(e){void 0!==e&&a(e);var t=i(this),r=l(u(t),t);return s(r,e)}))},5315:function(e,t,r){var n=r(1572),o=r(260),a=r(4067),l=r(9303),i=r(4599),u=o.aTypedArray,c=o.getTypedArrayConstructor,s=o.exportTypedArrayMethod,p=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();s("with",{with:function(e,t){var r=u(this),o=l(e),s=a(r)?i(t):+t;return n(r,c(r),o,s)}}["with"],!p)},2801:function(e,t,r){var n=r(2109),o=r(7854),a=r(5005),l=r(9114),i=r(3070).f,u=r(2597),c=r(5787),s=r(9587),p=r(6277),d=r(3678),f=r(1060),m=r(9781),y=r(1913),v="DOMException",g=a("Error"),_=a(v),w=function(){c(this,S);var e=arguments.length,t=p(e<1?void 0:arguments[0]),r=p(e<2?void 0:arguments[1],"Error"),n=new _(t,r),o=new g(t);return o.name=v,i(n,"stack",l(1,f(o.stack,1))),s(n,this,w),n},S=w.prototype=_.prototype,E="stack"in new g(v),h="stack"in new _(1,2),A=_&&m&&Object.getOwnPropertyDescriptor(o,v),R=!!A&&!(A.writable&&A.configurable),T=E&&!R&&!h;n({global:!0,constructor:!0,forced:y||T},{DOMException:T?w:_});var x=a(v),I=x.prototype;if(I.constructor!==x)for(var U in y||i(I,"constructor",l(1,x)),d)if(u(d,U)){var b=d[U],W=b.s;u(x,W)||i(x,W,l(6,b.c))}},3637:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(2442);function o(){async function e(e,t,r="top",o=3e3){const a=await n.Mn.create({message:e,position:r,color:t,duration:o});return a.present()}return{openToast:e}}},34:function(e,t,r){r.d(t,{F:function(){return o}});var n=r(9876);const o=(0,n.Q_)("general",{getters:{getImagesAddress(){return"https://pferreirafabricio.github.io/ionic-vue-boilerplate"},getApiUrl(){return"https://pferreirafabricio.github.io/ionic-vue-boilerplate"},getWhatsappTelephone(){return"+559999999999"},getContactEmail(){return"pferreirafabricio@gmail.com"}}})},2345:function(e,t,r){r.d(t,{Z:function(){return p}});r(7658);var n=r(6252),o=r(2262),a=r(3577),l=r(2442),i=r(2201),u={__name:"Button",props:{color:{type:String,default:"primary"},text:{type:String,required:!1},expand:{type:String,default:"block"},size:{type:String,default:"medium"},icon:{default:null,required:!1},iosIcon:{default:null,required:!1},mdIcon:{default:null,required:!1},isLoading:{type:Boolean,default:!1},spinnerName:{type:String,default:"crescent"},iconOnly:{type:Boolean,default:!1},fill:{type:String,default:"solid"},to:{type:[String,Object],required:!1},download:{type:Boolean,default:!1},href:{type:String,required:!1}},setup(e){const t=e,{icon:r,iosIcon:u,mdIcon:c,to:s}=(0,o.BK)(t),p=(0,n.Fl)((()=>r.value||u.value||c.value)),d=(0,i.tv)();function f(){s.value&&d.push(s.value)}return(t,i)=>((0,n.wg)(),(0,n.j4)((0,o.SU)(l.YG),{class:"btn ion-activatable ripple-parent",color:e.color,expand:e.expand,size:e.size,disabled:e.isLoading,fill:e.fill,download:e.download,href:e.href,onClick:i[0]||(i[0]=e=>!!(0,o.SU)(s)&&f())},{default:(0,n.w5)((()=>[e.text&&!e.iconOnly?((0,n.wg)(),(0,n.j4)((0,o.SU)(l.Q$),{key:0,class:(0,a.C_)([p.value?"ml-2":""])},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(e.text),1)])),_:1},8,["class"])):(0,n.kq)("",!0),p.value?((0,n.wg)(),(0,n.j4)((0,o.SU)(l.gu),{key:1,slot:e.iconOnly?"icon-only":"start",ios:(0,o.SU)(u)||(0,o.SU)(r),md:(0,o.SU)(c)||(0,o.SU)(r)},null,8,["slot","ios","md"])):(0,n.kq)("",!0),e.isLoading?((0,n.wg)(),(0,n.j4)((0,o.SU)(l.PQ),{key:2,slot:"end",class:(0,a.C_)(e.iconOnly?"":"ion-margin-start"),name:e.spinnerName},null,8,["class","name"])):(0,n.kq)("",!0),(0,n.Wm)((0,o.SU)(l.H$),{type:"unbounded"})])),_:1},8,["color","expand","size","disabled","fill","download","href"]))}},c=r(3744);const s=(0,c.Z)(u,[["__scopeId","data-v-91873b5e"]]);var p=s},6110:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(6252),o=r(2262),a=r(2442),l=r(34);const i="assets/vectors/blank.svg";var u={__name:"Image",props:{src:{type:String,required:!1}},setup(e){const t=(0,l.F)(),r=(0,n.Fl)((()=>t.getImagesAddress)),u=(0,o.iH)(!1);return(t,l)=>((0,n.wg)(),(0,n.j4)((0,o.SU)(a.Xz),{src:!u.value&&e.src?`${r.value}/${e.src}`:i,onIonError:l[0]||(l[0]=e=>u.value=!0)},null,8,["src"]))}};const c=u;var s=c},4411:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(6252),o=r(2262),a=r(2442);const l={class:"d-flex flex-column"};var i={__name:"NoContent",props:{text:{type:String,default:"Not found &#x1F622"},image:{type:String,default:"assets/vectors/join.svg"}},setup(e){return(t,r)=>((0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)((0,o.SU)(a.Xz),{src:e.image},null,8,["src"]),(0,n.Wm)((0,o.SU)(a.yW),{class:"ion-text-center mt-4",innerHTML:e.text},null,8,["innerHTML"])]))}};const u=i;var c=u},7188:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(6252),o=r(8903),a=r(2262),l=r(2345),i=r(34),u={__name:"SendMessage",props:{message:{type:String,required:!0},iconOnly:{type:Boolean,default:!1},buttonText:{type:String,default:"Send message"},size:{type:String,default:"medium"}},setup(e){const t=(0,i.F)(),r=(0,n.Fl)((()=>t.getWhatsappTelephone)),u=(0,a.iH)({logoWhatsapp:o.tl2});return(t,o)=>((0,n.wg)(),(0,n.j4)(l.Z,{color:"success",text:e.buttonText,href:`https://wa.me/${r.value}?text=${e.message}`,size:e.size,icon:u.value.logoWhatsapp,"icon-only":e.iconOnly},null,8,["text","href","size","icon","icon-only"]))}},c=r(3744);const s=(0,c.Z)(u,[["__scopeId","data-v-9836ebf0"]]);var p=s},1681:function(e,t,r){r.r(t),r.d(t,{default:function(){return K}});var n=r(6252),o=r(2262),a=r(2442),l=r(8903),i=r(2345);const u=(0,n._)("h3",{class:"font-weight-bold"},"Buttons",-1),c=(0,n._)("hr",null,null,-1),s=(0,n._)("hr",null,null,-1),p=(0,n._)("hr",null,null,-1);var d={__name:"Buttons",setup(e){const t=(0,o.iH)({save:l.a1L,arrowRedo:l.Iou,cloudDownload:l.uQl});return(e,r)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[u,(0,n.Wm)(i.Z,{text:"Simple button"}),(0,n.Wm)(i.Z,{text:"With icon",icon:t.value.save,color:"danger"},null,8,["icon"]),c,(0,n.Wm)(i.Z,{"is-loading":"",text:"Loading",icon:t.value.save,color:"success"},null,8,["icon"]),(0,n.Wm)(i.Z,{"is-loading":"",text:"Loading",icon:t.value.save,"spinner-name":"dots",color:"success"},null,8,["icon"]),s,(0,n.Wm)(i.Z,{text:"Router redirect",icon:t.value.arrowRedo,color:"medium",to:{name:"contact"}},null,8,["icon"]),(0,n.Wm)(i.Z,{"icon-only":"",icon:t.value.save,color:"secondary"},null,8,["icon"]),p,(0,n.Wm)(i.Z,{text:"Small",icon:t.value.save,color:"dark",size:"small"},null,8,["icon"]),(0,n.Wm)(i.Z,{text:"Large",icon:t.value.save,color:"warning",size:"large"},null,8,["icon"])],64))}};const f=d;var m=f,y=r(3577);const v=["href"],g={class:"ion-ion-color-dark"};var _={__name:"NumberWithLink",props:{telephone:{type:String,required:!0},message:{type:String,default:""}},setup(e){return(t,r)=>((0,n.wg)(),(0,n.iD)("a",{href:`https://wa.me/${e.telephone}?text=${e.message}`},[(0,n._)("span",g,(0,y.zw)(e.telephone),1),(0,n.Wm)((0,o.SU)(a.gu),{icon:(0,o.SU)(l.gmo),class:"ml-1"},null,8,["icon"])],8,v))}},w=r(3744);const S=(0,w.Z)(_,[["__scopeId","data-v-1aaf2f64"]]);var E=S,h=r(7188),A=r(34),R={__name:"Whatsapp",setup(e){const t=(0,A.F)(),r=(0,n.Fl)((()=>t.getWhatsappTelephone));return(e,t)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(h.Z,{class:"mb-2",message:"Hi"}),(0,n.Wm)(E,{message:"Hi",telephone:r.value},null,8,["telephone"])],64))}};const T=R;var x=T,I={__name:"Divider",setup(e){return(e,t)=>((0,n.wg)(),(0,n.j4)((0,o.SU)(a.Nd),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(a.wI),{class:"separator"},{default:(0,n.w5)((()=>[(0,n.WI)(e.$slots,"default")])),_:3})])),_:3}))}};const U=(0,w.Z)(I,[["__scopeId","data-v-69e7e4a4"]]);var b=U,W=r(2278),O=r(6110),k=r(8122),C=r(4411),D=(r(2801),r(1439),r(7585),r(5315),r(9895)),N=r(7439);const z=(0,D.fo)("Camera",{web:()=>r.e(806).then(r.bind(r,6806)).then((e=>new e.CameraWeb))});function Z(){async function e(e=N.dk.DataUrl,t=N.oK.Prompt,r=90,n=!0){const o=await z.getPhoto({resultType:e,source:t,quality:r,allowEditing:n});return e===N.dk.DataUrl?o.dataUrl:e===N.dk.Base64?o.base64String:o}return{takePhoto:e}}var B={__name:"File",props:{openCamera:{type:Boolean,default:!1},label:{type:String,default:"Select files"},accept:{type:String,default:"image/*"},multiple:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},icon:{default:l.tjo},iconOnly:{type:Boolean,default:!1},size:{type:String,default:"medium"}},emits:["files"],setup(e,{emit:t}){const{takePhoto:r}=Z(),l=(0,o.iH)(null);function u(){const e=l.value.$el.getElementsByTagName("input")[0];e.click()}async function c(){const e=await r(),n=p(e);t("files",[n]||0)}function s(e){t("files",e.target.files||[])}function p(e){const t=e.split(","),r=t[0].indexOf("base64")>=0?atob(t[1]):decodeURI(t[1]),n=t[0].split(":")[1].split(";")[0],o=new Uint8Array(r.length);for(let a=0;a<r.length;a++)o[a]=r.charCodeAt(a);return new Blob([o],{type:n})}return(t,r)=>((0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(i.Z,{size:e.size,text:e.iconOnly?"":e.label,icon:e.icon,"icon-only":e.iconOnly,"is-loading":e.loading,onClick:r[0]||(r[0]=t=>e.openCamera?c():u())},null,8,["size","text","icon","icon-only","is-loading"]),(0,n.Wm)((0,o.SU)(a.pK),{ref_key:"fileInput",ref:l,hidden:"",class:"d-none",type:"file",multiple:e.multiple,accept:`${e.accept};capture=camera`,onChange:s},null,8,["multiple","accept"])]))}};const M=B;var P=M,H={__name:"SelectExample",props:{okText:{type:String,default:"Select"},cancelText:{type:String,default:"Cancel"},modelValue:{required:!0},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},label:{type:String,default:"Select example"},placeholder:{type:String,default:"Select an item"},errorMessage:{type:String,default:"Select a value"}},emits:["update:modelValue"],setup(e,{emit:t}){const r=e,u=(0,o.iH)([{code:1,name:"Item A"},{code:2,name:"Item B"}]),c=(0,o.iH)({value:{}}),s=(0,o.iH)({value:null}),{modelValue:p}=(0,o.BK)(r);function d(){c.value.value=null,t("update:modelValue",c.value),s.value.value=null}return(0,n.YP)(p,(e=>{c.value=e||{}})),(0,n.bv)((()=>{c.value=p.value||{}})),(r,p)=>{const f=(0,n.up)("error-message");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)((0,o.SU)(a.Ie),{class:"container"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(a.t9),{modelValue:c.value.value,"onUpdate:modelValue":p[0]||(p[0]=e=>c.value.value=e),label:e.label,"ok-text":e.okText,"cancel-text":e.cancelText,placeholder:e.placeholder,multiple:e.multiple,disabled:e.disabled,onIonChange:p[1]||(p[1]=()=>{t("update:modelValue",c.value.value),s.value.value=null})},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(u.value,((e,t)=>((0,n.wg)(),(0,n.j4)((0,o.SU)(a.n0),{key:t,value:e.code},{default:(0,n.w5)((()=>[(0,n.Uk)((0,y.zw)(e.name),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue","label","ok-text","cancel-text","placeholder","multiple","disabled"]),(0,n.Wm)(i.Z,{class:"p-0 m-0",color:"dark",size:"small",fill:"clear",icon:(0,o.SU)(l.xvD),"icon-only":!0,onClick:p[2]||(p[2]=e=>d())},null,8,["icon"])])),_:1}),(0,n.Wm)(f,{class:"mt-1",text:s.value.value},null,8,["text"])],64)}}};const j=(0,w.Z)(H,[["__scopeId","data-v-b74be732"]]);var L=j,V=r(3637);const F=(0,n._)("h2",null,"Home",-1),Y=(0,n._)("kbd",null,"ion-img",-1);var q={__name:"Index",setup(e){const{openToast:t}=(0,V.Z)(),r=(0,o.iH)({selectExample:{}});return(e,l)=>{const u=(0,n.up)("base-layout");return(0,n.wg)(),(0,n.j4)(u,null,{default:(0,n.w5)((()=>[F,(0,n.Wm)((0,o.SU)(a.jY),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(a.Nd),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(a.wI),{size:"12"},{default:(0,n.w5)((()=>[(0,n.Wm)(m)])),_:1}),(0,n.Wm)((0,o.SU)(a.wI),{size:"12"},{default:(0,n.w5)((()=>[(0,n.Wm)(b,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Divider component")])),_:1})])),_:1}),(0,n.Wm)((0,o.SU)(a.wI),{size:"12"},{default:(0,n.w5)((()=>[(0,n.Wm)(W.Z,{text:"Error message component"})])),_:1}),(0,n.Wm)((0,o.SU)(a.wI),{size:"12",class:"my-3"},{default:(0,n.w5)((()=>[(0,n.Wm)(O.Z),(0,n.Wm)((0,o.SU)(a.yW),{class:"fs-14 text-center",color:"medium"},{default:(0,n.w5)((()=>[Y,(0,n.Uk)(" component with default image in case of errors on loading ")])),_:1})])),_:1}),(0,n.Wm)((0,o.SU)(a.wI),{size:"12",class:"d-flex align-items-center"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(a.yW),{class:"mr-2"},{default:(0,n.w5)((()=>[(0,n.Uk)("Loading component")])),_:1}),(0,n.Wm)(k.Z,{loading:""})])),_:1}),(0,n.Wm)((0,o.SU)(a.wI),{size:"12",class:"my-3"},{default:(0,n.w5)((()=>[(0,n.Wm)(C.Z,{text:"Content not found 😢"})])),_:1}),(0,n.Wm)((0,o.SU)(a.wI),{size:"12"},{default:(0,n.w5)((()=>[(0,n.Wm)(b,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Whatsapp components")])),_:1}),(0,n.Wm)(x)])),_:1}),(0,n.Wm)((0,o.SU)(a.wI),{size:"12"},{default:(0,n.w5)((()=>[(0,n.Wm)(b,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Inputs")])),_:1}),(0,n.Wm)(P,{class:"mb-2"}),(0,n.Wm)(P,{"open-camera":"",label:"Open camera and gallery",class:"mb-2"}),(0,n.Wm)(L,{modelValue:(0,o.SU)(r).selectExample,"onUpdate:modelValue":l[0]||(l[0]=e=>(0,o.SU)(r).selectExample=e),multiple:""},null,8,["modelValue"])])),_:1}),(0,n.Wm)((0,o.SU)(a.wI),{size:"12"},{default:(0,n.w5)((()=>[(0,n.Wm)(b,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Composables")])),_:1}),(0,n.Wm)(i.Z,{text:"Open toast",color:"tertiary",onClick:l[1]||(l[1]=e=>(0,o.SU)(t)("Toast with composition API","tertiary"))})])),_:1})])),_:1})])),_:1})])),_:1})}}};const $=q;var K=$}}]);
//# sourceMappingURL=681.1fd83471.js.map