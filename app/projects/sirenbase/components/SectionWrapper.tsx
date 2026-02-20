interface SectionWrapperProps {
  variant: "solid" | "transparent";
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper = ({
  variant,
  children,
  className = "",
}: SectionWrapperProps) => {
  const solid = variant === "solid";

  return (
    <section
      className={`
        py-20 md:py-24
        border-t border-gray-200/80 dark:border-neutral-900/80
        ${
          solid
            ? "-mx-8 md:-mx-16 px-8 md:px-16 bg-lightBackground dark:bg-black relative"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
