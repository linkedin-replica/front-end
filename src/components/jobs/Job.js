import React from 'react'
import PropTypes from 'prop-types'
import { paddings, colors, borders } from '../../resources/constants';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import BoldLink from '../typography/BoldLink'
import GrayText from '../typography/GrayText'
import BlackText from '../typography/BlackText'
import AvatarImage from '../images/AvatarImage'
import Radium from 'radium'
import DetailsHeader from '../details/DetailsHeader'
import GreyAndBorder from '../buttons/AdjacentGreyBorder';
import JobCard from '../jobs/JobCard'
class Job extends React.Component {
  render() {
    const { positionName, jobId, companyName, companyPicture, location, rounded, jobBrief, requiredSkills } = this.props;
    return (
      <div>
        <WhiteWrapper style={styles.upperWhiteWrapper} size="lg">
          <DetailsHeader img={companyPicture}
            rounded
            header={positionName}
            subHeader={companyName + " " + location}
            type="jobs"
            id={jobId}
            size="md" />
          <div style={styles.btnDiv}>
            <GreyAndBorder
              greyText="Save"
              blueText="Apply"
              size="md">
            </GreyAndBorder>
          </div>
        </WhiteWrapper>
        <WhiteWrapper style={styles.lowerWhiteWrapper} size="lg">
          <BlackText text="Job Description" size="lg" style={styles.bold}>
          </BlackText>
          <BlackText text={jobBrief} size="md">
          </BlackText>
          <BlackText text="Essential Requirements" size="lg" style={styles.bold}>
          </BlackText>
          <ul style={styles.ul}>
            {
              requiredSkills.map((item, index) => (
                <li key={`${index}`}
                  style={styles.noSplit}>
                  {item}
                </li>
              ))
            }
          </ul>
        </WhiteWrapper>
      </div>

    );



  }


}

Job.propTypes = {
  positionName: PropTypes.string,
  jobId: PropTypes.string,
  companyName: PropTypes.string,
  companyPicture: PropTypes.string,
  location: PropTypes.string,
  requiredSkills: PropTypes.array,
  jobBrief: PropTypes.string
}

const styles = {
  base: {
  },
  bold: {
    fontWeight: 'bold'
  },
  header: {
  }, upperWhiteWrapper: {
    padding: '20px',
    textAlign: 'left',
    fontSize: '1.5em',
    position: 'relative',
    height: '200px',
    margin: '15px'
  },
  split: {
    margin: '10px auto',
    borderBottom: '1px solid',
    borderBottomColor: colors.lightGray,
    marginLeft: '3%',
    maxWidth: '40em',
  },
  ul: {
    listStyleType: 'circle',
    paddingLeft: '25px',

  },
  noSplit: {
    margin: 0
  },
  lowerWhiteWrapper: {
    padding: '40px',
    textAlign: 'left',
    fontSize: '1.5em',
    position: 'relative',
    margin: '15px'
  },
  btnDiv: {
    position: 'absolute',
    left: '75px',
    bottom: 0,
    width: '30%',
    paddingLeft: '25px',
    paddingBottom: '25px'
  },
  blueBorder: {
    border: `${borders.button.width.normal} solid ${colors.darkBlue}`,
    color: colors.darkBlue,
    ":hover": {
      background: colors.darkBlue,
      color: colors.white
    },

  },
  center: {
    position: 'absolute',
    bottom: '20px',
    right: '0',
    left: '0',
    margin: '0 auto'
  }
}


Job = Radium(Job);
export default Job;
