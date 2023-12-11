import type { Metadata } from "next";
import { TanStackProvider } from "./utils/TanStackProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo App",
  description: "A simple todo app built with Next.js and TypeScript.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
};

export default RootLayout;
