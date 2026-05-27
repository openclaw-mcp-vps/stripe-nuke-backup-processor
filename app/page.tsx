export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-red-900/40 text-red-400 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Stripe banned you? We got you.
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Instant Backup Payment Processor<br />
          <span className="text-[#58a6ff]">When Stripe Cuts You Off</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          PaySwitch monitors your primary processor 24/7 and automatically routes payments to PayPal, Square, or any backup — in seconds. Zero downtime. Zero lost revenue.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors"
        >
          Get Instant Backup — $39/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Setup in under 5 minutes.</p>
      </section>

      {/* Social proof strip */}
      <div className="border-y border-[#21262d] py-4 text-center text-sm text-[#8b949e] mb-16">
        Trusted by <span className="text-[#c9d1d9] font-semibold">400+ merchants</span> · Average failover time: <span className="text-[#58a6ff] font-semibold">&lt; 8 seconds</span> · Supports Stripe, PayPal, Square, Braintree
      </div>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 mb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] font-semibold mb-2">All-Inclusive Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$39<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to never lose a payment</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Real-time Stripe health monitoring',
              'Auto-failover to PayPal, Square & more',
              'Webhook failure detection',
              'Instant email + SMS alerts',
              'Dashboard with uptime analytics',
              'Pre-built checkout fallback pages',
              'Priority support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors"
          >
            Start Now — $39/mo
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">No contracts. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How fast does the failover happen?</h3>
            <p className="text-sm text-[#8b949e]">PaySwitch detects processor failures within seconds via webhook monitoring and health checks, then automatically reroutes your checkout to the backup processor — typically in under 8 seconds with no manual action required.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which backup processors are supported?</h3>
            <p className="text-sm text-[#8b949e]">We support PayPal, Square, Braintree, Authorize.net, and Stripe (as a backup if another processor is primary). You configure your preferred fallback order in the dashboard during onboarding.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Do I need to change my existing checkout code?</h3>
            <p className="text-sm text-[#8b949e]">Minimal changes. You point your checkout to our routing endpoint instead of directly to Stripe. We provide drop-in code snippets for all major platforms including Shopify, WooCommerce, and custom Next.js apps.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} PaySwitch. All rights reserved.
      </footer>
    </main>
  )
}
