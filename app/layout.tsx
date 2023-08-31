import "@/style/main.scss";
import type { Metadata } from "next";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export const metadata: Metadata = {
  title: "Specialized",
  description: "SoftLion E-Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" />
      </head>
      <body>
        <HeaderComponent />
        {children}
        <FooterComponent />
        </body>
    </html>
  );
}
