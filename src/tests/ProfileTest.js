/**
 Testing the profile components
*/
import React, { Component } from 'react';
import Radium from 'radium'
import ProfileSection from '../components/profile/ProfileSection.js';
import ProfileHeader from '../components/details/ProfileHeader';
import ProfileSkill from '../components/profile/ProfileSkill';
import { colors } from '../resources/constants';

class ProfileTest extends Component {
    render() {
        return (
          <div style = {styles.body}>
            <header>
              <h1>Profile Testing</h1>
            </header>
            <section>
              <ProfileHeader src="https://media.licdn.com/dms/image/C4D03AQGz63bPFy5l-w/profile-displayphoto-shrink_200_200/0?e=1528815600&v=beta&t=EvJQfWQHVOLN5ye6KKwiQnP7AszhkHzgUDGw5Hs5OA0"
                          rounded
                          header="Rana Saeed"
                          subHeader="Student at The German University in Cairo"
                          type="profile"
                          size="lg"
                          id="1" />
            </section>
            <section>
              <ProfileSection sectionTitle="Experience" data={mockExperienceSection} />
            </section>
            <section>
              <ProfileSection sectionTitle="Education" data={mockEducationSection} />
            </section>
            <section>
              Skill:
              <ProfileSkill skill="Java"/>
            </section>
          </div >
        );
    }
}

const styles = {
  header: {
      
  },
  body: {
    
  }
}

const mockExperienceSection = [
  { title: 'Mobile Development Intern', company: 'TedxGUC', id: '1', duration: '2 months', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A'},
  { title: 'Mobile Development Intern', company: 'TedxGUC', id: '1', duration: '2 months', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A'},
  { title: 'Mobile Development Intern', company: 'TedxGUC', id: '1', duration: '2 months', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A'},
  { title: 'Mobile Development Intern', company: 'TedxGUC', id: '1', duration: '2 months', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A'}
 ]

 const mockEducationSection = [
  { title: 'Computer Science Engineering', company: 'German University in Cairo', id: '2', duration: '4 years',description:'', imgSrc: 'https://media.licdn.com/dms/image/C4D0BAQEPcpt4gRL1hA/company-logo_400_400/0?e=2122830000&v=beta&t=QHdiLNCnh_wJBk0NYio4xsLFU9n1GAYGIOA1L-kai6s'},
  { title: 'Computer Science Engineering', company: 'German University in Cairo', id: '2', duration: '4 years',description:'', imgSrc: 'https://media.licdn.com/dms/image/C4D0BAQEPcpt4gRL1hA/company-logo_400_400/0?e=2122830000&v=beta&t=QHdiLNCnh_wJBk0NYio4xsLFU9n1GAYGIOA1L-kai6s'},
 ]

ProfileTest = Radium(ProfileTest);
export default ProfileTest;