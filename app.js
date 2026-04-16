<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نابض – تطبيق التغذية والدايت السعودي</title>
    <!-- تحسين محركات البحث básico -->
    <meta name="description" content="نابض: تطبيق صحي سعودي يوفّر خطط وجبات مخصصة للتنشيف والتضخيم، حاسبة سعرات دقيقة، سلة تسوق، ودفع آمن عبر Stripe.">
    <meta name="keywords" content="تغذية, ديت, خطة وجبات, حاسبة سعرات, سلة تسوق, Stripe, السعودية, نابض, صحة">
    <!-- خطوط عربية احترافية من Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
    <!-- تحميل مكتبة Stripe أولاً (ضروري لتشغيل جافا سكريبت بأمان) -->
    <script src="https://js.stripe.com/v3/"></script>
    <style>
        /* ===== المتغيرات العالمية – هوية بصرية سعودية ===== */
        :root {
            --primary-saudi: #006c35;   /* أخضر علم السعودية */
            --secondary-saudi: #ffcd00; /* أبيض وعلم السعودية (نستخدمه كلون مميز) */
            --bg-light: #f8f9fa;
            --card-bg: #ffffff;
            --text-dark: #212529;
            --text-muted: #6c757d;
            --border-radius: 14px;
            --box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            --max-width: 1200px;
        }
        /* ===== إعادة ضبط أساسية مع تحسين القراءة ===== */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { font-size: 16px; scroll-behavior: smooth; }
        body {
            font-family: 'Cairo', sans-serif;
            background-color: var(--bg-light);
            color: var(--text-dark);
            line-height: 1.7;
        }
        a { text-decoration: none; color: inherit; }
        img { max-width: 100%; height: auto; display: block; border-radius: var(--border-radius); }
        button, input, select { font-family: inherit; }
        /* ===== ترويسة مع لمسات هوية ===== */
        header {
            background: var(--primary-saudi);
            color: #fff;
            padding: 2.5rem 1rem;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        header::before {
            content: "";
            position: absolute;
            inset: 0;
            background: url('https://via.placeholder.com/1920x1080/006c35/ffffff?text=Saudi+Health+Hero') center/cover no-repeat;
            opacity: 0.12;
            z-index: -1;
        }
        header h1 { font-size: 2.4rem; font-weight: 700; margin-bottom: .4rem; letter-spacing: -0.5px; }
        header p { font-size: 1.15rem; opacity: .92; max-width: 700px; margin: 0 auto 1.5rem; line-height: 1.6; }
        nav {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
            margin-top: 1rem;
        }
        nav a {
            color: #fff;
            font-weight: 600;
            padding: .6rem 1.2rem;
            border-radius: 50px;
            background: rgba(255,255,255,0.15);
            transition: var(--transition);
        }
        nav a:hover { background: rgba(255,255,255,0.25); transform: translateY(-2px); }
        /* ===== أقسام المحتوى ===== */
        section {
            padding: 4rem 1rem;
            max-width: var(--max-width);
            margin: auto;
        }
        h2 {
            font-size: 2rem;
            color: var(--primary-saudi);
            margin-bottom: 2.5rem;
            display: flex;
            align-items: center;
            gap: .8rem;
            position: relative;
        }
        h2::before {
            content: "";
            width: 5px;
            height: 100%;
            background: var(--secondary-saudi);
            border-radius: 2px;
        }
        /* ===== قسم البطل (hero) مع دعوة للعمل ===== */
        #hero {
            background: linear-gradient(135deg, rgba(0,108,53,.95), rgba(255,205,0,.9)),
                        url('https://images.unsplash.com/photo-1550907576-3b4449efef7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhlYWx0aHx8fHx8fHx8MTY1OTM3NjMwNQ&ixlib=rb-4.0.3&q=80&w=1600') center/cover no-repeat;
            color: #fff;
            text-align: center;
            padding: 10rem 1rem 8rem;
            position: relative;
        }
        #hero::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,.4) 70%);
        }
        #hero > * { position: relative; z-index: 1; }
        #hero h2 { font-size: 2.8rem; margin-bottom: 1.2rem; font-weight: 700; }
        #hero p { font-size: 1.3rem; max-width: 800px; margin: 0 auto 2rem; line-height: 1.8; }
        #hero .btn {
            display: inline-block;
            background: #fff;
            color: var(--primary-saudi);
            border: none;
            padding: 1rem 2.5rem;
            font-size: 1.15rem;
            font-weight: 600;
            border-radius: 50px;
            box-shadow: 0 4px 12px rgba(0,0,0,.15);
            transition: var(--transition);
        }
        #hero .btn:hover { transform: translateY(-3px); box-shadow: 0 6px 16px rgba(0,0,0,.25); }
        /* ===== بطاقات الوجبات – تصميم جذاب للطعام ===== */
        .plan-tabs {
            display: flex;
            justify-content: center;
            gap: .8rem;
            margin-bottom: 2.5rem;
            flex-wrap: wrap;
        }
        .tab {
            background: #f8f9fa;
            border: 2px solid var(--primary-saudi);
            color: var(--primary-saudi);
            padding: .7rem 1.4rem;
            border-radius: 50px;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
        }
        .tab.active, .tab:hover {
            background: var(--primary-saudi);
            color: #fff;
        }
        .plan-list {
            display: grid;
            gap: 2rem;
            grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
        }
        .plan-card {
            background: var(--card-bg);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            overflow: hidden;
            transition: var(--transition);
            cursor: pointer;
            position: relative;
            border: 1px solid rgba(0,0,0,0.05);
        }
        .plan-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 28px rgba(0,0,0,.12);
            border-color: var(--primary-saudi);
        }
        .plan-card img {
            height: 210px;
            object-fit: cover;
            border-bottom: 1px solid rgba(0,0,0,0.07);
            transition: transform var(--transition);
        }
        .plan-card:hover img { transform: scale(1.03); }
        .plan-card .content {
            padding: 1.6rem;
            display: flex;
            flex-direction: column;
        }
        .plan-card h3 {
            margin: 0 0 .6rem;
            font-size: 1.4rem;
            color: var(--primary-saudi);
            display: flex;
            align-items: center;
            gap: .5rem;
        }
        .plan-card h3::before { content: "🍽️"; font-size: 1.2rem; }
        .plan-card p {
            margin: .5rem 0;
            flex-grow: 1;
            font-size: .98rem;
            color: var(--text-muted);
            line-height: 1.6;
        }
        .plan-card .price {
            font-weight: 700;
            font-size: 1.25rem;
            margin-top: 1.2rem;
            color: var(--secondary-saudi);
            display: flex;
            align-items: baseline;
            gap: .3rem;
        }
        .plan-card .price::before { content: "SAR"; font-size: .9rem; opacity: .8; }
        .add-to-cart {
            width: 100%;
            background: var(--primary-saudi);
            color: #fff;
            border: none;
            padding: .9rem;
            font-size: 1rem;
            margin-top: 1.5rem;
            border-radius: var(--border-radius);
            font-weight: 600;
            transition: background var(--transition);
        }
        .add-to-cart:hover { background: #005a2b; }
        /* ===== حاسبة السعرات – دقة وتوجيه ===== */
        .calc-form {
            display: grid;
            gap: 1rem;
            max-width: 580px;
            margin: 0 auto 2rem;
        }
        .calc-form label {
            font-weight: 600;
            display: flex;
            flex-direction: column;
            gap: .3rem;
        }
        .calc-form input,
        .calc-form select {
            padding: .95rem;
            border: 1px solid #e9ecef;
            border-radius: var(--border-radius);
            font-size: 1rem;
            transition: border-color var(--transition), box-shadow var(--transition);
        }
        .calc-form input:focus,
        .calc-form select:focus {
            outline: none;
            border-color: var(--primary-saudi);
            box-shadow: 0 0 0 3px rgba(0,108,53,.2);
        }
        #calcBtn {
            align-self: start;
            background: var(--secondary-saudi);
            color: #212529;
        }
        #calcBtn:hover { background: #e0a800; }
        #result {
            font-weight: 600;
            font-size: 1.3rem;
            text-align: center;
            color: var(--primary-saudi);
            margin-top: 1rem;
            min-height: 2.2rem;
        }
        /* ===== سلة التسوق – تنظيم واحترافية ===== */
        #cartItems {
            max-height: 440px;
            overflow-y: auto;
            margin-bottom: 2rem;
            padding-right: .5rem;
        }
        .cart-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: var(--card-bg);
            border-radius: var(--border-radius);
            padding: 1.1rem;
            margin-bottom: 1rem;
            box-shadow: 0 2px 8px rgba(0,0,0,.04);
            border: 1px solid rgba(0,0,0,0.03);
        }
        .cart-item-info {
            flex: 1;
            min-width: 0;
        }
        .cart-item-name { font-weight: 600; margin-bottom: .4rem; }
        .cart-item-qty { font-size: .95rem; color: var(--text-muted); }
        .cart-item-price { font-weight: 600; min-width: 100px; text-align: center; }
        .cart-item button {
            background: #dc3545;
            color: #fff;
            border: none;
            padding: .55rem 1rem;
            border-radius: var(--border-radius);
            font-size: .95rem;
            transition: background var(--transition);
        }
        .cart-item button:hover { background: #bb2d3b; }
        #cartTotal {
            font-size: 1.5rem;
            font-weight: 700;
            text-align: right;
            margin-top: 1.8rem;
            color: var(--primary-saudi);
        }
        #checkoutBtn {
            width: 100%;
            max-width: 360px;
            margin: 2.2rem auto 0;
            display: block;
            background: var(--primary-saudi);
            color: #fff;
            border: none;
            padding: 1.2rem;
            font-size: 1.25rem;
            font-weight: 600;
            border-radius: var(--border-radius);
            transition: var(--transition);
            box-shadow: 0 4px 12px rgba(0,108,53,.2);
        }
        #checkoutBtn:hover { background: #005a2b; transform: translateY(-2px); }
        /* ===== نصائح صحية يومية – لمسة خاصة ===== */
        #health-tip {
            background: #fff8f0;
            border-left: 4px solid var(--secondary-saudi);
            padding: 1.2rem;
            margin: 2rem 0;
            border-radius: 0 var(--border-radius) var(--border-radius) 0;
            font-size: 1.05rem;
            color: #856404;
        }
        /* ===== قسم اتصل بنا ===== */
        #contact {
            background: #f8f9fa;
            border-radius: var(--border-radius);
            padding: 2.5rem;
            text-align: center;
        }
        #contact p { margin: .9rem 0; font-size: 1.15rem; }
        #phone-display {
            font-weight: 700;
            color: var(--primary-saudi);
            font-size: 1.4rem;
            word-break: break-all;
        }
        /* ===== تذييل مع معلومات قانونية ===== */
        footer {
            text-align: center;
            padding: 2.5rem 1rem;
            background: var(--primary-saudi);
            color: #fff;
            font-size: .9rem;
        }
        footer small { display: block; margin-top: .8rem; opacity: .85; }
        /* ===== استجابة ممتازة للشاشات ===== */
        @media (max-width: 768px) {
            header h1 { font-size: 2rem; }
            #hero { padding: 8rem 1rem 6rem; }
            #hero h2 { font-size: 2.4rem; }
            section { padding: 3rem .8rem; }
            h2 { font-size: 1.7rem; }
        }
        @media (max-width: 480px) {
            nav { flex-direction: column; gap: .5rem; }
            nav a { width: 100%; text-align: center; padding: .8rem; }
        }
    </style>
