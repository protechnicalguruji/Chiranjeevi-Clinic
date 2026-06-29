import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="font-display text-4xl font-bold text-text">About Dr. Karan Singh Bais</h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          With a dedicated MD in Medicine, Dr. Karan Singh Bais believes in a patient-first approach. 
          He is known for clear explanations, accurate diagnoses, and honest consultations. 
          His mission is to provide affordable, evidence-based treatment while emphasizing preventive 
          healthcare and positive lifestyle changes to ensure long-term wellness for his patients.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
          {['MD Medicine', 'General Physician', 'Patient-First', 'Affordable Care'].map(item => (
            <div key={item} className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 font-semibold text-primary">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
