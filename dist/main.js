(()=>{"use strict";(()=>{const e=JSON.parse('[{"name":"Christopher L Sanders","phone":"769-232-1807"},{"name":"Frances J Nolte","phone":"901-287-0419"}]'),n=document.createElement("div");n.className="contact-list",e.forEach((e=>{const a=document.createElement("div");a.className="contact",a.innerHTML='<h2 class="name">name</h2> <p class="phone">phone</p> ',a.querySelector(".name").innerHTML=e.name,a.querySelector(".phone").innerHTML=e.phone,n.appendChild(a)})),document.body.appendChild(n)})()})();