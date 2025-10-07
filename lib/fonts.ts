import {
  Libre_Baskerville,
  Atkinson_Hyperlegible_Next,
} from "next/font/google";

export const atkinsonHyperlegible = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
});
