import io from 'socket.io-client';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import api from '../api/api';
import IconTextButton from '../components/buttons/IconTextButton';
import { toast } from 'react-toastify';
import Radium from 'radium';

import PostsContainer from './PostsContainer'
// import CompaniesContainer from './CompaniesContainer'
import JobsContainer from './JobsContainer'
import ProfileContainer from './ProfileContainer'

   
class SearchContainer extends Component {

    state = {
        type: '',
        results : []
    }

    componentDidMount() {

    }

    handleSearchClick = (name)=> (event) => {

        const { searchKey } = this.props
        const { type} = this.state

        let request = null

        switch(name){
            case 'company' :
                 request = api.searchCompany(searchKey) 
                 break
            case 'user' :
                 request = api.searchUser(searchKey) 
                 break
            case 'post' :
                 request = api.searchPost(searchKey) 
                 break
            case 'job' :
                 request = api.searchJob(searchKey) 
                 break        
        }

        if(request == null)
            return

        request
            .then(res => {
                this.setState({
                    type : name,
                    results : res.data.results
                })
            })
            .catch(err =>
                toast.error(err.response.data.error)
            )
    }

    render() {
        const { addPostContent } = this.state;
        return (
            <div>
                <IconTextButton 
                    name = "Company"
                    type = "logo"
                    onClick = {this.handleSearchClick('company')}
                />
                <IconTextButton 
                    name = "user"
                    type = "profile"
                    onClick = {this.handleSearchClick('user')}
                />
                <IconTextButton 
                    name = "post"
                    type = "articles"
                    onClick = {this.handleSearchClick('post')}
                />
                <IconTextButton 
                    name = "job"
                    type = "jobs"
                    onClick = {this.handleSearchClick('job')}
                />   
                {
                    this.state.type == 'post' && <PostsContainer data={this.state.results}/> 
                    || this.state.type == 'job' && <JobsContainer data={this.state.results}/>
                    || this.state.type == 'user' && <ProfileContainer data={this.state.results}/>
                }             
            </div>
             
        );
    }
 }


PostsContainer.propTypes = {
    userId: PropTypes.string,
    isCompany: PropTypes.bool
};


export default PostsContainer;