import { AuthProvider } from '@descope/nextjs-sdk';
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from 'sonner';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider projectId="P2pCC4AfcK3HWE7p2MkEKlVwgjYl">
    <html lang="en">  
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-6 md:mx-16">
            <Header />
            <Toaster />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
    </AuthProvider>
  );
}
