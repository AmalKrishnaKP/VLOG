import React from 'react'
import axios from 'axios'
const AddProduct = () => {
    const addItem=async(FormData)=>{
        try {
            const value={
                title:FormData.get('title'),
                vlog:FormData.get('vlog'),
                author:FormData.get('author')
            }
            const res=await axios.post("http://localhost:5011/addProduct",value)
            console.log(res);
            
        } catch (error) {
            console.log(error.message);
            
        }
    }

  return (
    <section className=" p-6 h-[87vh] bg-white rounded-md shadow-md dark:bg-gray-800 flex flex-col items-center" >
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add Vlogs</h2>

            <form  action={addItem}  className='w-[400px]'>
                <div className="flex flex-col items-center  ">
                
                    <label className='text-gray-400 w-[100%]'>TITLE
                    <input type="text" name="title" id="" className=' block w-[100%] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring' placeholder='my story'/>
                    </label>
                    <label className='text-gray-400 w-[100%]'>VLOG
                    <input type="text" name="vlog" id="" className=' block w-[100%] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring' placeholder='discription'/>
                    </label>
                    <label className='text-gray-400 w-[100%]'>AUTHOR
                    <input type="text" name="author" id="" className=' block w-[100%] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring' placeholder='amal' />
                    </label>
                    <button type="submit" className='bg-blue-600 p-[10px] mt-[20px] rounded-xl font-bold text-white hover:text-blue-500'>SUBMIT</button>
                    
                
                </div>
            </form>
        </section>
  )
}

export default AddProduct