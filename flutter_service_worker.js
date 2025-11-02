'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9a0c5357c67a5df6440fc7408d163363",
".git/config": "c7d0f133ae3943a639acb54418fdf25d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "31686e33677e39b50b02a94620844e21",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0363d6a2d6c4b8659022421db3c1ccec",
".git/logs/refs/heads/main": "2499d255e654add6441dec7788e49f0b",
".git/logs/refs/remotes/origin/main": "2c89b03d0b8f96e91f43d4bb5ea9f19c",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/06/8ad9bb737cb5a7076cbeba330aed25f8303dda": "24af1b4729451db35df8e5bd963e4eee",
".git/objects/09/ab83ff6fa7471ddb8797668b2808b3be9c5b7b": "725acb4d99a75553b463ac875707eb5f",
".git/objects/15/5d83679ab1a96495e383489e7f997763c94c3d": "17c71c3d619501cebccc53bab943ec4b",
".git/objects/18/5c31e2ea5d53cee4bb7c60b715e3ecc2d3ce36": "3536f46da3089bbcb18d739c56604192",
".git/objects/19/262eec4625fcd223eee82f8a74d85beb6d6ee9": "e7cc5318e20c6e91c0e43a91e80cbfec",
".git/objects/2c/59e97e90e84620b6c949d3b5622db2567cdf8a": "2df0c0009cac05e14d43e8ebdd1eba75",
".git/objects/2e/08561fc7e441f75fb616aab866e8e170076a8d": "eea012df2c378c1d1122a100c00512aa",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/570e0e5bd04ac8665a3bdd011b53f4865177d5": "4430ea3e613bbbd6369926af0ed6eba6",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/6b413084c4700f0e6b15b3b9ae4ad54629357c": "366fc5be1dbfbf2dc67c2bbaab74b9a2",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/b16fae18e7373f7431b30d3cbec303162dafa4": "a34502b55f3c730b4ea0675ff97016ad",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/892317caa318ae94dd16c1bdc084c6dd6fd039": "3b7e4c14c9b57e260f48b7a8ad0d7f0c",
".git/objects/60/c6030aa4321968488a37aae3cca9baddc52107": "b632eeae5f8e394e5ea25d4a637dbc7b",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/75/e7d9f71dd5c1da5306ed28172c9c5946b17007": "c09e4d65cd73c1722622df287bd496aa",
".git/objects/78/b502b927a8ab208027bdc13a484f9738fb4818": "086252e6d78db2e60b39ccb9305b78fb",
".git/objects/79/50bd389816c01c89e804fca64111994981f6d2": "33b2dd22549ba35dabc2328f99d36cc2",
".git/objects/7c/900c30fce02006d93bb8bfb77ead211a343cdf": "d87c682195a874e8562dc541b6abeb21",
".git/objects/86/c3a21c2c1dc16e57e4bf2df0f9475f28d13c15": "a095bddc31ccd6e8b8bf2d03a8d1751f",
".git/objects/88/82aa3d569d3355a0d3accb22bf6deff2331842": "e23713a1858246f4e60b5f77bcd88f33",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8f/bd2a8ca6a6e093270777729b1d888b7dc7f287": "7a051e24c863d7130abc3f0bbb702b5b",
".git/objects/90/5f93b83aefe0487f72de53d1237823be768e30": "6bb18394b62e0f9a1fb82695589ecce8",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/4d090c7894d079bb97331c32c787f74ba94bea": "d22db48d1d1d8a63fa1b8be1a7b7979e",
".git/objects/bd/9c0d50d4f74ea4eff892b32054a46ff0dceb65": "5fa76b426581513277416289d9502651",
".git/objects/be/1d7a785dd8f3002efbfc0f08527dcb4d69b553": "787beaf56a6026c79d32420fbe10c57a",
".git/objects/c7/781a7ddd7f13f05f68b59189102b9b0e99aeff": "7be872a9ae495304a3248acc1fb8a29b",
".git/objects/d0/a49f78c691f77aaa477f9f360ebba6dec49954": "f0e759d5cecaf4d907c6772044730877",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/1d9cf76502bd8a26c47cc41734760bf36453eb": "88992a650294db7ea437f0d9a65faec7",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e0/4793d10f886df24bd0f4d9d06c3a45837ca739": "2c611bf96a74147c1305fbcc16e741eb",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ef/1ef295e22eef3738950a590c326986ac1f40bc": "eeb29664de3d2570a1948703290ac34b",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/refs/heads/main": "013e29fdb2bf0ce17e4ba2aa5171eb48",
".git/refs/remotes/origin/main": "013e29fdb2bf0ce17e4ba2aa5171eb48",
"assets/AssetManifest.bin": "9bba1c341d611d1d7c37deaa4f1a95d7",
"assets/AssetManifest.bin.json": "a4c6770148f6b8279ec821ad0327ecbe",
"assets/AssetManifest.json": "0fdbc6b7d7304ad3f1de15744598ded3",
"assets/assets/img/LogoNome.png": "996801ed29e5e9532ebd6d55a89b7da1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "55c81557f57c97443dfc5c376c7d44b0",
"assets/NOTICES": "90202adbd8a6d11df5d3bcb804f86e8a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "119640a2f8ed7509b6b2bed8537a2891",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "93eaab38625cc42e8e3b327e3b8c2d4b",
"icons/Icon-192.png": "59517d3d842921ccd6f050dab682be6f",
"icons/Icon-512.png": "db1f73e782e212e19874acccc03adcf3",
"icons/Icon-maskable-192.png": "59517d3d842921ccd6f050dab682be6f",
"icons/Icon-maskable-512.png": "db1f73e782e212e19874acccc03adcf3",
"index.html": "388d7d1ae59b2ffd741cc9680778be78",
"/": "388d7d1ae59b2ffd741cc9680778be78",
"main.dart.js": "adaf583ba063843e65702a8a5ff66185",
"manifest.json": "d2b18ec8492f2ece60ede3734a056517",
"version.json": "788400b00b48de7f27c176f5714c419c"};
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
