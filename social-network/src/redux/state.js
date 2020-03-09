let state = {
  dialogsPage: {
    dialogs: [
      {
        id: 1,
        userName: 'Anton Demin',
        messageCount: 4,
        lastMessage: 'Great, I’ll see you tomorrow!...',
      },
      {
        id: 2,
        userName: 'Alexander Dmitriew',
        messageCount: 5,
        lastMessage: 'Great, I’ll see you tomorrow!...',
      },
      {
        id: 3,
        userName: 'Nicolas Volodin',
        messageCount: 2,
        lastMessage: 'Hi Elaine! I have a question...',
      },
      {
        id: 4,
        userName: 'Garold Insbruck',
        messageCount: 1,
        lastMessage: 'Great, I’ll see you tomorrow!...',
      },
    ],
    messages: [
      { id: 1, lastMessage: 'Good food!' },
      { id: 2, lastMessage: 'Please buy the food!' },
    ],
  },
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likes: 11 },
      { id: 2, message: 'You can do it!', likes: 22 },
      { id: 3, message: 'Lets study React', likes: 5 },
    ],
  },
  sidebar: {
    friends: [
      { id: 1, name: 'Ihor', messagesCount: 2 },
      { id: 1, name: 'Anton', messagesCount: 5 },
      { id: 1, name: 'Nicolas', messagesCount: 1 },
      { id: 1, name: 'Garold', messagesCount: 10 },
    ],
  },
}

export let addPost = postMessage => {
  let newPost = {
    id: 5,
    message: postMessage,
    likes: 0,
  }
  state.profilePage.posts.push(newPost)
}

export default state
