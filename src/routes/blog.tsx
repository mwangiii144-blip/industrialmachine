import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/data/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Sewing Machine Blog & Buying Guides | SewPro Kenya" },
      {
        name: "description",
        content:
          "Practical guides on choosing, using and maintaining sewing machines in Kenya — beginner machines, maintenance routines and common repair problems.",
      },
      { property: "og:title", content: "Sewing Machine Blog & Buying Guides | SewPro Kenya" },
      {
        property: "og:description",
        content: "Buying guides, maintenance tips and repair know-how from our technicians.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const featured = posts[0]!;
  const rest = posts.slice(1);


  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Guides From the Workbench"
        description="Everything here comes from machines our technicians actually service — no filler, just what helps you buy well and sew longer."
      />

      <section className="shell py-14 sm:py-20">
        <Reveal>
          <article className="card-surface grid overflow-hidden lg:grid-cols-2">
            <img
              src={featured.image}
              alt={featured.title}
              loading="lazy"
              className="h-full min-h-64 w-full bg-muted object-cover"
            />
            <div className="flex flex-col justify-center p-8 lg:p-10">
              <span className="eyebrow text-[10px]">{featured.category}</span>
              <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              <p className="mt-6 text-xs text-muted-foreground">
                {featured.date} • {featured.readTime}
              </p>
            </div>
          </article>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((post, index) => (
            <Reveal key={post.slug} delay={(index % 4) * 90} className="h-full">
              <article className="card-surface group flex h-full flex-col overflow-hidden hover-lift">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="aspect-16/10 w-full bg-muted object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col p-5">
                  <span className="eyebrow text-[10px]">{post.category}</span>
                  <h2 className="mt-2 font-display text-base font-bold text-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {post.date} • {post.readTime}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
