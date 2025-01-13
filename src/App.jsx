import { useState, useEffect } from 'react';
import Amount from './Component/Amount/Amount';
import Input from './Component/Input/Input';
import cal from './assets/calender.png';
import Data from './Component/Data/Data';

function App() {
  const [filteredArray, setFilteredArray] = useState([]);
  const [search, setSearch] = useState('');
  const [date, setDate] = useState({ startDate: "", endDate: "" });
  const [amount, setAmount] = useState({ debit: 0, credit: 0 });

  const array = [
    { Date: "Jan 01,2025", time: "10:00am", Counter: "Globex Co.", des: "Invoice #123452", Amount: "2800.00", Status: "received" },
    { Date: "Jan 02,2025", time: "11:00am", Counter: "Amazon", des: "Purchase-Books", Amount: "-49.00", Status: "paid" },
    { Date: "Jan 03,2025", time: "12:00am", Counter: "Netflix", des: "Subscription-Monthly", Amount: "-80.00", Status: "paid" },
    { Date: "Jan 04,2025", time: "01:00am", Counter: "Starbucks", des: "Purchase-Coffee and Food", Amount: "-3.00", Status: "paid" },
    { Date: "Jan 05,2025", time: "02:00am", Counter: "Globex Co.", des: "Invoice #123452", Amount: "-1500.00", Status: "paid" },
    { Date: "Jan 06,2025", time: "03:00am", Counter: "Apple", des: "Purchase-App Store", Amount: "-200.00", Status: "paid" },
    { Date: "Jan 07,2025", time: "04:00am", Counter: "Uber", des: "Ride-Shared Ride", Amount: "-40.00", Status: "paid" },
    { Date: "Jan 08,2025", time: "05:00am", Counter: "Marketplace", des: "Purchase", Amount: "-150.00", Status: "paid" },
    { Date: "Jan 09,2025", time: "06:00am", Counter: "Amazon", des: "Invoice #123452", Amount: "-200.00", Status: "paid" },
    { Date: "Jan 10,2025", time: "07:00am", Counter: "Apple", des: "Invoice #123452", Amount: "-1200.00", Status: "paid" }
  ];

  const parseDate = (dateString) => {
    const [month, day, year] = dateString.split(/[\s,]+/);
    const monthMap = {
      Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
      Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
    };
    return `${year}-${monthMap[month]}-${day.padStart(2, '0')}`;
  };

  useEffect(() => {
    let filtered = array.filter((item) => {
      return item.Counter.toLowerCase().includes(search.toLowerCase()) ||
        item.Status.toLowerCase().includes(search.toLowerCase()) ||
        item.Amount.includes(search);
    });

    if (date.startDate && date.endDate) {
      filtered = filtered.filter(item => {
        const itemDate = parseDate(item.Date);
        return itemDate >= date.startDate && itemDate <= date.endDate;
      });
    }

    setFilteredArray(filtered);

    let debit = 0;
    let credit = 0;

    filtered.forEach(item => {
      const amount = item.Amount;
      if (amount < 0) {
        debit += amount;
      } else {
        credit += amount;
      }
    });

    setAmount({ debit, credit });
  }, [search, date]);

  return (
    <div className='p-5 font-[calbiri] flex flex-col gap-6'>
      <div className='flex gap-10'>
        <Amount amount={`${amount.credit}`} des={"Circulation on credit"} />
        <Amount amount={`${amount.debit}`} des={"Circulation on debit"} />
      </div>
      <hr />
      <div className='flex flex-col gap-10'>
        <div className='flex justify-between'>
          <div className='bg-[#f8fafb] p-2 rounded-full pl-5 pr-5 flex text-sm items-center gap-3'>
            <img src={cal} alt="" className='w-5 h-5' />
            <div className='flex gap-2'>
              <Input type="date" style={"bg-[#f8fafb]"} onChange={(e) => setDate({ ...date, startDate: e.target.value })} />
              <span>-</span>
              <Input type="date" style={"bg-[#f8fafb]"} onChange={(e) => setDate({ ...date, endDate: e.target.value })} />
            </div>
          </div>
          <Input type="text" place={"Search"} value={search} onChange={(e) => setSearch(e.target.value)} style={"shadow-lg w-80 rounded-full pl-5 outline-gray-400 border-[0.1px] outline-[0.1px] text-gray-500"} />
          <div className='w-32 text-center text-black rounded-full bg-[#eff1f5] flex justify-center items-center p-1.5'>Export</div>
        </div>
        <div className='flex flex-col gap-0'>
          <div className='flex items-center h-14 gap-5 pl-5'>
            <input type="checkbox" className='w-12 mr-2' />
            <div className='w-56 text-gray-500'>Date</div>
            <div className='w-96 text-gray-500'>Counter and description</div>
            <div className='w-60 text-gray-500'>Amount($)</div>
            <div className='text-gray-500'>Status</div>
          </div>
          <div>
            {filteredArray.map((item, index) => (
              <Data key={index} index={index} item={item} color={"text-black"} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
