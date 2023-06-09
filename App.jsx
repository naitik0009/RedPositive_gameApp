import React,{useState} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import { HomeScreen } from './src/screens/homescreen';
import { GameScreen } from './src/screens/gameScreen';
import { GameOverScreen } from './src/screens/gameOverScreen';
import LinearGradient from 'react-native-linear-gradient';
function App() {
  const [number,setNumber] = useState(null);
  const [gameIsOver,setGame] = useState(true);  
  const [guessRound,setGuess] = useState(0);
  let screen = <HomeScreen handle={handleScreen}/>;

  function handleScreen(num){
    setNumber(num);
    setGame(false);
  }
  function gameIsOverHandler(){
    setGame(true);
  }
  function startNewGame(){
    setGuess(0);
    setNumber(null);
  }
  if(number){
    screen = <GameScreen userNumber={number} onGameOver={gameIsOverHandler}/>
  }
  if(gameIsOver && number){
    screen = <GameOverScreen roundNumber={guessRound} userNumber={number} startNewGame={startNewGame} />
  }
  return (
  <LinearGradient colors={['#4e0329','#ddb53f']} style={styles.container}>
  <ImageBackground style={styles.container} imageStyle={{opacity:0.5}} resizeMode='cover' source={require('./src/assets/background.png')}>
  {screen}
  </ImageBackground>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  
  }
});

export default App;
