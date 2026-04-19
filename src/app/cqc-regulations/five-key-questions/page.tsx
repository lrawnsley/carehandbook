import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { fiveKeyQuestions } from "@/data/cqc";

export const metadata: Metadata = {
  title: "The 5 Key Questions",
  description:
    "The five key questions CQC inspectors ask: Is the service Safe, Effective, Caring, Responsive, and Well-led? Understand what each question covers and what inspectors look for.",
};

export default function FiveKeyQuestionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[{ label: "CQC Regulations", href: "/cqc-regulations" }, { label: "The 5 Key Questions" }]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            The 5 Key Questions
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            CQC inspectors assess care services against five key questions. Each question 
            represents a fundamental area of quality that every care home must demonstrate.
          </p>
        </div>
        <PrintButton />
      </div>

      <div className="bg-primary-light/30 border border-primary/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-foreground">
          <strong>The five key questions</strong> come from the Health and Social Care Act 2008 
          (Regulated Activities) Regulations 2014. Inspectors evaluate each question and award 
          a rating of Outstanding, Good, Requires Improvement, or Inadequate for each one, as 
          well as an overall rating. The five questions must all be &ldquo;Good&rdquo; or above for a 
          service to receive an overall Good rating.
        </p>
      </div>

      <div className="space-y-6">
        {fiveKeyQuestions.map((question, index) => (
          <section key={question.name} className="bg-surface rounded-xl border border-border p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </span>
              <h2 className="text-xl font-bold text-foreground pt-1.5">
                Is the service {question.name}?
              </h2>
            </div>
            <p className="text-muted leading-relaxed mb-4 pl-14">{question.description}</p>
            <div className="pl-14">
              <h3 className="text-sm font-semibold text-foreground mb-2">Key areas inspectors assess:</h3>
              <ul className="space-y-1.5">
                {question.keyAreas.map((area) => (
                  <li key={area} className="flex items-start gap-2 text-sm text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-8 bg-surface rounded-xl border border-border p-6">
        <h2 className="text-lg font-bold text-foreground mb-3">Understanding the Ratings</h2>
        <p className="text-sm text-muted leading-relaxed mb-3">
          After an inspection, the CQC rates each of the five key questions and gives an overall 
          rating. A service can be rated Outstanding, Good, Requires Improvement, or Inadequate. 
          For more details, see our page on{" "}
          <a href="/cqc-regulations/inspection-ratings" className="text-primary hover:underline">
            Inspection Process & Ratings
          </a>.
        </p>
      </div>
    </div>
  );
}