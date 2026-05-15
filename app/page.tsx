import { Topbar } from "@/components/topbar"
import { SearchForm } from "@/components/search-form"
import { PropertyCard } from "@/components/property-card"
import { MapSection } from "@/components/map-section"
import { SeoSection } from "@/components/seo-section"
import { DashboardSection } from "@/components/dashboard-section"
import { Footer } from "@/components/footer"

const properties = [
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    badges: [{ text: "Premium", premium: true }, { text: "Vérifié" }],
    price: "121 000 000 FCFA",
    priceType: "Vente",
    title: "Appartement lumineux à Tokoin",
    location: "Tokoin, Lomé",
    facts: [
      { value: "92 m²", label: "surface" },
      { value: "3", label: "chambres" },
      { value: "2", label: "bains" },
    ],
    actionLabel: "WhatsApp",
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
    badges: [{ text: "Agence" }],
    price: "950 000 FCFA",
    priceType: "/ mois",
    title: "Villa familiale avec jardin",
    location: "Agoè-Nyivé, Grand Lomé",
    facts: [
      { value: "210 m²", label: "surface" },
      { value: "4", label: "chambres" },
      { value: "1", label: "jardin" },
    ],
    actionLabel: "Contacter",
  },
  {
    image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=1000&q=80",
    badges: [{ text: "Terrain", premium: true }],
    price: "47 000 000 FCFA",
    priceType: "Vente",
    title: "Terrain titre foncier proche axe",
    location: "Kara, région de la Kara",
    facts: [
      { value: "620 m²", label: "terrain" },
      { value: "TF", label: "statut" },
      { value: "Route", label: "accès" },
    ],
    actionLabel: "Appeler",
  },
  {
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80",
    badges: [{ text: "Luxe", premium: true }, { text: "Piscine" }],
    price: "452 000 000 FCFA",
    priceType: "Vente",
    title: "Résidence contemporaine proche plage",
    location: "Anécho, Maritime",
    facts: [
      { value: "340 m²", label: "surface" },
      { value: "5", label: "suites" },
      { value: "Mer", label: "vue" },
    ],
    actionLabel: "Rendez-vous",
  },
]

export default function Home() {
  return (
    <>
      <Topbar />
      
      <main>
        {/* Hero Section */}
        <section
          className="min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-72px)] flex items-end p-4 md:p-16 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(7,17,30,0.25), rgba(7,17,30,0.76)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85')",
          }}
          id="acheter"
        >
          <div className="max-w-[1320px] mx-auto w-full grid grid-cols-1 md:grid-cols-[minmax(280px,0.95fr)_minmax(320px,1.05fr)] gap-5 md:gap-14 items-end">
            <div className="text-white pb-7">
              <div className="inline-block mb-4 px-2.5 py-2 rounded-lg bg-[rgba(214,169,76,0.22)] border border-[rgba(214,169,76,0.45)] text-sm font-black">
                Marketplace immobilier premium au Togo
              </div>
              <h1 className="m-0 max-w-[760px] text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.98] text-balance">
                Trouvez un bien fiable, vite, sur mobile.
              </h1>
              <p className="max-w-[620px] mt-5 text-white/90 text-base md:text-xl leading-relaxed">
                Achat, location, terrain, luxe ou projet neuf : recherche claire, annonces vérifiées, prix en FCFA et contact vendeur immédiat.
              </p>
            </div>
            <SearchForm />
          </div>
        </section>

        {/* Properties Section */}
        <section className="py-9 md:py-18 px-4 md:px-16" id="louer">
          <div className="max-w-[1320px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <h2 className="m-0 text-2xl md:text-4xl font-bold">Biens recommandés</h2>
                <p className="max-w-[560px] mt-2 text-[var(--muted)] leading-relaxed">
                  Comparez rapidement les biens avec les informations essentielles avant contact.
                </p>
              </div>
              <button className="min-h-[42px] px-4 text-[#07111e] bg-gradient-to-br from-[#ffe4a2] via-[var(--gold)] to-[#a77322] rounded-lg font-bold">
                Voir la carte
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] gap-5 items-start">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {properties.map((property, i) => (
                  <PropertyCard key={i} {...property} />
                ))}
              </div>
              <MapSection />
            </div>
          </div>
        </section>

        <SeoSection />
        <DashboardSection />
      </main>
      <Footer />
    </>
  )
}
