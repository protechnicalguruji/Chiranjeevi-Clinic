import { CheckCircle2 } from 'lucide-react';

const reasons = [
  'Experienced Doctor',
  'Patient-Centered Care',
  'Honest Consultation',
  'Affordable Treatment',
  'Clear Medical Guidance',
  'Minimal Waiting Time',
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-display text-4xl font-bold text-text text-center mb-16">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <CheckCircle2 className="text-primary" size={24} />
              <span className="font-semibold text-lg">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
