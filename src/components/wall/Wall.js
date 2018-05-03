import React, { Component } from 'react';
import Radium from 'radium';
import { colors, paddings } from '../../resources/constants';
import ListAdapter from '../wrappers/ListAdapter';
import DetailsHeader from '../details/DetailsHeader';
import Post from '../posts/Post';
import WallHeader from '../wall/WallHeader';
import PropTypes from 'prop-types';
import PostContainer from '../../main/PostContainer';

class Wall extends Component {
    render() {
        const { posts } = this.props
        return (
            <div style={styles.base}>
                <WallHeader id={id} src={src} rounded={rounded} header={header} subHeader={subHeader} type={type} />
                <section>
                    <ListAdapter data={posts} listItemView={PostContainer} verticalSplit />
                </section>
            </div >
        );
    }
}

const styles = {
    base: {
        background: colors.whiteGray,
        display: 'block',
        width: '100%',
        padding: '10px'

    },
    header: {
        textAlign: 'center'
    }
}

WallContainer.propTypes = {
    posts: PropTypes.array
};


Wall = Radium(Wall);
export default Wall;