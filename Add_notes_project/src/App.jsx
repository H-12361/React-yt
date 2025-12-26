import React, { useState } from "react";
import { X } from 'lucide-react';

const App = () => {
const [Title,setTitle]=useState('')
const[Maintext ,setMaintext]=useState('')
// it used to store the data in the form of array
const [Task, setTask]=useState([ ])

  const submitHandler =(e)=>{
    e.preventDefault()
    //here we stored privous task 
    const copytask=[...Task]
    
    copytask.push({Title,Maintext});
    // it is used to recived old task 
     setTask(copytask);
     console.log(copytask)
      setTitle('')
    setMaintext(' ')


  


  }
  // deletenotes
    const deleteNote=(idx)=>{
      const copyTask=[...Task]
      copyTask.splice(idx,1)
       
      setTask(copyTask)
    }

    

  return (
    <div className="bg-black text-white h-screen w-full ">
      <form  onSubmit={(e)=>{
        
        submitHandler(e)
      }}className=" bg px-10 py-10   flex-col  flex  gap-10">
        <div className="flex flex-col gap-10">
          <h1>Add Notes</h1>
          
          {/* first input binding use */}
          <input
            type="text "
            className=" p-5 border-2 rounded w-1/2"
            placeholder="Enter Notes Heading"
            //here we need value to use two step  way binding
            value={Title}
            //here we used onchange event 
            onChange={(e)=>{
             setTitle(e.target.value)

            }}

          />
          <textarea 
            className="border-2  h-20 rounded w-1/2"
            placeholder="Enter Notes Detial"
            value={Maintext}

            onChange={(e)=>{
              setMaintext(e.target.value)

            }}

          ></textarea>
          <button className="flex flex-col w-1/2 text-black active:scale-98  bg-white rounded">
            {" "}
            Submit
          </button>
        </div>
      
        

      </form>
       <div className="flex bg-red  relative  gap-10  rounded-2xl justify-start overflow-auto   wrap-normal"  >
             <h1> Your Notes</h1>
           
             {Task.map(function(elem,idx){
                return <div key={idx} className="h-50 bg-cover bg-white text-red-950  w-[20%]">
                  <h3 className="absolute bg-red-500 m-1 rounded-2xl cursor-pointer active:scale-90 " 
                  
                  onClick={
                    ()=>{deleteNote(idx)}}>
                      <X /></h3>
                  <h3 className="text-center font-bold text-3xl">{elem.Title}</h3>
                  <p className="px-1" >{elem.Maintext}</p>
                </div> 

             })} 
            
         </div>
    </div>
  );
};

export default App;
