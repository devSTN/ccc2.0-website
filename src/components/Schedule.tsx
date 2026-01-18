export default function Schedule() {
  const schedule = {
    day1: [
      { time: '9:00 AM', event: 'Registration & Check-in', description: 'Get your badges and meet fellow participants' },
      { time: '10:00 AM', event: 'Opening Ceremony', description: 'Welcome address and event kickoff' },
      { time: '11:00 AM', event: 'Hackathon Begins', description: 'Challenges go live - start hacking!' },
      { time: '1:00 PM', event: 'Lunch Break', description: 'Refuel and network' },
      { time: '3:00 PM', event: 'Workshop: Web Security', description: 'Learn advanced exploitation techniques' },
      { time: '6:00 PM', event: 'Dinner', description: 'Evening meal provided' },
      { time: '8:00 PM', event: 'Night Hacking Session', description: 'Continue working on challenges' }
    ],
    day2: [
      { time: '8:00 AM', event: 'Breakfast', description: 'Morning refreshments' },
      { time: '9:00 AM', event: 'Workshop: Forensics', description: 'Digital investigation techniques' },
      { time: '11:00 AM', event: 'Final Push', description: 'Last hours to complete challenges' },
      { time: '1:00 PM', event: 'Submissions Close', description: 'All solutions must be submitted' },
      { time: '2:00 PM', event: 'Judging & Lunch', description: 'Relax while judges review submissions' },
      { time: '4:00 PM', event: 'Closing Ceremony', description: 'Winner announcements and prize distribution' },
      { time: '5:00 PM', event: 'Networking Social', description: 'Celebrate and connect with sponsors' }
    ]
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden scanlines">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4 pixelated terminal-glow">
            {'>>> SCHEDULE.LOG'}
          </h2>
          <div className="w-32 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-cyan-600 pixelated">Tentative schedule - subject to minor changes</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Day 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="px-4 py-2 bg-cyan-500 text-black font-bold pixelated border-2 border-cyan-400">
                <p>DAY_1</p>
              </div>
              <p className="text-cyan-600 pixelated">February 11, 2026</p>
            </div>

            <div className="space-y-4">
              {schedule.day1.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-800/30 border-4 border-cyan-500/40 hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-20 text-cyan-400 font-bold pixelated">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-cyan-400 font-bold mb-1 pixelated">{item.event}</h4>
                      <p className="text-sm text-cyan-300 pixelated">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Day 2 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="px-4 py-2 bg-cyan-500 text-black font-bold pixelated border-2 border-cyan-400">
                <p>DAY_2</p>
              </div>
              <p className="text-cyan-600 pixelated">February 12, 2026</p>
            </div>

            <div className="space-y-4">
              {schedule.day2.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-800/30 border-4 border-cyan-500/40 hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-20 text-cyan-400 font-bold pixelated">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-cyan-400 font-bold mb-1 pixelated">{item.event}</h4>
                      <p className="text-sm text-cyan-300 pixelated">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
