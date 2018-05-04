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
  removeLoginToken: () => {
    localStorage.removeItem('access-token')
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
    return axios.post(`connections/unfriend`, { userId1 })
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

  // Edit Info
  getUserProfile: () => {
    return axios.get(`editinfo/userGet`)
  },
  getUserProfileById: (profileId) => {
    return axios.get(`editinfo/userGet`, { params: { profileId } })
  },
  updateUserProfile: (updatedProfile) => {
    return axios.put(`editinfo/userUpdate`, updatedProfile)
  },
  addCV: (cvURL) => {
    return axios.post('editinfo/userCvAdd', cvURL)
  },
  deleteCV: (cvURL) => {
    return axios.post(`editinfo/userCvDelete`, cvURL)
  },
  addUserSkill: (skill) => {
    return axios.put('editinfo/userAddSkill', skill)
  },
  deleteUserSkill: (skill) => {
    return axios.post('editinfo/userDeleteSkill', skill)
  },

  // Company
  getCompanyProfile: (companyId) => {
    return axios.get(`editinfo/companyGet/`, { params: { companyId } })
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
    return axios.post('jobs/deleteJobCompany', { jobId })
  },

  // Articles
  getArticle: (postId) => {
    return axios.get(`wall/getPost`, { params: { postId } })
  },
  addArticle: (authorId, text, img, video, isCompanyPost) => {
    return axios.post('wall/addPost', { authorId, text, images: [img], videos: [video], isCompanyPost, isArticle: true })
  },
  editArticle: (article) => {
    return axios.put(`wall/editArticle`, article)
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
  getCompanyPosts: (companyId, limit) => {
    return axios.get(`wall/getPosts`, { params: { companyId, limit } })
  },
  getNewsFeed: (limit) => {
    return axios.get(`wall/getNewsfeed`, { params: { limit } })
  },
  getPostComments: (parentPostId, authorId, limit) => {
    return axios.get(`wall/getComments`, { params: { parentPostId, authorId, limit } })
  },
  getPostLikes: (postId) => {
    return axios.get(`wall/getPostLikes`)
  },
  getCommentLikes: (postId) => {
    return axios.get(`wall/getCommentLikes`)
  },
  addPost: (authorId, text, img, video, isCompanyPost) => {
    return axios.post('wall/addPost', { authorId, text, images: [img], videos: [video], isCompanyPost, isArticle: false })
  },
  editPost: (postId, text) => {
    return axios.put(`wall/editPost`, { postId, text })
  },
  deletePost: (postId) => {
    return axios.post(`wall/deletePost`, { postId })
  },
  addPostComment: (parentPostId, authorId, text) => {
    return axios.post('wall/addComment', { parentPostId, authorId, text })
  },
  deleteComment: (commentId) => {
    return axios.post(`wall/deleteComment`, { commentId })
  },
  likePost: (likerId, postId) => {
    return axios.post('wall/addLikeToPost', { likerId, postId })
  },
  likeComment: (likerId, commentId) => {
    return axios.post('wall/addLikeToComment', { likerId, commentId })
  },
  likePost: (likerId, postId) => {
    return axios.post('wall/addLikeToPost', { likerId, postId })
  },
  likeReply: (likerId, replyId) => {
    return axios.post('wall/addLikeToReply', { likerId, replyId })
  },
  deletePostLike: (likerId, postId) => {
    return axios.post(`wall/deleteLikeFromPost`, { likerId, postId })
  },
  deleteCommentLike: (likerId, commentId) => {
    return axios.post(`wall/deleteLikeFromComment`, { likerId, commentId })
  },
  deleteReplyLike: (likerId, replyId) => {
    return axios.post(`wall/deleteLikeFromPost`, { likerId, replyId })
  },
  getReplies: (parentCommentId, authorId, limit) => {
    return axios.get('wall/getReplies', { params: { parentCommentId, authorId, limit } })
  },
  replyPost: (parentPostId, parentCommentId, authorId, text) => {
    return axios.post('wall/addReply', { parentPostId, parentCommentId, authorId, text })
  },
  editReply: (replyId, text) => {
    return axios.put(`wall/editReply`, { replyId, text })
  },
  deleteReply: (replyId) => {
    return axios.post(`wall/deleteReply`, { replyId })
  },
  editComment: (commentId, text) => {
    return axios.put(`wall/editComment`, { commentId, text })
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
