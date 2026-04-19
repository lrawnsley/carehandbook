import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import FormField from "@/components/FormField";
import { careTemplates } from "@/data/templates";

export function generateStaticParams() {
  return careTemplates.map((template) => ({
    slug: template.id,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const template = careTemplates.find((t) => t.id === params.slug);
  if (!template) return { title: "Template Not Found" };
  return {
    title: template.title,
    description: template.description,
  };
}

export default function CareTemplatePage({ params }: { params: { slug: string } }) {
  const template = careTemplates.find((t) => t.id === params.slug);

  if (!template) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-2xl font-bold text-foreground">Template Not Found</h1>
        <p className="text-muted mt-2">The requested template could not be found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print-container">
      <Breadcrumbs items={[
        { label: "Care & Nursing Templates", href: "/templates" },
        { label: template.title },
      ]} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <span className="inline-block text-xs font-medium text-primary bg-primary-light rounded-full px-2.5 py-0.5 mb-2">
            {template.category}
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            {template.title}
          </h1>
          <p className="text-muted text-base max-w-2xl">{template.description}</p>
        </div>
        <PrintButton />
      </div>

      {/* Form Fields */}
      {template.fields && (
        <div className="bg-surface rounded-xl border border-border p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {template.fields.map((field, index) => (
              <FormField key={index} field={field} />
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs text-muted">
              This template is for guidance only. Adapt it to meet your organisation&apos;s specific 
              policies and procedures. Always follow your employer&apos;s protocols and current CQC standards.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}