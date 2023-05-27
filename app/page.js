import Footer from "@/components/Footer/Footer";
import CardHcollection from "@/components/HorizontalCard1/CardHcollection";
import Nav from "@/components/Navbar/Nav";
import CardVcollection from "@/components/VerticalCard1/CardVcollection";

async function getServerSideProps() {
 const res = await fetch(`http://localhost:3000/api/getlatestposts`);
 const data = (await res.json()).posts;
//  console.log(data);
 return {
  data
 };
}

export default async function Home() {
    const data = await getServerSideProps();
    // console.log("data is new one ");
    // console.log(data.data);
    const finaldata = await data.data;
  return (
    <>
      <Nav/>
      <CardHcollection LatestPost={finaldata} />
      <CardVcollection />
      <Footer/>
    </>
  )}
 
  
 
