import * as firebase from 'firebase';

import * as c from '../constants/statusTypes';

export function login(username, pwd) {
  return (dispatch) => {
    dispatch(startLoading());

    firebase.auth()
      .signInWithEmailAndPassword(username, pwd)
      .then((u) => firebase.database().ref(`users/${u.uid}`))
      .then((dbRef) => dbRef.once('value'))
      .then((res) => res.val())
      .then((data) => {
        if(!data || data === {}) return dispatch(errorFetching());

        dispatch(endLoading());
        dispatch(loginFinished(data));
      })
      .catch(e => dispatch(errorFetching(e)));

  }
}

const loginFinished = (data) => {
  return {
    type: c.LOGIN_FINISHED,
    payload: {
      isLogged: true,
      role: data.role
    }
  };
};

export function startLoading(){
  return {
    type: c.START_LOADING
  };
}

export function endLoading(){
  return {
    type: c.END_LOADING
  };
}

export function errorFetching(e){
  return {
    type: c.ERROR_FETCHING,
    payload: e
  };
}

export function resetError(){
  return {
    type: c.ERROR_RESET
  };
}

export function signUp(data){
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.pwd)
      .then((user) => firebase.database().ref(`/users/${user.uid}`))
      .then((dbRef) => dbRef.set({role: 'regular'}))
      //.then(() => user.updateProfile({displayName: data.username}))
      .then(() => dispatch(userCreated('regular')))
      .then(() => dispatch(endLoading()))
      .catch((e) => errorFetching(e));
  }
}

export function userCreated(role){
  console.warn('created');
  return {
    type: c.USER_CREATED,
    payload: role
  }
}
