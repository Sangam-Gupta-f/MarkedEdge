export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Main Content */}
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">Optimize Your Ads For</h1>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Double Profit.
          </h2>
        </div>

        {/* Stats */}
        <p className="text-lg text-gray-300 font-medium">
          2+ Years Experience | 41+ Online Brands | 5+ Offline Businesses
        </p>

        {/* Description */}
        <p className="text-lg text-gray-400">A team of experts delivering great work worldwide!</p>

        {/* CTA Button */}
        <div className="pt-4">
          <button className="px-8 py-3 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300">
            Book A Strategy Call
          </button>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="mt-32 w-full max-w-4xl">
        <p className="text-center text-gray-400 mb-12 font-medium">
          Our Performance Marketing services are Certified by
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Meta Logo */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600">f</span>
            </div>
            <span className="text-gray-400 text-sm">Meta Business Partner</span>
          </div>

          {/* Shopify Logo */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-green-600">🛍</span>
            </div>
            <span className="text-gray-400 text-sm">Shopify Partners</span>
          </div>

          {/* Google Logo */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600">G</span>
            </div>
            <span className="text-gray-400 text-sm">Google Partner</span>
          </div>
        </div>
      </div>
    </div>
  )
}
