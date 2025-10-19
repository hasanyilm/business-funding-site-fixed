import '../styles/globals.css';
export const metadata={title:'Business Funding Solutions',description:'Fast, flexible business funding in the UK'};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[var(--cream)] text-slate-900">
        {children}
      </body>
    </html>
  );
}
