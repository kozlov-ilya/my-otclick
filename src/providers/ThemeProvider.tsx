import { ThemeProvider as NextThemesProvider } from "next-themes";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemesProvider defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
};
