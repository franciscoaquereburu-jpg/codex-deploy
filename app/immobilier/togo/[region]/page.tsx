import { Topbar } from "@/components/topbar"
import { Footer } from "@/components/footer"
import { PropertyCard } from "@/components/property-card"
import { SearchForm } from "@/components/search-form"
import { MapSection } from "@/components/map-section"

interface PageProps {
  params: Promise<{
    region: string
  }>
}

const regionData: Record<string, { name: string; description: string }> = {
  "lome": {
    name: "Lome",
    description: "Capitale du Togo, Lome est le centre economique et culturel du pays. Decouvrez nos biens immobiliers dans les quartiers les plus recherches."
  },
  "agoenyive": {
    name: "Agoe-Nyive",
    description: "Commune dynamique du Grand Lome, Agoe-Nyive offre un cadre de vie familial avec de nombreuses opportunites immobilieres."
  },
  "kara": {
    name: "Kara",
    description: "Chef-lieu de la region de la Kara, cette ville offre un marche immobilier en pleine expansion avec des prix attractifs."
  },
  "kpalime": {
    name: "Kpalime",
    description: "Situee dans la region des Plateaux, Kpalime est reputee pour son climat agreable et ses paysages verdoyants."
  },
  "sokode": {
    name: "Sokode",
    description: "Deuxieme ville du Togo, Sokode est un carrefour commercial important avec un marche immobilier diversifie."
  },
}

const properties = [
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    badges: [{ text: "Premium", premium: true }, { text: "Verifie" }],
    price: "121 000 000 FCFA",
    priceType: "Vente",
    title: "Appartement lumineux",
    location: "Centre-ville",
    facts: [
      { value: "92 m2", label: "surface" },
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
    location: "Quartier residentiel",
    facts: [
      { value: "210 m2", label: "surface" },
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
    title: "Terrain titre foncier",
    location: "Zone periurbaine",
    facts: [
      { value: "620 m2", label: "terrain" },
      { value: "TF", label: "statut" },
      { value: "Route", label: "acces" },
    ],
    actionLabel: "Appeler",
  },
  {
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80",
    badges: [{ text: "Luxe", premium: true }],
    price: "452 000 000 FCFA",
    priceType: "Vente",
    title: "Residence contemporaine",
    location: "Quartier premium",
    facts: [
      { value: "340 m2", label: "surface" },
      { value: "5", label: "suites" },
      { value: "Piscine", label: "extra" },
    ],
    actionLabel: "Rendez-vous",
  },
]

export default async function RegionPage({ params }: PageProps) {
  const { region } = await params
  const data = regionData[region] || {
    name: region.charAt(0).toUpperCase() + region.slice(1),
    description: `Decouvrez nos biens immobiliers disponibles dans la region de ${region}.`
  }

  return (
    <>
      <Topbar />
      <main className="min-h-screen bg-[var(--soft)]">
        {/* Hero */}
        <section
          className="py-16 md:py-24 px-4 md:px-16 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(7,17,30,0.7), rgba(7,17,30,0.85)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85')",
          }}
        >
          <div className="max-w-[1320px] mx-auto text-white">
            <div className="inline-block mb-4 px-2.5 py-2 rounded-lg bg-[rgba(214,169,76,0.22)] border border-[rgba(214,169,76,0.45)] text-sm font-black">
              Immobilier au Togo
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Immobilier a {data.name}
            </h1>
            <p className="max-w-[700px] text-white/80 text-lg leading-relaxed">
              {data.description}
            </p>
          </div>
        </section>

        {/* Search + Results */}
        <section className="py-9 md:py-12 px-4 md:px-16">
          <div className="max-w-[1320px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 items-start">
              <div className="lg:sticky lg:top-[94px]">
                <SearchForm />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-[var(--muted)]">
                    <strong className="text-[var(--ink)]">24 biens</strong> disponibles a {data.name}
                  </p>
                  <select className="h-[42px] px-3 border border-[var(--line)] rounded-lg bg-white text-[var(--ink)]">
                    <option>Plus recents</option>
                    <option>Prix croissant</option>
                    <option>Prix decroissant</option>
                    <option>Surface</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {properties.map((property, i) => (
                    <PropertyCard key={i} {...property} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-2">
                  <button className="min-h-[42px] px-4 text-white bg-[var(--navy)] rounded-lg font-bold">
                    1
                  </button>
                  <button className="min-h-[42px] px-4 text-[var(--ink)] bg-white border border-[var(--line)] rounded-lg font-bold hover:border-[var(--gold)]">
                    2
                  </button>
                  <button className="min-h-[42px] px-4 text-[var(--ink)] bg-white border border-[var(--line)] rounded-lg font-bold hover:border-[var(--gold)]">
                    3
                  </button>
                  <button className="min-h-[42px] px-4 text-[var(--ink)] bg-white border border-[var(--line)] rounded-lg font-bold hover:border-[var(--gold)]">
                    Suivant &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-9 md:py-12 px-4 md:px-16 bg-white border-y border-[var(--line)]">
          <div className="max-w-[1320px] mx-auto">
            <h2 className="text-2xl font-bold mb-6">Carte des biens a {data.name}</h2>
            <div className="h-[500px]">
              <MapSection />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export function generateStaticParams() {
  return [
    { region: "lome" },
    { region: "agoenyive" },
    { region: "kara" },
    { region: "kpalime" },
    { region: "sokode" },
  ]
}
