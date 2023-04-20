import { View,Text } from "react-native";
import { PrimaryButton } from "../components/home/button.comp";

export const GameOverScreen = ({handleGame,handleNumber})=>{
    return (<View>
        <Text>Game is over</Text>
        <PrimaryButton onPress={()=>{handleGame(false);handleNumber(null)}}>Play Again</PrimaryButton>
    </View>);
};