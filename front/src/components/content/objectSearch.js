import { Menu } from 'semantic-ui-react'
import MenuPropsTest from '../header/menuProps'

import MenuPropsObjects from '../header/menuPropsObjects'


function KubernetesObjectSearch(props) {
    
  const urlBase="http://localhost:8080"
  // const urlA="http://localhost:8080/list-deployments/" + props.namespaceA + "/" + props.contextA

  // const urlB="http://localhost:8080/list-deployments/" + props.namespaceB + "/"  + props.contextB 
  // http://localhost:8080/list-deployments?context=minikube&namespace=ktest
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
        {/*<MenuPropsTest 
        objectChange={props.DeploymentA} 
        url={urlA} 
        objectParsed="deployments" 
        objectType="Deployment A"
        />*/}
        {/*<MenuPropsTest objectChange={props.DeploymentB} url={urlB} objectParsed="deployments" objectType="Deployment B"/>*/}
  </Menu>

  )
}

export default KubernetesObjectSearch;

