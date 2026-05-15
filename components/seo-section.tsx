import Link from "next/link"

const seoLinks = [
  { href: "/immobilier/togo/lome", label: "/immobilier/togo/lome", region: "Grand Lomé" },
  { href: "/vente/appartement/lome", label: "/vente/appartement/lome", region: "vente" },
  { href: "/location/maison/agoenyive", label: "/location/maison/agoenyive", region: "location" },
  { href: "/terrain/kara", label: "/terrain/kara", region: "foncier" },
  { href: "/immobilier/togo/kpalime", label: "/immobilier/togo/kpalime", region: "Plateaux" },
  { href: "/agences/lome", label: "/agences/lome", region: "agences" },
]

export function SeoSection() {
  return (
    <section className="py-9 md:py-18 px-4 md:px-16" id="seo">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="m-0 text-2xl md:text-4xl font-bold">Pages locales Togo</h2>
            <p className="max-w-[560px] mt-2 text-[var(--muted)] leading-relaxed">
              Routes SEO prêtes pour les recherches par ville, type de bien et intention achat/location.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {seoLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex justify-between min-h-[52px] p-3.5 border border-[var(--line)] rounded-lg bg-white no-underline font-bold hover:border-[var(--gold)] transition-colors"
            >
              {link.label}
              <span className="text-[var(--muted)] text-sm font-normal">{link.region}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
