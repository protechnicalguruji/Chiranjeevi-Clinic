export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="font-display text-4xl font-bold">Clinic Information</h2>
          <div className="space-y-2 text-slate-600">
            <p className="font-semibold text-text">Chiranjeevi Clinic</p>
            <p>31, Opposite Atal Dwar, Kila Maidan Road</p>
            <p>Indore, Madhya Pradesh - 452015</p>
            <p className="pt-4 font-semibold text-text">Timing: Monday - Sunday</p>
            <p>6:00 PM - 9:00 PM</p>
            <p className="pt-4 font-semibold text-text">
                Phone: <a href="tel:+918269457285" className="text-primary hover:underline">+91 82694 57285</a>
            </p>
            <p className="font-semibold text-text">
                WhatsApp: <a href="https://wa.me/918269457285" className="text-primary hover:underline">Message Us</a>
            </p>
          </div>
        </div>
        <a href="https://maps.app.goo.gl/..." target="_blank" className="bg-slate-200 rounded-3xl h-64 md:h-full flex items-center justify-center hover:bg-slate-300 transition-colors">
          View on Google Maps
        </a>
      </div>
    </section>
  );
}
