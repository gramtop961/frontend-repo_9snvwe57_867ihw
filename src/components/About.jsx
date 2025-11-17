import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Zap } from 'lucide-react';

const features = [
  { icon: Users, title: 'Community', text: 'Placeholder text about an energetic, inclusive community.' },
  { icon: BookOpen, title: 'Story', text: 'Placeholder text for a rich, evolving lore ready to unfold.' },
  { icon: Zap, title: 'Utility', text: 'Placeholder text for simple, fun utilities around the meme.' },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0b0e12] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(34,197,94,0.1),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Simple About Section
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-center text-gray-300"
        >
          Short paragraph of placeholder text about Mr. Green. Clean copy, strong vibes, ready for your voice.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                <f.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
