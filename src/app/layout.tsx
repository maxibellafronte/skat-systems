import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import StarField from "@/components/StarField";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Skat Systems — Portfolio",
  description:
    "Portfolio personal de desarrollos y aplicaciones, bajo el nombre Skat Systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${orbitron.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-space-950 text-star relative">
        <StarField />
        <div className="relative z-10 flex flex-col min-h-full flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
