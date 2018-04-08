/**
 Testing the details header component
*/
import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import DetailsHeader from '../components/details/DetailsHeader';

class DetailsHeaderTest extends Component {

    render() {
        return (
            <div style={styles.base}>
                <header>
                    <h1>Details Header Testing</h1>
                </header>
                <section>
                    <h2>Details Header</h2>
                    <DetailsHeader imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A" rounded
                        boldText="My name" type="profile" id="1" grayText="My job"/>
                </section>
            </div >
        );
    }
}

const styles = {
    base: {
        padding: '10px',
    }
}

DetailsHeaderTest = Radium(DetailsHeaderTest);
export default DetailsHeaderTest;
