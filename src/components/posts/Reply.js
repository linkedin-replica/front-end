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
            handleLikeReplyButton,
            style,
            ...rest } = this.props;

        return (
            <section style={styles.base}>
                <DetailsHeader
                    img={authorProfilePictureUrl}
                    header={authorName}
                    subHeader={headLine}
                    rounded
                    type={type}
                    id={authorId}
                    imgSize="sm" />
                <div style={styles.details}>
                    <p style={styles.text}>{text}</p>
                    <div style={styles.buttons} >
                        <IconTextButton name="Like" type="like" onClick={handleLikeReplyButton} style={liked ? styles.likedButton : ''} />
                    </div>
                </div>
            </section>
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
        paddingLeft: paddings.wrapper,
        background: 'none',
        width: '100%',
    },
    buttons: {
        paddingTop: '2px',
    },
    likedButton: {
        color: colors.darkBlue
    },
    details: {
        margin: '0 0 0 8%'
    },
    text: {
        margin: 0,
        padding: '3% 2% 0 2%'
    }
}

Reply = Radium(Reply);
export default Reply;