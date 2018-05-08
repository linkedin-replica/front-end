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

class Profile extends Component {
    toggleModal = () => {
        this.child.toggleModal()
    }

    render() {
        const { userId,
            imageUrl,
            firstName,
            lastName,
            headline,
            personalInfo, positions, educations, skills, friendsList, style, size, addExperience, addEducation } = this.props;
        return (
            <div style={styles.main}>
                <div style={styles.header}>
                    <section>
                        <ProfileHeader
                            imageUrl={imageUrl}
                            rounded
                            firstName={firstName}
                            lastName={lastName}
                            headline={headline}
                            {...personalInfo}
                            type="profile"
                            size="lg"
                            id={userId}
                            createCompany={this.toggleModal} />
                    </section>
                </div>
                <div style={styles.left}>
                    <section>
                        <ProfileExperience sectionTitle="Experience" data={positions} addExperience={addExperience} />
                    </section>
                    <section>
                        <ProfileEducation sectionTitle="Education" data={educations} addEducation={addEducation} />
                    </section>
                    <section>
                        <ProfileSkillsSection sectionTitle="Skills" data={skills} />
                    </section>
                </div>
                <div style={styles.right}>
                    <section>
                        <ProfileFriendList sectionTitle="Connections" data={friendsList} />
                    </section>
                </div>
                <CreateCompanyContainer isOpen={false} onRef={ref => (this.child = ref)} />

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