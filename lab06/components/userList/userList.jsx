import React from 'react';
import {Link} from 'react-router-dom'
import Axios from "axios"
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@material-ui/core';
import './userList.css';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List:[]
    }
  }
  componentDidMount() {
    Axios.get('/user/list').then(res => this.setState({
      List: res.data
    }));
  }
  render() {
    return (
      <div>
        <Typography variant="body1">
          Friend List (Fake Cool Friends)
        </Typography>
        <List component="nav">{
          this.state.List.map((el, ind) => {
            return (
              <Link key={ind} to={`/users/${el._id}`}>
                <ListItem>
                  <ListItemText primary={`${el.first_name} ${el.last_name}`} />
                </ListItem>
                <Divider/>
              </Link>
            )
          })
        }
        </List>
        <Typography variant="body1">
          <Link to="/users">
            See All Users
          </Link>
        </Typography>
      </div>
    );
  }
}

export default UserList;
