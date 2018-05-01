import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import Header from '../wrappers/Header';
import CompanyBasicInfo from './CompanyBasicInfo';

class CompanyForUser extends Component {
  state = { btnText: "See Jobs" };

  toggleFollow = () => {
    this.setState(prevstate => ({
      btnText:  prevstate.btnText === "See Posts" ? "See Jobs": "See Posts"
    }));
  };

    render() {
        return (
          <div>
            <Header isLoggedIn />
            <WhiteWrapper style={styles.whiteWrapper} size="lg">
              <CompanyBasicInfo style={styles.info}
                img='http://www.mamboproductora.com.ar/wp-content/uploads/2017/04/descarga.png'
                companyName='Microsoft'
                industryType='Computer Software'
                companyLocation='Redmond, WA'
                id='1'/>
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
      height: '17em',
      width: '100%',
      position: 'relative'
  },
  info:{
    top:'60%'
  }
}

CompanyForUser = Radium(CompanyForUser);
export default CompanyForUser;
