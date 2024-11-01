"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import CustomCursor from "../providers/CustomCursorProvider";
import { buttonVariants } from "../ui/button";

function Navbar() {
  return (
    <nav className="mx-auto w-full max-w-[1168px] px-5 pt-16">
      <div className="flex items-center justify-between border-b border-foreground pb-4">
        <Link href={"/"} className={cn("group h-14 w-14")}>
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={64}
            height={64}
            loading="lazy"
            className="aspect-square size-14 transition-all duration-500 group-hover:invert"
          />
        </Link>
        <div className="flex flex-col gap-4">
          <Link
            href={"/work"}
            className={buttonVariants({ variant: "default" })}
          >
            <h4>Get in touch</h4>
          </Link>
          <div className="flex items-center justify-end gap-4">
            <Link
              href={"/blog"}
              className={buttonVariants({ variant: "default" })}
            >
              <p>Blog</p>
            </Link>
            <Link
              href={"/work"}
              className={buttonVariants({ variant: "default" })}
            >
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
    <footer className="w-full bg-background-secondary pb-20 pt-32">
      <div className="mx-auto w-full max-w-[1168px] px-5">
        <div className="mx-auto mb-20 w-full max-w-xs text-center md:max-w-xl">
          <h1 className="mb-10">Be Kind and Do Great Things</h1>
          <Link href={"#"} className={buttonVariants({ variant: "secondary" })}>
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
        <p className="w-full py-5 text-center">Copyright &copy; Ahsan Azizan</p>
      </div>
    </footer>
  );
}

export function PageContainer({ children }: { children?: ReactNode }) {
  return (
    <>
      <Navbar />
      <CustomCursor />
      <main className="mx-auto w-full max-w-[1168px] px-5 py-12">
        {children}
      </main>
      <Footer />
    </>
  );
}
