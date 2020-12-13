import MenuProps from './menuProps'
import { Menu } from 'semantic-ui-react'

import MenuPropsTest from './menuPropsTest'

function Dropdowns(props) {

// push state to App.js

    return(
    <Menu style={{alignItems: "center", padding: "10px"}}>
        
        <MenuPropsTest objectChange={props.ContextA} url='http://localhost:8080/get-contexts' objectParsed="contexts" objectType="Contexts A"/>
        <MenuPropsTest objectChange={props.NamespaceA} url='http://localhost:8080/minikube/get-namespaces' objectParsed="namespaces" objectType="Namespace A"/>
        <div style={{
            height: '30px',
            width: '1px',
            backgroundColor: 'rgba(0,0,0,.6)',
            marginLeft:'10px',
            marginRight:'10px',
            }}/>
        <MenuPropsTest objectChange={props.ContextB} url='http://localhost:8080/get-contexts' objectParsed="contexts" objectType="Contexts B"/>
        <MenuPropsTest objectChange={props.NamespaceB} url='http://localhost:8080/minikube/get-namespaces' objectParsed="namespaces" objectType="Namespace B"/>
  </Menu>
    )
}
export default Dropdowns;