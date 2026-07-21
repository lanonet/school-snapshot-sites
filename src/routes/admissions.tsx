import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions · Dolphins Montessori School" },
      { name: "description", content: "How to apply to Dolphins Montessori School in Accra, Ghana. Rolling admissions for children ages 2–12." },
      { property: "og:title", content: "Admissions — Dolphins Montessori School" },
      { property: "og:description", content: "A warm, personal admissions process. Rolling enrollment throughout the year." },
    ],
  }),
  component: Admissions,
});

const steps = [
  { n: "01", t: "Inquire", d: "Fill in a short inquiry form and tell us a little about your child and family." },
  { n: "02", t: "Visit", d: "Join us for a Wednesday morning school tour and meet our Head of School." },
  { n: "03", t: "Apply", d: "Submit the application form together with your child's records and the application fee." },
  { n: "04", t: "Family visit", d: "Bring your child in for a gentle observation with our guides in a real classroom." },
  { n: "05", t: "Welcome", d: "Receive an offer and complete enrollment. We're delighted to have you." },
];

function Admissions() {
  return (
    <SiteLayout>
      <section className="bg-paper">
        <div className="container-page py-20 grid gap-8 md:grid-cols-[1.4fr_1fr] items-end">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Admissions 2026 / 2027</div>
            <h1 className="mt-3 text-4xl md:text-6xl leading-[1.05]">Join the Dolphins family.</h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              We welcome families year-round on a rolling basis. Every child begins with a
              conversation — because admissions should feel as thoughtful as our classrooms.
            </p>
          </div>
          <div className="rounded-2xl bg-card p-6 ring-1 ring-border">
            <div className="text-xs uppercase tracking-widest text-gold">Key dates</div>
            <ul className="mt-3 space-y-2 text-forest-deep">
              <li className="flex justify-between border-b border-border pb-2"><span>Applications open</span><span className="font-semibold">Now</span></li>
              <li className="flex justify-between border-b border-border pb-2"><span>Priority round</span><span className="font-semibold">15 Feb 2027</span></li>
              <li className="flex justify-between"><span>Term begins</span><span className="font-semibold">Sept 2027</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <h2 className="text-3xl md:text-4xl">How to apply</h2>
        <ol className="mt-10 grid gap-4 md:grid-cols-5">
          {steps.map((s) => (
            <li key={s.n} className="rounded-2xl bg-card p-6 ring-1 ring-border">
              <div className="font-display text-3xl text-gold">{s.n}</div>
              <div className="mt-2 font-semibold text-forest-deep">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-forest text-primary-foreground">
        <div className="container-page py-20 grid gap-10 md:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Fees & support</div>
            <h2 className="mt-3 text-3xl md:text-4xl text-primary-foreground">Transparent, family-friendly fees.</h2>
            <p className="mt-4 text-primary-foreground/85">
              Our tuition is set to sustain a well-resourced Montessori environment while
              remaining accessible to Ghanaian families. A limited number of sibling and
              bursary spaces are available each year.
            </p>
            <Link to="/contact" className="mt-6 inline-flex btn-gold">Request a fee schedule</Link>
          </div>
          <ul className="grid gap-3 self-center">
            {[
              "Rolling admissions all year",
              "No entrance exams — we meet the child",
              "Sibling discount available",
              "Financial-aid interviews on request",
              "Personal, unhurried school tours",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-xl bg-forest-deep/60 px-4 py-3 ring-1 ring-primary-foreground/10">
                <CheckCircle2 className="size-5 text-gold flex-shrink-0 mt-0.5" /> <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="rounded-[2rem] bg-gold/15 ring-1 ring-gold/40 p-10 md:p-14 grid md:grid-cols-[1fr_auto] items-center gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl">Ready to begin?</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">Send us an inquiry and our admissions team will be in touch within two working days.</p>
          </div>
          <Link to="/contact" className="btn-primary">Start an inquiry</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
