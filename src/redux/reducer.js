import { ADD_TODO, DELETE_TODO, MARK_TODO } from "./actions";

function reducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                id: action.id,
                description: action.description,
                done: false
            }]
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id)
        case MARK_TODO:
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo
                } return { ...todo, done: !todo.done };
            }
            );
        default:
            return state;
    }
}

export default reducer;