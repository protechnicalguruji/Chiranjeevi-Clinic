import { useState } from 'react';
import { Phone, MessageSquare, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    reason: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Doctor,

I would like to book an appointment.

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

  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Karan Singh Bais",
    "image": "https://ais-pre-ndkn2ios4csr5w7nzp7smn-893669360321.asia-east1.run.app/src/assets/images/doctor_portrait_1782728666510.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "31, Opposite Atal Dwar, Kila Maidan Road, Khasgi Ka Bagicha",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "452015",
      "addressCountry": "IN"
    },
    "telephone": "+918269457285",
    "openingHours": "Mo-Su 18:00-21:00",
    "url": "https://ais-pre-ndkn2ios4csr5w7nzp7smn-893669360321.asia-east1.run.app"
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Book Your Appointment | Chiranjeevi Clinic - Dr. Karan Singh Bais</title>
        <meta name="description" content="Book an appointment with Dr. Karan Singh Bais, a trusted General Physician at Chiranjeevi Clinic in Indore, Madhya Pradesh." />
        <link rel="canonical" href={`${window.location.origin}/appointment`} />
        <meta property="og:title" content="Book Your Appointment | Chiranjeevi Clinic" />
        <meta property="og:description" content="Schedule your consultation with Dr. Karan Singh Bais, MD Medicine at Chiranjeevi Clinic." />
        <meta property="og:url" content={`${window.location.origin}/appointment`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-sm">C</div>
                <span className="font-display font-bold text-xl text-text">Chiranjeevi Clinic</span>
            </Link>
            <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-primary">
                <ArrowLeft size={18} /> Back to Home
            </Link>
        </nav>
      </header>
      
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-8 text-center">Book Your Appointment</h1>
        <p className="text-slate-600 text-lg mb-12 text-center">Schedule your consultation with Dr. Karan Singh Bais.</p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <a href="tel:+918269457285" className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center gap-4 hover:border-primary">
            <Phone className="text-primary" size={32} />
            <h3 className="font-bold">Call Now</h3>
            <p className="text-slate-600">+91 82694 57285</p>
          </a>
          <a href="https://wa.me/918269457285" className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center gap-4 hover:border-primary">
            <MessageSquare className="text-primary" size={32} />
            <h3 className="font-bold">WhatsApp</h3>
            <p className="text-slate-600">Message Us</p>
          </a>
          <a href="https://maps.google.com" className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center gap-4 hover:border-primary">
            <MapPin className="text-primary" size={32} />
            <h3 className="font-bold">Address</h3>
            <p className="text-slate-600">Get Directions</p>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Patient Name" required className="w-full p-4 rounded-xl border border-slate-200" onChange={e => setFormData({...formData, name: e.target.value})} />
            <input type="tel" placeholder="Phone Number" required className="w-full p-4 rounded-xl border border-slate-200" onChange={e => setFormData({...formData, phone: e.target.value})} />
            <input type="date" required className="w-full p-4 rounded-xl border border-slate-200" onChange={e => setFormData({...formData, date: e.target.value})} />
            <input type="time" required className="w-full p-4 rounded-xl border border-slate-200" onChange={e => setFormData({...formData, time: e.target.value})} />
          </div>
          <textarea placeholder="Reason for Visit" required className="w-full p-4 rounded-xl border border-slate-200" rows={4} onChange={e => setFormData({...formData, reason: e.target.value})}></textarea>
          <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 flex items-center justify-center gap-2">
            <MessageSquare size={20} /> Book Appointment on WhatsApp
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
