import { Mail, MapPin, Calendar } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t-4 border-green-500 scanlines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4 pixelated terminal-glow">
              {'CODE_CRAFT_CHASE_2.0'}
            </h3>
            <p className="text-green-300 pixelated">
              The ultimate cybersecurity hackathon experience
            </p>
          </div>

          <div>
            <h4 className="text-green-400 font-bold mb-4 pixelated">CONTACT</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-green-300 pixelated">
                <Mail className="w-4 h-4 text-green-400" />
                <span>info@codecraftchase.com</span>
              </div>
              <div className="flex items-center gap-2 text-green-300 pixelated">
                <MapPin className="w-4 h-4 text-green-400" />
                <span>Hybrid Event</span>
              </div>
              <div className="flex items-center gap-2 text-green-300 pixelated">
                <Calendar className="w-4 h-4 text-green-400" />
                <span>Feb 11-12, 2026</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-green-400 font-bold mb-4 pixelated">QUICK_LINKS</h4>
            <div className="space-y-2">
              <a href="#" className="block text-green-300 hover:text-green-400 transition-colors pixelated">About</a>
              <a href="#" className="block text-green-300 hover:text-green-400 transition-colors pixelated">Schedule</a>
              <a href="#" className="block text-green-300 hover:text-green-400 transition-colors pixelated">Sponsors</a>
              <a href="#" className="block text-green-300 hover:text-green-400 transition-colors pixelated">FAQ</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-green-500/40 text-center text-green-600 pixelated">
          <p>Copyright (C) 2026 Code Craft Chase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
