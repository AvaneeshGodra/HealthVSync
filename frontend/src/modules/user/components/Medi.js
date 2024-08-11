//consulataion
import React, { useEffect, useRef, useState } from "react";
import { networkOperations } from "../../../shared/services/api-client";
import NoteCard from "./NoteCard/NoteCard";

const Medi =  ({data}) => {
  const [arrNote,setArr]=useState([]);
  const[message,setMessage]=useState([])
    const consultation = {
      mid: data.Mid,
    };
    
    const call=async()=>{
      try {
        const response = await networkOperations.post(
          process.env.REACT_APP_DISPLAY_CONSULTATION,
          consultation
        ); //backend
         
          const arr=response.data.message;
          setArr(arr);
         
  
      } catch (err) {
        console.log(err);
      }
    
    }
    useEffect(()=>{
      call();
    },[])
  return (
    <>
    
   {arrNote.map((n)=><NoteCard key={n._id} item={n.note} data={n}/>)}
    </>
  )
}
export default Medi;
