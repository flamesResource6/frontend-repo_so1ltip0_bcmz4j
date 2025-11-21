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
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Что мы делаем</h2>
          <p className="mt-3 text-gray-600">Мы создаём цифровые продукты полного цикла: от идеи и дизайна до разработки, аналитики и роста.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard title="Разработка сайтов" desc="Корпоративные сайты, лендинги и сложные веб‑платформы на современных технологиях." />
          <ServiceCard title="Мобильные приложения" desc="Нативные и кроссплатформенные приложения с продуманным UX и высоким перформансом." />
          <ServiceCard title="CRM‑системы" desc="Внедрение и разработка CRM под ваши процессы: продажи, поддержка, автоматизации." />
          <ServiceCard title="Разработка игр" desc="Прототипы, мобильные и веб‑игры, интерактивы и игровые механики для брендов." />
          <ServiceCard title="Дизайн продукта" desc="Исследования, UX/UI, прототипирование и дизайн‑системы, которые масштабируются." />
          <ServiceCard title="Рост и аналитика" desc="Метрики, эксперименты и оптимизация конверсий для стабильного роста." />
        </div>
      </div>
    </section>
  )
}

export default Services
