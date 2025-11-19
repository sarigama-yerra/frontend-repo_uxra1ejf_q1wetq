import { useState, useEffect } from 'react'

const categories = ['Compute', 'Storage', 'Wireless', 'Mapping', 'Sensors', 'Bandwidth']
const statuses = ['live', 'testnet', 'building', 'paused']

export default function Filters({ onChange }) {
  const [q, setQ] = useState('')
  const [category, setCategory] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    const t = setTimeout(() => onChange({ q, category, status }), 300)
    return () => clearTimeout(t)
  }, [q, category, status])

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search projects..."
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-400 outline-none focus:border-emerald-400/50"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white outline-none focus:border-emerald-400/50"
      >
        <option value="">All categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white outline-none focus:border-emerald-400/50"
      >
        <option value="">All statuses</option>
        {statuses.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
    </div>
  )
}
