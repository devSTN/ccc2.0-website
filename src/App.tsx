import Hero from './components/Hero';
import About from './components/About';
import EventDetails from './components/EventDetails';
import Schedule from './components/Schedule';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <About />
      <EventDetails />
      <Schedule />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
