import{V as x,a as p,_ as b,b as V}from"./VBreadcrumbs-a0dcaf01.js";import{d as h,o as m,c as u,w as s,a as e,s as t,y as o,A as _,q as y,j as l,ay as g,z as f,Y as w,aK as k}from"./index-26060de9.js";import{V as C}from"./VMain-23ed39b7.js";import{V as v}from"./VCard-f5223736.js";import{V as c}from"./VTextField-9d79530e.js";import{V as B,a as r}from"./VRow-d42d525d.js";import"./VField-94824899.js";import"./VInput-146aec74.js";const $="/eicca/assets/3n3d-54fc7a18.png";const I={class:"t-box my-0"},N=t("div",{class:"topline d-flex align-center py-0"},[t("img",{src:b,alt:"Point"}),t("h3",null,"會員登入")],-1),T=t("img",{src:V,alt:"Point"},null,-1),j={class:"linebox px-0 mx-0"},F={class:"st1"},L={class:"st2"},P=t("img",{src:$,alt:""},null,-1),q={class:"py-12 text-center"},z=t("div",{class:"text-h4 font-weight-bold"},"您已成功登入",-1),A={class:"pa-4 text-end"},D={data:()=>({visible:!1})},Q=Object.assign(D,{__name:"Login",setup(K){const i=h(!0);return(n,a)=>(m(),u(C,{class:"home26"},{default:s(()=>[e(_,{class:"custom-container pt-13 pb-15 px-0"},{default:s(()=>[t("div",I,[N,e(x,{class:"pt-2 px-0 py-0"},{default:s(()=>[e(p,{to:"/",class:"ps-15 pe-4 py-0 top1"},{default:s(()=>[T]),_:1}),e(p,{"active-color":"primary",to:"/login",class:"ps-15 pe-4 py-2 top3"},{default:s(()=>[o("會員登入")]),_:1})]),_:1})])]),_:1}),e(_,{class:"custom-container2 px-0"},{default:s(()=>[e(v,{class:"mx-auto pa-12 pb-8 card",elevation:"0"},{default:s(()=>[e(c,{placeholder:"請輸入帳號","prepend-inner-icon":"mdi-account"}),e(c,{"append-inner-icon":n.visible?"mdi-eye-off":"mdi-eye",type:n.visible?"text":"password",placeholder:"請輸入密碼","prepend-inner-icon":"mdi-lock-outline","onClick:appendInner":a[0]||(a[0]=d=>n.visible=!n.visible)},null,8,["append-inner-icon","type"]),t("div",j,[t("div",F,[e(c,{class:"pt-5 mx-0 w-100",placeholder:"請輸入驗證碼"})]),t("div",L,[e(y,{class:"ps-4",width:"100%"},{default:s(()=>[P]),_:1})])]),e(l,{block:"",class:"mb-8 btns mt-10 text-white px-0 border",rounded:"pill",onClick:a[1]||(a[1]=d=>i.value=!i.value)},{default:s(()=>[o(" 登入 ")]),_:1}),e(B,{class:"row px-4"},{default:s(()=>[e(r,{cols:"4",class:"col px-0"},{default:s(()=>[e(l,{class:"ms-0 mb-8 btn22 text-white",rounded:"pill"},{default:s(()=>[o(" 忘記密碼 ")]),_:1})]),_:1}),e(r,{cols:"4",class:"col"},{default:s(()=>[e(l,{class:"ms-3 mb-8 btn22 text-white",rounded:"pill",link:"",to:"/signin"},{default:s(()=>[o(" 申請帳號 ")]),_:1})]),_:1}),e(r,{cols:"4",class:"col px-0"},{default:s(()=>[e(l,{class:"pe-0 mb-8 btn22 ms-5 text-white",rounded:"pill"},{default:s(()=>[o(" 補發帳號申請驗證信 ")]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{class:"fade","hide-on-leave":""},{default:s(()=>[i.value?(m(),u(v,{key:0,"append-icon":"$close",class:"mx-auto card",elevation:"16",title:"登入成功"},{append:s(()=>[e(l,{icon:"$close",variant:"text",onClick:a[2]||(a[2]=d=>i.value=!1)})]),default:s(()=>[e(f),t("div",q,[e(w,{class:"mb-8 icon",color:"success",icon:"mdi-check-circle-outline"}),z]),e(f),t("div",A,[e(l,{class:"text-none",color:"medium-emphasis","min-width":"92",rounded:"",variant:"outlined",onClick:a[3]||(a[3]=d=>i.value=!1)},{default:s(()=>[o(" Close ")]),_:1})])]),_:1})):k("",!0)]),_:1})]),_:1})]),_:1}))}});export{Q as default};
