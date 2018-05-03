import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import DetailsHeader from '../details/DetailsHeader';
import IconTextButton from '../buttons/IconTextButton';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import PostContent from './PostContent';
import WriteAComment from './WriteAComment';


class Comment extends Component {
    constructor(props){
        super(props)
        this.stateHandler = this.stateHandler.bind(this);
        this.state = {
            
        };
    }

    stateHandler = () => {
        this.setState({
            
        });
        
    }
    
    render() {
        const { commentContent, ...rest } = this.props;
        
        return (
            <div style={styles.base}>
                <DetailsHeader {...rest} size={'sm'} />
                <PostContent postContent={commentContent} style={styles.content}/>
                <div style={styles.buttons} >
                    {/* <IconTextButton name="Like" type="like" onClick = {this.likeButtonHandler}  style={this.state.isLiked? styles.likedButton:''}/>
                    <IconTextButton name="Reply" type="comment" onClick = {this.replyButtonHandler} /> */}
                    {/* <IconTextButton name="Share" type="share" onClick = {this.shareButtonHandler} /> */}
                </div>
            </div>
        )
    };
}

Comment.propTypes = {
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    src: PropTypes.string,
    rounded: PropTypes.bool,
    header: PropTypes.string,
    subHeader: PropTypes.string,
    commentContent: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    action: PropTypes.func
};

const styles = {
    base: {
        
        
    },
    buttons: {
        paddingTop: '5px'
    },
    content: {
        padding:'0em',
        marginLeft:'2.7em',
        marginTop:'-0.6em',
        fontSize:'1em'

    }
}

Comment = Radium(Comment);
export default Comment;