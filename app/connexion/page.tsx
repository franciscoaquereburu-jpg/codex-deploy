"use client"

import { useState } from "react"
import Link from "next/link"
import { OsirisLogo } from "@/components/osiris-logo"
import { Eye, EyeOff } from "lucide-react"

export default function ConnexionPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/espace-vendeur"
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[var(--soft)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 text-[var(--navy)] font-black uppercase">
            <OsirisLogo className="w-14 h-14" />
            <div className="text-left">
              Osiris
              <small className="block text-[var(--gold)] text-[11px] tracking-[2px]">Prime</small>
            </div>
          </Link>
        </div>

        <div className="bg-white border border-[var(--line)] rounded-lg shadow-[var(--shadow)] p-6 md:p-8">
          <h1 className="text-2xl font-bold mb-2">Connexion</h1>
          <p className="text-[var(--muted)] mb-6">Accedez a votre espace vendeur</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-[var(--muted)] font-black uppercase mb-2">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="votre@email.com"
                className="h-[46px] w-full px-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)]"
              />
            </div>

            <div>
              <label className="block text-xs text-[var(--muted)] font-black uppercase mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="h-[46px] w-full px-3 pr-12 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)]"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-[var(--line)]" />
                <span className="text-[var(--muted)]">Se souvenir de moi</span>
              </label>
              <Link href="/mot-de-passe-oublie" className="text-[var(--gold)] hover:underline">
                Mot de passe oublie ?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full min-h-[46px] px-4 text-[#07111e] bg-gradient-to-br from-[#ffe4a2] via-[var(--gold)] to-[#a77322] rounded-lg font-bold disabled:opacity-50"
            >
              {isLoading ? "Connexion..." : "Se connecter"}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-[var(--line)] text-center text-sm">
            <span className="text-[var(--muted)]">Pas encore de compte ? </span>
            <Link href="/inscription" className="text-[var(--gold)] font-bold hover:underline">
              Creer un compte
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
