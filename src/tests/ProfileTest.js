/**
 Testing the profile components
*/
import React, { Component } from 'react';
import Radium from 'radium'
import DetailsHeader from '../components/details/DetailsHeader.js';

class ProfileTest extends Component {

    render() {
        return (
          <div>
            <header>
              <h1>Profile Testing</h1>
            </header>
            <section>
              <DetailsHeader />
            </section>
          </div >
        );
    }
}

ProfileTest = Radium(ProfileTest);
export default ProfileTest;