import Footer from "@/components/Footer/Footer";
import CardHcollection from "@/components/HorizontalCard1/CardHcollection";
import Nav from "@/components/Navbar/Nav";
import CardVcollection from "@/components/VerticalCard1/CardVcollection";

async function getlatestpost() {
  try {
    const res = await fetch(`http://localhost:3000/api/getlatestposts`,{
      cache:"no-store"
    });
    const data = await (await res.json()).posts;
    return {
      data
    }; 

  } catch (error) {
    return{
      data: {
        data:[]
      }
    }
  }
}

export default async function Home() {
    const data = await getlatestpost();
    const finaldata = data.data;
    if(!data || !finaldata){
      return <>hello</>
    }
    
  return (
    <>
      <Nav/>
      <CardHcollection LatestPost={finaldata} />
      <CardVcollection />
      <Footer/>
    </>
  )}
 
  
 
