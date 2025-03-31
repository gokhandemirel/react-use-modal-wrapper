import m,{useState as b}from"react";import i,{useContext as v,useRef as W}from"react";import c from"styled-components";import M from"react";import{createContext as f}from"react";var p=f({}),d=({showModal:e,setShowModal:r,options:o,children:t})=>M.createElement(p.Provider,{value:{options:o,showModal:e,setShowModal:r}},t);import{useEffect as x}from"react";var l=(e,r)=>{x(()=>{let o=t=>{!e.current||e.current.contains(t.target)||r(t)};return document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o)}},[e,r])};var h=c.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.12);
  position: fixed;
  left: 0;
  top: 0;
`,g=c.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: 240px;
  height: 100px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.04);
`;function n({children:e,className:r="",backdropClose:o,backdropClassName:t=""}){let{setShowModal:s}=v(p),a=W(null);return o&&l(a,()=>{s(!1)}),i.createElement(h,{className:t},i.createElement(g,{className:r,ref:a},e))}var D=({children:e,className:r="",backdropClose:o=!0,backdropClassName:t=""})=>{let[s,a]=b(!1);return{modal:s&&m.createElement(d,{showModal:s,setShowModal:a,options:{children:e,className:r,backdropClose:o,backdropClassName:t}},m.createElement(n,{className:r,backdropClose:o,backdropClassName:t},e)),openModal:()=>a(!0),closeModal:()=>a(!1)}};export{D as useModalWrapper};
