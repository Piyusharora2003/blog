 'use client';
import Dropdown from "@/components/Dropdown/Dropdown";
import dynamic from "next/dynamic";
import React, { useState, useRef, useMemo } from 'react';

 const JoditEditor = dynamic(() => import('jodit-react'), {
	ssr: false,
	loading: () => <p>Loading...</p>,
  });



  const categories = [
    {
    id: 1,
    name: 'Web Development',
    },
  {
    id: 2,
    name: 'Data Science',
    },
  {
    id: 3,
    name: 'Food',
  },
  {
    id: 4,
    name: 'Life',
  },
]

export default function NewArticle(){
 	const [content, setContent] = useState('');
	const [title,setTitle] = useState("");
	const [selected, setSelected] = useState(categories[0])
	const [coverimg,setcoverimg] = useState("");
 	const config = useMemo(()=>{
 			readonly: false; // all options from https://xdsoft.net/jodit/docs/,
 			placeholder : 'Start typings...';
 		},
 		[]
 	);
 	return (
         <>
          	<div className='w-11/12 mx-auto'>
         		<header className='text-3xl my-4 font-bold underline underline-offset-8'>Write Your Post here </header>
				<div className="mb-4">
      				<label className="block text-gray-800 text-xl font-bold mb-2" htmlFor="title">
        				Title
      				</label>
      				<input value={title} onChange={(e)=>{setTitle(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Enter the Title"/>
    			</div>
				<div className="flex justify-between mx-3 ">
					<div className="w-1/5  text-xl font-bold mb-2">
						<Dropdown   selected={selected} setSelected={setSelected} categories={categories}/>
					</div>
					<div className="w-7/12  font-bold mb-2">
						<div className="text-xl font-bold mb-2">Cover image</div>
						<input 
							className="bg-white appearance-none border-2 border-gray-200 rounded-md w-full py-2 px-2 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:shadow-outline" 
							id="inline-full-name" type="text" 
							value={coverimg} placeholder="Enter the Cover image URL" 
							onChange={(e)=>{setcoverimg(e.target.value)}}
						/>
					</div>
				</div>
				<div>
					<div className="text-xl font-bold mb-2">Content</div>
 		    		<JoditEditor
 		    			value={content}
 		    			config={config}
 		    			tabIndex={1} // tabIndex of textarea
 		    			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            		     />
				</div>
    		</div>
         </>
 	);
 };
 