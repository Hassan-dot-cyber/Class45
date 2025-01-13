import React from 'react'
import cal from '../../assets/calender.png';
import Input from '../Input/Input';

function Head({setDate , date , setSearch}) {
    return (
        <div className='flex justify-between'>
            <div className='bg-[#f8fafb] p-2 rounded-full pl-5 pr-5 flex text-sm items-center gap-3'>
                <img src={cal} alt="" className='w-5 h-5' />
                <div className='flex gap-2'>
                    <Input type="date" style={"bg-[#f8fafb]"} onChange={(e) => setDate({ ...date, startDate: e.target.value })} />
                    <span>-</span>
                    <Input type="date" style={"bg-[#f8fafb]"} onChange={(e) => setDate({ ...date, endDate: e.target.value })} />
                </div>
            </div>
            <Input type="text" place={"Search"} onChange={(e) => setSearch(e.target.value)} style={"shadow-lg w-80 rounded-full pl-5 outline-gray-400 border-[0.1px] outline-[0.1px] text-gray-500"} />
            <div className='w-32 text-center text-black rounded-full bg-[#eff1f5] flex justify-center items-center p-1.5'>Export</div>
        </div>
    )
}

export default Head