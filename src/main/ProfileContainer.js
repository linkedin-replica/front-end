import React, { Component } from 'react';
import PropTypes from 'prop-types'
import api from '../api/api';
import Profile from '../components/profile/Profile';
import { toast } from 'react-toastify';

class ProfileContainer extends Component {

    state = {
        profileData: {},
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
        const { mockData } = this.props;
        if (mockData)
            this.state.chats = mockData

        this.setState({
            newPersonalInfo: this.initPersonalInfo,
            newLocation: this.initLocation,
            newExperience: this.initExperience,
            newEducation: this.initEducation,
            newSkill: this.initSkill
        })
    }

    componentDidMount() {

        const { match } = this.props;

        if (match.params.id) {
            api.getUserProfileById(match.params.id)
                .then(res => {
                    this.setState({ profileData: res.results })
                })
                .catch(err => {
                    toast.error(err.response.data.error)
                })
        } else {
            api.getUserProfile()
                .then(res => {
                    this.setState({ profileData: res.results })
                })
                .catch(err => {
                    toast.error(err.response.data.error)
                })
        }
    }

    handleChange = (form) => (key) => (event) => {
        this.setState(prevState => ({
            ...prevState,
            [form]: {
                ...prevState[form],
                [key]: event.target.value
            }
        }))
    }

    handleSubmitExperience = (id) => (event) => {
        event.preventDefault()

        let newList = []

        const { profileData, newExperience } = this.state;

        // Creating new item
        if (id === -1) {
            // Add the new entry to the  list
            newList = [...profileData.positions, newExperience]
        } else {
            newList = profileData.positions.slice() // Copy positions
            newList[id] = newExperience // Update it with the new experience
        }

        // Update the backend + state with the new list
        api.updateUserProfile({ positions: newList })
            .then(res => {
                toast.success(res.data.results)
                this.setState(prevState => ({
                    ...prevState,
                    profileData: {
                        ...prevState.profileData,
                        positions: newList,
                        newExperience: this.initExperience
                    },
                }))
            })
            .catch(err => {
                toast.error(err.response.data.error)
            })
    }

    handleSubmitEducation = (id) => (event) => {
        event.preventDefault()

        let newList = []

        const { profileData, newEducation } = this.state;

        // Creating new item
        if (id === -1) {
            // Add the new entry to the  list
            newList = [...profileData.educations, newEducation]
        } else {
            newList = profileData.educations.slice() // Copy positions
            newList[id] = newEducation // Update it with the new Education
        }

        // Update the backend + state with the new list
        api.updateUserProfile({ educations: newList })
            .then(res => {
                toast.success(res.data.results)
                this.setState(prevState => ({
                    ...prevState,
                    profileData: {
                        ...prevState.profileData,
                        educations: newList,
                        newEducation: this.initEducation
                    },
                }))
            })
            .catch(err => {
                toast.error(err.response.data.error)
            })
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
    }

    render() {
        const { userId, imageUrl, firstName, lastName, headline, personalInfo, positions, educations, skills, friendsList } = this.props
        return (
            <Profile {...this.props} />
        );
    }
}

ProfileContainer.propTypes = {

};

export default ProfileContainer;