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
              <ProfileSectionItem title="Mobile Development Intern" company="TedxGUC" id= "1"
              duration="2 months" description="https://www.linkedin.com/in/rana-saeed/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BQJN5wDQkSA%2BxVdWLKLbxvA%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_feed-nav.settings_view_profile"/>
            </section>
          </div >
        );
    }
}

ProfileTest = Radium(ProfileTest);
export default ProfileTest;