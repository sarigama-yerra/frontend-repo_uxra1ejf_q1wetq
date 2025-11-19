import { useEffect, useMemo, useState } from 'react'
import Hero from './components/Hero'
import Filters from './components/Filters'
import ProjectCard from './components/ProjectCard'

function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filters, setFilters] = useState({ q: '', category: '', status: '' })

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const fetchProjects = async (params = {}) => {
    setLoading(true)
    setError('')
    const search = new URLSearchParams()
    Object.entries(params).forEach(([k, v]) => {
      if (v) search.set(k, v)
    })
    try {
      const res = await fetch(`${baseUrl}/api/projects?${search.toString()}`)
      if (!res.ok) throw new Error('Failed to fetch projects')
      const data = await res.json()
      setItems(data.items || [])
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects(filters)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => fetchProjects(filters), 250)
    return () => clearTimeout(t)
  }, [filters])

  const onExplore = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Hero onExplore={onExplore} />

      <main className="relative mx-auto -mt-12 max-w-7xl px-6 pb-24">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">DePIN projects</h2>
              <p className="text-sm text-slate-300">Clean directory with search and filters</p>
            </div>
            <div className="w-full sm:w-[480px]">
              <Filters onChange={setFilters} />
            </div>
          </div>

          {error && (
            <p className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">{error}</p>
          )}

          {loading ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-36 animate-pulse rounded-2xl bg-white/5" />
              ))}
            </div>
          ) : items.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
              <p className="text-slate-300">No projects found. Try different filters.</p>
              <button onClick={() => setFilters({ q: '', category: '', status: '' })} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white hover:border-white/20">Reset filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((p) => (
                <ProjectCard key={p.id || p.name} p={p} />
              ))}
            </div>
          )}
        </div>
      </main>

      <footer id="about" className="border-t border-white/10 bg-slate-950/80 py-10 text-center text-sm text-slate-400">
        Built for the DePIN ecosystem • Minimal, fast, futuristic
      </footer>
    </div>
  )
}

export default App
