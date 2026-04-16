<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>متجر النخبة للمكملات الغذائية | القطيف</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Cairo', sans-serif;
            background-color: #f8f9fa;
        }
        .navbar {
            background-color: #1a1a1a;
        }
        .hero-section {
            background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80');
            background-size: cover;
            color: white;
            padding: 100px 0;
            text-align: center;
        }
        .card-product {
            transition: transform 0.3s;
            border: none;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .card-product:hover {
            transform: translateY(-10px);
        }
        .btn-custom {
            background-color: #e63946;
            color: white;
            border-radius: 25px;
        }
        .whatsapp-float {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #25d366;
            color: white;
            padding: 15px 25px;
            border-radius: 50px;
            text-decoration: none;
            z-index: 1000;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }
    </style>
</head>
<body>

    <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">نخبة المكملات - القطيف</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#home">الرئيسية</a></li>
                    <li class="nav-item"><a class="nav-link" href="#protein">بروتينات</a></li>
                    <li class="nav-item"><a class="nav-link" href="#amino">أحماض أمينية</a></li>
                    <li class="nav-item"><a class="nav-link" href="#vitamins">فيتامينات</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <header class="hero-section" id="home">
        <div class="container">
            <h1 class="display-3 fw-bold">أقوى المكملات في القطيف</h1>
            <p class="lead">نوفر لك أجود أنواع البروتينات والأحماض الأمينية لبناء جسم مثالي.</p>
            <a href="https://wa.me/رقم_جوالك_هنا" class="btn btn-custom btn-lg mt-3">اطلب الآن عبر الواتساب</a>
        </div>
    </header>

    <div class="container py-5">
        
        <h2 class="text-center mb-5" id="protein">أقسام البروتينات</h2>
        <div class="row g-4">
            <div class="col-md-4">
                <div class="card card-product h-100 p-3 text-center">
                    <img src="https://images.unsplash.com/photo-1593095191850-2a7330053bb4?auto=format&fit=crop&q=80&w=200" class="card-img-top mx-auto" style="width: 150px;" alt="Whey Protein">
                    <div class="card-body">
                        <h5 class="card-title">واي بروتين ايزوليت</h5>
                        <p class="card-text">امتصاص سريع، مثالي لبعد التمرين مباشرة.</p>
                        <p class="fw-bold text-danger">السعر: 250 ريال</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card card-product h-100 p-3 text-center">
                    <img src="https://images.unsplash.com/photo-1579722820308-d74e5719d23e?auto=format&fit=crop&q=80&w=200" class="card-img-top mx-auto" style="width: 150px;" alt="Mass Gainer">
                    <div class="card-body">
                        <h5 class="card-title">ماس جينر (ضخامة)</h5>
                        <p class="card-text">سعرات حرارية عالية لزيادة الوزن والكتلة العضلية.</p>
                        <p class="fw-bold text-danger">السعر: 210 ريال</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card card-product h-100 p-3 text-center">
                    <img src="https://via.placeholder.com/150?text=Casein" class="card-img-top mx-auto" style="width: 150px;" alt="Casein">
                    <div class="card-body">
                        <h5 class="card-title">كازين بروتين</h5>
                        <p class="card-text">امتصاص بطيء، مثالي قبل النوم لتغذية العضلات.</p>
                        <p class="fw-bold text-danger">السعر: 230 ريال</p>
                    </div>
                </div>
            </div>
        </div>

        <hr class="my-5">

        <h2 class="text-center mb-5" id="amino">الأحماض الأمينية وBCAA</h2>
        <div class="row g-4">
            <div class="col-md-6 col-lg-3">
                <div class="card card-product text-center p-3">
                    <h6>BCAA 2:1:1</h6>
                    <p class="small text-muted">للاستشفاء العضلي</p>
                    <button class="btn btn-sm btn-outline-dark">تفاصيل</button>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="card card-product text-center p-3">
                    <h6>Glutamine</h6>
                    <p class="small text-muted">دعم المناعة والعضلات</p>
                    <button class="btn btn-sm btn-outline-dark">تفاصيل</button>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="card card-product text-center p-3">
                    <h6>Creatine Monohydrate</h6>
                    <p class="small text-muted">لزيادة القوة والتحمل</p>
                    <button class="btn btn-sm btn-outline-dark">تفاصيل</button>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="card card-product text-center p-3">
                    <h6>Pre-Workout</h6>
                    <p class="small text-muted">طاقة قصوى للتمرين</p>
                    <button class="btn btn-sm btn-outline-dark">تفاصيل</button>
                </div>
            </div>
        </div>
    </div>

    <footer class="bg-dark text-white py-4 mt-5 text-center">
        <div class="container">
            <h4>تواصل معنا - فرع القطيف</h4>
            <p>الموقع: حي الشاطئ / حي الناصرة، القطيف، المنطقة الشرقية</p>
            <p>جوال: <span dir="ltr">05XXXXXXXX</span></p>
            <div class="mt-3">
                <p>&copy; 2026 جميع الحقوق محفوظة لمتجر مكملات القطيف</p>
            </div>
        </div>
    </footer>

    <a href="https://wa.me/9665XXXXXXXX" class="whatsapp-float" target="_blank">
        تحدث معنا واتساب 💬
    </a>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
