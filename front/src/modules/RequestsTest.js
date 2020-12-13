import React, { useState, useEffect } from 'react';
const useRequest = (initUrl, context, namespace, deployment) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);




  useEffect(() => {
      fetch(initUrl)
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
    },[initUrl, context, namespace, deployment])


            return  {items, isLoaded, error} ;

    
       
 
};
export default useRequest;