import React, { Component } from 'react';

class Test extends Component {

    render() {
        return (
            <div style={styles.base}>

            </div>);
    }
}

const styles = {
    base: {
        fontFamily: 'Source Sans Pro, sans-serif',
    }
}

export default Radium(Test);
