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
  const urlBase = 'http://localhost:8080/'
  const [contextA, setcontextA] = useState(null);
  const [contextB, setcontextB] = useState(null);
  const [namespaceA, setnamespaceA] = useState(null);
  const [namespaceB, setnamespaceB] = useState(null);
  const [objectA, setobjectA] = useState(null);
  const [objectB, setobjectB] = useState(null);


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
          Add home Screen Option
          Add image comparison
          Add refresh button
          deploy K8s as single container
          Improve error messaging, handling
          </Route>
          <Route 
          exact path="/objects/:object"
          render={(props) =>
          <Diff
          urlBase={urlBase}
          contextA={contextA}
          contextB={contextB}
          namespaceA={namespaceA}
          namespaceB={namespaceB}
          ObjectA={objectA}
          ObjectB={objectB}
          {...props}
          />
          }
          />
      </div>
        <div className="objects">
        <Route 
        exact path="/objects/:object"
        render={(props) =>
        <KubernetesObjectSearch 
          urlBase={urlBase}
          contextA={contextA}
          contextB={contextB}
          namespaceA={namespaceA}
          namespaceB={namespaceB}
          ObjectA={(e, {value}) => setobjectA(value)}
          ObjectB={(e, {value}) => setobjectB(value)}
          {...props}
        />}

        />

        
        <Route exact path="/images">

        </Route>

        </div>

    </div>
  );
}

export default App;
