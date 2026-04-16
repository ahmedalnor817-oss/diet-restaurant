import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// إعدادات الربط مع Firebase
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

    try {
        // جلب البيانات من مجموعة meals التي أنشأتها
        const querySnapshot = await getDocs(collection(db, "meals"));
        container.innerHTML = ""; 
        
        if (querySnapshot.empty) {
            container.innerHTML = "<p style='text-align:center;'>لا توجد وجبات حالياً، أضف وجبة في Firebase</p>";
            return;
        }

        querySnapshot.forEach((doc) => {
            const meal = doc.data();
            container.innerHTML += `
                <div style="background:white; margin:15px; padding:20px; border-radius:15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align:center;">
                    <h2 style="color:#2c3e50;">${meal.name}</h2>
                    <p style="color:#7f8c8d;">🔥 ${meal.calories} سعرة حرارية</p>
                    <p style="color:#27ae60; font-size:22px; font-weight:bold;">${meal.price} ريال</p>
                    <a href="https://wa.me/9665XXXXXXXX" style="display:inline-block; background:#27ae60; color:white; padding:12px 30px; border-radius:30px; text-decoration:none; font-weight:bold;">اطلب الآن ✅</a>
                </div>`;
        });
    } catch (e) {
        console.error("خطأ: ", e);
        container.innerHTML = "<p>تعذر تحميل البيانات، تأكد من إعدادات Firebase</p>";
    }
}

loadMeals();
