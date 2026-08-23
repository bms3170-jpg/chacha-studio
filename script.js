const money = n => Number(n || 0).toLocaleString('ko-KR') + '원';
const discount = p => p.originalPrice > p.price ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
const imagePath = file => `images/${file}`;

function productCard(p, mini = false) {
  return `<a class="${mini ? 'mini-product-card' : 'product-card'}" href="product.html?id=${encodeURIComponent(p.id)}">
    <div class="product-thumb"><img src="${imagePath(p.images[0])}" alt="${p.shortName}" loading="lazy">${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}</div>
    <div class="product-card-info">
      ${mini ? '' : `<span class="shop-label ${p.shop}">${p.shop === 'handmade' ? 'HANDMADE' : 'CAT SHOP'}</span>`}
      <h3>${p.shortName}</h3>
      ${mini ? '' : `<div class="rating">${p.rating ? `★ ${p.rating.toFixed(1)} · 리뷰 ${p.reviews}` : '리뷰 준비중'}</div>`}
      <div class="price-row">${discount(p) ? `<b>${discount(p)}%</b>` : ''}<strong>${money(p.price)}</strong></div>
    </div>
  </a>`;
}

function initHome() {
  const hand = document.querySelector('#handmadeBest');
  const cat = document.querySelector('#catBest');
  if (hand) hand.innerHTML = PRODUCTS.filter(p => p.shop === 'handmade' && p.featured).slice(0,4).map(p => productCard(p,true)).join('');
  if (cat) cat.innerHTML = PRODUCTS.filter(p => p.shop === 'cat' && p.featured).slice(0,4).map(p => productCard(p,true)).join('');
}

function initShop() {
  const grid = document.querySelector('#productGrid'); if (!grid) return;
  const params = new URLSearchParams(location.search);
  let shop = params.get('shop') || 'all';
  let category = params.get('category') || 'all';
  const qParam = params.get('q') || '';
  const input = document.querySelector('#searchInput'); if (input) input.value = qParam;
  let query = qParam;
  let sort = params.get('sort') || 'featured';
  const select = document.querySelector('#sortSelect'); if (select && [...select.options].some(o=>o.value===sort)) select.value = sort;

  function categories() {
    const base = PRODUCTS.filter(p => shop === 'all' || p.shop === shop);
    return ['all', ...new Set(base.map(p => p.category))];
  }
  function renderChips() {
    const el = document.querySelector('#categoryChips');
    el.innerHTML = categories().map(c => `<button class="${category===c?'active':''}" data-category="${c}">${c==='all'?'전체 카테고리':c}</button>`).join('');
    el.querySelectorAll('button').forEach(b=>b.onclick=()=>{category=b.dataset.category;render();renderChips();});
  }
  function render() {
    let list = PRODUCTS.filter(p => (shop==='all'||p.shop===shop) && (category==='all'||p.category===category) && (!query || (p.name+p.shortName).toLowerCase().includes(query.toLowerCase())));
    if (sort==='low') list.sort((a,b)=>a.price-b.price);
    if (sort==='high') list.sort((a,b)=>b.price-a.price);
    if (sort==='rating') list.sort((a,b)=>b.rating-a.rating);
    if (sort==='new') list=[...list].reverse();
    if (sort==='featured') list.sort((a,b)=>(b.featured?1:0)-(a.featured?1:0));
    document.querySelector('#productCount').textContent = `총 ${list.length}개의 상품`;
    grid.innerHTML = list.length ? list.map(p=>productCard(p)).join('') : '<div class="empty-result">조건에 맞는 상품이 없습니다.</div>';
  }
  document.querySelectorAll('#shopTabs button').forEach(b=>{if(b.dataset.shop===shop)b.classList.add('active');else b.classList.remove('active');b.onclick=()=>{shop=b.dataset.shop;category='all';document.querySelectorAll('#shopTabs button').forEach(x=>x.classList.toggle('active',x===b));renderChips();render();};});
  select.onchange=()=>{sort=select.value;render();};
  document.querySelector('#shopSearch').onsubmit=e=>{e.preventDefault();query=input.value.trim();render();};
  renderChips();render();
}

