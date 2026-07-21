import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Calendar, MapPin } from "lucide-react";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Events · Dolphins Montessori School" },
      { name: "description", content: "The latest announcements, stories and upcoming events from Dolphins Montessori School in Accra." },
      { property: "og:title", content: "News & Events — Dolphins Montessori" },
      { property: "og:description", content: "What's happening at Dolphins Montessori in Accra." },
    ],
  }),
  component: News,
});

const posts = [
  { tag: "Community", date: "10 July 2026", title: "Founder's Day was a beautiful morning", excerpt: "Families joined us for drumming, storytelling and a shared brunch under the mango tree." },
  { tag: "Learning", date: "24 June 2026", title: "Our Upper Elementary garden project", excerpt: "Children designed, planted and harvested a full vegetable bed — and cooked it for lunch." },
  { tag: "Announcement", date: "05 June 2026", title: "New French guide joins Casa", excerpt: "We are delighted to welcome Madame Adzo to the Casa team from September." },
];

const events = [
  { day: "12", month: "Sep", title: "Open morning for prospective families", time: "9:30 – 11:30" },
  { day: "01", month: "Oct", title: "Parent workshop: Montessori at home", time: "6:00 – 7:30 pm" },
  { day: "18", month: "Oct", title: "Cultural Day celebration", time: "All day" },
  { day: "22", month: "Nov", title: "Annual Arts & Music evening", time: "5:00 pm" },
];

function News() {
  return (
    <SiteLayout>
      <section className="bg-paper">
        <div className="container-page py-20">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">News & Events</div>
          <h1 className="mt-3 text-4xl md:text-6xl leading-[1.05] max-w-3xl">Life at Dolphins.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Stories from our classrooms and a look at what's coming up on the school calendar.
          </p>
        </div>
      </section>

      <section className="container-page py-20 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-2xl mb-6">Latest stories</h2>
          <div className="space-y-6">
            {posts.map((p) => (
              <article key={p.title} className="rounded-2xl bg-card p-7 ring-1 ring-border hover:ring-forest/30 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-secondary text-forest-deep px-3 py-1 font-semibold uppercase tracking-widest">{p.tag}</span>
                  <span className="text-muted-foreground">{p.date}</span>
                </div>
                <h3 className="mt-4 text-2xl">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.excerpt}</p>
                <a href="#" className="mt-4 inline-block text-forest font-semibold hover:text-gold">Read more →</a>
              </article>
            ))}
          </div>
        </div>

        <aside>
          <h2 className="text-2xl mb-6">Upcoming events</h2>
          <ul className="space-y-4">
            {events.map((e) => (
              <li key={e.title} className="flex gap-4 rounded-2xl bg-card p-5 ring-1 ring-border">
                <div className="flex-shrink-0 size-16 rounded-xl bg-forest text-primary-foreground grid place-items-center leading-tight text-center">
                  <div>
                    <div className="font-display text-2xl">{e.day}</div>
                    <div className="text-[10px] uppercase tracking-widest text-gold">{e.month}</div>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-forest-deep">{e.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground flex items-center gap-3">
                    <span className="inline-flex items-center gap-1"><Calendar className="size-3.5" />{e.time}</span>
                    <span className="inline-flex items-center gap-1"><MapPin className="size-3.5" />Campus</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </SiteLayout>
  );
}
