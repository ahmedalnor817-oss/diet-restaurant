<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fit Fuel Elite | نظام المشتركين</title>
    <style>
        :root {
            --main-gold: #d4af37; /* لون ذهبي للنخبة */
            --dark-bg: #0a0a0a;
            --card-bg: #161616;
            --text-color: #e0e0e0;
        }

        body {
            font-family: 'Tahoma', sans-serif;
            background-color: var(--dark-bg);
            color: var(--text-color);
            margin: 0;
            padding-bottom: 80px;
        }

        .app-header {
            background: linear-gradient(145deg, #1a1a1a, #000);
            padding: 30px 20px;
            text-align: center;
            border-bottom: 2px solid var(--main-gold);
        }

        .container { padding: 15px; max-width: 500px; margin: auto; }

        .section-card {
            background: var(--card-bg);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
            border: 1px solid #222;
        }

        .title {
            color: var(--main-gold);
            font-size: 1.2rem;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .data-row {
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: 1px solid #222;
        }

        .btn-check {
            background: none;
            border: 1px solid var(--main-gold);
            color: var(--main-gold);
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
        }

        .btn-check.done {
            background: var(--main-gold);
            color: black;
        }

        /* Bottom Nav */
        .nav-bar {
            position: fixed;
            bottom: 0;
            width: 100%;
            background: #000;
            display: flex;
            justify-content: space-around;
            padding: 15px 0;
            border-top: 1px solid var(--main-gold);
        }
    </style>
</head>
<body>

<div class="app-header">
    <h2 id="clientName">جاري التحميل...</h2>
    <p id="clientGoal" style="color: #888;"></p>
</div>

<div class="container">
    <div class="section-card">
        <div class="title">🏋️ تمارين اليوم</div>
        <div id="workoutList"></div>
    </div>

    <div class="section-card">
        <div class="title">🥗 نظام الوجبات</div>
        <div id="dietList"></div>
    </div>
</div>

<nav class="nav-bar">
    <span>🏠 الرئيسية</span>
    <span>📊 تطوري</span>
    <span>💬 المدرب</span>
</nav>

<script>
    // هذه هي قاعدة بيانات المشترك - يمكنك تغييرها بسهولة
    const clientData = {
        name: "البطل محمد",
        goal: "تضخيم عضلي - الأسبوع الرابع",
        workout: [
            { name: "بنش برس", sets: "4", reps: "10" },
            { name: "تجميع دمبل", sets: "3", reps: "12" },
            { name: "غطس متوازي", sets: "3", reps: "للفشل" }
        ],
        diet: [
            { meal: "فطور", content: "100جم شوفان + 5 بيضات" },
            { meal: "غداء", content: "200جم صدر دجاج + أرز" },
            { meal: "عشاء", content: "علبة تونة + سلطة" }
        ]
    };

    // عرض البيانات في الصفحة
    document.getElementById('clientName').innerText = clientData.name;
    document.getElementById('clientGoal').innerText = clientData.goal;

    const workoutDiv = document.getElementById('workoutList');
    clientData.workout.forEach(ex => {
        workoutDiv.innerHTML += `
            <div class="data-row">
                <div>
                    <strong>${ex.name}</strong><br>
                    <small style="color:#888">${ex.sets} جولات × ${ex.reps}</small>
                </div>
                <button class="btn-check" onclick="this.classList.toggle('done')">تم</button>
            </div>`;
    });

    const dietDiv = document.getElementById('dietList');
    clientData.diet.forEach(m => {
        dietDiv.innerHTML += `
            <div class="data-row">
                <div>
                    <strong>${m.meal}</strong><br>
                    <small style="color:#888">${m.content}</small>
                </div>
            </div>`;
    });
</script>

</body>
</html>
