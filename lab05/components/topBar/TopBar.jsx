import React from 'react';
import {Link} from 'react-router-dom'
import {
  AppBar, Toolbar, Typography
} from '@material-ui/core';
import './TopBar.css';

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      where:props.where
    }
  }
  componentDidUpdate(prevprops) {
    if (prevprops.where !== this.props.where || prevprops.name !== this.props.name) {
      this.setState({
        name: this.props.name,
        where:this.props.where
      })
    }
  }
  render() {
    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            <Link to="/">
              Khebe&apos;s Photo Sharing Web &nbsp; &lt;(￣︶￣)&gt;
            </Link>
          </Typography>
          <Typography variant="h5">
            {this.state.where=="/"?"Home":this.state.where=="/users"?"Users":this.state.where=="/users/:userId"?this.state.name:this.state.where=="/photos/:userId"?`Photos of ${this.state.name}`:""}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
