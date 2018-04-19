import axios from 'axios'

const BASE_URL = 'http://localhost:8081/api/'

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
  // Signing
  register: (user) => {
    return axiosInstance.post('signing/signUp', user)
  },
  signIn: (user) => {
    return axiosInstance.post('signing/signIn', user)
  },
  signOut: (user) => {
    localStorage.removeItem('access-token')
  },
  saveLoginToken: (newToken) => {
    localStorage.setItem('access-token', newToken)
  },

  // Chat
  initChat: (receiverId) => {
    return axiosInstance.get('chat/register', { params: { receiverId } })
  },

  // Connections
  acceptFriendRequest: (userId) => {
    return axiosInstance.post('connections/acceptFriendRequest', userId)
  },
  addFriend: (userId) => {
    return axiosInstance.post('connections/addFriend', userId)
  },
  unfriend: (userId) => {
    return axiosInstance.delete(`connections/unfriend`, userId)
  },
  blockUser: (userId) => {
    return axiosInstance.post('connections/block', userId)
  },
  unBlockUser: (userId) => {
    return axiosInstance.post('connections/unblock', userId)
  },

  // Edit Info
  getUserProfile: (userId) => {
    return axiosInstance.get(`editinfo/userGet/${userId}`)
  },
  updateUserProfile: (updateProfile) => {
    return axiosInstance.put(`editinfo/userUpdate`, updateProfile)
  },
  addCV: (cvURL) => {
    return axiosInstance.post('editinfo/userCvAdd', cvURL)
  },
  deleteCV: (cvURL) => {
    return axiosInstance.delete(`editinfo/userCvDelete`, cvURL)
  },
  addUserSkill: (skill) => {
    return axiosInstance.put('editinfo/userAddSkill', skill)
  },
  deleteUserSkill: (skill) => {
    return axiosInstance.post('editinfo/userDeleteSkill', skill)
  },

  // Company
  getCompanyProfile: (companyId) => {
    return axiosInstance.get(`editinfo/companyGet/${companyId}`)
  },
  addCompanyProfile: (company) => {
    return axiosInstance.post(`editinfo/companyAdd`, company)
  },
  updateCompanyProfile: (company) => {
    return axiosInstance.put(`editinfo/companyUpdate`, company)
  },

  // Jobs
  postJobCompany: (job) => {
    return axiosInstance.post('jobs/postJobCompany', job)
  },
  getJobListing: (jobId) => {
    return axiosInstance.get(`jobs/jobListing${companyId}`)
  },
  getAppliedJobs: (companyId) => {
    return axiosInstance.get(`jobs/viewAppliedJobs${companyId}`)
  },
  respondToApplicant: (job) => {
    return axiosInstance.put('jobs/respondToApplicant', job)
  },
  deleteJob: (jobId) => {
    return axiosInstance.delete('jobs/deleteJobCompany', jobId)
  },

  // Articles
  addArticle: (article) => {
    return axiosInstance.post('article', article)
  },

  // Notifications
  getAllNotifications: () => {
    return axiosInstance.get(`notifications/all/`)
  },
  markReadNotifications: () => {
    return axiosInstance.get(`notifications/markRead/`)
  },

  // Recommendations
  getFriendRecommendations: () => {
    return axiosInstance.get(`recommendations/users/`)
  },
  getTrendingArticlesRecommendations: () => {
    return axiosInstance.get(`recommendations/trending.articles/`)
  },
  getJobRecommendations: () => {
    return axiosInstance.get(`recommendations/jobs`)
  },

  // Profile
  addBookmarkPost: (post) => {
    return axiosInstance.post('wall/addBookmark', post)
  },
  getBookmarks: () => {
    return axiosInstance.get(`wall/bookmarks/`)
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
  getPost: (postId) => {
    return axiosInstance.get(`posts/${postId}`)
  },
  deleteComment: (comment) => {
    return axiosInstance.delete(`comments`, comment)
  },
  deleteLike: (like) => {
    return axiosInstance.delete(`comment/likes`, like)
  },
  deleteReply: (reply) => {
    return axiosInstance.delete(`comment/replies`, reply)
  },
  editArticle: (article) => {
    return axiosInstance.put(`articles`, article)
  },
  editComment: (comment) => {
    return axiosInstance.put(`comments`, comment)
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
  },

  // Search
  searchUser: (user) => {
    return axiosInstance.post(`search/user/`, user)
  },
  searchCompany: (company) => {
    return axiosInstance.post(`search/company/`, company)
  },
  searchPost: (post) => {
    return axiosInstance.post(`search/post/`, post)
  },
  searchJob: (job) => {
    return axiosInstance.post(`search/job/`, job)
  },
}
