interface GarageSectionProps {
  eyebrow: string;
  headline?: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}

const GarageSection = ({
  eyebrow,
  headline,
  intro,
  children,
  className = "",
}: GarageSectionProps) => {
  return (
    <section className={className}>
      <div className="border-t border-gray-200/80 dark:border-neutral-800/80 -mx-8 md:-mx-16" />
      <div className="pt-14 pb-20 md:py-24">
        <p className="font-kodchasan text-gray-400 mb-4">{eyebrow}</p>
        {headline && (
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
            {headline}
          </h2>
        )}
        {intro && (
          <p className="text-base font-light text-gray-600 dark:text-neutral-300 max-w-[680px] leading-relaxed mb-12">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default GarageSection;
