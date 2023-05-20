'use client';
import Footer from "@/components/Footer/Footer";
import CardHcollection from "@/components/HorizontalCard1/CardHcollection";
import Nav from "@/components/Navbar/Nav";
import CardVcollection from "@/components/VerticalCard1/CardVcollection";


export default function Home() {
  return (
    <>
      <Nav/>
      <CardHcollection/>
      <CardVcollection/>
      <Footer/>
    </>
  )
}
