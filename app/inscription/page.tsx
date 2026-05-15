"use client"

import { useState } from "react"
import Link from "next/link"
import { OsirisLogo } from "@/components/osiris-logo"
import { Eye, EyeOff, Check } from "lucide-react"

export default function InscriptionPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [accountType, setAccountType] = useState<"particulier" | "agence">("particulier")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/espace-vendeur"
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[var(--soft)] flex items-center justify-center p-4 py-8">
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
          <h1 className="text-2xl font-bold mb-2">Creer un compte</h1>
          <p className="text-[var(--muted)] mb-6">Publiez vos annonces immobilieres</p>

          {/* Account Type Selection */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              onClick={() => setAccountType("particulier")}
              className={`p-4 border rounded-lg text-left transition-colors ${
                accountType === "particulier"
                  ? "border-[var(--gold)] bg-[rgba(214,169,76,0.08)]"
                  : "border-[var(--line)]"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold">Particulier</span>
                {accountType === "particulier" && (
                  <Check className="w-5 h-5 text-[var(--gold)]" />
                )}
              </div>
              <span className="text-xs text-[var(--muted)]">Vendez ou louez votre bien</span>
            </button>
            <button
              type="button"
              onClick={() => setAccountType("agence")}
              className={`p-4 border rounded-lg text-left transition-colors ${
                accountType === "agence"
                  ? "border-[var(--gold)] bg-[rgba(214,169,76,0.08)]"
                  : "border-[var(--line)]"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold">Agence</span>
                {accountType === "agence" && (
                  <Check className="w-5 h-5 text-[var(--gold)]" />
                )}
              </div>
              <span className="text-xs text-[var(--muted)]">Gerez plusieurs biens</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-[var(--muted)] font-black uppercase mb-2">
                  Prenom
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jean"
                  className="h-[46px] w-full px-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)]"
                />
              </div>
              <div>
                <label className="block text-xs text-[var(--muted)] font-black uppercase mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  required
                  placeholder="Dupont"
                  className="h-[46px] w-full px-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)]"
                />
              </div>
            </div>

            {accountType === "agence" && (
              <div>
                <label className="block text-xs text-[var(--muted)] font-black uppercase mb-2">
                  Nom de l&apos;agence
                </label>
                <input
                  type="text"
                  required
                  placeholder="Immobilier Lome"
                  className="h-[46px] w-full px-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)]"
                />
              </div>
            )}

            <div>
              <label className="block text-xs text-[var(--muted)] font-black uppercase mb-2">
                Telephone
              </label>
              <input
                type="tel"
                required
                placeholder="+228 90 XX XX XX"
                className="h-[46px] w-full px-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)]"
              />
            </div>

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
                  minLength={8}
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
              <p className="text-xs text-[var(--muted)] mt-1">Minimum 8 caracteres</p>
            </div>

            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" required className="mt-1 rounded border-[var(--line)]" />
              <span className="text-sm text-[var(--muted)]">
                J&apos;accepte les{" "}
                <Link href="/conditions" className="text-[var(--gold)] hover:underline">
                  conditions d&apos;utilisation
                </Link>{" "}
                et la{" "}
                <Link href="/confidentialite" className="text-[var(--gold)] hover:underline">
                  politique de confidentialite
                </Link>
              </span>
            </label>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full min-h-[46px] px-4 text-[#07111e] bg-gradient-to-br from-[#ffe4a2] via-[var(--gold)] to-[#a77322] rounded-lg font-bold disabled:opacity-50"
            >
              {isLoading ? "Creation..." : "Creer mon compte"}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-[var(--line)] text-center text-sm">
            <span className="text-[var(--muted)]">Deja inscrit ? </span>
            <Link href="/connexion" className="text-[var(--gold)] font-bold hover:underline">
              Se connecter
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
