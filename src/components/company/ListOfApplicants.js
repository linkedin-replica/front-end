import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors } from '../../resources/constants';
import JobApplicant from '../company/JobApplicant';
import ListAdapter from '../wrappers/ListAdapter';
import WhiteWrapper from '../wrappers/WhiteWrapper';


class ListOfApplicants extends Component {
    render() {
        const { data } = this.props;
        return (
            <ListAdapter data={mockData} listItemView={JobApplicant} verticalSplit />
        )
    };
}

const mockData = [
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A", rounded: true, header:"Yara Yehia", subHeader:"A Computer Science Student at the German University in Cairo", type:"profile", id:"1" },
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A", rounded: true, header: "Hisham Zahran", subHeader:"A Computer Science Student at the German University in Cairo", type:"profile", id:"2" },
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A", rounded: true, header: "Esraa Salah", subHeader:"A Computer Science Student at the German University in Cairo", type:"profile", id:"3" },
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A", rounded: true, header: "Rana Saeed", subHeader:"A Computer Science Student at the German University in Cairo", type:"profile", id:"4" }
]


ListOfApplicants.propTypes = {
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
        fontSize: '1.5em'
    }
}

ListOfApplicants = Radium(ListOfApplicants);
export default ListOfApplicants;
