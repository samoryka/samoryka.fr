import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import About from './About/About';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';

import './Content.css'

class Content extends Component {
    render() {
        return (
            <div className='content'>
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

export default Content;
