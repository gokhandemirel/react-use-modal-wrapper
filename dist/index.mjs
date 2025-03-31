import m,{useState as h}from"react";import c,{useContext as x,useRef as v}from"react";import i from"styled-components";import N,{useState as P}from"react";import{createContext as f}from"react";var n=f({});import{useEffect as M}from"react";var p=(o,t)=>{M(()=>{let e=r=>{!o.current||o.current.contains(r.target)||t(r)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}},[o,t])};var C=i.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.12);
  position: fixed;
  left: 0;
  top: 0;
`,b=i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: 240px;
  height: 100px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.04);
`;function d({children:o,className:t="",backdropClose:e,backdropClassName:r=""}){let{setShowModal:s}=x(n),a=v(null);return e&&p(a,()=>{s(!1)}),c.createElement(C,{className:r},c.createElement(b,{className:t,ref:a},o))}var O=({children:o,className:t="",backdropClose:e=!0,backdropClassName:r=""})=>{let[s,a]=h(!1),l=()=>a(!1),u=()=>a(!0);return{modal:s&&m.createElement(n.Provider,{value:{showModal:s,setShowModal:a}},m.createElement(d,{className:t,backdropClose:e,backdropClassName:r},o)),openModal:u,closeModal:l}};export{O as useModalWrapper};
