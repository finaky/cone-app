import type { Metadata } from "next";
import localFont from "next/font/local";
import "./../assets/styles/globals.css";
import { Footer } from "@/components/layout/footer/Footer";

const CabinetGrotesk = localFont({
  src: [
    {
      path: "../assets/fonts/CabinetGrotesk-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/CabinetGrotesk-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/CabinetGrotesk-Extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/CabinetGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Cone Website",
  description: "We create beautiful efficient wordpress websites!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${CabinetGrotesk.className} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
