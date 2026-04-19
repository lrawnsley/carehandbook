import Link from "next/link";

interface TemplateCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
  category?: string;
}

export default function TemplateCard({ title, description, href, icon, category }: TemplateCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-surface rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-200 overflow-hidden no-underline"
    >
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-3">
          {icon && (
            <span className="text-2xl flex-shrink-0 mt-0.5" role="img" aria-hidden="true">
              {icon}
            </span>
          )}
          <div className="flex-1 min-w-0">
            {category && (
              <span className="inline-block text-xs font-medium text-primary bg-primary-light rounded-full px-2.5 py-0.5 mb-2">
                {category}
              </span>
            )}
            <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted mt-1.5 leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
          View template
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}