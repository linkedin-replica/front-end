import React from 'react'
import PropTypes from 'prop-types'
import JobCard from './JobCard'
import GridView from '../wrappers/GridView'
import Radium from 'radium'
class Jobs extends React.Component {
    render () {
        const {jobCardsData}= this.props;
        return (
            <GridView gridItemView={JobCard} data={jobCardsData} />
        );
    }
}

Jobs.propTypes = {
    jobCardsData: PropTypes.array.isRequired
}
Jobs = Radium(Jobs);
export default Jobs;
