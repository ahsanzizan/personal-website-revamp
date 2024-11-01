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
      <div className="mb-8 flex w-full items-center justify-between border-b border-foreground pb-5">
        <div className="flex items-center gap-2">
          <h4>{sectionTitle}</h4>
          <div className="size-2 animate-pulse rounded-full bg-foreground md:size-3"></div>
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
      className={cn("relative w-full py-8 md:py-16", className)}
    >
      {headerInfo && <SectionHeader {...headerInfo} />}
      {children}
    </section>
  );
}
