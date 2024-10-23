import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";

const poppins = Poppins({
  subsets:[ "latin"],
  weight: [ '400', '500', '700',  '900'],
  style:['normal','italic'],
  variable: "--font-poppins",
})


export const metadata: Metadata = {
  title: "Hotel Management App",
  description: "Discover teh best hotel rooms for your next vacation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <main className="font-normal">
          <Header />
        {children}
        </main>
      </body>
    </html>
  );
}
