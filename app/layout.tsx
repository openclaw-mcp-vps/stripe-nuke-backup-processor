import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PaySwitch — Instant Backup Payment Processor',
  description: 'Pre-configured backup payment processing that activates instantly when Stripe bans you or your primary processor fails. Zero payment downtime guaranteed.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f385e09b-a9b9-49e2-8f8c-75301ae27341"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
