import { SafeAreaView,Text,View, StyleSheet, Image } from "react-native";
import { PrimaryButton } from "../components/home/button.comp";

export const GameOverScreen = ({roundNumber,userNumber,startNewGame})=>{
    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.textStyle}>Game is over</Text>
        <Image style={styles.imageStyle} source={require('../assets/success.png')}/>
        <View>
            <Text style={styles.mainText}>Your phone needed <Text style={styles.mainX}>{roundNumber}</Text> round to guess the number <Text style={styles.mainY}>{userNumber}</Text></Text>
        </View>
       <View style={{alignSelf:'stretch',marginHorizontal:30,}}>
       <PrimaryButton onPress={startNewGame}>Play Again</PrimaryButton>
       </View>
    </SafeAreaView>);
};

const styles = StyleSheet.create({
    container:{
        marginTop:100,
        alignItems:'center',
        overflow:'hidden',
        flex:1,
    },
    textStyle:{
        color:"white",
        fontFamily:"open-sans-bold",
        fontSize:25,
        marginBottom:50,
    },
    imageStyle:{
        width:200,
        height:200,
        borderRadius:100,
    },
    mainText:{
        fontFamily:'open-sans-bold',
        fontSize:25,
        color:'white',
        textAlign:'center',
        marginHorizontal:5,
        marginVertical:20,
    },
    mainX:{color:'yellow'},
    mainY:{color:'yellow'},
});