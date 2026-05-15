export function MapSection() {
  return (
    <aside className="relative md:sticky md:top-[94px] min-h-[430px] md:min-h-[650px] overflow-hidden border border-[var(--line)] rounded-lg shadow-[0_18px_50px_rgba(16,24,39,.16)] bg-gradient-to-b from-[rgba(248,250,252,0.18)] to-[rgba(248,250,252,0.18)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1400&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[rgba(248,250,252,0.18)]" />
      
      <input
        defaultValue="Zone: Lomé, Agoè-Nyivé"
        className="absolute top-3.5 left-3.5 right-[90px] h-[46px] px-3 border border-[var(--line)] rounded-lg bg-white text-[var(--ink)]"
      />
      <button className="absolute top-3.5 right-3.5 min-h-[42px] px-4 text-[#07111e] bg-gradient-to-br from-[#ffe4a2] via-[var(--gold)] to-[#a77322] rounded-lg font-bold">
        Zone
      </button>

      <span className="absolute left-[48%] top-[32%] -translate-x-1/2 -translate-y-1/2 px-2.5 py-2 border-[3px] border-white rounded-full bg-[var(--gold)] text-[#07111e] shadow-[0_8px_22px_rgba(16,24,39,.25)] font-black text-sm">
        452M
      </span>
      <span className="absolute left-[58%] top-[46%] -translate-x-1/2 -translate-y-1/2 px-2.5 py-2 border-[3px] border-white rounded-full bg-[var(--gold)] text-[#07111e] shadow-[0_8px_22px_rgba(16,24,39,.25)] font-black text-sm">
        121M
      </span>
      <span className="absolute left-[38%] top-[62%] -translate-x-1/2 -translate-y-1/2 px-2.5 py-2 border-[3px] border-white rounded-full bg-[var(--gold)] text-[#07111e] shadow-[0_8px_22px_rgba(16,24,39,.25)] font-black text-sm">
        950k
      </span>
      <span className="absolute left-[67%] top-[68%] -translate-x-1/2 -translate-y-1/2 px-2.5 py-2 border-[3px] border-white rounded-full bg-[var(--gold)] text-[#07111e] shadow-[0_8px_22px_rgba(16,24,39,.25)] font-black text-sm">
        47M
      </span>
    </aside>
  )
}
