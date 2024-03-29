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
import IconButton from '../components/buttons/IconButton.js';
import { colors } from '../resources/constants';

const Result = props => {
  return (
    <div>
      {props.counter}
    </div>
  );
};

class ButtonsTest extends Component {
  state = { counter: 0 };

  // Sample onClick function
  // If you write it this way, you won't need .bind(this) <3 <3
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
          <h2>Icon</h2>
          <IconButton type="edit" onClick={this.incrementCounter} />
          <IconButton type="add" onClick={this.incrementCounter} />
        </section>

        <section>
          <h2>Icon + Text</h2>
          <IconTextButton name="Like" type="like" onClick={this.incrementCounter} />
          <IconTextButton name="Comment" type="comment" onClick={this.incrementCounter} />
          <IconTextButton name="Share" type="share" onClick={this.incrementCounter} />
        </section>

        <section>
          <h2>Icon + Text + Border</h2>
          <IconTextButton name="Write an article" type="write" onClick={this.incrementCounter} hasBorder />
          <IconTextButton name="Image" type="image" onClick={this.incrementCounter} hasBorder />
          <IconTextButton name="Video" type="video" onClick={this.incrementCounter} hasBorder />
        </section>

        <section>
          <h2>Text + Border</h2>
          <div style={styles.darkContainer}>
            <BorderedButton name="Sign in" color="white" onClick={this.incrementCounter} />
            <BorderedButton name="Connect" color="blue" onClick={this.incrementCounter} />
          </div>
        </section>

        <section>
          <h2>Tab</h2>
          <div style={styles.darkContainer}>
            <TabButton name="Home" type="home" onClick={this.incrementCounter} />
            <TabButton name="Connections" type="connections" onClick={this.incrementCounter} />
            <TabButton name="Jobs" type="jobs" onClick={this.incrementCounter} />
            <TabButton name="Notifications" type="notifications" onClick={this.incrementCounter} />
            <TabButton name="Articles" type="articles" onClick={this.incrementCounter} />
            <TabButton name="Chat" type="chat" onClick={this.incrementCounter} />
            <TabButton name="Profile" type="profile" onClick={this.incrementCounter} />
          </div>
        </section>

        <section>
          <h2>Active Tab</h2>
          <div style={styles.darkContainer}>
            <TabButton name="Home" type="home" isActive onClick={this.incrementCounter} />
          </div>
        </section>

        <section>
          <h2>GrayText Only</h2>
          <GrayTextButton name="Ignore" onClick={this.incrementCounter} />
        </section>

        <section>
          <h2>Blue Button</h2>
          <BlueButton name="Post" onClick={this.incrementCounter} />
        </section>

        <section>
          <h2>Different Sizes</h2>
          <IconTextButton name="Small" type="like" onClick={this.incrementCounter} size="sm" />
          <BorderedButton name="Medium" color="blue" onClick={this.incrementCounter} size="md" />
          <BorderedButton name="Large" color="blue" onClick={this.incrementCounter} size="lg" />
        </section>

        <section>
          <h2>Sample onClick function result</h2>
          <Result counter={this.state.counter} />
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

ButtonsTest = Radium(ButtonsTest);
export default ButtonsTest;
