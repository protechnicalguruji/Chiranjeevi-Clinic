import { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/#about' },
    { name: 'Services', link: '/#services' },
    { name: 'Reviews', link: '/#reviews' },
    { name: 'Contact', link: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-sm">C</div>
          <span className="font-display font-bold text-xl text-text">Chiranjeevi Clinic</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          {navItems.map(item => (
            <a key={item.name} href={item.link} className="hover:text-primary transition-colors">{item.name}</a>
          ))}
          <Link to="/appointment" className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg flex items-center gap-2">
            <Calendar size={18} /> Book Appointment
          </Link>
        </div>
        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 p-4 space-y-4">
          {navItems.map(item => (
            <a key={item.name} href={item.link} className="block text-slate-600 hover:text-primary" onClick={() => setIsOpen(false)}>{item.name}</a>
          ))}
          <Link to="/appointment" className="block w-full text-center bg-primary text-white py-3 rounded-xl font-semibold" onClick={() => setIsOpen(false)}>Book Appointment</Link>
        </div>
      )}
    </header>
  );
}
