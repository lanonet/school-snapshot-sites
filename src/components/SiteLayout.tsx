import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/news", label: "News & Events" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top strip */}
      <div className="hidden md:block bg-forest-deep text-primary-foreground text-sm">
        <div className="container-page flex items-center justify-between py-2">
          <div className="flex items-center gap-6 opacity-90">
            <span className="inline-flex items-center gap-2"><MapPin className="size-3.5" />Olusegun Obasanjo Hwy, Accra</span>
            <span className="inline-flex items-center gap-2"><Phone className="size-3.5" />+233 (0) 00 000 0000</span>
          </div>
          <span className="opacity-90 inline-flex items-center gap-2"><Mail className="size-3.5" />hello@dolphinsmontessori.gh</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="container-page flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Dolphins Montessori School crest" className="size-12 md:size-14" width={56} height={56} />
            <div className="leading-tight">
              <div className="font-display text-lg md:text-xl font-semibold text-forest-deep">Dolphins Montessori</div>
              <div className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-gold">School · Accra</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to));
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    active ? "bg-forest text-primary-foreground" : "text-forest-deep hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link to="/admissions" className="btn-gold text-sm">Apply Now</Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="lg:hidden inline-flex items-center justify-center size-11 rounded-full bg-secondary text-forest-deep"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="container-page py-3 flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-forest-deep font-semibold hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/admissions" onClick={() => setOpen(false)} className="btn-gold mt-2">Apply Now</Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="mt-20 bg-forest-deep text-primary-foreground">
        <div className="container-page py-14 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="" className="size-14" width={56} height={56} />
              <div>
                <div className="font-display text-xl">Dolphins Montessori School</div>
                <div className="text-xs uppercase tracking-[0.18em] text-gold">Nurture · Discover · Grow</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-primary-foreground/80">
              A Ghanaian Montessori school in the heart of Accra, guiding children ages 2 to 12 to become
              curious, kind and capable learners.
            </p>
          </div>
          <div>
            <h4 className="text-primary-foreground text-sm uppercase tracking-widest text-gold mb-3">Explore</h4>
            <ul className="space-y-2 text-primary-foreground/85">
              {nav.map((n) => (
                <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-primary-foreground text-sm uppercase tracking-widest text-gold mb-3">Visit</h4>
            <address className="not-italic text-primary-foreground/85 space-y-2">
              <div>Olusegun Obasanjo Highway<br />Accra, Greater Accra Region</div>
              <div>+233 (0) 00 000 0000</div>
              <div>hello@dolphinsmontessori.gh</div>
            </address>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10">
          <div className="container-page py-5 text-xs text-primary-foreground/70 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <span>© {new Date().getFullYear()} Dolphins Montessori School. All rights reserved.</span>
            <span>Made with care in Accra, Ghana</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
