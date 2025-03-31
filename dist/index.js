var g=Object.create;var d=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var C=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty;var w=(o,e)=>{for(var r in e)d(o,r,{get:e[r],enumerable:!0})},u=(o,e,r,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of P(e))!E.call(o,a)&&a!==r&&d(o,a,{get:()=>e[a],enumerable:!(t=b(e,a))||t.enumerable});return o};var l=(o,e,r)=>(r=o!=null?g(C(o)):{},u(e||!o||!o.__esModule?d(r,"default",{value:o,enumerable:!0}):r,o)),I=o=>u(d({},"__esModule",{value:!0}),o);var R={};w(R,{useModalWrapper:()=>N});module.exports=I(R);var n=l(require("react"));var s=l(require("react")),c=l(require("styled-components"));var M=l(require("react")),f=require("react"),i=(0,f.createContext)({}),x=({showModal:o,setShowModal:e,options:r,children:t})=>M.default.createElement(i.Provider,{value:{options:r,showModal:o,setShowModal:e}},t);var v=require("react"),W=(o,e)=>{(0,v.useEffect)(()=>{let r=t=>{!o.current||o.current.contains(t.target)||e(t)};return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),()=>{document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r)}},[o,e])};var k=c.default.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.12);
  position: fixed;
  left: 0;
  top: 0;
`,L=c.default.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: 240px;
  height: 100px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.04);
`;function m({children:o,className:e="",backdropClose:r,backdropClassName:t=""}){let{setShowModal:a}=(0,s.useContext)(i),p=(0,s.useRef)(null);return r&&W(p,()=>{a(!1)}),s.default.createElement(k,{className:t},s.default.createElement(L,{className:e,ref:p},o))}var N=({children:o,className:e="",backdropClose:r=!0,backdropClassName:t=""})=>{let[a,p]=(0,n.useState)(!1);return{modal:a&&n.default.createElement(x,{showModal:a,setShowModal:p,options:{children:o,className:e,backdropClose:r,backdropClassName:t}},n.default.createElement(m,{className:e,backdropClose:r,backdropClassName:t},o)),openModal:()=>p(!0),closeModal:()=>p(!1)}};0&&(module.exports={useModalWrapper});
