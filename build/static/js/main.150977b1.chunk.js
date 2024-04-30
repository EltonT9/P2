(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{77:function(e,t,a){e.exports=a(91)},91:function(e,t,a){"use strict";a.r(t);var n,l=a(0),r=a.n(l),i=a(23),c=a(21),o=a(123),m=a(57);const s=Object(m.a)(n||(n=Object(c.a)(["\n    html, body {\n        background-color: #192437;\n    }\n"]))),d=e=>{let{children:t}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null),r.a.createElement(s,null),t)};var u=a(136),v=a(142),p=a(139),E=a(5),g=a(138);var x;const h=e=>{let{children:t}=e;return r.a.createElement("div",null,r.a.createElement("h2",null,t))},b=e=>{let{children:t}=e;return r.a.createElement("div",{style:{inlineSize:"20vw"}},t)},f=Object(E.a)(g.a)(x||(x=Object(c.a)(["\n    margin-top: 3em;\n    padding: 1em;\n    background-color: #343F50;\n    border-radius: 50%;\n    /* color: #D0D7DB; */\n    color: #FFFFFF;\n"])));var w=e=>{let{children:t,props:a}=e;return t?r.a.createElement(f,Object.assign({alignContent:"center",textAlign:"center"},a),r.a.createElement(p.a,{component:"span",variant:"body2"},t)):null},y=a(140);var C=a(141);const j=e=>{let{children:t,...a}=e;return r.a.createElement(v.a,Object.assign({sx:{maxWidth:"80vw",minWidth:"80vw"}},a),t)};j.Title=(e=>{let{title:t,subheader:a,...n}=e;return r.a.createElement(y.a,Object.assign({title:t,subheader:a},n))}),j.Body=(e=>{let{children:t,...a}=e;return r.a.createElement(C.a,Object.assign({sx:{paddingTop:"0px"}},a),r.a.createElement(u.a,{container:!0,direction:"column"},t))}),j.Footer=(e=>{let{movieId:t,onDelete:a}=e;return r.a.createElement("div",null,r.a.createElement("button",{onClick:()=>{console.log("Delete clicked for movie:",t),a(t)}},"Delete"))}),j.Description=(e=>{let{children:t}=e;return r.a.createElement(u.a,{item:!0},t)});var D,I=a(129);const O=Object(I.a)("div")(D||(D=Object(c.a)(["\n    display: inline-block;\n    content: '';\n    font-size: 1px;\n    line-height: .5rem;\n    padding: 1px;\n    border-radius: 50%;\n    vertical-align: 75%;\n    background-color: currentColor;\n    margin: 0px;\n"]))),z=e=>{let{children:t,...a}=e;return r.a.createElement(u.a,Object.assign({},a,{container:!0}),t)};z.Item=(e=>{let{children:t,decorated:a,...n}=e;return r.a.createElement(u.a,Object.assign({},n,{item:!0}),r.a.createElement(u.a,{container:!0,justifyContent:"space-between"},r.a.createElement(u.a,{item:!0},a?r.a.createElement(O,null):null),r.a.createElement(u.a,{item:!0,sx:{padding:"0px 5px 0px ".concat(a?"5px":"0px")}},t)))});var R,W=a(50);const k=Object(E.a)("img")(R||(R=Object(c.a)(["\n    ","\n    ","\n"])),W.b,W.a);var F=a(131),T=a(133),A=a(132),L=a(134);const S=e=>{let{setMovies:t}=e;const[a,n]=Object(l.useState)({title:"",director:"",releaseYear:"",contentRating:"",runTime:"",writers:["","",""],actors:["","",""],imageURL:"",description:""}),i=e=>{e.preventDefault(),n({title:"",director:"",releaseYear:"",contentRating:"",runTime:"",writers:["","",""],actors:["","",""],imageURL:"",description:""})};return r.a.createElement("form",{onSubmit:async e=>{e.preventDefault();const n={id:Object(L.a)(),...a};console.log(a),await A.a.post("".concat("https://1vpslptp1a.execute-api.us-east-1.amazonaws.com/dev","/").concat("dev"),n),t(e=>[...e,n]),i()},style:{backgroundColor:"light-gray"}},r.a.createElement(u.a,{container:!0,justifyContent:"center"},r.a.createElement(u.a,{item:!0},r.a.createElement("h2",null,"Create a Movie!"))),r.a.createElement(u.a,{container:!0,gap:"15px",sx:{margin:"20px 0px"},justifyContent:"space-between"},r.a.createElement(u.a,{item:!0,xs:6},r.a.createElement(F.a,{size:"small",label:"Movie Title",variant:"filled",fullWidth:!0,value:a.title,onChange:e=>n({...a,title:e.target.value})})),r.a.createElement(u.a,{item:!0,xs:5},r.a.createElement(F.a,{size:"small",label:"Movie Director",variant:"filled",fullWidth:!0,value:a.director,onChange:e=>n({...a,director:e.target.value})}))),r.a.createElement(u.a,{container:!0,gap:"15px",sx:{margin:"20px 0px"}},r.a.createElement(u.a,{item:!0},r.a.createElement(F.a,{size:"small",label:"Release Year",variant:"filled",value:a.releaseYear,onChange:e=>n({...a,releaseYear:e.target.value})})),r.a.createElement(u.a,{item:!0},r.a.createElement(F.a,{size:"small",label:"Run Time",variant:"filled",value:a.runTime,onChange:e=>n({...a,runTime:e.target.value})})),r.a.createElement(u.a,{item:!0},r.a.createElement(F.a,{size:"small",label:"Content Rating",variant:"filled",value:a.contentRating,onChange:e=>n({...a,contentRating:e.target.value})}))),r.a.createElement(u.a,{container:!0,gap:"15px",sx:{margin:"20px 0px"}},r.a.createElement(u.a,{item:!0},r.a.createElement(F.a,{size:"small",label:"Actor 1",variant:"filled",value:a.actors[0],onChange:e=>{const t=a.actors;t[0]=e.target.value,n({...a,actors:t})}})),r.a.createElement(u.a,{item:!0},r.a.createElement(F.a,{size:"small",label:"Actor 2",variant:"filled",value:a.actors[1],onChange:e=>{const t=a.actors;t[1]=e.target.value,n({...a,actors:t})}})),r.a.createElement(u.a,{item:!0},r.a.createElement(F.a,{size:"small",label:"Actor 3",variant:"filled",value:a.actors[2],onChange:e=>{const t=a.actors;t[2]=e.target.value,n({...a,actors:t})}}))),r.a.createElement(u.a,{container:!0,gap:"15px",sx:{margin:"20px 0px"}},r.a.createElement(u.a,{item:!0},r.a.createElement(F.a,{size:"small",label:"Writer 1",variant:"filled",value:a.writers[0],onChange:e=>{const t=a.writers;t[0]=e.target.value,n({...a,writers:t})}})),r.a.createElement(u.a,{item:!0},r.a.createElement(F.a,{size:"small",label:"Writer 2",variant:"filled",value:a.writers[1],onChange:e=>{const t=a.writers;t[1]=e.target.value,n({...a,writers:t})}})),r.a.createElement(u.a,{item:!0},r.a.createElement(F.a,{size:"small",label:"Writer 3",variant:"filled",value:a.writers[2],onChange:e=>{const t=a.writers;t[2]=e.target.value,n({...a,writers:t})}}))),r.a.createElement(u.a,{container:!0,gap:"15px",sx:{margin:"20px 0px"}},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(F.a,{size:"small",label:"Image URL",variant:"filled",fullWidth:!0,value:a.imageURL,onChange:e=>n({...a,imageURL:e.target.value})}))),r.a.createElement(u.a,{container:!0,gap:"15px",sx:{margin:"20px 0px"}},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(F.a,{size:"small",label:"Description",variant:"filled",fullWidth:!0,value:a.description,onChange:e=>n({...a,description:e.target.value})}))),r.a.createElement(u.a,{container:!0,justifyContent:"space-between"},r.a.createElement(u.a,{item:!0,xs:4},r.a.createElement(T.a,{variant:"outlined",type:"button",onClick:i,fullWidth:!0},"Clear")),r.a.createElement(u.a,{item:!0,xs:4},r.a.createElement(T.a,{variant:"outlined",type:"submit",fullWidth:!0},"Submit"))))},Y=()=>{const[e,t]=Object(l.useState)([]);Object(l.useEffect)(()=>{(async()=>{try{var e;const n=null!==(e=(await A.a.get("".concat("https://1vpslptp1a.execute-api.us-east-1.amazonaws.com/dev","/").concat("dev"))).data.Items)&&void 0!==e?e:[];t(n.map(e=>({id:e.id,...e})))}catch(a){console.error("Error fetching movies:",a)}})()},[]);const a=async a=>{console.log("handleDelete initiated with movie ID:",a);try{console.log("API Endpoint to Delete:","".concat("https://1vpslptp1a.execute-api.us-east-1.amazonaws.com/dev","/").concat("dev","/").concat(a));const l=await A.a.delete("".concat("https://1vpslptp1a.execute-api.us-east-1.amazonaws.com/dev","/").concat("dev","/").concat(a));console.log("API Response:",l),t(e.filter(e=>e.id!==a))}catch(n){console.error("Error deleting movie:",n),console.error("Error Response:",n.response)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{container:!0,justifyContent:"center"},r.a.createElement(u.a,{item:!0},r.a.createElement(w,null,r.a.createElement(h,null,"SkillStorm Movies"),r.a.createElement(b,null,"Movies delivered to you through the power of serverless computing!")))),r.a.createElement(u.a,{container:!0,justifyContent:"center",sx:{margin:"30px 0px"}},r.a.createElement(u.a,{item:!0},r.a.createElement(v.a,{sx:{padding:"20px"}},r.a.createElement(S,{setMovies:t})))),r.a.createElement(u.a,{container:!0,justifyContent:"center",spacing:2,sx:{padding:"5em 0"}},(null===e||void 0===e?void 0:e.length)>0?null===e||void 0===e?void 0:e.map(e=>{var t,n,l,i,c,o;return r.a.createElement(u.a,{item:!0},r.a.createElement(j,null,r.a.createElement(j.Title,{title:e.title||"",subheader:r.a.createElement(z,null,e.releaseYear?r.a.createElement(z.Item,null,e.releaseYear):null,e.contentRating?r.a.createElement(z.Item,{decorated:!0},e.contentRating):null,e.runTime?r.a.createElement(z.Item,{decorated:!0},e.runTime):null)}),r.a.createElement(j.Body,null,r.a.createElement(u.a,{container:!0},r.a.createElement(u.a,{item:!0,xs:10,sx:{padding:"0px 5px 0px 0px"}},r.a.createElement(u.a,{container:!0,direction:"column",spacing:"1em"},r.a.createElement(j.Description,null,r.a.createElement(p.a,null,e.description||"")),r.a.createElement(j.Description,null,r.a.createElement("hr",null),r.a.createElement(z,null,r.a.createElement(z.Item,null,r.a.createElement("strong",null,(null===e||void 0===e?void 0:null===(t=e.directors)||void 0===t?void 0:t.length)>1||"string"!=typeof e.director?"Directors":"Director")),"string"==typeof e.director?r.a.createElement(z.Item,null,e.director):null===e||void 0===e?void 0:null===(n=e.directors)||void 0===n?void 0:n.map((e,t)=>r.a.createElement(z.Item,{decorated:0!==t},e)))),r.a.createElement(j.Description,null,r.a.createElement("hr",null),r.a.createElement(z,null,r.a.createElement(z.Item,null,r.a.createElement("strong",null,(null===e||void 0===e?void 0:null===(l=e.writers)||void 0===l?void 0:l.length)>1?"Writers":"Writer")),null===e||void 0===e?void 0:null===(i=e.writers)||void 0===i?void 0:i.map((t,a)=>(null===e||void 0===e?void 0:e.writers[a])?r.a.createElement(z.Item,{decorated:0!==a},t):null))),r.a.createElement(j.Description,null,r.a.createElement("hr",null),r.a.createElement(z,null,r.a.createElement(z.Item,null,r.a.createElement("strong",null,(null===e||void 0===e?void 0:null===(c=e.actors)||void 0===c?void 0:c.length)>1?"Actors":"Actor")),null===e||void 0===e?void 0:null===(o=e.actors)||void 0===o?void 0:o.map((e,t)=>r.a.createElement(z.Item,{decorated:0!==t},e)))))),e.imageURL?r.a.createElement(u.a,{item:!0,xs:2},r.a.createElement(k,{src:e.imageURL,width:"100%"})):null)),r.a.createElement(j.Footer,{movieId:e.id,onDelete:a})))}):r.a.createElement(j,null,r.a.createElement(u.a,{container:!0,justifyContent:"center",textAlign:"center"},r.a.createElement(u.a,{item:!0,sx:{padding:"24px 5px 0px 0px"}},r.a.createElement(j.Body,null,r.a.createElement(j.Description,null,r.a.createElement(p.a,{sx:{maxWidth:"42vw",minWidth:"42vw"}},"Your DynamoDB table is currently empty! If you'd like to add a movie, ensure that your Lambdas and API Gateway have been properly configured and their respective endpoints have been added to the .env file. Once you've done that, use the form below to add any movies to your DynamoDB table!"))))))))};Object(i.render)(r.a.createElement(d,null,r.a.createElement(Y,null)),document.querySelector("#root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.150977b1.chunk.js.map