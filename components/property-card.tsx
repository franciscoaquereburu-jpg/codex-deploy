import Image from "next/image"

interface PropertyCardProps {
  image: string
  badges: { text: string; premium?: boolean }[]
  price: string
  priceType: string
  title: string
  location: string
  facts: { value: string; label: string }[]
  actionLabel: string
}

export function PropertyCard({
  image,
  badges,
  price,
  priceType,
  title,
  location,
  facts,
  actionLabel,
}: PropertyCardProps) {
  return (
    <article className="overflow-hidden bg-white border border-[var(--line)] rounded-lg shadow-[0_10px_28px_rgba(16,24,39,.07)]">
      <div className="relative h-[210px] md:h-[230px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {badges.map((badge, i) => (
            <span
              key={i}
              className={`inline-block px-2 py-1.5 rounded-lg text-xs font-black ${
                badge.premium
                  ? "bg-[var(--gold)] text-[#07111e]"
                  : "bg-[rgba(7,17,30,0.82)] text-white"
              }`}
            >
              {badge.text}
            </span>
          ))}
        </div>
      </div>

      <div className="p-3.5">
        <div className="flex justify-between gap-2.5 mb-2">
          <strong className="text-[22px]">{price}</strong>
          <span className="text-[var(--muted)] text-sm">{priceType}</span>
        </div>

        <h3 className="m-0 text-[17px] font-bold">{title}</h3>
        <div className="text-[var(--muted)] text-sm mt-2 mb-3">{location}</div>

        <div className="grid grid-cols-3 gap-2 mb-3.5">
          {facts.map((fact, i) => (
            <div
              key={i}
              className="p-2 min-h-[50px] bg-[#f8fafc] border border-[#e6edf2] rounded-lg"
            >
              <b className="block">{fact.value}</b>
              <small className="text-[var(--muted)]">{fact.label}</small>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button className="min-h-[42px] px-3.5 text-[var(--ink)] bg-[#edf3f5] rounded-lg font-bold">
            Détails
          </button>
          <button className="min-h-[42px] px-4 text-[#07111e] bg-gradient-to-br from-[#ffe4a2] via-[var(--gold)] to-[#a77322] rounded-lg font-bold">
            {actionLabel}
          </button>
        </div>
      </div>
    </article>
  )
}
