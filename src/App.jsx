import { useState } from "react";

const schedule = {
  "CS2": {
    label: "Cơ Sở 2",
    classes: [
      { name: "Kid Dance Summer 1", room: "Room B", days: "T3 & T5", time: "09:00 – 10:00", teacher: "Biu", tag: "kid", note: "POP UP Hè" },
      { name: "Kid Dance Summer 2", room: "Room B", days: "T2 & T4", time: "09:00 – 10:00", teacher: "Hin", tag: "kid", note: "POP UP Hè" },
      { name: "Kid Dance 3", room: "Room B", days: "T3 & T5", time: "17:30 – 18:30", teacher: "Thảo", tag: "kid" },
      { name: "Kid Dance 4", room: "Room B", days: "T7 & CN", time: "08:00 – 09:00", teacher: "Hin", tag: "kid" },
      { name: "Kid Dance 5", room: "Room B", days: "T7 & CN", time: "09:00 – 10:00", teacher: "Hin", tag: "kid" },
      { name: "HipHop Kid 3", room: "Room B", days: "T2 & T4", time: "17:30 – 18:30", teacher: "Lợi", tag: "kid" },
      { name: "Choreo 4", room: "Room B", days: "T2 & T4", time: "18:30 – 19:30", teacher: "Lợi", tag: "choreo" },
      { name: "Choreo 2", room: "Room B", days: "T3 & T5", time: "18:30 – 19:30", teacher: "Trầm", tag: "choreo" },
      { name: "Choreo 5", room: "Room B", days: "T3 & T5", time: "19:30 – 20:30", teacher: "Thảo", tag: "choreo" },
      { name: "Cover Dance (K-POP/USUK)", room: "Room C", days: "T2 & T4", time: "18:30 – 19:30", teacher: "Biu", tag: "cover" },
      { name: "T24 Junior", room: "Room B", days: "T7 & CN", time: "17:30 – 19:00", teacher: "Lợi", tag: "choreo" },
    ]
  },
  "CS1": {
    label: "Cơ Sở 1",
    classes: [
      { name: "Kid Dance 1", room: "Room A", days: "T7 & CN", time: "08:00 – 09:00", teacher: "Biu", tag: "kid" },
      { name: "Kid Dance 2", room: "Room A", days: "T7 & CN", time: "09:00 – 10:00", teacher: "Thảo", tag: "kid" },
      { name: "HipHop Kid 1", room: "Room A", days: "T2 & T4", time: "17:30 – 18:30", teacher: "Hin", tag: "kid" },
      { name: "HipHop Kid 2", room: "Room A", days: "T3 & T5", time: "17:30 – 18:30", teacher: "Lợi", tag: "kid" },
      { name: "Choreo 1", room: "Room A", days: "T2 & T4", time: "18:30 – 19:30", teacher: "Kiệt", tag: "choreo" },
      { name: "Choreo 3", room: "Room A", days: "T3 & T5", time: "19:30 – 20:30", teacher: "Lợi", tag: "choreo" },
      { name: "Cover Dance (K-POP/USUK)", room: "Room A", days: "T3 & T5", time: "18:30 – 19:30", teacher: "Biu", tag: "cover" },
      { name: "Girlstyle", room: "Room A", days: "T3 & T6", time: "19:30 – 20:30", teacher: "Lee", tag: "girlstyle" },
    ]
  }
};

const tagMeta = {
  kid:      { label: "Kid Dance",   color: "#FF6B9D", bg: "#FFF0F6" },
  choreo:   { label: "Choreo",      color: "#7B5CF0", bg: "#F3F0FF" },
  cover:    { label: "Cover Dance", color: "#0EA5E9", bg: "#F0F9FF" },
  girlstyle:{ label: "Girlstyle",   color: "#F97316", bg: "#FFF7ED" },
};

const ALL = "all";

