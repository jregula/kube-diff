import React, { PureComponent, useState, useEffect } from 'react'
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer'
import useRequest from "../../modules/RequestsTest"

function GetDeployment (context, namespace, deployment) {

    const url = `http://localhost:8080/deployments/${context}/${namespace}/${deployment}`
    const { items, isLoaded, error } = useRequest(url, context, namespace, deployment);
    if (deployment == null) {
      return "error";
    }
    else if (error) {
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
          showDiffOnly={false}
          compareMethod={DiffMethod.WORDS}
          leftTitle={props.contextA + "-" + props.namespaceA +  "-" + props.deploymentA}
          rightTitle={props.contextB + "-" + props.namespaceB +  "-" + props.deploymentB}
          />
          </div>
        }
      

export default Diff;