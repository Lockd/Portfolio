import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./styles/global.css";

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grigorii Pika",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main className={dmSans.className}>{children}</main>
      </body>
    </html>
  );
}
