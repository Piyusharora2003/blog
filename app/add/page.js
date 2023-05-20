'use client'
import React,{useState} from 'react';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

export default function NewArticle() {
  const [convertedText, setConvertedText] = useState("Some default content");
  return (
    <div>
        Text Editpr
      <ReactQuill
        theme='snow'
        value={convertedText}
        onChange={setConvertedText}
        style={{minHeight: '300px'}}
      />
    </div>
  );
}
