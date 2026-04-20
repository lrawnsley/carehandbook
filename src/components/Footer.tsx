import Link from "next/link";

export default function Footer() {
  return (
    <footer className="no-print bg-slate-800 text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Disclaimer */}
        <div className="bg-amber-900/30 border border-amber-700/50 rounded-lg p-4 mb-8">
          <p className="text-amber-200 text-sm font-semibold mb-1">⚠️ Important Disclaimer</p>
          <p className="text-amber-200/80 text-sm leading-relaxed">
            For guidance only — always follow your organisation&apos;s policies and current CQC standards. 
            Care Handbook provides general information and templates for UK care home staff. It does not replace 
            formal training, professional judgement, or your employer&apos;s specific policies and procedures. 
            Always consult your line manager or the relevant professional body if in doubt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white mb-3">
              <span className="text-xl">⚕️</span>
              <span className="text-lg font-bold">Care Handbook</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Free resources for UK care home staff. Dementia care, CQC guidance, 
              infection control, templates, and medication information — all in one place.
            </p>
          </div>

          {/* Dementia & Specialist Care */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Dementia & Specialist</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/dementia-care" className="text-slate-400 hover:text-white transition-colors no-underline">Dementia Care</Link></li>
              <li><Link href="/dementia-care/getting-to-know-me" className="text-slate-400 hover:text-white transition-colors no-underline">Getting to Know Me</Link></li>
              <li><Link href="/dementia-care/abc-chart" className="text-slate-400 hover:text-white transition-colors no-underline">ABC Behaviour Chart</Link></li>
              <li><Link href="/infection-control" className="text-slate-400 hover:text-white transition-colors no-underline">Infection Control</Link></li>
              <li><Link href="/falls" className="text-slate-400 hover:text-white transition-colors no-underline">Falls Prevention</Link></li>
              <li><Link href="/nutrition" className="text-slate-400 hover:text-white transition-colors no-underline">Nutrition & Hydration</Link></li>
            </ul>
          </div>

          {/* Regulation & Safety */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Regulation & Safety</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/cqc-regulations" className="text-slate-400 hover:text-white transition-colors no-underline">CQC Regulations</Link></li>
              <li><Link href="/safeguarding" className="text-slate-400 hover:text-white transition-colors no-underline">Safeguarding</Link></li>
              <li><Link href="/fire-safety" className="text-slate-400 hover:text-white transition-colors no-underline">Fire Safety</Link></li>
              <li><Link href="/end-of-life" className="text-slate-400 hover:text-white transition-colors no-underline">End of Life Care</Link></li>
              <li><Link href="/complaints" className="text-slate-400 hover:text-white transition-colors no-underline">Complaints Handling</Link></li>
              <li><Link href="/admission-discharge" className="text-slate-400 hover:text-white transition-colors no-underline">Admission & Discharge</Link></li>
            </ul>
          </div>

          {/* Templates & Medication */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Templates & Guidance</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/templates" className="text-slate-400 hover:text-white transition-colors no-underline">Care & Nursing Templates</Link></li>
              <li><Link href="/handover-templates" className="text-slate-400 hover:text-white transition-colors no-underline">Handover Templates</Link></li>
              <li><Link href="/medication-guidance" className="text-slate-400 hover:text-white transition-colors no-underline">Medication Guidance</Link></li>
              <li><Link href="/employee-responsibilities" className="text-slate-400 hover:text-white transition-colors no-underline">Employee Responsibilities</Link></li>
              <li><Link href="/staff-resources" className="text-slate-400 hover:text-white transition-colors no-underline">Staff Resources</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Care Handbook. This is a free educational resource — not affiliated with the CQC.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link href="https://www.cqc.org.uk" className="hover:text-slate-300 transition-colors no-underline" target="_blank" rel="noopener noreferrer">
              CQC Website ↗
            </Link>
            <Link href="https://www.nice.org.uk" className="hover:text-slate-300 transition-colors no-underline" target="_blank" rel="noopener noreferrer">
              NICE ↗
            </Link>
            <Link href="https://www.nhs.uk" className="hover:text-slate-300 transition-colors no-underline" target="_blank" rel="noopener noreferrer">
              NHS ↗
            </Link>
            <Link href="https://www.alzheimers.org.uk" className="hover:text-slate-300 transition-colors no-underline" target="_blank" rel="noopener noreferrer">
              Alzheimer&apos;s Society ↗
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}