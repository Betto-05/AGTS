// Mobile Navigation (Hamburger Menu)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms
    once: true, // whether animation should happen only once - while scrolling down
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const toast = document.getElementById('toast');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    const formData = new FormData(contactForm);

    fetch("https://formsubmit.co/ajax/info@agts-ly.com", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        contactForm.reset();
        toast.classList.add('active');
        setTimeout(() => {
            toast.classList.remove('active');
        }, 5000);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    })
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
    });
});

// Multi-language Support
const translations = {
    en: {
        nav_services: "Services",
        nav_work: "Work",
        nav_about: "About",
        nav_contact: "Contact Us",
        hero_title: "Engineering Tomorrow's Digital Solutions",
        hero_subtitle: "We architect and build high-performance mobile apps, dynamic web frontends, and intelligent backend systems to elevate your business in the digital era.",
        hero_cta: "View Our Work",
        services_title: "Our Expertise",
        services_subtitle: "Delivering excellence across the full product lifecycle.",
        service_mobile_title: "Mobile Development",
        service_mobile_desc: "Crafting beautiful and performant native applications for iOS and Android that your users will love.",
        service_web_title: "Web Development",
        service_web_desc: "Building responsive, modern, and scalable web applications tailored to your business needs.",
        service_backend_title: "Backend & APIs",
        service_backend_desc: "Designing and implementing robust and secure backend systems and APIs to power your applications.",
        work_title: "Our Work",
        work_subtitle: "A selection of projects we are proud of.",
        work_proj1_title: "Tahseel Platform",
        work_proj1_cat: "EdTech",
        work_proj2_title: "Smart Payment",
        work_proj2_cat: "FinTech",
        about_title: "About AGTS",
        about_desc: "Appraise Global Technology Solutions (AGTS) is a premier software engineering firm based in Benghazi, Libya. We specialize in high-performance mobile and web applications, offering a comprehensive suite of services from initial concept to deployment and beyond. Our mission is to empower businesses with the technology they need to thrive in a digital-first world.",
        team_ceo_name: "Mohammed Alferjani",
        team_ceo_role: "CEO",
        team_gm_name: "Ibrahim Alferjani",
        team_gm_role: "General Manager",
        contact_title: "Let's build together",
        contact_subtitle: "Have a project in mind? We'd love to hear from you.",
        form_name_placeholder: "Full Name",
        form_email_placeholder: "Email Address",
        form_message_placeholder: "Your Message",
        form_submit: "Submit Inquiry",
        toast_success: "Your message has been sent successfully!",
    },
    ar: {
        nav_services: "خدماتنا",
        nav_work: "أعمالنا",
        nav_about: "من نحن",
        nav_contact: "اتصل بنا",
        hero_title: "هندسة حلول الغد الرقمية",
        hero_subtitle: "نقوم بتصميم وبناء تطبيقات جوال عالية الأداء وواجهات ويب ديناميكية وأنظمة خلفية ذكية للارتقاء بأعمالك في العصر الرقمي.",
        hero_cta: "شاهد أعمالنا",
        services_title: "خبراتنا",
        services_subtitle: "تقديم التميز عبر دورة حياة المنتج الكاملة.",
        service_mobile_title: "تطوير تطبيقات الجوال",
        service_mobile_desc: "صياغة تطبيقات أصلية جميلة وعالية الأداء لنظامي التشغيل iOS و Android سيحبها المستخدمون.",
        service_web_title: "تطوير الويب",
        service_web_desc: "بناء تطبيقات ويب سريعة الاستجابة وحديثة وقابلة للتطوير ومصممة خصيصًا لاحتياجات عملك.",
        service_backend_title: "الأنظمة الخلفية وواجهات برمجة التطبيقات",
        service_backend_desc: "تصميم وتنفيذ أنظمة خلفية وواجهات برمجة تطبيقات قوية وآمنة لتشغيل تطبيقاتك.",
        work_title: "أعمالنا",
        work_subtitle: "مجموعة مختارة من المشاريع التي نفخر بها.",
        work_proj1_title: "منصة تحصيل",
        work_proj1_cat: "تكنولوجيا التعليم",
        work_proj2_title: "الدفع الذكي",
        work_proj2_cat: "التكنولوجيا المالية",
        about_title: "عن AGTS",
        about_desc: "حلول تقييم التكنولوجيا العالمية (AGTS) هي شركة رائدة في هندسة البرمجيات مقرها في بنغازي، ليبيا. نحن متخصصون في تطبيقات الجوال والويب عالية الأداء، ونقدم مجموعة شاملة من الخدمات من المفهوم الأولي إلى النشر وما بعده. مهمتنا هي تمكين الشركات بالتكنولوجيا التي تحتاجها للنجاح في عالم رقمي أولاً.",
        team_ceo_name: "محمد الفرجاني",
        team_ceo_role: "الرئيس التنفيذي",
        team_gm_name: "إبراهيم الفرجاني",
        team_gm_role: "المدير العام",
        contact_title: "لنعمل معًا",
        contact_subtitle: "هل لديك مشروع في ذهنك؟ نود أن نسمع منك.",
        form_name_placeholder: "الاسم الكامل",
        form_email_placeholder: "البريد الإلكتروني",
        form_message_placeholder: "رسالتك",
        form_submit: "إرسال استفسار",
        toast_success: "تم إرسال رسالتك بنجاح!",
    }
};

const languageToggleButton = document.getElementById('language-toggle');
const languageToggleText = document.getElementById('language-toggle-text');
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const langData = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langData[key]) {
            el.textContent = langData[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (langData[key]) {
            el.placeholder = langData[key];
        }
    });

    if (lang === 'ar') {
        document.body.classList.add('rtl');
        languageToggleText.textContent = 'English';
    } else {
        document.body.classList.remove('rtl');
        languageToggleText.textContent = 'العربية';
    }
}

languageToggleButton.addEventListener('click', () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
});

// Set initial language
setLanguage(currentLang);

// Dark Mode Support
const darkModeToggleButton = document.getElementById('dark-mode-toggle');
let currentTheme = localStorage.getItem('theme') || 'light';

function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove('dark-mode');
        darkModeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

darkModeToggleButton.addEventListener('click', () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Set initial theme
setTheme(currentTheme);
