import React, { Component } from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import { colors, paddings } from "../../resources/constants";
import InputForm from "./InputForm";
import AvatarImage from "../images/AvatarImage";
import IconTextButton from "../buttons/IconTextButton";
import DetailsHeader from "../details/DetailsHeader";
import WhiteWrapper from "../wrappers/WhiteWrapper";

class WallHeader extends Component {
  constructor(props) {
    super(props);
    this.articleButtonHandler = this.articleButtonHandler.bind(this);
    this.imageButtonHandler = this.imageButtonHandler.bind(this);
    this.videoButtonHandler = this.videoButtonHandler.bind(this);
    this.state = {
      articleButton: false,
      imageButton: false,
      videoButton: false
    };
  }

  articleButtonHandler = () => {
    this.setState({
      articleButton: !this.state.articleButton
    });
    console.log("article button: ", this.state.articleButton);
  };

  imageButtonHandler = () => {
    this.setState({
      imageButton: !this.state.imageButton
    });
    console.log("image button: ", this.state.imageButton);
  };

  videoButtonHandler = () => {
    this.setState({
      videoButton: !this.state.videoButton
    });
    console.log("video button: ", this.state.videoButton);
  };
  render() {
    const { id, src, rounded, header, subHeader, type } = this.props;
    return (
      <div style={styles.base}>
        <WhiteWrapper  style={styles.wrapper}>
          <span style={styles.commentDiv}>
            <InputForm placeholder="Share an article, photo, video or idea" commentBool={false} />
          </span>
          <hr style={styles.seperator}/>
          <div style={styles.tabDiv}>
            <IconTextButton
              name="Write an article"
              type="write"
              onClick={this.articleButtonHandler}
              style={styles.postButton}
              hasBorder
            />
            <IconTextButton
              name="Image"
              type="image"
              onClick={this.imageButtonHandler}
              style={styles.postButton}
              hasBorder
            />
            <IconTextButton
              name="Video"
              type="video"
              onClick={this.videoButtonHandler}
              style={styles.postButton}
              hasBorder
            />
          </div>
        </WhiteWrapper>
      </div>
    );
  }
}

WallHeader.propTypes = {
  src: PropTypes.string,
  rounded: PropTypes.bool
};

const styles = {
  base: {
    display:'block',
   
  },
  wrapper:{
    padding: paddings.wrapper,
    height: "10.0em",
    display:'block',
    
    
  },
  postButton:{
      color:colors.darkGray,
      margin:'0.1em',
     
     
  },
  seperator:{
      color:colors.lightGray,
      border: 'solid 0.02em',
      width:'90%'
  },
  imgDiv: {},
  commentDiv: {
    display: "inline-block",
    marginRight:'4em',
    width: "80%",
  },
  tabDiv: {
    paddingTop: "5px",
    display:'block',
    marginLeft:'5.7em',
    marginTop:'0.9em'
  }
};

WallHeader = Radium(WallHeader);
export default WallHeader;
