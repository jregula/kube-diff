import { Menu } from 'semantic-ui-react'

import MenuPropsTest from './menuPropsTest'

function Dropdowns(props) {
    const urlBase = "http://localhost:8080"

    return(
    <Menu style={{alignItems: "center", padding: "10px"}}>
        
        <MenuPropsTest 
        objectChange={props.ContextA} 
        url='http://localhost:8080/get-contexts' 
        objectParsed="contexts" 
        objectType="Contexts A"
        initialParams={{}}
        />

        <MenuPropsTest 
        objectChange={props.NamespaceA} 
        url={'http://localhost:8080/get-namespaces?' } 
        objectParsed="namespaces" 
        objectType="Namespace AA"
        skip={props.ContextAA === null ? true : false}
        initialParams={{context: props.ContextAA}}
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
        initialParams={{}}
        />
        <MenuPropsTest 
        objectChange={props.NamespaceB} 
        url={'http://localhost:8080/get-namespaces?' } 
        objectParsed="namespaces" 
        objectType="Namespace B"
        skip={props.ContextBB === null ? true : false}
        initialParams={{context: props.ContextBB}}
        />
  </Menu>
    )
}
export default Dropdowns;