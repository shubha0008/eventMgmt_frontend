(this["webpackJsonpevent-manager-app"]=this["webpackJsonpevent-manager-app"]||[]).push([[0],{24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},30:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),l=(a(29),a(7)),s=(a(30),a(5));var m=function(e){var t=e.currentUser;return r.a.createElement("div",{className:"container-fluid pt-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 text-center"},null===t?r.a.createElement(s.c,{to:"/login",activeClassName:"text-success"},"Login"):r.a.createElement(s.c,{to:"/logout",activeClassName:"text-success"},"Logout")),r.a.createElement("div",{className:"col-4 text-center"},r.a.createElement(s.c,{to:"/book",activeClassName:"text-success"},"Book room")),r.a.createElement("div",{className:"col-4 text-center"},r.a.createElement(s.c,{to:"/view",activeClassName:"text-success"},"View Bookings"))))},u=a(1),i=a(8),p=a.n(i),d=a(10);var v=function(e){var t=e.setCurrentUser,a=Object(u.g)(),c=Object(n.useState)({username:"",password:""}),o=Object(l.a)(c,2),m=o[0],i=o[1],v=function(e){var t=e.target.value,a=e.target.name,n=JSON.parse(JSON.stringify(m));n[a]=t,i(n)},E=function(){var e=Object(d.a)(p.a.mark((function e(){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://eventmgmt-event.herokuapp.com/events").then((function(e){return e.json()}));case 2:n=e.sent,1===(r=n.filter((function(e){return e.username===m.username&&e.password===m.password}))).length?(t(r[0]),console.log(r),a.push("/book")):(console.log("Email/Password is incorrect"),console.log(r));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"}," "),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E()}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"username"),r.a.createElement("input",{type:"text",className:"form-control",id:"username",name:"username",value:m.username,onChange:v,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1",name:"password",value:m.password,onChange:v,required:!0})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login"),r.a.createElement(s.b,{to:"/Signup"},r.a.createElement("button",{className:"btn btn-primary"},"SignUp Here")))),r.a.createElement("div",{className:"col-md-4"}," ")))};var E=function(e){var t=e.currentUser,a=function(e){var t=e.target.value,a=e.target.name,n=JSON.parse(JSON.stringify(m));n[a]=t,u(n),console.log(m)},c=function(){var e=Object(d.a)(p.a.mark((function e(a){var n,r,c,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==m.room){e.next=3;break}return N(["text-danger","Select a room"]),e.abrupt("return");case 3:if(""!==m.slot){e.next=6;break}return N(["text-danger","Select a time slot"]),e.abrupt("return");case 6:return e.prev=6,e.next=9,fetch("https://eventmgmt-event.herokuapp.com/event".concat(m.room));case 9:return n=e.sent,e.next=12,n.json();case 12:if(r=e.sent,0===r.booking.filter((function(e){return e.date===m.date&&e.slot===m.slot})).length){e.next=18;break}return console.log("Already booked"),N(["text-danger","Entered Time slot is already booked"]),e.abrupt("return");case 18:return r.booking.push({date:m.date,slot:m.slot,user:t.email}),e.next=21,fetch("https://eventmgmt-event.herokuapp.com/events".concat(m.room),{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}});case 21:return c=e.sent,e.next=24,c.json();case 24:o=e.sent,N(["text-success","Room booked successfully"]),a.reset(),console.log(o),e.next=34;break;case 30:e.prev=30,e.t0=e.catch(6),console.log(e.t0),N(["text-danger","Something went wrong"]);case 34:case"end":return e.stop()}}),e,null,[[6,30]])})));return function(t){return e.apply(this,arguments)}}(),o=Object(n.useState)({room:"",date:"",slot:""}),s=Object(l.a)(o,2),m=s[0],u=s[1],i=Object(n.useState)([]),v=Object(l.a)(i,2),E=v[0],f=v[1],b=Object(n.useState)(["",""]),h=Object(l.a)(b,2),g=h[0],N=h[1];return Object(n.useEffect)((function(){fetch("https://eventmgmt-event.herokuapp.com/events").then((function(e){return e.json()})).then((function(e){f(e)}))}),[]),r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"}," "),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c(e.target)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"room-select"},"Select A room :"),r.a.createElement("select",{className:"form-control",id:"room-select",value:m.room,name:"room",onChange:a},r.a.createElement("option",null,"Default select"),E.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"date"},"Date"),r.a.createElement("input",{type:"date",className:"form-control",id:"date",name:"date",value:m.date,onChange:a,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"time"},"Time Slot"),r.a.createElement("select",{name:"slot",className:"form-control",onChange:a,value:m.slot,required:!0},r.a.createElement("option",null,"Default select"),r.a.createElement("option",{value:"07:00-08:00"},"07.00 AM - 08.00 AM"),r.a.createElement("option",{value:"09:00-10:00"},"09.00 AM - 10.00 AM"),r.a.createElement("option",{value:"11:00-12:00"},"11.00 AM - 12.00 PM"),r.a.createElement("option",{value:"13:00-14:00"},"01.00 PM - 02.00 PM"),r.a.createElement("option",{value:"15:00-16:00"},"03.00 PM - 04.00 PM"),r.a.createElement("option",{value:"17:00-18:00"},"05.00 PM - 06.00 PM"))),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Book")),r.a.createElement("div",{className:"mt-3 text-center"},r.a.createElement("p",{className:g[0]},g[1]))),r.a.createElement("div",{className:"col-md-3"}," ")))},f=a(15);var b=function(e){var t=e.currentUser,a=Object(n.useState)([]),c=Object(l.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){fetch("https://eventmgmt-event.herokuapp.com/events").then((function(e){return e.json()})).then((function(e){var a=[];e.forEach((function(e){return e.booking.forEach((function(n){n.user===t.email&&a.push(Object(f.a)(Object(f.a)({},n),{},{name:e.name}))}))})),s(a),console.log(a)}))}),[]),r.a.createElement("div",{className:"mt-3"},0===o.length?r.a.createElement("div",{className:"text-center"},"U have no bookings"):r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Room"),r.a.createElement("th",{scope:"col"},"Date"),r.a.createElement("th",{scope:"col"},"Timings"))),r.a.createElement("tbody",null,o.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},t),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.date),r.a.createElement("td",null,e.slot))})))))};var h=function(e){return e.Redirect,(0,e.setCurrentUser)(null),r.a.createElement("div",{className:"text-center mt-5"},"You are signed out ... Want to "," ",r.a.createElement(s.c,{to:"/login",activeClassName:"text-success"},"Login"))},g=a(20),N=a(21),w=a(23),x=a(22),y=(a(37),function(e){Object(w.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onSave=function(){var e=Object(d.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("https://eventmgmt-event.herokuapp.com/event",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:document.getElementById("username").value,password:document.getElementById("password").value})});case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,console.log(n),console.log("finalResult"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),e}return Object(N.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Sign UP"),r.a.createElement("form",{onSubmit:this.onSave},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{for:"name",className:"col-sm-2 col-form-label"},"Name"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{type:"text",id:"username",name:"name",className:"inputDisplay"}))),r.a.createElement("br",null),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{for:"password",className:"col-sm-2 col-form-label "},"Password"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{type:"password",id:"password",name:"password",className:"inputDisplay"}))),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),a}(n.Component));var k=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement(m,{currentUser:a}),r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/login",exact:!0},r.a.createElement(v,{setCurrentUser:c})),r.a.createElement(u.b,{path:"/book",exact:!0},null===a?r.a.createElement(u.a,{to:"/logout"}):r.a.createElement(E,{currentUser:a})),r.a.createElement(u.b,{path:"/view",exact:!0},null===a?r.a.createElement(u.a,{to:"/logout"}):r.a.createElement(b,{currentUser:a})),r.a.createElement(u.b,{path:"/logout",exact:!0},r.a.createElement(h,{setCurrentUser:c})),r.a.createElement(u.b,{path:"/Signup",exact:!0},r.a.createElement(y,{setCurrentUser:c})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.16eccab1.chunk.js.map