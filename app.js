/**
 * BANGBOO | 3D SHOWCASE - MODERN STUDIO ENGINE
 * 核心前端邏輯 (app.js)
 * 1:1 復刻 Polyform 3D 展示展廳排版架構
 * 支援「≡」抽屜收納、左側 Metadata 與開關組、右側 3D 舞台、底部作品卡片切換列
 */

// ==========================================================================
// 1. 6 大模型資料庫配置 (MODELS_CONFIG)
// ==========================================================================
const MODELS_CONFIG = {
  // 模型 1：伊埃斯 01 號 (6款換臉版) - MakerWorld #551834
  mw_551834: {
    id: 'mw_551834',
    codeName: 'PROJECT: EOUS-MODULAR',
    category: 'Modular Face-Plates System, Bambu Multi-Part',
    title: '伊埃斯 01 (6款可換臉版)',
    author: 'AleHG',
    platform: 'MakerWorld #551834',
    sourceUrl: 'https://makerworld.com/zh/models/551834',
    embedUrl: 'https://makerworld.com/zh/models/551834',
    photoUrl: './images/mw_551834_eous_faces.png',
    photoDesc: 'MakerWorld #551834 · 6 款替換面罩實體組裝與 AMS 分色打印實拍',
    glbUrl: './models/mw_551834_eous_faces.glb',
    baseHeight: 110,
    baseWeight: 155,
    baseTime: 380,
    dimensions: '92 × 78 × 110 mm (推薦 75% 比例)',
    printSpec: '0.20mm Layer · 磁吸/卡榫可換面罩 · PLA (155g)',
    colorDesc: '配備 6 款表情磁吸替換面罩，無 AMS 亦可分件列印後卡榫組裝！',
    swatches: [
      { bg: '#f4f4f5', title: '主體消光白 #f4f4f5' },
      { bg: '#111827', title: '磁吸面罩框 #111827' },
      { bg: '#bef264', title: '可換表情檸檬黃 #bef264' },
      { bg: '#ea580c', title: '標誌橙巾 #ea580c' },
      { bg: '#64748b', title: '卡扣底板 #64748b' }
    ],
    colorTable: [
      { bg: '#f4f4f5', name: '兜帽外殼 / 雙耳外殼 / 腿部支撐', code: 'HEX: #F4F4F5 · 消光白' },
      { bg: '#111827', name: '磁吸面罩凹槽底座 / 外套邊框', code: 'HEX: #111827 · 曜石黑碳纖灰' },
      { bg: '#bef264', name: '6款替換表情 (眨眼/大笑/發呆)', code: 'HEX: #BEF264 · 螢光青檸黃' },
      { bg: '#ea580c', name: '經典立體領巾 / 裝飾耳襯', code: 'HEX: #EA580C · 伊埃斯亮橙' },
      { bg: '#64748b', name: '展示卡榫底板 / 面罩吸鐵卡槽', code: 'HEX: #64748B · 工業深灰金屬' }
    ],
    stlUrl: './models/mw_551834.stl',
    glbUrl: './models/bangboo_eous.glb',
    downloads: [
      { type: 'STL', file: './models/mw_551834.stl', name: 'mw_551834.stl', class: 'dl-stl', desc: '5.10 MB · 原作者 100% 正版全身可換臉 STL · 106,995 面精緻閉合網格' },
      { type: 'GLB', file: './models/bangboo_eous.glb', name: 'bangboo_eous.glb', class: 'dl-glb', desc: '552 KB · 雲端實時 3D 渲染模型' }
    ]
  },

  // 模型 4：邦布樂園雕像 2 號 - MakerWorld #2848847
  mw_2848847: {
    id: 'mw_2848847',
    codeName: 'PROJECT: PARK-MONUMENT',
    category: 'Architectural Figurine Statue, Monolithic Solid',
    title: '邦布樂園・邦布雕像 2 號',
    author: 'MakerWorld 原創',
    platform: 'MakerWorld #2848847',
    sourceUrl: 'https://makerworld.com/zh/models/2848847',
    embedUrl: 'https://makerworld.com/zh/models/2848847',
    photoUrl: './images/mw_2848847_park_statue.jpg',
    photoDesc: 'MakerWorld #2848847 · 邦布樂園實體紀念石雕打印成品 (免支撐一體)',
    glbUrl: './models/bagboo_fanmade.glb',
    baseHeight: 80,
    baseWeight: 31,
    baseTime: 130,
    dimensions: '60 × 60 × 80 mm',
    printSpec: '0.16mm Layer · 單色一體 (31g) / AMS多色 (81g)',
    colorDesc: '新艾利都邦布主題樂園實體紀念石雕，底座平穩免支撐，極致好印。',
    swatches: [
      { bg: '#94a3b8', title: '水泥石雕灰 #94a3b8' },
      { bg: '#475569', title: '大理石深階 #475569' },
      { bg: '#b45309', title: '青銅紀念銘牌 #b45309' },
      { bg: '#cbd5e1', title: '石雕高光 #cbd5e1' },
      { bg: '#334155', title: '園區基座 #334155' }
    ],
    colorTable: [
      { bg: '#94a3b8', name: '雕像主體 / 招手手臂 / 圓弧雙耳', code: 'HEX: #94A3B8 · 水泥仿石灰 PLA' },
      { bg: '#475569', name: '雙層大理石紀念方柱底座', code: 'HEX: #475569 · 深灰玄武岩' },
      { bg: '#b45309', name: '樂園編號銘牌 (Bonbon Park #2)', code: 'HEX: #B45309 · 仿古青銅黃銅' },
      { bg: '#cbd5e1', name: '風化立體刻線與高光面', code: 'HEX: #CBD5E1 · 淺石灰' },
      { bg: '#334155', name: '底盤防滑配重槽', code: 'HEX: #334155 · 工業深灰' }
    ],
    stlUrl: './models/mw_2848847.stl',
    downloads: [
      { type: 'STL', file: './models/mw_2848847.stl', name: 'mw_2848847.stl', class: 'dl-stl', desc: '11.9 MB · 原作者 100% 正版雕像 STL (網頁安全小於25MB) · 249,766 面高精細網格' },
      { type: 'GLB', file: './models/bagboo_fanmade.glb', name: 'bagboo_fanmade.glb', class: 'dl-glb', desc: '168 KB · 雲端實時 3D 渲染模型' }
    ]
  },

  // 模型 5：邦布 CLICKER 按鍵神器 - MakerWorld #1027664
  mw_1027664: {
    id: 'mw_1027664',
    codeName: 'PROJECT: CLICKER-EDC',
    category: 'Mechanical Tactile Fidget Toy, Print-in-Place',
    title: '邦布 CLICKER 按鍵神器',
    author: 'YEZAO',
    platform: 'MakerWorld #1027664',
    sourceUrl: 'https://makerworld.com/zh/models/1027664',
    embedUrl: 'https://makerworld.com/zh/models/1027664',
    photoUrl: './images/mw_1027664_fidget_clicker.webp',
    photoDesc: 'MakerWorld #1027664 · 隨身 EDC 咔嗒解壓神器實體組裝成品',
    glbUrl: './models/mw_1027664_fidget_clicker.glb',
    baseHeight: 65,
    baseWeight: 51,
    baseTime: 120,
    dimensions: '45 × 32 × 65 mm (隨身 EDC 款)',
    printSpec: '0.16mm Layer · 無 AMS 分色組裝 (51g) · 免支撐',
    colorDesc: '指尖 EDC 咔嗒減壓神器！雙微動按鈕與倒角防滑，聲音清脆回彈。',
    swatches: [
      { bg: '#1e293b', title: '曜石黑外殼 #1e293b' },
      { bg: '#ea580c', title: '雙按鍵亮橙 #ea580c' },
      { bg: '#f8fafc', title: '邦布裝飾耳 #f8fafc' },
      { bg: '#38bdf8', title: '指示冰藍 #38bdf8' },
      { bg: '#64748b', title: '掛繩孔扣 #64748b' }
    ],
    colorTable: [
      { bg: '#1e293b', name: 'EDC 外殼方圓盒 (主機身)', code: 'HEX: #1E293B · 消光黑 (PLA/PETG)' },
      { bg: '#ea580c', name: '雙顆微動按鍵帽 (清脆按壓反饋)', code: 'HEX: #EA580C · 伊埃斯標誌亮橙' },
      { bg: '#f8fafc', name: '頂部標誌性裝飾雙耳', code: 'HEX: #F8FAFC · 純白' },
      { bg: '#38bdf8', name: '微動開關彈片卡位槽', code: 'HEX: #38BDF8 · 冰藍金屬' },
      { bg: '#64748b', name: '底部防摔掛繩環扣', code: 'HEX: #64748B · 槍灰金屬' }
    ],
    downloads: [
      { type: 'STL', file: './models/mw_1027664_fidget_clicker_3dprint.stl', name: 'mw_1027664_fidget_clicker_3dprint.stl', class: 'dl-stl', desc: '83 KB · 3D 列印 EDC 結構件 STL · 零支撐一體列印' },
      { type: 'GLB', file: './models/mw_1027664_fidget_clicker.glb', name: 'mw_1027664_fidget_clicker.glb', class: 'dl-glb', desc: '112 KB · 全彩 PBR EDC 模型' }
    ]
  },

  // 模型 6：發財布 2025 暴富按鍵 - MakerWorld #1141374
  mw_1141374: {
    id: 'mw_1141374',
    codeName: 'PROJECT: PROSPERITY-2025',
    category: 'Festive Spring Fortune EDC, Dual Click Mechanism',
    title: '發財布 (2025 暴富按鍵 EDC)',
    author: 'YEZAO',
    platform: 'MakerWorld #1141374',
    sourceUrl: 'https://makerworld.com/zh/models/1141374',
    embedUrl: 'https://makerworld.com/zh/models/1141374',
    photoUrl: './images/mw_1141374_prosperity_riches.webp',
    photoDesc: 'MakerWorld #1141374 · 2025 新春暴富開運按鍵實物打印效果',
    glbUrl: './models/mw_1141374_prosperity_riches.glb',
    baseHeight: 65,
    baseWeight: 39,
    baseTime: 110,
    dimensions: '45 × 32 × 65 mm (招財隨身款)',
    printSpec: '0.16mm Layer · 新春絲綢紅金 · 僅約 39g 耗材',
    colorDesc: '新年限定款：大紅喜慶主殼搭配「發財」金幣雙按鍵與頂部金元寶！',
    swatches: [
      { bg: '#dc2626', title: '新春開運紅 #dc2626' },
      { bg: '#eab308', title: '元寶暴富金 #eab308' },
      { bg: '#18181b', title: '炭黑銘文刻字 #18181b' },
      { bg: '#fef08a', title: '亮金元寶 #fef08a' },
      { bg: '#7f1d1d', title: '深紅邊框 #7f1d1d' }
    ],
    colorTable: [
      { bg: '#dc2626', name: '新春喜慶主外殼 / 紅色裝飾短耳', code: 'HEX: #DC2626 · 中國紅 (Silk Red)' },
      { bg: '#eab308', name: '雙顆金幣按鍵帽 (清脆暴富反饋)', code: 'HEX: #EAB308 · 絲綢金 (Gold Silk)' },
      { bg: '#18181b', name: '立體「發」「財」刻字牌印', code: 'HEX: #18181B · 炭黑馬克漆' },
      { bg: '#fef08a', name: '頂部招財立體金元寶', code: 'HEX: #FEF08A · 璨金高光' },
      { bg: '#7f1d1d', name: '底部防丟如意紅繩吊扣', code: 'HEX: #7F1D1D · 絳紅金屬' }
    ],
    downloads: [
      { type: 'STL', file: './models/mw_1141374_prosperity_riches_3dprint.stl', name: 'mw_1141374_prosperity_riches_3dprint.stl', class: 'dl-stl', desc: '113 KB · 2025 新春開運發財布 STL · 免支撐卡榫' },
      { type: 'GLB', file: './models/mw_1141374_prosperity_riches.glb', name: 'mw_1141374_prosperity_riches.glb', class: 'dl-glb', desc: '158 KB · 全彩 PBR 招財模型' }
    ]
  }
};

