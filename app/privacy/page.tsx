export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-300 pt-32 pb-24">
            <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
                <div className="prose prose-invert prose-zinc max-w-none">
                    <p className="mb-4">Last Updated: February 2026</p>

                    <h3 className="text-xl font-medium text-white mt-8 mb-4">1. Introduction</h3>
                    <p>
                        idbusiness.co ("we", "our", or "us") is committed to protecting your privacy.
                        This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
                    </p>

                    <h3 className="text-xl font-medium text-white mt-8 mb-4">2. Information We Collect</h3>
                    <p>
                        We may collect personal information that you voluntarily provide to us when you fill out forms on the website,
                        such as your name, email address, and project details. We also automatically collect certain technical data
                        via cookies and analytics tools to improve our services.
                    </p>

                    <h3 className="text-xl font-medium text-white mt-8 mb-4">3. Use of Information</h3>
                    <p>
                        We use the collected information to:
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Provide and maintain our services.</li>
                            <li>Respond to your inquiries and support requests.</li>
                            <li>Improve our website performance and user experience.</li>
                            <li>Comply with legal obligations.</li>
                        </ul>
                    </p>

                    <h3 className="text-xl font-medium text-white mt-8 mb-4">4. Data Security</h3>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal data against
                        unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure.
                    </p>

                    <h3 className="text-xl font-medium text-white mt-8 mb-4">5. Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at hello@idbusiness.co.
                    </p>
                </div>
            </div>
        </main>
    );
}
