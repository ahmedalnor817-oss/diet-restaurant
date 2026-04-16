import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

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
    container.innerHTML = "<p style='text-align:center;'>جاري البحث عن الوجبات...</p>";

    // المسارات التي سنبحث فيها بالترتيب
    const possiblePaths = [
        "meals", 
        "meals/y0SlUeSdBw8Bp5klWy96/meals",
        "meals/LtEp9ggN1A4vio9No8bL/meals"
    ];

    let found = false;

    for (const path of possiblePaths) {
        try {
            const querySnapshot = await getDocs(collection(db, path));
            if (!querySnapshot.empty) {
                if (!found) container.innerHTML = ""; // تنظيف الرسالة عند أول وجبة نجدها
                querySnapshot.forEach((doc) => {
                    const m = doc.data();
                    const name = m.name || m.Name || "وجبة صحية";
                    const price = m.price || m.Price || "0";
                    const calories = m.calories || m.Calories || "0";
                    
                    container.innerHTML += `
                        <div style="background:white; margin:15px; padding:20px; border-radius:15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align:center;">
                            <h2 style="color:#2c3e50;">${name}</h2>
                            <p style="color:#7f8c8d;">🔥 ${calories} سعرة</p>
                            <p style="color:#27ae60; font-size:22px; font-weight:bold;">${price} ريال</p>
                            <a href="https://wa.me/9665XXXXXXXX" style="display:inline-block; background:#27ae60; color:white; padding:10px 25px; border-radius:25px; text-decoration:none;">اطلب الآن ✅</a>
                        </div>`;
                });
                found = true;
            }
        } catch (e) { console.log("بحث في مسار: " + path); }
    }

    if (!found) {
        container.innerHTML = "<p style='text-align:center;'>تأكد من حفظ البيانات في Firebase ثم حدث الصفحة</p>";
    }
}

loadMeals();
