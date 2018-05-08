import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import CompanyBasicInfo from './CompanyBasicInfo';
import WallContainer from '../../main/WallContainer';


class CompanyForUser extends Component {
  state = { viewJobs: false, follow: false };

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
    const { companyId, profilePictureUrl, companyName, industryType, companyLocation, loggedInUser } = this.props;
    return (
      <div>
        <WhiteWrapper style={styles.whiteWrapper} size="lg">
          <CompanyBasicInfo style={styles.info}
            img={profilePictureUrl}
            companyName={companyName}
            industryType={industryType}
            companyLocation={companyLocation}
            companyId={companyId}
            borderedText={this.state.follow ? "Following" : "Follow"}
            borderedFunc={this.toggleFollow}
            blueText={this.state.viewJobs ? "See Posts" : "See Jobs"}
            blueFunc={this.togglePostsAndJobs} />
        </WhiteWrapper>
        <div style={styles.content}>
          {this.state.viewJobs ?
            <div><h1>JOBSSSSSSS</h1></div> :
            <WallContainer loggedInUser={loggedInUser} isCompany companyId={companyId} />
          }
        </div>


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
    position: 'relative'
  },
  content: {
    paddingTop: '10%'
  },
  info: {
    top: '60%'
  }
}

CompanyForUser = Radium(CompanyForUser);
export default CompanyForUser;
