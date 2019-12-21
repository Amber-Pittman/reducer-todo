
//  build your initial state object that has a list of todos
// TODOs
export const initialState = {
    todoTasks: [
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
}

console.log("This is the initialState: ", initialState)

// add a reducer file and build out a simple reducer 
//   with just a default return for now
  export function reducer(state, action) {
      switch (action.type) {
          case "ADD_TASK":
              //console.log("This is the console log in Add Task for state: ", );
            return {
                ...state, todoTasks: [...state.todoTasks, {
                item: action.payload,
                completed: false,
                id: new Date()
                }
              ]  
            }
          case "TOGGLE_COMPLETED":
              const toggle = state.todoTasks.map(item => {
                  if (item.id === action.payload.id) {
                      return {
                          ...item, completed: !item.completed
                      }
                  } else {
                      return item;
                  }
              });
              return {
                  ...state, todoTasks: toggle
              }
            case "REMOVE_COMPLETE":
                const removeCompleted = state.todoTasks.filter(item => {
                    return !item.completed
                })
                return {
                    ...state, todoTasks: removeCompleted
                }
          default: 
            return state;
      }
  }