/** 設定データ **/

const LIST_PURPOSE = [
  { label: "寿",                          value: "寿" },
  { label: "御祝",                        value: "御祝" },
  { label: "内祝",                        value: "内祝" },
  { label: "御挨拶",                      value: "御挨拶" },
  { label: "御礼",                        value: "御礼" },
  { label: "謝礼（目上の人への御礼）",      value: "謝礼" },
  { label: "寸志（目上から目下の人へ）",    value: "寸志" },
  { label: "粗品（ちょっとした贈り物）",    value: "粗品" },
  { label: "奉納（お祭りなどの感謝）",      value: "奉納" },
  { label: "奉献（地鎮祭・行事など）",      value: "奉献" },
  { label: "御年賀",                      value: "御年賀" },
  { label: "御中元",                      value: "御中元" },
  { label: "御歳暮",                      value: "御歳暮" },
  { label: "暑中御見舞",                  value: "暑中御見舞" },
  { label: "残暑御見舞",                  value: "残暑御見舞" },
  { label: "寒中御見舞",                  value: "寒中御見舞" },
  { label: "〇〇賞",                      value: "〇〇賞" },
  { label: "入学祝",                      value: "祝御入学" },
  { label: "入学祝のお返し",              value: "入学内祝" },
  { label: "卒業祝",                      value: "祝御卒業" },
  { label: "卒業祝のお返し",              value: "卒業内祝" },
  { label: "成人式のお祝い",              value: "祝御成人" },
  { label: "成人祝のお返し",              value: "成人内祝" },
  { label: "父の日",                      value: "父の日御祝" },
  { label: "母の日",                      value: "母の日御祝" },
  { label: "敬老の日",                    value: "敬老の日御祝" },
  { label: "長寿祝：寿福",                value: "寿福" },
  { label: "長寿祝：祝御長寿（丁寧）",    value: "祝御長寿" },
  { label: "長寿祝：賀寿（古希など）",    value: "賀寿" },
  { label: "還暦祝（６０歳）",            value: "祝還暦" },
  { label: "古希祝（７０歳）",            value: "御古希御祝" },
  { label: "喜寿祝（７７歳）",            value: "御喜寿御祝" },
  { label: "傘寿祝（８０歳）",            value: "御傘寿御祝" },
  { label: "米寿祝（８８歳）",            value: "御米寿御祝" },
  { label: "卒寿祝（９０歳）",            value: "御卒寿御祝" },
  { label: "白寿祝（９９歳）",            value: "御白寿御祝" },
  { label: "結婚祝",                      value: "御結婚御祝" },
  { label: "結婚祝のお返し",              value: "内祝" },
  { label: "出産祝",                      value: "御出産御祝" },
  { label: "出産祝のお返し（名入り）",    value: "出産内祝（生まれた子供の名前）" },
  { label: "命名祝",                      value: "祝命名" },
  { label: "命名御礼",                    value: "命名御礼" },
  { label: "新築祝",                      value: "新築御祝" },
  { label: "新築祝のお返し",              value: "新築記念" },
  { label: "開店祝",                      value: "御祝" },
  { label: "引越し挨拶",                  value: "御挨拶" },
  { label: "病気や怪我など",              value: "御見舞" },
  { label: "御見舞のお返し（完治）",      value: "快気祝" },
  { label: "御見舞のお返し（療養）",      value: "快気内祝" },
  { label: "法要供え物（一般）",          value: "御供" },
  { label: "法要供え物（四十九日以降）",  value: "御仏前" },
  { label: "通夜・お葬式",                value: "御霊前" },
  { label: "香典返し",                    value: "偲び草" },
  { label: "法要・香典（主に東日本）",    value: "志" },
  { label: "法要・香典（主に西日本）",    value: "粗供養" }
];

const LIST_NOSHI = [
  { label: "紺",          path: "static/noshi/NOSHI_KON.png" },
  { label: "赤",          path: "static/noshi/NOSHI_RED.png" },
  { label: "なし",        path: "" }
];

