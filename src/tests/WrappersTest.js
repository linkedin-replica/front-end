/**
 Testing the button components
*/
import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import WhiteWrapper from '../components/wrappers/WhiteWrapper';
import BorderedButton from '../components/buttons/BorderedButton';
import ListAdapter from '../components/wrappers/ListAdapter';

class WrappersTest extends Component {

    render() {
        return (
            <div style={styles.base}>
                <header>
                    <h1>Wrappers Testing</h1>
                </header>
                <section>
                    <h2>White Wrapper (sm, md, lg)</h2>
                    <WhiteWrapper style={styles.whiteWrapper} size="sm">
                        Small
                    </WhiteWrapper>
                    <WhiteWrapper style={styles.whiteWrapper} size="md">
                        Medium
                    </WhiteWrapper>
                    <WhiteWrapper style={styles.whiteWrapper} size="lg">
                        Large
                    </WhiteWrapper>
                </section>

                <section>
                    <h2>List Adapter</h2>
                    <ListAdapter data={mockData} listItemView={BorderedButton} />
                    <h2>List Adapter (Vertical Split)</h2>
                    <ListAdapter data={mockData2} listItemView={WhiteWrapper} verticalSplit />
                </section>
            </div >
        );
    }
}

const mockData = [
    { name: 'Button 1' },
    { name: 'Button 2' },
    { name: 'Button 3' },
    { name: 'Button 4' },
]

const mockData2 = [
    { children: 'Post 1' },
    { children: 'Post 2' },
    { children: 'Post 3' },
    { children: 'Post 4' },
]

const styles = {
    base: {
        background: colors.whiteGray,
        padding: '10px',
    },
    whiteWrapper: {
        margin: '10px auto',
        padding: '10px',
        textAlign: 'center'
    }
}

WrappersTest = Radium(WrappersTest);
export default WrappersTest;
