import React, { useState, useEffect } from 'react';
const useRequest = (initUrl) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);




  useEffect(() => {
      fetch(initUrl, {mode: 'no-cors'})
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
    },[initUrl])


            return  {items, isLoaded, error} ;

    
       
 
};
export default useRequest;