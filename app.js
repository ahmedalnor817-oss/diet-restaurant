import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// بياناتك من Firebase
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
    const querySnapshot = await getDocs(collection(db, "meals"));
    const container = document.getElementById('meals-list');
    querySnapshot.forEach((doc) => {
        const meal = doc.data();
        container.innerHTML += `
            <div class="meal-card">
                <h3>${meal.name}</h3>
                <p>${meal.calories} سعرة</p>
                <p><b>${meal.price} ريال</b></p>
                <button onclick="order('${meal.name}')">اطلب عبر واتساب ✅</button>
            </div>`;
    });
}

window.order = (name) => {
    // ضع رقمك هنا بدلاً من الأصفار (مثال: 966500000000)
    const myNumber = "9665XXXXXXXX"; 
    window.open(`https://wa.me/${myNumber}?text=أريد طلب وجبة: ${name}`);
};

loadMeals();
