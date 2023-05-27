import CardH from "../HorizontalCard1/CardH"

  
  export default function CardHcollection({LatestPost}) {
    console.log(LatestPost);
    return (
      <div className="">
        <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Latest Posts</h2>
          <div className=" grid grid-cols-1 gap-x-6 gap-y-8 py-8 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            {LatestPost.map((post,index) => (
              <div key={post._id}  className="group relative">
                <CardH {...post}/>
               </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  