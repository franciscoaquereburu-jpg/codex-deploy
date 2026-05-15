import Link from "next/link"
import { OsirisLogo } from "./osiris-logo"

export function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white py-12 md:py-16 px-4 md:px-16">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 text-white font-black uppercase mb-4">
              <OsirisLogo className="w-10 h-10" />
              <div>
                Osiris
                <small className="block text-[var(--gold)] text-[11px] tracking-[2px]">Prime</small>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Marketplace immobilier premium au Togo. Trouvez votre bien en toute confiance.
            </p>
          </div>

          {/* Acheter */}
          <div>
            <h4 className="font-bold mb-4 text-[var(--gold)]">Acheter</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/vente/appartement/lome" className="hover:text-white transition-colors">Appartements Lome</Link></li>
              <li><Link href="/vente/maison/lome" className="hover:text-white transition-colors">Maisons Lome</Link></li>
              <li><Link href="/terrain/lome" className="hover:text-white transition-colors">Terrains Lome</Link></li>
              <li><Link href="/luxe/lome" className="hover:text-white transition-colors">Biens de luxe</Link></li>
            </ul>
          </div>

          {/* Louer */}
          <div>
            <h4 className="font-bold mb-4 text-[var(--gold)]">Louer</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/location/appartement/lome" className="hover:text-white transition-colors">Location appartement</Link></li>
              <li><Link href="/location/maison/lome" className="hover:text-white transition-colors">Location maison</Link></li>
              <li><Link href="/court-sejour/lome" className="hover:text-white transition-colors">Court sejour</Link></li>
              <li><Link href="/location/meuble/lome" className="hover:text-white transition-colors">Meuble</Link></li>
            </ul>
          </div>

          {/* Infos */}
          <div>
            <h4 className="font-bold mb-4 text-[var(--gold)]">Informations</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/a-propos" className="hover:text-white transition-colors">A propos</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/agences/lome" className="hover:text-white transition-colors">Agences partenaires</Link></li>
              <li><Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions legales</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Osiris Prime. Tous droits reserves.</p>
          <div className="flex gap-4">
            <Link href="/confidentialite" className="hover:text-white transition-colors">Confidentialite</Link>
            <Link href="/conditions" className="hover:text-white transition-colors">Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
