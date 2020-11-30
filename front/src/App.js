import MenuBar from './components/header/Menu'
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
 
function App() {
  return (
    <div className="container">
      <div className="header">
        <MenuBar />
        </div>
      <div className="nav">
        <Sidebar/>
      </div>



      <div className="content">
          <Route exact path="/">
          test
          </Route>
          <Route exact path="/deployments/kubediff/default/minikube">
          <Diff />
          </Route>
      </div>
        <div className="objects">
        <Route exact path="/deployments/kubediff/default/minikube">

        <KubernetesObjectSearch />
        </Route>

        </div>

    </div>
  );
}

export default App;
