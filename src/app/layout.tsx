import type { Metadata } from "next";
import localFont from "next/font/local";
import "./../assets/styles/globals.css";
import { Footer } from "@/components/footer/Footer";

const CabinetGrotesk = localFont({
  src: [
    {
      path: "./../assets/fonts/CabinetGrotesk-Black.otf",
      weight: "900",
      style: "black",
    },

    {
      path: "./../assets/fonts/CabinetGrotesk-Bold.otf",
      weight: "700",
      style: "bold",
    },

    {
      path: "./../assets/fonts/CabinetGrotesk-ExtraBold.otf",
      weight: "800",
      style: "extrabold",
    },

    {
      path: "./../assets/fonts/CabinetGrotesk-Medium.otf",
      weight: "500",
      style: "medium",
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
