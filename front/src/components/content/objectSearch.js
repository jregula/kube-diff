import { Menu } from 'semantic-ui-react'
import MenuPropsTest from '../header/menuProps'

function KubernetesObjectSearch(props) {
  const urlA="http://localhost:8080/list-deployments/" + props.namespaceA + "/" + props.contextA
  const urlB="http://localhost:8080/list-deployments/" + props.namespaceB + "/"  + props.contextB 
  return (
    
    <Menu vertical style={{alignItems: "center", padding: "10px"}}>
        <MenuPropsTest objectChange={props.DeploymentA} url={urlA} objectParsed="deployments" objectType="Deployment A"/>
        <MenuPropsTest objectChange={props.DeploymentB} url={urlB} objectParsed="deployments" objectType="Deployment B"/>
  </Menu>

  )
}

export default KubernetesObjectSearch;

