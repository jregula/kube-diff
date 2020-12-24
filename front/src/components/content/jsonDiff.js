import React, { PureComponent, useState, useEffect } from 'react'
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer'
import useRequest from "../../modules/requestsGeneric"

function GetObject (context, namespace, object, urlBase, kubernetesObject) {

    const url = `${urlBase}/objects?`
    const skip = (namespace === null || context === null || object === null  ? true : false)
    const { items, isLoaded, error, updateUrl } = useRequest(
      url, 
      {
        context: context, 
        namespace: namespace,
        object_name: object,
        kubernetes_object: kubernetesObject
      },
      skip
      );

    if (error) {
      return "error";
    } 
    else if (!items[kubernetesObject]) {
      return 
    }
    else if (items[kubernetesObject]) {
        return JSON.stringify(items[kubernetesObject], null, 2)

}
}


function Diff (props) {
  const { match: { params } } = props;
  
  const valueA = GetObject(props.contextA, props.namespaceA, props.ObjectA, props.urlBase, params.object)
  const valueB = GetObject(props.contextB, props.namespaceB, props.ObjectB, props.urlBase, params.object)
  const defaultMessage = `Select a Context, Namespace and ${params.object}`
  if (!valueA & !valueB){
    return defaultMessage
  }

        return <div>
          <ReactDiffViewer
          oldValue={!valueA ? defaultMessage : valueA}
          newValue={!valueB ? defaultMessage : valueB}
          splitView={true}
          showDiffOnly={true}
          compareMethod={DiffMethod.WORDS}
          leftTitle={
            props.contextA && props.namespaceA && props.ObjectA ?
            `${props.contextA}-${props.namespaceA}-${props.ObjectA}`
            : ""
            }
          rightTitle={
            props.contextB && props.namespaceB && props.ObjectB ?
            `${props.contextB}-${props.namespaceB}-${props.ObjectB}`
            : ""
            }
          />
          </div>
        }
      

export default Diff;