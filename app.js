// 1. ضع رقم جوالك السعودي هنا (بدون صفر في البداية، مثلاً 5xxxxxxx)
const myPhoneNumber = "9665XXXXXXXX"; 

// 2. قائمة الوجبات مع الصور
const manualMeals = [
    {
        name: "سلمون مشوي",
        price: "55",
        calories: "450",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&q=80" // صورة سلمون احترافية
    },
    {
        name: "دجاج مشوي مع أرز",
        price: "45",
        calories: "380",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500&q=80" // صورة دجاج مشوي
    },
    {
        name: "سلطة كينوا صحية",
        price: "35",
        calories: "220",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80" // صورة سلطة
    },
    {
        name: "ستيك لحم بقر",
        price: "65",
        calories: "520",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500&q=80" // صورة ستيك
    }
];

function loadMeals() {
    const container = document.getElementById('meals-list');
    if (!container) return;

    container.innerHTML = ""; 

    manualMeals.forEach((m) => {
        // إنشاء رسالة الواتساب التلقائية
        const whatsappMsg = encodeURIComponent(`مرحباً، أريد طلب وجبة: ${m.name}`);
        const whatsappLink = `https://wa.me/${myPhoneNumber}?text=${whatsappMsg}`;

        container.innerHTML += `
            <div style="background:white; margin:15px; border-radius:20px; overflow:hidden; box-shadow: 0 10px 20px rgba(0,0,0,0.1); text-align:right; direction:rtl; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                
                <img src="${m.image}" alt="${m.name}" style="width:100%; height:200px; object-fit:cover;">
                
                <div style="padding:20px;">
                    <h2 style="color:#2c3e50; margin:0 0 10px 0; font-size:22px;">${m.name}</h2>
                    
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                        <span style="color:#e67e22; font-weight:bold; font-size:14px;">🔥 ${m.calories} سعرة</span>
                        <span style="color:#27ae60; font-size:24px; font-weight:bold;">${m.price} <small style="font-size:14px;">ريال</small></span>
                    </div>

                    <a href="${whatsappLink}" target="_blank" style="display:block; background:#25D366; color:white; text-align:center; padding:12px; border-radius:12px; text-decoration:none; font-weight:bold; font-size:18px; transition: 0.3s;">
                       طلب عبر واتساب 💬
                    </a>
                </div>
            </div>`;
    });
}

window.onload = loadMeals;
