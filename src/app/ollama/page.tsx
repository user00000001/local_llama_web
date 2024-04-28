import React from 'react'

async function page() {
  let rsp = await fetch("http://localhost:11434/api/tags");
  let data = await rsp.json();
  return (
    <div >
      <table className=' w-full table-fixed border-collapse bg-slate-500 text-teal-300'>
        <thead>
          <tr>
            <th className=' border-2 border-red-400 p-2 w-48'>Name</th>
            <th className=' border-2 border-red-400 p-2 w-48'>Model</th>
            <th className=' border-2 border-red-400 p-2 w-80'>Update</th>
            <th className=' border-2 border-red-400 p-2 w-24'>Size</th>
            <th className=' border-2 border-red-400 p-2 w-[640px]'>Digest</th>
            <th className=' border-2 border-red-400 p-2'>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.models.map((item: any) => (
            <tr key={item.model}>
              <td className=' border-2 p-2 text-nowrap'>{item.name}</td>
              <td className=' border-2 p-2 text-nowrap'>{item.model}</td>
              <td className=' border-2 p-2 text-nowrap'>{item.modified_at}</td>
              <td className=' border-2 p-2 text-nowrap'>{(item.size/1024/1024/1024).toFixed(2)} GiB</td>
              <td className=' border-2 p-2 text-nowrap overflow-hidden text-ellipsis whitespace-nowrap'>{item.digest}</td>
              <td className=' border-2 p-2 overflow-hidden whitespace-nowrap text-nowrap overflow-ellipsis'>{JSON.stringify(item.details)}</td>
            </tr>))}
        </tbody>
      </table>
    </div>
  )
}

export default page