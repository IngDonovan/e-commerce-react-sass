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

    //Product Detail · Open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const toggleProductDetail = () =>  setIsProductDetailOpen(!isProductDetailOpen);

    const [productToShow, setProductToShow] = useState({});

    //Shopping Cart · Increment quantity
    const [count, setCount] = useState(0);

    //CheckoutSideMenu · Open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const toggleCheckoutSideMenu = () =>  setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen);


    const filteredItemsBy = (items, searchBy, typeObj) => {
        if (typeObj === 'category') {
            return items?.filter((item) => item.category.toLowerCase().includes(searchBy.toLocaleLowerCase()))
        }else {
            return items?.filter((item) => item.title.toLowerCase().includes(searchBy.toLocaleLowerCase()))
        }
    }; 

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

    useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsBy(items,searchByTitle,"title"));
        if (searchByCategory) setFilteredItems(filteredItemsBy(items,searchByCategory,"category"));
        if (searchByTitle && searchByCategory) setFilteredItems(filteredItemsBy(items,searchByTitle,"title"));
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
                isProductDetailOpen,
                setIsProductDetailOpen,
                toggleProductDetail,
                productToShow,
                setProductToShow,
                count,
                setCount,
                isCheckoutSideMenuOpen,
                setIsCheckoutSideMenuOpen,
                toggleCheckoutSideMenu,
            }}
        >
            {children}
        </EcomContext.Provider>
    )
}

export { EcomContext, EcomProvider };