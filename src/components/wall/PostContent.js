import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';

const TextContent = ({ text }) => (
    <p>{text}</p>
)

const ImageContent = ({ url }) => (
    <img src={`data:image/jpeg;${url}`} style={styles.img} alt="post-image" />
)

const VideoContent = ({ url }) => (
    <video src={url} />
)

class PostContent extends Component {

    render() {
        const { postContent, type } = this.props;
        return (
            <div style={styles.base}>
                {
                    type === 'img' && <ImageContent url={postContent} />
                    || type === 'video' && <VideoContent url={postContent} />
                    || <TextContent text={postContent} />
                }
            </div>
        )
    };
}

PostContent.propTypes = {
    postContent: PropTypes.string,
    type: PropTypes.oneOf(['text', 'img', 'video'])
};

const styles = {
    base: {
        padding: '5px auto',
    },
    img: {
        width: '100%',
        height: '100%'
    }

}

PostContent = Radium(PostContent);
export default PostContent;