import "./globals.css";
import { Outfit } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provide";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Eduto",
  description: "AI generated course website",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit}>
          <Provider>
            {children}
          </Provider>
          <SpeedInsights />
          <Toaster/>
        </body>
      </html>
    </ClerkProvider>
  );
}