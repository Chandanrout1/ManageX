"use client"

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 75,
    absent: 25,
    
  },
  {
    name: 'Tue',
    present: 80,
    absent: 20,
    
  },
  {
    name: 'Wed',
    present: 82,
    absent: 18,
    
  },
  {
    name: 'Thu',
    present: 72,
    absent: 28,
    
  },
  {
    name: 'Fri',
    present: 62,
    absent: 38,
    
  },
  {
    name: 'Sat',
    present: 58,
    absent: 42,
    
  },
];

const AttendanceChart = () => {
  return (
    <div className='bg-slate-400 rounded-lg h-full p-4"'>
        <div className='flex justify-between items-center '>
            <div className='flex flex-row justify-between items-center gap-96 mt-4'>
                <h1 className='text-lg font-semibold ml-6'>Attendance</h1>
                <Image src="/more.png" alt='' width={20} height={20}/>
            </div>
            
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <YAxis axisLine={false}/>
          <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray"}}/>
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop: "40px", paddingBottom: "40px"}}/>
          <Bar dataKey="present" fill="#FAE27C" legendType='circle' radius={[10,10,0,0]}/>
          <Bar dataKey="absent" fill="#C3EBFA" legendType='circle' radius={[10,10,0,0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart