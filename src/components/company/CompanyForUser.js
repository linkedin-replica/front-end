import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import CompanyBasicInfo from './CompanyBasicInfo';

class CompanyForUser extends Component {
  state = { viewJobs: false, follow: false};

  toggleFollow = () => {
    console.log("in toggle follow")
    this.setState(prevState => ({
        follow: !prevState.follow
    }));
  };

  togglePostsAndJobs = () => {
    this.setState(prevState => ({
        viewJobs: !prevState.viewJobs
    }));
  };

    render() {
      const { img, companyName, industryType, companyLocation, id} = this.props;
        return (
          <div>
            <WhiteWrapper style={styles.whiteWrapper} size="lg">
              <CompanyBasicInfo style={styles.info}
                img={img}
                companyName={companyName}
                industryType={industryType}
                companyLocation={companyLocation}
                id={id}
                borderedText={this.state.follow ? "Following" : "Follow"}
                borderedFunc={this.toggleFollow}
                blueText={this.state.viewJobs ? "See Posts" : "See Jobs"}
                blueFunc={this.togglePostsAndJobs}/>
              </WhiteWrapper>
              { this.state.viewJobs ?
                <div><h1>JOBSSSSSSS</h1></div> :
                <div><h1>POSTSSSSSS</h1></div>
              }


          </div>




        )
    };
}

const styles = {
  whiteWrapper: {
      margin: '10px auto',
      backgroundImage: 'url(http://www.thepartnermarketinggroup.com/wp-content/uploads/2018/01/LinkedInDefaultBanner.png)',
      backgroundPosition: 'top',
      height: '15em',
      width: '100vw',
      position: 'relative',
      top: '-12%'
  },
  info:{
    top:'60%'
  }
}

CompanyForUser = Radium(CompanyForUser);
export default CompanyForUser;
