// Init Icons
feather.replace();

// Init AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 50,
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// -----------------------------------
//  THEME & LANGUAGE LOGIC
// -----------------------------------
const translations = {
    en: {
        nav_caps: "Services", nav_work: "Work", nav_team: "About", nav_contact: "Contact",
        hero_h1: "Engineering Digital Solutions for Tomorrow's Market.",
        hero_desc: "We architect and build high-performance mobile apps, dynamic web frontends, and intelligent backend systems to elevate your business in the digital era.",
        btn_explore: "Start A Project",
        services_h2: "Tech Capabilities",
        services_main_h: "Full-Stack Engineering Powerhouse",
        srv_1_t: "Backend & AI", srv_1_d: "Robust backend systems using microservices, REST APIs, and AI data processing pipelines to power your applications.",
        srv_2_t: "Mobile Applications", srv_2_d: "Native-performance iOS and Android solutions built with Flutter, designed for scalability and exceptional user experience.",
        srv_3_t: "Web Frontend", srv_3_d: "Responsive, modern web applications using React and Next.js that are fast, secure, and SEO-friendly.",
        work_h2: "Featured Deployments",
        work_main_h: "Solving Complex Problems",
        proj_1: "Tahseel Education System", cat_edtech: "EDTECH w/ AI",
        proj_pay: "Smart Payment Gateway", cat_fintech: "FINTECH",
        team_h2: "Executive Management",
        team_main_h: "The Leadership Driving AGTS",
        role_ceo: "CHIEF EXECUTIVE OFFICER", name_ceo: "Mohammed Alferjani", bio_ceo: "Driving the technical vision and expansion of digital infrastructure.",
        role_gm: "GENERAL MANAGER", name_gm: "Ibrahim Alferjani", bio_gm: "Operational strategy and enterprise client management.",
        contact_h2: "Have a project in mind?",
        contact_sub: "Let's build something great together. Contact us to discuss your project requirements and get a free consultation.",
        footer_about: "Premier software engineering firm in Benghazi, Libya, specializing in high-performance mobile and web applications.",
        footer_links_h: "Quick Links",
        footer_contact_h: "Contact Us",
        address: "Venice Street, Benghazi, Libya",
        footer_copy: "© 2025 Appraise Global Technology Solutions. All Rights Reserved.",
    },
    ar: {
        nav_caps: "الخدمات", nav_work: "أعمالنا", nav_team: "من نحن", nav_contact: "اتصل بنا",
        hero_h1: "نهندس حلولاً رقمية لسوق المستقبل.",
        hero_desc: "نحن نصمم ونبني تطبيقات جوال عالية الأداء، واجهات ويب ديناميكية، وأنظمة خلفية ذكية لرفع مستوى أعمالك في العصر الرقمي.",
        btn_explore: "ابدأ مشروعك",
        services_h2: "القدرات التقنية",
        services_main_h: "قوة هندسية متكاملة",
        srv_1_t: "الأنظمة الخلفية والذكاء الاصطناعي", srv_1_d: "أنظمة خلفية قوية باستخدام الخدمات المصغرة وواجهات برمجة التطبيقات وخطوط أنابيب معالجة بيانات الذكاء الاصطناعي لتشغيل تطبيقاتك.",
        srv_2_t: "تطبيقات الهاتف", srv_2_d: "حلول iOS و Android بأداء أصلي مبنية باستخدام Flutter ، مصممة للتوسع وتجربة مستخدم استثنائية.",
        srv_3_t: "واجهات الويب الأمامية", srv_3_d: "تطبيقات ويب حديثة وسريعة الاستجابة باستخدام React و Next.js سريعة وآمنة وصديقة لمحركات البحث.",
        work_h2: "المشاريع المميزة",
        work_main_h: "نحل المشاكل المعقدة",
        proj_1: "منصة تحصيل التعليمية", cat_edtech: "تكنولوجيا التعليم بالذكاء الاصطناعي",
        proj_pay: "بوابة الدفع الذكية", cat_fintech: "التكنولوجيا المالية",
        team_h2: "الإدارة التنفيذية",
        team_main_h: "القيادة التي تقود AGTS",
        role_ceo: "الرئيس التنفيذي", name_ceo: "محمد الفرجاني", bio_ceo: "قيادة الرؤية التقنية وتوسيع البنية التحتية الرقمية.",
        role_gm: "المدير العام", name_gm: "إبراهيم الفرجاني", bio_gm: "استراتيجية التشغيل وإدارة عملاء المؤسسات.",
        contact_h2: "هل لديك مشروع في ذهنك؟",
        contact_sub: "دعنا نبني شيئًا رائعًا معًا. اتصل بنا لمناقشة متطلبات مشروعك والحصول على استشارة مجانية.",
        footer_about: "شركة رائدة في هندسة البرمجيات في بنغازي، ليبيا، متخصصة في تطبيقات الجوال والويب عالية الأداء.",
        footer_links_h: "روابط سريعة",
        footer_contact_h: "اتصل بنا",
        address: "شارع فينيسيا، بنغازي، ليبيا",
        footer_copy: "© 2025 Appraise Global Technology Solutions. جميع الحقوق محفوظة.",
    }
};

let currentLang = 'en';

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    feather.replace(); // Re-render icons after theme change
}

function toggleLanguage() {
    const btnText = document.getElementById("lang-btn-text");
    currentLang = currentLang === 'en' ? 'ar' : 'en';

    if(currentLang === 'ar') {
        document.body.classList.add('lang-ar');
        btnText.textContent = "English";
    } else {
        document.body.classList.remove('lang-ar');
        btnText.textContent = "العربية";
    }

    const langData = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(langData[key]) el.textContent = langData[key];
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Apply saved theme on load
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
    }
    feather.replace();
});

// -----------------------------------
//  CONTACT FORM LOGIC (AJAX)
// -----------------------------------
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

if (form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showStatus('Message sent successfully!', 'success');
                form.reset();
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    const errorMessage = data["errors"].map(error => error["message"]).join(", ");
                    showStatus(`Error: ${errorMessage}`, 'error');
                } else {
                    showStatus('An unknown error occurred.', 'error');
                }
            }
        } catch (error) {
            console.error('Fetch error:', error);
            showStatus('An error occurred. Please try again later.', 'error');
        } finally {
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }
    });
}

function showStatus(message, type) {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.className = `form-status ${type}`; // Use a base class
    statusEl.classList.add('visible');

    setTimeout(() => {
        statusEl.classList.remove('visible');
    }, 4000);
}
