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
    this.state = undefined
    
  }
  componentDidMount () {
    fetch(`/user/${this.props.match.params.userId}`).then(response => response.json()).then(data => {
      this.setState({ ...data })
      this.props.setData(this.props.match.path,data.first_name)
    });
    fetch(`/photosOfUser/${this.props.match.params.userId}`).then(response => response.json()).then(data => {
      this.setState({ photos:data })
    });
  }

  componentDidUpdate(prevprop) {
    if (prevprop.match.params.userId !== this.props.match.params.userId) {
     fetch(`/user/${this.props.match.params.userId}`).then(response => response.json()).then(data => {
      this.setState({ ...data })
      this.props.setData(this.props.match.path,data.first_name)
    });
    fetch(`/photosOfUser/${this.props.match.params.userId}`).then(response => response.json()).then(data => {
      this.setState({ photos:data })
    });
    }
  }
  render() {
    return (
      <div className="userPhoto">
        {this.state ? (
        <React.Fragment>
          <div className="MYBUTTON">
        <Link to={`/users/${this.state._id}`} >
            <Typography variant="button" style={{fontSize:18}}>See details of {this.state.first_name}</Typography>
        </Link>
        </div>
        {this.state.photos?
          this.state.photos.map((el, ind) => <Image_card key={ind} data={el} name={this.state.first_name + " "+ this.state.last_name} />):""
            }
        </React.Fragment>
        ):""
      }
        
      </div>

    );
  }
}

export default UserPhotos;