let currentActiveModelKey = 'mw_551834';
let currentViewMode = 'webgl'; // 'webgl' or 'embed'

let scene, camera, renderer, controls;
let modelRoot = null;
let stageModelsGroup = null; // 專屬模型容器，徹底防止模型殘留與重疊
let activeModelLoadVersion = 0; // 防異步並發重疊版本號
let originalMaterials = new Map();
let isWireframeActive = false;
let isShadedActive = true;
let isAutoRotating = true;

// ==========================================================================
// 2. 初始化 Three.js 視圖與光源 (Studio Clean Light)
// ==========================================================================
function initThreeScene() {
  const container = document.getElementById('threeContainer');
  const canvas = document.getElementById('threeCanvas');
  if (!container || !canvas) return;

  const width = container.clientWidth;
  const height = container.clientHeight;

  // Scene with Clean High-Tech Studio Color
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf8fafc); // Clean Studio White-Gray
  scene.fog = new THREE.FogExp2(0xf8fafc, 0.025);

  // Camera
  camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
  camera.position.set(0, 1.6, 6.2);

  // Renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // OrbitControls
  controls = new THREE.OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.target.set(0, 1.25, 0);
  controls.maxDistance = 12;
  controls.minDistance = 2;
  controls.maxPolarAngle = Math.PI / 2 + 0.05;
  controls.autoRotate = isAutoRotating;
  controls.autoRotateSpeed = 1.6;

  // Studio Lighting (Clean Soft 3-Point Light)
  setupStudioLighting();

  // 建立全域獨立模型容器 (所有模型只加到此 Group，切換時徹底清空，杜絕重疊)
  stageModelsGroup = new THREE.Group();
  stageModelsGroup.name = 'stageModelsGroup';
  scene.add(stageModelsGroup);

  // Listeners
  window.addEventListener('resize', onWindowResize);
  animate();
}

