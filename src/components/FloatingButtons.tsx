import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a href="https://wa.me/918269457285" className="bg-[#25D366] text-white p-4 rounded-full shadow-lg">
        <MessageSquare size={24} />
      </a>
      <a href="tel:+918269457285" className="bg-primary text-white p-4 rounded-full shadow-lg">
        <Phone size={24} />
      </a>
    </div>
  );
}
