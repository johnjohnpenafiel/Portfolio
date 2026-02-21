interface SectionWrapperProps {
  variant: "solid" | "transparent";
  children: React.ReactNode;
  className?: string;
  borderOpen?: boolean;
}

const SectionWrapper = ({
  variant,
  children,
  className = "",
  borderOpen,
}: SectionWrapperProps) => {
  const solid = variant === "solid";
  const isOpen = borderOpen ?? solid;

  return (
    <section
      className={`
        ${
          solid
            ? "-mx-8 md:-mx-16 px-8 md:px-16 bg-lightBackground dark:bg-black relative"
            : ""
        }
        ${className}
      `}
    >
      <div
        className={`border-t border-gray-200/80 dark:border-neutral-800/80 ${
          isOpen ? "-mx-8 md:-mx-16" : ""
        }`}
      />
      <div className="pt-14 pb-20 md:py-24">{children}</div>
    </section>
  );
};

export default SectionWrapper;
