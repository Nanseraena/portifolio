import { experiences } from "@/data/experience";

export default function CareerBook() {
  return (
    <div style={{ display: "grid", gap: "1px", background: "#3b3b3b", border: "1px solid #3b3b3b" }}>
      {experiences.map((experience, index) => (
        <article key={experience.company} style={{ display: "grid", gridTemplateColumns: "minmax(8rem, .7fr) minmax(13rem, 1fr) minmax(16rem, 2fr)", gap: "1.5rem", padding: "clamp(1.5rem, 4vw, 3.5rem)", background: index % 2 ? "#f5f5f3" : "#1e1e1e", color: index % 2 ? "#222" : "#fff" }}>
          <div><span style={{ color: index % 2 ? "#777" : "#aaa", fontSize: ".7rem", letterSpacing: ".08em", textTransform: "uppercase" }}>{experience.period}</span></div>
          <div><p style={{ margin: 0, color: index % 2 ? "#555" : "#bbb", fontSize: ".76rem" }}>{experience.role}</p><h3 style={{ margin: ".45rem 0 0", fontSize: "clamp(1.5rem, 2.4vw, 2.4rem)", fontWeight: 400, letterSpacing: "-.05em" }}>{experience.company}</h3></div>
          <div><p style={{ maxWidth: "40rem", margin: 0, lineHeight: 1.65, color: index % 2 ? "#444" : "#d6d6d6" }}>{experience.description}</p><ul style={{ display: "flex", flexWrap: "wrap", gap: ".45rem", margin: "1.4rem 0 0", padding: 0, listStyle: "none" }}>{experience.tags.map((tag) => <li key={tag} style={{ border: `1px solid ${index % 2 ? "#b8b8b8" : "#666"}`, padding: ".32rem .55rem", fontSize: ".67rem" }}>{tag}</li>)}</ul></div>
        </article>
      ))}
    </div>
  );
}
