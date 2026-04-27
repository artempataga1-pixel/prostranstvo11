import Link from "next/link";
import CountUp from "../../components/CountUp";
import { GlowCard } from "../../components/GlowCard";
import { DeferredCube3D } from "../../components/DeferredSceneMounts";

const FONT = "Helvetica Neue, Helvetica, Arial, sans-serif";

const sectionStyle = {
  position: "relative" as const,
  width: "100%",
  minHeight: "100svh",
  overflow: "clip",
};

const deferredSectionStyle = {
  contentVisibility: "auto" as const,
  containIntrinsicSize: "1000px",
};

const metrics = [
  { value: "13", label: "этапов внедрения" },
  { value: "100%", label: "цифровизация" },
  { value: "1 нед", label: "обучение команды" },
];

const steps1c = [
  { num: "01", title: "Аудит бизнес-модели", desc: "Оценка бизнес-модели и всех бизнес-процессов компании", color: "#0ABAB5" },
  { num: "02", title: "Регламентирование", desc: "Регламентирование бизнес-процессов", color: "#0ABAB5" },
  { num: "03", title: "Схема документооборота", desc: "Формирование оптимальной схемы движения документов в 1С для корректной отчётности и минимальных трудозатрат", color: "#0ABAB5" },
  { num: "04", title: "Подбор версии 1С", desc: "Подбор оптимальной версии 1С УНФ под задачи бизнеса", color: "#38bdf8" },
  { num: "05", title: "База данных", desc: "Создание базы данных и резервной копии", color: "#38bdf8" },
  { num: "06", title: "Серверное размещение", desc: "Размещение 1С на собственных серверах", color: "#38bdf8" },
  { num: "07", title: "Номенклатура", desc: "Заведение всей товарной номенклатуры и спецификаций", color: "#38bdf8" },
  { num: "08", title: "Настройка документов", desc: "Настройка документов для корректного учёта данных", color: "#a78bfa" },
  { num: "09", title: "Отчётность", desc: "Введение отчётности для оцифровки бизнес-процессов", color: "#a78bfa" },
  { num: "10", title: "Обучение персонала", desc: "Обучение персонала циклу ведения 1С", color: "#a78bfa" },
  { num: "11", title: "Работа с ошибками", desc: "Обучение возможным ошибкам в отчётах: отрицательные остатки, спецификации", color: "#a78bfa" },
  { num: "12", title: "Регламенты ролей", desc: "Предоставление персонализированных регламентов по ведению каждого документа в 1С", color: "#a78bfa" },
  { num: "13", title: "Поддержка месяц", desc: "Сопровождение в течение месяца по всем возникшим вопросам и проблемам", color: "#4ade80" },
];


