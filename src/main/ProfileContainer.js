import React, { Component } from 'react';
import PropTypes from 'prop-types'
import api from '../api/api';
import Profile from '../components/profile/Profile';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends Component {

    state = {
        profileData: {
            positions: [],
            educations: [],
            skills: [],
            followedCompanies: [],
            friendsList: [],
            bookmarkedPosts: []
        },
        isCreateCompanyForm: false,
        isEducationForm: false,
        isExperienceForm: false,
        isSkillsForm: false,
        selectedId: -1
    };

    initLocation = {
        country: '',
        address: '',
        code: '',
    }

    initPersonalInfo = {
        phone: '',
        email: '',
        location: null,
        dob: '',
        website: '',
    }

    initEducation = {
        schoolName: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        degree: '',
    }

    initExperience = {
        title: '',
        summary: '',
        startDate: '',
        endDate: '',
        companyName: '',
        companyId: '',
        isCurrent: false,
    }

    initSkill = ''

    constructor(props) {
        super(props)

        this.state = {
            ...this.state,
            newPersonalInfo: this.initPersonalInfo,
            newLocation: this.initLocation,
            newExperience: this.initExperience,
            newEducation: this.initEducation,
            newSkill: this.initSkill
        }
    }

    componentDidMount() {

        const { match } = this.props;

        if (match.params.id) {
            api.getUserProfileById(match.params.id)
                .then(res => {
                    this.setState(prevState => ({ profileData: { ...prevState.profileData, ...res.data.results } }))
                })
                .catch(err => {
                    toast.error(err.response.data.error)
                })
        } else {
            api.getUserProfile()
                .then(res => {
                    this.setState(prevState => ({ profileData: { ...prevState.profileData, ...res.data.results } }))
                })
                .catch(err => {
                    toast.error(err.response.data.error)
                })
        }
    }

    handleChange = (form) => (key) => (event) => {
        event.persist();
        this.setState(prevState => ({
            ...prevState,
            [form]: {
                ...prevState[form],
                [key]: event.target.type === 'checkbox' ? event.target.checked :
                    event.target.type === 'date' ? Date.parse(event.target.value) : event.target.value
            }
        }))
    }
    toggleCreateCompany = () => {
        this.setState(prevState => ({
            isCreateCompanyForm: !prevState.isCreateCompanyForm
        }));
    };


    toggleExperience = (id) => (event) => {
        this.setState(prevState => ({
            isExperienceForm: !prevState.isExperienceForm,
            newExperience: prevState.isExperienceForm ? this.initExperience :
                (id === -1 ? this.initExperience : prevState.profileData.positions[id]),
            selectedId: prevState.isExperienceForm ? -1 : id
        }));
    };
    toggleEducation = (id) => (event) => {

        this.setState(prevState => ({
            isEducationForm: !prevState.isEducationForm,
            newEducation: prevState.isEducationForm ? this.initEducation :
                (id === -1 ? this.initEducation : prevState.profileData.educations[id]),
            selectedId: prevState.isEducationForm ? -1 : id
        }));
    };

    toggleSkills = () => {
        this.setState(prevState => ({
            isSkillsForm: !prevState.isSkillsForm,
            newSkill: this.initSkill
        }));
    };


    handleSubmitExperience = (event) => {
        event.preventDefault()

        let newList = []

        const { profileData, newExperience, selectedId } = this.state;

        // Creating new item
        if (selectedId === -1) {
            // Add the new entry to the  list
            newList = [...profileData.positions, newExperience]
        } else {
            newList = profileData.positions.slice() // Copy positions
            newList[selectedId] = newExperience // Update it with the new experience
        }

        // Update the backend + state with the new list
        api.updateUserProfile({ positions: newList })
            .then(res => {
                toast.success("Updated Experiences Successfully")
                this.setState(prevState => ({
                    ...prevState,
                    profileData: {
                        ...prevState.profileData,
                        positions: newList,
                        newExperience: this.initExperience
                    },
                    selectedId: -1

                }))
            })
            .catch(err => {
                toast.error(err.response.data.error)
            })
        this.toggleExperience(-1)()

    }

    handleSubmitEducation = (event) => {
        event.preventDefault()

        let newList = []

        const { profileData, newEducation, selectedId } = this.state;

        // Creating new item
        if (selectedId === -1) {
            // Add the new entry to the  list
            newList = [...profileData.educations,
                newEducation]
        } else {
            newList = profileData.educations.slice() // Copy positions
            newList[selectedId] = newEducation // Update it with the new Education
        }

        // Update the backend + state with the new list
        api.updateUserProfile({ educations: newList })
            .then(res => {
                toast.success("Updated Educations Successfully")
                this.setState(prevState => ({
                    ...prevState,
                    profileData: {
                        ...prevState.profileData,
                        educations: newList,
                        newEducation: this.initEducation
                    },
                    selectedId: -1
                }))
            })
            .catch(err => {
                toast.error(err.response.data.error)
            })
        this.toggleEducation(-1)()
    }

    handleSubmitSkill = (event) => {
        event.preventDefault()

        api.updateUserProfile({ skills: [...this.state.profileData.skills, this.state.newSkill] })
            .then(res => {
                toast.success(res.data.results)
                this.setState(prevState => ({
                    ...prevState,
                    profileData: {
                        ...prevState.profileData,
                        skills: [...prevState.profileData.skills, this.state.newSkill],
                        newSkill: this.initSkill
                    },
                }))
            })
            .catch(err => {
                toast.error(err.response.data.error)
            })
        this.toggleSkills()
    }

    render() {
        return (
            <Profile
                {...this.state}
                {...this.state.profileData}
                toggleCreateCompany={this.toggleCreateCompany}
                toggleEducation={this.toggleEducation}
                toggleExperience={this.toggleExperience}
                toggleSkills={this.toggleSkills}
                handleSubmitExperience={this.handleSubmitExperience}
                handleSubmitEducation={this.handleSubmitEducation}
                handleSubmitSkill={this.handleSubmitSkill}
                handleChange={this.handleChange}
            />
        );
    }
}

ProfileContainer.propTypes = {

};

export default withRouter(ProfileContainer);