import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Image as ImageIcon, AlignLeft } from 'lucide-react';

const pages = [
  { id: 1, title: 'Chapter 1', img: 'Image Placeholder', text: 'Text placeholder for Chapter 1. Add your lore here.' },
  { id: 2, title: 'Chapter 2', img: 'Image Placeholder', text: 'Text placeholder for Chapter 2. Add your lore here.' },
  { id: 3, title: 'Chapter 3', img: 'Image Placeholder', text: 'Text placeholder for Chapter 3. Add your lore here.' },
  { id: 4, title: 'Chapter 4', img: 'Image Placeholder', text: 'Text placeholder for Chapter 4. Add your lore here.' },
];

export default function StoryBook() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % pages.length);
  const prev = () => setIndex((i) => (i - 1 + pages.length) % pages.length);

  const currentLeft = pages[index];
  const currentRight = pages[(index + 1) % pages.length];

  return (
    <section id="story" className="relative w-full bg-[#0b0e12] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Mr. Green Storybook
        </motion.h2>
        <p className="mt-3 text-center text-gray-300">Interactive book layout with image and text placeholders.</p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button onClick={prev} className="rounded-full border border-emerald-500/40 bg-white/5 p-3 text-white backdrop-blur transition-colors hover:bg-white/10">
            <ChevronLeft />
          </button>
          <button onClick={next} className="rounded-full border border-emerald-500/40 bg-white/5 p-3 text-white backdrop-blur transition-colors hover:bg-white/10">
            <ChevronRight />
          </button>
        </div>

        <div className="relative mx-auto mt-8 w-full max-w-5xl">
          <div className="relative grid grid-cols-1 gap-6 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-md sm:grid-cols-2 sm:p-6">
            {[currentLeft, currentRight].map((page, i) => (
              <div key={i} className="relative">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={page.id}
                    initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: i === 0 ? 30 : -30 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-2xl border border-white/10 bg-[#0f141a]/60 p-4 shadow-lg"
                  >
                    <div className="aspect-[4/3] w-full rounded-xl border border-dashed border-emerald-500/30 bg-emerald-500/5 grid place-items-center text-emerald-300">
                      <div className="flex items-center gap-2"><ImageIcon size={18} /> {page.img}</div>
                    </div>
                    <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
                      <div className="mb-2 flex items-center gap-2 text-emerald-300"><AlignLeft size={16} /> {page.title}</div>
                      {page.text}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
