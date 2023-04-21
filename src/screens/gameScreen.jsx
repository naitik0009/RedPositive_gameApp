import { useEffect, useState } from 'react';
import {Text, SafeAreaView, StyleSheet, View, Alert, FlatList} from 'react-native';
import { GameLogItem } from '../components/gameScreen/gameLog.comp';
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
const [guessRound,setGuessRound] = useState([initialGuess]);
useEffect(()=>{
  console.log(userNumber,currentGuess);

  if(currentGuess.toString() === userNumber.toString()){
    console.log("game over")
    onGameOver(guessRound.length);
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
    setGuessRound(previous=>[...previous,newRandom]);
  }
  if(direction === 'higher'){
    minBoundary = currentGuess + 1;
    let newRandom = generateRandomBetween(minBoundary,maxBoundary,currentGuess);
    setGuess(newRandom);
    setGuessRound(previous=>[...previous,newRandom]);
  }

};

  return (
    <SafeAreaView style={styles.continer}>
      <View>
        <Text style={styles.title}>Guess Your Number</Text>
        <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{currentGuess}</Text>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={nextGuessHandler.bind(this,'higher')}>+</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>-</PrimaryButton>
        </View>
      </View>
      <View style={styles.flat}><FlatList data={guessRound} renderItem={(item)=><GameLogItem round={item.index+1} guess={item.item}/>}/></View>
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
    fontFamily:'open-sans-bold',
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
    fontFamily:'open-sans-bold'

  },
  flat:{
    padding:10,
  },
  button:{
    width:'100%',
    height:200,
    borderWidth:1,

    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:80,
  }
});
