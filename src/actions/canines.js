import {
  CREATE_CANINE,
  REMOVE_CANINE,
  LOAD_ALL_DOGS
} from '../constants/canines'

export const bringToState = canines => ({
  type: LOAD_ALL_DOGS,
  payload: canines
})

export const createCanine = data => ({
  type: CREATE_CANINE,
  payload: {
    name,
    symbol,
    price
  }
})

export const removeCanine = id => ({
  type: REMOVE_CANINE,
  payload: id
})