function setupStudioLighting() {
  // Controlled studio lighting so darker materials don't get overexposed
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.30);
  scene.add(ambientLight);

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x475569, 0.25);
  scene.add(hemiLight);

  // 主光源 (Key Light) 依使用者指示調整至【模型左前方】(-5.5, 7.5, 6.0)
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.25);
  keyLight.position.set(-5.5, 7.5, 6.0);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 2048;
  keyLight.shadow.mapSize.height = 2048;
  keyLight.shadow.camera.near = 0.5;
  keyLight.shadow.camera.far = 25;
  keyLight.shadow.camera.left = -6;
  keyLight.shadow.camera.right = 6;
  keyLight.shadow.camera.top = 6;
  keyLight.shadow.camera.bottom = -6;
  keyLight.shadow.bias = -0.0001;
  scene.add(keyLight);

  // 輔助補光 (Fill Light) 放置於右前方，適度柔化右側陰影
  const fillLight = new THREE.DirectionalLight(0x94a3b8, 0.55);
  fillLight.position.set(5.0, 4.5, 4.0);
  scene.add(fillLight);

  // 輪廓邊緣光 (Rim Light) 放置於右後方，清晰勾勒邊緣
  const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.55);
  rimLight.position.set(3.0, 6.0, -5.0);
  scene.add(rimLight);

  // Studio Shadow Floor
  const shadowGeo = new THREE.PlaneGeometry(16, 16);
  const shadowMat = new THREE.ShadowMaterial({ opacity: 0.12 });
  const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
  shadowMesh.rotation.x = -Math.PI / 2;
  shadowMesh.position.y = -0.66;
  shadowMesh.receiveShadow = true;
  scene.add(shadowMesh);
}

// ==========================================================================
// 3. 模型載入器 (GLB & 程序化備援)
// ==========================================================================
// 徹底清空舞台容器，釋放幾何體與材質，100% 杜絕模型重疊殘留
function clearStageModel() {
  if (!stageModelsGroup) return;
  while (stageModelsGroup.children.length > 0) {
    const child = stageModelsGroup.children[0];
    stageModelsGroup.remove(child);
    child.traverse((node) => {
      if (node.geometry) node.geometry.dispose();
      if (node.material) {
        if (Array.isArray(node.material)) node.material.forEach(m => m.dispose());
        else node.material.dispose();
      }
    });
  }
  originalMaterials.clear();
  modelRoot = null;
}

