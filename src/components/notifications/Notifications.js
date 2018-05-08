import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors } from '../../resources/constants';
import ListAdapter from '../wrappers/ListAdapter';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import Notification from '../notifications/Notification';

class Notifications extends Component {
    render() {
        const { data,
            style,
            size,
            verticalSplit } = this.props;
        return (
            <ListAdapter
                data={data}
                style={style}
                size={size}
                verticalSplit={verticalSplit}
                listItemView={Notification} />
        )
    };
}

// const mockData = [
//     { link: "test/1", text:"Esraa Salah liked your post", read: true, timestamp:"123" },
//     { link: "profile/2", text:"Hagar Yasser shared an update", read: true, timestamp:"456" },
//     { link: "test/3", text:"Hisham Zahran viewed your profile", read: false, timestamp:"789" },
//     { link: "profile/4", text:"Mostafa Abdullah viewed your profile", read:false, timestamp:"1011" },
// ]


Notifications.propTypes = {
    data: PropTypes.array,
    style: PropTypes.object, // Content style
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    verticalSplit: PropTypes.bool
};

const styles = {
    base: {

    },
    whiteWrapper: {

    }
}

Notifications = Radium(Notifications);
export default Notifications;