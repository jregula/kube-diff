import React, { PureComponent, useState, useEffect } from 'react'
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer'
import useRequest from "../../modules/requestsGeneric"

function GetDeployment (context, namespace, deployment) {

    const baseUrl = `http://localhost:8080/deployments`
    const url = `http://localhost:8080/deployments?`
    const skip = (namespace === null || context === null || deployment === null  ? true : false)
    const { items, isLoaded, error, updateUrl } = useRequest(
      url, 
      {
        context: context, 
        namespace: namespace,
        deployment: deployment
      },
      skip
      );

    if (error) {
      return "error";
    } 
    else if (!items.deployment) {
      return "error";
    }
    else if (items.deployment) {
        return JSON.stringify(items.deployment, null, 2)

}
}


function Diff (props) {
  const valueA = GetDeployment(props.contextA, props.namespaceA, props.deploymentA)
  const valueB = GetDeployment(props.contextB, props.namespaceB, props.deploymentB)

        return <div>
          <ReactDiffViewer
          oldValue={valueA}
          newValue={valueB}
          splitView={true}
          showDiffOnly={true}
          compareMethod={DiffMethod.WORDS}
          leftTitle={props.contextA + "-" + props.namespaceA +  "-" + props.deploymentA}
          rightTitle={props.contextB + "-" + props.namespaceB +  "-" + props.deploymentB}
          />
          </div>
        }
      

export default Diff;