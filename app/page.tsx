
'use client';
import { useState } from 'react';
import Logo from '../components/Logo';
import FAQSection from '../components/FAQSection';
import ResourcesSection from '../components/ResourcesSection';
import ContactSection from '../components/ContactSection';
import SiteFooter from '../components/SiteFooter';

type Lang = 'en' | 'tr';
type Copy = typeof baseEn;

const baseEn = {
  nav: { home: 'Home', about: 'About', faq: 'FAQs', resources: 'Resources', contact: 'Contact' },
  heroTitle: 'Fast, Flexible Business Funding — When You Need It Most',
  heroSub: 'Get quick access to working capital, business loans, or merchant cash advances through trusted UK lenders. Simple application. Quick decision. No hidden fees.',
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
  consent: 'I consent to Business Funding Solutions contacting me by phone, email or SMS about my enquiry and sharing my details with our panel of approved lenders for the purpose of assessing eligibility.',
  submit: 'Submit Enquiry',
  howItWorks: 'How It Works',
  applyOnline: 'Apply Online',
  applyOnlineDesc: 'Tell us about your business and funding needs — it’s quick and secure.',
  getMatched: 'Get Matched',
  getMatchedDesc: 'We connect you with lenders best suited to your business profile.',
  receiveFunds: 'Receive Your Funds',
  receiveFundsDesc: 'Approved applications are typically funded within 24–48 hours.',
  whyChoose: 'Why Choose Us',
  why1: 'Access to a panel of trusted UK business lenders',
  why2: 'Fast decisions and straightforward terms',
  why3: 'No jargon, no confusion — just funding that works',
  why4: 'FCA-registered introducer — integrity guaranteed',
  eligibility: 'Eligibility',
  el1: 'Limited companies registered in the UK, sole traders and partnerships considered',
  el2: 'Minimum 6 months trading history',
  el3: 'Annual turnover of £50k or more',
  about: 'About Business Funding Solutions',
  aboutP: 'We help UK businesses access fast and flexible finance...',
  langToggle: 'EN',
  langAlt: 'TR',
} as const;
const i18n: Record<Lang, Copy> = {
  en: baseEn,
  tr: {
    nav: { home: 'Ana Sayfa', about: 'Hakkımızda', faq: 'SSS', resources: 'Kaynaklar', contact: 'İletişim' },
    heroTitle: 'İhtiyaç Duyduğunuz Anda Hızlı ve Esnek İşletme Finansmanı',
    heroSub: 'Güvenilir Birleşik Krallık kredi kuruluşları üzerinden...',
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
    consent: 'Talebimle ilgili olarak Business Funding Solutions’ın...',
    submit: 'Başvuruyu Gönder',
    howItWorks: 'Nasıl Çalışır',
    applyOnline: 'Çevrimiçi Başvurun',
    applyOnlineDesc: 'İşletmenizi ve finansman ihtiyacınızı bize iletin — hızlı ve güvenlidir.',
    getMatched: 'Eşleştirme',
    getMatchedDesc: 'İşletme profilinize en uygun kredi sağlayıcılarla sizi buluştururuz.',
    receiveFunds: 'Fonlarınızı Alın',
    receiveFundsDesc: 'Onaylanan başvurular genellikle 24–48 saat içinde fonlanır.',
    whyChoose: 'Neden Bizi Seçmelisiniz',
    why1: 'Güvenilir Birleşik Krallık iş kredisi sağlayıcılarından...',
    why2: 'Hızlı kararlar ve anlaşılır şartlar',
    why3: 'Jargon yok, karmaşa yok — işe yarayan finansman',
    why4: 'FCA kayıtlı aracı — şeffaf ve güvenilir',
    eligibility: 'Uygunluk Kriterleri',
    el1: 'Birleşik Krallık’ta kayıtlı limited şirketler...',
    el2: 'En az 6 aylık faaliyet geçmişi',
    el3: 'Yıllık ciro £50 bin veya üzeri',
    about: 'Business Funding Solutions Hakkında',
    aboutP: 'İngiltere’deki işletmelerin hızlı ve esnek finansmana...',
    langToggle: 'TR',
    langAlt: 'EN',
  } as Copy,
};
const t = (k: keyof Copy) => i18n[lang][k];
const theme={navy:'#0b1e2d',cream:'#efe6d9',gold:'#caa24a'};

