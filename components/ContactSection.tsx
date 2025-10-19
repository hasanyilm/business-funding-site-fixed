
'use client';
export default function ContactSection({ lang }: { lang: 'en' | 'tr' }) {
  const copy = {
    en: { title: 'Contact', p: 'Questions or urgent funding needs? Send us a note and we’ll get back quickly.', name: 'Full Name', email: 'Email', msg: 'Message', submit: 'Send Message', side: 'Prefer to talk? Call us during business hours or request a call back.' },
    tr: { title: 'İletişim', p: 'Sorularınız veya acil finansman ihtiyaçlarınız için bize yazın; hızlı dönüş yaparız.', name: 'Ad Soyad', email: 'E-posta', msg: 'Mesajınız', submit: 'Mesajı Gönder', side: 'Telefonla görüşmek ister misiniz? Mesai saatlerinde arayın veya geri arama isteyin.' },
  } as const;

  async function handleContact(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const fd=new FormData(e.currentTarget);
    const data=Object.fromEntries(fd.entries());
    try{
      const r=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
      if(r.ok){ if(typeof window!== 'undefined'){ window.location.href='/thank-you'; } }
      else{ alert('Could not send your message. Please try again.'); }
    }catch{ alert('Network error. Please try again.'); }
  }

  return (
    <section id="contact" className="border-t border-black/10 bg-[var(--cream)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-semibold text-slate-900">{copy[lang].title}</h3>
          <p className="mt-3 text-slate-700">{copy[lang].p}</p>
          <form className="mt-6 grid gap-4" onSubmit={handleContact}>
            <div>
              <label className="text-sm font-medium">{copy[lang].name}</label>
              <input name="name" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--gold)]" required />
            </div>
            <div>
              <label className="text-sm font-medium">{copy[lang].email}</label>
              <input name="email" type="email" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--gold)]" required />
            </div>
            <div>
              <label className="text-sm font-medium">{copy[lang].msg}</label>
              <textarea name="message" rows={5} className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--gold)]" />
            </div>
            <button className="rounded-xl bg-[var(--navy)] px-5 py-3 font-semibold text-white shadow">{copy[lang].submit}</button>
          </form>
        </div>
        <div className="rounded-xl bg-white/70 p-5 ring-1 ring-black/5">
          <h4 className="font-semibold text-slate-900">{copy[lang].side}</h4>
          <div className="mt-4 grid gap-2 text-sm text-slate-700">
            <p><strong>Email:</strong> hello@susfinance.co.uk</p>
            <p><strong>Hours:</strong> Mon–Fri, 9:00–17:00 (UK)</p>
            <p><strong>Address:</strong> Registered office available on request</p>
          </div>
        </div>
      </div>
    </section>
  );
}
