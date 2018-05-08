import React, { Component } from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import { colors, paddings } from "../../resources/constants";
import InputForm from "../posts/InputForm";
import AvatarImage from "../images/AvatarImage";
import IconTextButton from "../buttons/IconTextButton";
import DetailsHeader from "../details/DetailsHeader";
import WhiteWrapper from "../wrappers/WhiteWrapper";
import BlueButton from '../buttons/BlueButton';

class AddPost extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { addPostContent, handleChange, handleMediaClick, handleSubmit } = this.props;
    return (
      <WhiteWrapper style={styles.base}>
        <InputForm placeholder="Share an article, photo, video or idea"
          commentBool={false}
          value={addPostContent}
          handleChange={handleChange('addPostContent')} />
        <div style={styles.tabDiv}>
          <IconTextButton
            name="Image"
            type="image"
            onClick={handleMediaClick}
            style={styles.postButton}
            hasBorder
          />
          <IconTextButton
            name="Video"
            type="video"
            onClick={handleMediaClick}
            style={styles.postButton}
            hasBorder
          />
          <BlueButton
            name="Post"
            style={styles.postButton}
            onClick={handleSubmit}
          />
        </div>
      </WhiteWrapper>
    );
  }
}

AddPost.propTypes = {
  addPostContent: PropTypes.string,
  handleChange: PropTypes.func,
  handleMediaClick: PropTypes.func,
  handleSubmit: PropTypes.func,
};

const styles = {
  base: {
    padding: paddings.wrapper,
    display: 'block',
  },
  postButton: {
    margin: '0 0.2em 0 0.2em',
    padding: '0.2em 0.8em 0.2em 0.8em'
  },
  imgDiv: {},
  tabDiv: {
    padding: "5px",
    display: 'flex',
    justifyContent: 'flex-end',
  }
};

AddPost = Radium(AddPost);
export default AddPost;
