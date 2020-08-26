import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './src/HomeScreen/HomeScreenComponent'
import { DetailsScreen } from './src/Details/DetailsComponent'
import { Text, View, TextInput, Image } from 'react-native'
import AppIntro from './src/AppIntro/AppIntroContainer'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { faMeteor, faSlidersH, faStar, faStarAndCrescent, faEye, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { SafeAreaView } from 'react-native';

const Tab = createBottomTabNavigator();



export class AppNavigator extends React.Component {
    constructor(props) {
        super(props)
        this.signInGate = this.signInGate.bind(this)
        this.nextButton = this.nextButton.bind(this)
        this.state = {
            birthdate: '',
            starSignProcess: false
        }
    }

    nextButton() {
        if (this.state.birthdate === '') {
            return (
                <Button style={{ marginTop: "10%" }} disabled={true}>
                    NEXT
                </Button>

            )
        } else {
            return (
                <Button onPress={this.setState({starSignProcess: true})} style={{ marginTop: "10%" }}>
                    NEXT
                </Button>
            )
        }
    }

    signInGate() {
        if (this.props.introduced === false) {
            return (
                <View style={{ height: "100%" }}>
                    <AppIntro style={{ height: "100%" }} />
                </View>
            )
        } else if (this.props.signedIn == false) {
            return (
                <View style={{ backgroundColor: "#FF5A1E", height: "100%", width: "100%", alignItems: "center" }}>
                    <TouchableOpacity style={{ backgroundColor: "white", width: "70%", marginTop: "100%", borderRadius: 100 }}>
                        <FBLoginButton />

                    </TouchableOpacity>
                </View>
            )
        } else if (this.props.profile.starSign === null) {
            return (
                <View style={{ backgroundColor: "white", height: "100%", width: "100%", alignItems: "center" }}>
                    <Text style={{ marginTop: "25%", fontSize: 17 }}>
                        Thanks for that!
                </Text>
                    <Text style={{ marginTop: 50, fontSize: 25, marginHorizontal: 20, textAlign: "center" }}>
                        When were you born?
                </Text>
                    <DatePicker
                        style={{ marginTop: 30, marginLeft: "10%", width: "50%", alignItems: "center" }}
                        size="large"
                        date={this.state.birthdate}
                        onDateChange={date => this.setState({
                            birthdate: date
                        })}
                        format="MM-DD-YY"
                        customStyles={{
                            dateIcon: {opacity: 0}, dateInput:{borderRadius: 100}}}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                    />
                    <Text style={{ marginTop: 50, fontSize: 25, marginHorizontal: 20, textAlign: "center" }}>
                        This will tell us your sun-sign.
                </Text>
                    

                    <Text style={{ fontSize: 25, marginHorizontal: 20, textAlign: "center" }}>
                        Your sun-sign is the constellation that the sun was over in the month surrounding your birth.
                </Text>
                    {this.nextButton()}
                </View>
            )
        } else if (this.state.starSignProcess === true) {
            return(
                <SafeAreaView>
                    <Text>You are a </Text>
                </SafeAreaView>
            )
        } else {
            return (
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Home') {
                                iconName = focused
                                    ? faMeteor
                                    : faMeteor;
                            } else if (route.name === 'Settings') {
                                iconName = focused ? faSlidersH : faSlidersH;
                            } else if (route.name === 'Your Stars') {
                                iconName = focused ? faStar : faStar;
                            } else if (route.name === 'Their Stars') {
                                iconName = focused ? faStarAndCrescent : faStarAndCrescent;
                            } else if (route.name === 'Learn') {
                                iconName = focused ? faEye : faEye;
                            } else if (route.name === 'Profile') {
                                iconName = focused ? faUserAlt : faUserAlt;
                            } 


                            // You can return any component that you like here!
                            return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray',
                    }}
                >
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Your Stars" component={DetailsScreen} />
                    <Tab.Screen name="Their Stars" component={DetailsScreen} />
                    <Tab.Screen name="Learn" component={DetailsScreen} />
                    <Tab.Screen name="Profile" component={DetailsScreen} />
                </Tab.Navigator>
            )
        }
    }

    render() {
        return (
            <View style={{ height: "100%" }}>
                {this.signInGate()}
            </View>
        )

    }
}