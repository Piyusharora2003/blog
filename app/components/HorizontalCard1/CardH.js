import React from 'react'

function CardH() {
	const data = {
		image :"https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		imagealt:"alt text for image",
		rating:4.9,
		reviewcount:72,
		category:"Data Science",
		title:"The Majestic and Wonderful Bahamas",
		description:"The best kept secret of The Bahamas is the country’s sheer size and diversity. With 16 major islands, The Bahamas is an unmatched destination blanshsdfsgdfbfd".slice(0,147) +"..."
	}
  return (
	<div className="relative flex flex-col lg:flex-row md:space-x-5 space-y-3 lg:space-y-0 rounded-xl shadow-lg p-3 max-w-xs lg:max-w-3xl mx-auto border border-white bg-white pb-1">
		<div className="w-full lg:w-1/3 bg-white grid place-items-center">
			<img src={data.image} alt={data.imagealt} className="rounded-xl object-cover" />
    	</div>
		<div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
			<div className="flex justify-between item-center">
				<div className="flex items-center">
					<p className="text-gray-900 font-bold text-sm ml-1">
						{data.rating}
						<span className="text-gray-700 font-normal">({data.reviewcount} reviews)</span>
					</p>
				</div>
				<div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden lg:block">
					{data.category}</div>
			</div>
			<h3 className="font-black text-gray-800 md:text-2xl text-xl">{data.title}</h3>
			<p className="md:text-base text-gray-500 text-base">{data.description}</p>
			
		</div>
	</div>
  )
}

export default CardH;