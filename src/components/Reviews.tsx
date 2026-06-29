import { Star } from 'lucide-react';

const reviews = [
  { name: 'Rahul V.', text: 'He explains everything clearly.' },
  { name: 'Anita S.', text: 'Very professional and knowledgeable.' },
  { name: 'Amit K.', text: 'Honest doctor who genuinely cares.' },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-display text-4xl font-bold text-text text-center mb-16">Patient Reviews</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="p-8 bg-background rounded-2xl space-y-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="text-text font-medium italic">"{review.text}"</p>
              <p className="text-slate-500 text-sm font-semibold">— {review.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="text-primary font-bold hover:underline">View All Google Reviews</a>
        </div>
      </div>
    </section>
  );
}
