(this["webpackJsonpversion-control-app"]=this["webpackJsonpversion-control-app"]||[]).push([[0],{16:function(e,t,a){e.exports=a(39)},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(8),l=a.n(s);a(21),a(22),a(23);function c(){return n.a.createElement("div",{className:"headerContainer"},n.a.createElement("div",{className:"headerText",id:"ProjectNameHeader"},"Projects / ENV 1.5"),n.a.createElement("div",{className:"headerText"},n.a.createElement("h3",null,"Releases")))}var o=a(2),u=a(3);a(24);function i(e){var t=Object(r.useState)(""),a=Object(o.a)(t,2),s=a[0],l=a[1],c=Object(r.useState)(!1),i=Object(o.a)(c,2),d=i[0],m=i[1],g=Object(r.useState)(""),p=Object(o.a)(g,2),E=p[0],b=p[1],h=Object(r.useState)(!1),v=Object(o.a)(h,2),f=v[0],O=v[1],j=Object(r.useState)(""),S=Object(o.a)(j,2),N=S[0],D=S[1],R=Object(r.useState)(!1),x=Object(o.a)(R,2),k=x[0],y=x[1],C=Object(r.useState)(""),T=Object(o.a)(C,2),w=T[0],M=T[1],q=Object(r.useState)(!1),B=Object(o.a)(q,2),F=B[0],I=B[1];function P(e){e.currentTarget.type="date"}function W(e){e.currentTarget.type="text"}return n.a.createElement("form",{onSubmit:function(t){t.preventDefault(),0!==s.length&&0!==E.length&&0!==N.length&&0!==w.length&&Date.parse(E)<=Date.parse(N)?(console.log("asdfgjhgsahj"),e.setReleases([].concat(Object(u.a)(e.releases),[{versionName:s,startDate:E,releaseDate:N,description:w,progress:0,tasks:[]}])),l(""),b(""),D(""),M("")):(0===s.length&&m(!0),0===E.length&&O(!0),0!==E.length&&0!==N.length&&Date.parse(E)>Date.parse(N)&&(b(""),D(""),alert("Start date cannot be greater than release date.")),0===N.length&&y(!0),0===w.length&&I(!0))},className:"addReleaseForm"},n.a.createElement("div",{style:{width:"38%"}},n.a.createElement("input",{type:"text",placeholder:"Version name",className:"versionName",value:s,onChange:function(e){l(e.target.value),m(!1)}}),d?n.a.createElement("div",{className:"errorMesssage"},"*Version name is required."):null),n.a.createElement("div",null,n.a.createElement("input",{type:"text",placeholder:"Start date",className:"startDate",id:"startDateId",onFocus:P,onBlur:W,value:E,onChange:function(e){b(e.target.value),O(!1)}}),f?n.a.createElement("div",{className:"errorMesssage"},"*Start date is required."):null),n.a.createElement("div",null,n.a.createElement("input",{type:"text",className:"releaseDate",placeholder:"Release date",id:"releaseDateId",onFocus:P,onBlur:W,value:N,onChange:function(e){D(e.target.value),y(!1)}}),k?n.a.createElement("div",{className:"errorMesssage"},"*Release date is required."):null),n.a.createElement("div",{style:{width:"20%"}},n.a.createElement("input",{type:"text",placeholder:"Description",className:"description",value:w,onChange:function(e){M(e.target.value),I(!1)}}),F?n.a.createElement("div",{className:"errorMesssage"},"*Description is required."):null),n.a.createElement("button",{type:"submit",className:"addButton"}," Add "))}a(25);var d=a(14),m=a(15),g=a(6),p=a.n(g);a(37);function E(e){var t=Object(r.useState)(""),a=Object(o.a)(t,2),s=a[0],l=a[1],c=Object(r.useState)(!1),i=Object(o.a)(c,2),d=i[0],m=i[1],g=Object(r.useState)(""),p=Object(o.a)(g,2),E=p[0],b=p[1],h=Object(r.useState)(!1),v=Object(o.a)(h,2),f=v[0],O=v[1],j=Object(r.useState)(""),S=Object(o.a)(j,2),N=S[0],D=S[1],R=Object(r.useState)(!1),x=Object(o.a)(R,2),k=x[0],y=x[1],C=Object(r.useState)(""),T=Object(o.a)(C,2),w=T[0],M=T[1],q=Object(r.useState)(!1),B=Object(o.a)(q,2),F=B[0],I=B[1],P=Object(r.useState)(0),W=Object(o.a)(P,2),z=W[0],A=W[1],V=Object(r.useState)(!1),J=Object(o.a)(V,2),L=J[0],G=J[1];function H(e){e.currentTarget.type="date"}function U(e){e.currentTarget.type="text"}return Object(r.useEffect)((function(){l(e.currentRelease.versionName),b(e.currentRelease.startDate),D(e.currentRelease.releaseDate),M(e.currentRelease.description),A(e.currentRelease.progress)}),[e.currentRelease.versionName,e.currentRelease.startDate,e.currentRelease.releaseDate,e.currentRelease.description,e.currentRelease.progress]),n.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),0!==s.length&&0!==E.length&&0!==N.length&&0!==w.length&&Date.parse(E)<=Date.parse(N)){var a={versionName:s,startDate:E,releaseDate:N,description:w,progress:z,tasks:e.releases[e.index].tasks};e.releases[e.index]=a,e.setReleases(Object(u.a)(e.releases)),l(""),b(""),D(""),M(""),e.setShowReleaseEditModal()}else 0===s.length&&m(!0),0===E.length&&O(!0),0===N.length&&y(!0),0===w.length&&I(!0),0!==E.length&&0!==N.length&&Date.parse(E)>Date.parse(N)&&alert("Start date cannot be greater than release date.")},className:"addReleaseForm"},n.a.createElement("div",{style:{width:"25%",marginRight:"5px"}},n.a.createElement("input",{type:"text",placeholder:"Version name",className:"versionName",value:s,onChange:function(e){l(e.target.value),m(!1)}}),d?n.a.createElement("div",{className:"errorMesssage"},"*Version name is required."):null),n.a.createElement("div",{style:{marginRight:"5px"}},n.a.createElement("input",{type:"number",min:0,max:100,placeholder:"Progress",className:"versionName",value:z,onChange:function(e){A(e.target.value),G(!1)}}),L?n.a.createElement("div",{className:"errorMesssage"},"*Progress is required."):null),n.a.createElement("div",null,n.a.createElement("input",{type:"text",placeholder:"Start date",className:"startDate",onFocus:H,onBlur:U,value:E,onChange:function(e){b(e.target.value),O(!1)}}),f?n.a.createElement("div",{className:"errorMesssage"},"*Start date is required."):null),n.a.createElement("div",null,n.a.createElement("input",{type:"text",className:"releaseDate",placeholder:"Release date",onFocus:H,onBlur:U,value:N,onChange:function(e){D(e.target.value),y(!1)}}),k?n.a.createElement("div",{className:"errorMesssage"},"*Release date is required."):null),n.a.createElement("div",{style:{width:"20%"}},n.a.createElement("input",{type:"text",placeholder:"Description",className:"description",value:w,onChange:function(e){M(e.target.value),I(!1)}}),F?n.a.createElement("div",{className:"errorMesssage"},"*Description is required."):null),n.a.createElement("button",{type:"submit",className:"addButton"}," Save "))}function b(e){var t=Object(r.useState)(""),a=Object(o.a)(t,2),s=a[0],l=a[1],c=Object(r.useState)(!1),i=Object(o.a)(c,2),d=i[0],m=i[1],g=Object(r.useState)(""),p=Object(o.a)(g,2),E=p[0],b=p[1],h=Object(r.useState)(!1),v=Object(o.a)(h,2),f=v[0],O=v[1],j=Object(r.useState)(""),S=Object(o.a)(j,2),N=S[0],D=S[1],R=Object(r.useState)(!1),x=Object(o.a)(R,2),k=x[0],y=x[1],C=Object(r.useState)(0),T=Object(o.a)(C,2),w=T[0],M=T[1],q=Object(r.useState)(!1),B=Object(o.a)(q,2),F=B[0],I=B[1];function P(e){e.currentTarget.type="date"}function W(e){e.currentTarget.type="text"}return Object(r.useEffect)((function(){l(e.currentTask.startDate),b(e.currentTask.endDate),D(e.currentTask.description),M(e.currentTask.progress)}),[e.currentTask.startDate,e.currentTask.endDate,e.currentTask.description,e.currentTask.progress]),n.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),0!==s.length&&0!==E.length&&0!==N.length&&Date.parse(s)<=Date.parse(E)){var a={id:e.currentTask,startDate:s,endDate:E,description:N,progress:w};e.releases[e.index].tasks[e.taskIndex]=a,e.setReleases(Object(u.a)(e.releases)),l(""),b(""),D(""),M(""),e.setShowEditTaskModal(!1)}else 0===s.length&&m(!0),0===E.length&&O(!0),0===N.length&&y(!0),0!==s.length&&0!==E.length&&Date.parse(s)>Date.parse(E)&&alert("Start date cannot be greater than end date.")},className:"addReleaseForm"},n.a.createElement("div",{style:{marginRight:"5px",width:"20%"}},n.a.createElement("input",{type:"number",min:0,max:100,placeholder:"Progress",className:"versionName",value:w,onChange:function(e){M(e.target.value),I(!1)}}),F?n.a.createElement("div",{className:"errorMesssage"},"*Progress is required."):null),n.a.createElement("div",null,n.a.createElement("input",{type:"text",placeholder:"Start date",className:"startDate",onFocus:P,onBlur:W,value:s,onChange:function(e){l(e.target.value),m(!1)}}),d?n.a.createElement("div",{className:"errorMesssage"},"*Start date is required."):null),n.a.createElement("div",null,n.a.createElement("input",{type:"text",className:"releaseDate",placeholder:"End date",onFocus:P,onBlur:W,value:E,onChange:function(e){b(e.target.value),O(!1)}}),f?n.a.createElement("div",{className:"errorMesssage"},"*Release date is required."):null),n.a.createElement("div",{style:{width:"20%"}},n.a.createElement("input",{type:"text",placeholder:"Description",className:"description",value:N,onChange:function(e){D(e.target.value),y(!1)}}),k?n.a.createElement("div",{className:"errorMesssage"},"*Description is required."):null),n.a.createElement("button",{type:"submit",className:"addButton"}," Save "))}function h(e){var t=Object(r.useState)(""),a=Object(o.a)(t,2),s=a[0],l=a[1],c=Object(r.useState)(!1),i=Object(o.a)(c,2),d=i[0],m=i[1],g=Object(r.useState)(""),p=Object(o.a)(g,2),E=p[0],b=p[1],h=Object(r.useState)(!1),v=Object(o.a)(h,2),f=v[0],O=v[1],j=Object(r.useState)(""),S=Object(o.a)(j,2),N=S[0],D=S[1],R=Object(r.useState)(!1),x=Object(o.a)(R,2),k=x[0],y=x[1],C=Object(r.useState)(0),T=Object(o.a)(C,2),w=T[0],M=T[1],q=Object(r.useState)(!1),B=Object(o.a)(q,2),F=B[0],I=B[1];function P(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<5;a++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}function W(e){e.currentTarget.type="date"}function z(e){e.currentTarget.type="text"}return n.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),0!==s.length&&0!==E.length&&0!==N.length&&Date.parse(s)<=Date.parse(E)){var a={id:P(),startDate:s,endDate:E,description:N,progress:w};e.releases[e.index].tasks=[].concat(Object(u.a)(e.releases[e.index].tasks),[a]),e.setReleases(Object(u.a)(e.releases)),l(""),b(""),D(""),M(""),e.setShowCreateTaskModal(!1),e.setShowReleaseTasks(!0)}else 0===s.length&&m(!0),0===E.length&&O(!0),0===N.length&&y(!0),0!==s.length&&0!==E.length&&Date.parse(s)>Date.parse(E)&&(l(""),b(""),alert("Start date cannot be greater than end date."))},className:"addReleaseForm"},n.a.createElement("div",{style:{marginRight:"5px",width:"20%"}},n.a.createElement("input",{type:"number",min:0,max:100,placeholder:"Progress",className:"versionName",value:w,onChange:function(e){M(e.target.value),I(!1)}}),F?n.a.createElement("div",{className:"errorMesssage"},"*Progress is required."):null),n.a.createElement("div",null,n.a.createElement("input",{type:"text",placeholder:"Start date",className:"startDate",onFocus:W,onBlur:z,value:s,onChange:function(e){l(e.target.value),m(!1)}}),d?n.a.createElement("div",{className:"errorMesssage"},"*Start date is required."):null),n.a.createElement("div",null,n.a.createElement("input",{type:"text",className:"releaseDate",placeholder:"End date",onFocus:W,onBlur:z,value:E,onChange:function(e){b(e.target.value),O(!1)}}),f?n.a.createElement("div",{className:"errorMesssage"},"*Release date is required."):null),n.a.createElement("div",{style:{width:"20%"}},n.a.createElement("input",{type:"text",placeholder:"Description",className:"description",value:N,onChange:function(e){D(e.target.value),y(!1)}}),k?n.a.createElement("div",{className:"errorMesssage"},"*Description is required."):null),n.a.createElement("button",{type:"submit",className:"addButton"}," Save "))}function v(e){var t=Object(r.useState)(!1),a=Object(o.a)(t,2),s=a[0],l=a[1],c=Object(r.useState)(!1),i=Object(o.a)(c,2),g=i[0],v=i[1],f=Object(r.useState)(!1),O=Object(o.a)(f,2),j=O[0],S=O[1],N=Object(r.useState)(!1),D=Object(o.a)(N,2),R=D[0],x=D[1],k=Object(r.useState)(!1),y=Object(o.a)(k,2),C=y[0],T=y[1],w=Object(r.useState)(null),M=Object(o.a)(w,2),q=M[0],B=M[1],F=Object(r.useRef)();!function(e,t){Object(r.useEffect)((function(){var a=function(a){e.current&&!e.current.contains(a.target)&&t(a)};return document.addEventListener("mousedown",a),function(){document.removeEventListener("mousedown",a)}}),[e,t])}(F,(function(){return x(!1)}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("tr",{key:e.release.versionName,style:{cursor:"pointer"},onDragStart:function(t){return function(e,t){e.dataTransfer.setData("text/plain",JSON.stringify(t))}(t,e.release)},draggable:!0,onDragOver:function(e){return function(e){e.preventDefault()}(e)},onDrop:function(t){return function(t,a){var r=JSON.parse(t.dataTransfer.getData("text")),n=t.currentTarget.children[1].innerText,s=t.currentTarget.children[6].innerText;if("dropped"===a){var l=e.releases,c=l.findIndex((function(e){return e.versionName===r.versionName&&e.description===r.description})),o=l.findIndex((function(e){return e.versionName===n&&e.description===s}));l.splice(c,1),l.splice(o,0,r),e.setReleases(Object(u.a)(l))}}(t,"dropped")}},n.a.createElement("td",null,n.a.createElement("span",{className:"moveIcon"},n.a.createElement(d.a,null))," "),n.a.createElement("td",{onClick:function(){return l(!s)}},e.release.versionName),n.a.createElement("td",null,n.a.createElement("span",{style:0===e.release.progress?{backgroundColor:"rgb(203,230,250)",fontSize:"15px",fontWeight:"bold",color:"rgb(58,79,102)"}:e.release.progress>0&&e.release.progress<100?{backgroundColor:"rgb(252,245,209)",color:"rgb(100,102,102)",fontSize:"15px",fontWeight:"bold"}:{backgroundColor:"rgb(232,250,242)",fontSize:"15px",fontWeight:"bold",color:"rgb(116,160,140)"}},0===e.release.progress?"INPROGRESS":e.release.progress>0&&e.release.progress<100?"UNRELEASED":"RELEASED")),n.a.createElement("td",null,n.a.createElement("progress",{value:e.release.progress,max:100,min:0}," ")),n.a.createElement("td",null,e.release.startDate),n.a.createElement("td",null,e.release.releaseDate),n.a.createElement("td",null,e.release.description),n.a.createElement("td",null,n.a.createElement("span",{className:"actionsMenu",onClick:function(){return x(!R)},ref:F},n.a.createElement(m.a,null)),R?n.a.createElement("div",{className:"actionMenu",ref:F},n.a.createElement("div",{className:"eachTaskMenu",onClick:function(){x(!1),T(!0)}},"Edit"),n.a.createElement("div",{className:"eachTaskMenu",onClick:function(){x(!1);var t=e.releases.filter((function(t){return t.versionName!==e.release.versionName}));e.setReleases(t)}},"Delete"),n.a.createElement("div",{className:"eachTaskMenu",onClick:function(){x(!1),S(!j)}},"Create a task")):null)),s?e.release&&e.release.tasks&&e.release.tasks.length>0?e.release.tasks.map((function(e,t){return n.a.createElement(n.a.Fragment,null,n.a.createElement("tr",null,n.a.createElement("td",null),n.a.createElement("td",null,"Task ",t+1),n.a.createElement("td",null,n.a.createElement("span",{style:0===e.progress?{backgroundColor:"rgb(203,230,250)",fontSize:"15px",fontWeight:"bold",color:"rgb(58,79,102)"}:e.progress>0&&e.progress<100?{backgroundColor:"rgb(252,245,209)",color:"rgb(100,102,102)",fontSize:"15px",fontWeight:"bold"}:{backgroundColor:"rgb(232,250,242)",fontSize:"15px",fontWeight:"bold",color:"rgb(116,160,140)"}},0===parseInt(e.progress)?"TO DO":parseInt(e.progress)>0&&parseInt(e.progress)<100?"IN PROGRESS":"DONE")),n.a.createElement("td",null,n.a.createElement("progress",{value:e.progress?e.progress:0,max:100,min:0}," ")),n.a.createElement("td",null,e.startDate?e.startDate:""),n.a.createElement("td",null,e.endDate?e.endDate:""),n.a.createElement("td",null,e.description?e.description:""),n.a.createElement("td",null,n.a.createElement("button",{className:"addButton",onClick:function(){B(t),v(!g)}},"Edit"))))})):e.release&&e.release.tasks&&0===e.release.tasks.length?n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"8"},"No tasks available")):null:null,g?n.a.createElement(p.a,{isOpen:g,onRequestClose:function(){return v(!1)},style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"95vw"}}},n.a.createElement(b,{currentRelease:e.release,releases:e.releases,setReleases:e.setReleases,taskIndex:q,index:e.index,currentTask:e.release.tasks[q],setShowEditTaskModal:function(){return v(!1)}})):null,C?n.a.createElement(p.a,{isOpen:C,onRequestClose:function(){return T(!1)},style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"95vw"}}},n.a.createElement(E,{setReleases:e.setReleases,releases:e.releases,index:e.index,currentRelease:e.release,setShowReleaseEditModal:function(){return T(!1)}})):null,j?n.a.createElement(p.a,{isOpen:j,onRequestClose:function(){return S(!1)},style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"95vw"}}},n.a.createElement(h,{setShowReleaseTasks:l,setReleases:e.setReleases,releases:e.releases,index:e.index,currentRelease:e.release,setShowCreateTaskModal:function(){return S(!1)}})):null)}a(38);function f(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),a=t[0],s=t[1];return n.a.createElement("div",{className:"releaseContainer"},n.a.createElement("div",{className:"tableWrap"},n.a.createElement("table",{className:"tableBodyScroll"},n.a.createElement("thead",null,n.a.createElement("tr",{className:"tableHead"},n.a.createElement("th",null," "),n.a.createElement("th",null,"Version"),n.a.createElement("th",null,"Status"),n.a.createElement("th",null,"Progress"),n.a.createElement("th",null,"Start date"),n.a.createElement("th",null,"Release date"),n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Actions"))),n.a.createElement("tbody",null,a.map((function(e,t){return n.a.createElement(v,{setReleases:s,releases:a,release:e,index:t,key:t})}))))),n.a.createElement(i,{setReleases:s,releases:a}))}var O=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(c,null),n.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.f75cfad5.chunk.js.map