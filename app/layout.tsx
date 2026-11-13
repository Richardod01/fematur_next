import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "./styles/app.scss";
import HeaderComponent from "./components/layout/Header";
import FooterComponent from "./components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-theme-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fematur New",
  description: "Descripción de tu proyecto",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${montserrat.variable} ${geistMono.variable}`}>
      <body>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
