"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Topbar } from "@/components/topbar"
import { Footer } from "@/components/footer"
import { PropertyCard } from "@/components/property-card"
import { MapPin, Bed, Bath, Square, Calendar, Shield, Heart, Share2, ChevronLeft, ChevronRight, Phone, MessageCircle } from "lucide-react"

const property = {
  id: 1,
  title: "Appartement lumineux a Tokoin",
  price: "121 000 000 FCFA",
  priceType: "Vente",
  location: "Tokoin, Lome",
  description: `Superbe appartement de 3 chambres situe dans le quartier recherche de Tokoin a Lome. Ce bien offre un cadre de vie exceptionnel avec ses espaces lumineux et sa finition haut de gamme.

L'appartement comprend:
- Un grand sejour avec acces balcon
- Une cuisine entierement equipee
- 3 chambres spacieuses dont une suite parentale
- 2 salles de bain modernes
- Un balcon avec vue degagee

Proche de toutes commodites: ecoles, commerces, transports. Residence securisee avec gardien 24h/24.`,
  surface: 92,
  bedrooms: 3,
  bathrooms: 2,
  yearBuilt: 2021,
  features: ["Meuble", "Parking", "Balcon", "Climatisation", "Securite 24h", "Cuisine equipee"],
  images: [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
  ],
  agent: {
    name: "Immobilier Premium Togo",
    type: "Agence",
    phone: "+228 90 12 34 56",
    verified: true,
  }
}

const similarProperties = [
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
    badges: [{ text: "Agence" }],
    price: "95 000 000 FCFA",
    priceType: "Vente",
    title: "Appartement 2 chambres Tokoin",
    location: "Tokoin, Lome",
    facts: [
      { value: "75 m2", label: "surface" },
      { value: "2", label: "chambres" },
      { value: "1", label: "bain" },
    ],
    actionLabel: "Voir",
  },
  {
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80",
    badges: [{ text: "Premium", premium: true }],
    price: "185 000 000 FCFA",
    priceType: "Vente",
    title: "Villa moderne Agoe",
    location: "Agoe-Nyive, Lome",
    facts: [
      { value: "180 m2", label: "surface" },
      { value: "4", label: "chambres" },
      { value: "3", label: "bains" },
    ],
    actionLabel: "Voir",
  },
]

