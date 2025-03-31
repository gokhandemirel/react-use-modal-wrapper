var h=Object.create;var l=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var W=Object.getOwnPropertyNames;var N=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty;var k=(e,o)=>{for(var t in o)l(e,t,{get:o[t],enumerable:!0})},f=(e,o,t,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of W(o))!P.call(e,r)&&r!==t&&l(e,r,{get:()=>o[r],enumerable:!(a=g(o,r))||a.enumerable});return e};var p=(e,o,t)=>(t=e!=null?h(N(e)):{},f(o||!e||!e.__esModule?l(t,"default",{value:e,enumerable:!0}):t,e)),E=e=>f(l({},"__esModule",{value:!0}),e);var L={};k(L,{useModalWrapper:()=>R});module.exports=E(L);var d=p(require("react"));var s=p(require("react")),i=p(require("styled-components"));var M=p(require("react")),x=require("react"),c=(0,x.createContext)({});var v=require("react"),C=(e,o)=>{(0,v.useEffect)(()=>{let t=a=>{!e.current||e.current.contains(a.target)||o(a)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}},[e,o])};var w=i.default.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.12);
  position: fixed;
  left: 0;
  top: 0;
`,I=i.default.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: 240px;
  height: 100px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.04);
`;function m({children:e,className:o="",backdropClose:t,backdropClassName:a=""}){let{setShowModal:r}=(0,s.useContext)(c),n=(0,s.useRef)(null);return t&&C(n,()=>{r(!1)}),s.default.createElement(w,{className:a},s.default.createElement(I,{className:o,ref:n},e))}var R=({children:e,className:o="",backdropClose:t=!0,backdropClassName:a=""})=>{let[r,n]=(0,d.useState)(!1),u=()=>n(!1),b=()=>n(!0);return{modal:r&&d.default.createElement(c.Provider,{value:{showModal:r,setShowModal:n}},d.default.createElement(m,{className:o,backdropClose:t,backdropClassName:a},e)),openModal:b,closeModal:u}};0&&(module.exports={useModalWrapper});
