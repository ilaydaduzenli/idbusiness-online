import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-white px-4">
            <div className="glass-card p-12 rounded-2xl border border-white/5 flex flex-col items-center max-w-lg text-center">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
                    <AlertTriangle className="w-8 h-8 text-zinc-400" />
                </div>
                <h2 className="text-4xl font-bold tracking-tighter mb-4">Signal Lost</h2>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                    The page you are looking for has been moved, deleted, or never existed.
                    Return to the grid to re-establish connection.
                </p>
                <div className="flex gap-4">
                    <Link
                        href="/"
                        className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors"
                    >
                        Return Home
                    </Link>
                    <Link
                        href="/contact"
                        className="px-6 py-3 bg-white/5 border border-white/10 rounded-full font-medium hover:bg-white/10 transition-colors"
                    >
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    )
}
