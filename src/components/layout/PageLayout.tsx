
import { ReactNode } from "react";
import Header from "./Header";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f6fbff]">
      <Header />
      <main className="flex-1 container py-6">{children}</main>
    </div>
  );
}
