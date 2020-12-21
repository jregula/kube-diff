import MenuProps from './menuProps'
import { Menu } from 'semantic-ui-react'

import MenuPropsTest from './menuPropsTest'
import MenuPropsNamespaces from './menuPropsNamespaces'

function Dropdowns(props) {
    const urlBase = "http://localhost:8080"


    return(
    <Menu style={{alignItems: "center", padding: "10px"}}>
        
        <MenuPropsTest 
        objectChange={props.ContextA} 
        url='http://localhost:8080/get-contexts' 
        objectParsed="contexts" 
        objectType="Contexts A"/>
        
        <MenuPropsNamespaces 
        objectChange={props.NamespaceA} 
        url={urlBase + "/get-namespaces"}
        paramkey="?context="
        params={props.ContextAA} 
        objectParsed="namespaces" 
        objectType="Namespace A"
        />

        <div style={{
            height: '30px',
            width: '1px',
            backgroundColor: 'rgba(0,0,0,.6)',
            marginLeft:'10px',
            marginRight:'10px',
            }}/>
        <MenuPropsTest 
        objectChange={props.ContextB} 
        url='http://localhost:8080/get-contexts' 
        objectParsed="contexts" 
        objectType="Contexts B"
        />
        <MenuPropsNamespaces 
        objectChange={props.NamespaceB} 
        url={urlBase + "/get-namespaces"}
        paramkey="?context="
        params={props.ContextBB} 
        objectParsed="namespaces" 
        objectType="Namespace B"
        />
  </Menu>
    )
}
export default Dropdowns;