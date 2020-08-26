import {connect} from 'react-redux'
import {AppNavigator} from './Navigation'

const mapStateToProps = state => ({
    introduced: state.introduced,
    signedIn: state.signedIn,
    profile: state.profile
})

const mapDispatchToProps = dispatch => ({
    onSignIn: (value) => {
        dispatch({type: 'signIn', payload: true})
    },
    setBirthday: (value) => {
        dispatch({type: 'setBirthday', payload: value})
    }     
})




export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator)