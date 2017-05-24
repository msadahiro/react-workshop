import React, {Component} from 'react'
import Image from './Image';
import ProfileName from './ProfileName'
class ProfileCard extends Component {
  render(){
    return(<div>
      <Image />
      <ProfileName />
      </div>)
  }
}

export default ProfileCard;
