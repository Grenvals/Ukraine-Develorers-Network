const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE'
const ADD_POST = 'ADD-POST'

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likes: 11 },
    { id: 2, message: 'You can do it!', likes: 22 },
    { id: 3, message: 'Lets study React', likes: 5 },
  ],
  newPostMessage: '',
}

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-POST': {
      debugger
      let newPost = {
        id: 5,
        message: state.newPostMessage,
        likes: 0,
      }
      return { ...state, newPostMessage: '', posts: [...state.posts, newPost] }
    }
    case 'UPDATE-NEW-POST-MESSAGE': {
      return { ...state, newPostMessage: action.message }
    }
    default:
      return state
  }
}

export const addPostActionCreator = () => ({
  type: ADD_POST,
})
export const updateNewPostMessageActionCreator = message => ({
  type: UPDATE_NEW_POST_MESSAGE,
  message: message,
})

export default profileReducer
