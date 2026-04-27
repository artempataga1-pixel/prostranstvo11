import type { ImgHTMLAttributes } from "react";
import Image from "next/image";
import InfinityMark from "./InfinityMark";
import { FadeIn } from "./FadeIn";
import { GlowCard } from "./GlowCard";

function Img({ src, alt = "", loading, decoding = "async", fetchPriority, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  if (!src) return null;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} loading={loading ?? (fetchPriority === "high" ? "eager" : "lazy")} decoding={decoding} fetchPriority={fetchPriority} {...props} />;
}

const sectionStyle = {
  position: "relative" as const,
  width: "100%",
  minHeight: "100svh",
  overflow: "clip",
};

const deferredSectionStyle = {
  ...sectionStyle,
  contentVisibility: "auto" as const,
  containIntrinsicSize: "1000px",
};

const SERVICES_VECTOR1_IMG = "";
const SERVICES_VECTOR2_IMG = "";

// Figma node: 2040:188 "Услуги — управление кабинетами" — file MOHJ9F1OX9kaB0rKsCZm7i
const MGMT_ELLIPSE_IMG = "/figma-assets/mgmt-ellipse.svg";
const MGMT_GROUP_IMG = "/figma-assets/mgmt-group.svg";
const MGMT_AVATAR1_IMG = "/figma-assets/mgmt-avatar1.png"; // Ozon
const MGMT_AVATAR2_IMG = "/figma-assets/mgmt-avatar2.png"; // WB
const MGMT_AVATAR3_IMG = "/figma-assets/mgmt-avatar3.png"; // Маркет

// Figma node: 2040:389 "Услуги — Подбор и развитие команды" — file MOHJ9F1OX9kaB0rKsCZm7i

// Figma node: 2040:411 "Услуги — Постоянная работа с командой" — file MOHJ9F1OX9kaB0rKsCZm7i
const HRTEAM_GRAPH_IMG = "/figma-assets/hrteam-graph.svg";
const HRTEAM_DOTLINE_IMG = "/figma-assets/hrteam-dotline.svg";
const HRTEAM_DOTLINE1_IMG = "/figma-assets/hrteam-dotline1.svg";
const HRTEAM_DOTLINE2_IMG = "/figma-assets/hrteam-dotline2.svg";

// Figma node: 2040:255 "Услуги — Внешние каналы продаж" — file MOHJ9F1OX9kaB0rKsCZm7i
const EXT_ELLIPSE_IMG = "/figma-assets/ext-ellipse.svg";
const EXT_GROUP_IMG = "/figma-assets/ext-group.svg";

// Figma node: 2040:648 "Услуги — Внедрение AI-агентов" — pure CSS lines, no images

// Figma node: 2040:162 "Услуги — аудит кабинета" — no image assets

// Figma node: 2040:326 "Услуги — Подбор новинок" — file MOHJ9F1OX9kaB0rKsCZm7i
const PODBOR_ELLIPSE_IMG = "";
const PODBOR_LINE1_IMG = "";
const PODBOR_LINE2_IMG = "";
const PODBOR_PRO_IMG = "";

const PODBOR_PRESENTATION_TEXT =
  "Анализ ниши, конкурентов, юнит-экономики, рисков, потенциала прибыли и плана запуска.";

const PODBOR_WORK_STEPS = [
  "Оцениваем спрос и конкуренцию",
  "Считаем экономику и риски",
  "Определяем потенциал прибыли",
  "Даем стратегию запуска",
];

function AiVerticalLine({
  direction,
  height,
}: {
  direction: "down" | "up";
  height: string;
}) {
  return (
    <div
      style={{
        width: 2,
        height,
        flexShrink: 0,
        borderRadius: 2,
        background:
          direction === "down"
            ? "linear-gradient(to bottom, rgba(11,186,181,0.15), rgba(11,186,181,0.9))"
            : "linear-gradient(to top, rgba(11,186,181,0.15), rgba(11,186,181,0.9))",
      }}
    />
  );
}

// ── КЕЙС: 1С УНФ + ТСД ─────────────────────────────────────────────────────


function ServicesSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  return (
    <section
      className="split-section services-intro-section"
      style={{
        ...deferredSectionStyle,
        minHeight: "clamp(72px, 12svh, 140px)",
        height: "clamp(72px, 12svh, 140px)",
        background: "rgb(15, 5, 14)",
      }}
    >
      {/* Vector blob 1 — Figma: left:-999, top:-532, w:2349, h:1943 */}
      <div style={{ position: "absolute", left: "-52.03vw", top: "-49.26vh", width: "122.34vw", height: "179.91vh", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "5.17%", right: "1.3%", bottom: "0.77%", left: "4.41%" }}>
          { }
          <Img alt="" src={SERVICES_VECTOR1_IMG} style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
        </div>
      </div>

      {/* Vector blob 2 — Figma: left:431, top:-1252, w:2349, h:1943 */}
      <div style={{ position: "absolute", left: "22.45vw", top: "-115.93vh", width: "122.34vw", height: "179.91vh", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "5.17%", right: "1.3%", bottom: "0.77%", left: "4.41%" }}>
          { }
          <Img alt="" src={SERVICES_VECTOR2_IMG} style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
        </div>
      </div>

      {/* Blur-оверлей на всю секцию — заменяет 43 отдельных div с backdrop-filter.
          43 отдельных GPU-слоя → 1 слой. Визуал идентичен: полосы без зазоров
          покрывали 100% ширины, поэтому один элемент даёт тот же результат. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(10,186,181,0.03) 24%, rgba(255,255,255,0.016) 52%, rgba(255,0,230,0.02) 80%, rgba(255,255,255,0) 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* "Услуги" — Figma: left:calc(50%-871px), top:484, font:580px, gradient text */}
      <p
        className="svc-title-text"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: font,
          fontWeight: 400,
          fontSize: "clamp(24px, 6vw, 92px)",
          lineHeight: 0.86,
          letterSpacing: "-0.04em",
          background: "linear-gradient(179.1deg, rgba(255,0,230,0.25) 13.03%, rgb(255,255,255) 135.21%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
          margin: 0,
          whiteSpace: "nowrap",
          width: "100%",
          padding: "0 clamp(48px, 10vw, 140px)",
          boxSizing: "border-box",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        Услуги
      </p>

      {/* Infinity logo — animated */}
      <div className="svc-infinity" style={{ position: "absolute", right: "clamp(18px, 3.125vw, 60px)", top: "50%", transform: "translateY(-50%)", width: "clamp(38px, 6vw, 116px)", height: "clamp(20px, 3vw, 58px)", pointerEvents: "none", zIndex: 2 }}>
                  <InfinityMark />
      </div>
      {/* Переход -> ServicesManagementSection #D400AA */}
    </section>
  );
}

// Figma node: 2040:565 "Кейс — Кресла ВБ скриншот" — file MOHJ9F1OX9kaB0rKsCZm7i

function ServicesAuditSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  const innerCardStyle: React.CSSProperties = {
    background: "rgba(18,18,18,0.3)",
    borderRadius: "clamp(10px, 1.5625vw, 30px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "clamp(12px, 1.25vw, 24px) clamp(12px, 1.25vw, 24px) clamp(16px, 1.667vw, 32px)",
    flex: "1 0 0",
    minWidth: 0,
    height: "clamp(160px, 29.54vh, 319px)",
    boxSizing: "border-box",
  };
  return (
    <section
      className="split-section audit-section"
      style={{
        ...deferredSectionStyle,
        minHeight: "max(100svh, 760px)",
        background: "linear-gradient(202.23deg, rgb(13, 31, 31) 15.55%, rgb(56, 133, 133) 99.342%)",
      }}
    >
      {/* Badge "АУДИТ КАБИНЕТА" — Figma: right:1618px ≈ left:60px, top:63px */}
      <div
        className="audit-badge"
        style={{
          position: "absolute",
          left: "3.125vw",
          top: "clamp(30px, 5.83vh, 63px)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)",
          borderRadius: "300px",
          background: "rgba(69,69,69,0.3)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
        }}
      >
        <p
          style={{
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(10px, 1.302vw, 25px)",
            lineHeight: 1,
            letterSpacing: "-0.035em",
            color: "#ffffff",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            margin: 0,
          }}
        >
          аудит кабинета
        </p>
      </div>

      {/* Heading — Figma: left:60 top:133 font:100px tracking:-3.5px w:828px */}
      <p
        className="audit-heading"
        style={{
          position: "absolute",
          left: "3.125vw",
          top: "clamp(60px, 12.31vh, 133px)",
          width: "clamp(240px, 43.125vw, 828px)",
          fontFamily: font,
          fontWeight: 400,
          fontSize: "clamp(32px, 5.208vw, 100px)",
          lineHeight: 0.9,
          letterSpacing: "-0.035em",
          color: "#ffffff",
          margin: 0,
        }}
      >
        Находим точки роста за 3 дня
      </p>

      {/* Description — Figma: left:60 top:808 font:45px tracking:-1.575px w:730px */}
      <p
        className="audit-description"
        style={{
          position: "absolute",
          left: "3.125vw",
          top: "clamp(480px, 74.81vh, 808px)",
          width: "clamp(200px, 38.02vw, 730px)",
          fontFamily: font,
          fontWeight: 400,
          fontSize: "clamp(15px, 2.34vw, 45px)",
          lineHeight: 1,
          letterSpacing: "-0.035em",
          color: "#ffffff",
          margin: 0,
        }}
      >
        Вы получаете документ с рекомендациями: что исправить в первую очередь, какой рост это даст в цифрах, план внедрения на 30 дней
      </p>

      {/* Right card — Figma: left:970 top:60 w:890 h:960 bg:rgba(18,18,18,0.3) p:48 r:60 */}
      <div
        className="audit-right-card"
        style={{
          position: "absolute",
          right: "3.125vw",
          top: "clamp(30px, 5.56vh, 60px)",
          width: "clamp(280px, 46.35vw, 890px)",
          height: "clamp(480px, 88.89vh, 960px)",
          background: "rgba(18,18,18,0.3)",
          borderRadius: "clamp(20px, 3.125vw, 60px)",
          overflow: "hidden",
          boxSizing: "border-box",
          padding: "clamp(20px, 2.5vw, 48px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* "Проверяем" — Figma: font:75px tracking:-2.625px */}
        <p
          style={{
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(24px, 3.906vw, 75px)",
            lineHeight: 0.9,
            letterSpacing: "-0.035em",
            color: "#ffffff",
            margin: 0,
            whiteSpace: "nowrap",
            transform: "translateY(-8px)",
          }}
        >
          Проверяем
        </p>

        {/* 2×2 grid of inner cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(6px, 0.625vw, 12px)", width: "100%" }}>
          {/* Row 1 */}
          <div style={{ display: "flex", gap: "clamp(6px, 0.625vw, 12px)" }}>
            <GlowCard className="audit-inner-card" style={innerCardStyle}>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(9px, 1.25vw, 24px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.3, margin: 0, whiteSpace: "nowrap" }}>
                CTR, конверсия, позиции
              </p>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(20px, 3.333vw, 64px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}>
                Воронка
              </p>
            </GlowCard>
            <GlowCard className="audit-inner-card" style={innerCardStyle}>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(9px, 1.25vw, 24px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.3, margin: 0 }}>
                Эффективность<br />кампаний
              </p>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(20px, 3.333vw, 64px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}>
                Реклама
              </p>
            </GlowCard>
          </div>
          {/* Row 2 */}
          <div style={{ display: "flex", gap: "clamp(6px, 0.625vw, 12px)" }}>
            <GlowCard className="audit-inner-card" style={innerCardStyle}>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(9px, 1.25vw, 24px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.3, margin: 0 }}>
                Себестоимость,<br />маржинальность
              </p>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(20px, 3.333vw, 64px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}>
                Финансы
              </p>
            </GlowCard>
            <GlowCard className="audit-inner-card" style={innerCardStyle}>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(9px, 1.25vw, 24px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.3, margin: 0, whiteSpace: "nowrap" }}>
                Качество карточек
              </p>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(20px, 3.333vw, 64px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}>
                Контент
              </p>
            </GlowCard>
          </div>
        </div>
      </div>
      {/* Переход -> ServicesExternalSection #0ABAB5 */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "clamp(220px,26vw,320px)",
          background:
            "linear-gradient(to bottom,rgba(212,0,170,0) 0%,rgba(212,0,170,0) 55%,rgba(212,0,170,0.12) 68%,rgba(212,0,170,0.38) 80%,rgba(212,0,170,0.72) 92%,rgb(212,0,170) 100%)",
          pointerEvents: "none",
          zIndex: 5,
        }}
      />
    </section>
  );
}

