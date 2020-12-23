import React, { useState, useEffect } from 'react';


const useRequest = (initialUrl,initialParams, skip = false) => {

    const [url, updateUrl] = useState(initialUrl)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    

    const queryString = Object.keys(initialParams)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(initialParams[key]))
      .join('&')

  useEffect(() => {

    const fetchData = async () => {
      if (skip) return
      // console.log(JSON.stringify(initialParams))
      const response = await fetch(`${url}${queryString}`)
      const result = await response.json()
      if (response.ok) {
        setIsLoaded(true)
        setItems(result)
      } else {
        setIsLoaded(true);
        setError(error);
      }

      }
      fetchData()
    
    },[url, skip, queryString])


            return  {items, isLoaded, error, } ;

    
       
 
};
export default useRequest;