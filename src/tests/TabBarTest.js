/**
 Testing the tabBar component
*/
import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import TabBar from '../components/wrappers/TabBar';


class TabBarTest extends Component {

    render() {
        return (
            <div style={styles.base}>
                <header>
                    <h1>TabBar Testing</h1>
                </header>
                <section style={styles.darkContainer}>
                    <TabBar/>
                </section>
            </div >
        );
    }
}

const styles = {
    base: {
        padding: '10px'
    },
    darkContainer: {
        backgroundColor: colors.darkGray
    }
}

TabBarTest = Radium(TabBarTest);
export default TabBarTest;
