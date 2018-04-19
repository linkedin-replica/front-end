import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import AvatarImage from '../images/AvatarImage';
import BoldLink from '../typography/BoldLink';
import DetailsHeader from '../details/DetailsHeader';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import BorderedButton from '../buttons/BorderedButton';
import GreyAndBorder from '../buttons/AdjacentGreyBorder';
import GrayText from '../typography/GrayText';


class FriendRecommendationItem extends Component {

    render() {
        const {
            //  Select the needed props only
            name,
            description,
            img,
            id,
            ...rest } = this.props;

        return (
            <WhiteWrapper style={styles.whiteWrapper} size="sm">
            <section align = "center">
                <AvatarImage src={img}
                    rounded
                    style={styles.img}
                    size="lg"
                    type="profile"
                    id={id}
                />
            </section>
            <section>
                <BoldLink 
                    text = {name}
                    type="profile"
                    id={id}
                    style={styles.text} 
                    size = "md"
                />
                <GrayText 
                    text = {description}
                    size = "md"
                    style={styles.text} 
                />
            </section>
            <BorderedButton name="Connect" color="blue" size="md" />
            </WhiteWrapper>
        );
    }
}

FriendRecommendationItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.string,
};

const styles = {
    base: {

    },
    text: {
        margin: '0px',
        maxWidth: '60%',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    whiteWrapper: {
        margin: '10px auto',
        padding: '20px',
        textAlign: 'left',
        fontSize: '1.5em',
        position:'relative',
        align: 'center'
    },
    btnDiv: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: '30%',
      paddingBottom: '25px'
    },
}


FriendRecommendationItem = Radium(FriendRecommendationItem);
export default FriendRecommendationItem;