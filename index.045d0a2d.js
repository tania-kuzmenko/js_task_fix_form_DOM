function e(e){return(e.charAt(0).toUpperCase()+e.slice(1)).replace(/([a-z0-9])([A-Z])/g,"$1 $2")}document.querySelectorAll("form input").forEach(function(t){var l=document.createElement("label");l.className="field-label",l.htmlFor=t.id,l.textContent=e(t.name),t.placeholder=e(t.name),t.parentElement.insertBefore(l,t)});
//# sourceMappingURL=index.045d0a2d.js.map
