import hackviser from '../assets/sponsors/hackviser.png';
import codecrafters from '../assets/sponsors/codecrafters.png';
import xyzdomains from '../assets/sponsors/xyzdomains.png';
import interviewbuddy from '../assets/sponsors/interviewbuddy.png';

export default function Sponsors() {
  const sponsorTiers = [
    
    {
      tier: 'GOLD_SPONSORS',
      sponsors: [
        { name: 'XYZ Domains', logo: xyzdomains },
        { name: 'Code Crafters', logo: codecrafters }
      ]
    },
    {
      tier: 'SILVER_SPONSORS',
      sponsors: [
        { name: 'Hackviser', logo: hackviser },
        { name: 'Interview Buddy', logo: interviewbuddy }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden scanlines">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-900/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4 pixelated terminal-glow">
            {'>>> OUR_SPONSORS.DB'}
          </h2>
          <div className="w-32 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-cyan-300 max-w-3xl mx-auto pixelated">
            Thank you to our amazing sponsors who make this event possible
          </p>
        </div>

        <div className="space-y-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <div key={tierIndex}>
              <h3 className="text-2xl font-bold text-center mb-8 text-cyan-400 pixelated terminal-glow">
                [ {tier.tier} ]
              </h3>

              <div
                className={`grid gap-8 ${
                  tier.sponsors.length === 1
                    ? 'grid-cols-1 max-w-md mx-auto'
                    : tier.sponsors.length === 2
                    ? 'md:grid-cols-2 max-w-3xl mx-auto'
                    : 'md:grid-cols-3'
                }`}
              >
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <div
                    key={sponsorIndex}
                    className="group p-8 bg-slate-800/30 border-4 border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 flex flex-col items-center justify-center min-h-[200px] hover:transform hover:scale-105"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-20 object-contain mb-4"
                    />

                    <p className="text-cyan-300 text-center pixelated">{sponsor.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="p-8 bg-cyan-900/20 border-4 border-cyan-500/40 inline-block">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 pixelated terminal-glow">
              {'>>> SPONSOR.REQUEST'}
            </h3>
            <p className="text-cyan-300 mb-6 max-w-2xl pixelated">
              Join us in supporting the next generation of cybersecurity professionals.
              Contact us to learn about sponsorship opportunities.
            </p>
            <button
              onClick={() =>
                (window.location.href =
                  'mailto:teamcentinel@srmist.edu.in?subject=Code Craft Chase 2.0 Sponsorship')
              }
              className="px-8 py-3 bg-cyan-500 text-black font-bold pixelated border-4 border-cyan-400 hover:bg-cyan-400 transition-all duration-300 hover:scale-110"
              style={{ boxShadow: '0 0 15px rgba(34, 211, 238, 0.6)' }}
            >
              [BECOME A SPONSOR]
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
