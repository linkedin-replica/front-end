import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors } from '../../resources/constants';
import ProfileHeader from '../details/ProfileHeader';
import ProfileExperience from '../profile/ProfileExperience';
import ProfileEducation  from '../profile/ProfileEducation';
import ProfileSkillsSection from '../profile/ProfileSkillsSection';
import ListAdapter from '../wrappers/ListAdapter';
import GridView from '../wrappers/GridView';

class Profile extends Component {
    render() {
        const { userId, firstName, lastName, headline, personalInfo, positions, educations, skills, imageUrl,style, size } = this.props;
        return(
        <div style={style}>   
            <section>   
               <ProfileHeader src="https://media.licdn.com/dms/image/C4D03AQGz63bPFy5l-w/profile-displayphoto-shrink_200_200/0?e=1528815600&v=beta&t=EvJQfWQHVOLN5ye6KKwiQnP7AszhkHzgUDGw5Hs5OA0"
                          src={imageUrl}
                          rounded
                          firstName={firstName}
                          lastName={lastName}
                          headline={headline}
                          country={...personalInfo}
                          type="profile"
                          size="lg"
                          id={userId} />
            </section>
            <section>
                <ProfileExperience sectionTitle="Experience" data={positions} />
            </section>
            <section>
                <ProfileEducation sectionTitle="Education" data={educations} />
            </section>
            <section>
                <ProfileSkillsSection sectionTitle="Skills" data={skills} />
            </section>
        </div>
    )};    
}


Profile.propTypes = {
    userId: PropTypes.string.isRequired, 
    firstName: PropTypes.string.isRequired, 
    lastName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired, 
    personalInfo: PropTypes.object.isRequired,
    positions: PropTypes.object.isRequired,
    educations: PropTypes.object.isRequired,
    skills: PropTypes.object.isRequired,
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"])
};

const styles = {
    base: {
      
    },
    sm: {
        fontSize: '0.5em'
    },
    md: {
        fontSize: '1em'
    },
    lg: {
        fontSize: '1.5em'
    }
}

Profile = Radium(Profile);
export default Profile;