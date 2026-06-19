import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Reservation } from './components/Reservation';
import { Vehicles } from './components/Vehicles';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="relative min-h-screen bg-noir-950 text-gray-100">
      <Header />
      <main>
        <Hero />
        <Reservation />
        <Vehicles />
        <Services />
        <WhyUs />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
