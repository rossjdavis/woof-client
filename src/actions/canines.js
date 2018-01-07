import {
  CREATE_CANINE,
  REMOVE_CANINE,
  LOAD_ALL_DOGS
} from '../constants/canines'

// export const showDogsList = canines => ({
//   type: LOAD_ALL_DOGS,
//   payload: canines
// })

// export const createCanine = payload => ({
//   type: CREATE_CANINE,
//   payload: {}
// })
//
// export const removeCanine = id => ({
//   type: REMOVE_CANINE,
//   payload: id
// })

// export function showDogList() {
//   return (dispatch, getState, { emit }) => {
//     emit(LOAD_ALL_DOGS)
//   }
// }
//
// export const showDogsList = canines => ({
//   return dispatch => {
//
//   }
// })
//
// export const fetchDogList = payload => {
//   return dispatch => {
//     // dispatch(clearAllItems())
//     console.log(payload)
//     dispatch(showDogsList(payload))
//   }
// }

export function showDogsList() {
  // this is the redux-middleware package in action, dispatch and getState params are passed in
  return (dispatch, getState, { emit }) => {
    emit(LOAD_ALL_DOGS)
  }
}
