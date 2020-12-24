import { Menu } from 'semantic-ui-react'

import DropdownMenu from '../../modules/dropdownMenu'

function ClusterSelectors(props) {
    

    return(
    <Menu style={{alignItems: "center", padding: "10px"}}>
        
        <DropdownMenu 
        objectChange={props.ContextA} 
        url={`${props.urlBase}/get-contexts`}
        objectParsed="contexts" 
        objectType="Contexts A"
        initialParams={{}}
        />

        <DropdownMenu 
        objectChange={props.NamespaceA} 
        url={`${props.urlBase}/get-namespaces?` } 
        objectParsed="namespaces" 
        objectType="Namespace A"
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
        <DropdownMenu 
        objectChange={props.ContextB} 
        url={`${props.urlBase}/get-contexts`}
        objectParsed="contexts" 
        objectType="Contexts B"
        initialParams={{}}
        />
        <DropdownMenu 
        objectChange={props.NamespaceB} 
        url={`${props.urlBase}/get-namespaces?`} 
        objectParsed="namespaces" 
        objectType="Namespace B"
        skip={props.ContextBB === null ? true : false}
        initialParams={{context: props.ContextBB}}
        />
  </Menu>
    )
}
export default ClusterSelectors;