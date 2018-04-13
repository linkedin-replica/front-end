/**
 Testing the profile components
*/
import React, { Component } from 'react';
import Radium from 'radium'
import ProfileSection from '../components/profile/ProfileSection.js';
import ProfileHeader from '../components/details/ProfileHeader';

class ProfileTest extends Component {

    render() {
        return (
          <div>
            <header>
              <h1>Profile Testing</h1>
            </header>
            <section>
            {/* < ProfileHeader img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A"
                        rounded
                        header="Hisham Zahran"
                        subHeader="Wenta 3amel eh a5barak tmam el7amdulelah ?ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssslkdlskdlkslkdls"
                        type="profile"
                        size="lg"
                        id="1"
                        style={[styles.header]}/> */}
            </section>
            <section>
              <ProfileSection sectionTitle="Experience" data={mockExperienceSection} />
            </section>
            <section>
              <ProfileSection sectionTitle="Education" data={mockEducationSection} />
            </section>
          </div >
        );
    }
}

const styles = {
  header: {
      
  },
}

const mockExperienceSection = [
  { title: 'Mobile Development Intern', company: 'TedxGUC', id: '1', duration: '2 months', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A'},
  { title: 'Mobile Development Intern', company: 'TedxGUC', id: '1', duration: '2 months', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A'},
  { title: 'Mobile Development Intern', company: 'TedxGUC', id: '1', duration: '2 months', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A'},
  { title: 'Mobile Development Intern', company: 'TedxGUC', id: '1', duration: '2 months', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A'}
 ]

 const mockEducationSection = [
  { title: 'Computer Science Engineering', company: 'German University in Cairo', id: '2', duration: '4 years',description:''},
  { title: 'Computer Science Engineering', company: 'German University in Cairo', id: '2', duration: '4 years',description:''},
 ]

ProfileTest = Radium(ProfileTest);
export default ProfileTest;