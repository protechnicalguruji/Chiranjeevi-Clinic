import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BookingCTA() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
        <h2 className="font-display text-4xl font-bold">Ready for a Consultation?</h2>
        <p className="text-xl text-primary-foreground/90">Take the first step towards better health today.</p>
        <div className="flex justify-center">
          <Link to="/appointment" className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 flex items-center gap-2">
            <Calendar size={20} /> Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
