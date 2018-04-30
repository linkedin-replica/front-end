import React from 'react'
import PropTypes from 'prop-types'
import {paddings, colors} from '../../resources/constants';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import BoldLink from '../typography/BoldLink'
import GrayText from '../typography/GrayText'
import AvatarImage from '../images/AvatarImage'
import Radium from 'radium'

class JobCard extends React.Component {
  render(){
    const {title, jobId, companyName, companyLogo, location, rounded} = this.props;
    return(
      <WhiteWrapper style={styles.base}>
          <div>
          <AvatarImage
              src={companyLogo}
              rounded={rounded}
              style={styles.img}
              size={'md'}
              type={'job'}
              id={jobId}
          />
          </div>

          <BoldLink
              text={title}
              type='job'
              id={jobId}
              style={styles.boldTextColor}
              size='sm'/>
          <GrayText
                text= {companyName}
                size={'sm'}
                style = {styles.boldTextColor}
                />
          <GrayText
              text={location}
              size={'sm'}/>
          </WhiteWrapper>

    );
  }
}
JobCard.propTypes = {
  title: PropTypes.string,
  jobId: PropTypes.string,
  companyName: PropTypes.string,
  companyLogo: PropTypes.string,
  location: PropTypes.string,
}

const styles = {
    imgPading: {padding: '0px 3px'},
    base: {
        padding: '20px 30px'
    },
    boldTextColor: {
        color: colors.black
    },
    grayTextColor: {
        color: colors.darkGray
    },
    mediumGrayTextColor: {
      color: colors.mediumGray
    },
    hrLine: {
        width: '15%',
        margin: '0px'
    }
}


JobCard = Radium(JobCard);
export default JobCard;
