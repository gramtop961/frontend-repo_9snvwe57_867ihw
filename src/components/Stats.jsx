import React, { useEffect, useRef } from 'react';

function useCountUp(target = 0, duration = 1200) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const start = performance.now();
    const from = 0;

    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const val = Math.floor(from + (target - from) * p);
      el.textContent = val.toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return ref;
}

export default function Stats() {
  const communityRef = useCountUp(10000);
  const holdersRef = useCountUp(5000);
  const followersRef = useCountUp(25000);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-lg backdrop-blur-md">
        <div ref={communityRef} className="text-3xl font-extrabold text-emerald-400">0</div>
        <div className="mt-1 text-sm text-gray-300">Community</div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-lg backdrop-blur-md">
        <div ref={holdersRef} className="text-3xl font-extrabold text-emerald-400">0</div>
        <div className="mt-1 text-sm text-gray-300">Holders</div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-lg backdrop-blur-md">
        <div ref={followersRef} className="text-3xl font-extrabold text-emerald-400">0</div>
        <div className="mt-1 text-sm text-gray-300">Followers</div>
      </div>
    </div>
  );
}