export default function PropertyDetailPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  return (
    <>
      <Topbar />
      <main className="min-h-screen bg-[var(--soft)]">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[var(--line)]">
          <div className="max-w-[1320px] mx-auto px-4 md:px-16 py-3">
            <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
              <Link href="/" className="hover:text-[var(--gold)]">Accueil</Link>
              <span>/</span>
              <Link href="#" className="hover:text-[var(--gold)]">Vente</Link>
              <span>/</span>
              <Link href="#" className="hover:text-[var(--gold)]">Lome</Link>
              <span>/</span>
              <span className="text-[var(--ink)]">{property.title}</span>
            </div>
          </div>
        </div>

        <div className="max-w-[1320px] mx-auto px-4 md:px-16 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
            {/* Main Content */}
            <div className="space-y-6">
              {/* Image Gallery */}
              <div className="relative bg-white border border-[var(--line)] rounded-lg overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={property.images[currentImage]}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/60 text-white text-sm rounded-full">
                    {currentImage + 1} / {property.images.length}
                  </div>

                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                        isFavorite ? "bg-red-500 text-white" : "bg-white/90 text-[var(--ink)] hover:bg-white"
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
                    </button>
                    <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1.5 bg-[var(--gold)] text-[#07111e] text-sm font-black rounded-lg">
                      Premium
                    </span>
                    <span className="px-3 py-1.5 bg-[rgba(7,17,30,0.82)] text-white text-sm font-black rounded-lg">
                      Verifie
                    </span>
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 p-3 overflow-x-auto">
                  {property.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden ${
                        currentImage === i ? "ring-2 ring-[var(--gold)]" : ""
                      }`}
                    >
                      <Image src={img} alt={`Photo ${i + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Info */}
              <div className="bg-white border border-[var(--line)] rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold">{property.title}</h1>
                    <div className="flex items-center gap-2 text-[var(--muted)] mt-2">
                      <MapPin className="w-4 h-4" />
                      {property.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-[var(--gold)]">{property.price}</p>
                    <p className="text-[var(--muted)]">{property.priceType}</p>
                  </div>
                </div>

                {/* Key Facts */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="p-4 bg-[#f8fafc] border border-[#e6edf2] rounded-lg text-center">
                    <Square className="w-6 h-6 mx-auto mb-2 text-[var(--gold)]" />
                    <b className="block">{property.surface} m2</b>
                    <span className="text-sm text-[var(--muted)]">Surface</span>
                  </div>
                  <div className="p-4 bg-[#f8fafc] border border-[#e6edf2] rounded-lg text-center">
                    <Bed className="w-6 h-6 mx-auto mb-2 text-[var(--gold)]" />
                    <b className="block">{property.bedrooms}</b>
                    <span className="text-sm text-[var(--muted)]">Chambres</span>
                  </div>
                  <div className="p-4 bg-[#f8fafc] border border-[#e6edf2] rounded-lg text-center">
                    <Bath className="w-6 h-6 mx-auto mb-2 text-[var(--gold)]" />
                    <b className="block">{property.bathrooms}</b>
                    <span className="text-sm text-[var(--muted)]">Salles de bain</span>
                  </div>
                  <div className="p-4 bg-[#f8fafc] border border-[#e6edf2] rounded-lg text-center">
                    <Calendar className="w-6 h-6 mx-auto mb-2 text-[var(--gold)]" />
                    <b className="block">{property.yearBuilt}</b>
                    <span className="text-sm text-[var(--muted)]">Annee</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mb-3">Description</h2>
                  <p className="text-[var(--muted)] whitespace-pre-line leading-relaxed">
                    {property.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-lg font-bold mb-3">Equipements</h2>
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, i) => (
                      <span key={i} className="px-3 py-2 bg-[#f8fafc] border border-[#e6edf2] rounded-lg text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Similar Properties */}
              <div>
                <h2 className="text-xl font-bold mb-4">Biens similaires</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {similarProperties.map((prop, i) => (
                    <PropertyCard key={i} {...prop} />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Contact */}
            <div className="space-y-4 lg:sticky lg:top-[94px] h-fit">
              {/* Agent Card */}
              <div className="bg-white border border-[var(--line)] rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ffe4a2] via-[var(--gold)] to-[#a77322] flex items-center justify-center text-[#07111e] font-bold text-lg">
                    IP
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold">{property.agent.name}</p>
                      {property.agent.verified && (
                        <Shield className="w-4 h-4 text-[#0f766e]" />
                      )}
                    </div>
                    <p className="text-sm text-[var(--muted)]">{property.agent.type}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/22890123456`}
                    className="flex items-center justify-center gap-2 w-full min-h-[46px] px-4 text-white bg-[#25d366] rounded-lg font-bold hover:bg-[#20bd5a] transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="flex items-center justify-center gap-2 w-full min-h-[46px] px-4 text-[var(--ink)] bg-[#edf3f5] rounded-lg font-bold hover:bg-[#dce6eb] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Appeler
                  </a>
                </div>

                <p className="text-xs text-[var(--muted)] text-center mt-4">
                  Reponse moyenne en moins de 2 heures
                </p>
              </div>

              {/* Request Visit Form */}
              <div className="bg-white border border-[var(--line)] rounded-lg p-6">
                <h3 className="font-bold mb-4">Demander une visite</h3>
                <form className="space-y-3">
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="h-[46px] w-full px-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)]"
                  />
                  <input
                    type="tel"
                    placeholder="Votre telephone"
                    className="h-[46px] w-full px-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)]"
                  />
                  <textarea
                    rows={3}
                    placeholder="Message (optionnel)"
                    className="w-full px-3 py-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)] resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full min-h-[46px] px-4 text-[#07111e] bg-gradient-to-br from-[#ffe4a2] via-[var(--gold)] to-[#a77322] rounded-lg font-bold"
                  >
                    Envoyer la demande
                  </button>
                </form>
              </div>

              {/* Safety Notice */}
              <div className="bg-[rgba(214,169,76,0.08)] border border-[rgba(214,169,76,0.3)] rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm">Annonce verifiee</p>
                    <p className="text-xs text-[var(--muted)] mt-1">
                      Ce bien a ete verifie par notre equipe. Ne versez jamais d&apos;argent avant d&apos;avoir visite.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
