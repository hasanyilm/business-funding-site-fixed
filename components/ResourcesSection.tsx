
export default function ResourcesSection({ lang }: { lang: 'en' | 'tr' }) {
  const copy = {
    en: { title: 'Resources & Guides', items: [
      { t: 'Working Capital vs MCA: which suits your cash flow?', badge: 'Guide' },
      { t: 'How lenders assess small businesses (and how to prepare)', badge: 'Article' },
      { t: 'Documents checklist for faster decisions', badge: 'Checklist' },
    ], cta: 'Read more' },
    tr: { title: 'Kaynaklar ve Rehberler', items: [
      { t: 'Çalışma sermayesi mi MCA mı? Nakit akışınıza hangisi uygun?', badge: 'Rehber' },
      { t: 'Kredi sağlayıcılar KOBİ’leri nasıl değerlendirir?', badge: 'Yazı' },
      { t: 'Hızlı karar için belge kontrol listesi', badge: 'Liste' },
    ], cta: 'Devamını oku' },
  } as const;
  return (
    <section id="resources" className="border-t border-black/10 bg-[var(--cream)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <h3 className="text-2xl font-semibold text-slate-900">{copy[lang].title}</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {copy[lang].items.map((it, i) => (
            <article key={i} className="rounded-xl bg-white/70 p-5 ring-1 ring-black/5">
              <span className="inline-block rounded-full bg-[var(--navy)]/90 text-white text-xs px-2 py-0.5">{it.badge}</span>
              <h4 className="mt-3 font-semibold text-slate-900">{it.t}</h4>
              <a href="#" className="mt-3 inline-block text-[var(--navy)] hover:underline">{copy[lang].cta}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
