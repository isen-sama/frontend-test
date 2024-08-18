import { Prompt } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Navbar from "./components/navbar";
import BootstrapClient from "./components/BootstrapClient";
import Footer from "./components/footer";
import React from "react";

const prompt = Prompt({ weight:['400','700'], subsets:["latin"] });

export const metadata = {
  title: "MaoAnime",
  description: "Promote Anime by MaoAnime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={prompt.className}><Navbar/>{children}<BootstrapClient/><Footer/></body>
      
    </html>
  );
}
