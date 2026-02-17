export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white relative">
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <header className="container mx-auto py-6 px-4 relative z-10">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-bold text-[#007C8A]">HaloBlue Tech</h1>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        <section className="container mx-auto px-4 py-20 text-center flex flex-col items-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-[#007C8A] bg-clip-text text-transparent">
            Monitoring Ocean Health. One Dive at a Time.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            In a world facing rising ocean temperatures and environmental challenges, we are building AI-powered, autonomous submersibles for marine conservation.
          </p>
          <p className="text-lg md:text-xl text-[#007C8A] font-medium mb-12">
            The depths are no longer a mystery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a 
              href="#waitlist" 
              className="bg-[#007C8A] hover:bg-[#006B75] text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Join Our Mission
            </a>
            <a 
              href="#technology" 
              className="border border-[#007C8A] text-[#007C8A] hover:bg-[#007C8A] hover:text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Explore Technology
            </a>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              At HaloBlue Tech, we are developing next-generation underwater monitoring solutions to safeguard marine ecosystems. Based at Cal State East Bay, our team is dedicated to creating accessible, powerful tools for conservation organizations and small to midsize ports and harbors.
            </p>
          </div>
        </section>

        <section id="technology" className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Advanced Technology
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🌊</div>
              <h3 className="text-xl font-bold text-white mb-3">Miniature Design</h3>
              <p className="text-gray-300">
                Compact, agile submersibles that navigate tight harbor spaces.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Multi-Sensor Array</h3>
              <p className="text-gray-300">
                Real-time environmental monitoring and data collection.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered</h3>
              <p className="text-gray-300">
                Autonomous navigation and intelligent analysis.
              </p>
            </div>
          </div>
        </section>

        <section id="waitlist" className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Join the Movement
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Get exclusive updates and early access to our technology.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <form className="w-full space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#007C8A]"
              />
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#007C8A]"
              />
              <button
                type="submit"
                className="w-full bg-[#007C8A] hover:bg-[#006B75] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center text-gray-400">
        <p>© 2025 HaloBlue Tech - Cal State East Bay</p>
      </footer>
    </div>
  );
}