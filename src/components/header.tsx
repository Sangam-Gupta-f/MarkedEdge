import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-[#10182C] flex items-center justify-center p-4">
      {/* Header Container */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex items-end gap-1">
            <div className="w-2 h-6 bg-blue-500 rounded-sm"></div>
            <div className="w-2 h-4 bg-blue-500 rounded-sm"></div>
            <div className="w-2 h-5 bg-orange-400 rounded-sm"></div>
          </div>
          <span className="font-bold text-lg">
            <span className="text-blue-600">ADCURE</span>
            <span className="text-orange-400">MEDIA</span>
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <a href="#services" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
            Services
          </a>
          <a href="#clients" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
            Clients
          </a>
          <a href="#why" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
            Why Adcure Media ?
          </a>
          <a href="#reviews" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
            Reviews
          </a>
          <a href="#faq" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
            FAQ's
          </a>
        </nav>

        {/* Chat Now Button */}
        <Button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-2 rounded-lg flex-shrink-0">
          Chat Now
        </Button>
      </div>
    </div>
  )
}
