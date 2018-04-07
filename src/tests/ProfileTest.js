/**
 Testing the profile components
*/
import React, { Component } from 'react';
import Radium from 'radium'
import ProfileSectionItem from '../components/profile/ProfileSectionItem.js';

class ProfileTest extends Component {

    render() {
        return (
          <div>
            <header>
              <h1>Profile Testing</h1>
            </header>
            <section>
              <ProfileSectionItem title="Intern" company="TedxGUC" id= "1"/>
            </section>
          </div >
        );
    }
}

ProfileTest = Radium(ProfileTest);
export default ProfileTest;