import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log in",
  description: "Login to TikTok Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  );
}
