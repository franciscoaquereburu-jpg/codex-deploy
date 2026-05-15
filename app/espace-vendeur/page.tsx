"use client"

import { useState } from "react"
import Link from "next/link"
import { Topbar } from "@/components/topbar"
import { Footer } from "@/components/footer"
import { Plus, Eye, MessageSquare, TrendingUp, Settings, LogOut, Home, BarChart2, FileText, Users } from "lucide-react"

const myProperties = [
  {
    id: 1,
    title: "Appartement lumineux a Tokoin",
    price: "121 000 000 FCFA",
    status: "active",
    views: 342,
    leads: 12,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    title: "Terrain titre foncier Kara",
    price: "47 000 000 FCFA",
    status: "pending",
    views: 0,
    leads: 0,
    image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    title: "Villa avec jardin Agoe",
    price: "950 000 FCFA/mois",
    status: "active",
    views: 186,
    leads: 8,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&q=80"
  },
]

const recentLeads = [
  { name: "Kofi M.", property: "Appartement Tokoin", date: "Il y a 2h", type: "WhatsApp" },
  { name: "Ami D.", property: "Villa Agoe", date: "Il y a 5h", type: "Appel" },
  { name: "Jean K.", property: "Appartement Tokoin", date: "Hier", type: "WhatsApp" },
]

export default function EspaceVendeurPage() {
  const [activeTab, setActiveTab] = useState("annonces")

  return (
    <>
      <Topbar />
      <main className="min-h-screen bg-[var(--soft)]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-16 py-8">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
            {/* Sidebar */}
            <aside className="bg-white border border-[var(--line)] rounded-lg p-4 h-fit md:sticky md:top-[94px]">
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[var(--line)]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ffe4a2] via-[var(--gold)] to-[#a77322] flex items-center justify-center text-[#07111e] font-bold text-lg">
                  JD
                </div>
                <div>
                  <p className="font-bold">Jean Dupont</p>
                  <p className="text-sm text-[var(--muted)]">Particulier</p>
                </div>
              </div>

              <nav className="space-y-1">
                {[
                  { id: "annonces", label: "Mes annonces", icon: Home },
                  { id: "stats", label: "Statistiques", icon: BarChart2 },
                  { id: "leads", label: "Demandes", icon: MessageSquare },
                  { id: "factures", label: "Factures", icon: FileText },
                  { id: "profil", label: "Mon profil", icon: Users },
                  { id: "parametres", label: "Parametres", icon: Settings },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? "bg-[rgba(214,169,76,0.12)] text-[var(--gold)] font-bold"
                        : "text-[var(--muted)] hover:bg-[#f8fafc]"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </button>
                ))}
                <hr className="my-3 border-[var(--line)]" />
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-red-500 hover:bg-red-50 transition-colors">
                  <LogOut className="w-5 h-5" />
                  Deconnexion
                </button>
              </nav>
            </aside>

            {/* Main Content */}
            <div className="space-y-6">
              {/* Stats Overview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Annonces actives", value: "3", trend: "+1 ce mois" },
                  { label: "Vues totales", value: "528", trend: "+12% vs mois dernier" },
                  { label: "Demandes", value: "20", trend: "+5 cette semaine" },
                  { label: "Taux de conversion", value: "3.8%", trend: "Stable" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white border border-[var(--line)] rounded-lg p-4">
                    <p className="text-sm text-[var(--muted)]">{stat.label}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    <p className="text-xs text-[#0f766e] mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {stat.trend}
                    </p>
                  </div>
                ))}
              </div>

              {/* My Properties */}
              <div className="bg-white border border-[var(--line)] rounded-lg overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b border-[var(--line)]">
                  <h2 className="font-bold text-lg">Mes annonces</h2>
                  <Link
                    href="/publier"
                    className="flex items-center gap-2 min-h-[42px] px-4 text-[#07111e] bg-gradient-to-br from-[#ffe4a2] via-[var(--gold)] to-[#a77322] rounded-lg font-bold"
                  >
                    <Plus className="w-4 h-4" />
                    Nouvelle annonce
                  </Link>
                </div>

                <div className="divide-y divide-[var(--line)]">
                  {myProperties.map((property) => (
                    <div key={property.id} className="flex items-center gap-4 p-4">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold truncate">{property.title}</h3>
                        <p className="text-[var(--gold)] font-bold">{property.price}</p>
                        <div className="flex items-center gap-4 mt-1 text-sm text-[var(--muted)]">
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {property.views} vues
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            {property.leads} demandes
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-2 py-1.5 rounded-lg text-xs font-black ${
                            property.status === "active"
                              ? "bg-[#ecfdf5] text-[#0f766e]"
                              : "bg-[#fff2cf] text-[#8a5d12]"
                          }`}
                        >
                          {property.status === "active" ? "Actif" : "En attente"}
                        </span>
                        <button className="min-h-[36px] px-3 text-[var(--ink)] bg-[#edf3f5] rounded-lg font-bold text-sm">
                          Modifier
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Leads */}
              <div className="bg-white border border-[var(--line)] rounded-lg overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b border-[var(--line)]">
                  <h2 className="font-bold text-lg">Dernieres demandes</h2>
                  <button className="text-sm text-[var(--gold)] font-bold hover:underline">
                    Voir tout
                  </button>
                </div>

                <div className="divide-y divide-[var(--line)]">
                  {recentLeads.map((lead, i) => (
                    <div key={i} className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#f8fafc] flex items-center justify-center font-bold text-[var(--muted)]">
                          {lead.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold">{lead.name}</p>
                          <p className="text-sm text-[var(--muted)]">{lead.property}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                          lead.type === "WhatsApp" ? "bg-[#dcfce7] text-[#16a34a]" : "bg-[#dbeafe] text-[#2563eb]"
                        }`}>
                          {lead.type}
                        </span>
                        <p className="text-xs text-[var(--muted)] mt-1">{lead.date}</p>
                      </div>
                    </div>
                  ))}
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
