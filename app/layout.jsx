import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "mazano italian",
  description: `Embark on a gastronomic adventure through the heart of Italy with our meticulously crafted Next.js website dedicated to the exquisite world of Italian cuisine. From the rolling hills of Tuscany to the bustling streets of Naples, our platform is a treasure trove of authentic recipes, culinary insights, and captivating stories that celebrate the rich tapestry of Italian gastronomy.

  Indulge your senses as you explore a diverse array of mouthwatering dishes, each lovingly prepared using time-honored techniques and the finest ingredients sourced from Italy's bountiful landscapes. Whether you're a seasoned chef seeking inspiration or an avid food enthusiast eager to expand your culinary horizons, our Next.js project provides an immersive and user-friendly experience that caters to your every need.
  
  With a sleek and intuitive interface, seamless navigation, and lightning-fast performance powered by Next.js, discovering the joys of Italian cooking has never been easier. Join us on a culinary journey like no other, where every click transports you to a world of flavor, tradition, and passion. Buon appetito!`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}