export default function Page(){
  const [lang,setLang]=useState<'en'|'tr'>('en');
  const i18n={en:{nav:{home:'Home',about:'About',faq:'FAQs',resources:'Resources',contact:'Contact'},heroTitle:'Fast, Flexible Business Funding — When You Need It Most',heroSub:'Get quick access to working capital, business loans, or merchant cash advances through trusted UK lenders. Simple application. Quick decision. No hidden fees.',ctaPrimary:'Apply for Funding',ctaHelper:'Takes less than 2 minutes — no credit impact.',formTitle:'Enquire Today',fullName:'Full Name',companyName:'Company Name',companyNumber:'Company Number',optional:'(optional)',email:'Email',phone:'Phone',amount:'Funding Amount',contactMethod:'Preferred Contact Method',contactPhone:'Phone',contactEmail:'Email',contactSMS:'SMS',consent:'I consent to Business Funding Solutions contacting me by phone, email or SMS about my enquiry and sharing my details with our panel of approved lenders for the purpose of assessing eligibility.',submit:'Submit Enquiry',howItWorks:'How It Works',applyOnline:'Apply Online',applyOnlineDesc:'Tell us about your business and funding needs — it’s quick and secure.',getMatched:'Get Matched',getMatchedDesc:'We connect you with lenders best suited to your business profile.',receiveFunds:'Receive Your Funds',receiveFundsDesc:'Approved applications are typically funded within 24–48 hours.',whyChoose:'Why Choose Us',why1:'Access to a panel of trusted UK business lenders',why2:'Fast decisions and straightforward terms',why3:'No jargon, no confusion — just funding that works',why4:'FCA-registered introducer — integrity guaranteed',eligibility:'Eligibility',el1:'Limited companies registered in the UK, sole traders and partnerships considered',el2:'Minimum 6 months trading history',el3:'Annual turnover of £50k or more',about:'About Business Funding Solutions',aboutP:'We help UK businesses access fast and flexible finance. Whether you’re managing cash flow, investing in growth, or bridging a short-term gap, our lender panel covers multiple funding types — including working capital loans and merchant cash advances.',langToggle:'EN',langAlt:'TR'},tr:{nav:{home:'Ana Sayfa',about:'Hakkımızda',faq:'SSS',resources:'Kaynaklar',contact:'İletişim'},heroTitle:'İhtiyaç Duyduğunuz Anda Hızlı ve Esnek İşletme Finansmanı',heroSub:'Güvenilir Birleşik Krallık kredi kuruluşları üzerinden işletme sermayesine, işletme kredilerine veya POS cirosu avansına (MCA) hızlı erişim sağlayın. Basit başvuru. Hızlı karar. Gizli ücret yok.',ctaPrimary:'Finansmana Başvur',ctaHelper:'2 dakikadan kısa sürer — kredi skorunuza etki etmez.',formTitle:'Hemen Başvurun',fullName:'Ad Soyad',companyName:'Şirket Adı',companyNumber:'Şirket Numarası',optional:'(opsiyonel)',email:'E-posta',phone:'Telefon',amount:'Talep Edilen Tutar',contactMethod:'Tercih Edilen İletişim Yöntemi',contactPhone:'Telefon',contactEmail:'E-posta',contactSMS:'SMS',consent:'Talebimle ilgili olarak Business Funding Solutions’ın beni telefon, e-posta veya SMS ile aramasına ve uygunluk değerlendirmesi amacıyla bilgilerimi onaylı kredi sağlayıcıları paneliyle paylaşmasına onay veriyorum.',submit:'Başvuruyu Gönder',howItWorks:'Nasıl Çalışır',applyOnline:'Çevrimiçi Başvurun',applyOnlineDesc:'İşletmenizi ve finansman ihtiyacınızı bize iletin — hızlı ve güvenlidir.',getMatched:'Eşleştirme',getMatchedDesc:'İşletme profilinize en uygun kredi sağlayıcılarla sizi buluştururuz.',receiveFunds:'Fonlarınızı Alın',receiveFundsDesc:'Onaylanan başvurular genellikle 24–48 saat içinde fonlanır.',whyChoose:'Neden Bizi Seçmelisiniz',why1:'Güvenilir Birleşik Krallık iş kredisi sağlayıcılarından oluşan bir panele erişim',why2:'Hızlı kararlar ve anlaşılır şartlar',why3:'Jargon yok, karmaşa yok — işe yarayan finansman',why4:'FCA kayıtlı aracı — şeffaf ve güvenilir',eligibility:'Uygunluk Kriterleri',el1:'Birleşik Krallık’ta kayıtlı limited şirketler; şahıs şirketleri ve ortaklıklar değerlendirilebilir',el2:'En az 6 aylık faaliyet geçmişi',el3:'Yıllık ciro £50 bin veya üzeri',about:'Business Funding Solutions Hakkında',aboutP:'İngiltere’deki işletmelerin hızlı ve esnek finansmana erişmesine yardımcı oluyoruz. Nakit akışını yönetmek, büyümeye yatırım yapmak veya kısa vadeli bir boşluğu kapatmak için; panelimiz çalışma sermayesi kredileri ve POS cirosu avansı (MCA) dâhil birden çok ürünü kapsar.',langToggle:'TR',langAlt:'EN'}} as const;

  const t=(k: keyof typeof i18n.en)=>i18n[lang][k];

  async function handleLeadSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const fd=new FormData(e.currentTarget);
    const data=Object.fromEntries(fd.entries());
    try{
      const r=await fetch('/api/enquire',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
      if(r.ok) window.location.href='/thank-you'; else alert('Submission failed. Please try again.');
    }catch{ alert('Network error. Please try again.'); }
  }

  return(<div className="min-h-screen w-full text-slate-900"><style>{`:root{ --navy:${theme.navy}; --cream:${theme.cream}; --gold:${theme.gold}; }`}</style><header className="bg-[var(--navy)]"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between"><div className="flex items-center gap-3"><Logo /><div className="text-white select-none leading-tight"><div className="text-sm tracking-wide opacity-90">BUSINESS</div><div className="text-lg font-semibold tracking-wide">FUNDING SOLUTIONS</div></div></div><nav className="hidden sm:flex items-center gap-6 text-white/90"><a href="#home" className="hover:text-white">{i18n[lang].nav.home}</a><a href="#about" className="hover:text-white">{i18n[lang].nav.about}</a><a href="#faq" className="hover:text-white">{i18n[lang].nav.faq}</a><a href="#resources" className="hover:text-white">{i18n[lang].nav.resources}</a><a href="#contact" className="hover:text-white">{i18n[lang].nav.contact}</a></nav><div className="flex items-center gap-2"><button aria-label="Switch language" onClick={()=>setLang(lang==='en'?'tr':'en')} className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/90 hover:bg:white/10">{i18n[lang].langToggle} ▸ {i18n[lang].langAlt}</button></div></div><div id="home" className="relative"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20"><div className="grid lg:grid-cols-2 gap-10 items-start"><div className="pr-0 lg:pr-8"><h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text:white leading-tight">{t('heroTitle')}</h1><p className="mt-5 text-base sm:text-lg text-white/85 max-w-xl">{t('heroSub')}</p><div className="mt-8 flex items-center gap-4"><a href="/enquire" className="inline-block rounded-xl bg-[var(--gold)] px-5 py-3 font-medium text-[var(--navy)] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40">{t('ctaPrimary')}</a><span className="text-white/70 text-sm">{t('ctaHelper')}</span></div></div><div id="enquire" className="lg:-mr-8"><div className="rounded-2xl bg-[var(--cream)]/95 shadow-2xl ring-1 ring-black/5 p-6 sm:p-7 lg:p-8 backdrop-blur"><h2 className="text-xl font-semibold text-slate-900">{t('formTitle')}</h2><form className="mt-5 grid gap-4" onSubmit={handleLeadSubmit}><input type="hidden" name="lang" value={lang} /><div className="grid gap-1"><label className="text-sm font-medium">{t('fullName')}</label><input name="fullName" className="rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--gold)]" required /></div><div className="grid gap-1"><label className="text-sm font-medium">{t('companyName')}</label><input name="companyName" className="rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--gold)]" required /></div><div className="grid gap-1"><label className="text-sm font-medium">{t('companyNumber')} <span className="opacity-60">{t('optional')}</span></label><input name="companyNumber" className="rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--gold)]" /></div><div className="grid gap-1"><label className="text-sm font-medium">{t('email')}</label><input name="email" type="email" className="rounded-lg border border-slate-300 bg:white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--gold)]" required /></div><div className="grid gap-1"><label className="text-sm font-medium">{t('phone')}</label><input name="phone" type="tel" className="rounded-lg border border-slate-300 bg:white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--gold)]" required /></div><div className="grid gap-1"><label className="text-sm font-medium">{t('amount')}</label><input name="amount" inputMode="numeric" className="rounded-lg border border-slate-300 bg:white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--gold)]" placeholder="eg £50,000" /></div><div className="grid gap-1"><label className="text-sm font-medium">{t('contactMethod')}</label><select name="contactMethod" className="rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--gold)]"><option>{i18n[lang].contactPhone}</option><option>{i18n[lang].contactEmail}</option><option>{i18n[lang].contactSMS}</option></select></div><div className="flex items-start gap-3 text-sm"><input id="consent" type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-[var(--gold)] focus:ring-[var(--gold)]" required /><label htmlFor="consent" className="text-slate-700">{t('consent')}</label></div><button className="mt-2 rounded-xl bg-[var(--gold)] px-5 py-3 font-semibold text-[var(--navy)] shadow-md hover:shadow-lg">{t('submit')}</button></form></div></div></div></div></div></header><main className="bg-[var(--cream)]"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid lg:grid-cols-2 gap-12"><section><h3 className="text-2xl font-semibold text-slate-900">{i18n[lang].howItWorks}</h3><ol className="mt-6 grid gap-6"><li className="flex gap-4"><span className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-900 text-white text-sm">1</span><div><h4 className="font-semibold">{i18n[lang].applyOnline}</h4><p className="text-slate-700">{i18n[lang].applyOnlineDesc}</p></div></li><li className="flex gap-4"><span className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-900 text-white text-sm">2</span><div><h4 className="font-semibold">{i18n[lang].getMatched}</h4><p className="text-slate-700">{i18n[lang].getMatchedDesc}</p></div></li><li className="flex gap-4"><span className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-900 text-white text-sm">3</span><div><h4 className="font-semibold">{i18n[lang].receiveFunds}</h4><p className="text-slate-700">{i18n[lang].receiveFundsDesc}</p></div></li></ol><h3 className="mt-12 text-2xl font-semibold text-slate-900">{i18n[lang].whyChoose}</h3><ul className="mt-6 space-y-3 text-slate-700 list-disc pl-6"><li>{i18n[lang].why1}</li><li>{i18n[lang].why2}</li><li>{i18n[lang].why3}</li><li>{i18n[lang].why4}</li></ul><h3 className="mt-12 text-2xl font-semibold text-slate-900">{i18n[lang].eligibility}</h3><ul className="mt-6 space-y-3 text-slate-700 list-disc pl-6"><li>{i18n[lang].el1}</li><li>{i18n[lang].el2}</li><li>{i18n[lang].el3}</li></ul></section><section id="about"><h3 className="text-2xl font-semibold text-slate-900">{i18n[lang].about}</h3><p className="mt-6 text-slate-700 leading-relaxed">{i18n[lang].aboutP}</p><div className="mt-8"><a href="/enquire" className="inline-block rounded-xl bg-[var(--navy)] px-5 py-3 font-semibold text-white shadow-md hover:shadow-lg">{i18n[lang].ctaPrimary}</a></div></section></div><FAQSection lang={lang} /><ResourcesSection lang={lang} /><ContactSection lang={lang} /></main><SiteFooter lang={lang} /></div>);
}
