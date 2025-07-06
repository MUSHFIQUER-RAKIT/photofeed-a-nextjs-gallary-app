import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PhotoFeed gallary App",
  description: "A gallary app",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="container my-4 lg:my-8">{children}</div>
        <div id="modal-root-content" />
      </body>
    </html>
  );
}
