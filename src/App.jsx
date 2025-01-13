import { useState, useEffect } from 'react';
import Amount from './Component/Amount/Amount';
import Data from './Component/Data/Data';
import Head from './Component/Head/Head';
import Heading from './Component/Heading/Heading';
import './App.css'

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
      const amount = parseInt(item.Amount);
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
        <Head setDate={setDate} date={date} setSearch={setSearch} />
        <div className='flex flex-col gap-0'>
          <Heading />
          <div id='scroll' className='h-[21rem] overflow-y-auto'>
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
