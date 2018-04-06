/**
 Testing the button components
*/
import React, { Component } from 'react';
import Radium from 'radium';
import IconTextButton from '../components/buttons/IconTextButton.js';
import BorderedButton from '../components/buttons/BorderedButton.js';
import TabButton from '../components/buttons/TabButton.js';
import GrayTextButton from '../components/buttons/GrayTextButton.js';
import BlueButton from '../components/buttons/BlueButton.js';

const Result = props => {
  return (
    <div>
      {props.counter}
    </div>
  );
};

class ButtonsTest extends Component {
  state = { counter: 0 };

  incrementCounter = () => {
    this.setState(prevstate => ({
      counter: prevstate.counter + 1
    }));
  };

  render() {
    return (
      <div style={styles.base}>
        <header>
          <h1>Buttons Testing</h1>
        </header>

        <section>
          <h2>Icon + Text</h2>
          <IconTextButton type="like" onClick={this.incrementCounter} />
          <IconTextButton type="comment" onClick={this.incrementCounter} />
          <IconTextButton type="share" onClick={this.incrementCounter} />
        </section>

        <section>
          <h2>Icon + Text + Border</h2>
          <IconTextButton type="write" onClick={this.incrementCounter} hasBorder={true} />
          <IconTextButton type="image" onClick={this.incrementCounter} hasBorder={true} />
          <IconTextButton type="video" onClick={this.incrementCounter} hasBorder={true} />
        </section>

        <section>
          <h2>Text + Border</h2>
          <BorderedButton type="Sign in" color="white" onClick={this.incrementCounter} />
          <BorderedButton type="Connect" color="blue" onClick={this.incrementCounter} />
        </section>

        <section>
          <h2>Tab</h2>
          <TabButton type="write" isActive={true} onClick={this.incrementCounter} />
          <TabButton type="share" isActive={false} onClick={this.incrementCounter} />
        </section>

        <section>
          <h2>GrayText Only</h2>
          <GrayTextButton type="Ignore" onClick={this.incrementCounter} />
        </section>

        <section>
          <h2>Blue Button</h2>
          <BlueButton type="Post" onClick={this.incrementCounter} />
        </section>

        <section>
          <h2>Sample onClick function result</h2>
          <Result counter={this.state.counter} />
        </section>
      </div>
    );
  }
}

const styles = {
  base: {
    padding: '10px'
  }
}

ButtonsTest = Radium(ButtonsTest);
export default ButtonsTest;
