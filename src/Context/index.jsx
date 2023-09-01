import { createContext, useState, useEffect } from "react";
import { ApiUrl } from "../Api";

const EcomContext = createContext();

const EcomProvider = ({children}) => {

    //Get Products
    const [items, setItems] = useState(null);
    //Get Products By Title
    const [searchByTitle, setSearchByTitle] = useState(null);
    //Get Products By Category
    const [filteredItems, setFilteredItems] = useState('');
    // console.log(searchByTitle);
    //filtered Items
    const [searchByCategory, setSearchByCategory] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${ApiUrl}/products?`)
                const data = await response.json()
                setItems(data)
                // console.log(data);
            } catch (error) {
                console.error(`Oh no, ocurrió un error: ${error}`);
            }
        }
        fetchData()
    }, []);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLocaleLowerCase()));
    };

    useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items,searchByTitle));
    }, []);


    return(
        <EcomContext.Provider 
            value={{
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
                setFilteredItems,
            }}
        >
            {children}
        </EcomContext.Provider>
    )
}

export { EcomContext, EcomProvider };