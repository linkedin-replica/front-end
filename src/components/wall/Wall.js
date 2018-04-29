import React, { Component } from 'react';
import Radium from 'radium';
import { colors, paddings } from '../../resources/constants';
import ListAdapter from '../wrappers/ListAdapter';
import DetailsHeader from '../details/DetailsHeader';
import Post from '../posts/Post';
import WallHeader from '../wall/WallHeader';
import PostContainer from '../posts/PostContainer';

class Wall extends Component {
    render() {
        const { id, src, rounded, header, subHeader, type } = this.props.data.user
        console.log(this.props.data.user)
        return (
            <div style={styles.base}>
                <WallHeader id={id} src={src} rounded={rounded} header={header} subHeader={subHeader} type={type} />
                <section>
                    <ListAdapter data={this.props.posts} listItemView={PostContainer} verticalSplit />
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


Wall = Radium(Wall);
export default Wall;