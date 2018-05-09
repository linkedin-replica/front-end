import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors } from '../../resources/constants';
import ProfileHeader from '../details/ProfileHeader';
import ProfileExperience from '../profile/ProfileExperience';
import ProfileEducation from '../profile/ProfileEducation';
import ProfileSkillsSection from '../profile/ProfileSkillsSection';
import ProfileFriendList from '../profile/ProfileFriendList';
import ListAdapter from '../wrappers/ListAdapter';
import GridView from '../wrappers/GridView';
import CreateCompanyContainer from '../../main/CreateCompanyContainer';
import ProfileExperienceForm from './ProfileExperienceForm';
import ProfileEducationForm from './ProfileEducationForm';
import ProfileSkillForm from './ProfileSkillForm';

class Profile extends Component {

    render() {
        const { userId,
            profilePictureUrl,
            firstName,
            lastName,
            headline,
            industry,
            personalInfo,
            positions,
            educations,
            skills,
            friendsList,
            style,
            size,
            addExperience,
            addEducation,
            isCreateCompanyForm,
            toggleCreateCompany,
            isExperienceForm,
            toggleExperience,
            isEducationForm,
            toggleEducation,
            isSkillsForm,
            toggleSkills,
            handleSubmitExperience,
            handleSubmitEducation,
            handleSubmitSkill,
            handleChange,
            newEducation,
            newExperience,
            newSkill,
             } = this.props;

        let newPositions = []
        if (positions)
            newPositions = positions
                .map((position, indx) => ({
                    ...position,
                    toggleModal: toggleExperience(indx)
                }))
        let newEducations = []
        if (educations)
            newEducations = educations
                .map((education, indx) => ({
                    ...education,
                    toggleModal: toggleEducation(indx)
                }))
        return (
            <div style={styles.main}>
                <div style={styles.header}>
                    <section>
                        <ProfileHeader
                            imageUrl={profilePictureUrl}
                            rounded
                            firstName={firstName}
                            lastName={lastName}
                            headline={headline}
                            industry={industry}
                            {...personalInfo}
                            type="profile"
                            size="lg"
                            id={userId}
                            createCompany={toggleCreateCompany} />
                    </section>
                </div>
                <div style={styles.left}>
                    <section>
                        <ProfileExperience sectionTitle="Experience"
                            data={newPositions}
                            addExperience={toggleExperience(-1)}
                        />
                    </section>
                    <section>
                        <ProfileEducation sectionTitle="Education"
                            data={newEducations}
                            addEducation={toggleEducation(-1)} />
                    </section>
                    <section>
                        <ProfileSkillsSection sectionTitle="Skills"
                            data={skills}
                            addSkill={toggleSkills} />
                    </section>
                </div>
                <div style={styles.right}>
                    <section>
                        <ProfileFriendList sectionTitle="Connections" data={friendsList} />
                    </section>
                </div>
                <CreateCompanyContainer isOpen={isCreateCompanyForm} toggleModal={toggleCreateCompany} />
                <ProfileExperienceForm
                    {...newExperience}
                    handleChange={handleChange('newExperience')}
                    handleSubmit={handleSubmitExperience}
                    isOpen={isExperienceForm}
                    toggleModal={toggleExperience(-1)} />

                <ProfileEducationForm
                    {...newEducation}
                    handleChange={handleChange('newEducation')}
                    handleSubmit={handleSubmitEducation}
                    isOpen={isEducationForm}
                    toggleModal={toggleEducation(-1)} />

                <ProfileSkillForm
                    {...newSkill}
                    handleChange={handleChange('newSkill')}
                    handleSubmit={handleSubmitSkill}
                    isOpen={isSkillsForm}
                    toggleModal={toggleSkills} />
            </div>
        )
    };
}


Profile.propTypes = {
    userId: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    imageUrl: PropTypes.string,
    headline: PropTypes.string,
    personalInfo: PropTypes.object,
    positions: PropTypes.object,
    educations: PropTypes.object,
    skills: PropTypes.object,
    friendsList: PropTypes.object,
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
        width: '65%',
        float: 'left',
        margin: '5% 2%',
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