
export default function SiteFooter({ lang }: { lang: 'en' | 'tr' }) {
  return (
    <footer className="bg-[var(--cream)] border-t border-black/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-700 grid md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <p><strong>Business Funding Solutions</strong> {lang === 'en' ? 'is a trading style of' : ' , '}<strong>Sus Finance Ltd</strong>{lang === 'tr' ? '’in ticari stilidir.' : '.'}</p>
          <p>{lang === 'en' ? 'Authorised and regulated by the ' : 'Financial Conduct Authority (FCA) tarafından yetkilendirilmiş ve düzenlenmektedir, '}<strong>Financial Conduct Authority (FCA)</strong>{lang === 'en' ? ', Number: ' : ' Numara: '}<strong>1030689</strong>{lang === 'en' ? '.' : '.'}</p>
          <p>{lang === 'en' ? 'We act as an introducer, not a lender. We may receive commission for introductions. All funding is subject to lender approval and credit checks.' : 'Kredi sağlayıcı değil, yönlendiren konumundayız. Yönlendirmeler için komisyon alabiliriz. Tüm finansman, sağlayıcı onayı ve kredi kontrollerine tabidir.'}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="font-semibold text-slate-900">{lang==='en'?'Company':'Şirket'}</p>
            <a href="#about" className="block hover:underline">{lang==='en'?'About':'Hakkımızda'}</a>
            <a href="#faq" className="block hover:underline">{lang==='en'?'FAQs':'SSS'}</a>
            <a href="#resources" className="block hover:underline">{lang==='en'?'Resources':'Kaynaklar'}</a>
            <a href="#contact" className="block hover:underline">{lang==='en'?'Contact':'İletişim'}</a>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-slate-900">{lang==='en'?'Legal':'Hukuk'}</p>
            <a href="/privacy" className="block hover:underline">{lang==='en'?'Privacy':'Gizlilik'}</a>
            <a href="/terms" className="block hover:underline">{lang==='en'?'Terms':'Şartlar'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
