/**
 * FITFUEL ELITE - Ultimate Stable Version 2026
 * تم فحص جميع الصور والروابط والوظائف
 */

const WHATSAPP = "966563683212";

const fullMenu = {
    "باقات النخبة 💎": [
        { id: 101, name: "باقة إيليت الأسبوعية", price: 550, cal: "6 أيام", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800", desc: "6 وجبات غداء متكاملة مع سناك صحي يومي وتوصيل مجاني" },
        { id: 102, name: "باقة بناء العضلات PRO", price: 1800, cal: "شهر كامل", img: "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=800", desc: "وجبتين يومياً غنية بالبروتين مصممة للرياضيين" }
    ],
    "رئيسي 🔥": [
        { id: 1, name: "سلمون بصلصة الترياكي", price: 72, cal: 420, img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800", desc: "سلمون نرويجي مشوي مع أرز الياسمين وخضار" },
        { id: 2, name: "ستيك لحم بقر واغيو", price: 98, cal: 540, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800", desc: "شرائح لحم فاخرة مع بطاطس مهروسة صوص مشروم" },
        { id: 3, name: "دجاج بيري بيري", price: 54, cal: 380, img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800", desc: "صدر دجاج متبل بخلطة بيري بيري الحارة" }
    ],
    "سناكات 🥗": [
        { id: 4, name: "سلطة الكينوا الملكية", price: 42, cal: 210, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800", desc: "كينوا عضوية مع أفوكادو وجوز" },
        { id: 5, name: "كرات الطاقة بالبروتين", price: 28, cal: 160, img: "https://images.unsplash.com/photo-1539136788836-5699e7863572?w=800", desc: "كرات الشوفان والعسل وبروتين ايزوليت" }
    ],
    "مشروبات 🥤": [
        { id: 6, name: "ديتوكس التفاح والأخضر", price: 25, cal: 90, img: "https://images.unsplash.com/photo-1610970882799-64a0de9325ed?w=800", desc: "مزيج منعش من التفاح والسبانخ والليمون" },
        { id: 7, name: "سموذي بروتين بيري", price: 34, cal: 240, img: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=800", desc: "توت مشكل مع سكوب بروتين واي" }
    ]
};

let currentCart = {};
let activeTab = "باقات النخبة 💎"; // تبدأ الشاشة بأهم قسم

function init() {
    const root = document.getElementById('meals-list');
    if (!root) return;
    renderApp(root);
}

function renderApp(root) {
    root.innerHTML = `
    <div style="background:#000; color:#fff; font-family:'Segoe UI', sans-serif; min-height:100vh; direction:rtl; padding-bottom:140px;">
        <header style="padding:40px 20px 10px; sticky; top:0; background:rgba(0,0,0,0.9); backdrop-filter:blur(20px); z-index:1000; border-bottom:1px solid #111;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <h1 style="font-size:28px; font-weight:900; margin:0; background: linear-gradient(to left, #f1c40f, #fff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">FITFUEL ELITE</h1>
                <span style="font-size:10px; color:#f1c40f; border:1px solid #f1c40f; padding:2px 8px; border-radius:30px; letter-spacing:1px;">LUXURY DIET</span>
            </div>
            
            <div style="display:flex; gap:12px; margin-top:30px; overflow-x:auto; scrollbar-width:none; padding-bottom:10px;">
                ${Object.keys(fullMenu).map(cat => `
                    <button onclick="switchTab('${cat}')" style="background:${activeTab === cat ? '#f1c40f' : '#111'}; color:${activeTab === cat ? '#000' : '#888'}; border:none; padding:12px 25px; border-radius:50px; font-weight:900; white-space:nowrap; cursor:pointer; transition:0.3s ease; font-size:14px;">
                        ${cat}
                    </button>
                `).join('')}
            </div>
        </header>

        <div id="items-grid" style="display:grid; grid-template-columns:1fr; gap:30px; padding:20px;">
            ${renderItems()}
        </div>

        <div id="checkout-bar" style="position:fixed; bottom:30px; left:50%; transform:translateX(-50%); width:92%; max-width:500px; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); backdrop-filter:blur(30px); border-radius:35px; padding:20px; display:none; justify-content:space-between; align-items:center; z-index:9999; box-shadow:0 30px 60px rgba(0,0,0,0.8);">
            <div>
                <span id="cart-total" style="display:block; font-size:26px; font-weight:900; color:#f1c40f;">0 ريال</span>
                <span id="cart-items-count" style="font-size:12px; color:#ddd;">0 صنف جاهز للطلب</span>
            </div>
            <button onclick="finalizeOrder()" style="background:#f1c40f; color:#000; border:none; padding:16px 40px; border-radius:20px; font-weight:900; font-size:16px; cursor:pointer; box-shadow:0 10px 20px rgba(241,196,15,0.3);">إرسال الطلب 🚀</button>
        </div>
    </div>`;
}

function renderItems() {
    return fullMenu[activeTab].map(item => `
        <div style="background:#0a0a0a; border-radius:40px; overflow:hidden; border:1px solid #1a1a1a; position:relative; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
            <div style="height:380px; position:relative;">
                <img src="${item.img}" style="width:100%; height:100%; object-fit:cover;" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800'">
                <div style="position:absolute; inset:0; background:linear-gradient(to bottom, transparent 20%, #0a0a0a 98%);"></div>
                
                <div style="position:absolute; bottom:25px; right:25px; left:25px;">
                    <div style="display:flex; justify-content:space-between; align-items:flex-end;">
                        <div style="flex:1; padding-left:10px;">
                            <h2 style="margin:0; font-size:26px; font-weight:900; color:#fff; text-shadow: 0 2px 10px rgba(0,0,0,0.5);">${item.name}</h2>
                            <p style="margin:8px 0 0; color:#aaa; font-size:14px; line-height:1.4;">${item.desc}</p>
                        </div>
                        <div style="text-align:left;">
                            <span style="display:block; color:#f1c40f; font-size:24px; font-weight:900;">${item.price} <small style="font-size:12px;">ريال</small></span>
                            <span style="font-size:12px; color:#666;">⚡ ${item.cal}</span>
                        </div>
                    </div>
                </div>
                
                <button onclick="addToCart(${item.id}, '${item.name}', ${item.price})" style="position:absolute; top:25px; left:25px; background:#fff; color:#000; border:none; width:55px; height:55px; border-radius:50%; font-size:32px; font-weight:bold; cursor:pointer; display:flex; align-items:center; justify-content:center; box-shadow:0 15px 30px rgba(0,0,0,0.5);">+</button>
            </div>
        </div>
    `).join('');
}

function switchTab(tabName) {
    activeTab = tabName;
    init();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function addToCart(id, name, price) {
    if (!currentCart[id]) currentCart[id] = { name, price, qty: 0 };
    currentCart[id].qty++;
    updateCartUI();
}

function updateCartUI() {
    const bar = document.getElementById('checkout-bar');
    const totalEl = document.getElementById('cart-total');
    const countEl = document.getElementById('cart-items-count');
    
    const items = Object.values(currentCart);
    const total = items.reduce((s, i) => s + (i.price * i.qty), 0);
    const count = items.reduce((s, i) => s + i.qty, 0);

    if (count > 0) {
        bar.style.display = 'flex';
        totalEl.innerText = `${total} ريال`;
        countEl.innerText = `${count} أصناف مختارة بعناية`;
    }
}

function finalizeOrder() {
    let orderList = "طلب نخبوي - FITFUEL ELITE 🥗\n";
    orderList += "----------------------------\n";
    let total = 0;
    Object.values(currentCart).forEach(i => {
        orderList += `• ${i.name} [x${i.qty}] = ${i.price * i.qty} ريال\n`;
        total += i.price * i.qty;
    });
    orderList += "----------------------------\n";
    orderList += `💰 الإجمالي: ${total} ريال\n`;
    orderList += "----------------------------\n";
    orderList += "الرجاء تأكيد استلام الطلب 📍";

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(orderList)}`, '_blank');
}

window.onload = init;
