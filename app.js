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
    container.innerHTML = "<p style='text-align:center;'>جاري سحب الوجبة المضافة... 🥗</p>";

    // هذا هو المسار الدقيق الذي يظهر في صورتك الأخيرة (8:42)
    // لاحظ أننا ندخل للمجلد 'meals' الموجود داخل الوثيقة 'y0SIUeSdBw8Bp5klWy96'
    const mealPath = "meals/y0SIUeSdBw8Bp5klWy96/meals";

    try {
        const querySnapshot = await getDocs(collection(db, mealPath));
        
        if (querySnapshot.empty) {
            // إذا لم يجد شيئاً في المسار العميق، سيجرب المسار الرئيسي كخطة احتياطية
            const backupSnapshot = await getDocs(collection(db, "meals"));
            if (backupSnapshot.empty) {
                container.innerHTML = "<p style='text-align:center;'>المجلد لا يزال يظهر فارغاً. تأكد من الضغط على Save في Firebase.</p>";
                return;
            }
            renderMeals(backupSnapshot, container);
        } else {
            renderMeals(querySnapshot, container);
        }
    } catch (e) {
        console.error(e);
        container.innerHTML = "<p style='text-align:center;'>خطأ في الصلاحيات أو الاتصال.</p>";
    }
}

function renderMeals(snapshot, container) {
    container.innerHTML = ""; 
    snapshot.forEach((doc) => {
        const m = doc.data();
        container.innerHTML += `
            <div style="background:white; margin:15px; padding:20px; border-radius:15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align:center; direction:rtl;">
                <h2 style="color:#2c3e50;">${m.name}</h2>
                <p style="color:#7f8c8d;">🔥 ${m.calories} سعرة</p>
                <p style="color:#27ae60; font-size:24px; font-weight:bold;">${m.price} ريال</p>
                <a href="#" style="display:inline-block; background:#27ae60; color:white; padding:10px 25px; border-radius:25px; text-decoration:none; font-weight:bold;">اطلب الآن ✅</a>
            </div>`;
    });
}

loadMeals();
