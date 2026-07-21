import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import teacher from "@/assets/teacher-student.jpg";
import playing from "@/assets/students-playing.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Dolphins Montessori School, Accra" },
      { name: "description", content: "Discover the story, mission and guiding philosophy behind Dolphins Montessori School in Accra, Ghana." },
      { property: "og:title", content: "About Dolphins Montessori School" },
      { property: "og:description", content: "A Ghanaian Montessori community rooted in respect for the child." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section data-reveal className="bg-paper">
        <div className="container-page py-20">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">About our school</div>
          <h1 className="mt-3 text-4xl md:text-6xl max-w-3xl leading-[1.05]">
            A small school with a <span className="italic text-gold">big</span> imagination.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Dolphins Montessori School is a community of families, guides and children in Accra
            who believe learning should feel purposeful, joyful and deeply human.
          </p>
        </div>
      </section>

      <section data-reveal className="container-page py-20 grid gap-12 md:grid-cols-2 items-center">
        <img src={teacher} alt="Guide working with a student" width={1200} height={900} loading="lazy" className="rounded-[2rem] w-full h-auto shadow-xl" />
        <div>
          <h2 className="text-3xl md:text-4xl">Our story</h2>
          <p className="mt-4 text-muted-foreground">
            Founded by a small group of Ghanaian educators in 2008, Dolphins began with six
            children in a converted family home along Olusegun Obasanjo Highway. Today we
            serve over 180 children across Toddler, Casa and Elementary programs — and our
            heart remains the same: follow the child.
          </p>
          <p className="mt-4 text-muted-foreground">
            We bring together authentic Montessori pedagogy with the rhythms, languages and
            stories of Ghana, so children grow up rooted, curious and ready for the world.
          </p>
        </div>
      </section>

      <section data-reveal className="bg-forest text-primary-foreground">
        <div className="container-page py-20 grid gap-10 md:grid-cols-3">
          {[
            { title: "Our mission", body: "To nurture confident, compassionate learners through authentic Montessori practice grounded in Ghanaian identity." },
            { title: "Our vision", body: "A generation of African children who love learning, respect one another, and lead with integrity." },
            { title: "Our values", body: "Respect for the child. Community. Curiosity. Excellence. Joy in the everyday work of learning." },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl bg-forest-deep/60 p-7 ring-1 ring-primary-foreground/10">
              <h3 className="text-gold text-lg uppercase tracking-widest">{v.title}</h3>
              <p className="mt-3 text-primary-foreground/90">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section data-reveal className="container-page py-20 grid gap-12 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Our people</div>
          <h2 className="mt-3 text-3xl md:text-4xl">Guides, not teachers.</h2>
          <p className="mt-4 text-muted-foreground">
            Every guide at Dolphins is Montessori-trained and passionate about children.
            Together with our support team, they create classrooms where children feel
            safe to try, to fail, and to grow.
          </p>
          <ul className="mt-6 grid gap-3 text-forest-deep">
            <li><span className="font-semibold">24 trained guides</span> across all levels</li>
            <li><span className="font-semibold">1:8</span> guide-to-child ratio</li>
            <li>Ongoing training with AMI-affiliated mentors</li>
          </ul>
        </div>
        <img src={playing} alt="Children in the school courtyard" width={1400} height={1000} loading="lazy" className="order-1 md:order-2 rounded-[2rem] w-full h-auto shadow-xl" />
      </section>
    </SiteLayout>
  );
}
