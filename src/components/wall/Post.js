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
    constructor(props){
        super(props)
        this.stateHandler = this.stateHandler.bind(this);
        this.state = {
            visibility : false
        };
    }

    stateHandler = () => {
        this.setState({
            visibility: !this.state.visibility
        });
        
    }
    
    render() {
        const { postContent, ...rest } = this.props;
        return (
            <WhiteWrapper style={styles.base}>
                <DetailsHeader {...rest} />
                <PostContent postContent={postContent} />
                <div style={styles.buttons} >
                    <IconTextButton name="Like" type="like" action = {this.stateHandler}  />
                    <IconTextButton name="Comment" type="comment" action = {this.stateHandler} />
                    <IconTextButton name="Share" type="share" action = {this.stateHandler} />
                </div>
                <WriteAComment {...rest} visibility = {this.state.visibility} />
                    
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
    action: PropTypes.func
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