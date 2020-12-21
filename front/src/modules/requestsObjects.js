import React, { useState, useEffect } from 'react';
const useRequestObjects = (url, key, params, key1, params1) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

  useEffect(() => {
    if (params) {
      fetch(`${url}${key}${params}${key1}${params1}`)
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
  },[params1])


            return  {items, isLoaded, error} ;

    
       
 
};
export default useRequestObjects;