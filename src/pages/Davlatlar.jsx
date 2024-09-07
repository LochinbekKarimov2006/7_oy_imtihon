import React, { useContext, useEffect, useState } from "react";
import api from "../axios/api";
import { NavLink } from "react-router-dom";
import { Malumodlar } from "../context/GlobalContext";

function Davlatlar() {
    const [categori, setCategori] = useState("Filter by Region");
    const [categoriCorsatish, setCategoriCorsatish] = useState(false);
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [button, setButton] = useState(40);
    const [button2, setButton2] = useState(true);
    const { data5, setData5 } = useContext(Malumodlar);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        api.get(`/countries?limit=${button}&skip=5`)
            .then(response => {
                setData2(response.data.data);
                setData(response.data.data);
            })
            .catch(error => {
                console.error('API Error:', error);
            });
    }, [button]);

    useEffect(() => {
        if (categori === "Filter by Region") {
            setData(data2);
        } else {
            const filteredData = data2.filter(e => e.region === categori);
            setData(filteredData);
        }
    }, [categori, data2]);

    useEffect(() => {
        if (categori === "Filter by Region") {
            setButton(40);
        } else {
            setButton(256);
        }
        if(searchTerm!=""){
            setButton(256);
        }
    }, [categori,searchTerm]);

    function off() {
        setCategoriCorsatish(!categoriCorsatish);
    }

    function qoshish() {
        if (button >= 256) {
            setButton(256);
            setButton2(false);
        } else {
            setButton(button + 30);
        }
    }
    useEffect(() => {
        if(searchTerm!=""){

            const delayDebounceFn = setTimeout(() => {
                const result = data2.filter(name =>
                    name.name.common.toLowerCase().includes(searchTerm.toLowerCase())
                    );
                    setData(result);
                }, 1000);
                
                // Cleanup function to clear the timeout if the component unmounts or the search term changes
                return () => clearTimeout(delayDebounceFn);
            }
      }, [searchTerm]);
      console.log(data)
    return (
        <div>
            <div className="max-w-[1280px] mx-auto">
                <div className="my-[20px] flex flex-wrap gap-2 px-2 justify-between items-center ">
                    <div className=" div-3 rounded-[5px]  h-[58px] flex items-center bg-base-100 px-5 gap-5 border-[1px] div-10">
                        <img
                            className="w-[18px]"
                            src="https://cdn-icons-png.flaticon.com/512/660/660703.png"
                            alt="Search icon"
                        />
                        <input
                         value={searchTerm}
                         onChange={(e) => setSearchTerm(e.target.value)}
                            className="h-[100%] bg-[#0000] sm:w-full w-[90%] focus:outline-none focus:border-none"
                            type="text"
                            placeholder="Search for a country…"
                        />
                    </div>
                    <h1 className="h-[58px] flex items-center justify-center div-10 bg-base-100 px-5 rounded-[5px]">
                        Davlatlar soni: {data.length}
                    </h1>
                    <div className="relative z-10">
                        <div onClick={off} className="rounded-[5px] div-10 h-[58px] px-[20px] bg-base-100 flex items-center justify-between w-52 cursor-pointer">
                            <h2>{categori}</h2>
                            <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/512/5727/5727082.png" alt="Dropdown icon" />
                        </div>
                        {categoriCorsatish &&
                            <div className="drop-shadow-md rounded-[5px] absolute top-20 bg-base-100 w-52 gap-2 flex flex-col items-start">
                                <button onClick={() => { setCategori("Filter by Region"); setCategoriCorsatish(false); }} className="w-full text-start hover:bg-base-200 py-1 px-5">Filter by Region</button>
                                <button onClick={() => { setCategori("Africa"); setCategoriCorsatish(false); }} className="w-full text-start hover:bg-base-200 py-1 px-5">Africa</button>
                                <button onClick={() => { setCategori("Americas"); setCategoriCorsatish(false); }} className="w-full text-start hover:bg-base-200 py-1 px-5">Americas</button>
                                <button onClick={() => { setCategori("Asia"); setCategoriCorsatish(false); }} className="w-full text-start hover:bg-base-200 py-1 px-5">Asia</button>
                                <button onClick={() => { setCategori("Europe"); setCategoriCorsatish(false); }} className="w-full text-start hover:bg-base-200 py-1 px-5">Europe</button>
                                <button onClick={() => { setCategori("Oceania"); setCategoriCorsatish(false); }} className="w-full text-start hover:bg-base-200 py-1 px-5">Oceania</button>
                            </div>}
                    </div>
                </div>
                <div className="overflow-y-auto h-[76vh] flex flex-col items-center">
                    <div className="div-5 mb-5">
                        {data.map((e, id) => (
                            <NavLink onClick={() => setData5(e.name.common)} to="/malumod" key={id}>
                                <div className=" drop-shadow-md bg-base-100 w-[264px] rounded-[5px]">
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
                    {button2 && (
                        <div className="w-full flex justify-center my-4">
                        <button 
                            className="bg-[#003bfe] py-3  px-[20px] mx-[40px] text-[#fff] font-[600] rounded-[5px] hover:bg-[#031bf694]" 
                            onClick={qoshish}
                        >
                            Ko'proq ko'rish
                        </button>
                        </div>
                    )}
                </div>
            </div>
            {categoriCorsatish && <div onClick={() => setCategoriCorsatish(false)} className="absolute top-0 bottom-0 left-0 right-0"></div>}
        </div>
    );
}

export default Davlatlar;
