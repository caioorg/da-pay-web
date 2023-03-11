import{u as f,r as p,j as t,a as e,L as b}from"./index-be94dc66.js";import{c as g,a as l,u as h,F as i,o as w}from"./index-4376b32d.js";import{F as N}from"./index.esm-b46daf58.js";import"./iconBase-aa01cbdb.js";const F=g({email:l().email("Precisa ser um e-mail válido").required("Obrigatório"),password:l().min(8,"No minímo 8 caracteres").required("Obrigatório")});function y(){var s,o;const{signInWithGoogle:n,signInWithCredentials:m}=f(),{register:r,handleSubmit:c,formState:{errors:a}}=h({resolver:w(F)}),d=p.useCallback(({email:u,password:x})=>{m(u,x)},[]);return t("div",{className:"h-screen flex bg-white flex-col items-center",children:[e("div",{className:"w-full bg-gradient-to-b from-[#CE9FFC] to-[#7367F0] h-60 bg-cover bg-no-repeat"}),t("div",{className:"w-full max-w-lg rounded-3xl py-3 pb-10 flex flex-col gap-6 px-11 bg-white -mt-16 shadow-lg xs:shadow-none xs:px-5",children:[e("p",{className:"text-xs text-black mt-4 font-semibold text-center",children:"Entrar com:"}),e("div",{className:"w-full justify-center flex gap-3 flex-row",children:t("button",{className:"p-2.5 rounded-lg border text-sm flex items-center gap-2",onClick:()=>n(),children:[e(N,{className:"w-5 h-5"}),"Entrar com Google"]})}),e("p",{className:"text-xs text-[#ADB5BD] font-semibold text-center",children:"ou"}),t("form",{onSubmit:c(d),autoComplete:"off",children:[e(i,{...r("email"),type:"email",label:"E-mail",error:(s=a.email)==null?void 0:s.message}),e(i,{...r("password"),type:"password",label:"Senha",error:(o=a.password)==null?void 0:o.message}),e("button",{type:"submit",className:"bg-[#7367F0] w-full p-3 text-md font-semibold text-white rounded-lg focus:outline-none",children:"Entrar"})]}),t("p",{className:"text-center font-xs pb-5",children:["Não tem conta? ",e(b,{to:"/criar-conta",className:"font-xs font-semibold cursor-pointer",children:"Criar uma conta"})]})]})]})}export{y as default};