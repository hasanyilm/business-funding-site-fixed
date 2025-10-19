// @ts-nocheck
'use client';
import React, { useState } from 'react';
import Logo from '../components/Logo';

const i18n = {
  en: {
    nav: { home: 'Home', about: 'About', faq: 'FAQs', resources: 'Resources', contact: 'Contact' },
    heroTitle: 'Fast, Flexible Business Funding — When You Need It Most',
    heroSub:
      'Get quick access to working capital, business loans, or merchant cash advances through trusted UK lenders. Simple application. Quick decision. No hidden fees.',
    ctaPrimary: 'Apply for Funding',
    ctaHelper: 'Takes less than 2 minutes — no credit impact.',
    formTitle: 'Enquire Today',
    fullName: 'Full Name',
    companyName: 'Company Name',
    companyNumber: 'Company Number',
    optional: '(optional)',
    email: 'Email',
    phone: 'Phone',
    amount: 'Funding Amount',
    contactMethod: 'Preferred Contact Method',
    contactPhone: 'Phone',
    contactEmail: 'Email',
    contactSMS: 'SMS',
    consent:
      'I consent to Business Funding Solutions contacting me by phone, email or SMS about my enquiry and sharing my details with our panel of approved lenders for the purpose of assessing eligibility.',
    submit: 'Submit Enquiry',
    howItWorks: 'How It Works',
    whyChoose: 'Why Choose Us',
    eligibility: 'Eligibility',
    about: 'About Business Funding Solutions',
    aboutP:
      'We help UK businesses access fast and flexible finance through a panel of trusted lenders. Our goal is to make funding simple, transparent, and accessible to every company.',
    langToggle: 'EN',
    langAlt: 'TR',
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      faq: 'SSS',
      resources: 'Kaynaklar',
      contact: 'İletişim',
    },
    heroTitle: 'İhtiyaç Duyduğunuz Anda Hızlı ve Esnek İşletme Finansmanı',
    heroSub:
      'Güvenilir Birleşik Krallık kredi kuruluşları aracılığıyla işletme kredisi, nakit avans veya çalışma sermayesine hızlı erişim sağlayın. Basit başvuru. Hızlı karar. Gizli ücret yok.',
    ctaPrimary: 'Finansmana Başvur',
    ctaHelper: '2 dakikadan kısa sürer — kredi skorunuza etki etmez.',
    formTitle: 'Hemen Başvurun',
    fullName: 'Ad Soyad',
    companyName: 'Şirket Adı',
    companyNumber: 'Şirket Numarası',
    optional: '(opsiyonel)',
    email: 'E-posta',
    phone: 'Telefon',
    amount: 'Talep Edilen Tutar',
    contactMethod: 'Tercih Edilen İletişim Yöntemi',
    contactPhone: 'Telefon',
    contactEmail: 'E-posta',
    contactSMS: 'SMS',
    consent:
      'Business Funding Solutions’ın telefon, e-posta veya SMS yoluyla benimle iletişime geçmesine ve bilgilerimi uygunluk değerlendirmesi amacıyla onaylı kredi sağlayıcılarıyla paylaşmasına izin veriyorum.',
    submit: 'Başvuruyu Gönder',
    howItWorks: 'Nasıl Çalışır',
    whyChoose: 'Neden Bizi Seçmelisiniz',
    eligibility: 'Uygunluk Kriterleri',
    about: 'Business Funding Solutions Hakkında',
    aboutP:
      'Birleşik Krallık’taki işletmelere hızlı ve esnek finansman erişimi sağlamalarına yardımcı oluyoruz. Amacımız, finansmanı basit, şeffaf ve erişilebilir hale getirmektir.',
    langToggle: 'TR',
    langAlt: 'EN',
  },
};

