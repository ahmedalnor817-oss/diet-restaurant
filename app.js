const MY_PHONE = "966563683212";

// قاعدة بيانات النخبة - يمكنك إضافة مئات الأصناف هنا
const fullMenu = {
    "العروض الحصرية 💎": [
        { id: 101, name: "اشتراك باقة القوة (أسبوع)", price: 550, cal: "6 وجبات/يوم", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600", tag: "الأكثر توفيراً" },
        { id: 102, name: "باقة الديتوكس الثلاثية", price: 120, cal: "3 مشروبات", img: "https://images.unsplash.com/photo-1544145945-f904253d0c71?w=600", tag: "عرض خاص" }
    ],
    "الأطباق العالمية 🔥": [
        { id: 1, name: "سلمون بصلصة الميستو", price: 68, cal: 420, img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600", tag: "Signature" },
        { id: 2, name: "صدر دجاج ترافل", price: 52, cal: 380, img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600", tag: "High Protein" },
        { id: 3, name: "ستيك ريب آي لايت", price: 95, cal: 540, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600", tag: "Premium" },
        { id: 4, name: "روبيان بالليمون والأعشاب", price: 78, cal: 290, img: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=600", tag: "Low Carb" }
    ],
    "سناكات الطاقة 🥑": [
        { id: 5, name: "أفوكادو توست بالبيض", price: 38, cal: 310, img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600", tag: "Healthy" },
        { id: 6, name: "كرات البروتين بالكاكاو", price: 29, cal: 140, img: "https://images.unsplash.com/photo-1539136788836-5699e7863572?w=600", tag: "Sugar Free" }
    ],
    "مشروبات النخبة 🥤": [
        { id: 7, name: "سموذي التوت البري", price: 32, cal: 120, img: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=600", tag: "Refresh" },
        { id: 8, name: "قهوة بروتين مثلجة", price: 26, cal: 95, img: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?w=600", tag: "Pre-Workout" }
    ]
};

let cart = {};

function initApp() {
    const container = document.getElementById('meals-list');
    if (!container) return;
    renderFullUI(container);
}

function renderFullUI(container) {
    let sections = "";
    for (const [category, items] of Object.entries(fullMenu)) {
        sections += `
            <div style="padding: 20px 0;">
                <h3 style="margin: 0 20px 15px; font-size: 22px; font-weight: 800; color: #fff; border-right: 5px solid #f1c40f; padding-right: 12px;">${category}</h3>
                <div style="display: flex; overflow-x: auto; gap: 20px; padding: 0 20px; scrollbar-width: none;">
                    ${items.map(item => `
                        <div style="min-width: 280px; background: #1a1a1a; border-radius: 30px; overflow: hidden; position: relative; border: 1px solid #2a2a2a; box-shadow: 0 15px 35px rgba(0,0,0,0.4);">
                            <div style="position: absolute; top: 15px; left: 15px; z-index: 2; background: rgba(241, 196, 15, 0.9); color: #000; padding: 5px 15px; border-radius: 15px; font-size: 11px; font-weight: 900; text-transform: uppercase;">${item.tag}</div>
                            <img src="${item.image || item.img}" style="width: 100%; height: 320px; object-fit: cover;">
                            <div style="position: absolute; bottom: 0; width: 100%; background: linear-gradient(transparent, rgba(0,0,0,1)); padding: 25px 20px;">
                                <h4 style="margin: 0; font-size: 20px; color: #fff;">${item.name}</h4>
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                                    <span style="color: #f1c40f; font-size: 20px; font-weight: 800;">${item.price} ريال</span>
                                    <button onclick="modifyCart(${item.id}, '${item.name}', ${item.price}, 1)" style="background: #fff; border: none; width: 45px; height: 45px; border-radius: 50%; font-size: 24px; font-weight: bold; cursor: pointer;">+</button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    container.innerHTML = `
        <div style="background: #000; color: #fff; font-family: 'Segoe UI', Roboto, sans-serif; direction: rtl; min-height: 100vh; padding-bottom: 120px;">
            <div style="padding: 40px 20px; text-align: right;">
                <h1 style="font-size: 32px; font-weight: 900; margin: 0; letter-spacing: -1px;">FITFUEL <span style="color:#f1c40f">ELITE</span></h1>
                <p style="color: #666; margin-top: 5px; font-size: 14px;">مستوى آخر من التغذية الصحية</p>
            </div>
            ${sections}
            
            <div id="smart-cart" style="position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); width: 92%; max-width: 450px; background: rgba(255,255,255,0.08); backdrop-filter: blur(25px); border: 1px solid rgba(255,255,255,0.1); padding: 20px; border-radius: 35px; display: none; justify-content: space-between; align-items: center; z-index: 9999; box-shadow: 0 20px 50px rgba(0,0,0,0.8);">
                <div>
                    <div id="cart-count" style="font-size: 14px; color: #f1c40f; font-weight: bold;"></div>
                    <div id="cart-total" style="font-size: 22px; font-weight: 900; color: #fff;"></div>
                </div>
                <button onclick="checkout()" style="background: #f1c40f; color: #000; border: none; padding: 15px 35px; border-radius: 20px; font-weight: 900; font-size: 16px; cursor: pointer; transition: 0.3s active {transform: scale(0.95)}">إرسال الطلب 🚀</button>
            </div>
        </div>
    `;
}

function modifyCart(id, name, price, change) {
    if (!cart[id]) cart[id] = { name, price, qty: 0 };
    cart[id].qty += change;
    if (cart[id].qty <= 0) delete cart[id];
    updateUI();
}

function updateUI() {
    const bar = document.getElementById('smart-cart');
    const countLabel = document.getElementById('cart-count');
    const totalLabel = document.getElementById('cart-total');
    
    const items = Object.values(cart);
    const totalQty = items.reduce((s, i) => s + i.qty, 0);
    const totalPrice = items.reduce((s, i) => s + (i.price * i.qty), 0);

    if (totalQty > 0) {
        bar.style.display = 'flex';
        countLabel.innerText = `${totalQty} صنف في السلة`;
        totalLabel.innerText = `${totalPrice} ريال`;
    } else {
        bar.style.display = 'none';
    }
}

function checkout() {
    let text = "طلب نخبة من FITFUEL ELITE 🥗\n--------------------------\n";
    Object.values(cart).forEach(item => {
        text += `• ${item.name} (${item.qty} حبة) = ${item.price * item.qty} ريال\n`;
    });
    const total = Object.values(cart).reduce((s, i) => s + (i.price * i.qty), 0);
    text += `\n--------------------------\n💰 المجموع النهائي: ${total} ريال`;
    
    window.open(`https://wa.me/${MY_PHONE}?text=${encodeURIComponent(text)}`, '_blank');
}

window.onload = initApp;
