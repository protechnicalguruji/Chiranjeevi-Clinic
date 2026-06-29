import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-12 bg-text text-white text-center space-y-4">
        <div className="flex justify-center gap-6 text-sm font-semibold">
            <Link to="/appointment" className="hover:text-secondary">Book Appointment</Link>
            <a href="tel:+918269457285" className="hover:text-secondary">Call Now</a>
            <a href="https://wa.me/918269457285" className="hover:text-secondary">WhatsApp</a>
        </div>
      <p className="text-slate-400 text-sm">&copy; 2026 Chiranjeevi Clinic. All rights reserved.</p>
    </footer>
  );
}
