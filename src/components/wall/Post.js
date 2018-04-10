import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import DetailsHeader from '../details/DetailsHeader';
import IconTextButton from '../buttons/IconTextButton';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import PostContent from './PostContent';
import WriteAComment from './WriteAComment';


class Post extends Component {
    
    render() {
        var state = false
        const { postContent, ...rest } = this.props;
        console.log(state)
        return (
            <WhiteWrapper style={styles.base}>
                <DetailsHeader {...rest} />
                <PostContent postContent={postContent} />
                <div style={styles.buttons} >
                    <IconTextButton name="Like" type="like" state = {this.state.valueOf}  />
                    <IconTextButton name="Comment" type="comment" state = {this.state.valueOf}/>
                    <IconTextButton name="Share" type="share" state = {this.state.valueOf} />
                </div>
                <WriteAComment {...rest}  state = {this.state.valueOf} />
                    
            </WhiteWrapper>
        )
    };
}

Post.propTypes = {
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    src: PropTypes.string,
    rounded: PropTypes.bool,
    header: PropTypes.string,
    subHeader: PropTypes.string,
    postContent: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    state: PropTypes.bool
};

const styles = {
    base: {
        padding: paddings.wrapper,
    },
    buttons: {
        paddingTop: '5px'
    }
}

Post = Radium(Post);
export default Post;