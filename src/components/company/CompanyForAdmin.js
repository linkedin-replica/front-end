import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import Header from '../wrappers/Header';
import CompanyBasicInfo from './CompanyBasicInfo';
import PostAJobContainer from '../../main/PostAJobContainer';
import WallContainer from '../../main/WallContainer';

class CompanyForAdmin extends Component {

  toggleModal = () => {
    this.child.toggleModal()
  }
    render() {
      const { companyProfilePicture, loggedInUser, companyName, industryType, companyLocation, companyId, openPostAJobForm} = this.props;
        return (
          <div>
            <WhiteWrapper style={styles.whiteWrapper} size="lg">
              <CompanyBasicInfo style={styles.info}
                img={companyProfilePicture}
                companyName={companyName}
                industryType={industryType}
                companyLocation={companyLocation}
                isAdmin
                companyId={companyId}
                blueText="Post A Job"
                blueFunc={this.toggleModal}/>
              </WhiteWrapper>
              <PostAJobContainer isOpen={false} onRef={ref => (this.child = ref)}/>
              <WallContainer loggedInUser={loggedInUser} isCompany companyId={companyId}/>
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
      width: '100%',
      position: 'relative'
  },
  info:{
    top:'60%'
  }
}

CompanyForAdmin = Radium(CompanyForAdmin);
export default CompanyForAdmin;
