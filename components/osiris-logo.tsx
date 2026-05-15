export function OsirisLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="g" x1="20%" x2="80%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#fff0b8" />
          <stop offset="48%" stopColor="#d6a94c" />
          <stop offset="100%" stopColor="#8c611d" />
        </linearGradient>
        <linearGradient id="s" x1="25%" x2="75%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#fff8df" />
          <stop offset="54%" stopColor="#d6a94c" />
          <stop offset="100%" stopColor="#153047" />
        </linearGradient>
      </defs>
      <path d="M23 61a28 28 0 0 1 0-42" fill="none" stroke="url(#g)" strokeWidth="8" />
      <path d="M57 19a28 28 0 0 1 0 42" fill="none" stroke="url(#g)" strokeWidth="8" />
      <path d="M40 6 51 21 48 62 40 72 32 62 29 21Z" fill="url(#s)" stroke="#f4d98a" strokeWidth="1.2" />
      <path d="M40 6v66" stroke="rgba(255,255,255,.62)" />
      <path d="M32 62 40 72 48 62 40 67Z" fill="#0b1c2d" opacity=".78" />
    </svg>
  )
}
