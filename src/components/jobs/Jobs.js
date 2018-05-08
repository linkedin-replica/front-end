import React from 'react'
import PropTypes from 'prop-types'
import { paddings, colors, borders } from '../../resources/constants';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import BoldLink from '../typography/BoldLink'
import GrayText from '../typography/GrayText'
import AvatarImage from '../images/AvatarImage'
import GridView from '../wrappers/GridView'
import JobCard from './JobCard'
import Radium from 'radium'

class Jobs extends React.Component {
    render() {
        const { jobCardsData } = this.props;
        return (

            <WhiteWrapper>
                <div style={styles.center}>
                    <GrayText
                        text="Jobs you may be interested in"
                        size="lg"
                    />
                </div>
                <GridView
                    data={jobCardsData} gridItemView={JobCard} />
            </WhiteWrapper>
        );
    }
}
const styles = {
    base: {

    },
    whiteWrapper: {

    },
    title: {
        size: "md"
    },
    center: {
        paddingLeft: '20px',
        paddingTop: '2px'
    }
}

Jobs.propTypes = {
    jobCardsData: PropTypes.array
}
Jobs = Radium(Jobs);
export default Jobs;
