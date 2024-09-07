import React, { useContext, useEffect, useState } from 'react'
import api from '../axios/api';
import { NavLink } from 'react-router-dom';
import { Malumodlar } from '../context/GlobalContext';

function Home() {
  const { data5, setData5 } = useContext(Malumodlar);
  const [data,setData]=useState([])
  useEffect(() => {
    api.get(`/countries?limit=256&skip=5`)
        .then(response => {
            setData(response.data.data);
        })
        .catch(error => {
            console.error('API Error:', error);
        });
}, []);
console.log(
  data
)
  return (
    <div className='px-10' >
      <div className='max-w-[1280px] mx-auto div-11'>
        <div>
          <h1 className='text-[36px] max-w-[70%] font-[600] '>Northern Mariana Islands</h1>
         <p className='font-[400] mt-5 max-w-[80%] text-[500]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, impedit dicta sunt dolorum, quasi facilis necessitatibus nisi quas nihil ratione voluptate culpa maiores libero laborum voluptatem, harum delectus repudiandae nobis.</p>
      <NavLink onClick={() => setData5(e.name.common)} to="/malumod">

      <button className='py-2 px-4 mt-3 bg-[#1405f1] rounded-[10px] text-[#fff]'>Toliq Malumod</button>
      </NavLink>
        </div>
        <img className='w-full' src="https://flagcdn.com/w320/mp.png" alt="" />
      </div>
      <div className='max-w-[1280px] mx-auto mt-[100px] mb-20'>
        <div className='flex justify-between items-center border-b-[1px] pb-5'>

        <h2 className='text-[25px]'>
          Davlatlar 
        </h2>
        <NavLink to="/davlatlar"><img className='w-10' src="   https://cdn-icons-png.flaticon.com/512/3031/3031735.png " alt="" /></NavLink>
        </div>
        <div className='div-12 mt-10'>
        {data.slice(0, 4).map((e, id) => (
    <NavLink onClick={() => setData5(e.name.common)} to="/malumod" key={id}>
        <div className="drop-shadow-md bg-base-100 w-[264px] rounded-[5px]">
            <img className="w-[100%] rounded-t-[5px] h-[160px]" src={e.flags.png} alt={`${e.name.common} flag`} />
            <div className="p-[24px] max-w-[100%]">
                <h2 className="text-[18px] font-[800]">{e.name.common}</h2>
                <h2 className="mt-4 text-[14px] font-[600] flex">Population: <p className="font-[400] ml-1">{e.population}</p></h2>
                <h2 className="text-[14px] font-[600] flex">Region: <p className="font-[400] ml-1">{e.region}</p></h2>
                <h2 className="text-[14px] font-[600] flex">Capital: <p className="font-[400] ml-1">{e.capital[0]}</p></h2>
            </div>
        </div>
    </NavLink>
))}
        </div>
        <div className='mt-10'>
          
        {data.slice(1, 2).map((data)=>(
        <div className="div-6">
        <div className="div-7">
          {data.flags && data.flags.png ? (
            <img className="w-full" src={data.flags.png} alt={data.name.common} />
          ) : (
            <p>Flag image not available</p>
          )}
        </div>
        <div className="div-8">
          <div className="div-9">
            <div className="text-[16px] div-17 font-[600]  flex flex-col gap-2">
              <h2 className="text-[32px] font-[700] mb-3">{data.name.common}</h2>
              <h3 className="flex">Native Name: <p className="font-[400]">{data.name.nativeName}</p></h3>
              <h3 className="flex">Population: <p className="font-[400]">{data.population}</p></h3>
              <h3 className="flex">Region: <p className="font-[400]">{data.region}</p></h3>
              <h3 className="flex">Sub Region: <p className="font-[400]">{data.subregion}</p></h3>
              <h3 className="flex">Capital: <p className="font-[400]">{data.capital?.[0]}</p></h3>
            </div>
            <div className="text-[16px] mt-10  w-[50%] flex flex-col gap-2 font-[600] mb-[-6px]">
              <h3 className="flex">Top Level Domain: <p className="font-[400]">bo.</p></h3>
              <h3 className="flex">Currencies: <p className="font-[400]">{data.currencies}</p></h3>
              <h3 className="flex">Languages: <p className="font-[400]">{data.languages}</p></h3>
            </div>
          </div>
         
        </div>
      </div>
        ))
      }
        </div>
        <div className='mt-20'>
          
          {data.slice(10, 11).map((data)=>(
          <div className="div-6">
          <div className="div-8 div-16">
            <div className="div-9">
              <div className="text-[16px] div-17 font-[600] flex flex-col gap-2">
                <h2 className="text-[32px] font-[700] mb-3">{data.name.common}</h2>
                <h3 className="flex">Native Name: <p className="font-[400]">{data.name.nativeName}</p></h3>
                <h3 className="flex">Population: <p className="font-[400]">{data.population}</p></h3>
                <h3 className="flex">Region: <p className="font-[400]">{data.region}</p></h3>
                <h3 className="flex">Sub Region: <p className="font-[400]">{data.subregion}</p></h3>
                <h3 className="flex">Capital: <p className="font-[400]">{data.capital?.[0]}</p></h3>
              </div>
              <div className="text-[16px] mt-10  w-[50%] flex flex-col gap-2 font-[600] mb-[-6px]">
                <h3 className="flex">Top Level Domain: <p className="font-[400]">bo.</p></h3>
                <h3 className="flex">Currencies: <p className="font-[400]">{data.currencies}</p></h3>
                <h3 className="flex">Languages: <p className="font-[400]">{data.languages}</p></h3>
              </div>
            </div>
           
          </div>
          <div className="div-7">
            {data.flags && data.flags.png ? (
              <img className="w-full" src={data.flags.png} alt={data.name.common} />
            ) : (
              <p>Flag image not available</p>
            )}
          </div>
        </div>
          ))
        }
          </div>
          <div className='flex mt-20 justify-between items-center border-b-[1px] pb-5'>

<h2 className='text-[25px]'>
  Davlatlar Rasmlari
</h2>
<NavLink to="/davlatlar"><img className='w-10' src="   https://cdn-icons-png.flaticon.com/512/3031/3031735.png " alt="" /></NavLink>
</div>
          <div className='flex flex-wrap justify-between gap-1 p-8 border-[1px] mt-10 rounded-[50px]'>
            {data.map((e)=>(
              <NavLink  key={e.name.common}  onClick={() => setData5(e.name.common)} to="/malumod">

             <div 
              
             style={{ backgroundImage: `url(${e.flags.svg})` }} 
             className='border-[1px] w-16 h-10 rounded-[5px] bg-contain bg-center bg-no-repeat div-15'
           >
           </div>
              </NavLink>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Home