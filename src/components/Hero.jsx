import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0e12] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0e12]/60 via-[#0b0e12]/70 to-[#0b0e12]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 md:px-10">
        <motion.span
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300 backdrop-blur"
        >
          Mr. Green — Crypto Meme Template
        </motion.span>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.05 }}
          className="text-center text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-sm sm:text-6xl"
        >
          Big Bold Headline Goes Here
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.15 }}
          className="mt-4 max-w-2xl text-center text-base text-gray-300 sm:text-lg"
        >
          Short subheadline with placeholder copy. Clean, minimal, and ready for your story.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#community"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-[#0b0e12] transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]"
          >
            <Send size={18} /> Join Telegram
          </a>
          <a
            href="#roadmap"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-white/5 px-6 py-3 text-white backdrop-blur transition-all duration-300 hover:bg-white/10"
          >
            View Roadmap <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Hero visual placeholder frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-14 w-full max-w-5xl"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
            <div className="absolute inset-0 grid place-items-center">
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-emerald-300">3D Mr. Green Render Placeholder</div>
            </div>
            {/* subtle glow accents */}
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
