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
const TEAM_GRADIENT_IMG = "/figma-assets/team-gradient.png";
const TEAM_RADAR_IMG = "/figma-assets/team-radar.svg";
const TEAM_DOT1_IMG = "/figma-assets/team-dot1.svg";
const TEAM_DOT2_IMG = "/figma-assets/team-dot2.svg";

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
      className="split-section"
      style={{
        ...deferredSectionStyle,
        minHeight: "max(100svh, 760px)",
        background: "linear-gradient(123.5deg, rgb(15, 5, 14) 0.89%, rgb(117, 39, 109) 128.63%)",
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
          backdropFilter: "blur(50px)",
          WebkitBackdropFilter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* "Услуги" — Figma: left:calc(50%-871px), top:484, font:580px, gradient text */}
      <p
        className="svc-title-text"
        style={{
          position: "absolute",
          left: "calc(50% - 45.36vw)",
          top: "clamp(260px, 44.81vh, 484px)",
          fontFamily: font,
          fontWeight: 400,
          fontSize: "clamp(120px, 30.21vw, 580px)",
          lineHeight: 0.8,
          letterSpacing: "-0.04em",
          background: "linear-gradient(179.1deg, rgba(255,0,230,0.25) 13.03%, rgb(255,255,255) 135.21%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
          margin: 0,
          whiteSpace: "nowrap",
          zIndex: 2,
        }}
      >
        Услуги
      </p>

      {/* Infinity logo — animated */}
      <div className="svc-infinity" style={{ position: "absolute", left: "86.72vw", top: "clamp(20px, 4.26vh, 46px)", width: "clamp(80px, 11.3vw, 217px)", height: "clamp(40px, 10.28vh, 111px)", pointerEvents: "none", zIndex: 2 }}>
                  <InfinityMark />
      </div>
      {/* Переход → ServicesPodborSection rgb(15,5,14) */}
      <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "clamp(220px,26vw,320px)", background: "linear-gradient(to bottom,rgba(15,5,14,0) 0%,rgba(15,5,14,0) 55%,rgba(15,5,14,0.12) 68%,rgba(15,5,14,0.38) 80%,rgba(15,5,14,0.72) 92%,rgb(15,5,14) 100%)", pointerEvents: "none", zIndex: 5 }} />
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
      <div className="ext-blur-band" style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "68.98vh", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(50px)", WebkitBackdropFilter: "blur(50px)", pointerEvents: "none", zIndex: 1 }} />

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
    <section className="split-section" style={{ ...deferredSectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#0d1f1f" }}>

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
      <p style={{ position: "absolute", left: "3.125vw", top: "clamp(580px, 79.54vh, 859px)", width: "clamp(280px, 75.68vw, 1453px)", fontFamily: font, fontWeight: 400, fontSize: "clamp(28px, 5.208vw, 100px)", lineHeight: 0.9, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "pre-wrap" }}>
        <span style={{ color: "#0bbab5" }}>Автоматизация</span>
        {" \nчерез искусственный интеллект"}
      </p>
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
      <div className="sales-transition-fade" aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "clamp(280px,32vw,420px)", background: "linear-gradient(to bottom,rgba(13,31,31,0) 0%,rgba(13,31,31,0) 55%,rgba(13,31,31,0.12) 68%,rgba(13,31,31,0.38) 80%,rgba(13,31,31,0.72) 92%,rgb(13,31,31) 100%)", pointerEvents: "none", zIndex: 5 }} />
    </section>
  );
}

