import { useState } from 'react'
import logo from '../assets/images/logo.png'
// Đặt file logo vào public/logo.png (hoặc đổi đường dẫn bên dưới).
export default function Logo() {
  const [ok, setOk] = useState(true)
  return ok ? ( 
      <img 
        className="logo" 
        src={logo} 
        alt="Logo Tiệm nhà số" 
        onError={() => setOk(false)} 
        />
    ) : ( 
      <div className="logo logo-ph" aria-hidden="true">
        TNS
      </div>
    )
}
