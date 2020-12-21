import React, { useState, useEffect } from 'react';
const useRequestNamespace = (url, key, params) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);




  useEffect(() => {
    if (params) {
      fetch(`${url}${key}${params}`)
      .then(response => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);

        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    }
  },[params])


            return  {items, isLoaded, error} ;

    
       
 
};
export default useRequestNamespace;