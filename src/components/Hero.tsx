import { motion } from 'motion/react';
import { Calendar, Phone, Star, UserCheck, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const bentoCards = [
    { icon: Star, title: '5.0 Rating', desc: '89+ Google Reviews' },
    { icon: UserCheck, title: 'MD Medicine', desc: 'Expert Qualification' },
    { icon: Clock, title: '6 PM – 9 PM', desc: 'Daily Consultation' },
    { icon: MapPin, title: 'Indore', desc: 'Kila Maidan Road' },
  ];

  return (
    <section id="home" className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-6 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mx-auto md:mx-0">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Trusted General Physician in Indore
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-text leading-tight">
              Compassionate Care for Your Family's Health
            </h1>
            <p className="text-lg text-slate-600 max-w-lg mx-auto md:mx-0">
              Providing honest, patient-focused medical care with clear guidance and affordable treatment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
              <Link to="/appointment" className="bg-primary text-white px-8 py-4 rounded-2xl font-semibold premium-btn hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                <Calendar size={20} /> Book Appointment
              </Link>
              <a href="tel:+918269457285" className="bg-white border border-slate-200 text-text px-8 py-4 rounded-2xl font-semibold premium-btn hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <Phone size={20} /> Call Now
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 w-full max-w-lg"
          >
            <div className="aspect-square bg-slate-200 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white ring-4 ring-primary/10">
              <img 
                src="/src/assets/images/https://drive.google.com/file/d/19y8INKSzAbNEZI3DfKZMNoKQ55ymFIIP/view?usp=sharing" 
                alt="Dr. Karan Singh Bais" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Bento Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {bentoCards.map((card, i) => (
            <div key={i} className="premium-card p-6 flex items-center gap-4">
              <div className="bg-secondary/10 p-3 rounded-2xl text-primary">
                <card.icon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-text">{card.title}</h3>
                <p className="text-sm text-slate-500">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