export default function HomePage() {
  const [lang, setLang] = useState('en');
  const t = (k) => i18n[lang][k];

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Form submitted', data);
    alert('Thank you! We will contact you shortly.');
    e.target.reset();
  };

  return (
    <header className="bg-[var(--navy)] bg-gradient-to-b from-[var(--navy)] to-[#0b1e2d]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <Logo />
          <div className="text-white select-none leading-tight">
            <div className="text-sm tracking-wide opacity-90">BUSINESS</div>
            <div className="text-lg font-semibold tracking-wide">FUNDING SOLUTIONS</div>
          </div>
        </div>

        {/* Nav + Language toggle */}
        <nav className="hidden sm:flex items-center gap-6 text-white/90">
          <a href="#home" className="hover:text-white font-medium">
            {i18n[lang].nav.home}
          </a>
          <a href="#about" className="hover:text-white font-medium">
            {i18n[lang].nav.about}
          </a>
          <a href="#faq" className="hover:text-white font-medium">
            {i18n[lang].nav.faq}
          </a>
          <a href="#resources" className="hover:text-white font-medium">
            {i18n[lang].nav.resources}
          </a>
          <a href="#contact" className="hover:text-white font-medium">
            {i18n[lang].nav.contact}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Switch language"
            onClick={() => setLang(lang === 'en' ? 'tr' : 'en')}
            className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/90 hover:bg-white/10"
          >
            {i18n[lang].langToggle} ▸ {i18n[lang].langAlt}
          </button>
        </div>
      </div>

      {/* Hero content */}
      <div id="home" className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Hero text */}
            <div className="pr-0 lg:pr-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight">
                {t('heroTitle')}
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/85 max-w-xl">{t('heroSub')}</p>
              <div className="mt-8 flex items-center gap-4">
                <a
                  href="/enquire"
                  className="inline-block rounded-xl bg-[var(--gold)] px-5 py-3 font-medium text-[var(--navy)] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
                >
                  {t('ctaPrimary')}
                </a>
                <span className="text-white/70 text-sm">{t('ctaHelper')}</span>
              </div>
            </div>

            {/* Enquiry form */}
            <div id="enquire" className="lg:-mr-8">
              <div className="rounded-2xl bg-[var(--cream)]/95 shadow-2xl ring-1 ring-black/5 p-6 sm:p-7 lg:p-8 backdrop-blur">
                <h2 className="text-xl font-semibold text-slate-900">{t('formTitle')}</h2>
                <form className="mt-5 grid gap-4" onSubmit={handleLeadSubmit}>
                  <input type="hidden" name="lang" value={lang} />
                  <div className="grid gap-1">
                    <label className="text-sm font-medium">{t('fullName')}</label>
                    <input
                      name="fullName"
                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 outline-none focus:ring-2 focus:ring-[var(--gold)]"
                      required
                    />
                  </div>
                  <div className="grid gap-1">
                    <label className="text-sm font-medium">{t('companyName')}</label>
                    <input
                      name="companyName"
                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 outline-none focus:ring-2 focus:ring-[var(--gold)]"
                      required
                    />
                  </div>
                  <div className="grid gap-1">
                    <label className="text-sm font-medium">
                      {t('companyNumber')} <span className="opacity-60">{t('optional')}</span>
                    </label>
                    <input
                      name="companyNumber"
                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 outline-none focus:ring-2 focus:ring-[var(--gold)]"
                    />
                  </div>
                  <div className="grid gap-1">
                    <label className="text-sm font-medium">{t('email')}</label>
                    <input
                      name="email"
                      type="email"
                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 outline-none focus:ring-2 focus:ring-[var(--gold)]"
                      required
                    />
                  </div>
                  <div className="grid gap-1">
                    <label className="text-sm font-medium">{t('phone')}</label>
                    <input
                      name="phone"
                      type="tel"
                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 outline-none focus:ring-2 focus:ring-[var(--gold)]"
                      required
                    />
                  </div>
                  <div className="grid gap-1">
                    <label className="text-sm font-medium">{t('amount')}</label>
                    <input
                      name="amount"
                      inputMode="numeric"
                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 outline-none focus:ring-2 focus:ring-[var(--gold)]"
                      placeholder="eg £50,000"
                    />
                  </div>
                  <div className="grid gap-1">
                    <label className="text-sm font-medium">{t('contactMethod')}</label>
                    <select
                      name="contactMethod"
                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--gold)]"
                    >
                      <option>{i18n[lang].contactPhone}</option>
                      <option>{i18n[lang].contactEmail}</option>
                      <option>{i18n[lang].contactSMS}</option>
                    </select>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <input
                      id="consent"
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-[var(--gold)] focus:ring-[var(--gold)]"
                      required
                    />
                    <label htmlFor="consent" className="text-slate-700">
                      {t('consent')}
                    </label>
                  </div>
                  <button className="mt-2 rounded-xl bg-[var(--gold)] px-5 py-3 font-semibold text-[var(--navy)] shadow-md hover:shadow-lg">
                    {t('submit')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
