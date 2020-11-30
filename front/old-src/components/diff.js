import React from 'react';
import useRequest from "./modules/Requests"


function Diff(props) {
    // need to add props for environment
    const { items, isLoaded, error } = useRequest(`https://diffchecker.kyber.sceu.dev.corp/images/${props.ns}/dev/test`);
    if (error) {
        return <div>Error: {error.message}</div>;
        console.log(error)
      } else if (!items.message) {
        return <div>Loading...</div>;
      }
  
       else if (items.message) {
           console.log(items.message.length)
           return (items.message.length)


}}

export default Diff;