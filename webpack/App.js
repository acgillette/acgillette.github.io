import React, { Component } from 'react'; 
import Header  from './Header';
import Projects from './Projects';
import About from './About'; 
import Blog from './Blog';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

export default class App extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <Header /> 
                    <Switch>
                        <Route exact path="/" component={Projects} />
                        <Route exact path='/about' component={About} /> 
                        <Route path='/blog' component={Blog} />
                    </Switch>
                </div> 
            </Router>
        )
    }
}