// Figma node: 2040:255 "Услуги — Внешние каналы продаж" — file MOHJ9F1OX9kaB0rKsCZm7i
function ServicesExternalSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  const bullets = [
    "Настраиваем магазины\nв Яндекс Кит и Авито",
    "Разрабатываем собственный сайт",
    "Развиваем социальные сети",
    "Настраиваем воронки продаж",
  ];
  return (
    <section className="split-section ext-section" style={{ ...deferredSectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#0ABAB5" }}>

      {/* Ellipse blob — Figma: left:-395 top:-1055 size:2756, inset:-3.63% */}
      <div style={{ position: "absolute", left: "-20.57vw", top: "-97.69vh", width: "143.54vw", height: "143.54vw", pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: "-3.63%" }}>
          { }
          <Img alt="" src={EXT_ELLIPSE_IMG} style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
        </div>
      </div>

      {/* Group blob — Figma: left:-158 top:-342 w:1853 h:1854, inset:-6.47%/-6.48% */}
      <div style={{ position: "absolute", left: "-8.23vw", top: "-31.67vh", width: "96.51vw", height: "171.67vh", pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: "-6.47% -6.48%" }}>
          { }
          <Img alt="" src={EXT_GROUP_IMG} style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
        </div>
      </div>

      {/* Horizontal blur band — top:0 h:745 bg:rgba(255,255,255,0.1) blur:50px */}
      <div className="ext-blur-band" style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "80vh", background: "linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 75%, transparent 100%)", backdropFilter: "blur(50px)", WebkitBackdropFilter: "blur(50px)", pointerEvents: "none", zIndex: 1 }} />

      {/* Vertical stripe overlay — CSS repeating gradient, 43px bands + 2px gap */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.10) 0px, rgba(255,255,255,0.10) 43px, rgba(0,0,0,0.06) 43px, rgba(0,0,0,0.06) 45px)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Badge "ВНЕШНИЕ КАНАЛЫ ПРОДАЖ" — left:60 top:60 */}
      <div style={{ position: "absolute", left: "3.125vw", top: "clamp(30px, 5.56vh, 60px)", display: "flex", alignItems: "center", padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)", borderRadius: "300px", background: "rgba(69,69,69,0.3)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)", zIndex: 3 }}>
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
          внешние каналы продаж
        </p>
      </div>

      {/* White info card — Figma: left:1125 top:60 container w:735 h:960 */}
      <div className="ext-white-card" style={{
        position: "absolute",
        right: "3.125vw",
        top: "clamp(30px, 5.56vh, 60px)",
        width: "clamp(240px, 38.28vw, 735px)",
        height: "clamp(440px, 88.89vh, 960px)",
        backgroundColor: "#ffffff",
        borderRadius: "clamp(12px, 1.5625vw, 30px)",
        overflow: "hidden",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "clamp(20px, 3.125vw, 60px)",
        zIndex: 3,
      }}>
        {/* Bullet timeline — 3 animated vertical beams between 4 circles */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {bullets.map((text, i) => (
            <div key={i} style={{ display: "flex", gap: "clamp(10px, 1.302vw, 25px)", alignItems: "flex-start" }}>
              {/* Circle + animated beam below */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                {/* Animated dot */}
                <div style={{
                  width: "clamp(10px, 1.04vw, 18px)",
                  height: "clamp(10px, 1.04vw, 18px)",
                  borderRadius: "50%",
                  border: "2px solid #0bbab5",
                  background: "#ffffff",
                  flexShrink: 0,
                  marginTop: 2,
                  position: "relative",
                  zIndex: 1,
                  animationName: `ext-dot-${i + 1}`,
                  animationDuration: "5s",
                  animationTimingFunction: "ease-out",
                  animationIterationCount: "infinite",
                }} />
                {/* Vertical line with traveling beam */}
                {i < bullets.length - 1 && (
                  <div style={{
                    width: "2px",
                    height: "clamp(40px, 9.26vh, 100px)",
                    background: "rgba(10,186,181,0.15)",
                    marginTop: "4px",
                    position: "relative",
                    overflow: "visible",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: "-1px",
                      top: 0,
                      width: "4px",
                      height: "100%",
                      background: "linear-gradient(to bottom, rgba(10,186,181,0) 0%, #0ABAB5 50%, #c0faf8 85%, #ffffff 100%)",
                      filter: "drop-shadow(0 0 4px rgba(10,186,181,0.9)) drop-shadow(0 0 10px rgba(10,186,181,0.5))",
                      transformOrigin: "top center",
                      animationName: `ext-vbeam-${i + 1}`,
                      animationDuration: "5s",
                      animationTimingFunction: "ease-in-out",
                      animationIterationCount: "infinite",
                    }} />
                  </div>
                )}
              </div>
              {/* Text */}
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(12px, 1.823vw, 35px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#0d1f1f", opacity: 0.5, margin: 0, whiteSpace: "pre-line", paddingBottom: i < bullets.length - 1 ? "clamp(10px, 2.78vh, 30px)" : 0 }}>
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Result section */}
        <div>
          <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(11px, 1.823vw, 35px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#0d1f1f", opacity: 0.3, margin: "0 0 0.3em 0" }}>
            Результат
          </p>
          <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(16px, 2.34vw, 45px)", lineHeight: 0.9, letterSpacing: "-0.035em", color: "#0d1f1f", margin: 0 }}>
            Снижение зависимости от маркетплейсов и рост продаж
          </p>
        </div>
      </div>

      {/* Heading — Figma: left:60 top:859 font:100px w:1037 */}
      <p className="ext-heading" style={{ position: "absolute", left: "3.125vw", top: "clamp(500px, 72vh, 800px)", width: "clamp(260px, 54.01vw, 1037px)", fontFamily: font, fontWeight: 400, fontSize: "clamp(30px, 5.208vw, 100px)", lineHeight: 0.9, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, zIndex: 3 }}>
        Выход за пределы маркетплейсов
      </p>
      {/* Переход → TeamSection rgb(13,31,31) */}
      <div className="ext-transition-fade" aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "clamp(280px,32vw,420px)", background: "linear-gradient(to bottom,rgba(13,31,31,0) 0%,rgba(13,31,31,0) 55%,rgba(13,31,31,0.12) 68%,rgba(13,31,31,0.38) 80%,rgba(13,31,31,0.72) 92%,rgb(13,31,31) 100%)", pointerEvents: "none", zIndex: 5 }} />
    </section>
  );
}

// Figma node: 2040:648 "Услуги — Внедрение AI-агентов" — file MOHJ9F1OX9kaB0rKsCZm7i
function ServicesAiSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  const barGradient = "linear-gradient(90deg, #055452, #0bbab5)";
  const lineH = "clamp(90px, 18.06vh, 195px)";
  const labelFont: React.CSSProperties = {
    fontFamily: font, fontWeight: 400,
    fontSize: "clamp(13px, 1.823vw, 35px)", lineHeight: 1,
    letterSpacing: "-0.035em", color: "#ffffff", margin: 0,
    width: "clamp(120px, 19.9vw, 382px)",
  };
  return (
    <section className="split-section ai-section" style={{ ...deferredSectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#0d1f1f" }}>

      {/* Infinity logo — animated */}
      <div className="ai-infinity-wrapper" style={{ position: "absolute", left: "2.76vw", top: "5vh", width: "clamp(50px, 6.094vw, 117px)", height: "clamp(26px, 5.56vh, 60px)", pointerEvents: "none" }}>
              <InfinityMark />
      </div>

      {/* Badge — right:60 top:60 */}
      <div style={{ position: "absolute", right: "3.125vw", top: "clamp(30px, 5.56vh, 60px)", display: "flex", alignItems: "center", padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)", borderRadius: "300px", background: "rgba(69,69,69,0.3)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }}>
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
          внедрение ИИ-агентов
        </p>
      </div>

      {/* Graph container — Figma: left:60 top:215 w:1800 h:531 */}
      <div className="ai-graph-container" style={{ position: "absolute", left: "3.125vw", top: "clamp(130px, 19.91vh, 215px)", width: "93.75vw", height: "clamp(260px, 49.17vh, 531px)" }}>

        {/* Bars at 40.11% from top, height 19.77% */}
        {/* Bar 1 — left:0% w:25% opacity:0.2, rounded left */}
        <div style={{ position: "absolute", left: "0%", top: "40.11%", width: "25%", height: "19.77%", background: barGradient, opacity: 0.2, borderRadius: "clamp(8px, 1.04vw, 20px) 0 0 clamp(8px, 1.04vw, 20px)" }} />
        {/* Bar 2 — left:25% opacity:0.3 */}
        <div style={{ position: "absolute", left: "25%", top: "40.11%", width: "25%", height: "19.77%", background: barGradient, opacity: 0.3 }} />
        {/* Bar 3 — left:50% opacity:0.6 */}
        <div style={{ position: "absolute", left: "50%", top: "40.11%", width: "25%", height: "19.77%", background: barGradient, opacity: 0.6 }} />
        {/* Bar 4 — left:75% opacity:1, rounded right */}
        <div style={{ position: "absolute", left: "75%", top: "40.11%", width: "25%", height: "19.77%", background: barGradient, borderRadius: "0 clamp(8px, 1.04vw, 20px) clamp(8px, 1.04vw, 20px) 0" }} />

        {/* Label 1 (top, left:0) — "Находим процессы для автоматизации" */}
        <div style={{ position: "absolute", left: "0%", top: 0, display: "flex", gap: "clamp(12px, 1.25vw, 24px)", alignItems: "flex-start" }}>
          <AiVerticalLine direction="down" height={lineH} />
          <p style={labelFont}>Находим процессы<br />для автоматизации</p>
        </div>

        {/* Label 3 (top, left:50%) — "Внедряем в работу команды" */}
        <div style={{ position: "absolute", left: "50%", top: 0, display: "flex", gap: "clamp(12px, 1.25vw, 24px)", alignItems: "flex-start" }}>
          <AiVerticalLine direction="down" height={lineH} />
          <p style={labelFont}>Внедряем в работу команды</p>
        </div>

        {/* Label 2 (bottom, left:25%) — "Подбираем AI-инструменты" */}
        <div style={{ position: "absolute", left: "25%", top: "63.28%", display: "flex", gap: "clamp(12px, 1.25vw, 24px)", alignItems: "flex-end" }}>
          <AiVerticalLine direction="up" height={lineH} />
          <p style={labelFont}>Подбираем AI-инструменты</p>
        </div>

        {/* Label 4 (bottom, left:75%) — "Обучаем сотрудников" */}
        <div style={{ position: "absolute", left: "75%", top: "63.28%", display: "flex", gap: "clamp(12px, 1.25vw, 24px)", alignItems: "flex-end" }}>
          <AiVerticalLine direction="up" height={lineH} />
          <p style={labelFont}>Обучаем сотрудников</p>
        </div>
      </div>

      {/* Heading — left:60 top:859 font:100px w:1453 */}
      <p className="ai-heading" style={{ position: "absolute", left: "3.125vw", top: "clamp(580px, 79.54vh, 859px)", width: "clamp(280px, 75.68vw, 1453px)", fontFamily: font, fontWeight: 400, fontSize: "clamp(28px, 5.208vw, 100px)", lineHeight: 0.9, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "pre-wrap" }}>
        <span style={{ color: "#0bbab5" }}>Автоматизация</span>
        {" \nчерез искусственный интеллект"}
      </p>
      {/* Переход -> ServicesAccountingSection #ffffff */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "clamp(220px,26vw,320px)",
          background:
            "linear-gradient(to bottom,rgba(255,255,255,0) 0%,rgba(255,255,255,0) 55%,rgba(255,255,255,0.12) 68%,rgba(255,255,255,0.38) 80%,rgba(255,255,255,0.72) 92%,rgb(255,255,255) 100%)",
          pointerEvents: "none",
          zIndex: 5,
        }}
      />
    </section>
  );
}

// Figma node: 2040:344 "Услуги — Системы учета" — file MOHJ9F1OX9kaB0rKsCZm7i
function ServicesAccountingSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  const cardStyle: React.CSSProperties = {
    background: "rgba(18,18,18,0.3)",
    borderRadius: "clamp(12px, 1.5625vw, 30px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "clamp(12px, 1.25vw, 24px) clamp(12px, 1.25vw, 24px) clamp(16px, 1.667vw, 32px)",
    flex: "1 0 0",
    minWidth: 0,
    minHeight: 0,
    height: "clamp(200px, 43.89vh, 474px)",
    boxSizing: "border-box" as const,
  };
  const labelStyle: React.CSSProperties = { fontFamily: font, fontWeight: 400, fontSize: "clamp(8px, 1.25vw, 24px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.3, margin: 0, whiteSpace: "pre" };
  const titleStyle: React.CSSProperties = { fontFamily: font, fontWeight: 400, fontSize: "clamp(20px, 3.333vw, 64px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", margin: 0 };
  return (
    <section className="split-section accounting-section" style={{ ...deferredSectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#ffffff" }}>

      {/* Heading — Figma: left:60 top:60 font:100px tracking:-3.5px w:675 color:#0d1f1f */}
      <p className="accounting-heading" style={{ position: "absolute", left: "3.125vw", top: "clamp(30px, 5.56vh, 60px)", width: "clamp(220px, 35.16vw, 675px)", fontFamily: font, fontWeight: 400, fontSize: "clamp(32px, 5.208vw, 100px)", lineHeight: 0.9, letterSpacing: "-0.035em", color: "#0d1f1f", margin: 0 }}>
        Внедряем системы учета
      </p>

      {/* Subtext — Figma: bottom:785px → top:295px left:60px opacity:0.3 font:35px */}
      <p className="accounting-subtext" style={{ position: "absolute", left: "3.125vw", top: "clamp(170px, 27.31vh, 295px)", fontFamily: font, fontWeight: 400, fontSize: "clamp(12px, 1.823vw, 35px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#0d1f1f", opacity: 0.3, margin: 0, whiteSpace: "nowrap" }}>
        CRM, дашборды, автоматизация
      </p>

      {/* Description — Figma: bottom:227px → top:853px left:60px font:45px w:811 */}
      <p className="accounting-description" style={{ position: "absolute", left: "3.125vw", top: "clamp(580px, 79.0vh, 853px)", width: "clamp(200px, 42.24vw, 811px)", fontFamily: font, fontWeight: 400, fontSize: "clamp(14px, 2.34vw, 45px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#0d1f1f", margin: 0 }}>
        Полная картина бизнеса в одном месте: продажи, остатки, финансы, план-факт в реальном времени, автоматические отчёты
      </p>

      {/* Right teal panel — Figma: left:50% top:0 w:960px h:full, gradient #0d1f1f→#388585 */}
      <div className="accounting-panel" style={{ position: "absolute", left: "50%", top: 0, width: "50%", height: "100%", background: "linear-gradient(221.19deg, #0d1f1f 0%, #388585 99.316%)", overflow: "hidden" }}>

        {/* Cards grid — Figma: left:36 top:60 w:864 gap:12 */}
        <div className="accounting-cards-grid" style={{ position: "absolute", left: "3.75%", top: "clamp(30px, 5.56vh, 60px)", width: "90%", display: "flex", flexDirection: "column", gap: "clamp(6px, 0.625vw, 12px)" }}>
          {/* Row 1 */}
          <div style={{ display: "flex", gap: "clamp(6px, 0.625vw, 12px)" }}>
            <GlowCard style={cardStyle}>
              <p style={labelStyle}>{"01 •  Битрикс24, Мой склад"}</p>
              <p style={{ ...titleStyle, whiteSpace: "nowrap" }}>CRM</p>
            </GlowCard>
            <GlowCard style={cardStyle}>
              <p style={labelStyle}>{"02 •  1С, управленческие дашборды "}</p>
              <p style={{ ...titleStyle, whiteSpace: "nowrap" }}>Учет</p>
            </GlowCard>
          </div>
          {/* Row 2 */}
          <div style={{ display: "flex", gap: "clamp(6px, 0.625vw, 12px)" }}>
            <GlowCard style={cardStyle}>
              <p style={labelStyle}>{"03  •  PowerBI, DataLens"}</p>
              <p style={{ ...titleStyle, whiteSpace: "nowrap" }}>Аналитика</p>
            </GlowCard>
            <GlowCard style={cardStyle}>
              <p style={{ ...labelStyle, whiteSpace: "nowrap" }}>04</p>
              <p style={titleStyle}>Интеграции между системами</p>
            </GlowCard>
          </div>
        </div>
      </div>
      {/* Переход -> ServicesExternalSection #0ABAB5 */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "clamp(220px,26vw,320px)",
          background:
            "linear-gradient(to bottom,rgba(10,186,181,0) 0%,rgba(10,186,181,0) 55%,rgba(10,186,181,0.12) 68%,rgba(10,186,181,0.38) 80%,rgba(10,186,181,0.72) 92%,rgb(10,186,181) 100%)",
          pointerEvents: "none",
          zIndex: 5,
        }}
      />
    </section>
  );
}

// Figma node: 2040:188 "Услуги — управление кабинетами" — file MOHJ9F1OX9kaB0rKsCZm7i
function ServicesManagementSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  return (
    <section
      className="split-section sales-section"
      style={{
        ...deferredSectionStyle,
        minHeight: "max(100svh, 760px)",
        backgroundColor: "#D400AA",
      }}
    >
      {/* Ellipse blob — Figma: left:-257 top:-1055 size:2480, inset:-4.03% */}
      <div style={{ position: "absolute", left: "-13.39vw", top: "-97.69vh", width: "129.17vw", height: "129.17vw", pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: "-4.03%" }}>
          { }
          <Img alt="" src={MGMT_ELLIPSE_IMG} style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
        </div>
      </div>

      {/* Group blob — Figma: left:-44 top:-413 size:1668, inset:-7.19% */}
      <div style={{ position: "absolute", left: "-2.29vw", top: "-38.24vh", width: "86.875vw", height: "86.875vw", pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: "-7.19%" }}>
          { }
          <Img alt="" src={MGMT_GROUP_IMG} style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
        </div>
      </div>

      {/* Horizontal blur band — Figma: top:0 h:745 bg:rgba(255,255,255,0.1) blur:50px */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "68.98vh",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(50px)",
          WebkitBackdropFilter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Vertical stripe overlay — CSS repeating gradient, 43px bands + 2px gap */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.10) 0px, rgba(255,255,255,0.10) 43px, rgba(0,0,0,0.08) 43px, rgba(0,0,0,0.08) 45px)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Heading row — Figma: right:60 top:60 w:1800 justify-between */}
      <div
        className="sales-heading-row"
        style={{
          position: "absolute",
          right: "3.125vw",
          top: "clamp(30px, 5.56vh, 60px)",
          width: "93.75vw",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          zIndex: 3,
        }}
      >
        {/* "Отдел продаж под ключ" — font:150px tracking:-5.25px w:1037 */}
        <p
          style={{
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(40px, 7.8125vw, 150px)",
            lineHeight: 0.9,
            letterSpacing: "-0.035em",
            color: "#ffffff",
            width: "clamp(260px, 53.99vw, 1037px)",
            margin: 0,
            flexShrink: 0,
          }}
        >
          Отдел продаж под ключ
        </p>

        {/* Right column: badge + avatar group */}
        <div
          className="sales-icons-col"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "clamp(20px, 4.35vh, 47px)",
            flexShrink: 0,
            width: "clamp(140px, 18.8vw, 361px)",
          }}
        >
          {/* Badge "УПРАВЛЕНИЕ КАБИНЕТАМИ" */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)",
              borderRadius: "300px",
              background: "rgba(69,69,69,0.3)",
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                fontFamily: font,
                fontWeight: 400,
                fontSize: "clamp(8px, 1.302vw, 25px)",
                lineHeight: 1,
                letterSpacing: "-0.035em",
                color: "#ffffff",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                margin: 0,
              }}
            >
              управление кабинетами
            </p>
          </div>

          {/* Avatar group — 3 overlapping 64px circles */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "clamp(2px, 0.37vh, 4px) clamp(10px, 1.25vw, 24px) clamp(2px, 0.37vh, 4px) clamp(2px, 0.21vw, 4px)",
              borderRadius: "300px",
              background: "rgba(69,69,69,0.3)",
              flexShrink: 0,
            }}
          >
            {[
              { src: MGMT_AVATAR1_IMG, bg: "#005BFF" },  // Ozon blue
              { src: MGMT_AVATAR2_IMG, bg: "#7B0EAF" },  // WB purple
              { src: MGMT_AVATAR3_IMG, bg: "#FC3F1D" },  // Маркет orange
            ].map((av, idx) => (
              <div
                key={idx}
                style={{
                  width: "clamp(28px, 3.33vw, 64px)",
                  height: "clamp(28px, 3.33vw, 64px)",
                  borderRadius: "50%",
                  background: av.bg,
                  overflow: "hidden",
                  flexShrink: 0,
                  position: "relative",
                  marginRight: idx < 2 ? "clamp(-8px, -1.04vw, -20px)" : 0,
                  border: idx > 0 ? `clamp(1px, 0.16vw, 3px) solid ${av.bg}` : "none",
                  boxSizing: "border-box",
                }}
              >
                                <Img
                  alt=""
                  src={av.src}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none", maxWidth: "none" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* White bottom panel — Figma: top:703 h:377 bg:white borderRadius:40px top */}
      <div
        className="sales-white-card"
        style={{
          position: "absolute",
          left: 0,
          top: "clamp(440px, 65.09vh, 703px)",
          bottom: 0,
          width: "100%",
          background: "#ffffff",
          borderRadius: "clamp(16px, 2.083vw, 40px) clamp(16px, 2.083vw, 40px) 0 0",
          overflow: "hidden",
          boxSizing: "border-box",
          zIndex: 3,
        }}
      >
        {/* Left description — Figma: left:60 top:66 font:45px w:730 color:#0d1f1f */}
        <p
          className="sales-card-left"
          style={{
            position: "absolute",
            left: "3.125vw",
            top: "clamp(20px, 6.11vh, 66px)",
            width: "clamp(180px, 38.02vw, 730px)",
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(14px, 2.34vw, 45px)",
            lineHeight: 1,
            letterSpacing: "-0.035em",
            color: "#0d1f1f",
            margin: 0,
          }}
        >
          Получаете отдел продаж, который работает на рост прибыли, отчитывается в цифрах, масштабирует успешные решения
        </p>

        {/* Right list — Figma: left:910 top:57 font:35px opacity:0.5 color:#0d1f1f */}
        <div
          className="sales-card-right"
          style={{
            position: "absolute",
            left: "47.4vw",
            top: "clamp(16px, 5.28vh, 57px)",
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(11px, 1.823vw, 35px)",
            lineHeight: 1.2,
            letterSpacing: "-0.035em",
            color: "#0d1f1f",
            opacity: 0.5,
            whiteSpace: "nowrap",
          }}
        >
          <p style={{ margin: 0 }}>Что делаем:</p>
          <p style={{ margin: 0 }}>{"• Аналитика воронки и тестирование гипотез"}</p>
          <p style={{ margin: 0 }}>{"• Контент и реклама"}</p>
          <p style={{ margin: 0 }}>{"• Управление остатками и закупками"}</p>
          <p style={{ margin: 0 }}>{"• Финансовая отчетность P&L"}</p>
          <p style={{ margin: 0 }}>{"• Команда: менеджер, аналитик, дизайнер"}</p>
        </div>
      </div>
      {/* Переход → AiSection rgb(13,31,31) */}
      <div className="sales-transition-fade" aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "clamp(240px,28vw,340px)", background: "linear-gradient(to bottom,rgba(13,31,31,0) 0%,rgba(13,31,31,0) 50%,rgba(13,31,31,0.12) 64%,rgba(13,31,31,0.32) 78%,rgba(13,31,31,0.68) 92%,rgb(13,31,31) 100%)", pointerEvents: "none", zIndex: 5 }} />
    </section>
  );
}

