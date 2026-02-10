import{g as r,a as s,b as t}from"./locationUtils.CAdnG0xJ.js";const i={mendoza:{id:"mendoza",label:"Mendoza",plants:[{id:"sede-central",name:"Sede Central",whatsapp:"5492612003553",address:"Godoy Cruz, Mendoza",hours:"Lun a Vie: 8:00 - 17:00",email:"ventasmza@hormiserv.com.ar"},{id:"san-martin",name:"San Martín",whatsapp:"542613698767",address:"San Martín, Mendoza",hours:"Lun a Vie: 8:00 - 17:00",email:"gnovotny@hormiserv.com.ar"},{id:"lujan",name:"Luján de Cuyo",whatsapp:"5492612003553",address:"Luján de Cuyo, Mendoza",hours:"Lun a Vie: 8:00 - 17:00",email:"ventasmza@hormiserv.com.ar"},{id:"valle-uco",name:"Valle de Uco",whatsapp:"5492615508841",address:"Valle de Uco, Mendoza",hours:"Lun a Vie: 8:00 - 17:00",email:"marcelogoldsack@hormiserv.com.ar"}],salesRouting:{toEmails:["ventasmza@hormiserv.com.ar"],ccEmails:["info@hormiserv.com.ar"]}},"san-juan":{id:"san-juan",label:"San Juan",plants:[{id:"san-juan-central",name:"Hormiserv San Juan",whatsapp:"5492645669337",address:"San Juan Capital",hours:"Lun a Vie: 8:00 - 17:00",email:"comercial@hormiserv.com.ar"}],salesRouting:{toEmails:["comercial@hormiserv.com.ar"],ccEmails:["info@hormiserv.com.ar"]}}};function l(n){return i[n]||null}document.addEventListener("DOMContentLoaded",()=>{const n=r();if(!n){window.location.href="/#cotizacion-trigger";return}const a=l(n);if(!a){localStorage.removeItem("hormiserv_location"),window.location.href="/";return}const e=document.getElementById("province-name");e&&(e.textContent=a.label),c(a.plants);const o=document.getElementById("quote-province");o&&(o.value=a.label)});function c(n){const a=document.getElementById("plants-container");a&&(a.innerHTML=n.map(e=>{const o=s(e.whatsapp,t(e.name));return`
        <div class="border-l-2 border-l-purple-200 p-4  hover:bg-black/2 rounded-r-xl transition-colors">
          <div class="flex items-center justify-between gap-4">
            <div class="flex-1">
              <h3 class="font-bold text-hormi-purple mb-1">${e.name}</h3>
              ${e.address?`<p class="text-sm text-gray-600 mb-1">${e.address}</p>`:""}
              ${e.hours?`<p class="text-xs text-gray-500">${e.hours}</p>`:""}
            </div>
            <a
              href="${o}"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-shrink-0 bg-[#25D366] text-white hover:scale-105 font-semibold p-4 rounded-full transition-all duration-300 inline-flex items-center gap-2  shadow-md hover:shadow-xl"
            >
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>
      `}).join(""))}
