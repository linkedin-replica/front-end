/**
 Testing the button components
*/
import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import WhiteWrapper from '../components/wrappers/WhiteWrapper';
import BorderedButton from '../components/buttons/BorderedButton';

class WrappersTest extends Component {

    render() {
        return (
            <div style={styles.base}>
                <header>
                    <h1>Wrappers Testing</h1>
                </header>
                <section>
                    <h2>White Wrapper</h2>
                    <WhiteWrapper style={styles.whiteWrapper}>
                        {
                            [1, 2, 3, 4, 5].map(number => {
                                return (
                                    <div>
                                        <BorderedButton name={`Button${number}`} color="blue" />
                                    </div>)
                            })
                        }
                    </WhiteWrapper>
                </section>
            </div >
        );
    }
}

const styles = {
    base: {
        background: colors.whiteGray,
        padding: '10px',
    },
    whiteWrapper: {
        margin: '0 auto',
        textAlign: 'center'
    }
}

WrappersTest = Radium(WrappersTest);
export default WrappersTest;
