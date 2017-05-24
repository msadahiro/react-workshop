import React, {Component} from 'react';
import HeaderContent from './HeaderContent';
import AboutMe from './AboutMe';
import Description from './Description';
import Quote from './Quote';
class Content extends Component {
  render(){
    return(
      <div>
          <HeaderContent />
          <AboutMe />
          <Description />
          <Quote />
      </div>)
  }
}

export default Content;
