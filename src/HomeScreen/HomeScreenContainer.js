import {connect} from 'react-redux';
import {HomeScreen} from './HomeScreenComponent'

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps)(HomeScreen)