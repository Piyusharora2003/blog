import { useState } from "react";

function Tags({tag,addtag}) {
  // tag is an array of tags , addTag is function 
  const [newtag,addnewtag] = useState("");
  function addbtn(){
    console.log(tag);
    addtag(...tag,newtag);
    addnewtag("");              // set input field value to ""
    console.log(tag);
  }
  return (
    <div className=" w-max p-3">
      <input value={newtag}
      className="font-bold py-2 px-3 shadow appearance-none border rounded leading-tight focus:outline-none focus:shadow-outline me-3"
      onChange={(e)=>addnewtag(e.target.value)}/>
      <button
       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 border border-blue-700 rounded" 
       onClick={addbtn}>
        Add
      </button>
      {/* <div>{tag.map((elem)=>{
          return <span>{elem}</span>
      })}</div> */}
    </div>
  )
}

export default Tags;