// Figma node: 2040:326 "Услуги — Подбор новинок" — file MOHJ9F1OX9kaB0rKsCZm7i
function ServicesPodborSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  return (
    <>
    <section
      className="split-section podbor-section"
      style={{
        ...deferredSectionStyle,
        minHeight: "max(calc(100svh - 32px), 728px)",
        backgroundColor: "#0f050e",
      }}
    >
      {/* Gray decorative rects behind phone — Figma: #454545, opacity:0.6 */}
      {/* Rect 1: left:calc(50%+137px) top:230 w:571 h:1130 r:30 */}
      <div
        className="podbor-rect-1"
        style={{
          position: "absolute",
          left: "calc(50% + 7.14vw)",
          top: "calc(21.3vh - 32px)",
          width: "29.74vw",
          height: "104.63vh",
          background: "#454545",
          opacity: 0.6,
          borderRadius: "1.5625vw",
          pointerEvents: "none",
        }}
      />
      {/* Rect 2: left:calc(50%+99px) top:267 w:651 h:1130 r:30 */}
      <div
        className="podbor-rect-2"
        style={{
          position: "absolute",
          left: "calc(50% + 5.16vw)",
          top: "calc(24.72vh - 32px)",
          width: "33.9vw",
          height: "104.63vh",
          background: "#454545",
          opacity: 0.6,
          borderRadius: "1.5625vw",
          pointerEvents: "none",
        }}
      />

      {/* Phone mockup card — Figma: left:calc(50%+62.51) top:314 w:724.813 h:1025.701
          border:13.765px rgba(254,254,254,0.1) r:27.531 bg:#0a0406
          inset-shadow:0 0 97px 14px rgba(255,0,230,0.4) */}
      <div
        className="podbor-phone-card"
        style={{
          position: "absolute",
          left: "calc(50% + 3.26vw)",
          top: "calc(29.07vh - 32px)",
          width: "clamp(200px, 37.75vw, 725px)",
          height: "clamp(300px, 94.97vh, 1026px)",
          border: "clamp(5px, 0.716vw, 14px) solid rgba(254,254,254,0.1)",
          borderRadius: "clamp(10px, 1.43vw, 28px)",
          overflow: "hidden",
          boxSizing: "border-box",
          backgroundColor: "#0a0406",
          boxShadow: "inset 0 0 clamp(30px, 5.07vw, 97px) clamp(5px, 0.76vw, 15px) rgba(255,0,230,0.4)",
        }}
      >
        {/* Mobile stair strips — hidden on desktop; bottom:100% puts them above card top edge */}
        <div className="podbor-strips-wrapper" style={{ display: "none", position: "absolute", left: 0, right: 0, height: 0, bottom: 0 }}>
          {/* Strip 1 — bottom, widest, prilezhit k karte */}
          <div className="podbor-step-1" style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", height: 56, background: "rgba(255,255,255,0.08)", borderRadius: 12 }} />
          {/* Strip 2 — middle, 80%, 32px higher */}
          <div className="podbor-step-2" style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", width: "80%", height: 56, background: "rgba(255,255,255,0.08)", borderRadius: 12 }} />
          {/* Strip 3 — top, 60%, 32px higher still */}
          <div className="podbor-step-3" style={{ position: "absolute", bottom: 64, left: "50%", transform: "translateX(-50%)", width: "60%", height: 56, background: "rgba(255,255,255,0.08)", borderRadius: 12 }} />
        </div>
        <div
          className="podbor-mobile-card-content"
          style={{
            display: "none",
            position: "absolute",
            inset: 16,
            zIndex: 3,
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div
            className="podbor-mobile-card-top"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
              flexWrap: "wrap",
            }}
          >
            <div
              className="podbor-mobile-brand"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 0,
                padding: "8px 10px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
              }}
            >
              <div className="podbor-mobile-brand-infinity" style={{ position: "relative", width: 32, height: 18, flexShrink: 0, pointerEvents: "none" }}>
                <InfinityMark />
              </div>
            </div>
            <div
              className="podbor-mobile-count"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px 12px",
                borderRadius: 999,
                background: "rgba(255,0,230,0.12)",
                border: "1px solid rgba(255,0,230,0.2)",
                color: "#ffffff",
                fontFamily: font,
                fontSize: 11,
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              3 товара
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <p style={{ margin: 0, fontFamily: font, fontSize: 11, lineHeight: 1, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
              Готовая презентация
            </p>
            <p
              className="podbor-mobile-title"
              style={{
                margin: 0,
                fontFamily: font,
                fontWeight: 400,
                fontSize: "clamp(22px, 6vw, 30px)",
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                color: "#ffffff",
              }}
            >
              3 товара
              <br />
              для запуска
            </p>
            <p
              className="podbor-mobile-subtitle"
              style={{
                margin: 0,
                fontFamily: font,
                fontSize: 13,
                lineHeight: 1.35,
                letterSpacing: "-0.02em",
                color: "rgba(255,255,255,0.72)",
              }}
            >
              Получаете презентацию с анализом ниши, конкурентов, юнит-экономики, рисков и пошаговым планом запуска.
            </p>
          </div>

          <div
            className="podbor-mobile-features-block"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <p style={{ margin: 0, fontFamily: font, fontSize: 11, lineHeight: 1, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
              Что входит
            </p>
            <p
              className="podbor-mobile-features"
              style={{
                margin: 0,
                fontFamily: font,
                fontSize: 13,
                lineHeight: 1.45,
                letterSpacing: "-0.02em",
                color: "rgba(255,255,255,0.78)",
              }}
            >
              {PODBOR_PRESENTATION_TEXT}
            </p>
          </div>

          <div
            className="podbor-mobile-steps"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              marginTop: "auto",
            }}
          >
            <p style={{ margin: 0, fontFamily: font, fontSize: 11, lineHeight: 1, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
              Что делаем
            </p>
            {PODBOR_WORK_STEPS.map((item, index) => (
              <div
                key={item}
                className="podbor-mobile-step"
                style={{
                  display: "grid",
                  gridTemplateColumns: "36px 1fr",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 12px",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(255,0,230,0.12)",
                    color: "#ffffff",
                    fontFamily: font,
                    fontSize: 12,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span style={{ fontFamily: font, fontSize: 13, lineHeight: 1.25, letterSpacing: "-0.02em", color: "#ffffff" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Brand logo area — Figma (in card): left:43.85 top:426.36 w:195.593 h:46.397 */}
        <div
          className="podbor-legacy-brand"
          style={{
            position: "absolute",
            left: "6.05%",
            top: "41.57%",
            width: "26.99%",
            height: "4.52%",
          }}
        >
          {/* Ellipse glow */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              top: "12.46%",
              left: 0,
              height: "24.74%",
              transform: "translateY(-50%)",
              overflow: "visible",
            }}
          >
                        <Img
              alt=""
              src={PODBOR_ELLIPSE_IMG}
              style={{ position: "absolute", inset: "-96.15% -5.64%", width: "111.28%", height: "296.3%", maxWidth: "none", pointerEvents: "none" }}
            />
          </div>

          {/* Thin line — Figma: Rectangle4, centered, top:2.91px, h:4.415 w:185.218 */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "6.27%",
              width: "94.7%",
              height: "9.52%",
              transform: "translateX(-50%)",
              overflow: "hidden",
            }}
          >
                        <Img
              alt=""
              src={PODBOR_LINE1_IMG}
              style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: "30%", transform: "translateY(-50%)", maxWidth: "none", pointerEvents: "none" }}
            />
                        <Img
              alt=""
              src={PODBOR_LINE2_IMG}
              style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: "30%", transform: "translateY(-50%)", maxWidth: "none", pointerEvents: "none", mixBlendMode: "plus-lighter" }}
            />
          </div>

          {/* PRO text logo — Figma: centered x, top: calc(50%-17.43px) → 12.47% */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "0%",
              width: "94.7%",
              height: "24.9%",
              transform: "translateX(-50%) translateY(-50%)",
            }}
          >
                        <Img
              alt=""
              src={PODBOR_PRO_IMG}
              style={{ position: "absolute", inset: "-95.61% -5.96%", width: "111.92%", height: "291.22%", maxWidth: "none", pointerEvents: "none" }}
            />
          </div>

          {/* Infinity/logo mark — animated */}
          <div className="podbor-infinity-inner" style={{ position: "absolute", left: 0, top: "23.8%", width: "23.4%", height: "66.3%", pointerEvents: "none" }}>
              <InfinityMark />
          </div>
        </div>

        {/* Top row: infinity icon + headline */}
        <div
          className="podbor-card-header"
          style={{
            position: "absolute",
            top: "4%",
            left: "5%",
            right: "5%",
            zIndex: 3,
            display: "flex",
            alignItems: "center",
            gap: "clamp(6px, 0.8vw, 16px)",
          }}
        >
          <div style={{ width: "clamp(28px, 3vw, 56px)", height: "clamp(16px, 1.7vw, 32px)", flexShrink: 0, pointerEvents: "none" }}>
            <InfinityMark />
          </div>
          <p
            className="podbor-legacy-headline"
            style={{
              margin: 0,
              fontFamily: "Roboto Condensed, Arial Narrow, Arial, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(14px, 2.2vw, 42px)",
              lineHeight: 1,
              color: "#ffffff",
            }}
          >
            АНАЛИЗ САЛФЕТОК ДЛЯ УБОРКИ
          </p>
        </div>

        {/* Analysis screenshot — desktop only (mobile: display:none via CSS) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div
          className="podbor-analysis-img"
          style={{
            position: "absolute",
            top: "15%",
            left: "3%",
            right: "3%",
            bottom: "2%",
            zIndex: 1,
            borderRadius: "clamp(6px, 0.8vw, 16px)",
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src="/podbor-analysis.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* Heading — Figma: left:60 top:60 font:100px tracking:-3.5px w:993 */}
      <p
        style={{
          position: "absolute",
          left: "3.125vw",
          top: "clamp(30px, 5.56vh, 60px)",
          width: "clamp(260px, 51.7vw, 993px)",
          fontFamily: font,
          fontWeight: 400,
          fontSize: "clamp(32px, 5.208vw, 100px)",
          lineHeight: 0.9,
          letterSpacing: "-0.035em",
          color: "#ffffff",
          margin: 0,
        }}
      >
        {"Подбираем "}
        <span style={{ color: "#ff00e6" }}>новинки</span>
        {" для запуска"}
      </p>

      {/* Subtitle — Figma: left:60 top:282 font:45px tracking:-1.575px w:770 */}
      <p
        className="podbor-subtitle-outside"
        style={{
          position: "absolute",
          left: "3.125vw",
          top: "clamp(110px, 26.11vh, 282px)",
          width: "clamp(200px, 40.1vw, 770px)",
          fontFamily: font,
          fontWeight: 400,
          fontSize: "clamp(15px, 2.34vw, 45px)",
          lineHeight: 1,
          letterSpacing: "-0.035em",
          color: "#ffffff",
          margin: 0,
        }}
      >
        Получаете презентацию с 3 товарами: анализ ниши, конкурентов, юнит-экономики, рисков и пошаговый план запуска
      </p>

      {/* "Что делаем:" list — Figma: left:60 top:795 font:35px opacity:0.5 tracking:-1.225px */}
      <div
        className="podbor-list"
        style={{
          position: "absolute",
          left: "3.125vw",
          top: "clamp(460px, 73.61vh, 795px)",
          fontFamily: font,
          fontWeight: 400,
          fontSize: "clamp(13px, 1.823vw, 35px)",
          lineHeight: 1.2,
          letterSpacing: "-0.035em",
          color: "#ffffff",
          opacity: 0.5,
        }}
      >
        <p style={{ margin: 0 }}>Что делаем:</p>
        <p style={{ margin: 0 }}>{"• Оцениваем спрос и конкуренцию"}</p>
        <p style={{ margin: 0 }}>{"• Считаем экономику и риски"}</p>
        <p style={{ margin: 0 }}>{"• Определяем потенциал прибыли"}</p>
        <p style={{ margin: 0 }}>{"• Даем стратегию запуска"}</p>
      </div>

      {/* Badge — Figma: left:calc(75%+59px) top:60, bg:rgba(69,69,69,0.3) blur:15px */}
      <div
        style={{
          position: "absolute",
          right: "3.125vw",
          top: "clamp(30px, 5.56vh, 60px)",
          display: "flex",
          alignItems: "center",
          maxWidth: "calc(100% - 6.25vw)",
          padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)",
          boxSizing: "border-box",
          borderRadius: "300px",
          background: "rgba(69,69,69,0.3)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
        }}
      >
        <p
          style={{
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(10px, 1.302vw, 25px)",
            lineHeight: 1,
            letterSpacing: "-0.035em",
            color: "#ffffff",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            margin: 0,
          }}
        >
          подбор новинок
        </p>
      </div>
      {/* Переход → ServicesAuditSection rgb(13,31,31) */}
      <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "clamp(220px,26vw,320px)", background: "linear-gradient(to bottom,rgba(13,31,31,0) 0%,rgba(13,31,31,0) 55%,rgba(13,31,31,0.12) 68%,rgba(13,31,31,0.38) 80%,rgba(13,31,31,0.72) 92%,rgb(13,31,31) 100%)", pointerEvents: "none", zIndex: 5 }} />
    </section>
    {/* Mobile screenshot block — shown on mobile only (hidden on desktop via CSS) */}
    <div className="podbor-mobile-screenshot-block" style={{ display: "none", backgroundColor: "#0f050e", padding: "0 16px 24px" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/podbor-analysis.jpg"
        alt="Анализ салфеток для уборки"
        style={{ width: "100%", borderRadius: 16, display: "block" }}
      />
    </div>
  </>
  );
}

