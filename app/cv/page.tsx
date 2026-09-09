import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Cv from "@/components/Cv";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Giancarlo Serassio — CV",
  description: "Resume: 3D Product Visualization Lead, Industrial Designer, E-commerce.",
};

export default function CvPage() {
  return (
    <main>
      <Navbar />
      <Cv />
      <Footer />
    </main>
  );
}
