import { Menu } from 'semantic-ui-react'
import MenuPropsTest from '../header/menuProps'

import MenuPropsObjects from '../header/menuPropsObjects'


function KubernetesObjectSearch(props) {
    
  const urlBase="http://localhost:8080"

  return (
    
    <Menu vertical style={{alignItems: "center", padding: "10px"}}>
        <MenuPropsObjects 
        objectChange={props.DeploymentA} 
        url={urlBase + "/list-deployments"}
        paramkey="?context="
        params={props.contextA} 
        paramkey1="&namespace="
        params1={props.namespaceA} 
        objectParsed="deployments" 
        objectType="Deployment A"
        />
        <MenuPropsObjects 
        objectChange={props.DeploymentB} 
        url={urlBase + "/list-deployments"}
        paramkey="?context="
        params={props.contextB} 
        paramkey1="&namespace="
        params1={props.namespaceB} 
        objectParsed="deployments" 
        objectType="Deployment B"
        />
  </Menu>

  )
}

export default KubernetesObjectSearch;

