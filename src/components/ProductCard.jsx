import { openProduct, formatPrice, goTo } from '../utils/openLink.js'

const PLATFORM = { shopee: 'Shopee', tiktok: 'TikTok Shop' }

export default function ProductCard({ p }) {
  const hasPriceMin = p.priceMin !== undefined && p.priceMin !== null && p.priceMin !== ''
  return (
    <article className="card"> {/* Nội dung sản phẩm */} 
      <div className="card-content"> 
        <div className="thumb"
          onClick={() => {
            if (p.videoUrl) goTo(p.videoUrl)
          }}
        > 
          {p.image ? ( 
            <img src={p.image} alt={p.name} loading="lazy" /> ) 
            : ( 
            <span aria-hidden="true">{p.emoji}</span> 
          )} 
          <em className={'badge ' + p.platform}>
             {PLATFORM[p.platform]} 
          </em> 
          {p.videoUrl && ( 
            <div className={'play'}>
              <div className={'absoluteplay'}/>
              <svg width="20" height="20" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M302 166.028C312.667 172.187 312.667 187.583 302 193.741L80 321.913C69.3333 328.071 56 320.373 56 308.056L56 51.7128C56 39.396 69.3333 31.698 80 37.8564L302 166.028Z" fill="white"/>
              </svg>
            </div>
          )}

        </div> 
        <h3>{p.name}</h3> 
        <div className="price-area"> 
          <p className="price"> 
            {formatPrice(p.price)} 
          </p> 
          {hasPriceMin ? ( 
            <div className="divpricemin"> 
              <p className="pricemin"> 
                {formatPrice(p.priceMin)} 
              </p> 
              <svg 
                width="10" height="10" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                aria-hidden="true" > 
                  <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" /> 
                  <circle cx="7.5" cy="7.5" r=".6" fill="currentColor" /> 
              </svg> 
            </div> 
          ) : null} 
        </div> 
      </div> {/* Luôn nằm cuối card */} 
      <div className="actions"> 
        <button 
          className="buy" 
          onClick={() => openProduct(p)} 
        > 
          Mua ngay 
        </button> 
      </div> 
    </article>
  )
}
