import { ReactNode } from "react";

export default function PageContainer({ children }: { children?: ReactNode }) {
  return <main className="max-w-[1168px] w-full mx-auto">{children}</main>;
}
