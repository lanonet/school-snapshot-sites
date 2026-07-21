import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import materials from "@/assets/montessori-materials.jpg";
import { Baby, BookOpen, Compass, Globe2, ChevronDown, ArrowRight, Clock } from "lucide-react";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics & Programs · Dolphins Montessori School" },
      { name: "description", content: "Explore Dolphins Montessori's Toddler, Casa and Elementary programs, plus enrichment in music, French and Ghanaian culture." },
      { property: "og:title", content: "Academics at Dolphins Montessori" },
      { property: "og:description", content: "Toddler, Casa and Elementary programs guided by authentic Montessori practice." },
    ],
  }),
  component: Academics,
});

const programs = [
  {
    icon: Baby,
    age: "18 months – 3 years",
    name: "Toddler Community",
    applyHint: "Toddler Community",
    body: "A gentle, home-like environment where the youngest children practice independence — pouring, dressing, exploring language — with warm, attentive guides.",
    dailyRhythm: "8:00 arrival & sensory work · 9:30 snack & language circle · 10:30 outdoor exploration · 12:00 rest",
    highlights: [
      "Practical life: pouring, dressing frames, food prep",
      "Language-rich songs, stories and naming walks",
      "Consistent, predictable daily rhythm",
      "1:6 guide-to-child ratio",
    ],
  },
  {
    icon: Compass,
    age: "3 – 6 years",
    name: "Casa (Primary)",
    applyHint: "Casa",
    body: "Our classic Montessori 3-year cycle. Children work with sensorial materials, sandpaper letters, the golden beads, and grow into confident readers and mathematicians.",
    dailyRhythm: "8:00 work cycle begins · 10:30 outdoor time · 11:00 group lesson · 12:30 lunch & rest",
    highlights: [
      "3-year sensorial, language & math cycle",
      "Sandpaper letters through to phonetic reading",
      "Golden bead system for hands-on math",
      "Practical life & grace-and-courtesy lessons",
    ],
  },
  {
    icon: BookOpen,
    age: "6 – 9 years",
    name: "Lower Elementary",
    applyHint: "Lower Elementary",
    body: "The imagination expands. Children investigate the great stories of the universe, study geometry, grammar and biology, and lead their own research projects.",
    dailyRhythm: "8:00 independent work cycle · 10:00 great lessons & research · 1:00 French/Twi · 2:00 outdoor & clubs",
    highlights: [
      "The Great Lessons: origins of the universe, life & humans",
      "Student-led research projects",
      "Geometry, grammar and biology through discovery",
      "Small-group Socratic discussions",
    ],
  },
  {
    icon: Globe2,
    age: "9 – 12 years",
    name: "Upper Elementary",
    applyHint: "Upper Elementary",
    body: "Older children take on 'going out' work in Accra — visiting museums, markets and mentors — while mastering advanced maths, literature and science.",
    dailyRhythm: "8:00 project work · 10:00 seminars · weekly 'going out' trips into Accra · 2:00 electives & sport",
    highlights: [
      "Weekly 'going out' trips into the city",
      "Advanced mathematics, literature & science",
      "Mentorships with local professionals",
      "Leadership roles within the classroom community",
    ],
  },
];

function Academics() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <SiteLayout>
      <section data-reveal className="bg-paper">
        <div className="container-page py-20">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Programs</div>
          <h1 className="mt-3 text-4xl md:text-6xl max-w-3xl leading-[1.05]">Four programs. One continuous journey.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            From toddlerhood through the end of Elementary, Dolphins offers a coherent Montessori
            path — each stage carefully prepared for the child in front of us.
          </p>
        </div>
      </section>

      <section data-reveal className="container-page py-20 grid gap-6 md:grid-cols-2">
        {programs.map(({ icon: Icon, age, name, applyHint, body, dailyRhythm, highlights }) => {
          const isOpen = open === name;
          return (
            <article
              key={name}
              className={`rounded-2xl bg-card p-8 ring-1 transition-shadow ${isOpen ? "ring-forest/40 shadow-lg" : "ring-border hover:ring-forest/30 hover:shadow-lg"}`}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : name)}
                aria-expanded={isOpen}
                className="w-full text-left cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="size-12 rounded-xl bg-secondary text-forest-deep grid place-items-center"><Icon className="size-6" /></div>
                  <span className="text-xs uppercase tracking-widest text-gold font-semibold">{age}</span>
                </div>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <h2 className="text-2xl">{name}</h2>
                  <ChevronDown className={`size-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </div>
                <p className="mt-3 text-muted-foreground">{body}</p>
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-border pt-6 space-y-5">
                    <div>
                      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-semibold">
                        <Clock className="size-3.5" /> A day in the life
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{dailyRhythm}</p>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-gold font-semibold">Curriculum highlights</div>
                      <ul className="mt-2 space-y-1.5">
                        {highlights.map((h) => (
                          <li key={h} className="text-sm text-forest-deep flex items-start gap-2">
                            <span className="mt-1.5 size-1.5 rounded-full bg-gold flex-shrink-0" /> {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      to="/admissions"
                      hash="apply-form"
                      search={{ program: applyHint }}
                      className="inline-flex items-center gap-2 text-forest-deep font-semibold hover:underline"
                    >
                      Apply to {name} <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section data-reveal className="bg-forest text-primary-foreground">
        <div className="container-page py-20 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Enrichment</div>
            <h2 className="mt-3 text-3xl md:text-4xl text-primary-foreground">Beyond the classroom walls.</h2>
            <p className="mt-4 text-primary-foreground/85">
              Every child at Dolphins takes part in a rich enrichment programme woven through the school week.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "French language",
                "Twi & Ga",
                "Music & drumming",
                "Visual arts",
                "Yoga & movement",
                "Gardening & farm-to-table",
              ].map((e) => (
                <div key={e} className="rounded-xl bg-forest-deep/60 px-4 py-3 ring-1 ring-primary-foreground/10">{e}</div>
              ))}
            </div>
          </div>
          <img src={materials} alt="Montessori materials" width={1200} height={900} loading="lazy" className="rounded-[2rem] w-full h-auto ring-4 ring-gold/40" />
        </div>
      </section>

      <section data-reveal className="container-page py-20">
        <div className="rounded-[2rem] bg-gold/15 ring-1 ring-gold/40 p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl">Ready to see it for yourself?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            The best way to understand a Montessori classroom is to walk through one. Book a tour and we'll show you around.
          </p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <Link to="/admissions" className="btn-primary">Book a tour</Link>
            <Link to="/contact" className="btn-outline">Ask a question</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
