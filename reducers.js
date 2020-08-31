var randomToken = require('random-token');

export const initialState = {
    introduced: false,
    signedIn: false,
    user: {},
    profile: {
        homeID: ''
    }
}




const AstroReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'introduced':
            return Object.assign({}, state, {
                introduced: true
            })
        case 'existingHouse':
            return Object.assign({}, state, {
                signedIn: true,
                existingHouse: action.payload,
                qrCodeGenerated: true
            })
        case 'newHouse':
            return Object.assign({}, state, {
                signedIn: true,
                newHouse: action.payload
            })
        case 'setProfile':
            return Object.assign({}, state, {
                profile: Object.assign({}, action.payload, {
                    token: randomToken(16)
                }),
                qrCodeGenerated: false,
                newHouse: false
            })
        case 'setupComplete': 
            return Object.assign({}, state, {
               qrCodeGenerated: true, 
            })
        default:
            return state
    }
}



export default AstroReducers