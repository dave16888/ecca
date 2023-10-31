import{p as F,B as S,aV as ae,bb as le,g as p,R as s,h as B,a,af as D,an as N,ao as ne,I,b0 as P,bc as te,G as ie,H as se,O as oe,bd as re,N as de,P as ue,aJ as ce,d as x,J as ve,K as fe,ar as be,e as me,be as ge,l as ye,as as Ce,bf as he,b6 as _e,F as ke,m as Ve,bg as Ie,bh as Pe,at as xe}from"./index-26060de9.js";import{b as Fe,c as Se,u as pe,d as Be}from"./VInput-146aec74.js";const Le=F({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...S(),...ae({transition:{component:le}})},"VCounter"),Oe=p()({name:"VCounter",functional:!0,props:Le(),setup(e,o){let{slots:n}=o;const k=s(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return B(()=>a(ne,{transition:e.transition},{default:()=>[D(a("div",{class:["v-counter",e.class],style:e.style},[n.default?n.default({counter:k.value,max:e.max,value:e.value}):k.value]),[[N,e.active]])]})),{}}});const $e=F({floating:Boolean,...S()},"VFieldLabel"),_=p()({name:"VFieldLabel",props:$e(),setup(e,o){let{slots:n}=o;return B(()=>a(Fe,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},n)),{}}}),Re=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Te=F({appendInnerIcon:I,bgColor:String,clearable:Boolean,clearIcon:{type:I,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:I,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Re.includes(e)},"onClick:clear":P(),"onClick:appendInner":P(),"onClick:prependInner":P(),...S(),...te(),...ie(),...se()},"VField"),we=p()({name:"VField",inheritAttrs:!1,props:{id:String,...Se(),...Te()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{attrs:n,emit:k,slots:l}=o;const{themeClasses:M}=oe(e),{loaderClasses:U}=re(e),{focusClasses:J,isFocused:L,focus:$,blur:R}=pe(e),{InputIcon:V}=Be(e),{roundedClasses:W}=de(e),{rtlClasses:j}=ue(),f=s(()=>e.dirty||e.active),b=s(()=>!e.singleLine&&!!(e.label||l.label)),q=ce(),r=s(()=>e.id||`input-${q}`),G=s(()=>`${r.value}-messages`),T=x(),m=x(),w=x(),A=s(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:H,backgroundColorStyles:K}=ve(fe(e,"bgColor")),{textColorClasses:E,textColorStyles:X}=be(s(()=>e.error||e.disabled?void 0:f.value&&L.value?e.color:e.baseColor));me(f,c=>{if(b.value){const i=T.value.$el,d=m.value.$el;requestAnimationFrame(()=>{const u=ge(i),t=d.getBoundingClientRect(),y=t.x-u.x,C=t.y-u.y-(u.height/2-t.height/2),v=t.width/.75,h=Math.abs(v-u.width)>1?{maxWidth:ye(v)}:void 0,z=getComputedStyle(i),O=getComputedStyle(d),Q=parseFloat(z.transitionDuration)*1e3||150,Z=parseFloat(O.getPropertyValue("--v-field-label-scale")),ee=O.getPropertyValue("color");i.style.visibility="visible",d.style.visibility="hidden",Ce(i,{transform:`translate(${y}px, ${C}px) scale(${Z})`,color:ee,...h},{duration:Q,easing:xe,direction:c?"normal":"reverse"}).finished.then(()=>{i.style.removeProperty("visibility"),d.style.removeProperty("visibility")})})}},{flush:"post"});const g=s(()=>({isActive:f,isFocused:L,controlRef:w,blur:R,focus:$}));function Y(c){c.target!==document.activeElement&&c.preventDefault()}return B(()=>{var y,C,v;const c=e.variant==="outlined",i=l["prepend-inner"]||e.prependInnerIcon,d=!!(e.clearable||l.clear),u=!!(l["append-inner"]||e.appendInnerIcon||d),t=l.label?l.label({...g.value,label:e.label,props:{for:r.value}}):e.label;return a("div",Ve({class:["v-field",{"v-field--active":f.value,"v-field--appended":u,"v-field--center-affix":e.centerAffix??!A.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":i,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!t,[`v-field--variant-${e.variant}`]:!0},M.value,H.value,J.value,U.value,W.value,j.value,e.class],style:[K.value,X.value,e.style],onClick:Y},n),[a("div",{class:"v-field__overlay"},null),a(he,{name:"v-field",active:!!e.loading,color:e.error?"error":e.color},{default:l.loader}),i&&a("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&a(V,{key:"prepend-icon",name:"prependInner"},null),(y=l["prepend-inner"])==null?void 0:y.call(l,g.value)]),a("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&b.value&&a(_,{key:"floating-label",ref:m,class:[E.value],floating:!0,for:r.value},{default:()=>[t]}),a(_,{ref:T,for:r.value},{default:()=>[t]}),(C=l.default)==null?void 0:C.call(l,{...g.value,props:{id:r.value,class:"v-field__input","aria-describedby":G.value},focus:$,blur:R})]),d&&a(_e,{key:"clear"},{default:()=>[D(a("div",{class:"v-field__clearable",onMousedown:h=>{h.preventDefault(),h.stopPropagation()}},[l.clear?l.clear():a(V,{name:"clear"},null)]),[[N,e.dirty]])]}),u&&a("div",{key:"append",class:"v-field__append-inner"},[(v=l["append-inner"])==null?void 0:v.call(l,g.value),e.appendInnerIcon&&a(V,{key:"append-icon",name:"appendInner"},null)]),a("div",{class:["v-field__outline",E.value]},[c&&a(ke,null,[a("div",{class:"v-field__outline__start"},null),b.value&&a("div",{class:"v-field__outline__notch"},[a(_,{ref:m,floating:!0,for:r.value},{default:()=>[t]})]),a("div",{class:"v-field__outline__end"},null)]),A.value&&b.value&&a(_,{ref:m,floating:!0,for:r.value},{default:()=>[t]})])])}),{controlRef:w}}});function De(e){const o=Object.keys(we.props).filter(n=>!Ie(n)&&n!=="class"&&n!=="style");return Pe(e,o)}export{we as V,Oe as a,De as f,Te as m};
