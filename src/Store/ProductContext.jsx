import axios from "axios";
import { Children, createContext, useEffect, useState } from "react";

const ProductContext = createContext();
export const ProductProvide = ({children}) =>{

    const [items, setItems] = useState([]);

    const [isLoading,setisLoading] = useState(false)

        useEffect(()=>{
            const fatchApi = async () =>{
                try{
                    setisLoading(true)
                    const res = await axios.get('https://product-server-json.onrender.com/products');
                    console.table(res.data);
                    setItems(res.data)
                }catch(e){
                    console(e.message);
                }finally{
                    setisLoading(false)
                }
            }
            fatchApi();
        },[])

    return(
        <ProductContext.Provider value={{items,isLoading}}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductContext