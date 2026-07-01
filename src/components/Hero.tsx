import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, Star, UserCheck, Clock, MapPin, MessageSquare, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    reason: 'General Consultation'
  });

  const bentoCards = [
    { icon: Star, title: '5.0 Rating', desc: '89+ Google Reviews' },
    { icon: UserCheck, title: 'MD Medicine', desc: 'Expert Qualification' },
    { icon: Clock, title: '6 PM – 9 PM', desc: 'Daily Consultation' },
    { icon: MapPin, title: 'Indore', desc: 'Kila Maidan Road' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Doctor,

I would like to book an appointment via your home page quick form.

Patient Name:
${formData.name}

Phone Number:
${formData.phone}

Preferred Date:
${formData.date}

Preferred Time:
${formData.time}

Reason for Visit:
${formData.reason}

Please confirm my appointment.

Thank you.`;
    window.location.href = `https://wa.me/918269457285?text=${encodeURIComponent(message)}`;
  };

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
              <a href="#services" className="bg-primary text-white px-8 py-4 rounded-2xl font-semibold premium-btn hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                Explore Services <ArrowRight size={20} />
              </a>
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
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl border border-slate-100 ring-4 ring-primary/5">
              <div className="mb-6">
                <h2 className="font-display text-2xl font-bold text-text flex items-center gap-2">
                  <Calendar className="text-primary" size={24} /> Quick Booking
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Fill details below to instantly request your consultation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wider">Patient Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter patient full name" 
                    required 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wider">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="Enter phone number" 
                    required 
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wider">Preferred Date</label>
                    <input 
                      type="date" 
                      required 
                      value={formData.date}
                      onChange={e => setFormData({...formData, date: e.target.value})}
                      className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-slate-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wider">Preferred Time</label>
                    <input 
                      type="time" 
                      required 
                      value={formData.time}
                      onChange={e => setFormData({...formData, time: e.target.value})}
                      className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-slate-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wider">Reason for Visit</label>
                  <select
                    value={formData.reason}
                    onChange={e => setFormData({...formData, reason: e.target.value})}
                    className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white text-sm text-slate-700"
                  >
                    <option value="General Consultation">General Consultation</option>
                    <option value="Fever or Flu">Fever or Flu</option>
                    <option value="Routine Checkup">Routine Checkup</option>
                    <option value="Follow-up Visit">Follow-up Visit</option>
                    <option value="Other">Other Medical Issue</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary text-white py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 mt-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98]"
                >
                  <MessageSquare size={18} /> Book via WhatsApp
                </button>
              </form>
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
