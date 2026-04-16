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
let activeTab = "باقات النخبة 💎";

// دالة التشغيل الرئيسية
function render() {
    const root = document.getElementById('meals-list');
    if (!root) return;

    // بناء الواجهة
    root.innerHTML = `
    <div style="background:#000; color:#fff; font-family:sans-serif; min-height:100vh; direction:rtl; padding-bottom:150px;">
        <header style="padding:40px 20px 10px; position:sticky; top:0; background:rgba(0,0,0,0.9); backdrop-filter:blur(20px); z-index:1000; border-bottom:1px solid #111;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <h1 style="font-size:24px; font-weight:900; margin:0; color:#f1c40f;">FITFUEL ELITE</h1>
                <span style="font-size:10px; border:1px solid #f1c40f; color:#f1c40f; padding:2px 8px; border-radius:20px;">LUXURY</span>
            </div>
            
            <div id="tab-container" style="display:flex; gap:10px; margin-top:25px; overflow-x:auto; padding-bottom:10px; scrollbar-width:none;">
                ${Object.keys(fullMenu).map(cat => `
                    <button class="tab-btn" data-cat="${cat}" style="background:${activeTab === cat ? '#f1c40f' : '#111'}; color:${activeTab === cat ? '#000' : '#888'}; border:none; padding:10px 20px; border-radius:50px; font-weight:bold; white-space:nowrap; cursor:pointer;">
                        ${cat}
                    </button>
                `).join('')}
            </div>
        </header>

        <div id="grid" style="display:grid; grid-template-columns:1fr; gap:25px; padding:20px;">
            ${fullMenu[activeTab].map(item => `
                <div style="background:#0a0a0a; border-radius:30px; overflow:hidden; border:1px solid #1a1a1a;">
                    <div style="height:300px; position:relative;">
                        <img src="${item.img}" style="width:100%; height:100%; object-fit:cover;">
                        <div style="position:absolute; inset:0; background:linear-gradient(transparent, #0a0a0a);"></div>
                        <button class="add-btn" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}" style="position:absolute; top:15px; left:15px; background:#fff; border:none; width:45px; height:45px; border-radius:50%; font-size:25px; font-weight:bold; cursor:pointer;">+</button>
                        <div style="position:absolute; bottom:15px; right:15px; left:15px;">
                            <h2 style="margin:0; font-size:22px;">${item.name}</h2>
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:5px;">
                                <span style="color:#f1c40f; font-weight:bold;">${item.price} ريال</span>
                                <small style="color:#555;">🔥 ${item.cal}</small>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>

        <div id="cart-bar" style="position:fixed; bottom:20px; left:50%; transform:translateX(-50%); width:90%; max-width:450px; background:#f1c40f; color:#000; padding:15px; border-radius:20px; display:${Object.keys(currentCart).length > 0 ? 'flex' : 'none'}; justify-content:space-between; align-items:center; z-index:2000;">
            <div style="font-weight:bold;">
                <div>${calculateTotal()} ريال</div>
                <small>${calculateCount()} أصناف</small>
            </div>
            <button id="order-btn" style="background:#000; color:#fff; border:none; padding:10px 25px; border-radius:12px; font-weight:bold; cursor:pointer;">إتمام الطلب 🚀</button>
        </div>
    </div>
    `;

    // ربط الأحداث للأزرار بعد الرندر
    attachEvents();
}

function attachEvents() {
    // أزرار التبويبات
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeTab = btn.getAttribute('data-cat');
            render();
            window.scrollTo(0,0);
        });
    });

    // أزرار الإضافة للسلة
    document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const name = btn.getAttribute('data-name');
            const price = parseInt(btn.getAttribute('data-price'));
            
            if (!currentCart[id]) currentCart[id] = { name, price, qty: 0 };
            currentCart[id].qty++;
            render();
        });
    });

    // زر إتمام الطلب
    const orderBtn = document.getElementById('order-btn');
    if (orderBtn) {
        orderBtn.addEventListener('click', () => {
            let text = "طلب جديد - FITFUEL ELITE\n";
            Object.values(currentCart).forEach(i => {
                text += `• ${i.name} [x${i.qty}] = ${i.price * i.qty} ريال\n`;
            });
            text += `\nالمجموع: ${calculateTotal()} ريال`;
            window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`);
        });
    }
}

function calculateTotal() {
    return Object.values(currentCart).reduce((s, i) => s + (i.price * i.qty), 0);
}

function calculateCount() {
    return Object.values(currentCart).reduce((s, i) => s + i.qty, 0);
}

// التشغيل
window.addEventListener('DOMContentLoaded', render);
