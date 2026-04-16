// بيانات الوجبات مباشرة في الكود لضمان العمل الفوري
const manualMeals = [
    {
        name: "سلمون مشوي",
        price: "55",
        calories: "450"
    },
    {
        name: "دجاج مشوي مع أرز",
        price: "45",
        calories: "380"
    }
];

function loadMeals() {
    const container = document.getElementById('meals-list');
    if (!container) return;

    container.innerHTML = ""; // تنظيف الشاشة

    manualMeals.forEach((m) => {
        container.innerHTML += `
            <div style="background:white; margin:15px; padding:20px; border-radius:15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align:center; direction:rtl; font-family: sans-serif;">
                <h2 style="color:#2c3e50; margin-bottom:10px;">${m.name}</h2>
                <p style="color:#7f8c8d; font-size:16px;">🔥 ${m.calories} سعرة حرارية</p>
                <p style="color:#27ae60; font-size:24px; font-weight:bold; margin:10px 0;">${m.price} ريال</p>
                <a href="https://wa.me/9665XXXXXXXX" style="display:inline-block; background:#27ae60; color:white; padding:12px 35px; border-radius:30px; text-decoration:none; font-weight:bold;">اطلب الآن عبر واتساب ✅</a>
            </div>`;
    });
}

// تشغيل الوظيفة فوراً
window.onload = loadMeals;
