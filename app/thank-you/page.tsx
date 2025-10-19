
export default function ThankYouPage(){
  return (
    <main className='bg-[var(--cream)] min-h-screen'>
      <div className='mx-auto max-w-3xl px-6 py-16'>
        <h1 className='text-3xl font-semibold text-slate-900'>Thanks, we've got your enquiry</h1>
        <p className='mt-4 text-slate-700'>A funding specialist will contact you shortly.</p>
        <a href='/' className='mt-8 inline-block rounded-xl bg-[var(--navy)] px-5 py-3 font-semibold text-white shadow'>Back to Home</a>
      </div>
    </main>
  );
}