async function loadModelByKey(modelKey) {
  const modelData = MODELS_CONFIG[modelKey];
  if (!modelData) return;

  const threeContainer = document.getElementById('threeContainer');
  const skfbContainer = document.getElementById('sketchfabContainer');
  const mwContainer = document.getElementById('makerworldContainer');
  const loadingOverlay = document.getElementById('loadingOverlay');

  const thisLoadVersion = ++activeModelLoadVersion;
  clearStageModel();

  if (loadingOverlay) loadingOverlay.classList.remove('fade-out');

  // 更新 MakerWorld 官方展台內容
  const mwPhoto = document.getElementById('mwMainPhoto');
  const mwPhotoDesc = document.getElementById('mwPhotoDesc');
  const mwBadge = document.getElementById('mwModelIdBadge');
  const btnMwDl = document.getElementById('btnMwDirectDownload');
  const mwTitle = document.getElementById('mwCtaTitle');
  const mwSub = document.getElementById('mwCtaSub');

  if (mwPhoto) mwPhoto.src = modelData.photoUrl || '';
  if (mwPhotoDesc) mwPhotoDesc.textContent = modelData.photoDesc || '';
  if (mwBadge) mwBadge.textContent = modelData.platform || '';
  if (btnMwDl) btnMwDl.href = modelData.sourceUrl || '';
  if (mwTitle) mwTitle.textContent = `${modelData.title} · 官方原版檔案`;
  if (mwSub) mwSub.textContent = `原作者：${modelData.author} · 建議耗材：${modelData.printSpec}`;

  // ========================================================================
  // Tier 1: 記憶體內建 Base64 STL (零網路延遲，直接雙擊或本機預覽 100% 成功)
  // ========================================================================
  const b64Key = 'MODEL_STL_' + modelKey.toUpperCase();
  if (window[b64Key]) {
    try {
      const buffer = base64ToArrayBuffer(window[b64Key]);
      renderStlBuffer(buffer, modelData.title, thisLoadVersion);
      return;
    } catch (e) {
      console.warn('Base64 parse fallback', e);
    }
  }

  // ========================================================================
  // Tier 2: 依序 Fetch 多個候選 STL 檔案路徑 (英數安全路徑、根目錄、中文路徑)
  // ========================================================================
  const candidateStlPaths = [
    modelData.stlUrl,
    `./models/${modelKey}.stl`,
    `./${modelKey}.stl`,
    './models/bangboo_eous_3dprint.stl',
    './models/bangboo_eous.stl',
    modelData.id === 'mw_551834' ? './models/依埃思 - 全身 - 可換臉.stl' : null,
    modelData.id === 'mw_2848847' ? './models/obj_1_邦布乐园雕像2.stl' : null
  ].filter(Boolean);

  for (const stlPath of candidateStlPaths) {
    if (thisLoadVersion !== activeModelLoadVersion) return;
    try {
      const res = await fetch(encodeURI(stlPath));
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        if (thisLoadVersion === activeModelLoadVersion) {
          renderStlBuffer(buffer, modelData.title, thisLoadVersion);
          return;
        }
      }
    } catch (e) {
      // 靜默嘗試下一路徑
    }
  }

  if (thisLoadVersion !== activeModelLoadVersion) return;

  // ========================================================================
  // Tier 3: 【雲端 100% 3D 開啟保險】：若 STL 尚未上傳或 404，自動載入 GitHub 遠端已存在的 GLB 模型
  // 徹底杜絕網頁進入時掉入平面照片卡，保證雲端訪客進入時 100% 開啟可旋轉 3D 舞台！
  // ========================================================================
  const fallbackGlb = modelData.glbUrl || './models/bangboo_eous.glb';
  renderGlbUrl(fallbackGlb, modelData.title, thisLoadVersion);
}

