/**
 Testing the profile components
*/
import React, { Component } from 'react';
import Radium from 'radium'
import ProfileSection from '../components/profile/ProfileSection.js';

class ProfileTest extends Component {

    render() {
        return (
          <div>
            <header>
              <h1>Profile Testing</h1>
            </header>
            <section>
              <ProfileSection sectionTitle="Experience" data={mockEducationSection} />
            </section>
          </div >
        );
    }
}

const mockEducationSection = [
  { title: 'Mobile Development Intern', company: 'TedxGUC', id: '1', duration: '2 months', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
  { title: 'Mobile Development Intern', company: 'TedxGUC', id: '1', duration: '2 months', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
  { title: 'Mobile Development Intern', company: 'TedxGUC', id: '1', duration: '2 months', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
  { title: 'Mobile Development Intern', company: 'TedxGUC', id: '1', duration: '2 months', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'}
 ]

ProfileTest = Radium(ProfileTest);
export default ProfileTest;