import { Menu } from 'semantic-ui-react'

import DropdownMenu from '../../modules/dropdownMenu'

function KubernetesObjectSearch(props) {
    
  return (
    
    <Menu vertical style={{alignItems: "center", padding: "10px"}}>

        <DropdownMenu 
        objectChange={props.DeploymentA} 
        url={`${props.urlBase}/list-deployments?`} 
        objectParsed="deployments" 
        objectType="Deployment A"
        initialParams={{context: props.contextA, namespace: props.namespaceA}}
        skip={props.namespaceA === null || props.contextA === null  ? true : false}
        />
        <DropdownMenu 
        objectChange={props.DeploymentB} 
        url={`${props.urlBase}/list-deployments?`} 
        objectParsed="deployments" 
        objectType="Deployment B"
        initialParams={{context: props.contextB, namespace: props.namespaceB}}
        skip={props.namespaceB === null || props.contextB === null  ? true : false}
        />
  </Menu>

  )
}

export default KubernetesObjectSearch;

