
//  build your initial state object that has a list of todos
// TODOs
export const initialState = [
    {
        item: 'Learn about reducers Part I',
        completed: false,
        id: 3892987589
    },

    {
        item: 'Learn about reducers Part II',
        completed: false,
        id: 3892987909
    },

    {
        item: 'Learn about reducers Part III',
        completed: false,
        id: 3892987591
    }
]

// add a reducer file and build out a simple reducer 
//   with just a default return for now
  export function reducer(action, state) {
      switch (action.type) {
          default: 
            return state
      }
  }