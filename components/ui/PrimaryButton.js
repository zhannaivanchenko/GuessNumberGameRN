import {Pressable, StyleSheet, Text, View} from "react-native";
import Colours from "../../constants/colours";

function PrimaryButton({children, pressHandler}) {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer]
                    : styles.buttonInnerContainer}
                onPress={pressHandler}
                android_ripple={{color: Colours.primary600}}>

                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden"
    },
    buttonInnerContainer: {
        backgroundColor: Colours.primary500,

        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    },
    pressed: {
        opacity: 0.75
    }
})
