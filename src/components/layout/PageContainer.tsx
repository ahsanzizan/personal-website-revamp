"use client";

import { useLenis } from "@/hooks/use-lenis";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

function Navbar() {
  return (
    <nav className="max-w-[1168px] w-full mx-auto px-5 pt-16">
      <div className="flex items-center justify-between border-b pb-4 border-foreground">
        <Link href={"/"} className={cn("w-14 h-14 group")}>
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={64}
            height={64}
            className="aspect-square size-14 group-hover:invert transition-all duration-500"
          />
        </Link>
        <div className="flex flex-col gap-4">
          <Link href={"/work"} className="underline-animation">
            <h4>Get in touch</h4>
          </Link>
          <div className="flex items-center justify-end gap-4">
            <Link href={"/blog"} className="underline-animation">
              <p>Blog</p>
            </Link>
            <Link href={"/work"} className="underline-animation">
              <p>Work</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="py-20 w-full bg-background-secondary">
      <div className="max-w-[1168px] mx-auto w-full px-5">
        <div className="max-w-xs md:max-w-xl w-full mx-auto text-center mb-20">
          <h1 className="display mb-10">Be Kind and Do Great Things</h1>
          <Link href={"#"} className="underline-animation">
            <h4>Let&apos;s go back up</h4>
          </Link>
        </div>
        <div className="flex items-center justify-between border-b border-foreground pb-8">
          <div className="flex items-center gap-8">
            <Link
              href={"https://instagram.com/ahsanzizan"}
              className="underline-animation"
            >
              <p>Instagram</p>
            </Link>
            <Link
              href={"https://www.youtube.com/@ahsanzizan"}
              className="underline-animation"
            >
              <p>YouTube</p>
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <Link
              href={"https://github.com/ahsanzizan"}
              className="underline-animation"
            >
              <p>GitHub</p>
            </Link>
            <Link
              href={"https://linkedin.com/in/ahsan-azizan"}
              className="underline-animation"
            >
              <p>LinkedIn</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function PageContainer({ children }: { children?: ReactNode }) {
  useLenis();

  return (
    <>
      <Navbar />
      <main className="max-w-[1168px] w-full mx-auto px-5">{children}</main>
      <Footer />
    </>
  );
}
