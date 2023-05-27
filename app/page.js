'use client';
import Footer from "@/components/Footer/Footer";
import CardHcollection from "@/components/HorizontalCard1/CardHcollection";
import Nav from "@/components/Navbar/Nav";
import CardVcollection from "@/components/VerticalCard1/CardVcollection";
import { useEffect, useState } from "react";


export default function Home() {
  const [LatestPost,editLatestPosts] = useState([]);
  useEffect(()=>{
    async function getlatestposts(){
      const res = await fetch("/api/gethello").then((res) => res.json());
      editLatestPosts([...res.posts]);
    }
    getlatestposts();
  },[])
  return (
    <>
      <Nav/>
      <CardHcollection LatestPost={LatestPost.slice(0,6)} />
      <CardVcollection />
      <Footer/>
    </>
  )
}
