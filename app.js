import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, getDocs, collectionGroup } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

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
    container.innerHTML = "<p style='text-align:center;'>جاري فحص شامل لقاعدة البيانات... 🔎</p>";

    let found = false;
    let html = "";

    // ميزة "البحث الشامل": سيبحث عن أي مجلد اسمه meals في أي مكان في القاعدة
    try {
        const querySnapshot = await getDocs(collectionGroup(db, 'meals'));
        
        if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                const m = doc.data();
                // التأكد من أن الوثيقة تحتوي على بيانات فعلاً وليس مجرد مجلد فارغ
                if (m.name || m.Name) {
                    const n = m.name || m.Name || "وجبة صحية";
                    const p = m.price || m.Price || "0";
                    const c = m.calories || m.Calories || "0";

                    html += `
                        <div style="background:white; margin:15px; padding:20px; border-radius:15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align:center; direction:rtl;">
                            <h2 style="color:#2c3e50;">${n}</h2>
                            <p style="color:#7f8c8d;">🔥 ${c} سعرة حرارية</p>
                            <p style="color:#27ae60; font-size:24px; font-weight:bold;">${p} ريال</p>
                            <a href="https://wa.me/9665XXXXXXXX" style="display:inline-block; background:#27ae60; color:white; padding:12px 30px; border-radius:30px; text-decoration:none; font-weight:bold; margin-top:10px;">اطلب الآن ✅</a>
                        </div>`;
                    found = true;
                }
            });
        }
    } catch (e) { 
        console.error("خطأ في البحث الشامل: ", e); 
    }

    if (found) {
        container.innerHTML = html;
    } else {
        container.innerHTML = `
            <div style="text-align:center; padding:20px;">
                <p>لم يتم العثور على وجبات في أي مسار.</p>
                <p style="color:red; font-size:14px;">تأكد أنك أضفت الحقول داخل Document وليس كـ Fields خارجية.</p>
            </div>`;
    }
}

loadMeals();
