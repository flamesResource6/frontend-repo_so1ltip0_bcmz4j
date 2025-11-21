function CTA() {
  return (
    <section id="contact" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-3xl bg-gray-900 text-white p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Let’s build something brilliant</h3>
            <p className="mt-2 text-white/80 max-w-xl">Tell us about your goals and we’ll propose a clear path from insight to impact.</p>
          </div>
          <a href="mailto:hello@creatrix.digital" className="px-6 py-3 rounded-full bg-yellow-300 text-gray-900 font-semibold hover:opacity-90 transition">hello@creatrix.digital</a>
        </div>
      </div>
    </section>
  )
}

export default CTA
