import { ADD_TODO, DELETE_TODO, MARK_TODO } from "./actions";

const initialState = {
    todos: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, todos: [...state.todos, {
                    id: action.payload.id,
                    description: action.payload.description,
                    done: false
                }]
            }
            
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }

        case MARK_TODO:
            return {
                todos: state.todos.map(todo => {
                    if (todo.id !== action.payload.id) {
                        return todo
                    } return { ...todo, done: !todo.done };
                })
            }

        default:
            return state;
    }
}

export default reducer;