export default function SectionHeader({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8">
      <span className="text-3xl mb-3 block">{icon}</span>
      <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{title}</h1>
      <p className="text-base sm:text-lg text-muted leading-relaxed max-w-3xl">{description}</p>
    </div>
  );
}