// 1. إعدادات رقم الهاتف (تم استخراجه من صورتك)
const MY_PHONE = "966563683212";

// 2. قائمة الوجبات (MVP Data)
const meals = [
    {
        name: "سلمون مشوي إيليت",
        price: 65,
        calories: 420,
        description: "سلمون طازج مع خضار موسمية وأرز بري",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600"
    },
    {
        name: "دجاج كينوا باور",
        price: 45,
        calories: 380,
        description: "صدر دجاج مشوي بصلصة الليمون مع الكينوا",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600"
    },
    {
        name: "بول اللحم الصحي",
        price: 55,
        calories: 450,
        description: "شرائح لحم بقري مع أرز أسمر وصوص الأفوكادو",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600"
    }
];

// 3. بناء الواجهة (تصميم FITFUEL ELITE)
function initApp() {
    const container = document.getElementById('meals-list');
    if (!container) return;

    // إضافة التصميم العلوي (الهيدر) والشعار
    let htmlContent = `
        <div style="background: #000; color: #fff; padding: 20px; text-align: center; font-family: sans-serif; border-bottom: 2px solid #f1c40f;">
            <div style="display: flex; justify-content: space-between; align-items: center; max-width: 500px; margin: 0 auto;">
                <span style="color: #f1c40f; font-weight: bold;">0563683212</span>
                <h1 style="margin: 0; font-size: 24px; letter-spacing: 1px;">FITFUEL ELITE</h1>
            </div>
            <div style="margin-top: 30px; position: relative; height: 200px; border-radius: 15px; overflow: hidden;">
                <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800" style="width:100%; height:100%; object-fit:cover; opacity: 0.6;">
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%;">
                    <h2 style="font-size: 35px; margin: 0;">الأعلى</h2>
                    <p style="color: #f1c40f; font-size: 18px;">نحن لا نبيع وجبات، نحن نصمم أسلوب حياة</p>
                </div>
            </div>
            
            <div style="display: flex; justify-content: space-around; margin-top: 25px; padding: 10px;">
                <div><span style="font-size: 25px;">🥩</span><p style="font-size: 12px;">بروتين عالٍ</p></div>
                <div><span style="font-size: 25px;">👨‍🍳</span><p style="font-size: 12px;">طهي طازج</p></div>
                <div><span style="font-size: 25px;">🚀</span><p style="font-size: 12px;">توصيل يومي</p></div>
            </div>
        </div>
        <div id="meals-grid" style="background: #111; padding: 10px; min-height: 500px;"></div>
    `;

    container.innerHTML = htmlContent;
    const grid = document.getElementById('meals-grid');

    // إضافة كروت الوجبات
    meals.forEach(meal => {
        const msg = encodeURIComponent(`مرحباً FITFUEL ELITE، أريد طلب: ${meal.name}`);
        grid.innerHTML += `
            <div style="background: #1a1a1a; border-radius: 25px; margin-bottom: 25px; overflow: hidden; color: #fff; direction: rtl; font-family: sans-serif;">
                <img src="${meal.image}" style="width: 100%; height: 250px; object-fit: cover;">
                <div style="padding: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h3 style="margin: 0; font-size: 22px;">${meal.name}</h3>
                        <span style="color: #f1c40f; font-weight: bold;">${meal.price} ريال</span>
                    </div>
                    <p style="color: #888; font-size: 14px; margin: 10px 0;">${meal.description}</p>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
                        <span style="font-size: 14px;">🔥 ${meal.calories} سعرة</span>
                        <a href="https://wa.me/${MY_PHONE}?text=${msg}" style="background: #f1c40f; color: #000; padding: 10px 25px; border-radius: 15px; text-decoration: none; font-weight: bold; font-size: 14px;">اطلب الآن 🛒</a>
                    </div>
                </div>
            </div>
        `;
    });
}

// تشغيل التطبيق
window.onload = initApp;
