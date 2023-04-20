import {View, Text, StyleSheet, Pressable} from 'react-native';

export const PrimaryButton = ({children,onPress}) => {
  return (
    <Pressable android_ripple={{color:'grey',}} onPress={onPress} android_disableSound={false}>
      <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#72063c',
    borderRadius:28,
    alignItems:'center',
    paddingVertical:8,
    paddingHorizontal:16,
    margin:4,
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowRadius:2,
    shadowOpacity:0.5,
    elevation:2,
  },
  text: {
    color: 'white',
  },
});
