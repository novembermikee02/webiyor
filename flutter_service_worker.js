'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1063d5f93c532933b62c1b412e99e6a1",
"version.json": "37109c6e285f7a212baf11f89d81660d",
"index.html": "7709dd4bdb6bbab96feb2ac0d6746be5",
"/": "7709dd4bdb6bbab96feb2ac0d6746be5",
"main.dart.js": "0d797c1ab3c30b4a3308d244616fc00d",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "aeff0ac0eaeb5523861fd4094aaa7acb",
"finallogo.png": "9be69c12d3cfaa19680b7d7bdf477172",
"assets/AssetManifest.json": "d72c2c8e8a923f64c990a90bd52a3013",
"assets/NOTICES": "b9aab27f2f27b589ad98798a9cdc8df0",
"assets/FontManifest.json": "7590afe1cd2ab8cca8a6a20968e2f0aa",
"assets/AssetManifest.bin.json": "62c7349f49f517c8b1dbd1d269d90eaf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "aae7bbca00275e9ba44f8c13734a99d0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "40469726c5ed792185741388e68dd9e8",
"assets/packages/unicons/icons/UniconsLine.ttf": "9e91f67b470d70332db97056f4074ac3",
"assets/packages/unicons/icons/UniconsSolid.ttf": "4d93206a45f31601d12c705d70d33464",
"assets/packages/unicons/icons/UniconsThinline.ttf": "a986c57934b947d0235ae8bf8875367f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0b502666a72f5510eff3d6924683a682",
"assets/fonts/MaterialIcons-Regular.otf": "b5889581e524fa78b18cc7919324ec73",
"assets/assets/images/ios_app_images/swiggy_ui/8.png": "17673fa87dfaee8415c65875ecfde453",
"assets/assets/images/ios_app_images/swiggy_ui/9.png": "1c3fdc61d169acbe6afcf14bc15d38b6",
"assets/assets/images/ios_app_images/swiggy_ui/14.png": "6e72ce8b4207f0a53d0216df6261f1e6",
"assets/assets/images/ios_app_images/swiggy_ui/12.png": "cfffa3d9ce7d66e52a8e51177d0c04ef",
"assets/assets/images/ios_app_images/swiggy_ui/13.png": "10c9c178e86b2c46a2328fd21f260304",
"assets/assets/images/ios_app_images/swiggy_ui/11.png": "b0ac24f3f72af35363b72b4b065c0f6a",
"assets/assets/images/ios_app_images/swiggy_ui/10.png": "e866418ef80aef5a526475763ea8196b",
"assets/assets/images/ios_app_images/swiggy_ui/4.png": "da6f6ace9ba3724ce8826ae7b49416f6",
"assets/assets/images/ios_app_images/swiggy_ui/5.png": "845c4344ede3af64f28769a8701ee5e0",
"assets/assets/images/ios_app_images/swiggy_ui/7.png": "b6885a4abce27196a71470d7eb22fa1b",
"assets/assets/images/ios_app_images/swiggy_ui/6.png": "62cf2e7507b4a58521def82272eba47e",
"assets/assets/images/ios_app_images/swiggy_ui/2.png": "e125a8553d2dec748f61b8afabb20d27",
"assets/assets/images/ios_app_images/swiggy_ui/3.png": "62b25fe673b6b8b3746b9fa9d75d62fa",
"assets/assets/images/ios_app_images/swiggy_ui/1.png": "caac833b5878337482e9a446caa24742",
"assets/assets/images/ios_app_images/Beauty_ui/4.png": "8abba6bf8a9fb3c07c8033e53e5c8445",
"assets/assets/images/ios_app_images/Beauty_ui/2.png": "8f1dbe1213da169056a2d3a10fcedccc",
"assets/assets/images/ios_app_images/Beauty_ui/3.png": "71516c91dfe887bb4ccca19a45ad9baa",
"assets/assets/images/ios_app_images/Beauty_ui/1.png": "59c7bb362416b3e251fe9908bc402be1",
"assets/assets/images/ios_app_images/food_ui/2.png": "6939ba2b7c62b4b16240a9b066001ee2",
"assets/assets/images/ios_app_images/food_ui/3.png": "e3b89d3609b6825eb3d5bb8b408f70f6",
"assets/assets/images/ios_app_images/food_ui/1.png": "0f5899f7df3458d2ff74e68fd1297f44",
"assets/assets/images/ios_app_images/coffee_ui/2.png": "4b0dfe65624ec4a97d1d1678dd905452",
"assets/assets/images/ios_app_images/coffee_ui/3.png": "9a8635487e9ba74104ed31ab8190fbfe",
"assets/assets/images/ios_app_images/coffee_ui/1.png": "3f3422acc5cc96e555ce1c6951945953",
"assets/assets/images/ios_app_images/ios2.png": "1ec10313d8d558b675ca9ad8338cbc50",
"assets/assets/images/ios_app_images/ios3.png": "b1eda6cd9ac4dccdb9dae8b002391123",
"assets/assets/images/ios_app_images/ios1.png": "17c725f34dd466ce3d61f7fb6a8cdc53",
"assets/assets/images/ios_app_images/ios4.png": "b188da2c32c5961aba59be32d1027783",
"assets/assets/images/ios_app_images/Food_Order_Ui/4.png": "98b67e78043acb1616dc7366cd9fbd56",
"assets/assets/images/ios_app_images/Food_Order_Ui/2.png": "2dcb3ff2f9ddb0e0f3665a2dfc6933d7",
"assets/assets/images/ios_app_images/Food_Order_Ui/3.png": "15cb84397dca574896df517d9cd0653b",
"assets/assets/images/ios_app_images/Food_Order_Ui/1.png": "2794e02eac010a866b7e35b271c3e23f",
"assets/assets/images/ios_app_images/cake_ui/2.png": "c5e31e02fef9d01e2de5f3b081942365",
"assets/assets/images/ios_app_images/cake_ui/1.png": "0d1d86f513f1772603996d33dd009794",
"assets/assets/images/web_app_images/web1.jpg": "805e7458d18898a817d240751542bd0d",
"assets/assets/images/web_app_images/web3.jpg": "0d09a04be14b51665ff7d979944b7bdd",
"assets/assets/images/web_app_images/web2.jpg": "491b845a9f070b4cd7ffbc2310ffb623",
"assets/assets/images/logofill.png": "ec7b669bf3420b6c9b366509117f4dd0",
"assets/assets/images/letter-w.png": "41820b63625ef50d6bd5b7ede94cf535",
"assets/assets/images/logo.png": "cc78270d2343869a868613bc085593cd",
"assets/assets/images/about_us/aboutus2.jpeg": "06f03b5961b29211585f9c576723285a",
"assets/assets/images/about_us/aboutus.jpeg": "bdbcac70d655ab2d595c077aa78c56db",
"assets/assets/logos/Webiyortitle.png": "04bff0b1918c1d5721b086798de16234",
"assets/assets/logos/primarylogo.png": "3f2fc48d33f57c4dbb715a72e6a9bf26",
"assets/assets/logos/webiyor_logo.jpeg": "2beac06968d8542ffe23f77800b96962",
"assets/assets/logos/whiteLogo.png": "0d3ed6ad5a7c54011276831a774f3060",
"assets/assets/logos/finallogo.png": "9be69c12d3cfaa19680b7d7bdf477172",
"assets/assets/logos/Webiyor18.png": "422a2451fc819ba28fc8497654a44946",
"assets/assets/logos/fulllogo.png": "89141e1bdca19f5da8fbcbd771215018",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/BasierSquare-Regular.otf": "7e7b129921da914471c7ba22e62ca75b",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/NotoColorEmoji-Regular.ttf": "37e77bbb309de679a835cf8759b84cfc",
"webiyorfavicon.png": "78a214edaee450a7c98d7867ba1faad9",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
