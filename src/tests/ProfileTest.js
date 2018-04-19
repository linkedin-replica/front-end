/**
 Testing the profile components
*/
import React, { Component } from 'react';
import Radium from 'radium'
import ProfileExperience from '../components/profile/ProfileExperience';
import ProfileEducation from '../components/profile/ProfileEducation';
import ProfileHeader from '../components/details/ProfileHeader';
import ProfileSkill from '../components/profile/ProfileSkill';
import ProfileSkillsSection from '../components/profile/ProfileSkillsSection';
import WhiteWrapper from '../components/wrappers/WhiteWrapper';
import GridView from '../components/wrappers/GridView';
import { colors } from '../resources/constants';

class ProfileTest extends Component {
    render() {
        return (
          <div style = {styles.body}>
            <header>
              <h1>Profile Testing</h1>
            </header>
            <section>
              <ProfileHeader imageUrl="https://media.licdn.com/dms/image/C4D03AQGz63bPFy5l-w/profile-displayphoto-shrink_200_200/0?e=1528815600&v=beta&t=EvJQfWQHVOLN5ye6KKwiQnP7AszhkHzgUDGw5Hs5OA0"
                          rounded
                          firstName="Rana"
                          lastName="Saeed"
                          headline="Student at The German University in Cairo"
                          location = {mockLocation}
                          country="Egypt"
                          type="profile"
                          size="lg"
                          id="1" />
            </section>
            <section>
              <ProfileExperience sectionTitle="Experience" data={mockExperienceSection} />
            </section>
            <section>
            <ProfileEducation sectionTitle="Education" data={mockEducationSection} />
            </section>
            <section>
              <ProfileSkillsSection sectionTitle="Skills" data={mockSkills} />  
            </section>
            <section>
              <ProfileSkill skill="Skills" data={mockSkills} />  
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

const mockPersonalInfo = { location: mockLocation, name: 'Potato'}
const mockLocation = { country: 'Egypt', address: 'Cairo', code: '12345'}

const mockExperienceSection = [
  { title: 'Mobile Development Intern', companyName: 'TedxGUC', companyId: '1', startDate: '2014', endDate: '2017',summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A'},
  { title: 'Mobile Development Intern', companyName: 'TedxGUC', companyId: '1', startDate: '2014', endDate: '2017',summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A'},
  { title: 'Mobile Development Intern', companyName: 'TedxGUC', companyId: '1', startDate: '2014', endDate: '2017',summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A'},
  { title: 'Mobile Development Intern', companyName: 'TedxGUC', companyId: '1', startDate: '2014', endDate: '2017',summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A'}
]

const mockEducationSection = [
  { schoolName: 'German University in Cairo', startDate: '2014', endDate: '2017',field:'Computer Science', degree: 'Bachelors Degree'},
  { schoolName: 'German University in Cairo', startDate: '2014', endDate: '2017',field:'Computer Science', degree: 'Bachelors Degree'},
]

const mockSkills = [
  { skill: 'Java' },
  { skill: 'Java' },
  { skill: 'Java' },
  { skill: 'Java' },
  { skill: 'Java' },
  { skill: 'Java' }
]

ProfileTest = Radium(ProfileTest);
export default ProfileTest;