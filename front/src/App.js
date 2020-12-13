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
  const [contextA, setcontextA] = useState('minikube');
  const [contextB, setcontextB] = useState('minikube');
  const [namespaceA, setnamespaceA] = useState('ktest');
  const [namespaceB, setnamespaceB] = useState('ktest');
  const [deployA, setdeployA] = useState('busy');
  const [deployB, setdeployB] = useState('busy');


  return (
    <div className="container">
      <div className="header">
        <Dropdowns
        ContextA={(e, {value}) => setcontextA(value)}
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
          jsonDiff.js (Diff) has a dependency on objectSearch.js (KubernetesObjectSearch). 
          jsonDiff should not execute until objectSearch is resolved
          Rename components and filenames
          Dependencies and reloads needed for Fetch
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
