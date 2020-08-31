import React, { useState } from "react";
import { View, Text, Button, PickerIOSItem } from "react-native";
import { SafeAreaView } from "react-navigation";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import {
  faCommentsDollar,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Modal from "react-native-modal";
import {Picker} from '@react-native-community/picker';

export const HomeScreen = (props) => {
  
  const [isOpen, setOpen] = useState(false);
  const [newBillAmount, setNewBillAmount] = useState(0)
  const toggleModal = () => {
    if (isOpen === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const members = props.profile.members
  console.log(props)

  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <TouchableOpacity
        style={{ margin: "165%" }}
        onPress={() => toggleModal()}
      >
        <FontAwesomeIcon size={60} icon={faPlusCircle} />
      </TouchableOpacity>
      <Modal
        coverScreen={false}
        hideModalContentWhileAnimating={true}
        
        hasBackdrop={false}
        isVisible={isOpen}
        avoidKeyboard={true}
      >
        <SafeAreaView style={{ alignItems: 'center', marginTop: "25%", flex: 1, backgroundColor: 'white', borderRadius: 20 }}>
          <Text style={{textAlign: 'center', margin: '5%', marginTop: '10%', fontSize: 30}}>What kind of bill do you want to add?</Text>
          <Picker style={{height: 50, margin: '-20%', width: 100}}>
            <Picker.Item label='Rent' value='rent'/>
            <Picker.Item label='Utilities' value = 'util' />
            <Picker.Item label = 'Other' value = 'other' />
          </Picker>
          
          <Text style={{textAlign: 'center', marginTop: 225, fontSize: 30}}>Who pay's this?</Text>
          <Picker style={{height: 50, margin: '-20%', width: 100}}>
            {members.map(member => {
              return(
                <Picker.Item label={member} value={member}/>
              )
            })}
          </Picker>
          <Text style={{textAlign: 'center', marginTop: 175, fontSize: 30}}>How much is it this month?</Text>
          <TextInput style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1}} onChange={value => setNewBillAmount(value)} value={"$" + newBillAmount} keyboardType='decimal-pad'>
            
          </TextInput>
        
          </SafeAreaView>
      </Modal>
        
    </SafeAreaView>
  );
};
