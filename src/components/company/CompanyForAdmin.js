import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import Header from '../wrappers/Header';
import CompanyBasicInfo from './CompanyBasicInfo';



class CompanyForAdmin extends Component {
  state = {
      isOpen: this.props.isOpen
  }

  openPostAJobForm = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

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
                isAdmin
                id={id}
                blueText="Post A Job"
                blueFunc={this.openPostAJobForm}/>
              </WhiteWrapper>

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
