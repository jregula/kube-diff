import React, { Component, useState } from 'react'
import { Dropdown, Menu, Divider, Grid, Segment } from 'semantic-ui-react'
import useRequest from "../../modules/requestsGeneric"

function createOptions(items, objectParsed){
    const objectList = items[objectParsed].map((objectInMap) => {
    return {
      key: objectInMap,
      text: objectInMap, 
      value: objectInMap
    }
  }
  );
  return objectList
}


function MenuPropsTest(props) {
  
  const { items, isLoaded, error, updateUrl } = useRequest(props.url, props.initialParams, props.skip);

  return (
    
    
      <Dropdown
        button
        floating
        labeled
        search
        placeholder={'Select ' + props.objectType}
        options={!items[props.objectParsed] ?  []  : createOptions(items,props.objectParsed)}
        onChange={props.objectChange}
      >
      
      </Dropdown>
      

  );
    
}

export default MenuPropsTest;