import { Menu } from 'semantic-ui-react'

import MenuPropsTest from '../header/menuPropsTest'

function KubernetesObjectSearch(props) {
    
  const urlBase="http://localhost:8080"

  return (
    
    <Menu vertical style={{alignItems: "center", padding: "10px"}}>

        <MenuPropsTest 
        objectChange={props.DeploymentA} 
        url={`http://localhost:8080/list-deployments?`} 
        objectParsed="deployments" 
        objectType="Deployment A"
        initialParams={{context: props.contextA, namespace: props.namespaceA}}
        skip={props.namespaceA === null || props.contextA === null  ? true : false}
        />
        <MenuPropsTest 
        objectChange={props.DeploymentB} 
        url={`http://localhost:8080/list-deployments?`} 
        objectParsed="deployments" 
        objectType="Deployment B"
        initialParams={{context: props.contextB, namespace: props.namespaceB}}
        skip={props.namespaceB === null || props.contextB === null  ? true : false}
        />
  </Menu>

  )
}

export default KubernetesObjectSearch;

