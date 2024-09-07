import React, { createContext, useState } from "react";

export const Malumodlar = createContext();

function GlobalContext({ children }) {
    const [data5, setData5] = useState("");
    const [data6, setData6] = useState([]);

    return (
        <Malumodlar.Provider value={{ data5, setData5,data6,setData6 }}>
            {children} 
        </Malumodlar.Provider>
    );
}

export default GlobalContext;