function initProduct() {
  const root=document.querySelector('#productDetail'); if(!root)return;
  const id=new URLSearchParams(location.search).get('id') || 'handmade-1';
  const p=PRODUCTS.find(x=>x.id===id) || PRODUCTS[0];
  document.title=`${p.shortName} | 차차네점빵`;
  root.innerHTML=`
    <section class="detail-top">
      <div class="gallery">
        <div class="main-image"><img id="mainProductImage" src="${imagePath(p.images[0])}" alt="${p.shortName}"></div>
        <div class="thumb-list">${p.images.map((x,i)=>`<button class="${i===0?'active':''}" data-src="${imagePath(x)}"><img src="${imagePath(x)}" alt="상품사진 ${i+1}"></button>`).join('')}</div>
      </div>
      <div class="purchase-panel">
        <span class="shop-label ${p.shop}">${p.shop==='handmade'?'HANDMADE':'CAT SHOP'}</span>
        <h1>${p.name}</h1>
        <div class="rating">${p.rating ? `★★★★★ <b>${p.rating.toFixed(1)}</b> · ${p.reviews}건 리뷰` : '아직 등록된 리뷰가 없습니다.'}</div>
        ${p.originalPrice>p.price?`<del>${money(p.originalPrice)}</del>`:''}
        <div class="detail-price">${discount(p)?`<b>${discount(p)}%</b>`:''}<strong>${money(p.price)}</strong></div>
        <p class="detail-desc">${p.description}</p>
        <div class="service-card"><div>🚚 <b>배송비</b><span>${money(SHIPPING_POLICY.fee)} · 도서산간 +${money(SHIPPING_POLICY.remoteExtra)}</span></div><div>📦 <b>배송출고</b><span>${SHIPPING_POLICY.courier}</span></div><div>🗓️ <b>제작/발송</b><span>${SHIPPING_POLICY.leadTime}</span></div><div>✋ <b>맞춤제작</b><span>${SHIPPING_POLICY.customNotice}</span></div></div>
        <label class="option-label">옵션 선택<select><option>기본 구성</option><option>선물 포장 요청</option></select></label>
        <div class="quantity-row"><span>수량</span><button id="minusQty">−</button><b id="qty">1</b><button id="plusQty">＋</button></div>
        <div class="buy-actions"><button class="outline-btn" id="addCart">🛒 장바구니 담기</button><button class="solid-btn">바로 구매하기</button></div>
      </div>
    </section>
    <section class="detail-content">
      <h2>상품 상세</h2>
      <div class="detail-info-table"><div><b>상품명</b><span>${p.shortName}</span></div><div><b>판매관</b><span>${p.shop==='handmade'?'HANDMADE':'CAT SHOP'}</span></div><div><b>배송비</b><span>3,000원 (도서산간 +5,000원)</span></div><div><b>택배사</b><span>한진택배</span></div></div>
      <div class="detail-photo-grid">${p.images.map(x=>`<img src="${imagePath(x)}" alt="${p.shortName} 상세 이미지" loading="lazy">`).join('')}</div>
    </section>
    <section class="product-reviews"><div class="section-title-row"><div><span>REVIEW</span><h2>최근 ★5 리뷰</h2></div></div>${p.rating===5?`<div class="review-grid"><article><div class="stars">★★★★★</div><strong>${p.shortName}</strong><p>별점 5점으로 등록된 최근 구매후기입니다. 실제 운영에서는 최신 5점 리뷰만 자동으로 노출됩니다.</p><span>구매자 후기</span></article></div>`:'<div class="empty-review">아직 노출할 ★5 리뷰가 없습니다.</div>'}</section>
    <section class="policy-accordion"><details open><summary>배송 안내</summary><p>기본 배송비 3,000원이며 도서산간 지역은 5,000원이 추가됩니다. 한진택배로 출고합니다.</p></details><details><summary>제작 및 발송 안내</summary><p>결제 완료 후 영업일 기준 5일 이내 발송을 기본으로 합니다. 상품별 제작 상황에 따라 안내가 추가될 수 있습니다.</p></details><details><summary>취소 / 교환 / 반품 안내</summary><p>맞춤제작 상품은 제작 착수 후 단순 변심에 의한 취소·교환·반품이 제한될 수 있습니다.</p></details></section>`;
  const main=document.querySelector('#mainProductImage');
  document.querySelectorAll('.thumb-list button').forEach(b=>b.onclick=()=>{main.src=b.dataset.src;document.querySelectorAll('.thumb-list button').forEach(x=>x.classList.toggle('active',x===b));});
  let qty=1;const q=document.querySelector('#qty');document.querySelector('#minusQty').onclick=()=>{qty=Math.max(1,qty-1);q.textContent=qty};document.querySelector('#plusQty').onclick=()=>{qty++;q.textContent=qty};
  document.querySelector('#addCart').onclick=()=>{let c=Number(localStorage.getItem('chacha-cart')||0)+qty;localStorage.setItem('chacha-cart',c);updateCart();alert('장바구니에 담았습니다.');};
}

function updateCart(){const c=Number(localStorage.getItem('chacha-cart')||0);document.querySelectorAll('.cart-count').forEach(x=>x.textContent=c);}
function initMenu(){const btn=document.querySelector('.mobile-menu-button'),nav=document.querySelector('#mainNav');if(btn&&nav)btn.onclick=()=>nav.classList.toggle('open');}

document.addEventListener('DOMContentLoaded',()=>{updateCart();initMenu();initHome();initShop();initProduct();});
