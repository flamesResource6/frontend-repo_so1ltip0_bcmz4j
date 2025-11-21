function Work() {
  const items = [
    { title: 'Nova AI', tag: 'SaaS', color: 'bg-yellow-200' },
    { title: 'Aural Studio', tag: 'Brand', color: 'bg-gray-200' },
    { title: 'Volt Commerce', tag: 'E‑comm', color: 'bg-yellow-100' },
    { title: 'Haven Health', tag: 'Web', color: 'bg-gray-100' },
    { title: 'Orbit Finance', tag: 'Product', color: 'bg-yellow-50' },
    { title: 'Atlas Labs', tag: 'Startup', color: 'bg-gray-50' },
  ]

  return (
    <section id="work" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected work</h2>
            <p className="mt-3 text-gray-600">A snapshot of recent launches across industries.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-full bg-gray-900 text-white font-medium">Work with us</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className={`relative rounded-2xl border border-gray-200 ${it.color} p-6 h-44 overflow-hidden`}>
              <span className="inline-flex px-2 py-0.5 text-xs rounded-full bg-white/70 text-gray-800 border border-gray-200">{it.tag}</span>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{it.title}</h3>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-yellow-300/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
