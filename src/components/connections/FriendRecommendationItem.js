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
import { colors, borders } from '../../resources/constants.js'

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
            <WhiteWrapper style={styles.whiteWrapper}>
                <div>
                <AvatarImage src={img}
                    rounded
                    style={styles.img}
                    size="lg"
                    type="profile"
                    id={id}
                />
                </div>
                <BoldLink 
                    text = {name}
                    type="profile"
                    id={id} 
                    size = "md"
                    
                />
                <GrayText 
                    text = {description}
                    size = "md" 
                />
                <div style = {styles.center}>
                <BorderedButton 
                    name="Connect" 
                    color="blue" 
                    size="md" 
                    style = {styles.blueBorder}/>
                </div>
            
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
        width:'100%',
        height: '280px',
        margin: '0px',
        padding: '20px',
        textAlign: 'center',
        position:'relative',
        align: 'center'
    },
    blueBorder: {
        border: `${borders.button.width.normal} solid ${colors.darkBlue}`,
        color: colors.darkBlue,
        ":hover": {
          background: colors.darkBlue,
          color: colors.white
        },
        
    },
    center : {
        position: 'absolute',
        bottom : '20px',
        right : '0',
        left: '0',
        margin: '0 auto'
    }
}


FriendRecommendationItem = Radium(FriendRecommendationItem);
export default FriendRecommendationItem;