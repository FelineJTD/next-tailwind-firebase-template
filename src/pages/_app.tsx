import "@/styles/globals.css";
import "@/styles/text.css";
import type { AppProps } from "next/app";
import { Red_Hat_Text, Red_Hat_Display, Red_Hat_Mono } from "next/font/google";
import localFont from "next/font/local";

// FONTS
const redHatText = Red_Hat_Text({ 
  display: "swap", 
  fallback: ["sans-serif"], 
  preload: true, 
  subsets: ["latin"], 
  weight: ["400"],
  variable: "--red-hat-text"
})
const redHatDisplay = Red_Hat_Display({ 
  display: "swap",
  fallback: ["sans-serif"],
  subsets: ["latin"],
  weight: ["600"],
  variable: "--red-hat-display",
})
const redHatMono = Red_Hat_Mono({
  display: "swap",
  fallback: ["monospace"],
  subsets: ["latin"],
  weight: ["400"],
  variable: "--red-hat-mono",
})
const justCosmic = localFont({
  src: "../../public/fonts/JustCosmic.otf",
  display: "swap",
  fallback: ["serif"],
  variable: "--just-cosmic",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${redHatText.className} ${redHatText.variable} ${redHatDisplay.variable} ${redHatMono.variable} ${justCosmic.variable} selection:text-neutral-100 selection:bg-primary-900`}>
      <Component {...pageProps} />
    </div>
  );
}
