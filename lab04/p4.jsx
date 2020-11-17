import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

import Example from "./components/example/Example"
import States from "./components/states/States"



class P4 extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            which:true
        }
    }
    render() {
        return (
            <React.Fragment><div className="Switcher"><div className="clickMe" onClick={() => {
                    this.setState({which:!this.state.which})
                }}>Switch to {this.state.which?"Example":"States"}</div></div>
                
                {this.state.which?<States/>:<Example/>}
            </React.Fragment>
        )
    }
}

ReactDOM.render(
  <P4/>,
  document.getElementById('reactapp'),
);
