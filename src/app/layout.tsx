import { Open_Sans } from "next/font/google";

import { Providers } from "@/Providers";

import "@/styles/global.css";

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-family-open-sans",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html className={`${openSans.variable}`} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