function base64ToArrayBuffer(base64) {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

function renderStlBuffer(buffer, modelTitle, thisLoadVersion) {
  if (thisLoadVersion !== activeModelLoadVersion) return;
  const threeContainer = document.getElementById('threeContainer');
  const skfbContainer = document.getElementById('sketchfabContainer');
  const mwContainer = document.getElementById('makerworldContainer');
  const loadingOverlay = document.getElementById('loadingOverlay');

  if (threeContainer) threeContainer.style.display = 'block';
  if (skfbContainer) skfbContainer.style.display = 'none';
  if (mwContainer) mwContainer.style.display = 'none';

  const loader = new THREE.STLLoader();
  const geometry = loader.parse(buffer);
  geometry.computeVertexNormals();
  geometry.center();
  // 3D 列印 CAD Z-Up 轉 Three.js Y-Up；保持光源不變，正面面向鏡頭
  geometry.rotateX(-Math.PI / 2);

  // 調淡一倍高對比石墨灰 (#5a636f)，輪廓光影分明，既深邃立體又不死黑
  const material = new THREE.MeshStandardMaterial({
    color: 0x5a636f,
    roughness: 0.38,
    metalness: 0.10
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  originalMaterials.set(mesh.uuid, material.clone());

  clearStageModel();
  modelRoot = new THREE.Group();
  modelRoot.add(mesh);
  normalizeModelTransform(modelRoot);
  stageModelsGroup.add(modelRoot);
  applyShadingState();

  if (loadingOverlay) loadingOverlay.classList.add('fade-out');
  showToast(`✨ 3D 舞台已載入正版 STL 拓撲模型：${modelTitle}`);
}

function renderGlbUrl(glbUrl, modelTitle, thisLoadVersion) {
  if (thisLoadVersion !== activeModelLoadVersion) return;
  const threeContainer = document.getElementById('threeContainer');
  const skfbContainer = document.getElementById('sketchfabContainer');
  const mwContainer = document.getElementById('makerworldContainer');
  const loadingOverlay = document.getElementById('loadingOverlay');

  if (threeContainer) threeContainer.style.display = 'block';
  if (skfbContainer) skfbContainer.style.display = 'none';
  if (mwContainer) mwContainer.style.display = 'none';

  const loader = new THREE.GLTFLoader();
  loader.load(
    glbUrl,
    (gltf) => {
      if (thisLoadVersion !== activeModelLoadVersion) return;
      clearStageModel();
      modelRoot = gltf.scene;
      modelRoot.traverse((c) => {
        if (c.isMesh) {
          c.castShadow = true;
          c.receiveShadow = true;
          originalMaterials.set(c.uuid, c.material.clone());
        }
      });
      normalizeModelTransform(modelRoot);
      stageModelsGroup.add(modelRoot);
      applyShadingState();
      if (loadingOverlay) loadingOverlay.classList.add('fade-out');
      showToast(`✨ 3D 舞台已載入雲端正版模型：${modelTitle}`);
    },
    undefined,
    (err) => {
      if (thisLoadVersion !== activeModelLoadVersion) return;
      // 容錯防護：若當前 GLB 失敗且非 bangboo_eous.glb，自動嘗試通用的 bangboo_eous.glb
      if (glbUrl !== './models/bangboo_eous.glb') {
        renderGlbUrl('./models/bangboo_eous.glb', modelTitle, thisLoadVersion);
        return;
      }
      // 萬一所有 3D 檔案皆不可讀取，才降級至 MakerWorld 官方展台
      if (threeContainer) threeContainer.style.display = 'none';
      if (mwContainer) mwContainer.style.display = 'block';
      if (loadingOverlay) loadingOverlay.classList.add('fade-out');
      showToast(`💡 請至 MakerWorld 下載正版原檔 (.stl / .3mf)，拖入此處即可 3D 旋轉檢視`);
    }
  );
}

function normalizeModelTransform(meshGroup) {
  const box = new THREE.Box3().setFromObject(meshGroup);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());

  const maxDim = Math.max(size.x, size.y, size.z);
  const targetScale = 3.5 / (maxDim || 1);
  meshGroup.scale.set(targetScale, targetScale, targetScale);

  meshGroup.position.x = -center.x * targetScale;
  meshGroup.position.y = -box.min.y * targetScale - 0.65;
  meshGroup.position.z = -center.z * targetScale;
}

// 支援使用者拖放本地下載的正版 3D 檔案 (.stl, .obj, .glb)
function loadUserLocalModel(file) {
  const threeContainer = document.getElementById('threeContainer');
  const skfbContainer = document.getElementById('sketchfabContainer');
  const mwContainer = document.getElementById('makerworldContainer');
  const loadingOverlay = document.getElementById('loadingOverlay');

  if (threeContainer) threeContainer.style.display = 'block';
  if (skfbContainer) skfbContainer.style.display = 'none';
  if (mwContainer) mwContainer.style.display = 'none';
  if (loadingOverlay) loadingOverlay.classList.remove('fade-out');

  const reader = new FileReader();
  const ext = file.name.split('.').pop().toLowerCase();

  reader.onload = function(e) {
    const contents = e.target.result;
    if (modelRoot) {
      scene.remove(modelRoot);
      originalMaterials.clear();
      modelRoot = null;
    }

    if (ext === 'stl') {
      const loader = new THREE.STLLoader();
      const geometry = loader.parse(contents);
      geometry.computeVertexNormals();
      const material = new THREE.MeshStandardMaterial({
        color: 0x424850,
        roughness: 0.38,
        metalness: 0.12
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      modelRoot = new THREE.Group();
      modelRoot.add(mesh);
      normalizeModelTransform(modelRoot);
      scene.add(modelRoot);
      applyShadingState();
      if (loadingOverlay) loadingOverlay.classList.add('fade-out');
      showToast(`✨ 成功載入正版 STL 檔案：${file.name}`);
    } else if (ext === 'glb' || ext === 'gltf') {
      const loader = new THREE.GLTFLoader();
      loader.parse(contents, '', (gltf) => {
        modelRoot = gltf.scene;
        modelRoot.traverse(c => {
          if (c.isMesh) {
            c.castShadow = true;
            c.receiveShadow = true;
            originalMaterials.set(c.uuid, c.material.clone());
          }
        });
        normalizeModelTransform(modelRoot);
        scene.add(modelRoot);
        applyShadingState();
        if (loadingOverlay) loadingOverlay.classList.add('fade-out');
        showToast(`✨ 成功載入正版 GLB 檔案：${file.name}`);
      });
    } else if (ext === 'obj') {
      const loader = new THREE.OBJLoader();
      modelRoot = loader.parse(new TextDecoder().decode(contents));
      normalizeModelTransform(modelRoot);
      stageModelsGroup.add(modelRoot);
      applyShadingState();
      if (loadingOverlay) loadingOverlay.classList.add('fade-out');
      showToast(`✨ 成功載入正版 OBJ 檔案：${file.name}`);
    } else if (ext === '3mf') {
      try {
        const loader = new THREE.ThreeMFLoader();
        const object = loader.parse(contents);
        modelRoot = object;
        normalizeModelTransform(modelRoot);
        stageModelsGroup.add(modelRoot);
        applyShadingState();
        if (loadingOverlay) loadingOverlay.classList.add('fade-out');
        showToast(`✨ 成功載入正版 3MF 專案檔案：${file.name}`);
      } catch (err) {
        if (loadingOverlay) loadingOverlay.classList.add('fade-out');
        showToast(`❌ 3MF 解析異常：${err.message}`);
      }
    } else {
      if (loadingOverlay) loadingOverlay.classList.add('fade-out');
      showToast(`⚠️ 支援 .stl / .3mf / .obj / .glb 原版模型檔案`);
    }
  };

  if (ext === 'obj') {
    reader.readAsArrayBuffer(file);
  } else {
    reader.readAsArrayBuffer(file);
  }
}

// ==========================================================================
// 4. 動態模型切換核心 (switchActiveModel)
// ==========================================================================
function switchActiveModel(modelKey) {
  if (!MODELS_CONFIG[modelKey]) return;
  currentActiveModelKey = modelKey;
  const data = MODELS_CONFIG[modelKey];

  // 1. 底部卡片選中狀態高亮 (1:1 復刻附圖選中狀態)
  document.querySelectorAll('.shelf-card').forEach(card => {
    const isTarget = card.dataset.model === modelKey;
    card.classList.toggle('active', isTarget);
  });

  // 2. 更新左側欄文字資訊 (Project Metadata)
  const codeNameEl = document.getElementById('projectCodeName');
  const catEl = document.getElementById('projectCategory');
  const authorEl = document.getElementById('metaAuthor');
  const platformEl = document.getElementById('metaPlatform');
  const specEl = document.getElementById('metaPrintSpec');

  if (codeNameEl) codeNameEl.textContent = data.codeName;
  if (catEl) catEl.textContent = data.category;
  if (authorEl) authorEl.textContent = data.author;
  if (platformEl) platformEl.textContent = data.platform;
  if (specEl) specEl.textContent = data.printSpec;

  // 3. 核心：所有 6 大模型一律使用 WebGL 3D 立體引擎實時渲染，保證滑鼠 360° 自由旋轉視角！
  loadModelByKey(modelKey);

  // 5. 更新側邊抽屜內容 (Drawer)
  updateDrawerContent(data);

  // 6. 3D 列印尺寸計算器連動
  updateSlicingEstimates(data.baseHeight);
}

function updateDrawerContent(data) {
  // 來源連結
  const drawerSourceLink = document.getElementById('drawerSourceLink');
  const drawerAuthor = document.getElementById('drawerAuthor');
  if (drawerSourceLink) drawerSourceLink.href = data.sourceUrl;
  if (drawerAuthor) drawerAuthor.textContent = `${data.platform} 原作者: ${data.author} ↗`;

  // 塗裝描述與色票
  const drawerColorDesc = document.getElementById('drawerColorDesc');
  const drawerSwatches = document.getElementById('drawerSwatches');
  if (drawerColorDesc) drawerColorDesc.textContent = data.colorDesc;
  if (drawerSwatches) {
    drawerSwatches.innerHTML = data.swatches.map(s => 
      `<span class="swatch" style="background: ${s.bg};" title="${s.title}"></span>`
    ).join('');
  }

  // 部件色彩表格
  const colorTable = document.getElementById('partsColorTable');
  if (colorTable) {
    colorTable.innerHTML = data.colorTable.map(c => `
      <div class="part-color-row">
        <div class="part-color-block" style="background: ${c.bg};"></div>
        <div class="part-info">
          <span class="part-name">${c.name}</span>
          <span class="part-code">${c.code}</span>
        </div>
      </div>
    `).join('');
  }

  // 下載清單
  const dlList = document.getElementById('downloadCardList');
  if (dlList) {
    let dlHtml = data.downloads.map(dl => `
      <a href="${dl.file}" download="${dl.name}" class="download-card">
        <div class="dl-icon-box ${dl.class}">${dl.type}</div>
        <div class="dl-details">
          <strong>${dl.type === 'STL' ? '3D 列印切片模型 (STL)' : '全彩 PBR 材質模型 (GLB)'}</strong>
          <p>${dl.desc}</p>
        </div>
        <span class="btn-download-action">下載 ${dl.type}</span>
      </a>
    `).join('');

    if (data.platform.includes('MakerWorld')) {
      dlHtml += `
        <a href="${data.sourceUrl}" target="_blank" rel="noopener noreferrer" class="download-card" style="border-color: #2563eb;">
          <div class="dl-icon-box" style="background: rgba(37,99,235,0.15); color: #2563eb;">3MF</div>
          <div class="dl-details">
            <strong>MakerWorld 官方多色 3MF 列印配置</strong>
            <p>Bambu Studio / OrcaSlicer 原生切片工程檔</p>
          </div>
          <span class="btn-download-action" style="background: #2563eb;">開啟 ↗</span>
        </a>
      `;
    }
    dlList.innerHTML = dlHtml;
  }
}

// ==========================================================================
// 5. 開關與控制按鈕 (Wireframe / Shaded / Rotate)
// ==========================================================================
function setupShowcaseSwitches() {
  // Wireframe ON / OFF
  document.querySelectorAll('#swWireframe .switch-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const isTurnOn = btn.dataset.opt === 'on';
      isWireframeActive = isTurnOn;
      document.querySelectorAll('#swWireframe .switch-opt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyShadingState();
      showToast(isTurnOn ? '已開啟幾何網格透視 (Wireframe ON)' : '已關閉網格透視 (Wireframe OFF)');
    });
  });

  // Shaded ON / OFF (PBR vs Clay)
  document.querySelectorAll('#swShaded .switch-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const isTurnOn = btn.dataset.opt === 'on';
      isShadedActive = isTurnOn;
      document.querySelectorAll('#swShaded .switch-opt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyShadingState();
      showToast(isTurnOn ? '官方原色塗裝模式 (PBR Shaded)' : '消光素模白胚檢視 (Clay Raw)');
    });
  });

  // Auto-Rotate ON / OFF
  document.querySelectorAll('#swRotate .switch-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const isTurnOn = btn.dataset.opt === 'on';
      isAutoRotating = isTurnOn;
      if (controls) controls.autoRotate = isTurnOn;
      document.querySelectorAll('#swRotate .switch-opt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

function applyShadingState() {
  if (!modelRoot) return;

  modelRoot.traverse((child) => {
    if (child.isMesh) {
      const origMat = originalMaterials.get(child.uuid) || child.userData.initialMaterial;
      if (isShadedActive) {
        child.material = origMat ? origMat.clone() : child.material;
      } else {
        child.material = new THREE.MeshStandardMaterial({
          color: 0x424850,
          roughness: 0.40,
          metalness: 0.08
        });
      }
      child.material.wireframe = isWireframeActive;
    }
  });
}

// 相機快捷按鈕
function setupCameraHUD() {
  document.getElementById('btnCamFront')?.addEventListener('click', () => {
    if (!controls || !camera) return;
    camera.position.set(0, 1.4, 6.2);
    controls.target.set(0, 1.25, 0);
    controls.update();
  });

  document.getElementById('btnCamIso')?.addEventListener('click', () => {
    if (!controls || !camera) return;
    camera.position.set(4.2, 3.2, 4.6);
    controls.target.set(0, 1.25, 0);
    controls.update();
  });

  document.getElementById('btnCamZoomReset')?.addEventListener('click', () => {
    if (!controls || !camera) return;
    camera.position.set(0, 1.6, 6.2);
    controls.target.set(0, 1.25, 0);
    controls.update();
  });
}

// ==========================================================================
// 6. 頂部「≡」抽屜選單互動
// ==========================================================================
function setupDrawerEvents() {
  const drawer = document.getElementById('sideDrawer');
  const btnOpen = document.getElementById('btnOpenDrawer');
  const btnClose = document.getElementById('btnCloseDrawer');

  btnOpen?.addEventListener('click', () => {
    drawer?.classList.add('open');
  });

  btnClose?.addEventListener('click', () => {
    drawer?.classList.remove('open');
  });

  drawer?.addEventListener('click', (e) => {
    if (e.target === drawer) {
      drawer.classList.remove('open');
    }
  });

  // 頂部 [LAUNCH VIEWER] 切換按鈕
  const btnViewEngine = document.getElementById('btnSwitchViewEngine');
  const viewText = document.getElementById('viewEngineText');
  const threeBox = document.getElementById('threeContainer');
  const skfbBox = document.getElementById('sketchfabContainer');

  btnViewEngine?.addEventListener('click', () => {
    if (currentViewMode === 'webgl') {
      currentViewMode = 'embed';
      threeBox.style.display = 'none';
      skfbBox.style.display = 'block';
      if (viewText) viewText.textContent = '[SWITCH TO 3D WEBGL]';
      showToast('🌐 已切換至官方嵌入檢視器');
    } else {
      currentViewMode = 'webgl';
      threeBox.style.display = 'block';
      skfbBox.style.display = 'none';
      if (viewText) viewText.textContent = '[LAUNCH VIEWER]';
      onWindowResize();
      showToast('⚡ 已切換至 WebGL 3D 渲染視圖');
    }
  });
}

// ==========================================================================
// 7. 3D 列印縮放試算器與檔案上傳
// ==========================================================================
function updateSlicingEstimates(targetHeight) {
  const currentConfig = MODELS_CONFIG[currentActiveModelKey] || MODELS_CONFIG.eous;
  const sliderVal = document.getElementById('sliderValue');
  const estDimensions = document.getElementById('estDimensions');
  const estWeight = document.getElementById('estWeight');
  const estTime = document.getElementById('estTime');
  const estCost = document.getElementById('estCost');

  const scale = targetHeight / currentConfig.baseHeight;
  const height = Math.round(targetHeight);
  const weight = Math.round(currentConfig.baseWeight * Math.pow(scale, 2.2));
  const totalMins = Math.round(currentConfig.baseTime * Math.pow(scale, 1.6));
  const hours = Math.floor(totalMins / 60);
  const mins = totalMins % 60;

  const costMin = Math.round(weight * 0.38);
  const costMax = Math.round(weight * 0.45);

  if (sliderVal) sliderVal.textContent = `${height} mm`;
  if (estDimensions) estDimensions.textContent = currentConfig.dimensions;
  if (estWeight) estWeight.textContent = `約 ${weight} 克 (PLA)`;
  if (estTime) estTime.textContent = `約 ${hours} 小時 ${mins} 分`;
  if (estCost) estCost.textContent = `約 ${costMin} ~ ${costMax} 元 (社課免費)`;
}

function setupSlicingCalculator() {
  const slider = document.getElementById('sizeSlider');
  if (slider) {
    slider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      updateSlicingEstimates(val);
      document.querySelectorAll('.preset-chip').forEach(c => {
        c.classList.toggle('active', parseInt(c.dataset.size, 10) === val);
      });
    });
  }

  document.querySelectorAll('.preset-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const size = parseInt(chip.dataset.size, 10);
      if (slider) slider.value = size;
      updateSlicingEstimates(size);
      document.querySelectorAll('.preset-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });

  // 頂部 [LAUNCH VIEWER] 切換與開啟按鈕
  document.getElementById('btnSwitchViewEngine')?.addEventListener('click', () => {
    const data = MODELS_CONFIG[currentActiveModelKey];
    if (!data) return;

    const threeContainer = document.getElementById('threeContainer');
    const skfbContainer = document.getElementById('sketchfabContainer');
    const mwContainer = document.getElementById('makerworldContainer');

    if (false) {
      window.open(data.sourceUrl, '_blank');
      showToast(`🌐 已在新分頁開啟 ${data.title} 官方 Sketchfab 原版 3D 展廳`);
    } else {
      // MakerWorld: 在展台與本地 3D 畫布間切換
      if (mwContainer && mwContainer.style.display !== 'none') {
        mwContainer.style.display = 'none';
        if (threeContainer) threeContainer.style.display = 'block';
        showToast(`🕹️ 已切換至 3D 互動畫布 (請拖入已下載的 .stl 原檔預覽)`);
      } else {
        if (threeContainer) threeContainer.style.display = 'none';
        if (mwContainer) mwContainer.style.display = 'block';
        showToast(`🏢 已返回 MakerWorld 官方原創展台`);
      }
    }
  });

  // MakerWorld 展台本地檔案上傳監聽
  document.getElementById('mwLocalFileInput')?.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length > 0) {
      loadUserLocalModel(e.target.files[0]);
    }
  });

  // 全域 3D 舞台拖曳支援
  const stageBox = document.getElementById('stageViewportBox');
  if (stageBox) {
    stageBox.addEventListener('dragover', (e) => {
      e.preventDefault();
      stageBox.classList.add('drag-over');
    });
    stageBox.addEventListener('dragleave', () => {
      stageBox.classList.remove('drag-over');
    });
    stageBox.addEventListener('drop', (e) => {
      e.preventDefault();
      stageBox.classList.remove('drag-over');
      if (e.dataTransfer && e.dataTransfer.files.length > 0) {
        loadUserLocalModel(e.dataTransfer.files[0]);
      }
    });
  }

  document.getElementById('btnToggleFullscreen')?.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });
}

