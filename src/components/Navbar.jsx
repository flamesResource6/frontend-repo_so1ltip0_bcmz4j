import { useState } from 'react'
import { Menu } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-yellow-400 flex items-center justify-center shadow-inner">
            <span className="font-black text-gray-900">C</span>
          </div>
          <span className="font-semibold tracking-tight text-gray-900">Creatrix Digital</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#work" className="hover:text-gray-900">Work</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#contact" className="px-4 py-2 rounded-full bg-yellow-400 text-gray-900 font-medium shadow hover:shadow-md transition">Contact</a>
        </nav>

        <button className="md:hidden p-2" aria-label="Open menu" onClick={() => setOpen(!open)}>
          <Menu className="h-6 w-6 text-gray-900" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-6 py-4 space-y-3">
            <a href="#services" className="block text-gray-700">Services</a>
            <a href="#work" className="block text-gray-700">Work</a>
            <a href="#about" className="block text-gray-700">About</a>
            <a href="#contact" className="block text-gray-900 font-medium">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