// Figma node: 2040:389 "Услуги — Подбор и развитие команды" — file MOHJ9F1OX9kaB0rKsCZm7i
function ServicesTeamSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  return (
    <section className="split-section team-section" style={{
      ...deferredSectionStyle,
      minHeight: "max(100svh, 760px)",
      background: "linear-gradient(202.23deg, rgb(13,31,31) 15.55%, rgb(56,133,133) 99.342%)",
      overflow: "clip",
    }}>
      {/* Heading — left:60 top:60 font:100px w:993px */}
      <p className="team-heading" style={{
        position: "absolute",
        left: "3.125vw",
        top: "clamp(30px, 5.56vh, 60px)",
        width: "clamp(240px, 51.7vw, 993px)",
        fontFamily: font,
        fontWeight: 400,
        fontSize: "clamp(32px, 5.208vw, 100px)",
        lineHeight: 0.9,
        letterSpacing: "-0.035em",
        color: "#ffffff",
        margin: 0,
        zIndex: 2,
      }}>
        Найдем нужных людей
      </p>

      {/* Badge — left:1440 top:60 */}
      <div className="team-badge" style={{
        position: "absolute",
        left: "clamp(900px, 75vw, 1440px)",
        top: "clamp(30px, 5.56vh, 60px)",
        display: "flex",
        alignItems: "center",
        padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)",
        borderRadius: "300px",
        background: "rgba(69,69,69,0.3)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        zIndex: 2,
      }}>
        <p style={{
          fontFamily: font,
          fontWeight: 400,
          fontSize: "clamp(10px, 1.302vw, 25px)",
          lineHeight: 1,
          letterSpacing: "-0.035em",
          color: "#ffffff",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          margin: 0,
        }}>
          подбор и развитие команды
        </p>
      </div>

      {/* Body text left — left:60 top:291 w:770px font:45px */}
      <p className="team-description" style={{
        position: "absolute",
        left: "3.125vw",
        top: "clamp(160px, 26.94vh, 291px)",
        width: "clamp(200px, 40.1vw, 770px)",
        fontFamily: font,
        fontWeight: 400,
        fontSize: "clamp(14px, 2.344vw, 45px)",
        lineHeight: 1,
        letterSpacing: "-0.035em",
        color: "#ffffff",
        margin: 0,
        zIndex: 2,
      }}>
        Вы получаете документ с рекомендациями: что исправить в первую очередь, какой рост это даст в цифрах, план внедрения на 30 дней
      </p>

      {/* Radar — left:12 top:573 w:1896 h:1891 flipped vertically — inline SVG (no cache) */}
      <div className="team-radar" style={{
        position: "absolute",
        left: "0.625vw",
        top: "clamp(320px, 53.06vh, 573px)",
        width: "98.75vw",
        height: "175.09vh",
        transform: "scaleY(-1)",
        zIndex: 1,
        pointerEvents: "none",
      }}>
        <svg preserveAspectRatio="none" width="100%" height="100%" overflow="hidden" style={{ display: "block" }} viewBox="0 0 1896 1891" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* clipPath обрезает экватор (y=945.5, stroke=4px → y=943.5–947.5) — убирает 4-ю «дугу» на iOS Safari */}
            <clipPath id="team-radar-dome-clip">
              <rect x="0" y="952" width="1896" height="939"/>
            </clipPath>
            <mask id="team-radar-mask-1" fill="white">
              <path d="M1896 945.5C1896 1069.67 1871.48 1192.61 1823.84 1307.33C1776.2 1422.04 1706.37 1526.27 1618.34 1614.07C1530.31 1701.87 1425.8 1771.51 1310.78 1819.03C1195.77 1866.54 1072.49 1891 948 1891C823.507 1891 700.233 1866.54 585.216 1819.03C470.2 1771.51 365.693 1701.87 277.663 1614.07C189.633 1526.27 119.804 1422.04 72.1624 1307.33C24.5209 1192.61 0.000176143 1069.67 0.000165317 945.5L948 945.5L1896 945.5Z"/>
            </mask>
            <mask id="team-radar-mask-2" fill="white">
              <path d="M1751 945.5C1751 1050.49 1730.31 1154.46 1690.1 1251.46C1649.9 1348.46 1590.97 1436.59 1516.69 1510.83C1442.4 1585.07 1354.21 1643.96 1257.15 1684.14C1160.09 1724.32 1056.06 1745 951 1745C845.943 1745 741.914 1724.32 644.853 1684.14C547.793 1643.96 459.602 1585.07 385.315 1510.83C311.028 1436.59 252.1 1348.46 211.897 1251.46C171.693 1154.46 151 1050.49 151 945.5L951 945.5L1751 945.5Z"/>
            </mask>
            <mask id="team-radar-mask-3" fill="white">
              <path d="M1609 945.5C1609 1031.84 1591.98 1117.34 1558.91 1197.11C1525.85 1276.89 1477.38 1349.37 1416.28 1410.42C1355.18 1471.48 1282.64 1519.91 1202.81 1552.95C1122.97 1585.99 1037.41 1603 951 1603C864.59 1603 779.027 1585.99 699.194 1552.95C619.362 1519.91 546.825 1471.48 485.724 1410.42C424.623 1349.37 376.155 1276.89 343.087 1197.11C310.02 1117.34 293 1031.84 293 945.5L951 945.5L1609 945.5Z"/>
            </mask>
          </defs>
          <g clipPath="url(#team-radar-dome-clip)">
            {/* Ellipse 17 — R=948 */}
            <path d="M1896 945.5C1896 1069.67 1871.48 1192.61 1823.84 1307.33C1776.2 1422.04 1706.37 1526.27 1618.34 1614.07C1530.31 1701.87 1425.8 1771.51 1310.78 1819.03C1195.77 1866.54 1072.49 1891 948 1891C823.507 1891 700.233 1866.54 585.216 1819.03C470.2 1771.51 365.693 1701.87 277.663 1614.07C189.633 1526.27 119.804 1422.04 72.1624 1307.33C24.5209 1192.61 0.000176143 1069.67 0.000165317 945.5L948 945.5L1896 945.5Z" fill="#FEFEFE" fillOpacity="0.1" stroke="#FEFEFE" strokeOpacity="0.3" strokeWidth="4" mask="url(#team-radar-mask-1)"/>
            {/* Ellipse 18 — R=800 */}
            <path d="M1751 945.5C1751 1050.49 1730.31 1154.46 1690.1 1251.46C1649.9 1348.46 1590.97 1436.59 1516.69 1510.83C1442.4 1585.07 1354.21 1643.96 1257.15 1684.14C1160.09 1724.32 1056.06 1745 951 1745C845.943 1745 741.914 1724.32 644.853 1684.14C547.793 1643.96 459.602 1585.07 385.315 1510.83C311.028 1436.59 252.1 1348.46 211.897 1251.46C171.693 1154.46 151 1050.49 151 945.5L951 945.5L1751 945.5Z" fill="#FEFEFE" fillOpacity="0.1" stroke="#FEFEFE" strokeOpacity="0.3" strokeWidth="4" mask="url(#team-radar-mask-2)"/>
            {/* Ellipse 19 — R=658 */}
            <path d="M1609 945.5C1609 1031.84 1591.98 1117.34 1558.91 1197.11C1525.85 1276.89 1477.38 1349.37 1416.28 1410.42C1355.18 1471.48 1282.64 1519.91 1202.81 1552.95C1122.97 1585.99 1037.41 1603 951 1603C864.59 1603 779.027 1585.99 699.194 1552.95C619.362 1519.91 546.825 1471.48 485.724 1410.42C424.623 1349.37 376.155 1276.89 343.087 1197.11C310.02 1117.34 293 1031.84 293 945.5L951 945.5L1609 945.5Z" fill="#FEFEFE" fillOpacity="0.1" stroke="#FEFEFE" strokeOpacity="0.3" strokeWidth="4" mask="url(#team-radar-mask-3)"/>
          </g>
        </svg>
      </div>


      {/* Arc dots: @property + @keyframes + 4 animated dots on arcs
          cy = 140.61vh  (= radar top 53.06vh + radar_h/2 87.55vh, after scaleY(-1))
          rx/ry from SVG radii scaled to vw/vh at 1920×1080 reference:
            R1=658:  rx=34.27vw ry=60.93vh
            R2=800:  rx=41.67vw ry=74.07vh
            R3=948:  rx=49.38vw ry=87.78vh
            R4=1096: rx=57.08vw ry=101.48vh
      */}
      <style>{`
        /*
          --dot-cy = центр дуг сферы в координатах секции.
          containerTop = clamp(320px, 53.06vh, 573px) — используем точный clamp, не 53.06vh,
          чтобы формула оставалась верной при любой высоте viewport (1200px, 1440px, 1600px…).
          containerH = 175.09vh; cy_svg = 945.5/1891 * containerH = 87.575vh.
          После scaleY(-1): cy = containerTop + (containerH − cy_svg) = containerTop + 87.575vh.
        */
        .team-section {
          --dot-cy: calc(clamp(320px, 53.06vh, 573px) + 87.575vh);
        }
        @property --dot1-angle { syntax: "<angle>"; inherits: false; initial-value: 65deg; }
        @property --dot2-angle { syntax: "<angle>"; inherits: false; initial-value: 60deg; }
        @property --dot3-angle { syntax: "<angle>"; inherits: false; initial-value: 66deg; }
        @property --dot4-angle { syntax: "<angle>"; inherits: false; initial-value: 114deg; }
        @keyframes dot1-swing { from { --dot1-angle: 53deg; } to { --dot1-angle: 77deg; } }
        @keyframes dot2-swing { from { --dot2-angle: 48deg; } to { --dot2-angle: 72deg; } }
        @keyframes dot3-swing { from { --dot3-angle: 62deg; } to { --dot3-angle: 78deg; } }
        @keyframes dot4-swing { from { --dot4-angle: 102deg; } to { --dot4-angle: 118deg; } }
        @keyframes team-dot-glow {
          0%, 18%, 100% {
            opacity: 0.6;
            box-shadow: 0 0 7px 2px rgba(255,255,255,0.34);
            transform: translate(-50%, -50%) scale(1);
          }
          8% {
            opacity: 1;
            box-shadow: 0 0 15px 5px rgba(255,255,255,0.84);
            transform: translate(-50%, -50%) scale(1.2);
          }
        }
        .team-arc-dot-1 {
          position: absolute;
          width: 0; height: 0;
          left: calc(50vw + 34.27vw * cos(var(--dot1-angle)));
          top:  calc(var(--dot-cy) - 60.93vh * sin(var(--dot1-angle)));
          z-index: 3;
          pointer-events: none;
          will-change: left, top;
          animation: dot1-swing 5s ease-in-out alternate infinite 0s;
        }
        .team-arc-dot-2 {
          position: absolute;
          width: 0; height: 0;
          left: calc(50vw + 41.67vw * cos(var(--dot2-angle)));
          top:  calc(var(--dot-cy) - 74.07vh * sin(var(--dot2-angle)));
          z-index: 3;
          pointer-events: none;
          will-change: left, top;
          animation: dot2-swing 4.5s ease-in-out alternate infinite 1.5s;
        }
        .team-arc-dot-3 {
          position: absolute;
          width: 0; height: 0;
          left: calc(50vw + 49.38vw * cos(var(--dot3-angle)));
          top:  calc(var(--dot-cy) - 87.78vh * sin(var(--dot3-angle)));
          z-index: 3;
          pointer-events: none;
          will-change: left, top;
          animation: dot3-swing 6s ease-in-out alternate infinite 3s;
        }
        .team-arc-dot-4 {
          position: absolute;
          width: 0; height: 0;
          left: calc(50vw + 49.38vw * cos(var(--dot4-angle)));
          top:  calc(var(--dot-cy) - 87.78vh * sin(var(--dot4-angle)));
          z-index: 3;
          pointer-events: none;
          will-change: left, top;
          animation: dot4-swing 5.5s ease-in-out alternate infinite 4.5s;
        }
        .team-arc-dot-1 > div,
        .team-arc-dot-2 > div,
        .team-arc-dot-3 > div,
        .team-arc-dot-4 > div {
          transition: box-shadow 180ms ease, transform 180ms ease, opacity 180ms ease;
          pointer-events: auto;
          cursor: pointer;
        }
        .team-arc-dot-1 > span,
        .team-arc-dot-2 > span,
        .team-arc-dot-3 > span,
        .team-arc-dot-4 > span {
          pointer-events: none;
        }
        .team-arc-dot-1 > div:hover,
        .team-arc-dot-2 > div:hover,
        .team-arc-dot-3 > div:hover,
        .team-arc-dot-4 > div:hover {
          opacity: 1;
          box-shadow: 0 0 16px 5px rgba(255,255,255,0.92);
          transform: translate(-50%, -50%) scale(1.22);
        }
        /* На узких экранах dot3 (текст вправо) может выйти за край — переносим */
        @media (max-width: 1500px) {
          .team-arc-dot-3 > span {
            white-space: normal !important;
            max-width: 175px !important;
            line-height: 1.25 !important;
            text-align: left !important;
          }
          /* dot2 (текст влево) на узком экране тоже может быть тесно */
          .team-arc-dot-2 > span {
            white-space: normal !important;
            max-width: 175px !important;
            line-height: 1.25 !important;
            text-align: right !important;
          }
        }
      `}</style>

      {/* Arc dot 1 — R1 inner, θ=150° — text left */}
      <div className="team-arc-dot-1">
        <div style={{ position: "absolute", width: 10, height: 10, transform: "translate(-50%, -50%)", borderRadius: "50%", background: "white", boxShadow: "0 0 8px 3px rgba(255,255,255,0.6)" }} />
        <span style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", fontSize: "clamp(18px, 1.18vw, 22px)", color: "rgba(255,255,255,0.9)", whiteSpace: "nowrap", fontFamily: font }}>
          Определяем, кто реально нужен
        </span>
      </div>

      {/* Arc dot 2 — R2, θ=120° — text left-above */}
      <div className="team-arc-dot-2">
        <div style={{ position: "absolute", width: 10, height: 10, transform: "translate(-50%, -50%)", borderRadius: "50%", background: "white", boxShadow: "0 0 8px 3px rgba(255,255,255,0.6)" }} />
        <span style={{ position: "absolute", right: 18, bottom: 14, fontSize: "clamp(18px, 1.18vw, 22px)", color: "rgba(255,255,255,0.9)", whiteSpace: "nowrap", fontFamily: font }}>
          Разрабатываем портреты должностей
        </span>
      </div>

      {/* Arc dot 3 — R3, θ=60° — text right-above */}
      <div className="team-arc-dot-3">
        <div style={{ position: "absolute", width: 10, height: 10, transform: "translate(-50%, -50%)", borderRadius: "50%", background: "white", boxShadow: "0 0 8px 3px rgba(255,255,255,0.6)" }} />
        <span style={{ position: "absolute", left: 18, bottom: 14, fontSize: "clamp(18px, 1.18vw, 22px)", color: "rgba(255,255,255,0.9)", whiteSpace: "nowrap", fontFamily: font }}>
          Подбираем и собеседуем кандидатов
        </span>
      </div>

      {/* Arc dot 4 — mirrored on the same arc as dot 3, left side */}
      <div className="team-arc-dot-4">
        <div style={{ position: "absolute", width: 10, height: 10, transform: "translate(-50%, -50%)", borderRadius: "50%", background: "white", boxShadow: "0 0 8px 3px rgba(255,255,255,0.6)" }} />
        <span style={{ position: "absolute", right: 18, bottom: 14, fontSize: "clamp(18px, 1.18vw, 22px)", color: "rgba(255,255,255,0.9)", whiteSpace: "nowrap", fontFamily: font }}>
          Выстраиваем систему адаптации
        </span>
      </div>

      {/* Переход → ServicesHrTeam #ffffff */}
      <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "clamp(280px,32vw,420px)", background: "linear-gradient(to bottom,rgba(255,255,255,0) 0%,rgba(255,255,255,0) 55%,rgba(255,255,255,0.12) 68%,rgba(255,255,255,0.38) 80%,rgba(255,255,255,0.72) 92%,rgb(255,255,255) 100%)", pointerEvents: "none", zIndex: 5 }} />
    </section>
  );
}

