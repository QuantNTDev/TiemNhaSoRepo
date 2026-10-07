import { useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import CategoryBar from './components/CategoryBar.jsx'
import ProductCard from './components/ProductCard.jsx'
import Footer from './components/Footer.jsx'
import { CATEGORIES, PRODUCTS } from './data/products.js'

const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd')

export default function App() {
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('Tất cả')

  const list = useMemo(() => PRODUCTS.filter((p) =>
    (cat === 'Tất cả' || p.category === cat) && norm(p.name).includes(norm(query.trim()))
  ), [query, cat])

  return (
    <div className="page">
      <Header query={query} onQuery={setQuery} />
      <main>
        <CategoryBar items={CATEGORIES} active={cat} onChange={setCat} />
        {list.length ? (
          <section className="grid">{list.map((p) => <ProductCard key={p.id} p={p} />)}</section>
        ) : (
          <p className="empty">Chưa có sản phẩm khớp. Thử từ khóa khác hoặc chọn "Tất cả".</p>
        )}
      </main>
      <Footer />
    </div>
  )
}
