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
                <div className="glass-card p-8 lg:p-12 rounded-2xl">
                    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-zinc-400">Name</label>
                                <input type="text" className="bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-white/30 transition-colors text-white" placeholder="John Doe" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-zinc-400">Email</label>
                                <input type="email" className="bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-white/30 transition-colors text-white" placeholder="john@company.com" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-zinc-400">Company</label>
                            <input type="text" className="bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-white/30 transition-colors text-white" placeholder="Company Ltd" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-zinc-400">Message</label>
                            <textarea rows={4} className="bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-white/30 transition-colors text-white resize-none" placeholder="Tell us about your project..." />
                        </div>

                        <button className="w-full py-4 bg-white text-black rounded-lg font-semibold tracking-wide hover:bg-zinc-200 transition-colors mt-2">
                            Send Request
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
