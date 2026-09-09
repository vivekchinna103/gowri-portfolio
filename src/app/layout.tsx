import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gowri K. | Full-Stack Software Engineer",
  description: "Portfolio of Gowri K., a full-stack software engineer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
