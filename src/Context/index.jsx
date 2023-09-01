import { createContext, useState, useEffect } from "react";
import { ApiUrl } from "../Api";

const EcomContext = createContext();

const EcomProvider = ({children}) => {

    //Get Products
    const [items, setItems] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${ApiUrl}/products?`)
                const data = await response.json()
                setItems(data)
                console.log(data);
            } catch (error) {
                console.error(`Oh no, ocurrió un error: ${error}`);
            }
        }
        fetchData()
    }, []);


    return(
        <EcomContext.Provider 
            value={{
                items,
                setItems,
            }}
        >
            {children}
        </EcomContext.Provider>
    )
}

export { EcomContext, EcomProvider };