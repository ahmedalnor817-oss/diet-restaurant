const MY_PHONE = "966563683212";

// قاعدة البيانات الموسعة
const menu = {
    offers: [
        { name: "باقة البركة الأسبوعية", price: "450", desc: "6 وجبات غداء + سلطات (توفير 15%)", emoji: "🎁" }
    ],
    mainMeals: [
        { name: "سلمون إيليت المشوي", price: 65, cal: 420, img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500", tag: "الأكثر طلباً" },
        { name: "ستيك لحم بقر واغيو لايت", price: 85, cal: 510, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500", tag: "جديد" },
        { name: "دجاج كينوا بيري", price: 48, cal: 360, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500", tag: "صحي" },
        { name: "روبيان مشوي بالكاري", price: 75, cal: 310, img: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=500", tag: "بحري" }
    ],
    breakfast: [
        { name: "أومليت بياض البيض والسبانخ", price: 28, cal: 180, img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500", tag: "فطور" },
        { name: "بينك بانكيك بروتين", price: 35, cal: 290, img: "https://images.unsplash.com/photo-1506084868730-3424e9339e05?w=500", tag: "طاقة" }
    ]
};

function initApp() {
    const container = document.getElementById('meals-list');
    if (!container) return;

    let html = `
    <div style="background: #0a0a0a; color: #fff; font-family: 'Cairo', sans-serif; min-height: 100vh; direction: rtl;">
        
        <header style="padding: 25px; text-align: center; border-bottom: 1px solid #222;">
            <h1 style="color: #f1c40f; margin: 0; font-size: 28px; letter-spacing: 2px;">FITFUEL <span style="color:#fff">ELITE</span></h1>
            <p style="color: #888; font-size: 12px; margin-top: 5px;">📍 الرياض | توصيل يومي طازج</p>
        </header>

        <div style="margin: 15px; border-radius: 25px; overflow: hidden; position: relative; height: 180px;">
            <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800" style="width:100%; height:100%; object-fit:cover; opacity:0.5;">
            <div style="position: absolute; bottom: 20px; right: 20px;">
                <h2 style="font-size: 24px; margin: 0;">نصمم أسلوب حياة</h2>
                <p style="color: #f1c40f; margin: 5px 0 0 0;">قائمة رمضان المتوفرة الآن ✨</p>
            </div>
        </div>

        <div style="padding: 0 15px;">
            <h3 style="color: #f1c40f; border-right: 4px solid #f1c40f; padding-right: 10px;">عروض التوفير 💎</h3>
            ${menu.offers.map(off => `
                <div style="background: linear-gradient(45deg, #1a1a1a, #2c3e50); padding: 15px; border-radius: 15px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; border: 1px solid #333;">
                    <div>
                        <h4 style="margin:0">${off.emoji} ${off.name}</h4>
                        <small style="color:#aaa">${off.desc}</small>
                    </div>
                    <a href="https://wa.me/${MY_PHONE}?text=مهتم بعرض: ${off.name}" style="background:#f1c40f; color:#000; padding: 8px 15px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 12px;">اشترك</a>
                </div>
            `).join('')}
        </div>

        ${renderSection("الأطباق الرئيسية 🔥", menu.mainMeals)}
        ${renderSection("الفطور الصحي ☕", menu.breakfast)}

        <footer style="text-align: center; padding: 40px; color: #444;">
            <p>جميع الحقوق محفوظة لـ FITFUEL ELITE 2026</p>
        </footer>
    </div>
    `;

    container.innerHTML = html;
}

function renderSection(title, items) {
    return `
    <div style="padding: 10px 15px;">
        <h3 style="color: #fff; border-right: 4px solid #fff; padding-right: 10px; margin-top: 30px;">${title}</h3>
        <div style="display: grid; grid-template-columns: 1fr; gap: 20px;">
            ${items.map(item => `
                <div style="background: #151515; border-radius: 20px; overflow: hidden; border: 1px solid #222;">
                    <div style="position: relative;">
                        <img src="${item.img}" style="width: 100%; height: 200px; object-fit: cover;">
                        <span style="position: absolute; top: 10px; left: 10px; background: #f1c40f; color: #000; padding: 4px 12px; border-radius: 20px; font-size: 10px; font-weight: bold;">${item.tag}</span>
                    </div>
                    <div style="padding: 15px;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <h4 style="margin: 0; font-size: 18px;">${item.name}</h4>
                            <span style="color: #f1c40f; font-weight: bold; font-size: 18px;">${item.price} <small>ريال</small></span>
                        </div>
                        <p style="color: #888; font-size: 12px; margin: 10px 0;">السعرات: ${item.cal} سعرة حرارية</p>
                        <a href="https://wa.me/${MY_PHONE}?text=أريد طلب: ${item.name}" style="display: block; background: #fff; color: #000; text-align: center; padding: 10px; border-radius: 10px; text-decoration: none; font-weight: bold; transition: 0.3s;">اطلب عبر الواتساب</a>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
    `;
}

window.onload = initApp;
