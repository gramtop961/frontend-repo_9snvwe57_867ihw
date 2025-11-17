import React from 'react';
import { Leaf, Send, Twitter, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#080b0f] py-10 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
              <Leaf />
            </div>
            <div>
              <div className="font-semibold">Mr. Green</div>
              <div className="text-xs text-gray-400">Meme Project Template</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[Send, Twitter, Globe].map((Icon, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-emerald-500/40 bg-white/5 text-white backdrop-blur transition-colors hover:bg-white/10">
                <Icon size={18} className="text-emerald-300" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 border-t border-white/10 pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Mr. Green. All rights reserved. · Terms · Privacy
        </div>
      </div>
    </footer>
  );
}
