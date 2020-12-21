import React, { Component, useState } from 'react'
import { Dropdown, Menu, Divider, Grid, Segment } from 'semantic-ui-react'
import useRequestNamespace from "../../modules/requestsNamespaces"

function MenuPropsNamespaces(props) {


  const { items, isLoaded, error } = useRequestNamespace(props.url, props.paramkey, props.params);

    if (error) {
    console.log(error)
    return <div>Error: {error.message}</div>;
  } else if (!items[props.objectParsed]) {
    return <div>Select Context</div>;
  }
  // need to sort out placeholder

    else if (items[props.objectParsed]) {
    let objectList = items[props.objectParsed].map((objectInMap) => {
      return {
        key: objectInMap,
        text: objectInMap, 
        value: objectInMap
      }
    })
  
  
    

  return (
    
      <Dropdown
        button
        floating
        labeled
        search
        placeholder={'Select ' + props.objectType}
        options={
          objectList
          }
        onChange={props.objectChange}
      >
      </Dropdown>

  );
    } 
}

export default MenuPropsNamespaces;