import React from 'react'

const Items = ({title,vlog,author}) => {
  return (
    <div className='w-[100%] bg-gray-200 rounded-[8px] flex flex-col items-center justify-between max-h-[380px] px-[50px] pb-[4px] mx-[10px] shadow-2xl'>
            <h2 className='text-3xl font-bold py-[4px]'>{title}</h2>
            <h2 className=''>{vlog}</h2>
            <h2 className='text-2xl font-medium'>{author}</h2>
            {/* <button className='bg-gray-700 p-[10px] mt-[5px] text-white rounded-[5px]'>Add Cart</button> */}
        </div>
  )
}

export default Items