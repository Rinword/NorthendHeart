"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","dba0c9dcaa37dc83c826bb282768aa55"],["/static/css/main.a9c1f57b.css","53da73b1424b5516b93fc8457b392e2d"],["/static/js/main.6c3d29ec.js","444a899d818c3176f265454829792578"],["/static/media/1.0ce825d7.png","0ce825d728edd17279ddb92290f0c06b"],["/static/media/1.6a30f133.png","6a30f13371f33c387f1460659b6e8e3b"],["/static/media/1.9d997ca9.png","9d997ca98bd5fe2550da791c0bcbe764"],["/static/media/1.b70daba7.png","b70daba770f18d8c23192e560fd909b7"],["/static/media/1.dc217ab6.png","dc217ab606c2f809a9d3e4cf212e1c0c"],["/static/media/1.fd28ec2a.png","fd28ec2adc1d1dd5df751b57c54b5675"],["/static/media/2.25f372e5.png","25f372e5ccdaf40ab70699a8e9f1ef15"],["/static/media/2.2ce3644c.png","2ce3644c33d919a73b7bdc02ac7392e7"],["/static/media/2.5556fccc.png","5556fccca798bdc8fdb795d35476e2ae"],["/static/media/2.604861d6.png","604861d67c8de416d770fbaddf604074"],["/static/media/3.2edd2b5f.png","2edd2b5fbc545cc106bbc765f015d91c"],["/static/media/3.4c0416bf.png","4c0416bf415c17dd7e7e93f520e54fbf"],["/static/media/3.4d03fb47.png","4d03fb479d95b70d09c25ef5646638b9"],["/static/media/3.77bb3919.png","77bb3919c4a96bd2ac7f8eececd4cbdc"],["/static/media/Roboto-Bold.36b5bab5.ttf","36b5bab58a18b9c924861a4ccbf1a790"],["/static/media/Roboto-Light.d5c46b13.ttf","d5c46b134c17b2138dcd1bb0efa67049"],["/static/media/Roboto-Medium.9745415b.ttf","9745415b8a2a8b9a2480a12f7e2d3ad3"],["/static/media/Roboto-Regular.5673da52.ttf","5673da52c98bb6cb33ada5aaf649703e"],["/static/media/Roboto-Thin.b75296fd.ttf","b75296fd297ccd2f033cdc13688d38d6"],["/static/media/close_icon.c4c396d3.svg","c4c396d3afb908f878b4835a616ba1af"],["/static/media/contacts.9fed6609.svg","9fed66097de64fbc9ad8acb0a5f1a1c4"],["/static/media/feature1.9abaa117.jpg","9abaa1174375b6692ed0194961c064f8"],["/static/media/feature2.c0c82df1.jpg","c0c82df10fad99aee9b620d4739a744c"],["/static/media/features.35e15826.svg","35e15826d6cef37609ad912b389fed76"],["/static/media/features.ba411bd7.svg","ba411bd774dd794270fddc7f0faf17b5"],["/static/media/home.07e32803.svg","07e32803668cd5b38915b065a81b9cbf"],["/static/media/house1.03d6e0cd.jpg","03d6e0cdd92b3d582fce76b69a364b1b"],["/static/media/house2.f0ade6f7.jpg","f0ade6f7d8b02b63ab08ea414c498312"],["/static/media/house3.cd6e189c.jpg","cd6e189ccc6572a9376da02b2665146b"],["/static/media/light.2b29fecd.png","2b29fecd0baceb0cd151bb3ddd5b90f4"],["/static/media/logo.eeabd4ed.png","eeabd4ed036387dc87ffc25075a6903c"],["/static/media/lvl.1f809ba1.png","1f809ba1ff9327309a03d6e5134e9139"],["/static/media/msrk.43b09f03.png","43b09f03c149d297138ece8ec298c168"],["/static/media/next.e692a03e.svg","e692a03efd6b60f831695f11a7b3fb7d"],["/static/media/prev.184e2b4e.svg","184e2b4e3b4ad745ab8de66ff0c88820"],["/static/media/projects.f291960f.svg","f291960f7297c34465993fb1ed06b16c"],["/static/media/roof.64deadfc.png","64deadfcd87e601864eba2329f7f09db"],["/static/media/sandwich.fc697cf0.svg","fc697cf0acf9e9c00764051f0eaef4e6"],["/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["/static/media/slide1.19b9fdfa.jpg","19b9fdfac798185a4d3b9fdbe37a5993"],["/static/media/technologies.76dc7691.svg","76dc7691cf37e8ffdf7e0f0a8ba7286d"],["/static/media/telegram.624f0956.svg","624f0956b00016dab4bb9aad1ce0bb26"],["/static/media/visibility_off.884585a4.svg","884585a4b0b2591321cc055fd79b6d8c"],["/static/media/visibility_on.34590f18.svg","34590f18cd49ae6950f4449e40904e26"],["/static/media/whatsapp.1c472081.svg","1c472081bcc96cdb24105f42cf2fd621"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var d=new URL(e);return c&&d.pathname.match(c)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),d=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),d]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});