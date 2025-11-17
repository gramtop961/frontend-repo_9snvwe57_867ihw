import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { title: 'Phase 1', text: 'Short placeholder text about early launch.', status: 'Locked' },
  { title: 'Phase 2', text: 'Short placeholder text about growth.', status: 'Coming Soon' },
  { title: 'Phase 3', text: 'Short placeholder text about utilities.', status: 'Coming Soon' },
  { title: 'Phase 4', text: 'Short placeholder text about expansion.', status: 'Coming Soon' },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative w-full bg-[#0b0e12] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Roadmap
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <span className={`rounded-full border px-2 py-1 text-xs ${s.status === 'Locked' ? 'border-red-400/30 text-red-300' : 'border-emerald-400/30 text-emerald-300'} bg-white/5`}>{s.status}</span>
              </div>
              <p className="mt-3 text-sm text-gray-300">{s.text}</p>
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className={`h-full ${i === 0 ? 'w-1/5' : i === 1 ? 'w-1/4' : 'w-1/6'} bg-emerald-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
