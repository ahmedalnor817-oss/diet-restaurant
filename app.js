const WHATSAPP = "966563683212";

// قاعدة بيانات النخبة مع روابط صور موثوقة وعالية الجودة
const fullMenu = {
    "باقات النخبة 💎": [
        { id: 101, name: "باقة إيليت الأسبوعية", price: 550, cal: "6 أيام", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80", desc: "6 وجبات غداء متكاملة مع سناك صحي يومي وتوصيل مجاني" },
        { id: 102, name: "باقة بناء العضلات PRO", price: 1800, cal: "شهر كامل", img: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=800&q=80", desc: "وجبتين يومياً غنية بالبروتين مصممة للرياضيين" }
    ],
    "رئيسي 🔥": [
        { id: 1, name: "سلمون بصلصة الترياكي", price: 72, cal: 420, img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80", desc: "سلمون نرويجي مشوي مع أرز الياسمين وخضار" },
        { id: 2, name: "ستيك لحم بقر واغيو", price: 98, cal: 540, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80", desc: "شرائح لحم فاخرة مع بطاطس مهروسة صوص مشروم" },
        { id: 3, name: "دجاج بيري بيري", price: 54, cal: 380, img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80", desc: "صدر دجاج متبل بخلطة بيري بيري الحارة" }
    ],
    "سناكات 🥗": [
        { id: 4, name: "سلطة الكينوا الملكية", price: 42, cal: 210, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80", desc: "كينوا عضوية مع أفوكادو وجوز" },
        { id: 5, name: "كرات الطاقة بالبروتين", price: 28, cal: 160, img: "https://images.unsplash.com/photo-1539136788836-5699e7863572?auto=format&fit=crop&w=800&q=80", desc: "كرات الشوفان والعسل وبروتين ايزوليت" }
    ],
    "مشروبات 🥤": [
        { id: 6, name: "ديتوكس التفاح والأخضر", price: 25, cal: 90, img: "https://images.unsplash.com/photo-1610970882799-64a0de9325ed?auto=format&fit=crop&w=800&q=80", desc: "مزيج منعش من التفاح والسبانخ والليمون" },
        { id: 7, name: "سموذي بروتين بيري", price: 34, cal: 240, img: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=800&q=80", desc: "توت مشكل مع سكوب بروتين واي" }
    ]
};

let cart = {};
let currentCategory = Object.keys(fullMenu)[0];

// دالة التشغيل الآمنة
function init() {
    renderUI();
}

function renderUI() {
    const root = document.getElementById('meals-list');
    if (!root) return;

    root.innerHTML = `
    <div style="background:#000; color:#fff; font-family:'Inter', sans-serif; min-height:100vh; direction:rtl; padding-bottom:150px;">
        
        <header style="padding:40px 20px 20px; position:sticky; top:0; background:rgba(0,0,0,0.85); backdrop-filter:blur(30px); z-index:1000; border-bottom:1px solid rgba(255,255,255,0.05);">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <h1 style="font-size:26px; font-weight:900; margin:0; letter-spacing:-1px;">FITFUEL <span style="color:#f1c40f">ELITE</span></h1>
                <div style="background:#f1c40f; color:#000; font-size:10px; font-weight:900; padding:4px 10px; border-radius:10px;">PREMIUM</div>
            </div>
            
            <div id="tabs" style="display:flex; gap:12px; margin-top:25px; overflow-x:auto; padding-bottom:10px; scrollbar-width:none;">
                ${Object.keys(fullMenu).map(cat => `
                    <button class="t-btn ${currentCategory === cat ? 'active' : ''}" 
                            onclick="switchCategory('${cat}')"
                            style="background:${currentCategory === cat ? '#f1c40f' : '#111'}; 
                                   color:${currentCategory === cat ? '#000' : '#888'}; 
                                   border:none; padding:12px 24px; border-radius:18px; 
                                   font-weight:bold; white-space:nowrap; cursor:pointer; 
                                   transition:0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
                        ${cat}
                    </button>
                `).join('')}
            </div>
        </header>

        <main id="main-grid" style="padding:20px; display:grid; grid-template-columns:1fr; gap:30px; animation: fadeIn 0.5s ease;">
            ${renderItems()}
        </main>

        <div id="cart-dock" style="position:fixed; bottom:30px; left:50%; transform:translateX(-50%) ${Object.keys(cart).length > 0 ? 'translateY(0)' : 'translateY(150px)'}; 
             width:90%; max-width:450px; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); 
             backdrop-filter:blur(25px); border-radius:30px; padding:20px; display:flex; justify-content:space-between; 
             align-items:center; z-index:2000; transition:0.6s cubic-bezier(0.19, 1, 0.22, 1); box-shadow:0 20px 40px rgba(0,0,0,0.5);">
            
            <div>
                <span style="display:block; font-size:24px; font-weight:900; color:#f1c40f;">${getTotalPrice()} ريال</span>
                <span style="font-size:12px; color:rgba(255,255,255,0.6);">${getTotalCount()} أصناف مختارة</span>
            </div>
            
            <button onclick="checkout()" style="background:#f1c40f; color:#000; border:none; padding:15px 35px; border-radius:18px; font-weight:900; font-size:16px; cursor:pointer;">إتمام الطلب</button>
        </div>
    </div>

    <style>
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .t-btn:active { transform: scale(0.9); }
        .add-btn:active { transform: scale(0.85) rotate(90deg); }
    </style>
    `;
}

function renderItems() {
    return fullMenu[currentCategory].map(item => `
        <div style="background:#0a0a0a; border-radius:35px; overflow:hidden; border:1px solid rgba(255,255,255,0.05); position:relative;">
            <div style="height:350px; position:relative;">
                <img src="${item.img}" style="width:100%; height:100%; object-fit:cover;" 
                     onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800'">
                
                <div style="position:absolute; inset:0; background:linear-gradient(transparent 40%, rgba(0,0,0,0.9) 90%);"></div>
                
                <div style="position:absolute; top:20px; right:20px; background:rgba(0,0,0,0.6); backdrop-filter:blur(10px); color:#f1c40f; padding:6px 15px; border-radius:12px; font-weight:900; font-size:18px; border:1px solid rgba(241,196,15,0.3);">
                    ${item.price} ريال
                </div>

                <button class="add-btn" onclick="addToCart(${item.id}, '${item.name}', ${item.price})" 
                        style="position:absolute; top:20px; left:20px; background:#fff; color:#000; border:none; 
                               width:50px; height:50px; border-radius:50%; font-size:30px; font-weight:bold; 
                               cursor:pointer; transition:0.3s; box-shadow:0 10px 20px rgba(0,0,0,0.5);">
                    +
                </button>

                <div style="position:absolute; bottom:25px; right:25px; left:25px;">
                    <h2 style="margin:0; font-size:24px; font-weight:800; color:#fff;">${item.name}</h2>
                    <p style="margin:5px 0 0; color:rgba(255,255,255,0.5); font-size:14px; line-height:1.4;">${item.desc}</p>
                    <div style="margin-top:10px; font-size:12px; color:#f1c40f; font-weight:bold;">⚡ ${item.cal} CAL</div>
                </div>
            </div>
        </div>
    `).join('');
}

function switchCategory(cat) {
    currentCategory = cat;
    renderUI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function addToCart(id, name, price) {
    if (!cart[id]) cart[id] = { name, price, qty: 0 };
    cart[id].qty++;
    renderUI(); // تحديث فوري للواجهة والسلة
}

function getTotalPrice() {
    return Object.values(cart).reduce((total, item) => total + (item.price * item.qty), 0);
}

function getTotalCount() {
    return Object.values(cart).reduce((total, item) => total + item.qty, 0);
}

function checkout() {
    let message = "طلب جديد من FITFUEL ELITE 🥗\n\n";
    Object.values(cart).forEach(item => {
        message += `• ${item.name} (العدد: ${item.qty}) = ${item.price * item.qty} ريال\n`;
    });
    message += `\n💰 الإجمالي: ${getTotalPrice()} ريال`;
    
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// البدء عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', init);
