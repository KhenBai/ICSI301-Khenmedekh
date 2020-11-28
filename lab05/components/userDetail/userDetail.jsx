import React from 'react';
import {Link} from 'react-router-dom'
import {
  Typography
} from '@material-ui/core';
import './userDetail.css';


/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...window.cs142models.userModel(props.match.params.userId),photos:window.cs142models.photoOfUserModel(props.match.params.userId)}
    props.setData(this.props.match.path,this.state.first_name)
  }
  componentDidUpdate(prevprop) {
    if (prevprop.match.params.userId !== this.props.match.params.userId) {
      this.setState({...window.cs142models.userModel(this.props.match.params.userId), photos:window.cs142models.photoOfUserModel(this.props.match.params.userId)})
      this.props.setData(this.props.match.path,window.cs142models.userModel(this.props.match.params.userId).first_name)
    }
  }
  render() {
    console.log(this.state.photos)
    return (
      <div className="userDetail">
        <div>
        <img src={`images/${this.state.photos[0].file_name}`} alt=""/>
        </div>
        <div>
        <Typography variant="h2">{`${this.state.first_name} ${this.state.last_name}`}</Typography>
        <Typography variant="h6">
          <b>Bio</b>:{this.state.description}
        </Typography>
        <Typography variant="h6">
          <b>Current city</b>:{this.state.location}
        </Typography>
        <Typography variant="h6">
         <b>Occupation</b>:{this.state.occupation}
          </Typography>
          <Link to={`/photos/${this.state._id}`}>
            <Typography variant="button">See Photos of {this.state.first_name}</Typography>
          </Link>
        </div>
      </div>
    );
  }
}

export default UserDetail;
