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
            <div 
              key={index}
              className="premium-card"
            >
              <div className="bg-secondary/10 w-fit p-4 rounded-2xl text-primary mb-6">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">Comprehensive and compassionate care for your specific health needs.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
