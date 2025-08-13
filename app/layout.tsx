import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-[#E0E8F6] text-black dark:bg-[#1A1A1A] dark:text-white">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