const LIST_MIZUHIKI = [
  { label: "花結び赤",    path: "static/mizuhiki/A3_MIZUHIKI_HANAMUSUBI_RED.png" },
  { label: "あわじ赤",    path: "static/mizuhiki/A3_MIZUHIKI_AWAJI_RED.png" },
  { label: "結び切り赤",  path: "static/mizuhiki/A3_MIZUHIKI_MUSUBIKIRI_RED.png" },
  { label: "赤棒",        path: "static/mizuhiki/A3_MIZUHIKI_AKABOU.png" },
  { label: "花結び金",    path: "static/mizuhiki/A3_MIZUHIKI_HANAMUSUBI_GOLD.png" },
  { label: "あわじ金",    path: "static/mizuhiki/A3_MIZUHIKI_AWAJI_GOLD.png" },
  { label: "結び切り金",  path: "static/mizuhiki/A3_MIZUHIKI_MUSUBIKIRI_GOLD.png" },
  { label: "花結び黒",    path: "static/mizuhiki/A3_MIZUHIKI_HANAMUSUBI_BLACK.png" },
  { label: "あわじ黒",    path: "static/mizuhiki/A3_MIZUHIKI_AWAJI_BLACK.png" },
  { label: "結び切り黒",  path: "static/mizuhiki/A3_MIZUHIKI_MUSUBIKIRI_BLACK.png" },
  { label: "なし",        path: "" }
];

const getEl = (id) => document.getElementById(id);

/** フォント機能 **/
async function loadSystemFonts() {
  if (!window.queryLocalFonts) {
    alert("ブラウザがAPIに対応していないか、非セキュアな環境です。手入力を使用してください。");
    return;
  }
  try {
    const fonts = await window.queryLocalFonts();
    const group = getEl("optgroup_system");
    group.innerHTML = "";
    const families = Array.from(new Set(fonts.map(f => f.family))).sort();
    families.forEach(f => group.add(new Option(f, f)));
    alert(families.length + "個のフォントを読み込みました。");
  } catch (err) {
    alert("フォントへのアクセスが拒否されました。");
  }
}

function addManualFont() {
  const name = prompt("PCに入っているフォント名を入力してください\n(例: MS Mincho, HG行書体, 游明朝)");
  if (name) {
    const group = getEl("optgroup_system");
    const opt = new Option(name, name);
    opt.style.fontFamily = name;
    group.add(opt);
    getEl("ui_font_sel").value = name;
    render();
  }
}

/** 初期化処理 **/
function initSelectors() {
  const pSel = getEl("ui_purpose_sel");
  LIST_PURPOSE.forEach(d => pSel.add(new Option(d.label, d.value)));
  getEl("ui_om_text").value = LIST_PURPOSE[0].value;

  const nSel = getEl("ui_noshi_sel");
  LIST_NOSHI.forEach(d => nSel.add(new Option(d.label, d.path)));

  const mSel = getEl("ui_mizuhiki_sel");
  LIST_MIZUHIKI.forEach(d => mSel.add(new Option(d.label, d.path)));
}

/** 同期処理 **/
function bindSync(rangeId, numId, callback) {
  const r = getEl(rangeId);
  const n = getEl(numId);
  if (!r || !n) return;
  const syncFn = (e) => {
    if (e.target === r) n.value = r.value;
    else r.value = n.value;
    callback();
  };
  r.addEventListener("input", syncFn);
  n.addEventListener("input", syncFn);
}

/** 描画処理 **/
function render() {
  // 用紙・印刷設定
  const [wMm, hMm] = getEl("ui_paper_size").value.split(",");
  const paper = getEl("paper");
  paper.style.width = wMm + "mm";
  paper.style.height = hMm + "mm";

  // 印刷用スケール変数のセット
  const printScale = getEl("ui_print_scale").value / 100;
  paper.style.setProperty("--print-scale", printScale);

  const currentFont = getEl("ui_font_sel").value;

  // 表書き
  const omView = getEl("canvas_omotegaki");
  omView.textContent = getEl("ui_om_text").value;
  omView.style.left = getEl("ui_om_x").value + "mm";
  omView.style.top = getEl("ui_om_y").value + "mm";
  omView.style.fontSize = getEl("ui_om_size").value + "px";
  omView.style.fontFamily = currentFont;

  // 贈り主
  const okView = getEl("canvas_okurinushi");
  const names = Array.from(document.querySelectorAll(".ok-input"))
    .map(i => i.value)
    .filter(v => v);
  okView.textContent = names.join("\n");
  okView.style.left = getEl("ui_ok_x").value + "mm";
  okView.style.top = getEl("ui_ok_y").value + "mm";
  okView.style.fontSize = getEl("ui_ok_size").value + "px";
  okView.style.fontFamily = currentFont;

  // 熨斗
  const nImg = getEl("noshi_img");
  const nPath = getEl("ui_noshi_sel").value;
  if (nPath) {
    nImg.src = nPath;
    nImg.style.display = "block";
    nImg.style.left = getEl("ui_n_x").value + "mm";
    nImg.style.top = getEl("ui_n_y").value + "mm";
    nImg.style.width = getEl("ui_n_w").value + "mm";
  } else {
    nImg.style.display = "none";
  }

  // 水引
  const mImg = getEl("mizuhiki_img");
  mImg.src = getEl("ui_mizuhiki_sel").value;
  mImg.style.left = `calc(50% + ${getEl("ui_m_x").value}mm)`;
  mImg.style.top = getEl("ui_m_y").value + "mm";
  mImg.style.width = getEl("ui_m_w").value + "mm";
  mImg.style.transform = "translateX(-50%)";
}

