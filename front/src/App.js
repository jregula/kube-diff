import ClusterSelectors from './components/header/ClusterSelectors'
import Diff from './components/content/jsonDiff'
import KubernetesObjectSearch from './components/content/objectSearch'
import Sidebar from './components/sidebar/Sidebar'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";
import React, { Component, useState } from 'react'


 
function App() {
  const urlBase = 'http://localhost:3000/'
  const [contextA, setcontextA] = useState(null);
  const [contextB, setcontextB] = useState(null);
  const [namespaceA, setnamespaceA] = useState(null);
  const [namespaceB, setnamespaceB] = useState(null);
  const [deployA, setdeployA] = useState(null);
  const [deployB, setdeployB] = useState(null);


  return (
    <div className="container">
      <div className="header">
        <ClusterSelectors
        urlBase={urlBase}
        ContextA={(e, {value}) => setcontextA(value)}
        ContextAA={contextA}
        ContextBB={contextB}
        ContextB={(e, {value}) => setcontextB(value)}
        NamespaceA={(e, {value}) => setnamespaceA(value)}
        NamespaceB={(e, {value}) => setnamespaceB(value)}
        />
        {/*<MenuBar />*/}
        </div>
      <div className="nav">
        <Sidebar/>
      </div>



      <div className="content">
          <Route exact path="/">
          Add image comparison
          Make K8s objects generic (not limited to deployments)
          set URL based upon k8 services or see if you can merge k8s app in one
          Improve error messaging, handling
          Add links and push state
          Add home Screen Option
          Add refresh button
          </Route>
          <Route exact path="/deployments">
          <Diff
          urlBase={urlBase}
          contextA={contextA}
          contextB={contextB}
          namespaceA={namespaceA}
          namespaceB={namespaceB}
          deploymentA={deployA}
          deploymentB={deployB}
          />
          </Route>
      </div>
        <div className="objects">
        <Route exact path="/deployments">

        <KubernetesObjectSearch 
          urlBase={urlBase}
          contextA={contextA}
          contextB={contextB}
          namespaceA={namespaceA}
          namespaceB={namespaceB}
          DeploymentA={(e, {value}) => setdeployA(value)}
          DeploymentB={(e, {value}) => setdeployB(value)}
        />
        </Route>
        <Route exact path="/images">

        </Route>

        </div>

    </div>
  );
}

export default App;
