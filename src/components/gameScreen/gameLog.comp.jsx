import {View,Text,StyleSheet} from 'react-native';

export const GameLogItem = ({round,guess}) => {
  return <View style={styles.listItem}>
    <Text style={styles.itemText}># {round} </Text>
    <Text style={styles.itemText}>Opponents Guess : {guess}</Text>
  </View>;
};

const styles = StyleSheet.create({
    listItem:{
        borderColor:'yellow',
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:"purple",
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4,
    },
    itemText:{
        fontFamily:"open-sans-bold",
        fontSize:16,
        color:'white'
    }
});
