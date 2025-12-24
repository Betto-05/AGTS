feather.replace();

const translations = {
    en: {
        nav_studio: "About", nav_caps: "Services", nav_work: "Work", nav_team: "Team", nav_contact: "Contact",
        nav_company: "Company", nav_solutions: "Solutions",
        ft_web: "Web Development", ft_mob: "Mobile Apps", ft_ai: "Enterprise Systems", ft_cons: "Consultation",
        hero_subtitle: "Website & Mobile Experts", hero_h1: "We Build",
        hero_desc: "AGTS builds powerful websites and mobile apps that make your business stand out. We handle all the technical work so you can focus on what you do best.",
        btn_explore: "Start A Project",
        about_badge: "Our Process", about_title: "From Idea to Launch.",
        about_p1: "We turn your vision into a successful digital product. Whether you need a modern website, a custom mobile app, or an internal system, AGTS manages the entire journey.",
        about_p2: "You get one expert team for your entire project. No need to manage different freelancers. We provide a streamlined, professional experience in Libya.",
        step_1_t: "Planning & Design", step_1_d: "We start by understanding your goals. We create a clear plan showing exactly how your website or app will look and function before we start building.",
        step_2_t: "Development & Review", step_2_d: "Our expert team brings your project to life. We provide regular updates so you can see the progress and test the solution on your devices.",
        step_3_t: "Launch & Support", step_3_d: "We launch your website on fast servers and publish your app to the Apple and Google stores. Our support continues, ensuring everything runs smoothly.",
        services_h2: "Our Services", services_sub: "Professional software, web, and mobile solutions.",
        srv_1_t: "Business Systems & AI", srv_1_d: "Powerful back-end software to help your company manage data, improve efficiency, and utilize AI.",
        srv_2_t: "Mobile Applications", srv_2_d: "High-performance native apps for both iOS (iPhone) and Android devices, designed for a great user experience.",
        srv_3_t: "Websites & Web Apps", srv_3_d: "Responsive, modern websites and complex web applications that perform perfectly on all devices.",
        work_h2: "Recent Work", proj_1: "Tahseel Education System", cat_edtech: "EDUCATION PLATFORM", badge_private: "PRIVATE",
        proj_pay: "Secure Payment Gateway", cat_fintech: "FINANCE", proj_fleet: "Fleet Management App", cat_logistics: "TRANSPORT",
        proj_data: "Company Analytics Dashboard", cat_data: "DATA",
        team_h2: "Management Team",
        role_ceo: "CEO & FOUNDER", name_ceo: "Mohammed Alferjani", bio_ceo: "Leading the vision for digital infrastructure in North Africa.",
        role_gm: "GENERAL MANAGER", name_gm: "Ibrahim Alferjani", bio_gm: "Managing operations and ensuring client satisfaction.",
        contact_h2: "Let's Build Together.", contact_sub: "Tell us about your project idea. Let's make it real.",
        contact_email: "Email", contact_loc: "Location", address: "Venice Street, Benghazi, Libya",
        form_name: "Full Name", form_email: "Email Address", form_msg: "Your Idea or Question", btn_submit: "Submit Message",
        toast_title: "Message Sent", toast_msg: "We have received your inquiry.",
        footer_desc: "Professional technology solutions. We build modern websites, apps, and digital systems for companies in Libya.",
        footer_reach: "Reach Us"
    },

    ar: {
        nav_studio: "عن الشركة", nav_caps: "خدماتنا", nav_work: "أعمالنا", nav_team: "الفريق", nav_contact: "اتصل بنا",
        nav_company: "الشركة", nav_solutions: "خدماتنا",
        ft_web: "تطوير المواقع", ft_mob: "تطبيقات الهاتف", ft_ai: "أنظمة الشركات", ft_cons: "الاستشارات",
        hero_subtitle: "خبراء المواقع والتطبيقات", hero_h1: "نحن نبرمج",
        hero_desc: "تبني AGTS مواقع إلكترونية وتطبيقات هاتف قوية تساعد مشروعك على التميز. نحن نتولى كل الجانب التقني لتركز أنت على نجاح عملك.",
        btn_explore: "ابدأ مشروعك",
        about_badge: "طريقة عملنا", about_title: "من الفكرة إلى الإطلاق.",
        about_p1: "نحول رؤيتك إلى منتج رقمي ناجح. سواء كنت تحتاج إلى موقع إلكتروني حديث، أو تطبيق هاتف مخصص، أو نظام داخلي، AGTS تدير الرحلة بأكملها.",
        about_p2: "تحصل على فريق خبير واحد لمشروعك بأكمله. لا حاجة لإدارة عدة أشخاص. نقدم تجربة احترافية ومتكاملة في ليبيا.",
        step_1_t: "التخطيط والتصميم", step_1_d: "نبدأ بفهم أهدافك. نضع خطة واضحة تُظهر بالضبط كيف سيبدو ويعمل موقعك أو تطبيقك قبل أن نبدأ في البرمجة.",
        step_2_t: "التطوير والمراجعة", step_2_d: "يقوم فريقنا الخبير ببناء مشروعك. نقدم تحديثات منتظمة حتى تتمكن من رؤية التقدم واختبار النظام على أجهزتك.",
        step_3_t: "الإطلاق والدعم الفني", step_3_d: "نُطلق موقعك على خوادم سريعة وننشر تطبيقك في متاجر أبل وجوجل. يستمر دعمنا لضمان عمل كل شيء بسلاسة.",
        services_h2: "خدماتنا", services_sub: "حلول برمجية احترافية للويب والهاتف.",
        srv_1_t: "أنظمة الشركات والذكاء الاصطناعي", srv_1_d: "برامج خلفية قوية لمساعدة شركتك على إدارة البيانات وتحسين الكفاءة والاستفادة من الذكاء الاصطناعي.",
        srv_2_t: "تطبيقات الهاتف", srv_2_d: "تطبيقات عالية الأداء لأجهزة iOS (آيفون) وأندرويد، مصممة لتجربة مستخدم رائعة.",
        srv_3_t: "المواقع وتطبيقات الويب", srv_3_d: "مواقع إلكترونية حديثة ومتجاوبة وتطبيقات ويب معقدة تعمل بشكل مثالي على جميع الأجهزة.",
        work_h2: "أحدث أعمالنا", proj_1: "منصة تحصيل التعليمية", cat_edtech: "منصة تعليمية", badge_private: "خاص",
        proj_pay: "بوابة دفع آمنة", cat_fintech: "التقنية المالية", proj_fleet: "تطبيق إدارة النقل", cat_logistics: "النقل",
        proj_data: "لوحة تحكم بيانات الشركة", cat_data: "البيانات",
        team_h2: "فريق الإدارة",
        role_ceo: "المدير التنفيذي", name_ceo: "محمد الفرجاني", bio_ceo: "قيادة الرؤية التقنية وتطوير البنية التحتية الرقمية.",
        role_gm: "المدير العام", name_gm: "إبراهيم الفرجاني", bio_gm: "إدارة العمليات وضمان رضا العملاء.",
        contact_h2: "لنبنِ معاً", contact_sub: "شاركنا فكرة مشروعك. لنجعلها حقيقة.",
        contact_email: "البريد الإلكتروني", contact_loc: "العنوان", address: "شارع فينيسيا، بنغازي، ليبيا",
        form_name: "الاسم الكامل", form_email: "البريد الإلكتروني", form_msg: "اكتب فكرتك أو سؤالك", btn_submit: "إرسال الرسالة",
        toast_title: "تم الإرسال", toast_msg: "لقد استلمنا طلبكم، سيتم الرد قريباً.",
        footer_desc: "حلول تقنية احترافية. نبني مواقع وتطبيقات وأنظمة رقمية حديثة للشركات في ليبيا.",
        footer_reach: "تواصل معنا"
    }
};