export default function CaseAutomation1CPage() {
  return (
    <>
    <div
      className="case1c-hero"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #071518 0%, #0a1f22 50%, #071518 100%)",
        fontFamily: FONT,
        color: "#fff",
        position: "relative",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          background: "rgba(10,186,181,0.92)",
          borderBottom: "1px solid rgba(10,186,181,0.15)",
          padding: "20px clamp(20px, 5vw, 80px)",
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        <Link
          href="/#cases"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "rgba(7,21,24,0.85)",
            textDecoration: "none",
            fontSize: 14,
            letterSpacing: "0.05em",
            fontWeight: 500,
          }}
        >
          ← Назад
        </Link>
        <span style={{ color: "rgba(7,21,24,0.35)", fontSize: 14 }}>/</span>
        <span style={{ color: "rgba(7,21,24,0.55)", fontSize: 14 }}>Кейсы</span>
        <span style={{ color: "rgba(7,21,24,0.35)", fontSize: 14 }}>/</span>
        <span style={{ color: "rgba(7,21,24,0.8)", fontSize: 14 }}>1С УНФ + ТСД</span>
      </header>

      <main className="case1c-hero-main" style={{ padding: "clamp(40px, 8vh, 100px) clamp(20px, 5vw, 80px)", maxWidth: 1100, margin: "0 auto" }}>
        <p
          className="case1c-hero-kicker"
          style={{
            fontSize: "clamp(10px, 0.9vw, 13px)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#0ABAB5",
            marginBottom: 16,
          }}
        >
          Автоматизация · Фулфилмент-склад
        </p>

        <h1
          className="case1c-hero-title"
          style={{
            fontWeight: 400,
            fontSize: "clamp(40px, 6vw, 96px)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            margin: "0 0 clamp(24px, 4vh, 48px)",
            background: "linear-gradient(135deg, #ffffff 0%, #0ABAB5 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          1С УНФ + ТСД
        </h1>

        <p
          className="case1c-hero-desc"
          style={{
            fontSize: "clamp(16px, 1.5vw, 20px)",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.7,
            maxWidth: 680,
            marginBottom: "clamp(40px, 6vh, 80px)",
          }}
        >
          Внедрение 1С Управление нашей фирмой совместно с терминалами сбора данных для фулфилмент-центра: 13 этапов автоматизации, 100% цифровизация склада.
        </p>

        <div
          className="case1c-hero-metrics"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(12px, 2vw, 24px)",
            marginBottom: "clamp(50px, 8vh, 100px)",
            maxWidth: 600,
          }}
        >
          {metrics.map((m, i) => (
            <GlowCard key={i} glowColor="teal" style={{ padding: "clamp(20px, 3vh, 32px) 16px", background: "rgba(10,186,181,0.05)", borderRadius: 16, textAlign: "center" as const }}>
              <div className="card-num" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#0ABAB5", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 }}>
                {m.value}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>{m.label}</div>
            </GlowCard>
          ))}
        </div>

      </main>
      <div className="case1c-hero-fade" aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "clamp(220px,26vw,320px)", background: "linear-gradient(to bottom,rgba(13,31,31,0) 0%,rgba(13,31,31,0) 55%,rgba(13,31,31,0.12) 68%,rgba(13,31,31,0.38) 80%,rgba(13,31,31,0.72) 92%,rgb(13,31,31) 100%)", pointerEvents: "none", zIndex: 5 }} />
    </div>

    {/* Case1CIntroSection */}
    <section style={{ ...sectionStyle, ...deferredSectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#0d1f1f" }}>
      <div style={{ position: "absolute", right: "-8vw", top: "10vh", width: "55vw", height: "55vw", background: "radial-gradient(circle, rgba(10,186,181,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "-5vw", bottom: "0", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(10,186,181,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "clamp(30px, 5.56vh, 60px)", right: "3.125vw", display: "flex", alignItems: "center", padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)", borderRadius: "300px", background: "rgba(10,186,181,0.12)", border: "1px solid rgba(10,186,181,0.3)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }}>
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#0ABAB5", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
          кейсы  •  1С УНФ
        </p>
      </div>
      <h2 style={{ position: "absolute", left: "3.125vw", top: "clamp(30px, 5.65vh, 61px)", width: "min(50vw, 960px)", fontFamily: FONT, fontWeight: 400, fontSize: "clamp(28px, 4.688vw, 90px)", lineHeight: 1.05, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "pre-line" }}>
        {"Внедрение\n1С УНФ + ТСД\nдля фулфилмента"}
      </h2>
      <p style={{ position: "absolute", left: "3.125vw", top: "clamp(270px, 38vh, 420px)", width: "min(44vw, 840px)", fontFamily: FONT, fontWeight: 400, fontSize: "clamp(12px, 1.563vw, 30px)", lineHeight: 1.35, letterSpacing: "-0.025em", color: "rgba(255,255,255,0.45)", margin: 0 }}>
        Полный цикл внедрения операционной системы управления складом: от аудита бизнес‑процессов до обучения персонала и месячного сопровождения
      </p>
      <div style={{ position: "absolute", right: "clamp(20px, 3vw, 60px)", top: "50%", transform: "translateY(-50%)", width: "clamp(280px, 43vw, 820px)", height: "clamp(280px, 43vw, 820px)", pointerEvents: "none" }}>
        <DeferredCube3D />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "clamp(220px,26vw,320px)", background: "linear-gradient(to bottom,rgba(7,21,24,0) 0%,rgba(7,21,24,0) 55%,rgba(7,21,24,0.12) 68%,rgba(7,21,24,0.38) 80%,rgba(7,21,24,0.72) 92%,rgb(7,21,24) 100%)", pointerEvents: "none", zIndex: 5 }} />
      <div style={{ position: "absolute", bottom: "clamp(36px, 6.67vh, 72px)", left: "3.125vw", display: "flex", gap: "clamp(24px, 5.21vw, 100px)", alignItems: "flex-end" }}>
        {[
          { value: <CountUp value={13} duration={2000} />, label: "этапов внедрения" },
          { value: "1С", label: "УНФ + ТСД система" },
          { value: <CountUp value={100} suffix="%" duration={2000} />, label: "цифровизация склада" },
        ].map(({ value, label }) => (
          <div key={label}>
            <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(28px, 4.167vw, 80px)", lineHeight: 1, letterSpacing: "-0.04em", color: "#0ABAB5", margin: "0 0 clamp(4px, 0.56vh, 6px) 0" }}>
              {value}
            </p>
            <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(10px, 1.04vw, 20px)", lineHeight: 1.2, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.4)", margin: 0 }}>
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* Case1CStepsSection */}
    <section className="case1c-steps-section" style={{ ...deferredSectionStyle, position: "relative", width: "100%", backgroundColor: "#071518", padding: "clamp(50px, 7vh, 80px) clamp(20px, 5vw, 80px) clamp(60px, 8vh, 100px)" }}>
      <div style={{ position: "absolute", right: "-6vw", top: "5vh", width: "55vw", height: "55vw", background: "radial-gradient(circle, rgba(10,186,181,0.09) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "-5vw", bottom: "0", width: "35vw", height: "35vw", background: "radial-gradient(circle, rgba(10,186,181,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="case1c-steps-heading" style={{ display: "flex", alignItems: "baseline", gap: "clamp(12px, 1.5vw, 28px)", marginBottom: "clamp(32px, 4vh, 52px)" }}>
          <h2 className="case1c-steps-title" style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(28px, 4.167vw, 80px)", lineHeight: 0.9, letterSpacing: "-0.04em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}>
            Как это работает
          </h2>
          <p className="case1c-steps-kicker" style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(11px, 1.25vw, 24px)", letterSpacing: "-0.02em", color: "rgba(255,255,255,0.3)", margin: 0 }}>
            1С УНФ + ТСД · 13 этапов
          </p>
        </div>
        <div className="case1c-steps-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(8px, 1.04vw, 16px)" }}>
          {steps1c.map(({ num, title, desc, color }) => (
            <GlowCard className="case1c-step-card" key={num} glowColor="teal" style={{ background: "rgba(255,255,255,0.03)", borderRadius: "clamp(12px, 1.25vw, 24px)", padding: "clamp(16px, 2.22vh, 28px) clamp(16px, 1.46vw, 28px)", display: "flex", flexDirection: "column" as const, gap: "clamp(10px, 1.5vh, 16px)", boxSizing: "border-box" as const }}>
              <span className="case1c-step-num" style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(22px, 2.5vw, 48px)", lineHeight: 1, letterSpacing: "-0.05em", color, opacity: 0.6 }}>{num}</span>
              <div>
                <p className="case1c-step-title" style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(15px, 1.4vw, 26px)", lineHeight: 1.15, letterSpacing: "-0.03em", color: "#fff", margin: "0 0 clamp(4px,0.56vh,8px)" }}>{title}</p>
                <p className="case1c-step-desc" style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(12px, 1.0vw, 18px)", lineHeight: 1.45, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.45)", margin: 0 }}>{desc}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="case-result-section" style={{ background: "#071518", padding: "clamp(60px, 10vh, 120px) clamp(20px, 5vw, 80px)", fontFamily: FONT }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: "clamp(40px, 7vh, 80px)" }}>
          <p style={{ fontSize: "clamp(10px, 0.9vw, 13px)", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#0ABAB5", marginBottom: 16 }}>
            Результат
          </p>
          <p style={{ fontSize: "clamp(15px, 1.3vw, 18px)", color: "rgba(255,255,255,0.8)", lineHeight: 1.8, maxWidth: 800 }}>
            Склад перешёл от бумажного учёта к полностью цифровому за 3 недели. Скорость обработки заказов выросла в 2.5 раза. Ошибки при сборке заказов снизились с 4.2% до 0.3%. Инвентаризация, которая ранее занимала 3 дня, теперь проводится за 4 часа. Команда из 15 человек освоила систему за 1 неделю обучения.
          </p>
        </div>
        <div style={{ textAlign: "center" as const }}>
          <h2 style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 400, fontSize: "clamp(28px, 3vw, 56px)", color: "#fff", letterSpacing: "-0.035em", marginBottom: 16 }}>
            Хотите такой же результат?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(14px, 1.3vw, 20px)", marginBottom: 40 }}>
            Оставьте заявку — разберём ваш бизнес и предложим план роста
          </p>
          <Link href="/form" className="case-cta-btn" style={{ display: "inline-block", padding: "16px 48px", background: "#0ABAB5", borderRadius: 12, color: "#071518", fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 16, fontWeight: 500, textDecoration: "none", letterSpacing: "-0.02em", transition: "box-shadow 0.3s ease, transform 0.2s ease" }}>
            Получить такой же результат →
          </Link>
        </div>
      </div>
    </section>
    <style>{`
      .case-cta-btn:hover {
        box-shadow: 0 0 0 2px rgba(10,186,181,0.4), 0 0 30px rgba(10,186,181,0.5), 0 10px 40px rgba(10,186,181,0.3);
        transform: translateY(-2px);
      }

      @media (max-width: 900px) {
        .case1c-hero {
          min-height: auto !important;
        }

        .case1c-hero-main {
          padding: 32px 20px 56px !important;
        }

        .case1c-hero-kicker {
          margin-bottom: 12px !important;
        }

        .case1c-hero-title {
          margin-bottom: 20px !important;
        }

        .case1c-hero-desc {
          margin-bottom: 28px !important;
        }

        .case1c-hero-metrics {
          gap: 10px !important;
          margin-bottom: 0 !important;
        }

        .case1c-hero-fade {
          height: 160px !important;
        }

        .case1c-steps-section {
          padding: 32px 20px 48px !important;
        }

        .case1c-steps-heading {
          flex-direction: column;
          align-items: flex-start !important;
          gap: 6px !important;
          margin-bottom: 20px !important;
        }

        .case1c-steps-title {
          white-space: normal !important;
        }

        .case1c-steps-grid {
          grid-template-columns: 1fr !important;
          gap: 10px !important;
        }

        .case1c-step-card {
          padding: 16px !important;
          gap: 10px !important;
        }

        .case1c-step-num {
          font-size: 28px !important;
        }

        .case1c-step-title {
          font-size: 16px !important;
          line-height: 1.2 !important;
        }

        .case1c-step-desc {
          font-size: 13px !important;
          line-height: 1.45 !important;
        }
      }
    `}</style>
    </>
  );
}
