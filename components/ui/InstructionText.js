import {StyleSheet, Text} from "react-native";
import Colours from "../../constants/colours";

function InstructionText({children, style}) {
    return <Text style={[styles.instructionText, style]}>{children}</Text>
}

export default InstructionText;

const styles=StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: Colours.accent500,
        fontSize: 24
    }
})
