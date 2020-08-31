import {connect} from 'react-redux'
import {AppNavigator} from './Navigation'

const mapStateToProps = state => ({
    introduced: state.introduced,
    signedIn: state.signedIn,
    profile: state.profile,
    newHouse: state.newHouse,
    existingHouse: state.existingHouse,
    qrCodeGenerated: state.qrCodeGenerated
})

const mapDispatchToProps = dispatch => ({
    onSignIn: (value) => {
        dispatch({type: 'signIn', payload: true})
    },
    setBirthday: (value) => {
        dispatch({type: 'setBirthday', payload: value})
    },
    isANewHouse: (value) => {
        dispatch({type: 'newHouse', payload: value})
    },
    isAnExisitngHouse: (value) => {
        dispatch({type: 'existingHouse', payload: value})
    },
    setProfile: (value) => {
        dispatch({type: 'setProfile', payload: value })
    },
    setupComplete: (value) => {
        dispatch({type: 'setupComplete', payload: value})
    }     
})




export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator)