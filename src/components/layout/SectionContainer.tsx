import { HTMLAttributes } from "react";

export function SectionContainer({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <section {...props} className="w-full py-2 md:py-4 relative">
      {children}
    </section>
  );
}
