import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Menu, X, Send } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Story', href: '#story' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Community', href: '#community' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Gallery', href: '#gallery' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0a0e14]/60 px-4 py-2 backdrop-blur-xl shadow-lg">
            <a href="#home" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300"><Leaf size={18} /></span>
              <span className="text-sm font-semibold tracking-wide">Mr. Green</span>
            </a>

            <div className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-gray-300 transition-colors hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a href="#community" className="hidden rounded-full bg-emerald-500 px-4 py-2 text-[#0b0e12] transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_24px_rgba(16,185,129,0.6)] md:inline-flex items-center gap-2">
                <Send size={16} /> Join Telegram
              </a>
              <button onClick={() => setOpen(true)} className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white backdrop-blur md:hidden">
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-50 h-full w-80 border-l border-white/10 bg-[#0a0e14]/90 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-300"><Leaf size={16} /></span>
                <span className="text-sm font-semibold">Mr. Green</span>
              </div>
              <button onClick={() => setOpen(false)} className="rounded-lg border border-white/10 bg-white/5 p-2 text-white">
                <X />
              </button>
            </div>
            <div className="mt-2 flex flex-col gap-2 px-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200 transition-colors hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <a href="#community" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-[#0b0e12]">
                <Send size={16} /> Join Telegram
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
