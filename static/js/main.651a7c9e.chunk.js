(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports={"Cabinet Ministers":[{question:"Ministry of Defence",options:["Shri Raj Nath Singh","Smt. Nirmala Sitharaman","Shri Arjun Munda","Shri Nitin Jairam Gadkari"],correctAnswer:"Shri Raj Nath Singh"},{question:"Ministry of Home Affairs",options:["Shri Amit Shah","Smt. Nirmala Sitharaman","Shri Arjun Munda","Shri Nitin Jairam Gadkari"],correctAnswer:"Shri Amit Shah"},{question:"Ministry of Cooperation",options:["Shri Amit Shah","Shri Raj Nath Singh","Shri Arjun Munda","Shri Nitin Jairam Gadkari"],correctAnswer:"Shri Amit Shah"},{question:"Ministry of Road Transport and Highways",options:["Shri Amit Shah","Shri Piyush Goyal","Shri Arjun Munda","Shri Nitin Jairam Gadkari"],correctAnswer:"Shri Nitin Jairam Gadkari"},{question:"Ministry of Agriculture & Farmers Welfare",options:["Shri Pralhad Joshi","Shri Raj Nath Singh","Shri Arjun Munda","Shri Narendra Singh Tomar"],correctAnswer:"Shri Narendra Singh Tomar"},{question:"Smt. Nirmala Sitharaman",options:["Ministry of Finance","Ministry of External Affairs","Ministry of Corporate Affairs","Both Finance & Corporate Affairs"],correctAnswer:"Both Finance & Corporate Affairs"}],Geography:[{question:"Question 1 for Geography",options:["Option 1","Option 2","Option 3"],correctAnswer:"Option 1"},{question:"Question 2 for Geography",options:["Option 1","Option 2","Option 3"],correctAnswer:"Option 2"}]}},,,function(e,t,n){e.exports=n(17)},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),o=n.n(i),s=(n(13),n(14),n(1));var c=e=>{let{onSelectModule:t}=e;const n=Object.keys(s);return r.a.createElement("div",null,r.a.createElement("h2",null,"Select Module"),r.a.createElement("ul",null,n.map((e,n)=>r.a.createElement("li",{key:n,onClick:()=>(e=>{t(e)})(e)},e))))};n(15);var l=e=>{let{questions:t,userAnswers:n}=e;return r.a.createElement("div",{className:"analysis-container"},r.a.createElement("h2",null,"Analysis"),t.map((e,a)=>{const{isCorrect:i,userAnswer:o,correctAnswer:s}=(e=>{const a=t[e],r=n[e];return{isCorrect:r===a.correctAnswer,userAnswer:r,correctAnswer:a.correctAnswer}})(a);return r.a.createElement("div",{key:a,className:"question-analysis ".concat(i?"correct":"incorrect")},r.a.createElement("p",null,e.question),r.a.createElement("p",{className:"user-answer ".concat(i?"correct":"incorrect")},"Your answer: ",o),!i&&r.a.createElement("p",{className:"correct-answer"},"Correct answer: ",s))}))};n(16);var u=()=>{const[e,t]=Object(a.useState)([]),[n,i]=Object(a.useState)(0),[o,u]=Object(a.useState)([]),[m,h]=Object(a.useState)([]),[S,p]=Object(a.useState)(!1),[d,f]=Object(a.useState)(0),[A,E]=Object(a.useState)(null),[N,b]=Object(a.useState)(!0),[w,y]=Object(a.useState)(""),[g,j]=Object(a.useState)(""),[v,O]=Object(a.useState)(!1),M=e=>e.sort(()=>Math.random()-.5);Object(a.useEffect)(()=>{if(A){const e=s[A];if(e){const n=(e=>e.sort(()=>Math.random()-.5))(e);t(n.map(e=>({...e,options:M(e.options)}))),b(!1),u(Array(n.length).fill(!1)),h(Array(n.length).fill("")),i(0),p(!1),f(0),j(A)}}},[A]);return r.a.createElement("div",{className:"quiz-container"},!N&&!v&&r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{onClick:()=>{E(null),b(!0),i(0),u([]),h([]),p(!1),f(0),j("")},className:"home-btn"},"Go Back to Home"),g&&r.a.createElement("span",{className:"selected-module"},g)),r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"question"},r.a.createElement("h2",null,e[n].question),r.a.createElement("ul",{className:"options"},e[n].options.map((t,a)=>r.a.createElement("li",{key:a,onClick:()=>(t=>{if(e[n],o[n])h(e=>{const a=[...e];return a[n]=t,a}),y(t);else{const e=[...o];e[n]=!0,u(e),h(e=>{const a=[...e];return a[n]=t,a}),y(t)}})(t),className:t===w?"selected":""},t)))),r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{onClick:()=>{i(n-1),y("")},disabled:0===n,className:"nav-btn"},"Previous"),r.a.createElement("span",{className:"question-info"},"Question ",n+1," of ",e.length),!S&&n!==e.length-1&&r.a.createElement("button",{onClick:()=>{i(n+1),y("")},className:"nav-btn"},"Next"),n===e.length-1&&!S&&r.a.createElement("button",{onClick:()=>{let t=0;for(let n=0;n<e.length;n++)e[n].correctAnswer===m[n]?t+=1:""!==m[n]&&e[n].correctAnswer!==m[n]&&(t-=.25);f(t>0?t:0),p(!0)},className:"submit-btn"},"Submit")),S&&r.a.createElement("div",null,r.a.createElement("div",{className:"result-card"},r.a.createElement("h2",null,"Results"),r.a.createElement("p",null,"Your score: ",d," out of ",e.length),r.a.createElement("button",{onClick:()=>{O(!0)},className:"analysis-btn"},"Analysis"))))),v&&r.a.createElement(l,{questions:e,userAnswers:m}),N&&r.a.createElement(c,{onSelectModule:e=>{E(e)}}))};var m=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null))};var h=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then(t=>{let{getCLS:n,getFID:a,getFCP:r,getLCP:i,getTTFB:o}=t;n(e),a(e),r(e),i(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null))),h()}],[[4,1,2]]]);
//# sourceMappingURL=main.651a7c9e.chunk.js.map