import { Courier_Prime } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Noto_Serif_TC } from "next/font/google";
import { Noto_Sans_TC } from "next/font/google";

// export const courier_prime700  = Courier_Prime({ subsets: ['latin'], weight: '700' })
export const courier_prime400 = Courier_Prime({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: '--courierPrime-font'
});
export const merriweather300 = Merriweather({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
  variable: '--merriweather-font'
});
export const merriweather700 = Merriweather({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  variable: '--merriweather-font'
});
export const noto_serif_tc400 = Noto_Serif_TC({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: '--notoSerifTC-font'
});
export const noto_sans_tc400 = Noto_Sans_TC({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: '--notoSansTC-font'
});
