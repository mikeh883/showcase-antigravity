import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { ChatWidget } from "@/components/ChatWidget";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mike Holloway | Product Engineer & Creative Technologist",
  description: "Transforming novel ideas into working AI prototypes. A showcase of 9 functional applications demonstrating end-to-end product thinking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <ChatWidget />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
