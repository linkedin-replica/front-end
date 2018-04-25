import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors } from '../../resources/constants';
import GridView from '../wrappers/GridView';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import GrayText from '../typography/GrayText';
import FriendRecommendationItem from '../connections/FriendRecommendationItem';

class FriendRecommendations extends Component {
    render() {
        const { data,
                style,
                size,
                horizontalSplit,
                verticalSplit } = this.props;
        return (
            <WhiteWrapper>
                <div style = {styles.center}>
                    <GrayText 
                        text = "People You May Know"
                        size = "lg"
                    />
                </div>
                <GridView 
                    data = {mockData}
                    gridItemView = {FriendRecommendationItem}/>
            </WhiteWrapper>
        )
    };
}

const mockData = [
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A", rounded: true, name:"Yara Yehia", description:"A Computer Science Student at the German University in Cairo", type:"profile", id:"1" },
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A", rounded: true, name: "Hisham Zahran", description:"A Computer Science Student at the German University in Cairo", type:"profile", id:"2" },
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A", rounded: true, name: "Esraa Salah", description:"A Computer Science Student at the German University in Cairo", type:"profile", id:"3" },
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A", rounded: true, name: "Rana Saeed", description:"A Computer Science Student ", type:"profile", id:"4" },
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A", rounded: true, name: "Rana Saeed", description:"A Computer Science Student ", type:"profile", id:"4" },
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A", rounded: true, name: "Rana Saeed", description:"A Computer Science Student ", type:"profile", id:"4" },
    
]


FriendRecommendations.propTypes = {
    data: PropTypes.array.isRequired,
    style: PropTypes.object, // Content style
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    horizontalSplit: PropTypes.bool,
    verticalSplit: PropTypes.bool
};

const styles = {
    base: {

    },
    whiteWrapper: {

    },
    title: {
        size : "md"
    },
    center : {   
        paddingLeft: '20px',
        paddingTop: '2px'
    }
}

FriendRecommendations = Radium(FriendRecommendations);
export default FriendRecommendations;