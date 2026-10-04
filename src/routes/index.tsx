import { createFileRoute } from "@tanstack/react-router";
import {
  Lightbulb,
  Network,
  Globe,
  BarChart3,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  MessageSquare,
  ArrowUpRight,
  BookOpen,
  Brain,
  Rocket,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Создаю AI-продукты через вайбкодинг",
      },
      {
        name: "description",
        content:
          "Создаю AI-продукты через вайбкодинг. Посмотрите проекты и свяжитесь со мной.",
      },
      {
        property: "og:title",
        content: "Создаю AI-продукты через вайбкодинг",
      },
      {
        property: "og:description",
        content:
          "AI-продукты, созданные через вайбкодинг. Проекты и контакты.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Hero,
});

function Badge({
  icon,
  position,
  float,
  delay,
  mobile = false,
}: {
  icon: React.ReactNode;
  position: string;
  float: "hero-float" | "hero-float-delayed";
  delay: string;
  mobile?: boolean;
}) {
  return (
    <div
      className={`pointer-events-none absolute z-10 grid size-14 place-items-center rounded-full border border-primary/40 bg-secondary/60 badge-glow lg:size-20 ${
        mobile ? "" : "hidden lg:grid"
      } ${position}`}
      style={{ animation: `${float} 6s ease-in-out infinite`, animationDelay: delay }}
    >
      <span className="text-primary/90 text-glow [&_svg]:size-6 lg:[&_svg]:size-9">{icon}</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {/* Ambience layers */}
      <div className="absolute inset-0 hero-grid opacity-40" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 35%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 50% 30%, color-mix(in oklab, var(--glow) 10%, transparent), transparent 75%)",
        }}
      />
      <div className="absolute inset-y-0 left-[12%] hidden w-px corridor lg:block" aria-hidden="true" />
      <div className="absolute inset-y-0 right-[12%] hidden w-px corridor lg:block" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to top, color-mix(in oklab, var(--background) 90%, transparent), transparent)",
        }}
      />

      {/* Floating neon badges — left */}
      <Badge
        icon={<Lightbulb />}
        position="left-[6%] top-[18%]"
        float="hero-float"
        delay="0s"
        mobile
      />
      <Badge
        icon={<Network />}
        position="left-[3%] top-[36%]"
        float="hero-float-delayed"
        delay="1.2s"
      />
      <Badge
        icon={<BarChart3 />}
        position="left-[8%] bottom-[16%]"
        float="hero-float"
        delay="0.6s"
      />

      {/* Floating neon badges — right */}
      <Badge
        icon={<Globe />}
        position="right-[6%] top-[18%]"
        float="hero-float-delayed"
        delay="0.8s"
        mobile
      />
      <Badge
        icon={<TrendingUp />}
        position="right-[3%] top-[36%]"
        float="hero-float"
        delay="0.3s"
      />
      <Badge
        icon={<ShieldCheck />}
        position="right-[8%] bottom-[16%]"
        float="hero-float-delayed"
        delay="1.5s"
      />

      {/* Content */}
      <div className="relative z-20 mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)] gap-10 px-4 py-20 text-center sm:px-6">
        <h1 className="font-display uppercase leading-[1.02] tracking-tight text-foreground text-4xl sm:text-6xl lg:text-7xl xl:text-8xl">
          Создаю{" "}
          <span className="text-primary text-glow">AI-продукты</span>
          <br />
          через вайбкодинг
        </h1>

        <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base">
          Быстрые и точные AI-продукты через диалог с нейросетями —
          от идеи до работающего интерфейса.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 font-display text-xs uppercase tracking-widest text-primary-foreground transition-all duration-200 hover:shadow-[0_0_32px_color-mix(in_oklab,var(--glow)_45%,transparent)] sm:w-auto sm:text-sm"
          >
            Посмотреть проекты
            <ArrowRight className="size-4" />
          </button>
          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-primary/40 bg-secondary/50 px-8 py-4 font-display text-xs uppercase tracking-widest text-foreground transition-colors duration-200 hover:bg-accent hover:text-primary sm:w-auto sm:text-sm"
          >
            Связаться
            <MessageSquare className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
