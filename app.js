const MY_PHONE = "966563683212";

// قاعدة بيانات شاملة (الوجبات، السناكات، المشروبات)
const menuData = {
    "أطباق رئيسية 🔥": [
        { id: 1, name: "سلمون إيليت المشوي", price: 65, cal: 420, img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500" },
        { id: 2, name: "دجاج كينوا بيري", price: 48, cal: 360, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500" },
        { id: 3, name: "ستيك لحم واغيو", price: 85, cal: 510, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500" }
    ],
    "سناكات صحية 🥗": [
        { id: 4, name: "سلطة كينوا بالأفوكادو", price: 35, cal: 210, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500" },
        { id: 5, name: "ترافل بروتين بالتمر", price: 25, cal: 150, img: "https://images.unsplash.com/photo-1506084868730-3424e9339e05?w=500" }
    ],
    "مشروبات طاقة 🥤": [
        { id: 6, name: "عصير أخضر ديتوكس", price: 22, cal: 85, img: "https://images.unsplash.com/photo-1610970882799-64a0de9325ed?w=500" },
        { id: 7, name: "سموذي بروتين موز", price: 28, cal: 240, img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500" }
    ]
};

let cart = [];

function initApp() {
    const container = document.getElementById('meals-list');
    if (!container) return;

    renderUI(container);
    updateCartUI();
}

function renderUI(container) {
    let sectionsHtml = "";
    for (let category in menuData) {
        sectionsHtml += `
            <h3 style="color: #f1c40f; padding: 20px 20px 5px; margin: 0; font-size: 22px;">${category}</h3>
            <div style="display: flex; overflow-x: auto; padding: 10px; gap: 15px; scrollbar-width: none;">
                ${menuData[category].map(item => `
                    <div style="min-width: 200px; background: #1a1a1a; border-radius: 20px; overflow: hidden; border: 1px solid #333;">
                        <img src="${item.img}" style="width: 100%; height: 140px; object-fit: cover;">
                        <div style="padding: 12px; text-align: right;">
                            <h4 style="margin: 0; color: #fff; font-size: 16px;">${item.name}</h4>
                            <p style="color: #f1c40f; font-weight: bold; margin: 5px 0;">${item.price} ريال</p>
                            <button onclick="addToCart(${item.id}, '${item.name}', ${item.price})" style="width: 100%; background: #fff; border: none; padding: 8px; border-radius: 10px; font-weight: bold; cursor: pointer;">إضافة +</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    container.innerHTML = `
        <div style="background: #000; color: #fff; font-family: 'Cairo', sans-serif; min-height: 100vh; padding-bottom: 100px; direction: rtl;">
            <header style="padding: 30px 20px; text-align: center; background: linear-gradient(to bottom, #111, #000);">
                <h1 style="color: #f1c40f; margin: 0; letter-spacing: 2px;">FITFUEL <span style="color:#fff">ELITE</span></h1>
                <p style="color: #666; font-size: 12px;">نصمم أسلوب حياة صحي ومبتكر</p>
            </header>
            ${sectionsHtml}
            
            <div id="cart-bar" style="position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); width: 90%; max-width: 400px; background: #f1c40f; color: #000; padding: 15px; border-radius: 20px; display: none; justify-content: space-between; align-items: center; box-shadow: 0 10px 30px rgba(0,0,0,0.5); z-index: 1000;">
                <div id="cart-info" style="font-weight: bold;">0 أصناف | 0 ريال</div>
                <button onclick="sendOrder()" style="background: #000; color: #fff; border: none; padding: 10px 20px; border-radius: 12px; font-weight: bold; cursor: pointer;">إتمام الطلب 🛒</button>
            </div>
        </div>
    `;
}

function addToCart(id, name, price) {
    cart.push({ id, name, price });
    updateCartUI();
    // تأثير بسيط عند الإضافة
    const btn = event.target;
    btn.innerText = "تم ✅";
    btn.style.background = "#27ae60";
    btn.style.color = "#fff";
    setTimeout(() => {
        btn.innerText = "إضافة +";
        btn.style.background = "#fff";
        btn.style.color = "#000";
    }, 800);
}

function updateCartUI() {
    const cartBar = document.getElementById('cart-bar');
    const cartInfo = document.getElementById('cart-info');
    if (cart.length > 0) {
        cartBar.style.display = "flex";
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartInfo.innerText = `${cart.length} وجبات | ${total} ريال`;
    } else {
        cartBar.style.display = "none";
    }
}

function sendOrder() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    let orderText = "طلب جديد من FITFUEL ELITE:\n\n";
    cart.forEach((item, index) => {
        orderText += `${index + 1}- ${item.name} (${item.price} ريال)\n`;
    });
    orderText += `\nالمجموع النهائي: ${total} ريال`;
    
    const whatsappUrl = `https://wa.me/${MY_PHONE}?text=${encodeURIComponent(orderText)}`;
    window.open(whatsappUrl, '_blank');
}

window.onload = initApp;