// Figma node: 2040:326 "Услуги — Подбор новинок" — file MOHJ9F1OX9kaB0rKsCZm7i
function ServicesPodborSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  return (
    <section
      className="split-section"
      style={{
        ...deferredSectionStyle,
        minHeight: "max(100svh, 760px)",
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
          top: "21.3vh",
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
          top: "24.72vh",
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
          top: "29.07vh",
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
        {/* Subtitle inside card — shown on mobile only */}
        <p className="podbor-subtitle-inside" style={{ display: "none", position: "absolute", top: 20, left: 24, right: 24, fontFamily: font, fontWeight: 400, fontSize: "clamp(12px, 3vw, 16px)", lineHeight: 1.3, letterSpacing: "-0.03em", color: "#ffffff", margin: 0 }}>
          Получаете презентацию с 3 товарами: анализ ниши, конкуренты, расчет юнит-экономики, оценка рисков, пошаговый план запуска
        </p>
        {/* Brand logo area — Figma (in card): left:43.85 top:426.36 w:195.593 h:46.397 */}
        <div
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

        {/* "АНАЛИЗ САЛФЕТОК ДЛЯ УБОРКИ"
            Figma: left:680.96 → translateX(-100%) → net left ~6%, top:472.65, w:637.104
            font: Roboto Condensed Bold 63.345px → 3.3vw */}
        <p
          style={{
            position: "absolute",
            left: "6.07%",
            top: "46.08%",
            width: "87.9%",
            fontFamily: "Roboto Condensed, Arial Narrow, Arial, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(14px, 3.3vw, 63px)",
            lineHeight: 1,
            color: "#ffffff",
            textAlign: "right",
            margin: 0,
          }}
        >
          АНАЛИЗ САЛФЕТОК ДЛЯ УБОРКИ
        </p>
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
        Получаете презентацию с 3 товарами: анализ ниши, конкуренты, расчет юнит-экономики, оценка рисков, пошаговый план запуска
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
  );
}

// Figma node: 2040:389 "Услуги — Подбор и развитие команды" — file MOHJ9F1OX9kaB0rKsCZm7i
function ServicesTeamSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  const bullets = [
    "Определяем, кто реально нужен",
    "Разрабатываем портреты должностей",
    "Подбираем и собеседуем кандидатов",
    "Выстраиваем систему адаптации",
  ];
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

      {/* Bullet list right — left:970 top:291 opacity:50% font:45px */}
      <div className="team-bullets" style={{
        position: "absolute",
        left: "clamp(360px, 50.52vw, 970px)",
        top: "clamp(160px, 26.94vh, 291px)",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        opacity: 0.5,
        zIndex: 2,
      }}>
        {bullets.map((text, i) => (
          <p key={i} style={{
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(14px, 2.344vw, 45px)",
            lineHeight: 1,
            letterSpacing: "-0.035em",
            color: "#ffffff",
            margin: 0,
            whiteSpace: "nowrap",
          }}>
            • {text}
          </p>
        ))}
      </div>

      {/* Radar — left:12 top:573 w:1896 h:1891 flipped vertically */}
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
        { }
        <Img alt="" src={TEAM_RADAR_IMG} style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
      </div>

      {/* Gradient overlay — same container as radar, image in top half (bottom:50%) */}
      <div className="team-gradient-overlay" style={{
        position: "absolute",
        left: "0.677vw",
        top: "clamp(320px, 53.06vh, 573px)",
        width: "98.75vw",
        height: "175.09vh",
        zIndex: 2,
        pointerEvents: "none",
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: "50%" }}>
            <Image
              alt=""
              src={TEAM_GRADIENT_IMG}
              fill
              sizes="(max-width: 768px) 100vw, 99vw"
              decoding="async"
              style={{ objectFit: "fill", maxWidth: "none" }}
            />
          </div>
        </div>

      {/* Dot 1 — left:444 top:850 size:67px */}
      <div className="team-dot team-dot-1" style={{ position: "absolute", left: "23.125vw", top: "78.7vh", width: "clamp(30px, 3.49vw, 67px)", height: "clamp(30px, 3.49vw, 67px)", zIndex: 3, pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: "-74.63%" }}>
          { }
          <Img alt="" src={TEAM_DOT1_IMG} style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
        </div>
      </div>

      {/* Dot 2 — left:797 top:848 size:67px */}
      <div className="team-dot team-dot-2" style={{ position: "absolute", left: "41.51vw", top: "78.52vh", width: "clamp(30px, 3.49vw, 67px)", height: "clamp(30px, 3.49vw, 67px)", zIndex: 3, pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: "-74.63%" }}>
          { }
          <Img alt="" src={TEAM_DOT1_IMG} style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
        </div>
      </div>

      {/* Dot 3 — left:1027 top:696 size:67px */}
      <div className="team-dot team-dot-3" style={{ position: "absolute", left: "53.49vw", top: "64.44vh", width: "clamp(30px, 3.49vw, 67px)", height: "clamp(30px, 3.49vw, 67px)", zIndex: 3, pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: "-74.63%" }}>
          { }
          <Img alt="" src={TEAM_DOT2_IMG} style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
        </div>
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
          left: "-11.563vw",
          top: "33.519vh",
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
          top: "63.426vh",
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
          top: "70.926vh",
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
          top: "55.556vh",
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
        @media (max-width: 768px) {
          /* ── SALES: Отдел продаж под ключ ─────────────────── */
          .sales-section {
            min-height: max(72svh, 520px) !important;
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
          /* Белая карточка: прижать к низу секции */
          .sales-white-card {
            position: absolute !important;
            top: auto !important;
            bottom: 0 !important;
            padding: 16px 20px !important;
          }
          /* ── PODBOR: Подбираем новинки ────────────────────── */
          /* Серые прямоугольники — по центру, на высоту основной карточки */
          .podbor-rect-1 {
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: 88% !important;
            top: 29.07vh !important;
            height: clamp(300px, 94.97vh, 1026px) !important;
          }
          .podbor-rect-2 {
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: 96% !important;
            top: 29.07vh !important;
            height: clamp(300px, 94.97vh, 1026px) !important;
          }
          .podbor-subtitle-outside {
            display: none !important;
          }
          .podbor-list {
            font-size: 17px !important;
            line-height: 1.4 !important;
            left: 20px !important;
            right: 8px !important;
            max-width: none !important;
          }
          .podbor-subtitle-inside {
            display: block !important;
            font-size: 16px !important;
            line-height: 1.45 !important;
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
            min-height: max(83svh, 620px) !important;
          }
          /* Убрать артефакт 68.98vh — растянуть blur на весь блок */
          .ext-blur-band {
            height: 100% !important;
          }
          .ext-heading {
            top: auto !important;
            bottom: 24px !important;
            opacity: 0.95 !important;
          }
          /* ── AI: infinity 2:1 ─────────────────────────────── */
          .ai-infinity-wrapper {
            width: 48px !important;
            height: 28px !important;
          }
          /* ── TEAM: radar идеальный полукруг ──────────────── */
          .team-section {
            min-height: 0 !important;
            padding-bottom: 280px !important;
          }
          .team-dot {
            display: block !important;
            width: 20px !important;
            height: 20px !important;
          }
          /* Dots на дугах: центр радара = низ секции (bottom:0)
             Dot-1: r≈42vw, θ=140° → left=17vw, bottom=27vw
             Dot-2: r≈30vw, θ=90°  → left=49vw, bottom=30vw
             Dot-3: r≈18vw, θ=50°  → left=61vw, bottom=14vw */
          .team-dot-1 {
            left: 17vw !important;
            top: auto !important;
            bottom: 27vw !important;
          }
          .team-dot-2 {
            left: 49vw !important;
            top: auto !important;
            bottom: calc(30vw + 7px) !important;
          }
          /* Dot-3: верхняя дуга, правая часть — +9px вверх */
          .team-dot-3 {
            left: 70vw !important;
            top: auto !important;
            bottom: calc(36vw + 23px) !important;
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

