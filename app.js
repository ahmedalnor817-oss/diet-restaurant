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
    container.innerHTML = "<p style='text-align:center;'>جاري سحب الوجبات من قاعدة البيانات... 🥗</p>";

    // المسارات التي ظهرت في صورك، سنفحصها جميعاً آلياً
    const paths = [
        "meals",
        "meals/y0SIUeSdBw8Bp5klWy96/meals",
        "meals/xP2pl9azF9TdX5g8ROxV/meals"
    ];

    let found = false;
    let html = "";

    for (const path of paths) {
        try {
            const querySnapshot = await getDocs(collection(db, path));
            if (!querySnapshot.empty) {
                querySnapshot.forEach((doc) => {
                    const m = doc.data();
                    // قراءة ذكية للبيانات (يقرأ name أو Name)
                    const n = m.name || m.Name || "وجبة صحية";
                    const p = m.price || m.Price || "0";
                    const c = m.calories || m.Calories || "0";

                    html += `
                        <div style="background:white; margin:15px; padding:20px; border-radius:15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align:center; font-family: sans-serif;">
                            <h2 style="color:#2c3e50;">${n}</h2>
                            <p style="color:#7f8c8d;">🔥 ${c} سعرة حرارية</p>
                            <p style="color:#27ae60; font-size:24px; font-weight:bold;">${p} ريال</p>
                            <a href="#" style="display:inline-block; background:#27ae60; color:white; padding:12px 30px; border-radius:30px; text-decoration:none; font-weight:bold; margin-top:10px;">اطلب الآن ✅</a>
                        </div>`;
                    found = true;
                });
            }
        } catch (e) { console.log("خطأ في مسار: " + path); }
    }

    if (found) {
        container.innerHTML = html;
    } else {
        container.innerHTML = "<p style='text-align:center;'>لم نجد وجبات. أضف وثيقة (Document) داخل مجلد meals في Firebase.</p>";
    }
}
loadMeals();
