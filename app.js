<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fit Fuel Pro | لوحة تحكم المتدرب</title>
    <style>
        :root {
            --primary-red: #e63946;    /* لون التمارين */
            --primary-green: #4caf50;  /* لون التغذية */
            --bg-dark: #121212;
            --card-bg: #1e1e1e;
            --text-white: #ffffff;
            --text-gray: #a0a0a0;
            --accent-blue: #2196f3;
        }

        body {
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: var(--bg-dark);
            color: var(--text-white);
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }

        /* الهيدر */
        .header {
            background-color: var(--card-bg);
            text-align: center;
            padding: 25px 20px;
            border-bottom: 3px solid var(--primary-red);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header h1 {
            margin: 0;
            font-size: 1.5rem;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        .welcome-msg {
            color: var(--text-gray);
            font-size: 0.9rem;
            margin-top: 5px;
        }

        /* حاوي المحتوى */
        .container {
            padding: 20px;
            max-width: 600px;
            margin: 0 auto;
            padding-bottom: 100px; /* مساحة للفوتر */
        }

        /* بطاقات الحالة */
        .status-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 25px;
        }

        .status-card {
            background-color: var(--card-bg);
            padding: 15px;
            border-radius: 12px;
            text-align: center;
            border-top: 2px solid var(--accent-blue);
        }

        .status-card small {
            color: var(--text-gray);
            display: block;
            margin-bottom: 5px;
        }

        .status-card span {
            font-size: 1.2rem;
            font-weight: bold;
        }

        /* الأقسام الرئيسية */
        .section-box {
            background-color: var(--card-bg);
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 25px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.5);
        }

        .section-title {
            display: flex;
            align-items: center;
            font-size: 1.2rem;
            margin-bottom: 20px;
            border-right: 4px solid var(--primary-red);
            padding-right: 10px;
        }

        .nutrition-title {
            border-right-color: var(--primary-green);
        }

        /* قائمة العناصر (تمارين أو وجبات) */
        .item-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px 0;
            border-bottom: 1px solid #333;
        }

        .item-row:last-child {
            border-bottom: none;
        }

        .item-info h4 {
            margin: 0;
            font-size: 1.05rem;
            color: #eee;
        }

        .item-info p {
            margin: 5px 0 0 0;
            font-size: 0.85rem;
            color: var(--text-gray);
        }

        /* أزرار الفعل */
        .action-btn {
            background-color: var(--primary-red);
            color: white;
            border: none;
            padding: 7px 12px;
            border-radius: 6px;
            text-decoration: none;
            font-size: 0.75rem;
            font-weight: bold;
            transition: 0.3s;
        }

        .action-btn:active {
            transform: scale(0.95);
        }

        /* بار الماكروز */
        .macros-bar {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }

        .macro-item {
            flex: 1;
            background: #252525;
            padding: 10px;
            border-radius: 8px;
            text-align: center;
        }

        .macro-item span {
            display: block;
            font-weight: bold;
            font-size: 1.1rem;
        }

        .macro-label {
            font-size: 0.7rem;
            text-transform: uppercase;
            margin-bottom: 3px;
        }

        /* التنقل السفلي */
        .bottom-nav {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: #000;
            display: flex;
            justify-content: space-around;
            padding: 12px 0;
            border-top: 1px solid #222;
        }

        .nav-link {
            color: var(--text-gray);
            text-decoration: none;
            font-size: 0.75rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .nav-link.active {
            color: var(--primary-red);
        }

        .nav-icon {
            font-size: 1.2rem;
        }

    </style>
</head>
<body>

    <div class="header">
        <h1>FIT FUEL PRO</h1>
        <div class="welcome-msg">مرحباً بالكابتن: محمد علي ⚡</div>
    </div>

    <div class="container">
        
        <div class="status-grid">
            <div class="status-card">
                <small>الوزن المستهدف</small>
                <span>80.0 كجم</span>
            </div>
            <div class="status-card">
                <small>السعرات اليومية</small>
                <span>2800 kcal</span>
            </div>
        </div>

        <div class="section-box">
            <div class="section-title">تمرين اليوم: سحب (PULL)</div>
            
            <div class="item-row">
                <div class="item-info">
                    <h4>Lat Pulldown</h4>
                    <p>4 جولات × 12 تكرار (راحة 60ث)</p>
                </div>
                <a href="#" class="action-btn">شرح الفيديو</a>
            </div>

            <div class="item-row">
                <div class="item-info">
                    <h4>Barbell Row</h4>
                    <p>3 جولات × 10 تكرارات</p>
                </div>
                <a href="#" class="action-btn">شرح الفيديو</a>
            </div>

            <div class="item-row">
                <div class="item-info">
                    <h4>Hammer Curls</h4>
                    <p>3 جولات × 15 تكرار</p>
                </div>
                <a href="#" class="action-btn" style="background-color: #555;">تم الإنجاز ✓</a>
            </div>
        </div>

        <div class="section-box">
            <div class="section-title nutrition-title">خطة التغذية والماكروز</div>
            
            <div class="macros-bar">
                <div class="macro-item">
                    <div class="macro-label" style="color: var(--primary-green);">بروتين</div>
                    <span>180g</span>
                </div>
                <div class="macro-item">
                    <div class="macro-label" style="color: #ffb74d;">كارب</div>
                    <span>300g</span>
                </div>
                <div class="macro-item">
                    <div class="macro-label" style="color: #64b5f6;">دهون</div>
                    <span>65g</span>
                </div>
            </div>

            <div class="item-row">
                <div class="item-info">
                    <h4>الوجبة 1: الفطور</h4>
                    <p>أومليت 5 بيضات + خبز شوفان + خضار</p>
                </div>
            </div>

            <div class="item-row">
                <div class="item-info">
                    <h4>الوجبة 2: غداء العمل</h4>
                    <p>200g سمك فيليه + أرز بني + سلطة</p>
                </div>
            </div>

            <div class="item-row">
                <div class="item-info">
                    <h4>الوجبة 3: قبل النوم</h4>
                    <p>جبنة قريش + ملعقة زيت زيتون + خيار</p>
                </div>
            </div>
        </div>

    </div>

    <nav class="bottom-nav">
        <a href="#" class="nav-link active">
            <span class="nav-icon">🏋️</span>
            التمارين
        </a>
        <a href="#" class="nav-link">
            <span class="nav-icon">🥗</span>
            التغذية
        </a>
        <a href="#" class="nav-link">
            <span class="nav-icon">📊</span>
            القياسات
        </a>
        <a href="#" class="nav-link">
            <span class="nav-icon">💬</span>
            الدعم
        </a>
    </nav>

</body>
</html>
