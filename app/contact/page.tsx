import Link from "next/link"
import { Topbar } from "@/components/topbar"
import { Footer } from "@/components/footer"
import { OsirisLogo } from "@/components/osiris-logo"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <Topbar />
      <main className="min-h-screen bg-[var(--soft)] py-12 px-4 md:px-16">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-10">
            <OsirisLogo className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold">Contactez-nous</h1>
            <p className="text-[var(--muted)] mt-2 max-w-[500px] mx-auto">
              Une question ? Besoin d&apos;aide ? Notre equipe est la pour vous accompagner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="bg-white border border-[var(--line)] rounded-lg p-6">
                <h2 className="font-bold text-lg mb-4">Nos coordonnees</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Adresse</p>
                      <p className="text-[var(--muted)]">
                        Boulevard du 13 Janvier<br />
                        Quartier Administratif<br />
                        Lome, Togo
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Telephone</p>
                      <p className="text-[var(--muted)]">+228 90 00 00 00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="text-[var(--muted)]">contact@osirisprime.tg</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Horaires</p>
                      <p className="text-[var(--muted)]">
                        Lundi - Vendredi: 8h - 18h<br />
                        Samedi: 9h - 13h
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/22890000000"
                className="flex items-center justify-center gap-2 w-full min-h-[52px] px-4 text-white bg-[#25d366] rounded-lg font-bold hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Contacter via WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-[var(--line)] rounded-lg p-6">
              <h2 className="font-bold text-lg mb-4">Envoyez-nous un message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-xs text-[var(--muted)] font-black uppercase mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Votre nom"
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
                    Sujet
                  </label>
                  <select className="h-[46px] w-full px-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)]">
                    <option>Question generale</option>
                    <option>Support technique</option>
                    <option>Partenariat agence</option>
                    <option>Signaler un probleme</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-[var(--muted)] font-black uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Votre message..."
                    className="w-full px-3 py-3 border border-[var(--line)] rounded-lg bg-[#f8fafc] text-[var(--ink)] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full min-h-[46px] px-4 text-[#07111e] bg-gradient-to-br from-[#ffe4a2] via-[var(--gold)] to-[#a77322] rounded-lg font-bold"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
