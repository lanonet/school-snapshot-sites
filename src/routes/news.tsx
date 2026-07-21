import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Calendar, MapPin, Clock } from "lucide-react";

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

// Real dates (ISO) — relative time and countdowns below are computed live from these.
const posts = [
  { tag: "Community", date: "2026-07-10T09:00:00", title: "Founder's Day was a beautiful morning", excerpt: "Families joined us for drumming, storytelling and a shared brunch under the mango tree." },
  { tag: "Learning", date: "2026-06-24T09:00:00", title: "Our Upper Elementary garden project", excerpt: "Children designed, planted and harvested a full vegetable bed — and cooked it for lunch." },
  { tag: "Announcement", date: "2026-06-05T09:00:00", title: "New French guide joins Casa", excerpt: "We are delighted to welcome Madame Adzo to the Casa team from September." },
];

const events = [
  { date: "2026-09-12T09:30:00", endTime: "11:30", title: "Open morning for prospective families" },
  { date: "2026-10-01T18:00:00", endTime: "7:30 pm", title: "Parent workshop: Montessori at home" },
  { date: "2026-10-18T08:00:00", endTime: "All day", title: "Cultural Day celebration" },
  { date: "2026-11-22T17:00:00", endTime: null, title: "Annual Arts & Music evening" },
];

const ACCRA_TZ = "Africa/Accra";

function useNow(tickMs = 1000) {
  // Starts null so server and first client render match (avoids hydration mismatch);
  // fills in once mounted, then ticks.
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), tickMs);
    return () => clearInterval(id);
  }, [tickMs]);
  return now;
}

function relativeTime(iso: string, now: Date) {
  const diffMs = now.getTime() - new Date(iso).getTime();
  const diffMin = Math.round(diffMs / 60000);
  const diffHr = Math.round(diffMin / 60);
  const diffDay = Math.round(diffHr / 24);
  const diffWeek = Math.round(diffDay / 7);
  const diffMonth = Math.round(diffDay / 30);

  if (diffMin < 1) return "Just now";
  if (diffMin < 60) return `${diffMin} minute${diffMin === 1 ? "" : "s"} ago`;
  if (diffHr < 24) return `${diffHr} hour${diffHr === 1 ? "" : "s"} ago`;
  if (diffDay < 7) return `${diffDay} day${diffDay === 1 ? "" : "s"} ago`;
  if (diffDay < 30) return `${diffWeek} week${diffWeek === 1 ? "" : "s"} ago`;
  return `${diffMonth} month${diffMonth === 1 ? "" : "s"} ago`;
}

function eventCountdown(iso: string, now: Date) {
  const eventDate = new Date(iso);
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfEvent = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
  const diffDays = Math.round((startOfEvent.getTime() - startOfToday.getTime()) / 86400000);

  if (diffDays < 0) return { label: "Past event", past: true };
  if (diffDays === 0) return { label: "Today", past: false };
  if (diffDays === 1) return { label: "Tomorrow", past: false };
  if (diffDays < 7) return { label: `In ${diffDays} days`, past: false };
  const weeks = Math.round(diffDays / 7);
  if (diffDays < 30) return { label: `In ${weeks} week${weeks === 1 ? "" : "s"}`, past: false };
  const months = Math.round(diffDays / 30);
  return { label: `In ${months} month${months === 1 ? "" : "s"}`, past: false };
}

function LiveClock() {
  const now = useNow(1000);

  const dateStr = now
    ? now.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: ACCRA_TZ })
    : "–";
  const timeStr = now
    ? now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: ACCRA_TZ })
    : "--:--:--";

  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-card ring-1 ring-border px-4 py-2 text-sm">
      <Clock className="size-4 text-gold flex-shrink-0" />
      <span className="text-forest-deep font-medium">{dateStr}</span>
      <span className="text-muted-foreground tabular-nums">{timeStr}</span>
      <span className="text-xs text-muted-foreground">Accra (GMT)</span>
    </div>
  );
}

function News() {
  const now = useNow(30000); // 30s is plenty for relative-time/countdown labels

  return (
    <SiteLayout>
      <section data-reveal className="bg-paper">
        <div className="container-page py-20">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">News & Events</div>
          <h1 className="mt-3 text-4xl md:text-6xl leading-[1.05] max-w-3xl">Life at Dolphins.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Stories from our classrooms and a look at what's coming up on the school calendar.
          </p>
          <div className="mt-8">
            <LiveClock />
          </div>
        </div>
      </section>

      <section data-reveal className="container-page py-20 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-2xl mb-6">Latest stories</h2>
          <div className="space-y-6">
            {posts.map((p) => (
              <article key={p.title} className="rounded-2xl bg-card p-7 ring-1 ring-border hover:ring-forest/30 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-secondary text-forest-deep px-3 py-1 font-semibold uppercase tracking-widest">{p.tag}</span>
                  <span className="text-muted-foreground">
                    {new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                    {now ? ` · ${relativeTime(p.date, now)}` : ""}
                  </span>
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
            {events.map((e) => {
              const d = new Date(e.date);
              const day = d.toLocaleDateString("en-GB", { day: "2-digit" });
              const month = d.toLocaleDateString("en-GB", { month: "short" });
              const time = d.toLocaleTimeString("en-GB", { hour: "numeric", minute: "2-digit" });
              const countdown = now ? eventCountdown(e.date, now) : null;

              return (
                <li key={e.title} className={`flex gap-4 rounded-2xl bg-card p-5 ring-1 ring-border ${countdown?.past ? "opacity-60" : ""}`}>
                  <div className="flex-shrink-0 size-16 rounded-xl bg-forest text-primary-foreground grid place-items-center leading-tight text-center">
                    <div>
                      <div className="font-display text-2xl">{day}</div>
                      <div className="text-[10px] uppercase tracking-widest text-gold">{month}</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-forest-deep">{e.title}</span>
                      {countdown && (
                        <span className={`text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-full ${countdown.past ? "bg-muted text-muted-foreground" : countdown.label === "Today" ? "bg-gold/20 text-forest-deep" : "bg-secondary text-forest-deep"}`}>
                          {countdown.label}
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground flex items-center gap-3 flex-wrap">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="size-3.5" />
                        {e.endTime === "All day" ? "All day" : e.endTime ? `${time} – ${e.endTime}` : time}
                      </span>
                      <span className="inline-flex items-center gap-1"><MapPin className="size-3.5" />Campus</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </aside>
      </section>
    </SiteLayout>
  );
}
