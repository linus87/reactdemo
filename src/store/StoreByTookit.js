import { createSlice, configureStore } from '@reduxjs/toolkit'

/**
 * <p>Redux Toolkit is a package that helps simplify several common Redux use cases, including store setup, creating reducers, and writing immutable update logic.
 * <p>Redux Toolkit is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:
 * <p>Redux extension is a browser extension that provides power-ups for your Redux development workflow. It's available for Chrome and Firefox. 
 * But it only recognizes the store created by Redux Tookit.
 */

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(incremented())
// {value: 1}
store.dispatch(incremented())
// {value: 2}
store.dispatch(decremented())
// {value: 1}

export default store;