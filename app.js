import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// إعدادات مشروعك (لا تغيرها لأنها صحيحة)
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
    
    container.innerHTML = "<p style='text-align:center;'>جاري فحص قاعدة البيانات... 🔍</p>";

    // هذه هي المسارات التي ظهرت في صورك، الكود سيفحصها واحداً تلو الآخر
    const allPossiblePaths = [
        "meals", 
        "meals/y0SIUeSdBw8Bp5klWy96/meals",
        "meals/LtEp9ggN1A4vio9No8bL/meals",
        "default/y0SIUeSdBw8Bp5klWy96/meals"
    ];

    let foundAnyMeal = false;
    let htmlContent = "";

    for (const path of allPossiblePaths) {
        try {
            const querySnapshot = await getDocs(collection(db, path));
            
            if (!querySnapshot.empty) {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    // قراءة البيانات سواء كانت الحروف كبيرة أو صغيرة
                    const name = data.name || data.Name || "وجبة غير مسمى";
                    const price = data.price || data.Price || "0";
                    const calories = data.calories || data.Calories || "0";

                    htmlContent += `
                        <div style="background:white; margin:15px; padding:20px; border-radius:15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align:center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                            <h2 style="color:#2c3e50; margin-bottom:10px;">${name}</h2>
                            <p style="color:#7f8c8d; font-size:16px;">🔥 السعرات: ${calories} سعرة</p>
                            <p style="color:#27ae60; font-size:24px; font-weight:bold; margin:10px 0;">${price} ريال</p>
                            <a href="https://wa.me/9665XXXXXXXX" style="display:inline-block; background:#27ae60; color:white; padding:12px 35px; border-radius:30px; text-decoration:none; font-weight:bold;">اطلب الآن عبر واتساب ✅</a>
                        </div>`;
                    foundAnyMeal = true;
                });
            }
        } catch (e) {
            console.log("المسار غير موجود أو لا تملك صلاحية الوصول إليه: " + path);
        }
    }

    if (foundAnyMeal) {
        container.innerHTML = htmlContent;
    } else {
        container.innerHTML = `
            <div style="text-align:center; padding:20px;">
                <p>لم نجد أي وجبات حتى الآن.</p>
                <p style="font-size:12px; color:gray;">تأكد من إضافة وثيقة (Document) داخل مجلد meals في Firebase.</p>
            </div>`;
    }
}

loadMeals();
