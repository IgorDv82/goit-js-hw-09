!function(){var t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};t.stopBtn.setAttribute("disabled","true");var e=0;t.startBtn.addEventListener("click",(function(){e=setInterval((function(){return t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.startBtn.setAttribute("disabled",!0),t.stopBtn.removeAttribute("disabled")})),t.stopBtn.addEventListener("click",(function(){t.startBtn.removeAttribute("disabled"),t.stopBtn.setAttribute("disabled","true"),clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.056c55d1.js.map