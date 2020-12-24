import { Menu } from 'semantic-ui-react'

import DropdownMenu from '../../modules/dropdownMenu'

function KubernetesObjectSearch(props) {
  const { match: { params } } = props;
    
  return (
    
    <Menu vertical style={{alignItems: "center", padding: "10px"}}>

        <DropdownMenu 
        objectChange={props.ObjectA} 
        url={`${props.urlBase}/list-objects?`} 
        objectParsed={params.object}
        objectType={`${params.object} A`}
        initialParams={{context: props.contextA, namespace: props.namespaceA, kubernetes_object: params.object}}
        skip={props.namespaceA === null || props.contextA === null  ? true : false}
        />
        <DropdownMenu 
        objectChange={props.ObjectB} 
        url={`${props.urlBase}/list-objects?`} 
        objectParsed={params.object}
        objectType={`${params.object} B`}
        initialParams={{context: props.contextB, namespace: props.namespaceB, kubernetes_object: params.object}}
        skip={props.namespaceB === null || props.contextB === null  ? true : false}
        />
  </Menu>

  )
}

export default KubernetesObjectSearch;

