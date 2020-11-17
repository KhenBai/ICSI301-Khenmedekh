import React from 'react';
import './States.css';

import Header from "../header/Header"

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log('window.cs142models.statesModel()', window.cs142models.statesModel());
    this.state = {
      states: window.cs142models.statesModel(),
      inputValue: ""
    }
  }

  render() {
    return (
      <div className="container States">
        <Header/>
        <input type="text" name="" id="" onChange={(e) => {
          this.setState({ inputValue:e.target.value,states:window.cs142models.statesModel().filter(el=>el.toLowerCase().includes(e.target.value.toLowerCase()))})
        }} />
        <div>Input value is: {this.state.inputValue}</div>
        <div className="cardCont">{
          this.state.states.map((el, ind) => {
            return <div key={ind} className="flagcard" ><div><img src={`flags/${el}.png`} alt=""/></div><div>{el}</div></div>
          })
        }
          {this.state.states.length==0?"please enter a valid substring!":""}
        </div>
      </div>
    );
  }
}

export default States;
