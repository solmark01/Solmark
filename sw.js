const C="solmark-v2",A=["./","index.html","portal.html","manifest.json","icons/icon-192.png","icons/icon-512.png","icons/app-barberia.png","icons/app-rotiseria.png","icons/app-estetica.png","icons/app-gimnasio.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)));self.skipWaiting()});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(e.request.method!=="GET")return;if(u.origin!==location.origin&&u.hostname!=="www.gstatic.com")return;
 e.respondWith(caches.open(C).then(c=>fetch(e.request).then(r=>{if(r.ok)c.put(e.request,r.clone());return r}).catch(()=>c.match(e.request))))});
