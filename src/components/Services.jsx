function ServiceCard({ title, desc }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
      <div className="mt-4 h-1 w-10 bg-yellow-300 group-hover:w-16 transition-all" />
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">What we do</h2>
          <p className="mt-3 text-gray-600">End-to-end digital services to take you from idea to launch.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard title="Brand & Strategy" desc="Positioning, identity systems, and messaging that resonate." />
          <ServiceCard title="Product Design" desc="UX research, UI design, and rapid prototyping for web & mobile." />
          <ServiceCard title="Web Engineering" desc="Fast, accessible, SEO-friendly sites built with modern stacks." />
          <ServiceCard title="E-commerce" desc="High-conversion storefronts and custom commerce solutions." />
          <ServiceCard title="Content & Creative" desc="Campaigns, motion, and content systems that scale." />
          <ServiceCard title="Growth & Analytics" desc="Data, experimentation, and optimization to drive results." />
        </div>
      </div>
    </section>
  )
}

export default Services