const phrasesEn = ["Websites", "Mobile Apps", "Digital Solutions"];
const phrasesAr = ["مواقع إلكترونية", "تطبيقات الهاتف", "حلول رقمية"];
let currentPhrases = phrasesEn;
let currentLang = 'en';

function applyLanguage(lang) {
    const btnText = document.getElementById("lang-btn-text");
    currentLang = lang;

    if(currentLang === 'ar') {
        document.body.classList.add('lang-ar');
        if (btnText) btnText.textContent = "English";
        currentPhrases = phrasesAr;
    } else {
        document.body.classList.remove('lang-ar');
        if (btnText) btnText.textContent = "العربية";
        currentPhrases = phrasesEn;
    }

    const langData = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(langData[key]) el.textContent = langData[key];
    });

    renderMarquee();

    // Handle button text state
    const submitBtn = document.getElementById('submitBtn');
    const formBtnText = document.getElementById('btnText');
    if(submitBtn && !submitBtn.disabled) {
        formBtnText.textContent = langData['btn_submit'];
    }

    resetTypewriter();
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', newLang);
    applyLanguage(newLang);
}

function renderMarquee() {
    const track = document.getElementById('marquee-track');
    if (!track) return;
    const itemsEn = ["Websites", "Mobile Apps", "Software", "AI Tools", "Cloud", "Benghazi"];
    const itemsAr = ["مواقع الويب", "تطبيقات الهاتف", "برمجيات", "أدوات الذكاء الاصطناعي", "خدمات سحابية", "بنغازي"];
    const list = currentLang === 'ar' ? itemsAr : itemsEn;

    let fullHTML = '';
    for(let i=0; i<4; i++) {
        list.forEach(txt => {
            fullHTML += `<div class="marquee-item">${txt} <span class="sep-dot">●</span></div>`;
        });
    }
    track.innerHTML = fullHTML;
}

