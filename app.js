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
    container.innerHTML = "<p style='text-align:center;'>جاري محاولة الاتصال الأخيرة... 🛠️</p>";

    try {
        // البحث في كل المجلدات التي تسمى meals مهما كان مكانها
        const querySnapshot = await getDocs(collectionGroup(db, 'meals'));
        
        if (querySnapshot.empty) {
            container.innerHTML = "<div style='text-align:center; padding:20px; border:2px dashed red;'> المجلد لا يزال يظهر فارغاً. <br> جرب فتح الموقع من متصفح خفي (Incognito) </div>";
            return;
        }

        container.innerHTML = ""; 
        querySnapshot.forEach((doc) => {
            const m = doc.data();
            if (m.name || m.Name) {
                container.innerHTML += `
                    <div style="background:white; margin:15px; padding:20px; border-radius:15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align:center; direction:rtl;">
                        <h2 style="color:#2c3e50;">${m.name || m.Name}</h2>
                        <p style="color:#7f8c8d;">🔥 ${m.calories || 0} سعرة</p>
                        <p style="color:#27ae60; font-size:24px; font-weight:bold;">${m.price || 0} ريال</p>
                        <a href="https://wa.me/9665XXXXXXXX" style="display:inline-block; background:#27ae60; color:white; padding:10px 25px; border-radius:25px; text-decoration:none; font-weight:bold; margin-top:10px;">اطلب عبر الواتساب ✅</a>
                    </div>`;
            }
        });
    } catch (e) {
        container.innerHTML = "<p style='text-align:center;'>خطأ في الصلاحيات. تأكد من ضبط Rules في Firebase</p>";
    }
}
loadMeals();
