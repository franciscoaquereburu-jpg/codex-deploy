"use client"

import { useState } from "react"

const villes = [
  "Lome",
  "Agoe-Nyive",
  "Aneho",
  "Kpalime",
  "Atakpame",
  "Sokode",
  "Kara",
  "Dapaong",
  "Mango",
  "Bassar",
]

export function SearchForm() {
  const [activeTab, setActiveTab] = useState("acheter")
  const [activeChips, setActiveChips] = useState<string[]>(["Meuble"])

  const toggleChip = (chip: string) => {
    setActiveChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    )
  }

  return (
    <form
      className="bg-white/95 border border-white/70 rounded-lg shadow-[0_18px_50px_rgba(16,24,39,.16)] overflow-hidden"
      onSubmit={(e) => {
        e.preventDefault()
        document.querySelector("#louer")?.scrollIntoView({ behavior: "smooth" })
      }}
    >
      <div className="grid grid-cols-3 gap-2 p-2.5 border-b border-[var(--line)]">
        {["acheter", "louer", "court sejour"].map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`h-[42px] rounded-lg font-bold capitalize transition-colors ${
              activeTab === tab
                ? "bg-[var(--navy)] text-white"
                : "bg-transparent text-[var(--muted)]"
            }`}
          >
            {tab === "court sejour" ? "Court séjour" : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-3 p-4">
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-xs text-[var(--muted)] font-black uppercase">
            Ville, quartier ou région
          </label>
          <input
            defaultValue="Lomé, Togo"
            list="villes"
            className="h-[46px] w-full px-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)]"
          />
          <datalist id="villes">
            {villes.map((ville) => (
              <option key={ville} value={ville} />
            ))}
          </datalist>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs text-[var(--muted)] font-black uppercase">Type</label>
          <select className="h-[46px] w-full px-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)]">
            <option>Appartement</option>
            <option>Maison</option>
            <option>Terrain</option>
            <option>Local commercial</option>
            <option>Bien de luxe</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs text-[var(--muted)] font-black uppercase">Budget max</label>
          <select className="h-[46px] w-full px-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)]">
            <option>150 000 000 FCFA</option>
            <option>50 000 000 FCFA</option>
            <option>300 000 000 FCFA</option>
            <option>650 000 000 FCFA</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs text-[var(--muted)] font-black uppercase">Chambres</label>
          <select className="h-[46px] w-full px-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)]">
            <option>2+</option>
            <option>3+</option>
            <option>4+</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs text-[var(--muted)] font-black uppercase">Surface</label>
          <select className="h-[46px] w-full px-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)]">
            <option>60 m²+</option>
            <option>100 m²+</option>
            <option>250 m²+</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 px-4 pb-4">
        {["Meuble", "Parking", "Piscine", "Verifie", "Premium"].map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => toggleChip(chip)}
            className={`h-9 px-3 rounded-lg text-sm font-bold transition-colors ${
              activeChips.includes(chip)
                ? "bg-[var(--gold)] text-[#07111e]"
                : "bg-[#edf3f5] text-[var(--ink)]"
            }`}
          >
            {chip === "Verifie" ? "Vérifié" : chip === "Meuble" ? "Meublé" : chip}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-3 p-4 bg-[#f8fafc] border-t border-[var(--line)] text-sm text-[var(--muted)]">
        <span>128 biens disponibles au Togo</span>
        <button
          type="submit"
          className="w-full md:w-auto min-h-[42px] px-4 text-[#07111e] bg-gradient-to-br from-[#ffe4a2] via-[var(--gold)] to-[#a77322] rounded-lg font-bold"
        >
          Rechercher
        </button>
      </div>
    </form>
  )
}
