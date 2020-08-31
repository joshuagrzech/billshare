import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/HomeScreen/HomeScreenContainer";
import { DetailsScreen } from "./src/Details/DetailsComponent";
import {
  Text,
  View,
  TextInput,
  Image,
  Button,
  Form,
  KeyboardAwareScrollView,
  KeyboardAvoidingView,
  KeyboardAvoidingViewComponent,
} from "react-native";
import AppIntro from "./src/AppIntro/AppIntroContainer";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import {
  faMeteor,
  faSlidersH,
  faStar,
  faStarAndCrescent,
  faEye,
  faUserAlt,
  faFileInvoice,
  faCommentDollar,
  faDoorClosed,
  faDoorOpen,
  faFileInvoiceDollar,
  faCommentsDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Formik } from "formik";
import { SafeAreaView } from "react-native";
import QRCode from "react-native-qrcode-svg";

const Tab = createBottomTabNavigator();

export class AppNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.signInGate = this.signInGate.bind(this);
    this.nextButton = this.nextButton.bind(this);
    this.state = {
      birthdate: "",
      starSignProcess: false,
    };
  }

  nextButton() {
    if (this.state.birthdate === "") {
      return (
        <Button style={{ marginTop: "10%" }} disabled={true}>
          NEXT
        </Button>
      );
    } else {
      return (
        <Button
          onPress={this.setState({ starSignProcess: true })}
          style={{ marginTop: "10%" }}
        >
          NEXT
        </Button>
      );
    }
  }

  signInGate() {
    if (this.props.introduced === false) {
      return (
        <View style={{ height: "100%" }}>
          <AppIntro style={{ height: "100%" }} />
        </View>
      );
    } else if (this.props.signedIn == false) {
      return (
        <View
          style={{
            backgroundColor: "#3366FF",
            height: "100%",
            width: "100%",
            alignItems: "center",
            paddingTop: 100,
          }}
        >
          <Text style={{ fontSize: 25, marginTop: "40%" }}>
            Set up a new house:
          </Text>
          <TouchableOpacity
            style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 100,
              padding: 20,
              elevated: 10,
              shadowColor: "rgba(0,0,0, .4)", // IOS
              shadowOffset: { height: 4, width: 3 }, // IOS
              shadowOpacity: 1, // IOS
              shadowRadius: 4,
            }}
            onPress={() => {
              this.props.isANewHouse(true);
            }}
          >
            <Text style={{ fontSize: 25, color: "blue" }}>Start Here</Text>
            
          </TouchableOpacity>
          <Text style={{ fontSize: 25, marginTop: 50 }}>
            Sign Into an Existing House:
          </Text>
          <TouchableOpacity
            style={{
              margin: 20,
              backgroundColor: "blue",
              borderRadius: 100,
              padding: 20,
              elevated: 10,
              shadowColor: "rgba(0,0,0, .4)", // IOS
              shadowOffset: { height: 4, width: 3 }, // IOS
              shadowOpacity: 1, // IOS
              shadowRadius: 4,
            }}
            onPress={() => {
              this.props.isAnExistingHouse(true);
            }}
          >
            <Text style={{ fontSize: 25, color: "white" }}>Scan QR Code</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (this.props.newHouse === true) {
      return (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={{ flex: 1 }}
        >
          <ScrollView style={{ flex: 1 }}>
            <Formik
              initialValues={{
                nickname: "",
                numberOfPeople: "",
                userName: "",
              }}
              onSubmit={(values) => this.props.setProfile(Object.assign({}, values, {
                members: [values.userName]
              }))}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View
                  style={{
                    marginTop: "15%",
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <Text style={{ fontSize: 40, marginBottom: "15%" }}>
                    Welcome!
                  </Text>
                  <Text style={{ fontSize: 30, marginBottom: "10%" }}>
                    Let's get your house set up.
                  </Text>
                  <View
                    style={{
                      backgroundColor: "blue",
                      borderRadius: 100,
                      padding: 15,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 25,
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      Create a nickname for your home:
                    </Text>
                  </View>
                  <TextInput
                    onChangeText={handleChange("nickname")}
                    value={values.nickname}
                    style={{
                      textAlign: "center",
                      backgroundColor: "white",
                      borderColor: "black",
                      borderWidth: 1,
                      width: 200,
                      borderRadius: 100,
                      marginTop: "5%",
                      height: 50,
                    }}
                    returnKeyType="done"
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      textAlign: "center",
                      marginTop: "5%",
                      color: "red",
                    }}
                  >
                    (we will never ask for your address)
                  </Text>
                  <View
                    style={{
                      backgroundColor: "blue",
                      borderRadius: 100,
                      padding: 18,
                      marginTop: 20,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 25,
                        textAlign: "center",

                        color: "white",
                      }}
                    >
                      How many people live here?
                    </Text>
                  </View>
                  <TextInput
                    onChangeText={handleChange("numberOfPeople")}
                    value={values.numberOfPeople}
                    style={{
                      textAlign: "center",
                      backgroundColor: "white",
                      borderColor: "black",
                      borderWidth: 1,
                      width: 100,
                      borderRadius: 100,
                      marginTop: "5%",
                      height: 50,
                      marginBottom: 25,
                    }}
                    keyboardType="decimal-pad"
                    returnKeyType="done"
                  />
                  <View
                    style={{
                      backgroundColor: "blue",
                      borderRadius: 100,
                      padding: 18,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 25,
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      What's your name?
                    </Text>
                  </View>
                  <TextInput
                    onChangeText={handleChange("userName")}
                    value={values.userName}
                    style={{
                      textAlign: "center",
                      backgroundColor: "white",
                      borderColor: "black",
                      borderWidth: 1,
                      width: 200,
                      borderRadius: 100,
                      marginTop: "5%",
                      height: 50,
                      marginBottom: 25,
                    }}
                    returnKeyType="done"
                    onSubmitEditing={handleSubmit}
                  />
                </View>
              )}
            </Formik>
            
          </ScrollView>
        </KeyboardAvoidingView>
      );
    } else if (this.props.qrCodeGenerated === false) {
      return (
        <SafeAreaView style={{ alignItems: "center" }}>
          <ScrollView>
            <Text style={{ marginTop: 50, fontSize: 30, textAlign: 'center' }}>
              This is your QR Code.
            </Text>
            <View style={{alignItems: 'center', marginTop: 40}}>
              <QRCode size={300} value={this.props.profile.token} logo={require('./src/images/money.png')} logoBackgroundColor='#A1E519' backgroundColor='white' logoSize={55} logoMargin={10}logoBorderRadius='2'/>
            </View>
            <Text style={{ marginTop: 50, fontSize: 30, textAlign: 'center' }}>
              Have your roomates scan this code to sign-in to your home.
            </Text>
            <Text style={{ marginTop: 50, fontSize: 20, textAlign: 'center', color: 'blue' }}>
              (This will be available at anytime in the app.)
            </Text>
          </ScrollView>
          <TouchableOpacity onPress={() => this.props.setupComplete(true)} style={{backgroundColor: 'blue', marginTop: 35, padding: 20, borderRadius: 100, width: 200, height: 65, alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 20}}>Continue</Text>
          </TouchableOpacity>
          
        </SafeAreaView>
      );
    } else if (this.props.existingHouse === true) {
      return (
        <View
          style={{
            backgroundColor: "white",
            height: "100%",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text style={{ marginTop: "25%", fontSize: 17 }}>
            Ask a roomate for your house's QR Code!
          </Text>
          <Text
            style={{
              marginTop: 50,
              fontSize: 25,
              marginHorizontal: 20,
              textAlign: "center",
            }}
          >
            Scan it Below
          </Text>
          <DatePicker
            style={{
              marginTop: 30,
              marginLeft: "10%",
              width: "50%",
              alignItems: "center",
            }}
            size="large"
            date={this.state.birthdate}
            onDateChange={(date) =>
              this.setState({
                birthdate: date,
              })
            }
            format="MM-DD-YY"
            customStyles={{
              dateIcon: { opacity: 0 },
              dateInput: { borderRadius: 100 },
            }}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
          />
          <Text
            style={{
              marginTop: 50,
              fontSize: 25,
              marginHorizontal: 20,
              textAlign: "center",
            }}
          >
            This will tell us your sun-sign.
          </Text>

          <Text
            style={{ fontSize: 25, marginHorizontal: 20, textAlign: "center" }}
          >
            Your sun-sign is the constellation that the sun was over in the
            month surrounding your birth.
          </Text>
          {this.nextButton()}
        </View>
      );
    } else {
      return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Bills") {
                iconName = focused ? faFileInvoiceDollar : faFileInvoice;
              } else if (route.name === "IOUs") {
                iconName = focused ? faCommentDollar : faCommentsDollar;
              } else if (route.name === "Your Home") {
                iconName = focused ? faDoorOpen : faDoorClosed;
              } 

              // You can return any component that you like here!
              return (
                <FontAwesomeIcon icon={iconName} size={size} color={color} />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Bills" component={HomeScreen} />
          <Tab.Screen name="IOUs" component={DetailsScreen} />
          <Tab.Screen name="Your Home" component={DetailsScreen} />
        </Tab.Navigator>
      );
    }
  }

  render() {
    return <View style={{ height: "100%" }}>{this.signInGate()}</View>;
  }
}
