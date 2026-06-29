import { Phone, MessageSquare, MapPin } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    { icon: Phone, title: 'Call Clinic', text: '+91 82694 57285', link: 'tel:+918269457285' },
    { icon: MessageSquare, title: 'WhatsApp', text: 'Message Us', link: 'https://wa.me/918269457285' },
    { icon: MapPin, title: 'Google Maps', text: 'Get Directions', link: 'https://maps.app.goo.gl/...' },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-display text-4xl font-bold">Clinic Information</h2>
          <p className="text-slate-600 max-w-xl mx-auto">Chiranjeevi Clinic, 31, Opposite Atal Dwar, Kila Maidan Road, Indore, Madhya Pradesh - 452015. Open Monday - Sunday, 6:00 PM - 9:00 PM.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, i) => (
            <a key={i} href={method.link} target="_blank" className="premium-card flex flex-col items-center text-center gap-4 !p-8">
              <div className="bg-secondary/10 p-4 rounded-full text-primary">
                <method.icon size={32} />
              </div>
              <h3 className="font-bold text-xl">{method.title}</h3>
              <p className="text-slate-600">{method.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
