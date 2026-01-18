import { Shield, Trophy, Code2, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'Real-World Problem Statements',
      description: 'Teams will work on curated cybersecurity problem statements inspired by real industry challenges — covering areas like data privacy, cybercrime, digital safety, and system security.'
    },
    {
      icon: Trophy,
      title: 'Build Practical Solutions',
      description: 'Participants will design and develop working solutions such as secure platforms, monitoring tools, automation systems, or awareness applications that solve the given problem.'
    },
    {
      icon: Code2,
      title: '24-Hour Innovation Sprint',
      description: 'From ideation to implementation, teams get 24 hours to brainstorm, build, test, and refine their solution with continuous guidance from mentors.'
    },
    {
      icon: Zap,
      title: 'Demo, Judge, Win',
      description: 'Teams will present their solutions to a panel of experts based on innovation, impact, feasibility, and technical execution — with exciting prizes and recognition.'
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden scanlines">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4 pixelated terminal-glow">
            {'>>> ABOUT THE EVENT'}
          </h2>
          <div className="w-32 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-cyan-300 max-w-3xl mx-auto pixelated">
            Code Craft Chase 2.0 is a 24-hour cybersecurity innovation hackathon where ideas turn into real solutions. Participants will work on real-world problem statements, collaborate in teams, and build impactful tools that address today’s most critical cyber challenges.

            This is not about solving puzzles — it’s about creating solutions that matter. From protecting data to securing systems and building safer digital experiences, this is your chance to innovate, build, and make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-slate-800/30 border-4 border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-cyan-900/40 border-2 border-cyan-500/50 flex items-center justify-center mb-4 group-hover:bg-cyan-900/60 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-cyan-400 mb-2 pixelated">
                {feature.title}
              </h3>
              <p className="text-cyan-300 pixelated text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
