import Link from "next/link";
import { mainSections } from "@/data/site";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl" role="img" aria-label="medical symbol">⚕️</span>
              <span className="text-2xl font-bold tracking-tight">Care Handbook</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Free Resources for UK Care Home Staff
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Dementia care guides, CQC regulation resources, printable handover templates, 
              care plan and risk assessment forms, medication guidance, infection control, 
              and more — all in one place. Built for care assistants, nurses, and managers 
              working in UK care homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#sections"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors no-underline"
              >
                Browse Resources
              </Link>
              <Link
                href="/medication-guidance/five-rights"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 border border-white/30 text-white font-medium rounded-lg hover:bg-white/20 transition-colors no-underline"
              >
                The 5 Rights of Medication →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section id="sections" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Everything You Need, Organised
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Six core sections covering the essential areas of UK care home work, 
            plus specialist resources for dementia care, infection control, falls prevention, 
            nutrition, and more. Each resource is free, printable, and based on current CQC standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mainSections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group block bg-surface rounded-xl border border-border hover:border-primary hover:shadow-xl transition-all duration-300 no-underline overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <span className="text-4xl block mb-4">{section.icon}</span>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {section.title}
                </h3>
                <p className="text-muted text-sm sm:text-base leading-relaxed">
                  {section.description}
                </p>
                <div className="mt-4 inline-flex items-center text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
                  Explore section
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Access */}
      <section className="bg-primary-light/30 border-t border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-3">
            Most-Used Resources
          </h2>
          <p className="text-muted text-center mb-8 max-w-xl mx-auto">
            Quick links to the resources care workers access most frequently.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { href: "/dementia-care", label: "Dementia Care", icon: "🧠" },
              { href: "/medication-guidance/five-rights", label: "5 Rights", icon: "💊" },
              { href: "/infection-control/hand-hygiene", label: "Hand Hygiene", icon: "🦠" },
              { href: "/falls/risk-assessment", label: "Falls Risk", icon: "🚨" },
              { href: "/nutrition/must-screening", label: "MUST Screening", icon: "🍽️" },
              { href: "/cqc-regulations/five-key-questions", label: "5 Key Questions", icon: "🛡️" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex flex-col items-center gap-2 p-4 bg-surface rounded-xl border border-border hover:border-primary hover:shadow-md transition-all text-center no-underline"
              >
                <span className="text-2xl">{link.icon}</span>
                <span className="text-sm font-medium text-foreground">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="text-2xl flex-shrink-0">⚠️</span>
            <div>
              <h3 className="font-bold text-foreground text-lg mb-2">Important Notice</h3>
              <p className="text-muted leading-relaxed">
                Care Handbook is a <strong>guidance resource only</strong>. It does not replace your organisation&apos;s 
                policies, formal training, or current CQC standards. Always follow your employer&apos;s 
                specific procedures and consult your line manager or the relevant professional body 
                if you are unsure. The information here is based on current CQC frameworks and UK 
                legislation but may not reflect the very latest updates. Always verify with 
                <a href="https://www.cqc.org.uk" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer"> cqc.org.uk</a> for the most current guidance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}