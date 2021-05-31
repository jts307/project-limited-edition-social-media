import { ActionTypes } from '../actions';

const initialState = {
  displayname: '',
  username: '',
  email: '',
  followingList: [],
  followerList: [],
  badges: [],
  profilePic: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER:
      return {
        ...state,
        displayname: action.payload.displayname,
        followingList: action.payload.followingList,
        followerList: action.payload.followerList,
        badges: action.payload.badges,
        profilePic: action.payload.profilePic,
      };
    default:
      return state;
  }
};

export default UserReducer;