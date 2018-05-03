/**
 Testing the button components
*/
import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import WhiteWrapper from '../components/wrappers/WhiteWrapper';
import BorderedButton from '../components/buttons/BorderedButton';
import ListAdapter from '../components/wrappers/ListAdapter';
import GridView from '../components/wrappers/GridView';

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
                    <ListAdapter data={mockData} listItemView={BorderedButton} verticalSplit />
                    <h2>List Adapter (Vertical Split)</h2>
                    <ListAdapter data={mockData2} listItemView={WhiteWrapper} verticalSplit />
                </section>

                <section>
                    <h2>Grid View</h2>
                    {/* <GridView data={mockData} gridItemView={BorderedButton} /> */}
                    <h2>Grid View</h2>
                    <WhiteWrapper style={styles.gridWrapper}>
                        <GridView data={mockData2} gridItemView={WhiteWrapper} horizontalSplit verticalSplit size="md" />
                    </WhiteWrapper>
                </section>
            </div>
        );
    }
}

const mockData = [
    { name: 'Button 1' },
    { name: 'Button 2' },
    { name: 'Button 3' },
    { name: 'Button 4' },
    { name: 'Button 5' },
    { name: 'Button 6' },
    { name: 'Button 7' },
    { name: 'Button 8' },
    { name: 'Button 9' },
    { name: 'Button 10' },
    { name: 'Button 11' },
    { name: 'Button 12' },
    { name: 'Button 13' },
]

const mockData2 = [
    { children: 'Job 1' },
    { children: 'Job 2' },
    { children: 'Job 3' },
    { children: 'Job 4' },
    { children: 'Job 4' },
    { children: 'Job 4' },
    { children: 'Job 4' },
    { children: 'Job 4' },
    { children: 'Job 4' },
    { children: 'Job 4' },
    { children: 'Job 4' },
    { children: 'Job 4' },
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
    },
    gridWrapper: {
        // width: '80%',
        // padding: '10px',
        // textAlign: 'center'
    }
}

WrappersTest = Radium(WrappersTest);
export default WrappersTest;
