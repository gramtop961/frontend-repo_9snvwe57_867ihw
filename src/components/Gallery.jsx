import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';

const images = Array.from({ length: 8 }, (_, i) => i + 1);

export default function Gallery() {
  return (
    <section id="gallery" className="relative w-full bg-[#0b0e12] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Meme / Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-center text-gray-300"
        >
          A clean grid of image placeholders for your memes and fan art.
        </motion.p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-md"
            >
              <div className="absolute inset-0 grid place-items-center">
                <div className="rounded-xl border border-dashed border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300 flex items-center gap-2">
                  <ImageIcon size={14} /> Image Placeholder
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 transition-all duration-300 group-hover:ring-2 group-hover:ring-emerald-400/40 group-hover:shadow-[0_0_35px_rgba(16,185,129,0.35)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
