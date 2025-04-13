import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garage Invoice",
  description: "Prepare and download your garage invoice",
  icons: "garage-invoice.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="top-0 bg-orange-500 sticky flex-wrap w-full z-50 border-primary">
          <h1 className="text-xl text-white pl-4 p-2">My Garage Invoice</h1>
        </header>
        <main className="flex flex-grow p-4 pt-8">{children}</main>
      </body>
    </html>
  );
}
