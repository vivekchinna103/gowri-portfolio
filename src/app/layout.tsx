import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gowri Vivek Kandregula | Python Full-Stack Developer",
  description: "Gowri Vivek Kandregula is a Python full-stack developer building scalable APIs, React applications, cloud-native services, and agentic AI systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
