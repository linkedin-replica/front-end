/**
 Testing the typography components
*/
import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import BoldLink from '../components/typography/BoldLink';

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
