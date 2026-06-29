import { Stethoscope, Thermometer, HeartPulse, Activity } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  { title: 'General Consultation', icon: Stethoscope },
  { title: 'Fever & Infections', icon: Thermometer },
  { title: 'Diabetes Management', icon: HeartPulse },
  { title: 'Blood Pressure', icon: Activity },
  { title: 'Thyroid Care', icon: HeartPulse },
  { title: 'Preventive Check-up', icon: Stethoscope },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-display text-4xl font-bold text-text text-center mb-16">Our Medical Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="p-8 bg-background rounded-2xl border border-slate-100 hover:border-primary/20 transition-all"
            >
              <service.icon className="text-primary mb-6" size={32} />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-slate-600">Comprehensive and compassionate care for your specific health needs.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
