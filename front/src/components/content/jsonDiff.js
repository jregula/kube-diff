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
      return "error";
    }
    else if (items[kubernetesObject]) {
        return JSON.stringify(items[kubernetesObject], null, 2)

}
}


function Diff (props) {
  const { match: { params } } = props;
  
  const valueA = GetObject(props.contextA, props.namespaceA, props.ObjectA, props.urlBase, params.object)
  console.log(valueA)
  const valueB = GetObject(props.contextB, props.namespaceB, props.ObjectB, props.urlBase, params.object)

        return <div>
          <ReactDiffViewer
          oldValue={valueA}
          newValue={valueB}
          splitView={true}
          showDiffOnly={true}
          compareMethod={DiffMethod.WORDS}
          leftTitle={`${props.contextA}-${props.namespaceA}-${props.ObjectA}`}
          rightTitle={`${props.contextB}-${props.namespaceB}-${props.ObjectB}`}
          />
          </div>
        }
      

export default Diff;