import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const items = [
  { q: 'What is Mr. Green?', a: 'Placeholder answer. Add your project description here.' },
  { q: 'How do I join?', a: 'Placeholder answer. Replace with your community links.' },
  { q: 'When launch?', a: 'Placeholder answer. Timeline goes here.' },
  { q: 'Is there a token?', a: 'Placeholder answer. Token details placeholder.' },
  { q: 'How to contribute?', a: 'Placeholder answer. Add contribution guide.' },
  { q: 'Where is the roadmap?', a: 'Placeholder answer. See the roadmap section above.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative w-full bg-[#0b0e12] py-24 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">FAQ</h2>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-md">
          {items.map((it, i) => {
            const active = open === i;
            return (
              <div key={it.q} className="">
                <button onClick={() => setOpen(active ? -1 : i)} className="flex w-full items-center justify-between p-5 text-left">
                  <span className="font-medium">{it.q}</span>
                  <ChevronDown className={`transition-transform ${active ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${active ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden px-5 pb-5 text-gray-300">
                    {it.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
