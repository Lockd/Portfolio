import type { AppProps } from "next/app";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grigorii Pika",
  description: "Portfolio website",
};

export default function MyApp({ Component, pageProps }: AppProps) {
  // TODO add global CSS here

  return <Component {...pageProps} />;
}
