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
  Workflow,
  Palette,
  PlugZap,
  Check,
  Send,
  Mail,
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
  component: Landing,
});

function Landing() {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <Process />
      <Cta />
    </>
  );
}

const projects = [
  {
    icon: <BookOpen />,
    name: "StudyFlow",
    description:
      "AI-платформа для персонализированного обучения. Подстраивает материалы и темп занятий под каждого ученика.",
    tags: ["React", "OpenAI", "Tailwind", "Supabase"],
  },
  {
    icon: <Brain />,
    name: "DataScope",
    description:
      "AI-ассистент для анализа таблиц. Загружаете выгрузку — получаете отчёт с графиками и выводами на человеческом языке.",
    tags: ["Next.js", "LLM", "D3.js", "PostgreSQL"],
  },
  {
    icon: <Rocket />,
    name: "LaunchPro",
    description:
      "Лендинг для продукта. Собран за один вечер через диалог с нейросетью и готов к конверсии.",
    tags: ["React", "Vite", "Tailwind", "GSAP"],
  },
];

function ProjectPreview({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
      <div className="absolute inset-0 hero-grid opacity-40" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 90% at 50% 100%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 70%)",
        }}
      />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex shrink-0 items-center gap-1.5 border-b border-border/60 px-4 py-2.5">
          <span className="size-2 rounded-full bg-primary/70 badge-glow" />
          <span className="size-2 rounded-full bg-primary/40" />
          <span className="size-2 rounded-full bg-primary/20" />
        </div>
        <div className="flex min-h-0 flex-1 items-center justify-center">
          <span className="text-glow text-primary/90 [&_svg]:size-10 sm:[&_svg]:size-12">
            {icon}
          </span>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-4 overflow-hidden bg-background px-4 pt-6 pb-6 sm:px-6 sm:pt-10 sm:pb-10"
    >
      <div className="absolute inset-0 hero-grid opacity-25" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in oklab, var(--primary) 8%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-px"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in oklab, var(--glow) 40%, transparent), transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="font-display uppercase leading-tight tracking-tight text-foreground text-3xl sm:text-4xl lg:text-5xl">
            Избранные{" "}
            <span className="text-primary text-glow">проекты</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
            Продукты, собранные через диалог с нейросетями — от идеи до релиза.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-200 hover:border-primary/40 hover:shadow-[0_0_36px_color-mix(in_oklab,var(--glow)_18%,transparent)]"
            >
              <ProjectPreview icon={project.icon} />

              <div className="flex min-w-0 flex-1 flex-col gap-3 p-5 sm:p-6">
                <div className="flex min-w-0 items-center justify-between gap-3">
                  <h3 className="min-w-0 truncate font-display tracking-tight text-foreground text-lg">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-auto flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-sm border border-primary/30 bg-primary/5 px-2.5 py-1 text-[11px] tracking-wider text-primary/90"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

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
          <a
            href="#projects"
            className="inline-flex w-full min-w-64 items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 font-sans text-xs font-bold tracking-widest text-primary-foreground transition-all duration-200 hover:shadow-[0_0_32px_color-mix(in_oklab,var(--glow)_45%,transparent)] sm:w-auto sm:text-sm"
          >
            Посмотреть проекты
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex w-full min-w-64 items-center justify-center gap-2 rounded-md border border-primary/40 bg-secondary/50 px-8 py-4 font-sans text-xs font-bold tracking-widest text-foreground transition-colors duration-200 hover:bg-accent hover:text-primary sm:w-auto sm:text-sm"
          >
            Связаться
            <MessageSquare className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: <Rocket />,
    title: "MVP за неделю",
    description:
      "Собираю рабочий продукт с нуля: от идеи до запущенного интерфейса. Без долгого согласования ТЗ — сразу видимая версия.",
    result: "Рабочий продукт через 5–7 дней",
  },
  {
    icon: <Workflow />,
    title: "AI-автоматизация",
    description:
      "Подключаю нейросети к вашим процессам: документы, отчёты, переписка. Рутинные операции идут без ручного участия.",
    result: "Минус 20 часов рутины в неделю",
  },
  {
    icon: <Palette />,
    title: "UI/UX с вайбкодингом",
    description:
      "Проектирую и сразу собираю интерфейс, а не картинку в макете. Правки появляются прямо в браузере за минуты.",
    result: "Макет и рабочий экран в один день",
  },
  {
    icon: <PlugZap />,
    title: "Интеграции",
    description:
      "Связываю сервисы, платежи, CRM и AI-API в единый поток. Данные ходят между системами сами.",
    result: "Связка сервисов за один день",
  },
];

