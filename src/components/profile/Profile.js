import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors } from '../../resources/constants';
import ProfileHeader from '../details/ProfileHeader';
import ProfileExperience from '../profile/ProfileExperience';
import ProfileEducation  from '../profile/ProfileEducation';
import ProfileSkillsSection from '../profile/ProfileSkillsSection';
import ProfileFriendList from '../components/profile/ProfileFriendList';
import ListAdapter from '../wrappers/ListAdapter';
import GridView from '../wrappers/GridView';

class Profile extends Component {
    render() {
        const { userId, imageUrl, firstName, lastName, headline, personalInfo, positions, educations, skills, friendsList, style, size } = this.props;
        return(
        <div style = {styles.main}>   
            <div style = {styles.header}>
                <section>   
                <ProfileHeader 
                            imageUrl={imageUrl}
                            rounded
                            firstName={firstName}
                            lastName={lastName}
                            headline={headline}
                            country={...personalInfo}
                            type="profile"
                            size="lg"
                            id={userId} />
                </section>
            </div>
            <div style = {styles.left}>
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
            <div style = {styles.right}>
                <section>
                <ProfileFriendList sectionTitle="Connections" data={friendsList} />  
                </section>
            </div>
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
    friendsList: PropTypes.object.isRequired,
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"])
};

const styles = {
    main: {
        maxWwidth: '100%',
        maxHeight: '100%'
    },
    header: {
        width: '100%',
        float: 'left',
    },
    left: {
        width: '70%',
        float: 'left',
    },
    right: {
        width: '30%',
        float: 'right',
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