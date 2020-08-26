import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    one: {
        height: '100%',
        width: '100%',
        backgroundColor: '#79D615',

        alignItems: 'center',

    },
    two: {
        height: '100%',
        width: '100%',
        backgroundColor: '#79D615',
        justifyContent: 'center',
        alignItems: 'center',
    },
    three: {
        height: '100%',
        width: '100%',
        backgroundColor: '#79D615',
        justifyContent: 'center',
        alignItems: 'center',
    },

    //[...]
});

const slides = [
    {
        key: 'one',
        title: 'Title 1',
        text: 'Description.\nSay something cool',

        backgroundColor: '#59b2ab',
    },
    {
        key: 'two',
        title: 'Title 2',
        text: 'Other cool stuff',

        backgroundColor: '#febe29',
    },
    {
        key: 'three',
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',

        backgroundColor: '#22bcb5',
    }
];

export class AppIntro extends React.Component {
    _renderItem = ({ item }) => {
        switch (item.key) {
            case 'one':
                return (
                    <View style={styles[item.key]}>
                        <Text style={{ fontSize: 100, marginTop: 100 }}>BillShare</Text>
                        <Image source={item.image} />
                        <Text style={{ fontSize: 30 }}>Bill Splitting for Roomates</Text>
                        <View style={{ justifyContent: "center" }}>
                            <FontAwesomeIcon size={150} style={{ marginTop: "15%" }} icon={faFileInvoiceDollar} />
                        </View>
                        <TouchableOpacity style={{backgroundColor: "#79D615", borderRadius: 100, marginTop: "70%"}} onPress={this.props.onDone}>
                            <Button style={{fontSize: "20px"}} title='Skip To Sign In'>
                                <Text>
                                    Skip To Sign-In
                                </Text>
                            </Button>
                        </TouchableOpacity>
                    </View>
                )
            case 'two':
                return (
                    <View style={styles[item.key]}>
                        
                        <FontAwesomeIcon size={150} style={{ }} icon={faFileInvoiceDollar} />
                        <Image source={item.image} />
                        <Text style={{ fontSize: 30 }}></Text>
                        <View style={{ justifyContent: "center" }}>
                        </View>

                    </View>
                )
                case 'three':
                    return (
                        <View style={styles[item.key]}>
                            
                            <FontAwesomeIcon size={150} style={{ }} icon={faFileInvoiceDollar} />
                            <Image source={item.image} />
                            <Text style={{ fontSize: 30 }}></Text>
                            <View style={{ justifyContent: "center" }}>
                            </View>
    
                        </View>
                    )
        }
        return;
    }
    _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.props.onDone();
    }

    render() {
        return (
            <AppIntroSlider
                data={slides}
                renderItem={this._renderItem}
                onDone={this._onDone}
            />
        );
    }
}