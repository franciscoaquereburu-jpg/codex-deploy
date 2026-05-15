export function DashboardSection() {
  return (
    <section className="py-9 md:py-18 px-4 md:px-16 bg-white border-y border-[var(--line)]" id="dashboard">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="m-0 text-2xl md:text-4xl font-bold">Espace vendeur et admin</h2>
            <p className="max-w-[560px] mt-2 text-[var(--muted)] leading-relaxed">
              Suivi des annonces, leads, modération et performances pour agences et administrateurs.
            </p>
          </div>
          <button className="min-h-[42px] px-4 text-[#07111e] bg-gradient-to-br from-[#ffe4a2] via-[var(--gold)] to-[#a77322] rounded-lg font-bold">
            Publier une annonce
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-5">
          {/* Performance Panel */}
          <div className="bg-white border border-[var(--line)] rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-[var(--line)]">
              <h3 className="m-0 font-bold">Performance agence</h3>
              <span className="px-2 py-1.5 rounded-lg bg-[#ecfdf5] text-[#0f766e] text-xs font-black">
                Actif
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 p-4">
              <div className="p-3.5 bg-[#f8fafc] border border-[#e6edf2] rounded-lg">
                <strong className="block text-2xl">24</strong>
                <span className="text-[var(--muted)] text-sm">annonces</span>
              </div>
              <div className="p-3.5 bg-[#f8fafc] border border-[#e6edf2] rounded-lg">
                <strong className="block text-2xl">186</strong>
                <span className="text-[var(--muted)] text-sm">leads</span>
              </div>
              <div className="p-3.5 bg-[#f8fafc] border border-[#e6edf2] rounded-lg">
                <strong className="block text-2xl">12%</strong>
                <span className="text-[var(--muted)] text-sm">conversion</span>
              </div>
            </div>
          </div>

          {/* Moderation Panel */}
          <div className="bg-white border border-[var(--line)] rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-[var(--line)]">
              <h3 className="m-0 font-bold">File de modération</h3>
              <button className="min-h-[36px] px-3 text-[var(--ink)] bg-[#edf3f5] rounded-lg font-bold text-sm">
                Tout voir
              </button>
            </div>
            <div className="px-4 pb-4">
              <div className="grid grid-cols-[1fr_auto] gap-3.5 py-3 border-t border-[#e9eef3]">
                <div>
                  <b>Appartement Tokoin</b>
                  <span className="block text-[var(--muted)] text-sm">Photos valides, prix cohérent</span>
                </div>
                <span className="self-center px-2 py-1.5 rounded-lg bg-[#ecfdf5] text-[#0f766e] text-xs font-black">
                  Approuver
                </span>
              </div>
              <div className="grid grid-cols-[1fr_auto] gap-3.5 py-3 border-t border-[#e9eef3]">
                <div>
                  <b>Terrain Kara</b>
                  <span className="block text-[var(--muted)] text-sm">Statut juridique à vérifier</span>
                </div>
                <span className="self-center px-2 py-1.5 rounded-lg bg-[#fff2cf] text-[#8a5d12] text-xs font-black">
                  Vérifier
                </span>
              </div>
              <div className="grid grid-cols-[1fr_auto] gap-3.5 py-3 border-t border-[#e9eef3]">
                <div>
                  <b>Studio meublé Lomé</b>
                  <span className="block text-[var(--muted)] text-sm">Description IA disponible</span>
                </div>
                <span className="self-center px-2 py-1.5 rounded-lg bg-[#ecfdf5] text-[#0f766e] text-xs font-black">
                  Prêt
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
