<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>متجر مكملات القطيف الاحترافي</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; font-family: 'Cairo', sans-serif; }
        body { margin: 0; background-color: #121212; color: #fff; text-align: center; }
        
        header { background: #ce1212; padding: 50px 20px; border-bottom: 5px solid #fff; }
        .hero-h1 { margin: 0; font-size: 2.5rem; }
        
        .container { padding: 20px; max-width: 1200px; margin: auto; }
        
        .section-title { color: #ce1212; margin-top: 40px; font-size: 1.8rem; border-bottom: 2px solid #333; display: inline-block; padding-bottom: 10px; }
        
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 20px; }
        
        .card { background: #1e1e1e; padding: 20px; border-radius: 15px; border: 1px solid #333; transition: 0.3s; }
        .card:hover { transform: scale(1.05); border-color: #ce1212; }
        .card h3 { color: #ce1212; margin-bottom: 10px; }
        .card p { font-size: 0.9rem; color: #ccc; }
        .price { font-weight: bold; color: #fff; font-size: 1.2rem; display: block; margin-top: 10px; }

        .contact-btn { 
            display: inline-block; background: #25d366; color: white; 
            padding: 15px 30px; border-radius: 50px; text-decoration: none; 
            font-weight: bold; margin-top: 30px; font-size: 1.2rem;
            box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
        }

        footer { background: #000; padding: 30px; margin-top: 50px; font-size: 0.8rem; color: #777; }
        .qatif-tag { color: #ce1212; font-weight: bold; }
    </style>
</head>
<body>

    <header>
        <h1 class="hero-h1">نخبة المكملات الغذائية بالقطيف</h1>
        <p>جودة عالمية.. توصيل سريع لكل أحياء القطيف</p>
    </header>

    <div class="container">
        
        <h2 class="section-title">قسم البروتينات (Protein)</h2>
        <div class="grid">
            <div class="card">
                <h3>Whey Protein Isolate</h3>
                <p>صافي، سريع الامتصاص، لبناء عضلي بدون دهون.</p>
                <span class="price">280 ريال</span>
            </div>
            <div class="card">
                <h3>Mass Gainer</h3>
                <p>مخصص للضخامة وزيادة الوزن للأجسام النحيفة.</p>
                <span class="price">240 ريال</span>
            </div>
            <div class="card">
                <h3>Casein Protein</h3>
                <p>بروتين بطيء الامتصاص للاستخدام قبل النوم.</p>
                <span class="price">260 ريال</span>
            </div>
        </div>

        <h2 class="section-title">الأحماض الأمينية والطاقة</h2>
        <div class="grid">
            <div class="card">
                <h3>BCAA 2:1:1</h3>
                <p>للاستشفاء العضلي ومنع الهدم أثناء التمرين.</p>
                <span class="price">150 ريال</span>
            </div>
            <div class="card">
                <h3>Creatine Monohydrate</h3>
                <p>الأفضل لزيادة القوة البدنية وتضخيم الخلية.</p>
                <span class="price">120 ريال</span>
            </div>
            <div class="card">
                <h3>EAA Essential</h3>
                <p>مجموعة الأحماض الكاملة لترميم الألياف العضلية.</p>
                <span class="price">180 ريال</span>
            </div>
        </div>

        <a href="https://wa.me/9665XXXXXXXX" class="contact-btn">طلب عبر واتساب (القطيف) 💬</a>

    </div>

    <footer>
        <p>جميع المكملات أصلية ومضمونة 100%</p>
        <p>خدمة التوصيل متوفرة في: <span class="qatif-tag">القطيف، سيهات، صفوى، جزيرة تاروت</span></p>
        <p>حقوق النشر © 2026 - مكملات القطيف</p>
    </footer>

</body>
</html>
