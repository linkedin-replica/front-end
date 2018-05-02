import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import DetailsHeader from '../details/DetailsHeader';
import IconTextButton from '../buttons/IconTextButton';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import PostContent from './PostContent';


class Reply extends Component {
    constructor(props) {
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
        const { type,
            loggedInUser,
            authorId,
            authorName,
            authorProfilePictureUrl,
            headLine,
            liked,
            text,
            replyContent,
            handleLikeButton,
            style,
            ...rest } = this.props;

        return (
            <WhiteWrapper style={styles.base}>
                <DetailsHeader
                    img={authorProfilePictureUrl}
                    header={authorName}
                    subHeader={headLine}
                    rounded
                    type={type}
                    id={authorId} />
                <p style={styles.text}>{replyContent}</p>
                <div style={styles.buttons} >
                    <IconTextButton name="Like" type="like" onClick={handleLikeButton} style={liked ? styles.likedButton : ''} />
                </div>
            </WhiteWrapper>
        )
    };
}

Reply.propTypes = {
    replyId: PropTypes.string,
    authorId: PropTypes.string,
    text: PropTypes.string,
    timestamp: PropTypes.number,
    likers: PropTypes.array,
    authorName: PropTypes.string,
    authorProfilePictureUrl: PropTypes.string,
};

const styles = {
    base: {
        padding: paddings.wrapper,
        background: 'none',
        width: '100%',
        borderBottom: `1px solid ${colors.lightGray}`
    },
    buttons: {
        paddingTop: '2px'
    },
    likedButton: {
        color: colors.darkBlue
    },
    text: {
        padding: '5px 20px',
        margin: 0
    }
}

Reply = Radium(Reply);
export default Reply;