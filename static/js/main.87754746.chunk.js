(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,function(e,a,t){e.exports={message:"Message_message__2BLEx",avatar:"Message_avatar__3Y8vc",description:"Message_description__3cvLT",angle:"Message_angle__1JJU7",name:"Message_name__3gXT6",text:"Message_text__Kp1vt",time:"Message_time__3Cvpn"}},,,,function(e,a,t){e.exports={someClass:"Affairs_someClass__3uHCM",items:"Affairs_items__1C3wB",difficulty:"Affairs_difficulty__3rCnX"}},,function(e,a,t){e.exports={input:"SuperInputText_input___HmGa",superInput:"SuperInputText_superInput__2IZul",errorInput:"SuperInputText_errorInput__9cHGE",error:"SuperInputText_error__c7oKX"}},function(e,a,t){e.exports={blue:"HW4_blue__1qzZ0",column:"HW4_column__2uy1y",testSpanError:"HW4_testSpanError__3dtcm"}},function(e,a,t){e.exports={default:"SuperButton_default__1DhPV",red:"SuperButton_red__3RWyw"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2uvIT",spanClassName:"SuperCheckbox_spanClassName__1O6TK"}},,,function(e,a,t){e.exports={App:"App_App__3qY4B"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__1Oh-W",error:"Greeting_error__3chYN"}},function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),c=t.n(l),s=(t(21),t(14)),o=t.n(s),i=t(7),u=t(1);var m=function(e){var a=Object(n.useState)(""),t=Object(u.a)(a,2),l=t[0],c=t[1],s=function(){e.addMessage(l),c("")};return r.a.createElement("div",null,r.a.createElement("input",{value:l,type:"text",onChange:function(e){c(e.currentTarget.value)},onKeyPress:function(e){13===e.charCode&&s()}}),r.a.createElement("button",{onClick:s},"Send"))},d=t(2),p=t.n(d);var f=function(e){return r.a.createElement("div",{className:p.a.message},r.a.createElement("img",{className:p.a.avatar,src:e.avatar,alt:"avatar"}),r.a.createElement("div",{className:p.a.angle}),r.a.createElement("div",{className:p.a.description},r.a.createElement("div",{className:p.a.name},e.name),r.a.createElement("div",{className:p.a.text},e.message),r.a.createElement("div",{className:p.a.time},e.time)))};var E=function(){var e=Object(n.useState)([{id:1,avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Sasha",message:"Hello, my friends",time:"22:00"},{id:2,avatar:"https://i.pinimg.com/564x/69/07/a3/6907a3ecd829ce41a9fee86479597a39.jpg",name:"Maksim",message:"Hello, Sasha",time:"22:07"},{id:3,avatar:"https://i.pinimg.com/564x/56/2f/9c/562f9cbde8be047a6b3ca16927cbc75b.jpg",name:"Sonya",message:"yo yo yo",time:"22:15"}]),a=Object(u.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement(f,{id:e.id,avatar:e.avatar,name:e.name,message:e.message,time:e.time})}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",c,r.a.createElement("hr",null),r.a.createElement(m,{addMessage:function(e){var a={id:4,avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Sonya",message:e,time:"22:50"};l([].concat(Object(i.a)(t),[a]))}}),r.a.createElement("hr",null))},h=t(6),_=t.n(h);var v=function(e){return r.a.createElement("div",{className:_.a.items},r.a.createElement("span",null,e.affair.name),r.a.createElement("span",null,e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var g=function(e){var a=e.data.map((function(a){return r.a.createElement(v,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:_.a.difficulty},a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}}," All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}}," High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}}," Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}}," Low"))},b=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var C=function(){var e=Object(n.useState)(b),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(u.a)(c,2),o=s[0],i=s[1],m=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):e}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(g,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},k=t(24),y=t(15),N=t.n(y),O=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,s=e.onEnter,o=l?N.a.error:"";return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:o,onKeyDown:s,onBlur:t}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n,disabled:!a},"add"),r.a.createElement("span",null,c))},S=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(u.a)(l,2),s=c[0],o=c[1],i=Object(n.useState)(""),m=Object(u.a)(i,2),d=m[0],p=(m[1],function(){t(s),alert("Hello ".concat(s," !")),o("")}),f=a.length;return r.a.createElement(O,{name:s,setNameCallback:function(e){o(e.currentTarget.value)},addUser:p,error:d,totalUsers:f,onEnter:function(e){"Enter"===e.key&&s&&p()}})};var j=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(S,{users:t,addUserCallback:function(e){var a={_id:Object(k.a)(),name:e};l([].concat(Object(i.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},x=t(3),w=t(8),T=t.n(w),A=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(x.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(T.a.error," ").concat(o||""),m="".concat(c?T.a.errorInput:T.a.superInput," ").concat(s);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},i)),c&&r.a.createElement("span",{className:u},c))},I=t(9),M=t.n(I),H=t(10),W=t.n(H),B=function(e){var a=e.red,t=e.className,n=Object(x.a)(e,["red","className"]),l="".concat(a?W.a.red:W.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},F=t(11),K=t.n(F),P=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(x.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(K.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:s},c)),l&&r.a.createElement("span",{className:K.a.spanClassName},l))};var U=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),i=Object(u.a)(o,2),m=i[0],d=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:M.a.column},r.a.createElement(A,{value:t,onChangeText:l,onEnter:s,error:c}),r.a.createElement(A,{className:M.a.blue}),r.a.createElement(B,null,"default"),r.a.createElement(B,{red:!0,onClick:s},"delete "),r.a.createElement(B,{disabled:!0},"disabled"),r.a.createElement(P,{checked:m,onChangeChecked:d},"some text "),r.a.createElement(P,{checked:m,onChange:function(e){return d(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var G=function(){return r.a.createElement("div",null,"// add NavLinks")};var J=function(){return r.a.createElement("div",null,"// add routes")};var X=function(){return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement(J,null))};var Y=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(E,null),r.a.createElement(C,null),r.a.createElement(j,null),r.a.createElement(U,null),r.a.createElement(X,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.87754746.chunk.js.map