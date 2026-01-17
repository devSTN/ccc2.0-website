import { Calendar, Clock, MapPin, Users2, Award, Laptop } from 'lucide-react';

export default function EventDetails() {
  const details = [
    {
      icon: Calendar,
      label: 'DATE',
      value: 'Round 1: February 5 2026 \n Round 2:February 11-12, 2026'
    },
    {
      icon: Clock,
      label: 'DURATION',
      value: '24 Hours'
    },
    {
      icon: MapPin,
      label: 'LOCATION',
      value: 'Round 1 : Virtual, Round 2 : TP Ganesan Auditorium Mini Hall 2'
    },
    {
      icon: Users2,
      label: 'TEAM SIZE',
      value: '2-4 Members'
    },
    {
      icon: Award,
      label: 'PRIZE POOL',
      value: 'TBA'
    },
    {
      icon: Laptop,
      label: 'FORMAT',
      value: 'Hackathon'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden scanlines">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-green-900/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-4 pixelated terminal-glow">
            {'>>> EVENT_DETAILS'}
          </h2>
          <div className="w-32 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((detail, index) => (
            <div
              key={index}
              className="p-8 bg-slate-800/30 border-4 border-green-500/40 hover:border-green-400 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-green-900/40 border-2 border-green-500/50 flex items-center justify-center flex-shrink-0">
                  <detail.icon className="w-7 h-7 text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-green-600 mb-1 pixelated font-bold">{detail.label}</p>
                  <p className="text-lg font-bold text-green-400 pixelated">{detail.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-green-900/20 border-4 border-green-500/40">
          <h3 className="text-2xl font-bold text-green-400 mb-4 pixelated terminal-glow">{'>>> WHAT_TO_EXPECT.EXE'}</h3>
          <ul className="space-y-3 text-green-300 pixelated">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1 font-bold">[+]</span>
              <span>Work on industry-inspired cybersecurity problem statements that reflect real digital threats, privacy risks, and security needs.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1 font-bold">[+]</span>
              <span>Build in teams, share ideas, divide roles, and solve problems together under real hackathon conditions.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1 font-bold">[+]</span>
              <span>Get support from mentors who will help you refine ideas, fix issues, and improve your solution.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1 font-bold">[+]</span>
              <span>Present your solution to expert judges, get feedback, win prizes, and gain recognition for your work.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
