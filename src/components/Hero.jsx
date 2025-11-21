import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      {/* Spline background cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/g47qp9qcUcqjW1-A/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-end pb-16">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-300 text-gray-900 text-xs font-semibold shadow">
            CREATRIX DIGITAL
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Мы создаём яркие, современные цифровые продукты
          </h1>
          <p className="mt-4 max-w-2xl text-gray-700 text-base sm:text-lg">
            Мы занимаемся разработкой веб‑сайтов, мобильных приложений, CRM‑систем, а также игр — от идеи и дизайна до запуска и роста.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#contact" className="px-5 py-3 rounded-full bg-gray-900 text-white font-medium hover:opacity-90 transition shadow">Начать проект</a>
            <a href="#work" className="px-5 py-3 rounded-full bg-yellow-400 text-gray-900 font-medium hover:shadow-md transition">Наши работы</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
