import React from 'react'
import PropTypes from 'prop-types'
import {paddings, colors} from '../../resources/constants';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import BoldLink from '../typography/BoldLink'
import GrayText from '../typography/GrayText'
import Radium from 'radium'

class RecommendedArticle extends React.Component {
    render () {
        const {title, postId, miniText, authorFirstName, authorLastName, peopleTalking} = this.props;
        const author = authorFirstName + ' ' + authorLastName;
        const peopleTalkingText = peopleTalking + ' people are talking about this';
        return (
            <WhiteWrapper style={styles.base}>
                <BoldLink
                    text={title}
                    type='article'
                    id={postId}
                    style={styles.boldTextColor}
                    size='lg'/>
                <GrayText text={author}/>
            <GrayText
                text={miniText}
                style={styles.grayTextColor}
                size='md'/>
            <hr style={styles.hrLine}>
            </hr>
            <GrayText text={peopleTalkingText}/>
    </WhiteWrapper>
);
}
}

RecommendedArticle.propTypes = {
    authorId: PropTypes.string,
    postId: PropTypes.string,
    tistle: PropTypes.string,
    authorFirstName: PropTypes.string,
    authorLastName: PropTypes.string,
    miniText: PropTypes.string,
    peopleTalking: PropTypes.number
}

const styles = {
    base: {
        padding: '20px 30px'
    },
    boldTextColor: {
        color: colors.darkBlue
    },
    grayTextColor: {
        color: colors.darkGray
    },
    hrLine: {
        width: '25%',
        margin: '0px'
    }
}

RecommendedArticle = Radium(RecommendedArticle);
export default RecommendedArticle;
