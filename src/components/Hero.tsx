import { motion } from 'motion/react';
import { Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Trusted General Physician in Indore
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-text leading-tight">
            Compassionate Care for Your Family's Health
          </h1>
          <p className="text-lg text-slate-600 max-w-lg">
            Providing honest, patient-focused medical care with clear guidance and affordable treatment.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/appointment" className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all flex items-center gap-2">
              <Calendar size={20} /> Book Appointment
            </Link>
            <a href="tel:+918269457285" className="bg-white border border-slate-200 text-text px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center gap-2">
              <Phone size={20} /> Call Now
            </a>
          </div>
          <div className="flex items-center gap-4 pt-4 text-slate-500">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />)}
            </div>
            <div>
              <p className="font-semibold text-text">⭐ 5.0 Rating</p>
              <p className="text-sm">89+ Google Reviews</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex-1 w-full"
        >
          <div className="aspect-[4/5] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/src/assets/images/doctor_portrait_1782728666510.jpg" 
              alt="Dr. Karan Singh Bais" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
