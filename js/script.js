document.addEventListener('DOMContentLoaded', function() {
    // عناصر القائمة
    const menuItems = [
        {
            id: 1,
            category: 'starters',
            title: 'سلطة يونانية',
            price: '25',
            description: 'سلطة طازجة مع خيار، طماطم، بصل أحمر، زيتون وفيتا تشيز',
            image: 'images/menu-1.jpg'
        },
        {
            id: 2,
            category: 'starters',
            title: 'مقبلات مشوية',
            price: '35',
            description: 'تشكيلة من المقبلات المشوية مع صلصة الثوم والليمون',
            image: 'images/menu-2.jpg'
        },
        {
            id: 3,
            category: 'main',
            title: 'ستيك لحم',
            price: '85',
            description: 'ستيك لحم بقري مشوي مع صلصة الفطر والبطاطس المحمرة',
            image: 'images/menu-3.jpg'
        },
        {
            id: 4,
            category: 'main',
            title: 'سمك مشوي',
            price: '75',
            description: 'سمك مشوي طازج مع صلصة الليمون والأعشاب والأرز البسمتي',
            image: 'images/menu-4.jpg'
        },
        {
            id: 5,
            category: 'desserts',
            title: 'تشيز كيك',
            price: '30',
            description: 'تشيز كيك كلاسيكي مع طبقة من التوت الطازج',
            image: 'images/menu-5.jpg'
        },
        {
            id: 6,
            category: 'desserts',
            title: 'مهلبية',
            price: '25',
            description: 'مهلبية تقليدية مع مكسرات وقرفة',
            image: 'images/menu-6.jpg'
        },
        {
            id: 7,
            category: 'drinks',
            title: 'عصير طبيعي',
            price: '20',
            description: 'تشكيلة من العصائر الطازجة حسب الموسم',
            image: 'images/menu-7.jpg'
        },
        {
            id: 8,
            category: 'drinks',
            title: 'قهوة عربية',
            price: '15',
            description: 'قهوة عربية أصيلة مع هيل',
            image: 'images/menu-8.jpg'
        }
    ];

    // عرض عناصر القائمة
    const menuContainer = document.querySelector('.menu-items');
    const tabButtons = document.querySelectorAll('.tab-btn');

    function displayMenuItems(category = 'all') {
        menuContainer.innerHTML = '';
        
        const filteredItems = category === 'all' 
            ? menuItems 
            : menuItems.filter(item => item.category === category);
        
        filteredItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item', 'show');
            menuItem.innerHTML = `
                <div class="image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="content">
                    <div class="title">
                        <h3>${item.title}</h3>
                        <span>${item.price} ر.س</span>
                    </div>
                    <p>${item.description}</p>
                </div>
            `;
            menuContainer.appendChild(menuItem);
        });
    }

    // تصفية القائمة حسب التبويب
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.getAttribute('data-category');
            displayMenuItems(category);
        });
    });

    // عرض جميع العناصر عند التحميل
    displayMenuItems();

    // شريط التنقل الثابت عند التمرير
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        const backToTop = document.querySelector('.back-to-top');
        
        header.classList.toggle('active', window.scrollY > 80);
        backToTop.classList.toggle('active', window.scrollY > 600);
    });

    // زر القائمة في الشاشات الصغيرة
    const menuBtn = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.navbar');
    
    menuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuBtn.classList.toggle('fa-times');
    });

    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuBtn.classList.remove('fa-times');
        });
    });

    // نموذج الحجز
    const reserveBtn = document.querySelector('.btn-reserve');
    const reserveModal = document.querySelector('.reservation-modal');
    const closeModal = document.querySelector('.close-modal');
    
    reserveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        reserveModal.classList.add('active');
    });
    
    closeModal.addEventListener('click', () => {
        reserveModal.classList.remove('active');
    });
    
    // إغلاق النموذج عند النقر خارج المحتوى
    window.addEventListener('click', (e) => {
        if (e.target === reserveModal) {
            reserveModal.classList.remove('active');
        }
        if (e.target === galleryModal) {
            galleryModal.classList.remove('active');
        }
    });

    // معرض الصور المكبرة
    const galleryBoxes = document.querySelectorAll('.gallery-box');
    const galleryModal = document.querySelector('.gallery-modal');
    const closeGallery = document.querySelector('.close-gallery');
    const galleryImg = galleryModal.querySelector('img');
    
    galleryBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const imgSrc = box.querySelector('img').src;
            galleryImg.src = imgSrc;
            galleryModal.classList.add('active');
        });
    });
    
    closeGallery.addEventListener('click', () => {
        galleryModal.classList.remove('active');
    });

    // إرسال نموذج الاتصال
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.');
        this.reset();
    });

    // إرسال نموذج الحجز
    const reservationForm = document.querySelector('.reservation-modal form');
    
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('تم إرسال طلب الحجز بنجاح! سنتواصل معك للتأكيد.');
        this.reset();
        reserveModal.classList.remove('active');
    });

    // إرسال النشرة البريدية
    const newsletterForm = document.querySelector('.newsletter form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input');
        alert(`شكراً للاشتراك في نشرتنا البريدية! تم تسجيل البريد: ${emailInput.value}`);
        emailInput.value = '';
    });

});

// تعديل السلايدر ليعمل بشكل عمودي على الموبايل
function adjustReviewsSlider() {
    const reviewsSlider = document.querySelector('.reviews-slider');
    if (window.innerWidth < 768) {
        reviewsSlider.style.flexDirection = 'column';
        reviewsSlider.style.overflowX = 'visible';
    } else {
        reviewsSlider.style.flexDirection = 'row';
        reviewsSlider.style.overflowX = 'auto';
    }
}

// استدعاء الدالة عند التحميل وعند تغيير حجم النافذة
window.addEventListener('load', adjustReviewsSlider);
window.addEventListener('resize', adjustReviewsSlider);