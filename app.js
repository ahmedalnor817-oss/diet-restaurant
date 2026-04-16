import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// إعدادات مشروعك
const firebaseConfig = {
  apiKey: "AIzaSyDkWYggKMWga0DXbSHRFNc yfBEk7",
  authDomain: "diet-restaurant-app-261e4.firebaseapp.com",
  projectId: "diet-restaurant-app-261e4",
  storageBucket: "diet-restaurant-app-261e4.appspot.com",
  messagingSenderId: "412206682819",
  appId: "1:412206682819:web:1e6392d66c44679..."
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadMeals() {
    const container = document.getElementById('meals-list');
    if (!container) return;
    container.innerHTML = "<p style='text-align:center;'>جاري سحب الوجبات... 🥗</p>";

    // هذا المسار تم تعديله ليطابق صورتك الأخيرة تماماً
    const path = "meals/y0SIUeSdBw8Bp5klWy96/meals";

    try {
        const querySnapshot = await getDocs(collection(db, path));
        
        if (querySnapshot.empty) {
            container.innerHTML = "<p style='text-align:center;'>المجلد فارغ، تأكد من الحفظ في Firebase</p>";
            return;
        }

        container.innerHTML = ""; 
        querySnapshot.forEach((doc) => {
            const m = doc.data();
            // قراءة البيانات
            const name = m.name || "وجبة صحية";
            const price = m.price || "0";
            const calories = m.calories || "0";

            container.innerHTML += `
                <div style="background:white; margin:15px; padding:20px; border-radius:15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align:center; direction:rtl;">
                    <h2 style="color:#2c3e50;">${name}</h2>
                    <p style="color:#7f8c8d;">🔥 ${calories} سعرة</p>
                    <p style="color:#27ae60; font-size:24px; font-weight:bold;">${price} ريال</p>
                    <a href="https://wa.me/9665XXXXXXXX" style="display:inline-block; background:#27ae60; color:white; padding:10px 25px; border-radius:25px; text-decoration:none; font-weight:bold;">اطلب الآن ✅</a>
                </div>`;
        });
    } catch (e) {
        console.error("Error: ", e);
        container.innerHTML = "<p style='text-align:center;'>حدث خطأ في الاتصال بقاعدة البيانات</p>";
    }
}

loadMeals();
