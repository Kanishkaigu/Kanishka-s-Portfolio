import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Kanishka Sharma | Data Analyst & AI Specialist",
  description: "Portfolio of Kanishka Sharma - Data Analyst specializing in AI, Machine Learning, and Data Science. Showcasing expertise in Power BI, SQL, Python, and ML solutions.",
  openGraph: {
    title: "Kanishka Sharma | Data Analyst & AI Specialist",
    description: "Portfolio of Kanishka Sharma - Data Analyst specializing in AI, Machine Learning, and Data Science.",
    images: ['/portfolio-thumbnail.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kanishka Sharma | Data Analyst & AI Specialist",
    description: "Portfolio of Kanishka Sharma - Data Analyst specializing in AI, Machine Learning, and Data Science.",
    images: ['/portfolio-thumbnail.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} font-sans antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
