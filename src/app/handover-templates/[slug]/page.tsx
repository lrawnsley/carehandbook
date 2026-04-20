import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import FormField from "@/components/FormField";
import { allHandoverTemplates } from "@/data/handover";

export function generateStaticParams() {
  return allHandoverTemplates.map((template) => ({
    slug: template.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const template = allHandoverTemplates.find((t) => t.id === slug);
  if (!template) return { title: "Template Not Found" };
  return {
    title: template.title,
    description: template.description,
  };
}

export default async function HandoverTemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const template = allHandoverTemplates.find((t) => t.id === slug);

  if (!template) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-2xl font-bold text-foreground">Template Not Found</h1>
        <p className="text-muted mt-2">The requested handover template could not be found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Handover Templates", href: "/handover-templates" },
        { label: template.title },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            {template.title}
          </h1>
          <p className="text-muted text-base max-w-2xl">{template.description}</p>
        </div>
        <PrintButton />
      </div>

      {/* Print-only header */}
      <div className="hidden print:block print-header">
        <div className="flex justify-between items-center border-b-2 border-black pb-2 mb-4">
          <div>
            <span className="text-lg font-bold">Care Handbook</span>
          </div>
          <div className="text-right">
            <span className="text-sm font-semibold">{template.title}</span>
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="bg-surface rounded-xl border border-border p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {template.fields.map((field, index) => (
            <FormField key={index} field={field} />
          ))}
        </div>

        {/* Signature area */}
        <div className="mt-8 pt-6 border-t border-border print-disclaimer">
          <p className="text-xs text-muted">
            This template is for guidance only. Adapt it to meet your organisation&apos;s specific 
            policies and procedures. Always follow your employer&apos;s handover protocols and 
            current CQC standards.
          </p>
        </div>
      </div>
    </div>
  );
}