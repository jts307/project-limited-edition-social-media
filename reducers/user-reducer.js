import { ActionTypes } from '../actions';

// PostReducer will currently only need to respond to 2 ActionTypes: FETCH_POSTS and FETCH_POST

// Learned about spread operator from https://redux.js.org/recipes/using-object-spread-operator

const initialState = {
  displayname: '',
  username: '',
  email: '',
  followingList: [],
  followerList: [],
  profilePic: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
  archivedFeed: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER:
      return {
        ...state,
        displayname: action.payload.displayname,
        followingList: action.payload.followingList,
        followerList: action.payload.followerList,
        profilePic: action.payload.profilePic,
        username: action.payload.username,
        email: action.payload.email,
        isFollowingListVisible: action.payload.isFollowingListVisible,
        isFollowerListVisible: action.payload.isFollowerListVisible,
      };
    case ActionTypes.UPDATE_FOLLOW:
      return {
        ...state,
        followingList: action.payload.followingList,
        followerList: action.payload.followerList,
      };
    case ActionTypes.GET_ARCHIVE:
      return { ...state, archivedFeed: action.payload };
    default:
      return state;
  }
};

export default userReducer;
