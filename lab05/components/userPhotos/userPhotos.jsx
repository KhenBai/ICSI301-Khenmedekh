import React from 'react';
import {Link} from 'react-router-dom'
import {
  Typography
} from '@material-ui/core';
import './userPhotos.css';
import Image_card from "../img_card/Image_card"

/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
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
      <div className="userPhoto">
        <div className="MYBUTTON">
        <Link to={`/users/${this.state._id}`} >
            <Typography variant="button" style={{fontSize:18}}>See details of {this.state.first_name}</Typography>
        </Link>
        </div>
        {
          this.state.photos.map((el, ind) => <Image_card key={ind} data={el} name={this.state.first_name + " "+ this.state.last_name} />)
          }
      </div>

    );
  }
}

export default UserPhotos;
