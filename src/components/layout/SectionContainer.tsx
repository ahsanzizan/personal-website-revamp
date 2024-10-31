import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface HeaderProps {
  sectionTitle: string;
  title: string;
  sectionNumber: number;
}

interface SectionContainerProps extends HTMLAttributes<HTMLDivElement> {
  headerInfo?: HeaderProps;
}

export function SectionHeader({
  title,
  sectionNumber,
  sectionTitle,
}: HeaderProps) {
  return (
    <>
      <div className="w-full pb-5 flex items-center justify-between border-b border-foreground mb-8">
        <div className="flex items-center gap-2">
          <h4>{sectionTitle}</h4>
          <div className="size-2 md:size-3 rounded-full bg-foreground animate-pulse"></div>
        </div>
        <h4>{sectionNumber > 10 ? sectionNumber : `0${sectionNumber}`}</h4>
      </div>
      <h1 className="mb-12">{title}</h1>
    </>
  );
}

export function SectionContainer({
  children,
  headerInfo,
  className,
  ...props
}: SectionContainerProps) {
  return (
    <section
      {...props}
      className={cn("w-full py-2 md:py-4 relative", className)}
    >
      {headerInfo && <SectionHeader {...headerInfo} />}
      {children}
    </section>
  );
}
