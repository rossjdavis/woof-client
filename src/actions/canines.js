import {
  CREATE_CANINE,
  REMOVE_CANINE,
  LOAD_ALL_DOGS
} from '../constants/canines'

export const showDogs = canines => ({
  type: LOAD_ALL_DOGS,
  payload: canines
})

export const createCanine = payload => ({
  type: CREATE_CANINE,
  payload: {}
})

export const removeCanine = id => ({
  type: REMOVE_CANINE,
  payload: id
})
