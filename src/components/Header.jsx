import Logo from './Logo.jsx'
import { SHOP, SOCIALS } from '../data/config.js'

export default function Header({ query, onQuery }) {
  return (
    <header className="header">
      <div className="brand">
        <Logo />
        <div>
          <h1>{SHOP.name}</h1>
          <p>{SHOP.tagline}</p>
        </div>
      </div>
      <nav className="socials" aria-label="Kênh của Tiệm nhà số">
        {SOCIALS.map((s) => (
          <a key={s.id} className={'social' + (s.url ? '' : ' off')} href={s.url || undefined}
             target="_blank" rel="noopener noreferrer" aria-disabled={!s.url}>{s.label}</a>
        ))}
      </nav>
      <input className="search" type="search" value={query} onChange={(e) => onQuery(e.target.value)}
             placeholder="Tìm sản phẩm, ví dụ: nồi chiên" aria-label="Tìm sản phẩm" />
    </header>
  )
}
