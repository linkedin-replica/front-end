import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import TabBar from '../wrappers/TabBar';

class CompanyForUser extends Component {

    render() {
        return (
            <TabBar />
            <WhiteWrapper style={styles.whiteWrapper} size="lg">
            </WhiteWrapper>


        )
    };
}

const styles = {
  whiteWrapper: {
      margin: '10px auto',
      paddingTop: '6em',
      paddingBottom: '2em',
      backgroundImage: 'url(http://www.thepartnermarketinggroup.com/wp-content/uploads/2018/01/LinkedInDefaultBanner.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top',
      height: '7em',
      width: '90%',
  }
}

CompanyForUser = Radium(CompanyForUser);
export default CompanyForUser;