/** ドラッグ＆ドロップ機能 **/
function initDragAndDrop() {
  let activeEl = null;
  let startX, startY, startValX, startValY;
  const mmToPx = 3.78; // 1mm = 3.78px (96dpi)

  const onStart = (e) => {
    activeEl = e.target.closest('.draggable');
    if (!activeEl) return;
    
    startX = e.clientX;
    startY = e.clientY;

    let prefix = "";
    if (activeEl.id === "canvas_omotegaki") prefix = "ui_om";
    else if (activeEl.id === "canvas_okurinushi") prefix = "ui_ok";
    else if (activeEl.id === "noshi_img") prefix = "ui_n";
    else if (activeEl.id === "mizuhiki_img") prefix = "ui_m";

    if (prefix) {
      startValX = parseFloat(getEl(prefix + "_x").value);
      startValY = parseFloat(getEl(prefix + "_y").value);
    }
  };

  const onMove = (e) => {
    if (!activeEl) return;
    // プレビューのscale(0.8)を考慮して移動距離を計算
    const dx = (e.clientX - startX) / (mmToPx * 0.8);
    const dy = (e.clientY - startY) / (mmToPx * 0.8);

    let prefix = "";
    if (activeEl.id === "canvas_omotegaki") prefix = "ui_om";
    else if (activeEl.id === "canvas_okurinushi") prefix = "ui_ok";
    else if (activeEl.id === "noshi_img") prefix = "ui_n";
    else if (activeEl.id === "mizuhiki_img") prefix = "ui_m";

    if (prefix) {
      const newX = Math.round(startValX + dx);
      const newY = Math.round(startValY + dy);
      
      getEl(prefix + "_x").value = newX;
      getEl(prefix + "_y").value = newY;
      
      // スライダーも連動
      const rx = getEl(prefix + "_x_r");
      const ry = getEl(prefix + "_y_r");
      if (rx) rx.value = newX;
      if (ry) ry.value = newY;
      
      render();
    }
  };

  const onEnd = () => { activeEl = null; };

  const paper = getEl("paper");
  paper.addEventListener("mousedown", onStart);
  window.addEventListener("mousemove", onMove);
  window.addEventListener("mouseup", onEnd);
}

/** イベント設定 **/
function initEvents() {
  getEl("ui_purpose_sel").addEventListener("change", (e) => {
    getEl("ui_om_text").value = e.target.value;
    render();
  });

  getEl("ui_om_text").addEventListener("input", render);
  getEl("ui_font_sel").addEventListener("change", render);
  getEl("ui_noshi_sel").addEventListener("change", render);
  getEl("ui_mizuhiki_sel").addEventListener("change", render);
  getEl("ui_paper_size").addEventListener("change", render);
  getEl("ui_print_scale").addEventListener("input", render);
  
  getEl("btn_load_fonts").addEventListener("click", loadSystemFonts);
  getEl("btn_manual_font").addEventListener("click", addManualFont);

  document.querySelectorAll(".ok-input").forEach(el => {
    el.addEventListener("input", render);
  });

  const syncPairs = [
    ["ui_om_x_r", "ui_om_x"], ["ui_om_y_r", "ui_om_y"], ["ui_om_size_r", "ui_om_size"],
    ["ui_ok_x_r", "ui_ok_x"], ["ui_ok_y_r", "ui_ok_y"], ["ui_ok_size_r", "ui_ok_size"],
    ["ui_n_x_r", "ui_n_x"], ["ui_n_y_r", "ui_n_y"], ["ui_n_w_r", "ui_n_w"],
    ["ui_m_x_r", "ui_m_x"], ["ui_m_y_r", "ui_m_y"], ["ui_m_w_r", "ui_m_w"]
  ];
  syncPairs.forEach(pair => bindSync(pair[0], pair[1], render));
}

// 実行
initSelectors();
initEvents();
initDragAndDrop();

document.fonts.ready.then(() => {
  document.body.classList.add('loaded');
  render();
});