import { Open_Sans } from "next/font/google";

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
    <html className="dark">
      <body className={openSans.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
