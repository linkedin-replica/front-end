import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors } from '../../resources/constants';
import DetailsHeader from '../details/DetailsHeader';

class Posts extends Component {

    render() {
        const { postContent, ...rest} = this.props;
        return(
        <div style = {styles.base}> 
            <DetailsHeader {...rest}/>
            <div>
                {postContent}
            </div>
        </div>
    )}; 
}

Posts.propTypes = {
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    src: PropTypes.string,
    rounded: PropTypes.bool,
    header: PropTypes.string,
    subHeader: PropTypes.string,
    postContent: PropTypes.string, 
    type: PropTypes.string,
    id: PropTypes.string
};

const styles = {
    base: {
     borderStyle:'solid',
     borderColor: colors.mediumGray,
     borderWidth: '1px',
     padding: '3%',
     borderRadius: '2%'
    }
  }

Posts = Radium(Posts);
export default Posts;