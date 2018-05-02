import React, { Component } from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import { colors, paddings } from "../../resources/constants";
import InputForm from "../posts/InputForm";
import AvatarImage from "../images/AvatarImage";
import IconTextButton from "../buttons/IconTextButton";
import DetailsHeader from "../details/DetailsHeader";
import WhiteWrapper from "../wrappers/WhiteWrapper";

class AddPost extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { addPostContent, handleChange, imageButtonHandler, videoButtonHandler } = this.props;
    return (
      <div style={styles.base}>
        <WhiteWrapper style={styles.wrapper}>
          <span style={styles.commentDiv}>
            <InputForm placeholder="Share an article, photo, video or idea"
              commentBool={false}
              value={addPostContent}
              handleChange={handleChange} />
          </span>
          <hr style={styles.seperator} />
          <div style={styles.tabDiv}>
            <IconTextButton
              name="Image"
              type="image"
              style={styles.postButton}
              hasBorder
            />
            <IconTextButton
              name="Video"
              type="video"
              style={styles.postButton}
              hasBorder
            />
          </div>
        </WhiteWrapper>
      </div>
    );
  }
}

AddPost.propTypes = {

};

const styles = {
  base: {
    display: 'block',

  },
  wrapper: {
    padding: paddings.wrapper,
    height: "10.0em",
    display: 'block',
  },
  postButton: {
    color: colors.darkGray,
    margin: '0.1em',


  },
  seperator: {
    color: colors.lightGray,
    border: 'solid 0.02em',
    width: '90%'
  },
  imgDiv: {},
  commentDiv: {
    display: "inline-block",
    marginRight: '4em',
    width: "80%",
  },
  tabDiv: {
    paddingTop: "5px",
    display: 'block',
    marginLeft: '5.7em',
    marginTop: '0.9em'
  }
};

AddPost = Radium(AddPost);
export default AddPost;
