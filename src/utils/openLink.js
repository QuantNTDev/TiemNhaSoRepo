// const isMobile = () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

// Mobile + có deepLink: thử mở app, nếu sau 1,2 giây vẫn ở trang này thì mở link web.
// Còn lại: mở link affiliate (https) ở tab mới; Shopee/TikTok thường tự mở app nếu máy đã cài.

const isMobile = () =>
  /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
  (navigator.userAgent.includes('Macintosh') && navigator.maxTouchPoints > 1)

  export function goTo(url) {
    if (isMobile()) window.location.href = url
    else window.open(url, '_blank', 'noopener,noreferrer')
  }

export function openProduct(p) {
  if (isMobile() && p.deepLink) {
    const t = setTimeout(() => { window.location.href = p.url }, 1200)
    document.addEventListener('visibilitychange', () => { if (document.hidden) clearTimeout(t) }, { once: true })
    window.location.href = p.deepLink
    return
  }
  // window.open(p.url, '_blank', 'noopener,noreferrer')
  // window.location.href = p.url
  goTo(p.url)
}

export const formatPrice = (n) => n.toLocaleString('vi-VN') + 'đ'
