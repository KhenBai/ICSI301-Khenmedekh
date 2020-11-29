import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Grid, Typography, Paper} from '@material-ui/core';
import './styles/main.css';

// import necessary components
import TopBar from './components/topBar/TopBar';
import UserDetail from './components/userDetail/UserDetail';
import UserList from './components/userList/UserList';
import UserPhotos from './components/userPhotos/UserPhotos';

class PhotoShare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      where: "/",
      name:""
    }
    this.setData = (path, fname = "")=>{
      this.setState({
        where: path,
        name:fname
      })
    }
  }
  componentDidUpdate() {
  }
  render() {
    return (
      <HashRouter>
        <Grid container style={{
          width: "100%"
        }}
        spacing={4}
        >
        <Grid item xs={12}>
            <TopBar where={this.state.where} name={this.state.name}/>
        </Grid>
        <div className="cs142-main-topbar-buffer"/>
        <Grid item sm={3}>
          <Paper  className="cs142-main-grid-item">
              <UserList/>
          </Paper>
        </Grid>
        <Grid item sm={9}>
          <Paper className="cs142-main-grid-item">
            <Switch>
              <Route exact path="/"
                  render={props => <Home {...props} setData={this.setData}/> }
              />
              <Route path="/users/:userId" 
                  render={props => <UserDetail {...props} setData={this.setData}/> }
              />
              <Route path="/photos/:userId"
                render ={ props => <UserPhotos {...props} setData={this.setData} /> }
              />
              <Route path="/users"
                render ={ props => <UserList {...props} setData={this.setData} /> }  
              />
            </Switch>
          </Paper>
        </Grid>
      </Grid>
    </HashRouter>
    );
  }
}

class Home extends React.Component{
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.setData("/")
  }
  render(){
    return (
      <Typography variant="body1">
        Welcome to your photosharing app! This <a href="https://material-ui.com/demos/paper/">Paper</a> component
        displays the main content of the application. The {"sm={9}"} prop in
        the <a href="https://material-ui.com/layout/grid/">Grid</a> item component makes it responsively
        display 9/12 of the window. The Switch component enables us to conditionally render different
        components to this part of the screen. You don&apos;t need to display anything here on the homepage,
        so you should delete this Route component once you get started.
      </Typography>
    );
  }            
}

ReactDOM.render(
  <PhotoShare />,
  document.getElementById('photoshareapp'),
);