// Figma node: 2040:411 "Услуги — Постоянная работа с командой"
function ServicesHrTeamSection() {
  return (
    <section
      className="split-section hrteam-section"
      style={{
        ...deferredSectionStyle,
        backgroundColor: "#ffffff",
        minHeight: "max(100svh, 720px)",
      }}
    >
      {/* Heading */}
      <p
        className="hrteam-heading"
        style={{
          position: "absolute",
          left: "3.125vw",
          top: "5.556vh",
          fontFamily: "'Helvetica Neue', sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "clamp(36px, 5.208vw, 100px)",
          lineHeight: 0.9,
          letterSpacing: "clamp(-1.5px, -0.182vw, -3.5px)",
          color: "#290c26",
          width: "51.719vw",
          margin: 0,
        }}
      >
        Постоянная работа с командой
      </p>

      {/* Badge "HR-сопровождение" */}
      <div
        className="hrteam-badge"
        style={{
          position: "absolute",
          left: "calc(75% + 3.073vw)",
          top: "5.556vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.111vh 0.833vw",
          background: "#ececec",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          borderRadius: "300px",
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            fontFamily: "'Helvetica Neue', sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "clamp(13px, 1.302vw, 25px)",
            lineHeight: 1,
            letterSpacing: "clamp(-0.4px, -0.0456vw, -0.875px)",
            color: "#290c26",
            textTransform: "uppercase",
          }}
        >
          HR-сопровождение
        </span>
      </div>

      {/* Graph */}
      <div
        className="hrteam-graph"
        style={{
          position: "absolute",
          left: "0.156vw",
          top: "30.185vh",
          width: "99.844vw",
          height: "69.815vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-0.25% 0 -0.11% 0",
          }}
        >
                    <Img
            alt=""
            src={HRTEAM_GRAPH_IMG}
            style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }}
          />
        </div>

      </div>

      {/* Large horizontal dotted line (rotated -90deg image) */}
      <div
        className="hrteam-dotline"
        style={{
          position: "absolute",
          left: "calc(-56.38vw + 79.61vh)",
          top: "33.796vh",
          width: "107.760vw",
          height: "66.389vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <div style={{ transform: "rotate(-90deg)", flexShrink: 0 }}>
          <div
            style={{
              position: "relative",
              width: "37.344vw",
              height: "191.574vh",
            }}
          >
                        <Img
              alt=""
              src={HRTEAM_DOTLINE_IMG}
              style={{ position: "absolute", display: "block", width: "100%", height: "100%", maxWidth: "none" }}
            />
          </div>
        </div>
      </div>

      {/* Vertical dotted line 1 — left:269px top:685px */}
      <div
        className="hrteam-dotline"
        style={{
          position: "absolute",
          left: "14.010vw",
          top: "63.6vh",
          width: "37.344vw",
          height: "1.667vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 3,
        }}
      >
        <div style={{ transform: "rotate(-90deg)", flexShrink: 0 }}>
          <div style={{ position: "relative", width: "0.938vw", height: "37.344vw" }}>
            <div style={{ position: "absolute", inset: "-0.28% -27.78% -0.7% -27.78%" }}>
                            <Img
                alt=""
                src={HRTEAM_DOTLINE1_IMG}
                style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Vertical dotted line 2 — left:calc(25%+254px) top:503px */}
      <div
        className="hrteam-dotline"
        style={{
          position: "absolute",
          left: "calc(25% + 13.229vw)",
          top: "46.574vh",
          width: "37.344vw",
          height: "1.667vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 3,
        }}
      >
        <div style={{ transform: "rotate(-90deg)", flexShrink: 0 }}>
          <div style={{ position: "relative", width: "0.938vw", height: "37.344vw" }}>
            <div style={{ position: "absolute", inset: "-0.28% -27.78% -0.7% -27.78%" }}>
                            <Img
                alt=""
                src={HRTEAM_DOTLINE2_IMG}
                style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Vertical dotted line 3 — left:calc(50%+179px) top:344px */}
      <div
        className="hrteam-dotline"
        style={{
          position: "absolute",
          left: "calc(50% + 9.323vw)",
          top: "31.852vh",
          width: "37.344vw",
          height: "1.667vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 3,
        }}
      >
        <div style={{ transform: "rotate(-90deg)", flexShrink: 0 }}>
          <div style={{ position: "relative", width: "0.938vw", height: "37.344vw" }}>
            <div style={{ position: "absolute", inset: "-0.28% -27.78% -0.7% -27.78%" }}>
                            <Img
                alt=""
                src={HRTEAM_DOTLINE1_IMG}
                style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Text label 1 — "Разрабатываем систему адаптации" left:calc(50%+38px) top:427px */}
      <p
        className="hrteam-label"
        style={{
          position: "absolute",
          left: "calc(50% + 1.979vw)",
          top: "39.537vh",
          fontFamily: "'Helvetica Neue', sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "clamp(16px, 1.823vw, 35px)",
          lineHeight: 1,
          letterSpacing: "clamp(-0.5px, -0.0638vw, -1.225px)",
          color: "#290c26",
          width: "18.802vw",
          margin: 0,
          zIndex: 4,
        }}
      >
        Разрабатываем систему адаптации
      </p>

      {/* Text label 2 — "Сильная команда, которая растет вместе с бизнесом" left:calc(75%-32px) top:231px */}
      <p
        className="hrteam-label"
        style={{
          position: "absolute",
          left: "calc(75% - 1.667vw)",
          top: "21.389vh",
          fontFamily: "'Helvetica Neue', sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "clamp(16px, 1.823vw, 35px)",
          lineHeight: 1,
          letterSpacing: "clamp(-0.5px, -0.0638vw, -1.225px)",
          color: "#290c26",
          width: "18.802vw",
          margin: 0,
          zIndex: 4,
        }}
      >
        Сильная команда, которая растет вместе с бизнесом
      </p>

      {/* Text label 3 — "Подбираем новых сотрудников по мере роста" left:60px top:766px */}
      <p
        className="hrteam-label"
        style={{
          position: "absolute",
          left: "3.125vw",
          top: "74vh",
          fontFamily: "'Helvetica Neue', sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "clamp(16px, 1.823vw, 35px)",
          lineHeight: 1,
          letterSpacing: "clamp(-0.5px, -0.0638vw, -1.225px)",
          color: "#290c26",
          width: "21.719vw",
          margin: 0,
          zIndex: 4,
        }}
      >
        Подбираем новых сотрудников по мере роста
      </p>

      {/* Text label 4 — "Развиваем действующую команду" left:calc(25%+64px) top:600px */}
      <p
        className="hrteam-label"
        style={{
          position: "absolute",
          left: "calc(25% + 3.333vw)",
          top: "53vh",
          fontFamily: "'Helvetica Neue', sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "clamp(16px, 1.823vw, 35px)",
          lineHeight: 1,
          letterSpacing: "clamp(-0.5px, -0.0638vw, -1.225px)",
          color: "#290c26",
          width: "18.802vw",
          margin: 0,
          zIndex: 4,
        }}
      >
        Развиваем действующую команду
      </p>
      {/* Переход → WorkWithUs rgb(7,15,12) */}
      <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "clamp(280px,32vw,420px)", background: "linear-gradient(to bottom,rgba(7,15,12,0) 0%,rgba(7,15,12,0) 55%,rgba(7,15,12,0.12) 68%,rgba(7,15,12,0.38) 80%,rgba(7,15,12,0.72) 92%,rgb(7,15,12) 100%)", pointerEvents: "none", zIndex: 5 }} />
    </section>
  );
}
export default function HomeServicesSectionsClient() {
  return (
    <>
      <style>{`
        .services-intro-section {
          min-height: clamp(72px, 12svh, 140px);
          height: clamp(72px, 12svh, 140px);
        }
        .services-intro-section .svc-title-text {
          font-size: clamp(24px, 6vw, 92px);
          padding: 0 clamp(48px, 10vw, 140px);
        }
        .services-intro-section .svc-infinity {
          right: clamp(18px, 3.125vw, 60px);
        }
        @media (max-width: 1200px) {
          .services-intro-section {
            min-height: clamp(72px, 10svh, 116px) !important;
            height: clamp(72px, 10svh, 116px) !important;
          }
          .services-intro-section .svc-title-text {
            font-size: clamp(22px, 5.6vw, 64px) !important;
            padding: 0 clamp(42px, 8vw, 112px) !important;
          }
          .services-intro-section .svc-infinity {
            width: clamp(34px, 5vw, 86px) !important;
            height: clamp(18px, 2.7vw, 44px) !important;
            right: clamp(14px, 2.4vw, 28px) !important;
          }
        }
        @media (max-width: 768px) {
          .services-intro-section {
            min-height: clamp(68px, 10svh, 92px) !important;
            height: clamp(68px, 10svh, 92px) !important;
          }
          .services-intro-section .svc-title-text {
            font-size: clamp(20px, 7vw, 34px) !important;
            line-height: 0.95 !important;
            letter-spacing: -0.03em !important;
            padding: 0 56px !important;
          }
          .services-intro-section .svc-infinity {
            width: clamp(28px, 8vw, 42px) !important;
            height: clamp(15px, 4.5vw, 22px) !important;
            right: 14px !important;
          }
        }
        @media (max-width: 480px) {
          .services-intro-section {
            min-height: 64px !important;
            height: 64px !important;
          }
          .services-intro-section .svc-title-text {
            font-size: clamp(18px, 6.6vw, 28px) !important;
            padding: 0 48px !important;
          }
          .services-intro-section .svc-infinity {
            width: 26px !important;
            height: 14px !important;
            right: 12px !important;
          }
        }
        @media (max-height: 760px) {
          .services-intro-section {
            min-height: 68px !important;
            height: 68px !important;
          }
          .services-intro-section .svc-title-text {
            font-size: clamp(20px, 4vw, 42px) !important;
          }
        }
        @media (min-width: 1700px) {
          .services-intro-section {
            min-height: 128px !important;
            height: 128px !important;
          }
          .services-intro-section .svc-title-text {
            font-size: clamp(40px, 4.4vw, 84px) !important;
          }
          .services-intro-section .svc-infinity {
            width: clamp(58px, 5.4vw, 102px) !important;
            height: clamp(30px, 2.8vw, 52px) !important;
          }
        }
        @media (max-width: 768px) {
          /* ── SALES: Отдел продаж под ключ ─────────────────── */
          .sales-section {
            min-height: max(64svh, 500px) !important;
          }
          /* Heading row: absolute, full width, z-index > blur */
          .sales-heading-row {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            display: block !important;
            padding: 16px 16px 0 !important;
            box-sizing: border-box !important;
            z-index: 3 !important;
          }
          .sales-heading-row > p {
            font-size: clamp(30px, 8vw, 50px) !important;
            width: auto !important;
            max-width: calc(100% - 100px) !important;
          }
          /* Icons: абсолютно в правый верхний угол секции */
          .sales-icons-col {
            position: absolute !important;
            top: 16px !important;
            right: 16px !important;
            left: auto !important;
            width: auto !important;
            align-items: flex-end !important;
            gap: 8px !important;
            flex-direction: column-reverse !important;
          }
          /* Badge явно виден */
          .sales-icons-col > div:first-child {
            display: flex !important;
          }
          /* Белая карточка: компактнее и выше, без лишней пустоты */
          .sales-white-card {
            position: absolute !important;
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            top: 154px !important;
            bottom: 0 !important;
            height: auto !important;
            border-radius: 22px 22px 0 0 !important;
            padding: 18px 20px 20px !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: flex-start !important;
            gap: 14px !important;
          }
          .sales-card-left {
            position: static !important;
            left: auto !important;
            right: auto !important;
            top: auto !important;
            width: auto !important;
            font-size: 18px !important;
            line-height: 1.08 !important;
            overflow-wrap: anywhere !important;
          }
          .sales-card-right {
            position: static !important;
            left: auto !important;
            right: auto !important;
            top: auto !important;
            width: auto !important;
            font-size: 16px !important;
            line-height: 1.24 !important;
            white-space: normal !important;
            overflow-wrap: anywhere !important;
            flex: 1 1 auto !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            min-height: 0 !important;
          }
          .sales-card-right p {
            margin: 0 !important;
          }
          .sales-transition-fade {
            height: 60px !important;
            background: linear-gradient(to bottom, rgba(13,31,31,0) 0%, rgba(13,31,31,0.25) 40%, rgba(13,31,31,0.75) 75%, rgb(13,31,31) 100%) !important;
          }
          /* ── PODBOR: Подбираем новинки ────────────────────── */
          /* Серые прямоугольники — по центру, на высоту основной карточки */
          .podbor-rect-1 {
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: 88% !important;
            top: calc(29.07vh - 32px) !important;
            height: clamp(300px, 94.97vh, 1026px) !important;
          }
          .podbor-rect-2 {
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: 96% !important;
            top: calc(29.07vh - 32px) !important;
            height: clamp(300px, 94.97vh, 1026px) !important;
          }
          .podbor-subtitle-outside {
            display: none !important;
          }
          .podbor-list {
            display: none !important;
          }
          .podbor-mobile-card-content {
            display: flex !important;
            inset: 14px !important;
            gap: 10px !important;
          }
          .podbor-mobile-title {
            font-size: clamp(22px, 6vw, 30px) !important;
          }
          .podbor-mobile-subtitle {
            font-size: 13px !important;
            line-height: 1.4 !important;
          }
          .podbor-mobile-features {
            font-size: 13px !important;
            line-height: 1.45 !important;
          }
          .podbor-mobile-steps {
            margin-top: 4px !important;
            gap: 6px !important;
          }
          .podbor-mobile-step {
            padding: 9px 12px !important;
          }
          .podbor-legacy-brand {
            display: none !important;
          }
          .podbor-legacy-headline {
            display: none !important;
          }
          /* Враппер: высота 120px, bottom: 100% = прямо над верхним краем карточки */
          .podbor-strips-wrapper {
            display: block !important;
            top: auto !important;
            bottom: 100% !important;
            left: 0 !important;
            right: 0 !important;
            height: 120px !important;
            z-index: 1 !important;
          }
          /* Backdrop-filter на полосах */
          .podbor-step-1,
          .podbor-step-2,
          .podbor-step-3 {
            backdrop-filter: blur(4px) !important;
            -webkit-backdrop-filter: blur(4px) !important;
          }
          .podbor-infinity-inner {
            width: 40px !important;
            height: 24px !important;
            top: 20% !important;
            left: 4% !important;
          }
          /* ── EXTERNAL: Внешние каналы продаж ─────────────── */
          .ext-section {
            min-height: max(62svh, 500px) !important;
          }
          /* Убрать артефакт 68.98vh — растянуть blur на весь блок */
          .ext-blur-band {
            height: 100% !important;
          }
          .ext-white-card {
            right: 10px !important;
            top: 42px !important;
            bottom: 42px !important;
            height: auto !important;
            width: clamp(184px, 50vw, 220px) !important;
            padding: 16px 14px !important;
          }
          .ext-heading {
            top: 50% !important;
            bottom: auto !important;
            left: 16px !important;
            right: calc(clamp(184px, 50vw, 220px) + 26px) !important;
            width: auto !important;
            transform: translateY(-50%) !important;
            font-size: clamp(18px, 5.3vw, 25px) !important;
            line-height: 0.94 !important;
            overflow-wrap: normal !important;
            word-break: normal !important;
            hyphens: none !important;
            opacity: 0.95 !important;
          }
          .ext-transition-fade {
            display: block !important;
            height: 90px !important;
          }
          /* ── AI: infinity 2:1 ─────────────────────────────── */
          .ai-section {
            min-height: max(calc(100svh - 100px), 680px) !important;
          }
          .ai-heading {
            /* graph bottom = graph-top + graph-height = clamp(130px,19.91vh,215px) + clamp(260px,49.17vh,531px)
               heading goes below graph with 32px gap */
            top: calc(clamp(130px, 19.91vh, 215px) + clamp(260px, 49.17vh, 531px) + 32px) !important;
          }
          .ai-infinity-wrapper {
            width: 48px !important;
            height: 28px !important;
          }
          /* ── TEAM: radar идеальный полукруг ──────────────── */
          .team-section {
            min-height: 0 !important;
            padding-bottom: 280px !important;
            overflow: hidden !important;
            isolation: isolate;
            -webkit-transform: translateZ(0);
          }
          .team-arc-dot-1,
          .team-arc-dot-2,
          .team-arc-dot-3,
          .team-arc-dot-4 {
            top: auto !important;
          }
          .team-arc-dot-1 {
            animation: none !important;
            --dot1-angle: 54deg;
            left: calc(50vw + 34.7vw * cos(var(--dot1-angle))) !important;
            bottom: calc(34.8vw * sin(var(--dot1-angle))) !important;
          }
          .team-arc-dot-2 {
            animation: none !important;
            --dot2-angle: 82deg;
            left: calc(50vw + 42.2vw * cos(var(--dot2-angle))) !important;
            bottom: calc(42.3vw * sin(var(--dot2-angle))) !important;
          }
          .team-arc-dot-3 {
            animation: none !important;
            --dot3-angle: 104deg;
            left: calc(50vw + 50vw * cos(var(--dot3-angle))) !important;
            bottom: calc(50.13vw * sin(var(--dot3-angle))) !important;
          }
          .team-arc-dot-4 {
            animation: none !important;
            --dot4-angle: 140deg;
            left: calc(50vw + 50vw * cos(var(--dot4-angle))) !important;
            bottom: calc(50.13vw * sin(var(--dot4-angle))) !important;
          }
          .team-arc-dot-1 > div,
          .team-arc-dot-2 > div,
          .team-arc-dot-3 > div,
          .team-arc-dot-4 > div {
            width: 8px !important;
            height: 8px !important;
            box-shadow: 0 0 6px 2px rgba(255,255,255,0.45) !important;
          }
          .team-arc-dot-1 > div {
            animation: team-dot-glow 5.6s ease-in-out infinite 0s !important;
          }
          .team-arc-dot-2 > div {
            animation: team-dot-glow 5.6s ease-in-out infinite 1.4s !important;
          }
          .team-arc-dot-3 > div {
            animation: team-dot-glow 5.6s ease-in-out infinite 2.8s !important;
          }
          .team-arc-dot-4 > div {
            animation: team-dot-glow 5.6s ease-in-out infinite 4.2s !important;
          }
          .team-arc-dot-1 > span,
          .team-arc-dot-2 > span,
          .team-arc-dot-3 > span,
          .team-arc-dot-4 > span {
            display: block !important;
            position: absolute !important;
            font-size: 11px !important;
            line-height: 1.12 !important;
            letter-spacing: -0.02em !important;
            color: rgba(255,255,255,0.9) !important;
            white-space: normal !important;
            text-wrap: balance !important;
            overflow-wrap: normal !important;
            word-break: normal !important;
            hyphens: none !important;
            max-width: none !important;
          }
          .team-arc-dot-1 > span {
            left: 12px !important;
            right: auto !important;
            top: 12px !important;
            bottom: auto !important;
            transform: none !important;
            width: 102px !important;
            text-align: left !important;
          }
          .team-arc-dot-2 > span {
            left: 12px !important;
            right: auto !important;
            top: 50% !important;
            bottom: auto !important;
            transform: translateY(-50%) !important;
            width: 108px !important;
            text-align: left !important;
          }
          .team-arc-dot-3 > span {
            left: 50% !important;
            right: auto !important;
            top: auto !important;
            bottom: 12px !important;
            transform: translateX(-50%) !important;
            width: 124px !important;
            text-align: center !important;
          }
          .team-arc-dot-4 > span {
            left: 12px !important;
            right: auto !important;
            top: auto !important;
            bottom: 12px !important;
            transform: none !important;
            width: 108px !important;
            text-align: left !important;
          }
          .team-radar {
            top: auto !important;
            bottom: -50vw !important;
            left: 50% !important;
            transform: translateX(-50%) scaleY(-1) !important;
            width: 100vw !important;
            height: 100vw !important;
            background-size: 100% 100% !important;
            background-position: center center !important;
            overflow: hidden !important;
          }
        }
      `}</style>
      <FadeIn><ServicesSection /></FadeIn>
      <FadeIn><ServicesPodborSection /></FadeIn>
      <FadeIn><ServicesAuditSection /></FadeIn>
      <FadeIn><ServicesManagementSection /></FadeIn>
      <FadeIn><ServicesAiSection /></FadeIn>
      <FadeIn><ServicesAccountingSection /></FadeIn>
      <FadeIn><ServicesExternalSection /></FadeIn>
      <FadeIn><ServicesTeamSection /></FadeIn>
      <FadeIn><ServicesHrTeamSection /></FadeIn>
    </>
  );
}

