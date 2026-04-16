// 1. إعدادات التواصل (ضع رقمك هنا ليبدأ بـ 966)
const WHATSAPP_NUMBER = "9665XXXXXXXX"; 

// 2. قاعدة بيانات الوجبات (MVP Data)
const mealsData = [
    {
        id: 1,
        name: "سلمون مشوي بالليمون",
        price: 65,
        calories: 420,
        description: "قطعة سلمون طازجة مع خضار سوتيه وأرز بني",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600"
    },
    {
        id: 2,
        name: "دجاج مشوي دايت",
        price: 45,
        calories: 350,
        description: "صدر دجاج متبل بالأعشاب مع سلطة جرجير",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600"
    },
    {
        id: 3,
        name: "فتة باذنجان صحية",
        price: 35,
        calories: 280,
        description: "باذنجان مشوي مع زبادي لايت وخبز بر محمص",
        image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600"
    },
    {
        id: 4,
        name: "ستيك لحم بقر لايت",
        price: 70,
        calories: 490,
        description: "شريحة لحم بقر قليلة الدهون مع بطاطس مهروسة",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600"
    }
];

// 3. وظيفة عرض الوجبات في الصفحة
function displayMeals() {
    const mealsList = document.getElementById('meals-list');
    if (!mealsList) return;

    mealsList.innerHTML = ""; // تفريغ القائمة قبل العرض

    mealsData.forEach(meal => {
        // تجهيز رسالة الواتساب
        const message = `مرحباً، أود طلب وجبة: ${meal.name} (السعر: ${meal.price} ريال)`;
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

        const mealCard = `
            <div style="background: #fff; border-radius: 20px; margin: 20px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.1); direction: rtl; font-family: sans-serif;">
                <img src="${meal.image}" style="width: 100%; height: 220px; object-fit: cover;" alt="${meal.name}">
                <div style="padding: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h2 style="margin: 0; font-size: 20px; color: #2d3436;">${meal.name}</h2>
                        <span style="background: #f1f2f6; padding: 5px 10px; border-radius: 10px; font-size: 14px; color: #636e72;">🔥 ${meal.calories} سعرة</span>
                    </div>
                    <p style="color: #636e72; font-size: 14px; margin: 10px 0;">${meal.description}</p>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
                        <span style="font-size: 22px; font-weight: bold; color: #27ae60;">${meal.price} <small style="font-size: 12px;">ريال</small></span>
                        <a href="${whatsappUrl}" target="_blank" style="background: #25D366; color: white; padding: 10px 20px; border-radius: 12px; text-decoration: none; font-weight: bold; font-size: 16px;">
                            طلب عبر واتساب 💬
                        </a>
                    </div>
                </div>
            </div>
        `;
        mealsList.innerHTML += mealCard;
    });
}

// تشغيل الكود عند فتح الصفحة
window.onload = displayMeals;
