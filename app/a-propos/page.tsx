import { Topbar } from "@/components/topbar"
import { Footer } from "@/components/footer"
import { OsirisLogo } from "@/components/osiris-logo"
import { Shield, Users, MapPin, CheckCircle } from "lucide-react"

export default function AProposPage() {
  return (
    <>
      <Topbar />
      <main className="min-h-screen bg-[var(--soft)]">
        {/* Hero */}
        <section className="py-16 md:py-24 px-4 md:px-16 bg-[var(--navy)] text-white">
          <div className="max-w-[900px] mx-auto text-center">
            <OsirisLogo className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">A propos d&apos;Osiris Prime</h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-[600px] mx-auto">
              La marketplace immobiliere de reference au Togo. Nous connectons acheteurs, vendeurs et agences pour des transactions transparentes et securisees.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-12 md:py-16 px-4 md:px-16">
          <div className="max-w-[900px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Notre mission</h2>
                <p className="text-[var(--muted)] leading-relaxed mb-4">
                  Osiris Prime a ete cree avec une vision simple : rendre l&apos;immobilier accessible et transparent pour tous les Togolais.
                </p>
                <p className="text-[var(--muted)] leading-relaxed mb-4">
                  Nous croyons que trouver un logement, acheter un terrain ou investir dans l&apos;immobilier ne devrait pas etre complique. C&apos;est pourquoi nous avons developpe une plateforme moderne, intuitive et securisee.
                </p>
                <p className="text-[var(--muted)] leading-relaxed">
                  Chaque annonce est verifiee, chaque prix est affiche en FCFA, et chaque contact est direct. Pas d&apos;intermediaires inutiles, pas de frais caches.
                </p>
              </div>
              <div className="bg-white border border-[var(--line)] rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-[var(--gold)]">500+</p>
                    <p className="text-[var(--muted)] text-sm">Biens en ligne</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-[var(--gold)]">50+</p>
                    <p className="text-[var(--muted)] text-sm">Agences partenaires</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-[var(--gold)]">10k+</p>
                    <p className="text-[var(--muted)] text-sm">Utilisateurs actifs</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-[var(--gold)]">6</p>
                    <p className="text-[var(--muted)] text-sm">Regions couvertes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 md:py-16 px-4 md:px-16 bg-white border-y border-[var(--line)]">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nos valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[rgba(214,169,76,0.12)] flex items-center justify-center">
                  <Shield className="w-8 h-8 text-[var(--gold)]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Confiance</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  Chaque annonce est verifiee par notre equipe. Nous garantissons l&apos;authenticite des informations publiees.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[rgba(214,169,76,0.12)] flex items-center justify-center">
                  <Users className="w-8 h-8 text-[var(--gold)]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Accessibilite</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  Notre plateforme est conçue pour etre simple d&apos;utilisation, meme sur mobile avec une connexion limitee.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[rgba(214,169,76,0.12)] flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-[var(--gold)]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Proximite</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  Nous couvrons tout le Togo, de Lome a Dapaong, pour vous aider a trouver le bien ideal pres de chez vous.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-16 px-4 md:px-16">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi choisir Osiris Prime ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Annonces verifiees par notre equipe",
                "Prix affiches en FCFA, sans surprise",
                "Contact direct avec les vendeurs",
                "Recherche par carte interactive",
                "Application optimisee pour mobile",
                "Support client reactif",
                "Partenariats avec les meilleures agences",
                "Couverture nationale (6 regions)",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white border border-[var(--line)] rounded-lg">
                  <CheckCircle className="w-5 h-5 text-[#0f766e] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
