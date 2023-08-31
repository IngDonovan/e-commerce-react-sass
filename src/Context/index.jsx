import { createContext, useState, useEffect } from "react";


const EcomContext = createContext();

const EcomProvider = ({children}) => {

    return(
        <EcomContext.Provider 
            value={{
                
            }}
        >
            {children}
        </EcomContext.Provider>
    )
}

export { EcomContext, EcomProvider };