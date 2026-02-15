import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

export const metadata = {
    title: "Deck Coming Soon",
    description: "Our agency deck is currently being updated.",
};

export default function DeckPage() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
            <div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-6 border border-zinc-200 dark:border-zinc-800">
                <Download className="w-8 h-8 text-zinc-500" />
            </div>
            <h1 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 dark:text-white mb-4">
                Deck Updating...
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-md mb-8">
                We are currently refreshing our agency capabilities deck with our latest case studies and AI offerings. nicely.
            </p>
            <Link
                href="/"
                className="px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-medium text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
            >
                <ArrowLeft className="w-4 h-4" />
                Return Home
            </Link>
        </div>
    );
}
