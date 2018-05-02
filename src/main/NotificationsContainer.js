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
const mockData = [
    { link: "test/1", text:"Esraa Salah liked your post", read: true, timestamp:"123" },
    { link: "profile/2", text:"Hagar Yasser shared an update", read: true, timestamp:"456" },
    { link: "test/3", text:"Hisham Zahran viewed your profile", read: false, timestamp:"789" },
    { link: "profile/4", text:"Mostafa Abdullah viewed your profile", read:false, timestamp:"1011" },
]
export default Radium(NotificationsContainer)