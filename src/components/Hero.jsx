import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ onExplore }) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-slate-200 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_15px_#34d399]"></span>
          Live DePIN directory
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-balance bg-gradient-to-b from-white to-slate-300 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Track every DePIN project
          <br className="hidden sm:block" />
          in a clean, futuristic view
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-2xl text-pretty text-slate-300"
        >
          Explore decentralized physical infrastructure across compute, storage, wireless, mapping and more. Minimal UI, rich 3D feel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={onExplore}
            className="group rounded-full bg-white px-6 py-3 text-slate-900 shadow-lg shadow-emerald-500/10 transition hover:shadow-emerald-400/20"
          >
            Explore projects
            <span className="ml-2 inline-block transition group-hover:translate-x-0.5">→</span>
          </button>
          <a
            href="#about"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white backdrop-blur transition hover:border-white/30"
          >
            Learn more
          </a>
        </motion.div>
      </div>
    </section>
  )
}
