  
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
        case 'signIn':
            return Object.assign({}, state, {
                signedIn: true,
                accessToken: action.payload
            })
        case 'setBirthday':
            return Object.assign({}, state, {
                profile: Object.assign({}, state.profile, {
                    birthdate: action.payload
                })
            })
        default:
            return state
    }
}



export default AstroReducers