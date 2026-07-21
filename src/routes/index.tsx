import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import hero from "@/assets/hero-classroom.jpg";
import materials from "@/assets/montessori-materials.jpg";
import playing from "@/assets/students-playing.jpg";
import { ArrowRight, Sparkles, Compass, Heart, GraduationCap, Leaf } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-paper">
        <div className="container-page pt-14 pb-20 md:pt-20 md:pb-28 grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-forest-deep">
              <Sparkles className="size-3.5 text-gold" /> Now enrolling · 2026 / 2027
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl leading-[1.05]">
              Where <span className="italic text-gold">curious</span> children<br />become confident learners.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              A warm Ghanaian Montessori community in Accra, guiding children ages 2 to 12
              through hands-on discovery, purposeful work and joyful play.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/admissions" className="btn-primary">Start your application <ArrowRight className="size-4" /></Link>
              <Link to="/about" className="btn-outline">Meet our school</Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "18+", v: "Years serving Accra" },
                { k: "1:8", v: "Guide-to-child ratio" },
                { k: "2–12", v: "Age range" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl text-forest-deep">{s.k}</dt>
                  <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gold/20 blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-forest/10">
              <img src={hero} alt="Children learning at Dolphins Montessori" width={1600} height={1100} className="w-full h-auto" />
            </div>
            <div className="hidden md:flex absolute -bottom-6 -left-6 gap-3 items-center bg-card rounded-2xl p-4 shadow-xl ring-1 ring-border">
              <div className="size-12 rounded-full bg-forest text-primary-foreground grid place-items-center"><Heart className="size-5" /></div>
              <div>
                <div className="font-semibold text-forest-deep">Kind, capable children</div>
                <div className="text-xs text-muted-foreground">Our promise since 2008</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="container-page py-20">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">The Dolphins Way</div>
          <h2 className="mt-3 text-3xl md:text-4xl">Learning shaped around the child.</h2>
          <p className="mt-4 text-muted-foreground">
            Rooted in authentic Montessori practice and Ghanaian values, our classrooms invite
            children to explore, question and lead their own learning.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Compass, title: "Self-directed discovery", body: "Children choose meaningful work from beautifully prepared environments, building focus and independence." },
            { icon: Leaf, title: "Whole-child development", body: "We nurture head, heart and hands — academics, character, creativity and community, together." },
            { icon: GraduationCap, title: "Rigorous, joyful academics", body: "Hands-on materials build deep understanding in language, mathematics, science and cultural studies." },
          ].map(({ icon: Icon, title, body }) => (
            <article key={title} className="rounded-2xl bg-card p-7 ring-1 ring-border hover:ring-forest/30 transition-shadow hover:shadow-lg">
              <div className="size-12 rounded-xl bg-secondary text-forest-deep grid place-items-center"><Icon className="size-6" /></div>
              <h3 className="mt-5 text-xl">{title}</h3>
              <p className="mt-2 text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Feature split */}
      <section className="bg-forest text-primary-foreground">
        <div className="container-page py-20 grid gap-12 md:grid-cols-2 items-center">
          <div className="rounded-[2rem] overflow-hidden ring-4 ring-gold/40">
            <img src={materials} alt="Child working with Montessori materials" width={1200} height={900} loading="lazy" className="w-full h-auto" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Our environments</div>
            <h2 className="mt-3 text-3xl md:text-4xl text-primary-foreground">Prepared spaces that invite deep work.</h2>
            <p className="mt-4 text-primary-foreground/85">
              Every classroom is thoughtfully arranged with real materials — from sandpaper letters to the
              golden bead system — allowing children to make discoveries at their own pace.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Toddler community · 18 months – 3 years",
                "Casa (Primary) · 3 – 6 years",
                "Lower & Upper Elementary · 6 – 12 years",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 size-2 rounded-full bg-gold" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/academics" className="mt-8 inline-flex items-center gap-2 text-gold font-semibold hover:underline">
              Explore our programs <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="container-page py-20 grid gap-10 lg:grid-cols-12 items-center">
        <div className="lg:col-span-5">
          <img src={playing} alt="Dolphins students playing outdoors" width={1400} height={1000} loading="lazy" className="rounded-[2rem] w-full h-auto shadow-xl" />
        </div>
        <figure className="lg:col-span-7">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">A family's story</div>
          <blockquote className="mt-4 font-display text-2xl md:text-3xl leading-snug text-forest-deep">
            "Our daughter walks into Dolphins each morning smiling. She's grown into a confident reader,
            a patient friend, and a child who loves learning for its own sake."
          </blockquote>
          <figcaption className="mt-6 text-muted-foreground">— Ama & Kwesi Boateng, parents of a Casa child</figcaption>
        </figure>
      </section>

      {/* CTA */}
      <section className="container-page pb-24">
        <div className="rounded-[2rem] bg-gold/15 ring-1 ring-gold/40 p-10 md:p-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl">Come visit us in Accra.</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Tours run every Wednesday morning. Meet our guides, walk the classrooms, and see
              Montessori in action.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/admissions" className="btn-primary">Book a tour</Link>
            <Link to="/contact" className="btn-outline">Contact us</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
