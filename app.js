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

    // سنحاول البحث في المسارين اللذين ظهروا في صورك
    const paths = ["meals", "meals/LtEp9ggN1A4vio9No8bL/meals"];
    let mealsFound = false;
    container.innerHTML = ""; 

    for (const path of paths) {
        try {
            const querySnapshot = await getDocs(collection(db, path));
            if (!querySnapshot.empty) {
                querySnapshot.forEach((doc) => {
                    const meal = doc.data();
                    mealsFound = true;
                    container.innerHTML += `
                        <div style="background:white; margin:15px; padding:20px; border-radius:15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align:center; font-family: sans-serif;">
                            <h2 style="color:#2c3e50; margin-bottom:10px;">${meal.name || "وجبة صحية"}</h2>
                            <p style="color:#7f8c8d; font-size:16px;">🔥 السعرات: ${meal.calories || 0} سعرة</p>
                            <p style="color:#27ae60; font-size:24px; font-weight:bold; margin:10px 0;">${meal.price || 0} ريال</p>
                            <a href="https://wa.me/9665XXXXXXXX" style="display:inline-block; background:#27ae60; color:white; padding:12px 35px; border-radius:30px; text-decoration:none; font-weight:bold;">اطلب الآن ✅</a>
                        </div>`;
                });
            }
        } catch (e) { console.log("Path not found: " + path); }
    }

    if (!mealsFound) {
        container.innerHTML = "<p style='text-align:center;'>لا تزال البيانات غير مرئية، تأكد من ضغط Save في Firebase</p>";
    }
}

loadMeals();
