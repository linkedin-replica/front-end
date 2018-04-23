import axios from 'axios'

const BASE_URL = 'http://localhost:8081/api/'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
})

axiosInstance.interceptors.request.use(config => {
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
  getLoggedInUserDetails: () => {
    return axiosInstance.get('signing/getLoggedInUserInfo')
  },

  // Chat
  initChat: (receiverId) => {
    return axiosInstance.get('chat/register', { params: { receiverId } })
  },

  // Connections
  acceptFriendRequest: (userId) => {
    return axiosInstance.post('connections/acceptFriendRequest', { userId })
  },
  addFriend: (userId) => {
    return axiosInstance.post('connections/addFriend', { userId })
  },
  unfriend: (userId) => {
    return axiosInstance.delete(`connections/unfriend`, { userId })
  },
  blockUser: (userId) => {
    return axiosInstance.post('connections/block', { userId })
  },
  unBlockUser: (userId) => {
    return axiosInstance.post('connections/unblock', { userId })
  },

  // Edit Info
  getUserProfile: (userId) => {
    return axiosInstance.get(`editinfo/userGet/${userId}`)
  },
  updateUserProfile: (updatedProfile) => {
    return axiosInstance.put(`editinfo/userUpdate`, updatedProfile)
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
    return axiosInstance.get(`jobs/jobListing/${jobId}`)
  },
  getAppliedJobs: (companyId) => {
    return axiosInstance.get(`jobs/viewAppliedJobs/${companyId}`)
  },
  respondToApplicant: (job) => {
    return axiosInstance.put('jobs/respondToApplicant', job)
  },
  deleteJob: (jobId) => {
    return axiosInstance.delete('jobs/deleteJobCompany', { jobId })
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

  // Wall
  bookmarkPost: (postId) => {
    return axiosInstance.post('wall/addBookmark', { postId })
  },
  getBookmarkedPosts: () => {
    return axiosInstance.get(`wall/getBookmarks`)
  },
  deleteBookmarkedPost: (postId) => {
    return axiosInstance.post('wall/deleteBookmark', { postId })
  },
  getPosts: () => {
    return axiosInstance.get(`wall/posts`)
  },
  addPost: (authorId, type, text, headLine, img, video) => {
    return axiosInstance.post('wall/addPost', { authorId, type, text, headLine, images: [img], videos: [video], isArticle: false })
  },
  editPost: (postId, authorId, type, text, headLine, likesCount, img, video, commentsCount, isArticle) => {
    return axiosInstance.put(`wall/editPost`, { postId, authorId, type, text, headLine, likesCount, images: [img], videos: [video], commentsCount, isArticle: true })
  },
  deletePost: (postId) => {
    return axiosInstance.delete(`wall/deletePost`, { postId })
  },
  addPostComment: (postComment) => {
    return axiosInstance.post('wall/addComment', postComment)
  },
  deleteComment: (commentId) => {
    return axiosInstance.delete(`wall/deleteComment`, { commentId })
  },
  likePost: (postLike) => {
    return axiosInstance.post('wall/addLike', postLike)
  },
  deleteLike: (likeId) => {
    return axiosInstance.delete(`wall/deleteLike`, { likeId })
  },
  replyPost: (reply) => {
    return axiosInstance.post('wall/addReply', reply)
  },
  editReply: (reply) => {
    return axiosInstance.put(`wall/editReply`, reply)
  },
  deleteReply: (replyId) => {
    return axiosInstance.delete(`wall/deleteReply`, { replyId })
  },
  editArticle: (article) => {
    return axiosInstance.put(`wall/editArticle`, article)
  },
  editComment: (comment) => {
    return axiosInstance.put(`wall/editComment`, comment)
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
