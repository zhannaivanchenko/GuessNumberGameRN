import {View, Text, StyleSheet} from "react-native";
import Colours from "../../constants/colours";

function NumberContainer({children}) {
return <View style={styles.container}>
    <Text style={styles.numberText}>{children}</Text>
</View>
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colours.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: "center"
    },
    numberText: {
        color: Colours.accent500,
        fontSize: 36,
        fontFamily: 'open-sans-bold'
    }
})
