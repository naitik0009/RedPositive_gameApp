import { SafeAreaView,Text, StyleSheet } from "react-native";
import { PrimaryButton } from "../components/home/button.comp";

export const GameOverScreen = ({handleGame,handleNumber})=>{
    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.textStyle}>Game is over</Text>
        <PrimaryButton onPress={()=>{handleGame(false);handleNumber(null)}}>Play Again</PrimaryButton>
    </SafeAreaView>);
};

const styles = StyleSheet.create({
    container:{
        marginTop:100,
        flex:1,
        alignItems:'center',
    },
    textStyle:{
        color:"white",
        fontFamily:"open-sans",
        fontSize:20,
        marginBottom:10,
    },
});