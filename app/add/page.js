 'use client';
 import dynamic from "next/dynamic";

 import React, { useState, useRef, useMemo } from 'react';
 const JoditEditor = dynamic(() => import('jodit-react'), {
	ssr: false,
	loading: () => <p>Loading...</p>,
  });
export default function NewArticle(){
 	const [content, setContent] = useState('');
 	const config = useMemo(()=>{
 			readonly: false; // all options from https://xdsoft.net/jodit/docs/,
 			placeholder : 'Start typings...';
 		},
 		[]
 	);
 	return (
         <>
          <div className='w-11/12 mx-auto'>
         <header className='text-3xl my-4 font-bold'>Write Your Post here </header>
 		    <JoditEditor
 		    	value={content}
 		    	config={config}
 		    	tabIndex={1} // tabIndex of textarea
 		    	onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
 		    
                 />
         </div>
         </>
 	);
 };
 