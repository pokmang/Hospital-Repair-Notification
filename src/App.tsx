import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { IonApp } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
// import './theme/variables.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Users from './pages/Users';
import Home from './pages/Home';
import DataUser from './pages/DataUser';
import RequestRepair from './pages/RequestRepair';
import EditProfile from './pages/EditProfile';

const App: React.FC = () => (

  <IonApp>
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route path="/request-repairing" component={RequestRepair} />
        <Route path="/users/:id/edit-profile" component={EditProfile} />
        <Route path="/users/:id" component={DataUser} />
        <Route path="/users" component={Users} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  </IonApp>

);

export default App;
