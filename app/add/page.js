 'use client';
import Dropdown from "@/components/Dropdown/Dropdown";
import Tags from "@/components/Tags/Tags";
import { categories } from "@/middleware/data";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState, useRef, useMemo } from 'react';


 const JoditEditor = dynamic(() => import('jodit-react'), {
	ssr: false,
	loading: () => <p>Loading...</p>,
  });



export default function NewArticle(){
 	const [content, setContent] = useState('');
	const [title,setTitle] = useState("");
	const [selected, setSelected] = useState(categories[0]);
	const [coverimg,setcoverimg] = useState("");
	const [tag,addtag] = useState([]);
	const [currtag,setcurrtagvalue] = useState("");
	const [shortsummary,setshortsummary] = useState("");

 	const config = useMemo(()=>{
 			readonly: false; 				// all options from https://xdsoft.net/jodit/docs/,
 			placeholder : 'Start typings...';
 		},
 		[]
 	);

	function Reset(){
		setContent("");
		setTitle("");
		setSelected(categories[0]);
		setcoverimg("")
	}

	async function handleUpload(){
		if(selected.id !== 0 && content.length >= 100 && title !== "" && coverimg !== "" ){
			const tobeuploadedstate = {
				title:title,
				coverimg:coverimg,
				category:selected.name,
				content:content,
				tags:tag
			};
			const res = await fetch("/api/postreq",{
				method:'POST',
				body:JSON.stringify(tobeuploadedstate)
			});
			alert("Post uploaded succesfully")
		}
		else{
			alert("Fill incomplete blocks")
		}
	}

	function handleaddtagbutton(){
		addtag([...tag,currtag]);
		setcurrtagvalue("");
	}


 	return (
         <>
  			<Link className="absolute top-2  right-4" href={'/'}>
				<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.50} stroke="currentColor" className="w-6 h-6 font-bold">
  					<path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
				</svg>
			</Link>
          	<div className='w-11/12 mx-auto'>
				<div className="flex justify-between">
         			<header className='text-3xl my-4 font-bold border-l-8 pl-2 border-red-800 mb-4'>
						Write Your Post here </header>
						
				</div>
				<div className="mb-4">
      				<label className="block text-gray-800 text-xl font-bold mb-2" htmlFor="title">
        				{/* <icon></icon> */}
						Title
      				</label>
      				<input value={title} onChange={(e)=>{setTitle(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Enter the Title"/>
    			</div>

				<div className="flex justify-between flex-col md:flex-row me-3 ">
					<div className="w-30  text-xl font-bold mb-2  ">
						<Dropdown   selected={selected} setSelected={setSelected} categories={categories}/>
					</div>
					<div className="w-7/12  font-bold mb-2">
						<div className="text-xl font-bold mb-1">Cover image</div>
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

				{/* <Tags tag={tag} addtag={addtag}/> */}
				<div className=" w-max p-3 ps-0">
					<div className="block text-gray-800 text-xl font-bold mb-2">Meta Tags </div>
      				<input type="text"
      				className="font-bold mb-3 py-2 px-3 shadow appearance-none border rounded leading-tight focus:outline-none focus:shadow-outline me-3"
      				value={currtag}
					placeholder="Enter meta-tag of content."
					onChange={(e)=>{setcurrtagvalue(e.target.value)}}
					/>
      				<button
      				 	className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 border border-blue-700 rounded" 
						onClick={handleaddtagbutton}
					>
      				  Add
      				</button>
      				<div className="flex">{tag.map((elem,index)=>{
      				    return <div key={index} className="me-2 w-max p-2 border shadow">{elem}</div>
      				})}</div>
    			</div>

				<div className="mb-4">
      				<label className="block text-gray-800 text-xl font-bold mb-2" htmlFor="shortsummary">
						Short Summary (Max 150 char)
      				</label>
      				<input value={shortsummary} onChange={(e)=>{setshortsummary(e.target.value)}}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
						id="shortsummary" type="text" placeholder="Wrap Your content"
					/>
    			</div>


				<div className="inline-flex rounded-md shadow-sm mt-4" role="group">
  					<button type="button" onClick={Reset}
					className="inline-flex items-center px-4 py-2 text-base font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
					>
					  	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  							<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
						</svg>
  					  Reset
  					</button>
  					<button type="button" onClick={handleUpload}
						className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white" 
					>
  					  <svg aria-hidden="true" className="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clipRule="evenodd"></path></svg>
  					  Upload
  					</button>
				</div>
    		</div>
         </>
 	);
 };
 