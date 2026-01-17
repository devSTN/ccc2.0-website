import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Who can participate in Code Craft Chase 2.0?',
      answer: 'This hackathon is open to students, professionals, and cybersecurity enthusiasts of all skill levels. Whether you\'re a beginner or an experienced security researcher, there are challenges for everyone.'
    },
    {
      question: 'Do I need a team to participate?',
      answer: 'Yes, teams of 2-4 members are required. You can form your team before the event or join our team formation session during registration.'
    },
    {
      question: 'Is there a registration fee?',
      answer: 'Registration details and fees will be announced soon. Stay tuned to our official channels for updates.'
    },
    {
      question: 'What should I bring to the event?',
      answer: 'Bring your laptop with necessary security tools installed, chargers, and enthusiasm! We\'ll provide WiFi, power outlets, meals, and refreshments.'
    },
    {
      question: 'Can I participate remotely?',
      answer: 'Yes! Code Craft Chase 2.0 is a hybrid event. You can participate both in-person and virtually. Remote participants will have full access to all challenges and workshops.'
    },
    {
      question: 'What kind of challenges can we expect?',
      answer: 'Expect a diverse range of cybersecurity challenges including web exploitation, cryptography, reverse engineering, forensics, OSINT, and more. Challenges are designed for various skill levels.'
    },
    {
      question: 'Are there any prizes?',
      answer: 'Yes! We have an exciting prize pool including cash prizes, internship opportunities, swag, and certificates. Specific prize details will be announced closer to the event.'
    },
    {
      question: 'Will there be mentors available?',
      answer: 'Absolutely! Industry professionals and cybersecurity experts will be available throughout the event to provide guidance and answer questions.'
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden scanlines">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-4 pixelated terminal-glow">
            {'>>> FAQ.HELP'}
          </h2>
          <div className="w-32 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/30 border-4 border-green-500/40 hover:border-green-400 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-lg font-bold text-green-400 pr-4 pixelated">
                  ? {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-green-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 border-t-2 border-green-500/40">
                  <p className="text-green-300 leading-relaxed pixelated">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-green-600 mb-4 pixelated">Still have questions?</p>
          <button className="px-6 py-3 bg-green-900/30 text-green-400 font-bold pixelated border-4 border-green-500 hover:bg-green-900/50 transition-all duration-300 hover:border-green-400">
            [CONTACT US]
          </button>
        </div>
      </div>
    </section>
  );
}
