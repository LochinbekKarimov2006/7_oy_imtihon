import React, { useContext, useEffect, useMemo, useState } from "react";
import { Malumodlar } from "../context/GlobalContext";
import api from "../axios/api";
import { NavLink } from "react-router-dom";

function ToliqMalumod() {
  const { data5 ,setData5} = useContext(Malumodlar);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const memoizedValue = useMemo(() => {
    return data5 || localStorage.getItem("searchTerm");
  }, [data5]);

  useEffect(() => {
    if (data5) {
      localStorage.setItem("searchTerm", data5);
    }
  }, [data5]);

  useEffect(() => {
    if (memoizedValue) {
      api.get(`/countries?search=${memoizedValue}`)
        .then((response) => {
          if (response.data.data && response.data.data.length > 0) {
            setData(response.data.data[0]);
          } else {
            console.error("API returned empty data");
          }
        })
        .catch((error) => {
          console.error("API Error:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [memoizedValue]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>No data found.</p>;
  }
  console.log(data);
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col justify-center mt-[5%]">
        <NavLink to="/davlatlar">
            <p className="text-[20px] bg-[#00000000]  font-[700] mb-10">‹  back</p>
        </NavLink>
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
            <div className="text-[16px] font-[600] w-[50%] flex flex-col gap-2">
              <h2 className="text-[32px] div-17 font-[700] mb-3">{data.name.common}</h2>
              <h3 className="flex">Native Name: <p className="font-[400]">{data.name.nativeName}</p></h3>
              <h3 className="flex">Population: <p className="font-[400]">{data.population}</p></h3>
              <h3 className="flex">Region: <p className="font-[400]">{data.region}</p></h3>
              <h3 className="flex">Sub Region: <p className="font-[400]">{data.subregion}</p></h3>
              <h3 className="flex">Capital: <p className="font-[400]">{data.capital?.[0]}</p></h3>
            </div>
            <div className="text-[16px] div-17 mt-10  w-[50%] flex flex-col gap-2 font-[600] mb-[-6px]">
              <h3 className="flex">Top Level Domain: <p className="font-[400]">bo.</p></h3>
              <h3 className="flex">Currencies: <p className="font-[400]">{data.currencies}</p></h3>
              <h3 className="flex">Languages: <p className="font-[400]">{data.languages}</p></h3>
            </div>
          </div>
          <div className="flex flex-wrap text-[17px] font-[700] items-center gap-2 mt-10">Border Countries: {data.borders.map((e)=>(<div>
            <NavLink to="/malumod">
            <button onClick={()=>{setData5(e.common)}} className="bg-[#030bf7] text-white py-1 px-3 flex justify-center items-center rounded-[5px] font-[500] text-[14px] hover:bg-[#00000091]">{e.common}</button>
            </NavLink>
          </div>))}</div>
        </div>
      </div>
    </div>
  );
}

export default ToliqMalumod;
