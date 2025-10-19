
export default function FAQSection({ lang }: { lang: 'en' | 'tr' }) {
  const copy = {
    en: { title: 'FAQs', rows: [
      { q: 'How fast can funding be arranged?', a: 'Approved applications are typically funded within 24–48 hours, depending on product and documentation.' },
      { q: 'What documents will I need?', a: 'Usually 3–6 months of business bank statements, proof of identity and address; lenders may ask for VAT returns or management accounts.' },
      { q: 'Do you fund startups?', a: 'We prioritise businesses with at least 6 months trading. Early-stage firms may still be considered based on turnover and card sales.' },
      { q: 'Will this affect my credit score?', a: 'Initial enquiry does not. Lenders may conduct credit checks before approval.' },
      { q: 'Do you charge fees?', a: 'We act as an introducer. We may receive commission from lenders. Any lender fees will be disclosed upfront.' },
    ]},
    tr: { title: 'SSS', rows: [
      { q: 'Finansman ne kadar hızlı sağlanır?', a: 'Ürün ve belgelere bağlı olarak onaylanan başvurular genellikle 24–48 saat içinde fonlanır.' },
      { q: 'Hangi belgeler gerekecek?', a: 'Genellikle 3–6 aylık işletme banka ekstreleri, kimlik ve adres doğrulaması; sağlayıcılar KDV beyannameleri veya yönetim hesapları isteyebilir.' },
      { q: 'Yeni kurulan şirketlere finansman var mı?', a: 'Önceliğimiz en az 6 ay faaliyette olan işletmelerdir. Erken aşama işletmeler ciro ve kart satışlarına göre değerlendirilebilir.' },
      { q: 'Kredi notumu etkiler mi?', a: 'İlk başvuru etkilemez. Onay öncesinde sağlayıcılar kredi kontrolleri yapabilir.' },
      { q: 'Ücret ödüyor muyum?', a: 'Aracı olarak hareket ederiz. Sağlayıcılardan komisyon alabiliriz. Sağlayıcı ücretleri varsa baştan açıklanır.' },
    ]},
  } as const;
  const t = (k: keyof typeof copy.en) => copy[lang][k];
  return (
    <section id="faq" className="border-t border-black/10 bg-[var(--cream)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <h3 className="text-2xl font-semibold text-slate-900">{t('title')}</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {copy[lang].rows.map((row, i) => (
            <div key={i} className="rounded-xl bg-white/70 p-5 ring-1 ring-black/5">
              <p className="font-semibold text-slate-900">{row.q}</p>
              <p className="mt-2 text-slate-700">{row.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
