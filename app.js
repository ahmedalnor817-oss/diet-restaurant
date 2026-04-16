import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collectionGroup, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

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
    
    // أولاً: سنعرض وجبة افتراضية لنتأكد أن الموقع يعمل برمجياً
    container.innerHTML = `
        <div id="loading-status" style="text-align:center; padding:10px; color:#7f8c8d;">جاري فحص الاتصال بـ Firebase...</div>
    `;

    try {
        const querySnapshot = await getDocs(collectionGroup(db, 'meals'));
        
        if (querySnapshot.empty) {
            document.getElementById('loading-status').innerHTML = "⚠️ متصل بـ Firebase ولكن المجلد لا يزال يظهر فارغاً.";
        } else {
            document.getElementById('loading-status').style.display = "none";
            querySnapshot.forEach((doc) => {
                const m = doc.data();
                if (m.name || m.Name) {
                    renderMeal(container, m.name || m.Name, m.price || 0, m.calories || 0);
                }
            });
        }
    } catch (e) {
        document.getElementById('loading-status').innerHTML = "❌ خطأ في الصلاحيات. تأكد من تبويب Rules في Firebase.";
        console.error(e);
    }
}

function renderMeal(container, name, price, calories) {
    container.innerHTML += `
        <div style="background:white; margin:15px; padding:20px; border-radius:15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align:center; direction:rtl;">
            <h2 style="color:#2c3e50;">${name}</h2>
            <p style="color:#7f8c8d;">🔥 ${calories} سعرة</p>
            <p style="color:#27ae60; font-size:24px; font-weight:bold;">${price} ريال</p>
            <a href="https://wa.me/9665XXXXXXXX" style="display:inline-block; background:#27ae60; color:white; padding:10px 25px; border-radius:25px; text-decoration:none; font-weight:bold; margin-top:10px;">اطلب عبر الواتساب ✅</a>
        </div>`;
}

loadMeals();
