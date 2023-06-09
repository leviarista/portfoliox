import "./globals.css";
import { Passion_One } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const passionOne = Passion_One({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "PORTFOLIOX",
  description: "Create a free portfolio and showcase your projects!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={passionOne.className}>
        <NavBar />
        <div className="min-h-[calc(100vh-100px-52px)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
