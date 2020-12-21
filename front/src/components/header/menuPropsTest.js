import React, { Component, useState } from 'react'
import { Dropdown, Menu, Divider, Grid, Segment } from 'semantic-ui-react'
import useRequest from "../../modules/Requests"

function MenuPropsTest(props) {

  const { items, isLoaded, error } = useRequest(props.url);
  console.log(props.url)
  if (error) {
    console.log(error)
    return <div>Error: {error.message}</div>;
  } else if (!items[props.objectParsed]) {
    return <div>Loading...</div>;
  }

    else if (items[props.objectParsed]) {

    const objectList = items[props.objectParsed].map((objectInMap) => {
      return {
        key: objectInMap,
        text: objectInMap, 
        value: objectInMap
      }
    }
    );

  return (
    
      <Dropdown
        button
        floating
        labeled
        search
        placeholder={'Select ' + props.objectType}
        options={objectList}
        onChange={props.objectChange}
      />

  );
    }
}

export default MenuPropsTest;