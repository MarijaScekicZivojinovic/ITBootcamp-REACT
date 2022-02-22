

//uvek prima dva argumenta - celokupan state i njegova action
// action se sastoji od:
/* action: {
    type:'Switch key', 
    payload: id, ili moze da bude payload {id, title, itd} ili moze da bude neki niz [1,2,3] -> payload se koristi za logiku unutar Reducera
} */
// action.payload = {
//     title: '',
//     id: ''
// }
export const GamesReducer = (state, action) => {

    console.log('in games reducer:', action);
    switch (action.type) {
        case 'ADD_GAME':
            // prva varijanta
            return [...state, {
                title: action.payload.title,
                id: action.payload.id
            }]

        //druga varijanta -> svi imaju title i id:
        // return [...state, action.payload]

        //treca varijanta - ako nema id pa mi da mu dodamo
        // return [...state, {
        //     title: action.payload,
        //     id: Math.random()*10
        // }]

        case 'UPDATE_GAME':
            return [...state].map(game => game.id === action.payload.id ? { ...game, title: action.payload.title } : { ...game })

        case 'DELETE_GAME':
            return [...state].filter(game => game.id !== action.payload.id) //zadrzace sve sem onog sa istim id-jem
        default:
            return state;
    }
}