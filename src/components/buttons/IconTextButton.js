import React, { Component } from 'react';
import Radium from 'radium';
//import color from 'color';

import {colors} from '../../resources/constants.js'


class IconTextButton extends Component {
  handleClick = () => {
     this.props.onClickFunction(this.props.incrementValue);
   };
   render() {
   return (
     <div>

     <i class="far fa-thumbs-up-lg"></i>
     <button style={[styles.base]}onClick={this.handleClick}>
       +{this.props.incrementValue}Like
     </button>
     </div>
   );
 }



}
IconTextButton=Radium(IconTextButton);
var styles={base:{
   border: "2px",
   backgroundColor:"white",
   width: "5%",
   padding: "5px",

   color:colors.mediumGray,
   ":hover": {
				backgroundColor:colors.lightGray,
        color:colors.darkBlue
			}
}
}
export default IconTextButton;