function Services() {
  return (
    <section className="relative overflow-hidden bg-background px-4 pt-6 pb-6 sm:px-6 sm:pt-10 sm:pb-10">
      <div className="absolute inset-0 hero-grid opacity-25" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, color-mix(in oklab, var(--primary) 8%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-px"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in oklab, var(--glow) 40%, transparent), transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="font-display uppercase leading-tight tracking-tight text-foreground text-3xl sm:text-4xl lg:text-5xl">
            Что я <span className="text-primary text-glow">делаю</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
            Четыре формата работы — от быстрого MVP до связки сервисов в один поток.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-all duration-200 hover:border-primary/40 hover:shadow-[0_0_36px_color-mix(in_oklab,var(--glow)_18%,transparent)] sm:p-6"
            >
              <div className="mb-5 flex min-w-0 items-center justify-between gap-3">
                <span className="grid size-12 shrink-0 place-items-center rounded-md border border-primary/40 bg-secondary/60 badge-glow text-primary/90 text-glow [&_svg]:size-6">
                  {service.icon}
                </span>
                <span className="font-display shrink-0 text-xs tracking-widest text-primary/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="font-display leading-tight tracking-tight text-foreground text-lg">
                {service.title}
              </h3>

              <p className="mb-5 mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <p className="mt-auto flex items-start gap-2 border-t border-border pt-4 text-sm font-medium text-primary">
                <Check className="mt-0.5 size-4 shrink-0" />
                {service.result}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Погружаюсь в задачу",
    description:
      "Разбираюсь в цели, пользователях и ограничениях. Фиксируем, что именно должно получиться.",
  },
  {
    title: "Создаю с ИИ",
    description:
      "Собираю прототип через диалог с нейросетью: интерфейс, логика, данные. Первая рабочая версия — уже через день.",
  },
  {
    title: "Тестирую и улучшаю",
    description:
      "Проверяю на реальных сценариях и мобильных экранах. Правлю то, что мешает пользоваться.",
  },
  {
    title: "Запускаю и масштабирую",
    description:
      "Вывожу в прод и слежу за метриками. Добавляю новые функции и интеграции по мере роста.",
  },
];

function Process() {
  return (
    <section className="relative overflow-hidden bg-background px-4 pt-6 pb-6 sm:px-6 sm:pt-10 sm:pb-10">
      <div className="absolute inset-0 hero-grid opacity-25" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in oklab, var(--primary) 8%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-px"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in oklab, var(--glow) 40%, transparent), transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="font-display uppercase leading-tight tracking-tight text-foreground text-3xl sm:text-4xl lg:text-5xl">
            Как я <span className="text-primary text-glow">работаю</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
            Четыре шага от разговора о задаче до запущенного продукта.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-4 md:gap-6">
          {steps.map((step, index) => {
            const last = index === steps.length - 1;
            return (
              <li key={step.title} className="relative flex gap-4 md:block">
                <div className="relative flex flex-col items-center md:items-start">
                  <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border border-primary/40 bg-secondary/60 badge-glow font-display text-sm text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {!last && (
                    <span
                      className="corridor w-px flex-1 opacity-80 md:hidden"
                      aria-hidden="true"
                    />
                  )}
                </div>

                {!last && (
                  <span
                    className="absolute left-6 right-[-3rem] top-6 hidden h-px md:block"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(to right, color-mix(in oklab, var(--glow) 32%, transparent), color-mix(in oklab, var(--glow) 10%, transparent))",
                    }}
                  />
                )}

                <div
                  className={`min-w-0 md:pt-6 ${
                    last ? "md:pb-0" : "pb-10 md:pb-0 md:pr-6"
                  }`}
                >
                  <h3 className="font-display leading-tight tracking-tight text-foreground text-base sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

const TELEGRAM_URL = "https://t.me/alypol_0_0";
const EMAIL_ADDRESS = "aopolyakova89@gmail.com";

function Cta() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-4 overflow-hidden bg-background px-4 pt-6 pb-12 sm:px-6 sm:pt-10 sm:pb-20"
    >
      <div className="absolute inset-0 hero-grid opacity-30" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-px"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in oklab, var(--glow) 40%, transparent), transparent)",
        }}
      />
      <div
        className="absolute inset-y-0 left-[12%] hidden w-px corridor lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-[12%] hidden w-px corridor lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <span className="badge-glow text-glow mx-auto mb-8 grid size-16 place-items-center rounded-full border border-primary/40 bg-secondary/60 text-primary/90 [&_svg]:size-8">
          <Send />
        </span>

        <h2 className="font-display uppercase leading-tight tracking-tight text-foreground text-3xl sm:text-4xl lg:text-5xl">
          Обсудим <span className="text-primary text-glow">ваш проект</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
          Напишите удобным способом — отвечу и предложу формат работы.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 font-display text-xs tracking-widest text-primary-foreground transition-all duration-200 hover:shadow-[0_0_32px_color-mix(in_oklab,var(--glow)_45%,transparent)] sm:w-auto sm:text-sm"
          >
            Написать в Telegram
            <Send className="size-4" />
          </a>
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-primary/40 bg-secondary/50 px-8 py-4 font-display text-xs tracking-widest text-foreground transition-colors duration-200 hover:bg-accent hover:text-primary sm:w-auto sm:text-sm"
          >
            Написать на Email
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
