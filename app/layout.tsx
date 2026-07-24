import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Noise from "@/components/ui/Noise"; 

// 1. Inter for crisp, clean UI text
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

// 2. Space Grotesk for high-tech, engineering-focused headings
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-heading",
  display: 'swap',
});

// 3. JetBrains Mono for authentic terminal and code visuals
const jetBrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Deva Veera Kumaran S. | Portfolio",
  description: "Full-Stack Developer, AI Enthusiast & Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      {/* Inject all 3 font variables into the body */}
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Noise /> 
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}