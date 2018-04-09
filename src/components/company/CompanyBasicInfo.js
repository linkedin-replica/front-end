import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import Details from '../details/DetailsHeader';
import GreyAndBorder from '../buttons/AdjacentGreyBorder';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import AvatarImage from '../images/AvatarImage';


class CompanyBasicInfo extends Component {
    render() {
        const { img, header, size, subHeader, type, id} = this.props;
        return (
          <WhiteWrapper style={styles.whiteWrapper} size="lg">
            <AvatarImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A'
              size='xl'
              type={type}
              id={id}
            />
              <Details img={img} rounded header={header} subHeader={subHeader} type={type} id={id}/>
              <div style={styles.btnDiv}>
                <GreyAndBorder greyText="Decline" blueText="Accept" size="md"></GreyAndBorder>
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
};

const styles = {
    base: {

    },
    whiteWrapper: {
        margin: '10px auto',
        padding: '20px',
        textAlign: 'left',
        fontSize: '1.5em',
        position:'relative'
    },
    btnDiv: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: '30%',
      paddingBottom: '25px'
    },
}

CompanyBasicInfo = Radium(CompanyBasicInfo);
export default CompanyBasicInfo;
