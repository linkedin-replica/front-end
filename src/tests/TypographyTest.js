/**
 Testing the typography components
*/
import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import BoldLink from '../components/typography/BoldLink';
import GrayText from '../components/typography/GrayText';
import AvatarImage from '../components/images/AvatarImage';

class TypographyTest extends Component {

    render() {
        return (
            <div style={styles.base}>
                <header>
                    <h1>Typography Testing</h1>
                </header>
                <section>
                    <h2>Bold Link</h2>
                    <BoldLink text="Mahmoud" type="profile" id="1" />
                    <h2>Gray Text</h2>
                    <GrayText text="Mahmoud" />
                    <h2>Avatar Image</h2>
                    <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A" rounded="false" />
                    <h2>Avatar Image</h2>
                    <AvatarImage src="https://i.ytimg.com/vi/raysBHAKodY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLApE2o0QIe30lzcZFBQBzn0EwQ5zw" />
                </section>
            </div >
        );
    }
}

const styles = {
    base: {
        padding: '10px',
    },
}

TypographyTest = Radium(TypographyTest);
export default TypographyTest;
