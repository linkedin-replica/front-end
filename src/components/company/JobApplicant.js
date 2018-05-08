import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import Details from '../details/DetailsHeader';
import GreyAndBorder from '../buttons/AdjacentGreyBorder';
import WhiteWrapper from '../wrappers/WhiteWrapper';


class JobApplicant extends Component {
    render() {
        const { img, header, subHeader, type, id } = this.props;
        return (
            <WhiteWrapper style={styles.whiteWrapper} size="lg">
                <Details img={img} rounded header={header} subHeader={subHeader} type={type} id={id} />
                <div style={styles.btnDiv}>
                    <GreyAndBorder greyText="Decline" blueText="Accept" size="md"></GreyAndBorder>
                </div>
            </WhiteWrapper>

        )
    };
}

JobApplicant.propTypes = {
    img: PropTypes.string,
    header: PropTypes.string,
    subHeader: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
};

const styles = {
    base: {

    },
    whiteWrapper: {
        margin: '10px auto',
        padding: '20px',
        textAlign: 'left',
        fontSize: '1.5em',
        position: 'relative'
    },
    btnDiv: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '30%',
        paddingBottom: '25px'
    },
}

JobApplicant = Radium(JobApplicant);
export default JobApplicant;
