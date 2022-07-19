import { createContext, useContext, useEffect, useState } from "react";
export const AppContext =createContext()


 export const API=`http://www.omdbapi.com/?apikey=52d7d249`


export const AppProvider=({children})=>{

    const [isLoading,setIsLoading]=useState(true)
    const [movie,setMovie]=useState([])
    const [isError,setIsError]=useState({show:false,msg:""})
    const [input,setInput]=useState("hacker")

    


    const fetchedData=async (url)=>{
        const response=await fetch(url)
        const data=await response.json()
        console.log(data)
        if(data.Response==="True"){
        setIsLoading(false)
        setMovie(data.Search)
        setIsError({show:false})
        }
        else{
            setIsError({show:true,msg:data.Error})
        setIsLoading(false)

        }
    }
    const inputValue=(e)=>{
        setInput(e.target.value)
     }

     useEffect(() => {
        let timeout=setTimeout(()=>{
            fetchedData(`${API}&s=${input}`)
        },1200)
        return ()=>{
            clearTimeout(timeout)
        }

     }, [input])

     const remove=(id)=>{
        const newlist=movie.filter((item)=>{
            return item.imdbID!==id
        })
        setMovie(newlist)
     }
   
    
    return <AppContext.Provider value={{isLoading,movie,isError,input,inputValue,remove}}>
        {children}
    </AppContext.Provider>
}
export const useGlobalContext=()=>{
    return useContext(AppContext)
}