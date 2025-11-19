import { ExternalLink, Github, Globe, Twitter } from 'lucide-react'

export default function ProjectCard({ p }) {
  return (
    <a
      href={p.website || '#'}
      target="_blank"
      rel="noreferrer"
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/40 hover:bg-white/10"
    >
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl bg-slate-800">
          {p.image_url ? (
            <img src={p.image_url} alt={p.name} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-slate-400">{p.name?.[0]}</div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <h3 className="truncate text-lg font-semibold text-white">{p.name}</h3>
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-300">{p.status || 'live'}</span>
          </div>
          <p className="mt-1 line-clamp-2 text-sm text-slate-300">{p.description}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-300">
            {p.category && <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-emerald-300">{p.category}</span>}
            {p.token && <span className="rounded-full bg-white/10 px-2 py-0.5">Token: {p.token}</span>}
            {p.network && <span className="rounded-full bg-white/10 px-2 py-0.5">{p.network}</span>}
          </div>
          <div className="mt-4 flex items-center gap-3 text-slate-300">
            {p.website && (
              <span className="inline-flex items-center gap-1"><Globe className="h-4 w-4" /> Site</span>
            )}
            {p.twitter && (
              <span className="inline-flex items-center gap-1"><Twitter className="h-4 w-4" /> X</span>
            )}
            {p.github && (
              <span className="inline-flex items-center gap-1"><Github className="h-4 w-4" /> Code</span>
            )}
            <ExternalLink className="ml-auto h-4 w-4 opacity-0 transition group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </a>
  )
}
