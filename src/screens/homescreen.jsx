import { View,TextInput, StyleSheet, Alert } from "react-native";
import { PrimaryButton } from "../components/home/button.comp";
import {useState} from 'react';
export const HomeScreen = ({handle})=>{
    const [enteredNumber,setNumber] = useState("");
    function enteredValue(text){
        setNumber(text);
       
    };
    function inputHandler(){
        let chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber <=1 || chosenNumber >=99 ){
            //show alert
            Alert.alert('Invalid number!','Number has to be a number greater than 0 and less than 100',[{text:'okay',style:'destructive',onPress:()=>{setNumber("")}}]);
            return;
        }
        console.log(enteredNumber);
        handle(enteredNumber);
    };
    return(
    <View style={styles.inputContainer}>
        <View>
        <TextInput value={enteredNumber} onChangeText={enteredValue}  maxLength={2} style={styles.textInput} keyboardType='numeric' />
        </View>
      <View style={styles.buttonContainer}>
      <View style={{flex:1}}>
      <PrimaryButton onPress={()=>{setNumber("")}}>Reset</PrimaryButton>
      </View>
         <View style={{flex:1}}>
         <PrimaryButton onPress={inputHandler}>Confirm</PrimaryButton>
         </View>
      </View>
    </View>
    );
};

const styles = StyleSheet.create({
    inputContainer:{
        marginTop:100,
        borderColor:'grey',
        marginHorizontal:24,
        backgroundColor:'#4e0329',
        borderRadius:8,
        alignItems:'center',
        padding:16,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowRadius:2,
        shadowOpacity:0.5,
        elevation:4,
    },
    textInput:{
        height:80,
        width:80,
        fontSize:32,
        paddingLeft:20,
        paddingRight:20,
        borderBottomColor:'#ddb52f',
        borderBottomWidth:1,
        color:'#ddb52f',
        marginVertical:8,
        fontWeight:'bold',
    },
    buttonContainer:{
        flexDirection:'row',
    },
});