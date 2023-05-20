'use client'

import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

export default function NewArticle({ placeholder }){
	const editor = useRef(null);
	const [content, setContent] = useState('');

	const config = useMemo(()=>{
			readonly: false; // all options from https://xdsoft.net/jodit/docs/,
			placeholder : placeholder || 'Start typings...';
		},
		[placeholder]
	);

	return (
        <>
         <div className='w-11/12 mx-auto'>
        <header className='text-3xl my-4 font-bold'>Write Your Post here </header>
		    <JoditEditor
		    	ref={editor}
		    	value={content}
		    	config={config}
		    	tabIndex={1} // tabIndex of textarea
		    	onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
		    	onChange={newContent => console.log(newContent)
                }
                />
        </div>
        </>
	);
};

