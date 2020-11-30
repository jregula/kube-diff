import React, { PureComponent, useState, useEffect } from 'react'
import ReactDiffViewer from 'react-diff-viewer'
import useRequest from "../../modules/Requests"

    const newStyles = {


    }


function Diff () {
      const { items, isLoaded, error } = useRequest(`http://localhost:8080/deployments/kubediff/default/minikube`);
    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!items.deployment) {
        return <div>Loading...</div>;
      }
      else if (items.deployment) {
        return <div>
          <ReactDiffViewer
          oldValue={JSON.stringify(items.deployment, null, 2)}
          newValue={JSON.stringify(items.deployment, null, 2)}
          splitView={true}
          showDiffOnly={false}
          styles={newStyles}
          leftTitle="Context-A-Namespace-A-ObjectType"
          rightTitle="Context-B-Namespace-B-ObjectType"
          />
          </div>
        }
      }

export default Diff;


