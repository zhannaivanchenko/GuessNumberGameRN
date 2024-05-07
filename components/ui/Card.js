import {StyleSheet, View} from "react-native";
import Colours from "../../constants/colours";

function Card({children}) {
    return   <View style={styles.card}>{children}</View>
}

export default Card;

const styles=StyleSheet.create({
    card: {
        alignItems: "center",
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: Colours.primary800,
        //for Android ONLY to create shadow. The higher the number, the more clear is the shadow
        elevation: 4,
        //ForIOS devices
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    }
})