const typeText = document.getElementById("typewriter-text");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeTimer;

function typeWriter() {
    if (!typeText) return;
    const currentPhrase = currentPhrases[phraseIndex];
    let typeSpeed = isDeleting ? 40 : 100;

    if (isDeleting) charIndex--; else charIndex++;
    typeText.textContent = currentPhrase.substring(0, charIndex);

    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % currentPhrases.length;
        typeSpeed = 500;
    }
    typeTimer = setTimeout(typeWriter, typeSpeed);
}

function resetTypewriter() {
    if (!typeText) return;
    clearTimeout(typeTimer);
    typeText.textContent = "";
    charIndex = 0;
    isDeleting = false;
    phraseIndex = 0;
    typeWriter();
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.getElementById('submitBtn');
        const btnSpan = document.getElementById('btnText');
        const toast = document.getElementById('toast');

        const originalText = translations[currentLang]['btn_submit'];
        const loadingText = currentLang === 'ar' ? 'جارِ الإرسال...' : 'Sending...';

        btn.disabled = true;
        btnSpan.textContent = loadingText;

        const formData = new FormData(contactForm);

        fetch("https://formsubmit.co/ajax/info@agts-ly.com", {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            contactForm.reset();
            toast.classList.add('active');
            setTimeout(() => toast.classList.remove('active'), 5000);
        })
        .catch(err => {
            console.error(err);
            // Only show alert if toast failed to fire (rare)
            alert(currentLang === 'ar' ? 'حدث خطأ. يرجى المحاولة لاحقاً.' : 'Message not sent. Please try again.');
        })
        .finally(() => {
            btn.disabled = false;
            btnSpan.textContent = originalText;
        });
    });
}

// Canvas & Animations
const canvas = document.getElementById("hero-canvas");
let ctx, width, height, particles = [];

if (canvas) {
    ctx = canvas.getContext("2d");

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initParticles();
    }

    function initParticles() {
        particles = [];
        const density = window.innerWidth < 800 ? 15000 : 9000;
        const count = (width * height) / density;
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * width, y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 1.5 + 0.5
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        const primaryColor = getComputedStyle(document.body).getPropertyValue('--primary').trim();
        ctx.fillStyle = primaryColor;

        particles.forEach((p, i) => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.globalAlpha = p.size / 3;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                let p2 = particles[j];
                let dist = Math.sqrt((p.x - p2.x)**2 + (p.y - p2.y)**2);
                if (dist < 110) {
                    ctx.globalAlpha = (1 - dist / 110) * 0.3;
                    ctx.beginPath();
                    const primaryColor = getComputedStyle(document.body).getPropertyValue('--primary').trim();
                    ctx.strokeStyle = primaryColor;
                    ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
                }
            }
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    // Restore theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Restore language
    const savedLang = localStorage.getItem('language') || 'en';
    applyLanguage(savedLang);

    typeWriter();
    renderMarquee();
    if (canvas) {
        resize();
        animate();
    }
    document.querySelectorAll('.reveal-fx').forEach(el => observer.observe(el));

    // Event Listeners
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    themeToggleBtn.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });
});

function applyTheme(theme) {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleBtn.innerHTML = '<i data-feather="sun"></i>';
    } else {
        document.body.classList.remove('dark-mode');
        themeToggleBtn.innerHTML = '<i data-feather="moon"></i>';
    }
    feather.replace();
}
