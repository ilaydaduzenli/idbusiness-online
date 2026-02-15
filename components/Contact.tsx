"use client";

export function Contact() {
    return (
        <section id="contact" className="py-24 relative container mx-auto px-4 lg:px-6">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-zinc-500 font-medium tracking-widest text-sm mb-4 uppercase">Contact</h2>
                    <h3 className="text-4xl font-medium tracking-tight">Start Your Transformation</h3>
                </div>

                {/* 
          EXISTING FORM CONTAINER
          Preserving layout as requested. 
          Assuming the form is injected here or this code replaces the wrapper around it.
          We will replicate the visual style of a high-end form here.
        */}
                <div className="glass-card p-8 lg:p-12 rounded-2xl hover:border-zinc-300 dark:hover:border-white/20 transition-all">
                    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-zinc-500 dark:text-zinc-400 transition-colors">Name</label>
                                <input type="text" className="bg-zinc-100/50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl p-4 outline-none focus:border-zinc-400 dark:focus:border-white/30 transition-all text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 shadow-inner" placeholder="John Doe" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-zinc-500 dark:text-zinc-400 transition-colors">Email</label>
                                <input type="email" className="bg-zinc-100/50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl p-4 outline-none focus:border-zinc-400 dark:focus:border-white/30 transition-all text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 shadow-inner" placeholder="john@company.com" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-zinc-500 dark:text-zinc-400 transition-colors">Company</label>
                            <input type="text" className="bg-zinc-100/50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl p-4 outline-none focus:border-zinc-400 dark:focus:border-white/30 transition-all text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 shadow-inner" placeholder="Company Ltd" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-zinc-500 dark:text-zinc-400 transition-colors">Message</label>
                            <textarea rows={4} className="bg-zinc-100/50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl p-4 outline-none focus:border-zinc-400 dark:focus:border-white/30 transition-all text-zinc-900 dark:text-white resize-none placeholder:text-zinc-400 dark:placeholder:text-zinc-600 shadow-inner" placeholder="Tell us about your project..." />
                        </div>

                        <button className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-xl font-bold tracking-wide hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all active:scale-[0.98] shadow-lg mt-2">
                            Send Request
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
