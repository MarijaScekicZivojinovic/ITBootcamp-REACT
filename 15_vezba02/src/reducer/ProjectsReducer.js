
export const ProjectReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            return [...state, action.payload]
        case 'REMOVE_PROJECT':
            return [...state].filter(project => project.id !== action.payload.id)
        default:
            return [...state];
    }
}