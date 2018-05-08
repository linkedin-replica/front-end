import React, {Component} from 'react';
import Radium from 'radium';
import Notifications from '../components/notifications/Notifications'
import api from '../api/api';

class NotificationsContainer extends Component{
  state = {
        notifications: [],
    }

  componentDidMount() {
        api.getAllNotifications()
            .then(({ data }) => {
                this.setState({
                    notifications: data.results
                })
            })
            .catch(err => console.log(err))
        api.markReadNotifications()
            .then()
            .catch(err => console.log(err))
    }  



  render(){
    
    return <Notifications 
              data = {this.state.notifications}>
           </Notifications>
  }
}
export default Radium(NotificationsContainer)