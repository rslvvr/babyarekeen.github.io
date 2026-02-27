const CACHE_NAME = 'scratch-pwa-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png'
  './assets/0651aa093334163e883f1d887018eecb.svg',
  './assets/0657407e84e87b3b71647652f531c4b6.svg',
  './assets/0ac7675eff432ef251535e9bcc11de87.wav',
'./assets/0cf664bd8289a60c58bb2d0a2061b957.svg',
'./assets/10b4c1cabb8e8fb5efad17f35dd7acd6.svg',
'./assets/10eed5b6b49ec7baf1d4b3b3fad0ac99.wav',
'./assets/11e6bac03a7bb663b7250b6e237e54b6.svg',
'./assets/127ca60c9aa1876d4911dbed9c1c602d.svg',
'./assets/14e46ec3e2ba471c2adfe8f119052307.svg',
'./assets/1554af8e2fad16d9174a9bb4191d909d.svg',
'./assets/165c75e99d732e1d455354d9ae37a459.wav',
'./assets/1b97aa98885364be54b0a4646663f6f5.png',
'./assets/1fda6dc69a55bb97be41d4263a2b3006.svg',
'./assets/20e38da34065cc132b10b3134ca8d236.wav',
'./assets/250cc58544632453382ad04d76c8220c.wav',
'./assets/28ba1ad49741904ebf43ac8ecf881ff7.svg',
'./assets/2b57149e6acdfc1696a8e46c96c62dac.svg',
'./assets/2e21c8d7d6ed95fe5a968b82887265b3.svg',
'./assets/2eb52343730f0085194770028368e650.svg',
'./assets/32ac24a7ed5a640e0d039c33019e57dd.wav',
'./assets/34b379d3163cc552abeea42365150547.svg',
'./assets/362ada3cebb99ca4c677847ebb440855.svg',
'./assets/375e374ded03403ac59e9bc56b3bf195.wav',
'./assets/37a0f89dc12c855d9acaea79a830957e.svg',
'./assets/390cb502611fb99f32a49cb0a948f659.svg',
'./assets/3ddff93900e34934004cf83380b78e92.wav',
'./assets/40ad17b309aa740a9278f38367f7b650.svg',
'./assets/423a4fda254d8753f1e728dd6acce5db.wav',
'./assets/4538b0cbd59fb187a159876965754eb3.wav',
'./assets/4851f9351c030465a550d8f11f2c0799.svg',
'./assets/4ceb9fcf09324d5d920d41c8ebbb49f9.svg',
'./assets/50794db2c4e4bdef0ac5dcc2d7976bb6.svg',
'./assets/51c8cd453a13a8bcd3d8002dddabadaf.wav',
'./assets/5724c7d182d790be21cf6d6c970cd6b6.svg',
'./assets/59b4932deb5de787644122e6779e63d3.svg',
'./assets/5c40156509e6d1142b18dad8434f9c4a.svg',
'./assets/641e51611fbf340fd93176fe312982b9.svg',
'./assets/6db05848b03c9c5ba7bd4f4bd01f80e4.wav',
'./assets/73ec133f7ceee820a22d8cdd3ee6a372.svg',
'./assets/767f9e027360e9e66f161c7733e80977.wav',
'./assets/771c93a3971be3b3ce5eeb98d197c785.svg',
'./assets/7d78da85f48b2731bc4f24685ffb508c.svg',
'./assets/80764593240a464fdb8ab028a33c4961.svg',
'./assets/8093055a27fd6599119cd6e0a60a1935.svg',
'./assets/83a9787d4cb6f3b7632b4ddfebf74367.wav',
'./assets/8659d69d3eec42fe2c2bc1d812390b61.svg',
'./assets/8787a140a40b744ac5ed6702751e90e8.wav',
'./assets/8b078c54fe4abf2ca9f38f407198748b.svg',
'./assets/8e479982932ef9eec9a6f7205995cfdd.wav',
'./assets/8e944677de81ce5bf62f41ce756508f5.svg',
'./assets/91aea60a9774c6e7e6d55cd4999b8ead.svg',
'./assets/9938f2a1ae91bd7bd43ac33fc92f86cb.svg',
'./assets/a01571f111fe44cb04c9f62fc369adff.svg',
'./assets/a106a3e5d62f6588a0fe771a6cb52ea8.wav',
'./assets/a1dd9311dacd25fd0c5e5381b984b8e0.png',
'./assets/a25903a357780ab1d2964c872dcdedc0.svg',
'./assets/a29630d05203784fd1b03b599e6a868f.svg',
'./assets/a302c0824d7137d080d28e42f98c3ba0.svg',
'./assets/a6e2c59febcc9fe3d013f54e245f8261.svg',
'./assets/aa2b0277af2705fac3a3495ff4729217.mp3',
'./assets/ad6eaf608224423f555400d00ed5f86e.svg',
'./assets/b0f7856436a898f46bc73efa8df7e61e.svg',
'./assets/b246caecd341e1f7107bf3a3aee430ba.svg',
'./assets/b3d5143ab06f3349df0da631234f00f3.wav',
'./assets/b408d58d51a759f7dcb1e588e3843b2b.svg',
'./assets/b40bbeddf71646ecaa6007f25c96383a.wav',
'./assets/bd0221fb7f7f8047333ef2c15805dadb.svg',
'./assets/c0f4b8eb78a4a805633dfce46bba7d2f.svg',
'./assets/c3a44041416bc37657acf23a6beb512d.svg',
'./assets/c93200fa93988c31b9e8ffa0f3e94009.wav',
'./assets/c9f38f7af26005ba127747563086a3b5.wav',
'./assets/d0683a4d32d3888fee77cc191a653db7.wav',
'./assets/d22863e5e993c8a2da66b0069cc5916e.svg',
'./assets/d5763f28c30a0f888ca45df7e9f185e4.wav',
'./assets/d5f5611383fbbfb43768dbc55aa0375b.svg',
'./assets/dbacadf58c139e07069e3f8e3fe9eec2.wav',
'./assets/deb491c69585110d20e764f65f696c35.svg',
'./assets/df3b45c8c9e8486b84aac9736ed67e7f.svg',
'./assets/e2b296ed18b7c38206013c5ed76cd4f0.wav',
'./assets/e314f742dd001cd2c4c03dde39b565ce.svg',
'./assets/e42c9054b982ac6447edb80176255836.svg',
'./assets/e622a8feb6416553c56de25bdedbcd0a.svg',
'./assets/ec840b767fe9fc1d4e2e30bb2ac07a72.svg',
'./assets/eea2e4e942f9fc79f78b17fdc9625662.svg',
'./assets/fa7ed183e0f12beb01ca3a401e3c37c5.svg',
'./assets/fb21580fd5cc3d9280f77190a14086e9.svg',
'./assets/fce5f50397e205b4587100b2de2d39a7.wav',
'./assets/fd370e6334cf186e5cbe1364ff84b306.svg',
'./assets/febd729d6771a3a5a49b936a45f992c4.wav',
'./assets/ffb8aaab002183ca7ab28526a1fd5d83.wav',
'./assets/project.json'
];

// Установка: кэшируем файлы
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Активация: удаляем старые кэши
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch: сначала кэш, потом сеть (Cache-first)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Кэш есть - возвращаем
        if (response) return response;
        // Кэша нет - идем в сеть
        return fetch(event.request).then(networkResponse => {
          // Клонируем и кэшируем для следующих раз
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        });
      })
  );
});
