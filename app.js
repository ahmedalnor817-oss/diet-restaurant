import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// إعدادات مشروعك (تأكد أنها مطابقة لبياناتك في Firebase)
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
    try {
        const querySnapshot = await getDocs(collection(db, "meals"));
        container.innerHTML = ""; // نمسح أي نص قديم
        
        querySnapshot.forEach((doc) => {
            const meal = doc.data();
            container.innerHTML += `
                <div style="background:white; margin:15px; padding:20px; border-radius:15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align:center; font-family: Arial, sans-serif;">
                    <h2 style="color:#2c3e50;">${meal.name}</h2>
                    <p style="color:#7f8c8d;">🔥 السعرات: ${meal.calories} سعرة</p>
                    <p style="color:#27ae60; font-size:20px; font-weight:bold;">${meal.price} ريال</p>
                    <a href="https://wa.me/966XXXXXXXXX" style="display:inline-block; background:#27ae60; color:white; padding:10px 25px; border-radius:30px; text-decoration:none; margin-top:10px;">اطلب عبر واتساب ✅</a>
                </div>`;
        });
    } catch (e) {
        console.error("Error: ", e);
        container.innerHTML = "حدث خطأ أثناء تحميل الوجبات.";
    }
}

loadMeals();
