import React from 'react';
import { motion } from 'framer-motion';
import { Send, Twitter, Image as ImageIcon, Globe } from 'lucide-react';

export default function Community() {
  const stats = [
    { label: 'Community Members', value: '12,345' },
    { label: 'Daily Vibes', value: '256' },
    { label: 'Memes Minted', value: '999+' },
  ];

  const icons = [
    { label: 'Telegram', icon: Send },
    { label: 'X', icon: Twitter },
    { label: 'Website', icon: Globe },
  ];

  return (
    <section id="community" className="relative w-full bg-[#0b0e12] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Community & Social
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-lg backdrop-blur-md">
              <div className="text-3xl font-extrabold text-emerald-400">{s.value}</div>
              <div className="mt-1 text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {icons.map(({ label, icon: Icon }) => (
            <a key={label} href="#" className="group inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-white/5 px-5 py-2.5 text-white backdrop-blur transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]">
              <Icon size={18} className="text-emerald-300" /> {label}
            </a>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[1,2,3,4].map((i) => (
            <div key={i} className="aspect-square rounded-xl border border-dashed border-emerald-500/30 bg-emerald-500/5 grid place-items-center text-emerald-300">
              <div className="flex items-center gap-2"><ImageIcon size={16} /> Meme / Fan Art</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
