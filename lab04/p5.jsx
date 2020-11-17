import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Link,Redirect} from "react-router-dom"
import './styles/main.css';

import Example from "./components/example/Example"
import States from "./components/states/States"



class P4 extends React.Component{
    render() {
        return (
            <React.Fragment>
                <HashRouter>
                    <Route exact path="/" render={() => {
                        return (
                            <Redirect to="/states"/>
                        )
                    }} />
                    <Route path="/states" >
                        <React.Fragment>
                            <div className="Switcher">
                                <Link to="/example">Switch to Example</Link>
                            </div>
                            <States/>
                        </React.Fragment>
                    </Route>
                    <Route path="/example">
                        <React.Fragment>
                            <div className="Switcher">
                                <Link to="/states">Switch to State</Link>
                            </div>
                            <Example/>
                        </React.Fragment>
                    </Route>
                </HashRouter>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
  <P4/>,
  document.getElementById('reactapp'),
);
