import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Reviews from '../components/Reviews';
import BookingCTA from '../components/BookingCTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Reviews />
      <BookingCTA />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
