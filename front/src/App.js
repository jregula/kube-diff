import Dropdowns from './components/header/Dropdowns'
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
  const [contextA, setcontextA] = useState(null);
  const [contextB, setcontextB] = useState(null);
  const [namespaceA, setnamespaceA] = useState(null);
  const [namespaceB, setnamespaceB] = useState(null);
  const [deployA, setdeployA] = useState(null);
  const [deployB, setdeployB] = useState(null);


  return (
    <div className="container">
      <div className="header">
        <Dropdowns
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
          Get rid of requestsNamespaces

          Add refresh button
          </Route>
          <Route exact path="/deployments">
          <Diff
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
          contextA={contextA}
          contextB={contextB}
          namespaceA={namespaceA}
          namespaceB={namespaceB}
          DeploymentA={(e, {value}) => setdeployA(value)}
          DeploymentB={(e, {value}) => setdeployB(value)}
        />
        </Route>

        </div>

    </div>
  );
}

export default App;