export default function App() {
  const [activeTag, setActiveTag] = useState(ALL);
  const [activeBranch, setActiveBranch] = useState(ALL);

  const tags = [
    { id: ALL, label: "Tất cả" },
    { id: "kid", label: "Kid Dance" },
    { id: "choreo", label: "Choreo" },
    { id: "cover", label: "Cover Dance" },
    { id: "girlstyle", label: "Girlstyle" },
  ];

  const branches = [
    { id: ALL, label: "Tất cả" },
    { id: "CS1", label: "Cơ Sở 1" },
    { id: "CS2", label: "Cơ Sở 2" },
  ];

  const filtered = Object.entries(schedule)
    .filter(([key]) => activeBranch === ALL || activeBranch === key)
    .map(([key, branch]) => ({
      key, label: branch.label,
      classes: branch.classes.filter(c => activeTag === ALL || c.tag === activeTag)
    }))
    .filter(b => b.classes.length > 0);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0A0A0F",
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      color: "#F0EEF8",
      padding: "0 0 60px",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #1A0533 0%, #0D0D1A 60%, #0A1628 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "36px 24px 28px",
        textAlign: "center",
      }}>
        <div style={{
          fontSize: 11, letterSpacing: "0.3em", color: "#7B5CF0",
          fontWeight: 600, textTransform: "uppercase", marginBottom: 10
        }}>
          T24 Dance Studio
        </div>
        <h1 style={{
          fontSize: "clamp(26px, 5vw, 40px)", fontWeight: 800,
          margin: "0 0 6px",
          background: "linear-gradient(90deg, #fff 0%, #C4B5FD 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
        }}>
          LỊCH DẠY CÁC LỚP
        </h1>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: "rgba(123,92,240,0.12)", border: "1px solid rgba(123,92,240,0.25)",
            borderRadius: 10, padding: "6px 14px",
          }}>
            <span style={{ fontSize: 13 }}>📍</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
              <span style={{ color: "#C4B5FD", fontWeight: 700 }}>Cơ sở 1:</span> 58 Hoàng Văn Thụ, P. Tam Thắng, TP. HCM
            </span>
          </div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: "rgba(123,92,240,0.12)", border: "1px solid rgba(123,92,240,0.25)",
            borderRadius: 10, padding: "6px 14px",
          }}>
            <span style={{ fontSize: 13 }}>📍</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
              <span style={{ color: "#C4B5FD", fontWeight: 700 }}>Cơ sở 2:</span> 259/1 Nguyễn Hữu Cảnh, P. Rạch Dừa, TP. HCM
            </span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px" }}>

        {/* Filters */}
        <div style={{ marginTop: 28, marginBottom: 8 }}>
          <div style={{ fontSize: 10, letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)", fontWeight: 600, textTransform: "uppercase", marginBottom: 10 }}>
            Loại lớp
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {tags.map(t => (
              <button key={t.id} onClick={() => setActiveTag(t.id)} style={{
                padding: "7px 16px", borderRadius: 20, border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: 600,
                background: activeTag === t.id
                  ? (t.id === ALL ? "#fff" : tagMeta[t.id]?.color)
                  : "rgba(255,255,255,0.07)",
                color: activeTag === t.id
                  ? (t.id === ALL ? "#0A0A0F" : "#fff")
                  : "rgba(255,255,255,0.5)",
                transition: "all 0.15s",
              }}>{t.label}</button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 16, marginBottom: 28 }}>
          <div style={{ fontSize: 10, letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)", fontWeight: 600, textTransform: "uppercase", marginBottom: 10 }}>
            Cơ sở
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {branches.map(b => (
              <button key={b.id} onClick={() => setActiveBranch(b.id)} style={{
                padding: "7px 16px", borderRadius: 20, border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: 600,
                background: activeBranch === b.id ? "#fff" : "rgba(255,255,255,0.07)",
                color: activeBranch === b.id ? "#0A0A0F" : "rgba(255,255,255,0.5)",
                transition: "all 0.15s",
              }}>{b.label}</button>
            ))}
          </div>
        </div>

        {/* Branch sections */}
        {filtered.map(branch => (
          <div key={branch.key} style={{ marginBottom: 40 }}>
            <div style={{
              fontSize: 11, letterSpacing: "0.25em", fontWeight: 700,
              textTransform: "uppercase", color: "#7B5CF0",
              borderLeft: "3px solid #7B5CF0", paddingLeft: 12,
              marginBottom: 16,
            }}>
              {branch.label}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {branch.classes.map((cls, i) => {
                const meta = tagMeta[cls.tag];
                return (
                  <div key={i} style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 14,
                    padding: "16px 18px",
                    display: "flex", alignItems: "center", gap: 14,
                    transition: "background 0.15s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.07)"}
                    onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}
                  >
                    {/* Color bar */}
                    <div style={{
                      width: 4, flexShrink: 0, borderRadius: 4,
                      background: meta.color, alignSelf: "stretch", minHeight: 44
                    }} />

                    {/* Main info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
                        <span style={{ fontWeight: 700, fontSize: 15 }}>{cls.name}</span>
                        {cls.note && (
                          <span style={{
                            fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                            background: "linear-gradient(90deg, #FF6B9D, #FFB347)",
                            color: "#fff", borderRadius: 6, padding: "2px 8px",
                            textTransform: "uppercase"
                          }}>{cls.note}</span>
                        )}
                      </div>
                      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <span>📅 {cls.days}</span>
                        <span>🕐 {cls.time}</span>
                        <span>📍 {cls.room}</span>
                      </div>
                    </div>

                    {/* Teacher + tag */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6, flexShrink: 0 }}>
                      <div style={{
                        fontSize: 11, fontWeight: 700, letterSpacing: "0.05em",
                        background: meta.color + "22",
                        color: meta.color,
                        border: `1px solid ${meta.color}44`,
                        borderRadius: 8, padding: "3px 10px",
                      }}>{meta.label}</div>
                      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>
                        👤 {cls.teacher}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", color: "rgba(255,255,255,0.25)", marginTop: 60, fontSize: 15 }}>
            Không có lớp nào phù hợp.
          </div>
        )}
      </div>
    </div>
  );
}
