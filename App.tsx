import React, { useState } from 'react';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { GeminiChat } from './components/GeminiChat';

// --- Icons ---
const Icons = {
  Chair: () => (
    <svg className="w-10 h-10 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  Sun: () => (
    <svg className="w-10 h-10 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Truck: () => (
    <svg className="w-10 h-10 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  Check: () => (
    <svg className="w-5 h-5 text-ocean-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  ),
  Menu: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
};

// --- Decorative Wave Components ---
const WaveTop = ({ className = "text-white" }) => (
  <div className={`absolute top-0 left-0 w-full overflow-hidden leading-none z-0 transform -translate-y-[99%] ${className}`}>
    <svg className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
    </svg>
  </div>
);

const WaveBottom = ({ className = "text-white" }) => (
  <div className={`absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 transform translate-y-[99%] ${className}`}>
    <svg className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px] transform rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
    </svg>
  </div>
);

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setTimeout(() => {
        setSubmitted(true);
      }, 800);
    }
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleDemoLink = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("This is a concept page demo. This link does not go to a real page.");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-sand-50">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-sand-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <span className="text-3xl font-serif font-bold text-ocean-800 tracking-tight">Shore<span className="text-ocean-500">Ease</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollTo('how-it-works')} className="text-slate-600 hover:text-ocean-600 font-medium transition-colors">How It Works</button>
              <button onClick={() => scrollTo('benefits')} className="text-slate-600 hover:text-ocean-600 font-medium transition-colors">Benefits</button>
              <Button onClick={() => scrollTo('waitlist')} variant="primary" size="sm" className="shadow-md shadow-ocean-500/20">
                Join 2026 Waitlist
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-600 p-2">
                <Icons.Menu />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-sand-200">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button onClick={() => scrollTo('how-it-works')} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-600 hover:bg-sand-50 rounded-md">How It Works</button>
              <button onClick={() => scrollTo('benefits')} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-600 hover:bg-sand-50 rounded-md">Benefits</button>
              <button onClick={() => scrollTo('waitlist')} className="block w-full text-left px-3 py-2 text-base font-medium text-ocean-600 font-bold hover:bg-sand-50 rounded-md">Join Waitlist</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Hero Background - Updated to NJ Shore Dune Style (No Palm Trees) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1495954484750-af469f2f9be5?q=80&w=2000&auto=format&fit=crop" 
            alt="New Jersey style sand dunes and beach fence" 
            className="w-full h-full object-cover"
          />
          {/* Enhanced Overlay for text readability against bright sky */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 drop-shadow-2xl tracking-tight leading-tight">
            The Beach <br/><span className="italic font-light text-ocean-200">Without the Burden</span>
          </h1>
          <p className="text-lg md:text-2xl text-white mb-10 max-w-2xl mx-auto font-medium drop-shadow-lg leading-relaxed text-shadow-sm">
            Your spot, perfectly set up before you arrive. 
            <br className="hidden md:block"/>Relaxation starts the moment your feet hit the sand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={() => scrollTo('waitlist')} className="w-full sm:w-auto text-lg px-10 py-4 shadow-xl shadow-ocean-900/40 border-2 border-transparent hover:border-ocean-300">
              Claim Your Spot
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo('how-it-works')} className="w-full sm:w-auto text-lg px-10 py-4 text-white border-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
              See How It Works
            </Button>
          </div>
        </div>

        {/* Decorative Wave Bottom */}
        <div className="absolute bottom-0 left-0 w-full text-sand-50">
          <svg className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* How it Works Section */}
      <Section id="how-it-works" className="bg-sand-50 relative">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-ocean-600 font-semibold tracking-wider uppercase text-sm">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-3 mb-6">Two Ways to ShoreEase</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We are the "Uber" for your beach day. Whether you have your own gear or need ours, we do the heavy lifting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Service 1: Valet */}
          <div className="group bg-white rounded-[2rem] p-8 lg:p-12 shadow-sm border border-sand-200 hover:shadow-2xl hover:border-ocean-200 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-ocean-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
            
            <div className="relative">
              <div className="h-16 w-16 bg-ocean-100 rounded-2xl flex items-center justify-center mb-8 text-ocean-600 group-hover:bg-ocean-600 group-hover:text-white transition-colors duration-300">
                <Icons.Truck />
              </div>
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">The Valet Service</h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Love your own gear but hate the haul? We pick up your chairs, umbrellas, and coolers from your door, transport them to your exact GPS spot, and set everything up.
              </p>
              <div className="space-y-4 bg-sand-50/50 p-6 rounded-xl border border-sand-100">
                <div className="flex items-start">
                  <Icons.Check />
                  <span className="text-slate-700 font-medium">Door-to-sand transport</span>
                </div>
                <div className="flex items-start">
                  <Icons.Check />
                  <span className="text-slate-700 font-medium">Professional setup & teardown</span>
                </div>
                <div className="flex items-start">
                  <Icons.Check />
                  <span className="text-slate-700 font-medium">Real-time tracking via app</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Rental */}
          <div className="group bg-ocean-50 rounded-[2rem] p-8 lg:p-12 shadow-sm border border-ocean-100 hover:shadow-2xl hover:border-ocean-300 transition-all duration-500 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
            
            <div className="relative">
              <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-ocean-600 shadow-sm group-hover:bg-ocean-600 group-hover:text-white transition-colors duration-300">
                <Icons.Chair />
              </div>
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">The Rental Suite</h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Travel light and arrive in style. Rent our premium, resort-quality equipment. Select your package and spot in the app, and walk into a fully furnished private oasis.
              </p>
              <div className="space-y-4 bg-white/60 p-6 rounded-xl border border-white">
                <div className="flex items-start">
                  <Icons.Check />
                  <span className="text-slate-700 font-medium">Premium timber chairs & umbrellas</span>
                </div>
                <div className="flex items-start">
                  <Icons.Check />
                  <span className="text-slate-700 font-medium">Yeti coolers stocked with ice</span>
                </div>
                <div className="flex items-start">
                  <Icons.Check />
                  <span className="text-slate-700 font-medium">Reserved spot before you arrive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits / Vibe Section with Wave Separators */}
      <div className="relative">
        <WaveTop className="text-white" />
        <Section id="benefits" className="bg-white pt-32 pb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Text Content */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8 leading-[1.1]">
                Reclaim Your <br/><span className="text-ocean-500 italic">Vacation Time</span>
              </h2>
              
              <div className="space-y-10">
                {[
                  { title: "Morning Bliss", desc: "Wake up, grab coffee, and walk to the beach empty-handed. Your spot is already waiting.", num: "01" },
                  { title: "Prime Real Estate", desc: "Secure the best spots on the beach without the 6 AM wake-up call to fight for territory.", num: "02" },
                  { title: "Zero Clean Up", desc: "When the sun sets, just walk away. We handle the sand, the folding, and the heavy hauling.", num: "03" }
                ].map((item) => (
                  <div key={item.num} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <span className="text-5xl font-serif font-bold text-sand-200 group-hover:text-ocean-200 transition-colors">{item.num}</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-2 font-serif">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Content */}
            <div className="lg:w-1/2 order-1 lg:order-2 relative">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
               {/* Updated Benefit Image to blue/white striped style */}
               <img 
                 src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2600&auto=format&fit=crop" 
                 alt="Blue and white striped beach chairs and umbrella setup" 
                 className="relative z-10 rounded-[2rem] shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700 object-cover h-[500px] w-full"
               />
            </div>
          </div>
        </Section>
        <WaveBottom className="text-sand-50" />
      </div>

      {/* Locations - Lighter Background */}
      <Section className="bg-sand-50 text-center py-24">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Launching Summer 2026</h2>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
          We are starting local. Our initial rollout will focus on select Ocean County & Monmouth County beaches.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {['Point Pleasant', 'Manasquan', 'Sea Girt', 'Spring Lake', 'Bay Head', 'Mantoloking'].map((town) => (
            <span key={town} className="px-8 py-3 bg-white border border-sand-200 shadow-sm rounded-full text-slate-700 font-medium hover:border-ocean-300 hover:text-ocean-600 transition-colors cursor-default">
              {town}
            </span>
          ))}
        </div>
      </Section>

      {/* Waitlist CTA */}
      <div className="relative bg-ocean-950 text-white">
        <WaveTop className="text-ocean-950" />
        
        <Section id="waitlist" className="relative z-10 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight">Be the First on the Sand</h2>
            <p className="text-ocean-100 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              We are currently gauging interest for our 2026 launch. Sign up to secure <span className="text-white font-semibold">Early Bird pricing (20% off)</span> and get notified when we open in your favorite beach town.
            </p>
            
            {submitted ? (
              <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 animate-fade-in max-w-xl mx-auto">
                <div className="h-20 w-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-900/20">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4">You're on the list!</h3>
                <p className="text-ocean-100 text-lg mb-6">Thanks for your interest in ShoreEase. We can't wait to see you on the beach.</p>
                <button 
                  onClick={() => { setSubmitted(false); setEmail(''); }} 
                  className="text-sm font-semibold text-white underline decoration-ocean-400 hover:text-ocean-200 transition-colors"
                >
                  Register another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-8 py-4 rounded-full text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-ocean-500/50 border-2 border-transparent focus:border-ocean-300 transition-all"
                />
                <Button type="submit" size="lg" className="px-10 py-4 text-lg bg-ocean-500 hover:bg-ocean-400 text-white font-semibold shadow-lg shadow-ocean-900/50">
                  Join Waitlist
                </Button>
              </form>
            )}
            <p className="mt-8 text-sm text-ocean-400/60 font-medium tracking-wide uppercase">No spam. Unsubscribe anytime.</p>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="bg-ocean-950 text-slate-400 py-12 border-t border-ocean-900/50 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-2xl font-serif font-bold text-white tracking-tight">ShoreEase</span>
            <p className="text-sm mt-2 text-ocean-200/60">© 2026 ShoreEase Concepts. All rights reserved.</p>
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#" onClick={handleDemoLink} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" onClick={handleDemoLink} className="hover:text-white transition-colors">Terms of Service</a>
            <a href="mailto:hello@shoreease.com" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <GeminiChat />
    </div>
  );
}

export default App;