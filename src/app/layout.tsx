import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/ui/navigation";
import { GlobalSpotlight } from "@/components/ui/global-spotlight";
import { StructuredData } from "@/components/seo/structured-data";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Felipe Orellana - Full Stack Engineer & Software Developer",
    template: "%s | Felipe Orellana"
  },
  description: "Ingeniero de Software especializado en desarrollo Full Stack con Next.js, Django y DevOps. Creador de sistemas escalables y soluciones empresariales.",
  keywords: [
    "full stack developer",
    "software engineer",
    "Next.js",
    "React",
    "Django",
    "Python",
    "DevOps",
    "Chile",
    "desarrollador web",
    "ingeniero informático",
    "portfolio"
  ],
  authors: [{ name: "Felipe Orellana", url: "https://felipeorellana.dev" }],
  creator: "Felipe Orellana",
  publisher: "Felipe Orellana",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://felipeorellana.dev",
    title: "Felipe Orellana - Full Stack Engineer",
    description: "Ingeniero de Software especializado en desarrollo Full Stack con Next.js, Django y DevOps.",
    siteName: "Felipe Orellana Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Felipe Orellana - Full Stack Engineer",
    description: "Ingeniero de Software especializado en desarrollo Full Stack con Next.js, Django y DevOps.",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-slate-950 text-slate-50`}>
        <GlobalSpotlight />
        <Navigation />
        <Analytics />
        <main className="relative">
          {children}
        </main>
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1A1A1A',
              color: '#CCCCCC',
              border: '1px solid rgba(139, 92, 246, 0.2)',
            },
            success: {
              iconTheme: {
                primary: '#8B5CF6',
                secondary: '#FFFFFF',
              },
            },
            error: {
              iconTheme: {
                primary: '#EF4444',
                secondary: '#FFFFFF',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
