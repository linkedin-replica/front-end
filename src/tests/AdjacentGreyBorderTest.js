import React, { Component } from 'react';
import Radium from 'radium';
import GreyBlue from '../components/buttons/AdjacentGreyBorder';
import { colors } from '../resources/constants';


class AdjacentGreyBorderTest extends Component {


  render() {
    return (
      <div style={styles.base}>
        <header>
          <h1>Grey and Blue Adjacent Buttons Testing</h1>
        </header>

        <section>
          <h2>Create Company</h2>
          <GreyBlue greyText="Decline" blueText="Accept" size="md"></GreyBlue>
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

AdjacentGreyBorderTest = Radium(AdjacentGreyBorderTest);
export default AdjacentGreyBorderTest;
