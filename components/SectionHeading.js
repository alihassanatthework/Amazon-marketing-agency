export default function SectionHeading({ badge, title, text, center = true }) {
  return (
    <div className={center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {badge && (
        <span className="badge">{badge}</span>
      )}
      <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.2] mt-4 max-w-4xl mx-auto">{title}</h2>
      {/* <h2 className="subheading mt-4">{title}</h2> */}

      {text && <p className="text-muted mt-4">{text}</p>}
    </div>
  );
}