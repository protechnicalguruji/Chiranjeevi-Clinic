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
            <div key={index} className="premium-card flex items-center gap-4 !p-6">
              <div className="bg-secondary/10 p-2 rounded-full text-primary">
                <CheckCircle2 size={24} />
              </div>
              <span className="font-semibold text-lg">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
