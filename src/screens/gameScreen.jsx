import { useEffect, useState } from 'react';
import {Text, SafeAreaView, StyleSheet, View, Alert} from 'react-native';
import { PrimaryButton } from '../components/home/button.comp';

const generateRandomBetween = (min, max, exclude) => {
  const random = Math.floor(Math.random() * (max - min)) + min;
  if(random === exclude){
    return generateRandomBetween(min,max,exclude);
  }else{
    return random;
  }
};
let minBoundary = 1;
let maxBoundary = 100;
export const GameScreen = ({userNumber,onGameOver}) => {
const initialGuess = generateRandomBetween(1,100,userNumber);
const [currentGuess,setGuess] = useState(initialGuess);

useEffect(()=>{
  console.log(userNumber,currentGuess);
  if(currentGuess.toString() === userNumber.toString()){
    console.log("game over")
    onGameOver();
  }

},[currentGuess,userNumber,onGameOver]);

const nextGuessHandler=(direction)=>{

  if((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)){
    Alert.alert('Bro you lied','You know this is not fair',[{text:'Sorry!!',style:'cancel'}]);
    return;
  }
  if(direction === 'lower'){
    maxBoundary = currentGuess ;
    let newRandom = generateRandomBetween(minBoundary,maxBoundary,currentGuess);
    setGuess(newRandom);
  }
  if(direction === 'higher'){
    minBoundary = currentGuess + 1;
    let newRandom = generateRandomBetween(minBoundary,maxBoundary,currentGuess);
    setGuess(newRandom);
  }

};

  return (
    <SafeAreaView style={styles.continer}>
      <View>
        <Text style={styles.title}>Guess Your Number</Text>
        <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{currentGuess}</Text>
        </View>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this,'higher')}>+</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>-</PrimaryButton>
        </View>
      </View>
      <View>{/**Higher or Lower + - */}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
  },
  numberContainer:{
    borderWidth:4,
    borderColor:'grey',
    padding:24,
    margin:24,
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center',
  },
  numberText:{
    color:'white',
    fontSize:36,
    fontWeight:'bold',

  }
});
