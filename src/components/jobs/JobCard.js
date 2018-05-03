import React from 'react'
import PropTypes from 'prop-types'
import {paddings, colors, borders} from '../../resources/constants';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import BoldLink from '../typography/BoldLink'
import GrayText from '../typography/GrayText'
import AvatarImage from '../images/AvatarImage'
import Radium from 'radium'

class JobCard extends React.Component {
  render(){
    const {title, jobId, companyName, companyLogo, location, rounded} = this.props;
    return(
      <WhiteWrapper style={styles.whiteWrapper}>
      <div>
      <AvatarImage
      src={companyLogo}
      rounded
      style={styles.img}
      size= "lg"
      type= "job"
      id={jobId}
      />
      </div>

      <BoldLink
        text={title}
        type='job'
        id={jobId}
        size='md'/>
      <GrayText
      text= {companyName}
      size={'md'}
      />
      <GrayText
      text={location}
      size={'md'}/>
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
  base: {
  },
  whiteWrapper: {
    width:'100%',
    height: '220px',
    margin: '0px',
    padding: '20px',
    textAlign: 'center',
    position:'relative',
    align: 'center'
  },
  blueBorder: {
    border: `${borders.button.width.normal} solid ${colors.darkBlue}`,
    color: colors.darkBlue,
    ":hover": {
      background: colors.darkBlue,
      color: colors.white
    },

  },
  center : {
    position: 'absolute',
    bottom : '20px',
    right : '0',
    left: '0',
    margin: '0 auto'
  }
}


JobCard = Radium(JobCard);
export default JobCard;
