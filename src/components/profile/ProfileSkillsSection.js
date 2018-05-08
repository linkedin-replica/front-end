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
        return (
            <WhiteWrapper style={styles.base} size="lg">
                <h3 style={[styles.text, size ? styles[size] : styles['lg']]}> {sectionTitle} </h3>
                <IconButton style={styles.editButton} type="edit" onClick={this.incrementCounter} />
                <IconButton style={styles.addButton} type="add" onClick={this.incrementCounter} />
                <GridView data={data} gridItemView={WhiteWrapper} horizontalSplit verticalSplit size="lg" />
            </WhiteWrapper>
        )
    };
}

ProfileSkillsSection.propTypes = {
    sectionTitle: PropTypes.string,
    data: PropTypes.array,
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"])
};

const styles = {
    base: {
        margin: '10px auto',
        paddingTop: '0.5em',
        width: '100%',
        position: 'relative',
    },
    text: {
        display: 'inline-block',
        paddingLeft: '2em',
        paddingRight: '20em',
        fontWeight: 'normal'
    },
    addButton: {
        position: 'absolute',
        right: '20px',
        top: '20px'
    },
    editButton: {
        position: 'absolute',
        right: '50px',
        top: '20px'
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