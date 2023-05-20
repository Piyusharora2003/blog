import Footer from "./components/Footer/Footer";
import CardH from "./components/HorizontalCard1/CardH";
import CardHcollection from "./components/HorizontalCard1/CardHcollection";
import Nav from "./components/Navbar/Nav";
import CardVcollection from "./components/VerticalCard1/CardVcollection.js";

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
