import { Calendar, MapPin, Users, Terminal } from 'lucide-react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden overflow-y-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 scanlines">

      <div className="absolute top-6 inset-x-0 z-30 flex justify-center px-4">
        <div className="flex gap-20  px-20 py-6 border-4 border-green-500 max-w-full">
          <img src={logo1} alt="Logo 1" className="h-16 md:h-20 object-contain" />
          <img src={logo2} alt="Logo 2" className="h-16 md:h-20 object-contain" />
          <img src={logo3} alt="Logo 3" className="h-16 md:h-20 object-contain" />
          <img src={logo4} alt="Logo 4" className="h-16 md:h-20 object-contain" />
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        


        <div className="inline-block mb-6 px-6 py-3 bg-green-900/20 border-4 border-green-500/40">
          <div className="flex flex-col">
            <span className="text-green-400 text-sm font-bold pixelated terminal-glow">
              {'> SYSTEM.ROUND_1.DATE: February 5, 2026'}
            </span>
            <span className="text-green-400 text-sm font-bold pixelated terminal-glow">
              {'> SYSTEM.ROUND_2.DATE: February 11-12, 2026'}
            </span>
          </div>

        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-green-400 pixelated terminal-glow leading-tight" style={{textShadow: '0 0 20px rgba(34, 197, 94, 0.8)'}}>
          CODE CRAFT CHASE 2.0
        </h1>

        <p className="text-lg md:text-xl text-green-300 mb-8 max-w-3xl mx-auto pixelated">
          {'>> JOIN THE ULTIMATE CYBERSECURITY HACKATHON'}
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-12 pixelated">
          <div className="flex items-center gap-2 text-green-300 border-2 border-green-500/50 px-4 py-2 bg-green-900/10">
            <Calendar className="w-5 h-5 text-green-400" />
            <span>24 HOURS</span>
          </div>
          <div className="flex items-center gap-2 text-green-300 border-2 border-green-500/50 px-4 py-2 bg-green-900/10">
            <Users className="w-5 h-5 text-green-400" />
            <span>TEAM MODE</span>
          </div>
          <div className="flex items-center gap-2 text-green-300 border-2 border-green-500/50 px-4 py-2 bg-green-900/10">
            <MapPin className="w-5 h-5 text-green-400" />
            <span>TP Ganesan Auditorium Mini Hall 2</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.youtube.com" className="px-8 py-4 bg-green-600 text-black font-bold pixelated border-4 border-green-400 hover:bg-green-500 transition-all duration-300 hover:scale-110 shadow-lg inline-block" style={{boxShadow: '0 0 20px rgba(34, 197, 94, 0.6)'}}>
            [REGISTER NOW]
          </a>
          
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-green-400 pixelated text-2xl terminal-glow">▼ ▼ ▼</div>
      </div>
    </section>
  );
}
