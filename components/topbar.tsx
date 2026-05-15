"use client"

import Link from "next/link"
import { OsirisLogo } from "./osiris-logo"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Topbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between gap-4 min-h-[72px] px-4 md:px-16 bg-[rgba(7,17,30,0.94)] border-b border-[rgba(214,169,76,0.28)] backdrop-blur-md">
      <Link href="/" className="flex items-center gap-3 text-white font-black uppercase">
        <OsirisLogo className="w-12 h-12 drop-shadow-lg" />
        <div>
          Osiris
          <small className="block text-[var(--gold)] text-[11px] tracking-[2px]">Prime</small>
        </div>
      </Link>

      <nav className="hidden md:flex gap-2 text-white/75 text-sm">
        <Link href="#acheter" className="px-3 py-2.5 rounded-lg hover:bg-[rgba(214,169,76,0.16)] hover:text-white transition-colors">
          Acheter
        </Link>
        <Link href="#louer" className="px-3 py-2.5 rounded-lg hover:bg-[rgba(214,169,76,0.16)] hover:text-white transition-colors">
          Louer
        </Link>
        <Link href="#seo" className="px-3 py-2.5 rounded-lg hover:bg-[rgba(214,169,76,0.16)] hover:text-white transition-colors">
          Villes du Togo
        </Link>
        <Link href="#dashboard" className="px-3 py-2.5 rounded-lg hover:bg-[rgba(214,169,76,0.16)] hover:text-white transition-colors">
          Espace vendeur
        </Link>
      </nav>

      <div className="flex gap-2.5">
        <Link href="/connexion" className="hidden md:flex items-center min-h-[42px] px-3.5 text-white bg-white/10 rounded-lg font-bold hover:bg-white/20 transition-colors">
          Connexion
        </Link>
        <Link href="/publier" className="flex items-center min-h-[42px] px-4 text-[#07111e] bg-gradient-to-br from-[#ffe4a2] via-[var(--gold)] to-[#a77322] rounded-lg font-bold">
          Publier
        </Link>
        <button
          className="md:hidden min-h-[42px] px-3 text-white bg-white/10 rounded-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[rgba(7,17,30,0.98)] border-b border-[rgba(214,169,76,0.28)] md:hidden">
          <nav className="flex flex-col p-4 text-white/75 text-sm">
            <Link href="#acheter" className="px-3 py-3 rounded-lg hover:bg-[rgba(214,169,76,0.16)] hover:text-white">
              Acheter
            </Link>
            <Link href="#louer" className="px-3 py-3 rounded-lg hover:bg-[rgba(214,169,76,0.16)] hover:text-white">
              Louer
            </Link>
            <Link href="#seo" className="px-3 py-3 rounded-lg hover:bg-[rgba(214,169,76,0.16)] hover:text-white">
              Villes du Togo
            </Link>
            <Link href="#dashboard" className="px-3 py-3 rounded-lg hover:bg-[rgba(214,169,76,0.16)] hover:text-white">
              Espace vendeur
            </Link>
            <Link href="/connexion" className="mt-2 px-3 py-3 text-white bg-white/10 rounded-lg font-bold text-left">
              Connexion
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