function setupModelUploadHandlers() {
  const dropzone = document.getElementById('modelDropzone');
  const fileInput = document.getElementById('modelFileInput');
  if (!dropzone || !fileInput) return;

  dropzone.addEventListener('dragover', (e) => { e.preventDefault(); });
  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) handleFile(e.dataTransfer.files[0]);
  });
  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) handleFile(e.target.files[0]);
  });

  function handleFile(file) {
    const ext = file.name.split('.').pop().toLowerCase();
    showToast(`⏳ 正在讀取 ${file.name}...`);
    const reader = new FileReader();

    if (ext === 'stl') {
      reader.onload = function(e) {
        try {
          const geometry = new THREE.STLLoader().parse(e.target.result);
          const mat = new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.4 });
          const mesh = new THREE.Mesh(geometry, mat);
          replaceModel(mesh, file.name);
        } catch (err) {
          showToast('❌ 解析 STL 失敗：' + err.message);
        }
      };
      reader.readAsArrayBuffer(file);
    } else if (ext === 'glb' || ext === 'gltf') {
      reader.onload = function(e) {
        new THREE.GLTFLoader().parse(e.target.result, '', (gltf) => {
          replaceModel(gltf.scene, file.name);
        });
      };
      reader.readAsArrayBuffer(file);
    }
  }

  function replaceModel(mesh, name) {
    clearStageModel();
    modelRoot = mesh;
    normalizeModelTransform(mesh);
    stageModelsGroup.add(mesh);
    document.getElementById('sideDrawer')?.classList.remove('open');
    showToast(`✅ 成功匯入模型：${name}`);
  }
}

// ==========================================================================
// 8. 視窗調整與渲染循環
// ==========================================================================
function onWindowResize() {
  const container = document.getElementById('threeContainer');
  if (!container || !camera || !renderer) return;

  const width = container.clientWidth;
  const height = container.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

function animate() {
  requestAnimationFrame(animate);

  if (controls) controls.update();
  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// ==========================================================================
// 9. DOM Ready
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initThreeScene();

  // 底部作品卡片點擊切換
  document.querySelectorAll('.shelf-card').forEach(card => {
    card.addEventListener('click', () => {
      const modelKey = card.dataset.model;
      if (modelKey && modelKey !== currentActiveModelKey) {
        switchActiveModel(modelKey);
      }
    });
  });

  setupShowcaseSwitches();
  setupCameraHUD();
  setupDrawerEvents();
  setupSlicingCalculator();
  setupModelUploadHandlers();

  // 初始載入預設模型 (模型 1：伊埃斯 6款可換臉版)
  switchActiveModel('mw_551834');
});
