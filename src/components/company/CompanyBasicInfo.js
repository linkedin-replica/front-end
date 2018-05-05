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
  state = { isAdmin: false };

    render() {
        const { img, companyName, industryType, companyLocation, companyId, style, isAdmin, borderedText ,borderedFunc ,blueText ,blueFunc} = this.props;

        return (
          <WhiteWrapper style={[styles.whiteWrapper, style]} size="lg">
              <AvatarImage src={img}
                size='lg'
                style={styles.img}
                companyId={companyId}
              />
              <div style={styles.textDiv}>
                  <label>{companyName}</label>
                  <GrayText text={industryType + " - " + companyLocation}style={styles.text} size="sm" />
              </div>

              {isAdmin ?
                <div style={styles.btnDiv}>
                <BlueButton name={blueText} onClick={() => blueFunc()} />   </div> :
                  <div style={styles.btnDiv}>
                    <BorderedButton name={borderedText} color="blue" onClick={() => borderedFunc()} size="md"/>
                    <BlueButton name={blueText} onClick={() => blueFunc()} />
                  </div>
              }
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
      paddingBottom: '25px',
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
