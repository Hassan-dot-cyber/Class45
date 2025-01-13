import React from 'react'
import wallet from '../../assets/wallet.png'
import up from '../../assets/up.png'
import down from '../../assets/down.png'
function Data({ item, index, color }) {
    let isEven = index % 2 == 0;
    return (
        <div
            className={`flex items-center h-14 gap-5 pl-5 rounded-md ${isEven ? "bg-[#edf3f3]" : ""}`}>
            <input type="checkbox" className="w-12 bg-red-500 mr-2" />
            <div className="w-56">
                <div className={`${color}`}>{item.Date}</div>
                <div className='text-gray-500 text-sm'>{item.time}</div>
            </div>
            <div className="w-96 flex items-center gap-5">
                <div className='bg-[#e9ebf1] rounded-lg flex items-center relative w-fit p-2'>
                    <img src={wallet} alt="" className='w-5' />
                    <div className={` rounded-full w-4 h-4 flex items-center justify-center absolute top-6 left-6 ${item.Amount < 0 ? "bg-[#5a76aa]" : "bg-[#10b67e]"}`}>
                        <img src={`${item.Amount < 0 ? down : up}`} alt="" className='w-3' />
                    </div>
                </div>
                <div>
                    <div className={`${color}`}>{item.Counter}</div>
                    <div className='text-gray-500 text-sm'>{item.des}</div>
                </div>
            </div>
            <div className={`${item.Amount < 0 ? "text-black" : "text-[#0fb77e]"} w-60`}>{item.Amount}</div>
            <div className={`${color} border-[0.4px] border-gray-300 p-[1px] pl-3 pr-3 rounded-full flex items-center gap-2`}>
                <div className={`w-1.5 h-1.5 rounded-full ${item.Status == "received" ? "bg-[#0ea4e5]" : "bg-[#0fb77e]"}`}></div>
                <div className={`${item.Status == "received" ? "text-[#0ea4e5]" : "text-[#0fb77e]"}`}>{item.Status}</div>
            </div>
        </div>
    )
}

export default Data