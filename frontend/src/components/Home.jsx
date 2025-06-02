import React from 'react'
import Items from './Items'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Home = () => {

    const [data,setdata]=useState([])
    useEffect(()=>{
        const fetching=async()=>{
            try {
                const responce=await axios.get("http://localhost:5011/")
                setdata(responce.data.vlogss)
                // console.log(responce.data.vlogss);
                
            } catch (error) {
                console.log(error.message);
                
            }
        }
        fetching()
    },[])
    console.log(data);
    
    
  return (
    <div className='grid grid-cols-5 gap-[15px] min-h-[88vh]  p-[15px]'>
        {data.map((item)=>{
            console.log(item);
            
        return(<Items
           vlog={item.vlog}
           title={item.title}
           author={item.author}

        />)
        })}
    </div>
  )
}
export default Home