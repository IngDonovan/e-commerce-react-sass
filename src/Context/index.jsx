import { createContext, useState, useEffect } from "react";
import { ApiUrl } from "../Api";

const EcomContext = createContext();

const EcomProvider = ({children}) => {

    //Get Products
    const [items, setItems] = useState(null);
    
    //filtered Items
    const [filteredItems, setFilteredItems] = useState('');
    //Get Products By Title
    const [searchByTitle, setSearchByTitle] = useState(null);
    //Get Products By Category
    // console.log(searchByTitle);
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
    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLocaleLowerCase()) )
    };
    const filteredItemsByCatAndTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLocaleLowerCase()) )
    };

    useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items,searchByTitle));
        if (searchByCategory) setFilteredItems(filteredItemsByCategory(items,searchByCategory));
        if (searchByTitle && searchByCategory) setFilteredItems(filteredItemsByCatAndTitle(items,searchByTitle));
    }, [items, searchByTitle, searchByCategory]);


    return(
        <EcomContext.Provider 
            value={{
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
                setFilteredItems,
                searchByCategory,
                setSearchByCategory,
            }}
        >
            {children}
        </EcomContext.Provider>
    )
}

export { EcomContext, EcomProvider };