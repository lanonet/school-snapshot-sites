import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Dolphins Montessori School, Accra" },
      { name: "description", content: "Visit, call or write to Dolphins Montessori School on Olusegun Obasanjo Highway, Accra, Ghana." },
      { property: "og:title", content: "Contact Dolphins Montessori School" },
      { property: "og:description", content: "Come and see us in Accra. Tours run every Wednesday morning." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="bg-paper">
        <div className="container-page py-20">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Get in touch</div>
          <h1 className="mt-3 text-4xl md:text-6xl leading-[1.05] max-w-3xl">We'd love to hear from you.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Whether you're exploring schools for your child or simply curious about Montessori,
            we welcome your questions.
          </p>
        </div>
      </section>

      <section className="container-page py-20 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-6">
          {[
            { icon: MapPin, label: "Visit us", value: "Olusegun Obasanjo Highway\nAccra, Greater Accra Region, Ghana" },
            { icon: Phone, label: "Call us", value: "+233 (0) 00 000 0000" },
            { icon: Mail, label: "Email us", value: "hello@dolphinsmontessori.gh" },
            { icon: Clock, label: "Office hours", value: "Mon – Fri · 7:30 am – 4:30 pm\nTours every Wednesday 9:30 am" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-4 rounded-2xl bg-card p-6 ring-1 ring-border">
              <div className="size-11 flex-shrink-0 rounded-xl bg-secondary grid place-items-center text-forest-deep"><Icon className="size-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-gold font-semibold">{label}</div>
                <div className="mt-1 whitespace-pre-line text-forest-deep">{value}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          className="lg:col-span-3 rounded-2xl bg-card p-8 ring-1 ring-border grid gap-4"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <h2 className="text-2xl">Send us a message</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1.5 text-sm">
              <span className="font-semibold text-forest-deep">Your name</span>
              <input required className="rounded-lg border border-input bg-background px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-forest" />
            </label>
            <label className="grid gap-1.5 text-sm">
              <span className="font-semibold text-forest-deep">Email</span>
              <input required type="email" className="rounded-lg border border-input bg-background px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-forest" />
            </label>
          </div>
          <label className="grid gap-1.5 text-sm">
            <span className="font-semibold text-forest-deep">Phone (optional)</span>
            <input className="rounded-lg border border-input bg-background px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-forest" />
          </label>
          <label className="grid gap-1.5 text-sm">
            <span className="font-semibold text-forest-deep">I'm interested in…</span>
            <select className="rounded-lg border border-input bg-background px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-forest">
              <option>Booking a school tour</option>
              <option>Admissions information</option>
              <option>General enquiry</option>
              <option>Employment</option>
            </select>
          </label>
          <label className="grid gap-1.5 text-sm">
            <span className="font-semibold text-forest-deep">Message</span>
            <textarea required rows={5} className="rounded-lg border border-input bg-background px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-forest" />
          </label>
          <button type="submit" className="btn-primary justify-self-start">{sent ? "Thank you — we'll be in touch" : "Send message"}</button>
        </form>
      </section>
    </SiteLayout>
  );
}
