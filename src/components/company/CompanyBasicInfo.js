import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import AvatarImage from '../images/AvatarImage';
import BorderedButton from '../buttons/BorderedButton';
import BlueButton from '../buttons/BlueButton';
import GrayText from '../typography/GrayText';
import BoldLink from '../typography/BoldLink';

class CompanyBasicInfo extends Component {
  state = { follow: "Follow" };

  toggleFollow = () => {
    this.setState(prevstate => ({
      follow: prevstate.follow === "Follow" ? "Following": "Follow"
    }));
  };

    render() {
        const { img, companyName, industryType, companyLocation, id, style} = this.props;

        return (
          <WhiteWrapper style={[styles.whiteWrapper, style]} size="lg">
              <AvatarImage src={img}
                size='lg'
                style={styles.img}
                id={id}
              />
              <div style={styles.textDiv}>
                  <label>{companyName}</label>
                  <GrayText text={industryType + " - " + companyLocation}style={styles.text} size="sm" />
              </div>

            <div style={styles.btnDiv}>
              <BorderedButton name={this.state.follow} color="blue" onClick={this.toggleFollow} size="md" />
              <BlueButton name="See Jobs" onClick={this.incrementCounter} />
            </div>
          </WhiteWrapper>

        )
    };
}



CompanyBasicInfo.propTypes = {
    img: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired,
    type: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object

};

const styles = {
    base: {

    },
    img:{
    },
    whiteWrapper: {
        margin: '10px auto',
        padding: '20px',
        textAlign: 'left',
        fontSize: '1.5em',
        position:'relative',
    },
    btnDiv: {
      position: 'absolute',
      right: '2%',
      bottom: 0,
      paddingBottom: '25px'
    },
    textDiv: {
        display: 'inline-block',
        verticalAlign: 'top',
        paddingLeft: '1%',
        paddingTop: '2%'
    },
    text: {
        margin: '0px',
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
}

CompanyBasicInfo = Radium(CompanyBasicInfo);
export default CompanyBasicInfo;
