import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors } from '../../resources/constants';
import ListAdapter from '../wrappers/ListAdapter';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import GridView from '../wrappers/GridView';
import IconButton from '../buttons/IconButton';

class ProfileSkillsSection extends Component {
    render() {
        const { sectionTitle, data, style, size } = this.props;
        return(
            <WhiteWrapper style={styles.whiteWrapper} size="lg">
                <div style={style}>
                    <h3 style={[styles.base, size ? styles[size] : styles['lg']]}> {sectionTitle} </h3>
                    <IconButton type="add" onClick={this.incrementCounter} />
                    <IconButton type="edit" onClick={this.incrementCounter} />
                    <GridView data={data} gridItemView={WhiteWrapper} horizontalSplit verticalSplit size="lg" />
                </div>
            </WhiteWrapper>
        )};    
}

ProfileSkillsSection.propTypes = {
    sectionTitle: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired, 
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"])
};

const styles = {
    base: {
       display: 'inline-block',
       paddingLeft: '2em',
       paddingRight: '20em',
       fontWeight: 'normal'
    },
    whiteWrapper: {
        margin: '10px auto',
        paddingTop: '0.5em',
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

ProfileSkillsSection = Radium(ProfileSkillsSection);
export default ProfileSkillsSection;