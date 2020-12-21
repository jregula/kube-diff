import React, { Component, useState } from 'react'
import { Dropdown, Menu, Divider, Grid, Segment } from 'semantic-ui-react'
import useRequestObjects from "../../modules/requestsObjects"

function MenuPropsObjects(props) {


  const { items, isLoaded, error } = useRequestObjects(props.url, props.paramkey, props.params, props.paramkey1, props.params1);

    if (error) {
    console.log(error)
    return <div>Error: {error.message}</div>;
  } else if (!items[props.objectParsed]) {
    console.log(props.objectParsed)
    console.log(items)
    console.log(props.url, props.paramkey, props.params, props.paramkey1, props.params1)
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

export default MenuPropsObjects;