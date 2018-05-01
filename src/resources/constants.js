// color pallete
import { toast } from 'react-toastify';
export const colors = {
  darkBlue: '#0077B5',
  mediumBlue: '#0077A0',
  lightBlue: '#F2F6F8',
  black: '#000000',
  white: '#FFFFFF',
  darkGray: '#313335',
  mediumGray: '#86888A',
  lightGray: '#CACCCE',
  whiteGray: '#F5F5F5',
  lightGreen: '#23414B'
}

export const icons = {
  like: "fa fa-thumbs-up",
  share: "fa fa-share",
  comment: "fa fa-comment",
  write: "fa fa-edit",
  image: "fa fa-camera-retro",
  video: "fa fa-film",
  home: "fa fa-home",
  connections: "fa fa-users",
  notifications: "fa fa-bell",
  jobs: "fa fa-briefcase",
  chat: "fa fa-comments",
  profile: 'fa fa-user-circle',
  articles: 'fa fa-book',
  edit: 'fa fa-edit',
  add: 'fa fa-plus',
  skill: 'fa fa-wrench',
  logo: 'fa fa-linkedin'
}

export const paddings = {
  button: '5px 10px',
  wrapper: '15px'
}

export const borders = {
  button: {
    width: {
      normal: '1px',
      active: '2px'
    },
    radius: {
      normal: '2px',
      rounded: '50px'
    }
  },
  wrapper: {
    radius: '2px',
  }
}

export const toastPosition = {
  position: toast.POSITION.BOTTOM_LEFT
}
