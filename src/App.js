import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import About from './components/Content/About/About';
import Projects from './components/Content/Projects/Projects';
import Resume from './components/Content/Resume/Resume';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
            <Route exact={true} path={process.env.PUBLIC_URL + '/'} render={() => <Redirect to='/about' />} />
            <Route exact={true} path={process.env.PUBLIC_URL + '/about'} component={About} />
            <Route exact={true} path={process.env.PUBLIC_URL + '/projects'} component={Projects} />
            <Route exact={true} path={process.env.PUBLIC_URL + '/resume'} component={Resume} />
        </Switch>
      </div>
    );
  }
}

export default App;
