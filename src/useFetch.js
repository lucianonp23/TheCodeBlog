import { useEffect, useState } from "react"

const useFetch = (url)=>{

    const [isPending,setIsPending] = useState(true);
    const [error, setError] = useState(null);
       
    //iterate data from array and show dinamically on the page(outputting lists)

    const [data,setData]= useState(null);

    //training useEffect interaction w/ fetch json-server

    useEffect(()=>{

        setTimeout(() => {
       
         
            fetch(url)

                .then(res=> {
                    if(!res.ok){
                        throw Error ('Data received it was not ok, please check your source of data');
                    }
                
                    return res.json();
                })

                .then (data=>{
                setData(data)
                setIsPending(false)
                })
                
                .catch (err => {
                    setError(err.message);
                    setIsPending(false);
                }) 
            
                    }, 1500);
            },[])
return {data, error, isPending}

}


export default useFetch;