</head>
<body>
    <!-- ===== ترويسة مع علامة تجارية ===== -->
    <header>
        <h1>نابض</h1>
        <p>خطط غذائية مخصصة لتحقيق أهدافك الصحية – تنشيف أو تضخيم – مع دعم كامل لحساب السعرات والدفع الآمن</p>
        <nav>
            <a href="#home">الرئيسية</a>
            <a href="#plans">الخطط</a>
            <a href="#calculator">حاسبة السعرات</a>
            <a href="#cart">سلة التسوق</a>
            <a href="#contact">اتصل بنا</a>
            <a href="#health-tip">نصيحة اليوم</a>
        </nav>
    </header>

    <!-- ===== قسم البطل ===== -->
    <section id="hero">
        <h2>صحتك، أولويتنا</h2>
        <p>احصل على خطة وجبات متوازنة مصممة خصيصاً لجسمك، مع حساب دقيق للسعرات الحرارية وخيارات دفع آمنة عبر Stripe.</p>
        <a href="#plans" class="btn">ابدأ رحلتك الصحية الآن</a>
    </section>

    <!-- ===== الصفحة الرئيسية ===== -->
    <section id="home">
        <h2>مرحبًا بك في نابض</h2>
        <p>اختر هدفك: تنشيف (خسارة وزن) أو تضخيم (زيادة عضلات) واحصل على خطة وجبات مخصصة مع إمكانية إضافة المكونات مباشرةً إلى سلة التسوق.</p>
        <button id="startBtn">ابدأ الآن</button>
    </section>

    <!-- ===== خطط الوجبات مع صور طعام حقيقية ===== -->
    <section id="plans">
        <h2>خطط وجبات مُعدّة بعناية</h2>
        <div class="plan-tabs">
            <button class="tab active" data-goal="cut">التنشيف</button>
            <button class="tab" data-goal="bulk">التضخيم</button>
        </div>
        <div id="planContainer" class="plan-list"></div>
    </section>

    <!-- ===== حاسبة السعرات الحرارية ===== -->
    <section id="calculator">
        <h2>حاسبة السعرات الحرارية اليومية</h2>
        <p class="text-muted" style="max-width:500px;margin:0 auto 1.5rem;">احسب احتياجك اليومي من السعرات بناءً على وزنك، طولك، عمرك، ومستوى نشاطك باستخدام معادلة Mifflin-St Jeor المعتمدة عالمياً.</p>
        <div class="calc-form">
            <label>الوزن (كجم): <input type="number" id="weight" min="20" max="250" placeholder="مثلاً: 70"></label>
            <label>الطول (سم): <input type="number" id="height" min="100" max="250" placeholder="مثلاً: 175"></label>
            <label>العمر: <input type="number" id="age" min="10" max="120" placeholder="مثلاً: 30"></label>
            <label>الجنس:
                <select id="gender">
                    <option value="male">ذكر</option>
                    <option value="female">أنثى</option>
                </select>
            </label>
            <label>مستوى النشاط:
                <select id="activity">
                    <option value="1.2">قليل جدًا (عمل مكتبي، wenig حركة)</option>
                    <option value="1.375">خفيف (تمارين خفيفة 1-3 أيام/أسبوع)</option>
                    <option value="1.55">متوسط (تمارين معتدلة 3-5 أيام/أسبوع)</option>
                    <option value="1.725">عالي (تمارين شديدة 6-7 أيام/أسبوع)</option>
                    <option value="1.9">شديد جدًا (تمارين شديدة + عمل جسدي)</option>
                </select>
            </label>
            <button id="calcBtn">احسب السعرات</button>
        </div>
        <div id="result"></div>
        <p class="text-muted" style="font-size:.9rem;margin-top:1rem;">ملاحظة: هذه القيمة تقديرية. يُفضَّل استشارة أخصائي تغذية لتحديد الاحتياج الدقيق حسب حالتك الصحية.</p>
    </section>

    <!-- ===== سلة التسوق ===== -->
    <section id="cart">
        <h2>سلة التسوق</h2>
        <div id="cartItems"></div>
        <div id="cartTotal">الإجمالي: 0.00 SAR</div>
        <button id="checkoutBtn">دفع عبر Stripe (وضع الاختبا
