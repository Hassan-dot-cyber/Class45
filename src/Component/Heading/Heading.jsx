import React from 'react'

function Heading() {
    return (
        <div className='flex items-center h-14 gap-5 pl-5'>
            <input type="checkbox" className='w-12 mr-2' />
            <div className='w-56 text-gray-500'>Date</div>
            <div className='w-96 text-gray-500'>Counter and description</div>
            <div className='w-60 text-gray-500'>Amount($)</div>
            <div className='text-gray-500'>Status</div>
        </div>
    )
}

export default Heading