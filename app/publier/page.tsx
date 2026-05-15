"use client"

import { useState } from "react"
import Link from "next/link"
import { Topbar } from "@/components/topbar"
import { Footer } from "@/components/footer"
import { Upload, X, MapPin, Home, DollarSign, Info, Camera } from "lucide-react"

const villes = [
  "Lome", "Agoe-Nyive", "Aneho", "Kpalime", "Atakpame", "Sokode", "Kara", "Dapaong", "Mango", "Bassar",
]

export default function PublierPage() {
  const [step, setStep] = useState(1)
  const [images, setImages] = useState<string[]>([])
  const [transactionType, setTransactionType] = useState("vente")
  const [propertyType, setPropertyType] = useState("appartement")

  const addImage = () => {
    // Simulate adding an image
    const newImage = `https://images.unsplash.com/photo-160060768793${Math.floor(Math.random() * 9)}?auto=format&fit=crop&w=400&q=80`
    setImages([...images, newImage])
  }

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  return (
    <>
      <Topbar />
      <main className="min-h-screen bg-[var(--soft)] py-8 px-4 md:px-16">
        <div className="max-w-[900px] mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link href="/" className="text-[var(--gold)] text-sm hover:underline mb-2 inline-block">
              &larr; Retour a l&apos;accueil
            </Link>
            <h1 className="text-3xl font-bold">Publier une annonce</h1>
            <p className="text-[var(--muted)] mt-2">Remplissez les informations de votre bien immobilier</p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
            {[
              { num: 1, label: "Type", icon: Home },
              { num: 2, label: "Photos", icon: Camera },
              { num: 3, label: "Details", icon: Info },
              { num: 4, label: "Localisation", icon: MapPin },
              { num: 5, label: "Prix", icon: DollarSign },
            ].map((s) => (
              <button
                key={s.num}
                onClick={() => setStep(s.num)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  step === s.num
                    ? "bg-[var(--gold)] text-[#07111e] font-bold"
                    : step > s.num
                    ? "bg-[#ecfdf5] text-[#0f766e]"
                    : "bg-white border border-[var(--line)] text-[var(--muted)]"
                }`}
              >
                <s.icon className="w-4 h-4" />
                {s.label}
              </button>
            ))}
          </div>

          {/* Form Content */}
          <div className="bg-white border border-[var(--line)] rounded-lg shadow-[var(--shadow)] p-6 md:p-8">
            {/* Step 1: Type */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs text-[var(--muted)] font-black uppercase mb-3">
                    Type de transaction
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["vente", "location", "court sejour"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setTransactionType(type)}
                        className={`p-4 border rounded-lg text-center font-bold capitalize transition-colors ${
                          transactionType === type
                            ? "border-[var(--gold)] bg-[rgba(214,169,76,0.08)]"
                            : "border-[var(--line)] hover:border-[var(--gold)]"
                        }`}
                      >
                        {type === "court sejour" ? "Court sejour" : type.charAt(0).toUpperCase() + type.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[var(--muted)] font-black uppercase mb-3">
                    Type de bien
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["appartement", "maison", "terrain", "local commercial", "bien de luxe", "studio"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setPropertyType(type)}
                        className={`p-4 border rounded-lg text-center font-bold capitalize transition-colors ${
                          propertyType === type
                            ? "border-[var(--gold)] bg-[rgba(214,169,76,0.08)]"
                            : "border-[var(--line)] hover:border-[var(--gold)]"
                        }`}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Photos */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs text-[var(--muted)] font-black uppercase mb-3">
                    Photos du bien (minimum 3)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {images.map((img, i) => (
                      <div key={i} className="relative aspect-square rounded-lg overflow-hidden group">
                        <img src={img} alt={`Photo ${i + 1}`} className="w-full h-full object-cover" />
                        <button
                          onClick={() => removeImage(i)}
                          className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={addImage}
                      className="aspect-square border-2 border-dashed border-[var(--line)] rounded-lg flex flex-col items-center justify-center gap-2 text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
                    >
                      <Upload className="w-8 h-8" />
                      <span className="text-sm">Ajouter</span>
                    </button>
                  </div>
                  <p className="text-xs text-[var(--muted)] mt-2">
                    Formats acceptes: JPG, PNG. Taille max: 5 Mo par photo.
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Details */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs text-[var(--muted)] font-black uppercase mb-2">
                    Titre de l&apos;annonce
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Appartement lumineux avec terrasse"
                    className="h-[46px] w-full px-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[var(--muted)] font-black uppercase mb-2">
                    Description
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Decrivez votre bien en detail..."
                    className="w-full px-3 py-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)] resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs text-[var(--muted)] font-black uppercase mb-2">
                      Surface (m2)
                    </label>
                    <input
                      type="number"
                      placeholder="120"
                      className="h-[46px] w-full px-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[var(--muted)] font-black uppercase mb-2">
                      Chambres
                    </label>
                    <select className="h-[46px] w-full px-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)]">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[var(--muted)] font-black uppercase mb-2">
                      Salles de bain
                    </label>
                    <select className="h-[46px] w-full px-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)]">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[var(--muted)] font-black uppercase mb-2">
                      Annee construction
                    </label>
                    <input
                      type="number"
                      placeholder="2020"
                      className="h-[46px] w-full px-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[var(--muted)] font-black uppercase mb-3">
                    Equipements
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Meuble", "Parking", "Piscine", "Jardin", "Climatisation", "Securite", "Balcon", "Cuisine equipee"].map((eq) => (
                      <label key={eq} className="flex items-center gap-2 px-3 py-2 border border-[var(--line)] rounded-lg cursor-pointer hover:border-[var(--gold)] transition-colors">
                        <input type="checkbox" className="rounded border-[var(--line)]" />
                        <span className="text-sm">{eq}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Localisation */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[var(--muted)] font-black uppercase mb-2">
                      Ville
                    </label>
                    <select className="h-[46px] w-full px-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)]">
                      {villes.map((ville) => (
                        <option key={ville}>{ville}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[var(--muted)] font-black uppercase mb-2">
                      Quartier
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Tokoin"
                      className="h-[46px] w-full px-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[var(--muted)] font-black uppercase mb-2">
                    Adresse complete
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Rue du Commerce, proche marche"
                    className="h-[46px] w-full px-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)]"
                  />
                </div>

                <div className="h-[300px] bg-[#f8fafc] border border-[var(--line)] rounded-lg flex items-center justify-center text-[var(--muted)]">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>Cliquez sur la carte pour positionner votre bien</p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Prix */}
            {step === 5 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs text-[var(--muted)] font-black uppercase mb-2">
                    Prix en FCFA
                  </label>
                  <input
                    type="number"
                    placeholder="150000000"
                    className="h-[46px] w-full px-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)] text-xl"
                  />
                  <p className="text-sm text-[var(--muted)] mt-1">
                    {transactionType === "location" ? "Prix par mois" : "Prix de vente total"}
                  </p>
                </div>

                <div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="rounded border-[var(--line)] w-5 h-5" />
                    <div>
                      <span className="font-bold">Prix negociable</span>
                      <p className="text-sm text-[var(--muted)]">Les acheteurs peuvent proposer un prix</p>
                    </div>
                  </label>
                </div>

                <div className="p-4 bg-[rgba(214,169,76,0.08)] border border-[rgba(214,169,76,0.3)] rounded-lg">
                  <h3 className="font-bold mb-2">Options de visibilite</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="visibility" defaultChecked className="w-4 h-4" />
                      <div>
                        <span className="font-bold">Standard</span>
                        <span className="text-[var(--muted)]"> - Gratuit</span>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="visibility" className="w-4 h-4" />
                      <div>
                        <span className="font-bold text-[var(--gold)]">Premium</span>
                        <span className="text-[var(--muted)]"> - 15 000 FCFA/mois (mise en avant)</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[var(--muted)] font-black uppercase mb-2">
                    Contact prefere
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center gap-2 p-3 border border-[var(--line)] rounded-lg cursor-pointer hover:border-[var(--gold)]">
                      <input type="checkbox" defaultChecked className="rounded border-[var(--line)]" />
                      <span>WhatsApp</span>
                    </label>
                    <label className="flex items-center gap-2 p-3 border border-[var(--line)] rounded-lg cursor-pointer hover:border-[var(--gold)]">
                      <input type="checkbox" className="rounded border-[var(--line)]" />
                      <span>Appel telephonique</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-[var(--line)]">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="min-h-[46px] px-6 text-[var(--ink)] bg-[#edf3f5] rounded-lg font-bold"
                >
                  Precedent
                </button>
              ) : (
                <div />
              )}
              {step < 5 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="min-h-[46px] px-6 text-[#07111e] bg-gradient-to-br from-[#ffe4a2] via-[var(--gold)] to-[#a77322] rounded-lg font-bold"
                >
                  Suivant
                </button>
              ) : (
                <button
                  className="min-h-[46px] px-6 text-[#07111e] bg-gradient-to-br from-[#ffe4a2] via-[var(--gold)] to-[#a77322] rounded-lg font-bold"
                >
                  Publier l&apos;annonce
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
