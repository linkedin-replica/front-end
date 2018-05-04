import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8081/api/'
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
// axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, access-token';
// axios.defaults.headers.post['access-token'] = 'eyJhbGciOiJIUzUxMiJ9.eyJzY29wZSI6InNlbGYvZ3JvdXBzL2FkbWlucyIsImlzcyI6ImxpbmtlZGluLmxvZ2luIiwiZXhwIjoxNTI0NjY1MDUzLCJpYXQiOjE1MjQ2NjE0NTMsImVtYWlsIjoiaG16YWhyYW4yQGdtYWlsLmNvbSIsImp0aSI6IjgyMWNjMmQ0LWQ0OTctNDZjZi05NzM3LTNmM2NhNDg4ODY5ZiJ9.CegtM60SNP3g2GRKGDaSN-2BWe0B0xzU7JR81NWvSz7Kpbz_R09t_f16Efbk9MJUF3MVs-gnGe9lDm40h1P-Qg';

axios.interceptors.request.use(config => {
  if (localStorage.getItem('access-token'))
    config.headers['access-token'] = localStorage.getItem('access-token')
  config.headers['Content-Type'] = 'application/json;charset=UTF-8';
  return config
})

export default {
  // Signing
  register: (user) => {
    return axios.post('signing/signUp', user)
  },
  signIn: (user) => {
    return axios.post('signing/signIn', user)
  },
  signOut: (user) => {
    localStorage.removeItem('access-token')
  },
  saveLoginToken: (newToken) => {
    localStorage.setItem('access-token', newToken)
  },
  getLoggedInUserDetails: () => {
    return axios.get('/signing/getLoggedInUserInfo')
  },

  // Chat
  initChat: (receiverId) => {
    return axios.get('chat/register', { params: { receiverId } })
  },

  // Connections
  acceptFriendRequest: (userId1) => {
    return axios.post('connections/acceptFriendRequest', { userId1 })
  },
  addFriend: (userId1) => {
    return axios.post('connections/addFriend', { userId1 })
  },
  unfriend: (userId1) => {
    return axios.delete(`connections/unfriend`, { userId1 })
  },
  blockUser: (userId1) => {
    return axios.post('connections/block', { userId1 })
  },
  unBlockUser: (userId1) => {
    return axios.post('connections/unblock', { userId1 })
  },
  getFriendsList: () => {
    return axios.get('connections/getFriendsList')
  },
  getFriendRequests: () => {
    return axios.get('connections/getFriendRequests')
  },

  // Edit Info
  getUserProfile: () => {
    return axios.get(`editinfo/userGet`)
  },
  getUserProfileById: (profileId) => {
    return axios.get(`editinfo/userGet`, { query: { profileId } })
  },
  updateUserProfile: (updatedProfile) => {
    return axios.put(`editinfo/userUpdate`, updatedProfile)
  },
  addCV: (cvURL) => {
    return axios.post('editinfo/userCvAdd', cvURL)
  },
  deleteCV: (cvURL) => {
    return axios.delete(`editinfo/userCvDelete`, cvURL)
  },
  addUserSkill: (skill) => {
    return axios.put('editinfo/userAddSkill', skill)
  },
  deleteUserSkill: (skill) => {
    return axios.post('editinfo/userDeleteSkill', skill)
  },

  // Company
  getCompanyProfile: (companyId) => {
    return axios.get(`editinfo/companyGet/${companyId}`)
  },
  addCompanyProfile: (company) => {
    return axios.post(`editinfo/companyAdd`, company)
  },
  updateCompanyProfile: (company) => {
    return axios.put(`editinfo/companyUpdate`, company)
  },

  // Jobs
  postJobCompany: (job) => {
    return axios.post('jobs/postJobCompany', job)
  },
  getJobListing: (jobId) => {
    return axios.get(`jobs/jobListing/${jobId}`)
  },
  getAppliedJobs: (companyId) => {
    return axios.get(`jobs/viewAppliedJobs/${companyId}`)
  },
  respondToApplicant: (job) => {
    return axios.put('jobs/respondToApplicant', job)
  },
  deleteJob: (jobId) => {
    return axios.delete('jobs/deleteJobCompany', { jobId })
  },

  // Articles
  addArticle: (article) => {
    return axios.post('article', article)
  },

  // Notifications
  getAllNotifications: () => {
    return axios.get(`notifications/all/`)
  },
  markReadNotifications: () => {
    return axios.get(`notifications/markRead/`)
  },

  // Recommendations
  getFriendRecommendations: () => {
    return axios.get(`recommendations/users/`)
  },
  getTrendingArticlesRecommendations: () => {
    return axios.get(`recommendations/trending.articles/`)
  },
  getJobRecommendations: () => {
    return axios.get(`recommendations/jobs`)
  },

  // Wall
  bookmarkPost: (postId) => {
    return axios.post('wall/addBookmark', { postId })
  },
  getBookmarkedPosts: () => {
    return axios.get(`wall/getBookmarks`)
  },
  deleteBookmarkedPost: (postId) => {
    return axios.post('wall/deleteBookmark', { postId })
  },
  getPosts: () => {
    return axios.get(`wall/posts`)
  },
  addPost: (authorId, text, img, video) => {
    return axios.post('wall/addPost', { authorId, text, images: [img], videos: [video], isCompanyPost: false, isArticle: false })
  },
  editPost: (postId, authorId, type, text, headLine, likesCount, img, video, commentsCount, isArticle) => {
    return axios.put(`wall/editPost`, { postId, authorId, type, text, headLine, likesCount, images: [img], videos: [video], commentsCount, isArticle: true })
  },
  deletePost: (postId) => {
    return axios.delete(`wall/deletePost`, { postId })
  },
  addPostComment: (postComment) => {
    return axios.post('wall/addComment', postComment)
  },
  deleteComment: (commentId) => {
    return axios.delete(`wall/deleteComment`, { commentId })
  },
  likePost: (postLike) => {
    return axios.post('wall/addLike', postLike)
  },
  deleteLike: (likeId) => {
    return axios.delete(`wall/deleteLike`, { likeId })
  },
  replyPost: (reply) => {
    return axios.post('wall/addReply', reply)
  },
  editReply: (reply) => {
    return axios.put(`wall/editReply`, reply)
  },
  deleteReply: (replyId) => {
    return axios.delete(`wall/deleteReply`, { replyId })
  },
  editArticle: (article) => {
    return axios.put(`wall/editArticle`, article)
  },
  editComment: (comment) => {
    return axios.put(`wall/editComment`, comment)
  },

  // Search
  searchUser: (user) => {
    return axios.post(`search/user/`, user)
  },
  searchCompany: (company) => {
    return axios.post(`search/company/`, company)
  },
  searchPost: (post) => {
    return axios.post(`search/post/`, post)
  },
  searchJob: (job) => {
    return axios.post(`search/job/`, job)
  },
}
