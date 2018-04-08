import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
})

axiosInstance.interceptors.request.us(config => {
  config.headers['access-token'] = localStorage.getItem('access-token') || ''
  return config
})

export default {
  register: (user) => {
    return axiosInstance.post('auth/register', user)
  },
  login: (user) => {
    return axiosInstance.post('auth/login', user)
  },
  saveLoginToken: (newToken) => {
    localStorage.setItem('access-token', newToken)
  },
  acceptFriendRequest: (userId) => {
    return axiosInstance.post('acceptFriendRequest', userId)
  },
  addCV: (cvURL) => {
    return axiosInstance.post('cv', cvURL)
  },
  addSkill: (skill) => {
    return axiosInstance.post('userAddSkill', skill)
  },
  addFriend: (userId) => {
    return axiosInstance.post('add-friend', userId)
  },
  addArticle: (article) => {
    return axiosInstance.post('article', article)
  },
  blockUser: (userId) => {
    return axiosInstance.post('block-user', userId)
  },
  bookmarkPost: (post) => {
    return axiosInstance.post('bookmark', post)
  },
  createJob: (job) => {
    return axiosInstance.post('createJob', job)
  },
  addPost: (post) => {
    return axiosInstance.post('post', post)
  },
  addPostComment: (postComment) => {
    return axiosInstance.post('comment', postComment)
  },
  addPostLike: (postLike) => {
    return axiosInstance.post('like', postLike)
  },
  addReply: (reply) => {
    return axiosInstance.post('reply', reply)
  },
  reportUser: (userId) => {
    return axiosInstance.post('report-user', userId)
  },
  getArticle: (articleId) => {
    return axiosInstance.get(`articles/${article}`)
  },
  getBookmarks: (userId) => {
    return axiosInstance.get(`wall/bookmarks/${userId}`)
  },
  getCompanyProfile: (companyId) => {
    return axiosInstance.get(`companies/${companyId}`)
  },
  getFriendRecommendations: (userId) => {
    return axiosInstance.get(`friendRecommendation/${userId}`)
  },
  getFriendRecommendations: (userId) => {
    return axiosInstance.get(`friendRecommendation/${userId}`)
  },
  getAllNotifications: (userId) => {
    return axiosInstance.get(`notifications/all/${userId}`)
  },
  getPost: (postId) => {
    return axiosInstance.get(`posts/${postId}`)
  },

  searchUser: (user) => {
    return axiosInstance.get(`search/user/${user}`)
  },
  searchCompany: (company) => {
    return axiosInstance.get(`search/company/${company}`)
  },
  searchPost: (post) => {
    return axiosInstance.get(`search/post/${post}`)
  },
  searchJob: (job) => {
    return axiosInstance.get(`search/job/${job}`)
  },
  getTrendingArticles: (userId) => {
    return axiosInstance.get(`trendingArticles/${userId}`)
  },
  getUserProfile: (userId) => {
    return axiosInstance.get(`users/${userId}`)
  },
  deleteComment: (comment) => {
    return axiosInstance.delete(`comments`, comment)
  },
  deleteCV: (cvURL) => {
    return axiosInstance.delete(`cv`, cvURL)
  },
  deleteJob: (jobId) => {
    return axiosInstance.delete(`jobs`, jobId)
  },
  deleteJob: (jobId) => {
    return axiosInstance.delete(`jobs`, jobId)
  },
  deleteLike: (like) => {
    return axiosInstance.delete(`comment/likes`, like)
  },
  deleteReply: (reply) => {
    return axiosInstance.delete(`comment/replies`, reply)
  },
  unfriend: (userId) => {
    return axiosInstance.delete(`friend`, userId)
  },
  unblock: (userId) => {
    return axiosInstance.delete(`block`, userId)
  },
  editArticle: (article) => {
    return axiosInstance.put(`articles`, article)
  },
  editComment: (comment) => {
    return axiosInstance.put(`comments`, comment)
  },
  editCompanyProfile: (company) => {
    return axiosInstance.put(`company/edit`, company)
  },
  editJob: (job) => {
    return axiosInstance.put(`jobs`, job)
  },
  editJobAsCompany: (job) => {
    return axiosInstance.put(`company/jobs/edit`, job)
  },
  editPost: (post) => {
    return axiosInstance.put(`post`, post)
  },
  editUserProfile: (profile) => {
    return axiosInstance.put(`edit-profile`, profile)
  },
  editReply: (reply) => {
    return axiosInstance.put(`comment/replies`, reply)
  }
}
