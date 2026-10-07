import { SHOP } from '../data/config.js'
export default function Footer() {
  return (
    <footer className="footer">
      <p>Trang có chứa link affiliate (link tiếp thị liên kết). {SHOP.name} có thể nhận hoa hồng khi bạn mua qua link, giá của bạn không đổi.</p>
      <p>© {new Date().getFullYear()} {SHOP.name}</p>
    </footer>
  )
}
