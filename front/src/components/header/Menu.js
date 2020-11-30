import React, { Component, useState } from 'react'
import { Dropdown, Menu, Divider, Grid, Segment } from 'semantic-ui-react'
import useRequest from "../../modules/Requests"


const contexts = [
  { key: 'ContextA', text: 'ContextA', value: 'ContextA' },
  { key: 'ContextB', text: 'ContextB', value: 'ContextB' },
]
const namespaces = [
  { key: 'NamespaceA', text: 'NamespaceA', value: 'NamespaceA' },
  { key: 'NamespaceB', text: 'NamespaceB', value: 'NamespaceB' },
]



function MenuBar() {
  const [contextANamespaces, setcontextANamespaces] = useState(null);

  const { items, isLoaded, error } = useRequest(`http://localhost:8080/minikube/get-namespaces`);
  console.log(items)
  if (error) {
    return <div>Error: {error.message}</div>;
    console.log(error)
  } else if (!items.namespaces) {
    return <div>Loading...</div>;
  }

    else if (items.namespaces) {

    const namespaceList = items.namespaces.map((namespace, index) =>
    <Dropdown.Item key={index} text={namespace} value={namespace}>
      {namespace}
    </Dropdown.Item>
    );
    

  return (
    
    <Menu style={{alignItems: "center", padding: "10px"}}>
      <Dropdown
        button
        className='contexts'
        floating
        labeled
        options={contexts}
        search
        placeholder='Select Context'
      />
      <Dropdown
        button
        className='namespaces'
        floating
        labeled
        search
        placeholder='Select Namespace'
      >
      <Dropdown.Menu>
        {namespaceList}
      </Dropdown.Menu>
      </Dropdown>

      
      <Dropdown
        button
        className='contextsb'
        floating
        labeled
        options={contexts}
        search
        placeholder='Select Context'
        onClick={date => setcontextANamespaces(date)}
      />
      <Dropdown
        button
        className='namespacesb'
        floating
        labeled
        options={namespaces}
        search
        placeholder='Select Namespace'
      />

  </Menu>
  );
    }
}

export default MenuBar;