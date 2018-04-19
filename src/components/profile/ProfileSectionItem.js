/**
    The ProfileSectionItem header used in all headers in different sizes,
    sm: Small
    md: Medium
    lg: Large
    By default it's set to md
*/
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors } from '../../resources/constants';
import GrayText from '../typography/GrayText';
import BlackText from '../typography/BlackText';
import AvatarImage from '../images/AvatarImage';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import IconButton from '../buttons/IconButton';

class ProfileSectionItem extends Component {
    render() {
        const { title, company, companyId, startDate, endDate, description, imgSrc, style, size } = this.props;
        return(
        <div style={[style, styles.base]}>
            <Link to={`/company/${companyId}`}>
                    <AvatarImage src={imgSrc} type="company" id={companyId} size="lg" style={styles.imgDiv}/>
                    <span style={styles.textDiv}>
                        <BlackText text={title} size="md" style={[styles.text, styles.title]}/>
                        <BlackText text={company} size="md" style={styles.text}/>
                        <GrayText text={startDate + " - " + endDate} size="sm" style={styles.text}/>
                        <GrayText text={description} size="sm" style={styles.description}/>
                    </span>
            </Link>
            <div style={styles.btnDiv}>
                <IconButton type="edit" onClick={this.incrementCounter} />
            </div>
        </div>        
    )};    
}

ProfileSectionItem.propTypes = {
    title: PropTypes.string.isRequired, 
    company: PropTypes.string.isRequired, 
    companyId: PropTypes.string.isRequired, 
    startDate: PropTypes.string.isRequired, 
    endDate: PropTypes.string.isRequired,  
    duration: PropTypes.string, 
    description: PropTypes.string, 
    imgSrc: PropTypes.string, 
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"])
};

const styles = {
    base: {
        display: 'inline-block',
        marginLeft:'20px',
        width:'100%'
    },
    imgDiv: {
        display: 'inline-block',
        paddingRight: '2%',
        paddingTop: '2%',
        float: 'left'
    },
    textDiv: {
        display: 'inline-block',
        verticalAlign:'top',
        float: 'left',
    },
    btnDiv: {
        display: 'inline-block',
        float: 'right',
        // ":hover": {
        //      visibility: 'visible',
        //   }
    },
    title: {
       fontWeight:'bold'
    },
    text: {
        margin:'5px',
    },
    description: {
        margin:'5px',
        wordWrap: 'break-word',
        maxWidth:'500px',
    },
    sm: {
        fontSize: '0.5em'
    },
    md: {
        fontSize: '1em'
    },
    lg: {
        fontSize: '1.5em'
    }
}

ProfileSectionItem = Radium(ProfileSectionItem);
export default ProfileSectionItem;
