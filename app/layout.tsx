import "@/style/main.scss";
import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
