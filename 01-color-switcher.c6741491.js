const t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")};let e=null;t.stop.disabled=!0,t.start.addEventListener("click",(function(){t.start.disabled=!0,t.stop.disabled=!1,e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.stop.addEventListener("click",(function(){t.start.disabled=!1,t.stop.disabled=!0,clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.c6741491.js.map
