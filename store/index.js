export const state = () => ({
  user:{},
  post:[],
  users:[],
  currentPost:{}
});

export const mutations = {
  setUser(state, user){
    state.user = user
  },
  setCurrPost(state,currPost){
    state.currentPost = currPost
  },
  SOCKET_newMessage(state,data){
    state.post.push(data)
  },
  SOCKET_loadPosts(state,data){
    state.post = data
  },
  SOCKET_updateUsers(state, users){
    state.users = users
  }
};

