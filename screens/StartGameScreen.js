import {
    Alert,
    StyleSheet,
    TextInput,
    View,
    useWindowDimensions,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";
import {useState} from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colours from "../constants/colours";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState("")

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputhandler() {
        setEnteredNumber("");
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99 ) {
            //show alert
            Alert.alert(
                "Invalid number",
                "Number has to be a number between 1 and 99",
                [{ text: "Okay", style: "destructive", onPress: resetInputhandler }]);
            return;
        }
        onPickNumber(chosenNumber);
    }
    const { height } = useWindowDimensions();
    const marginTopDistance = height < 400 ? 0 : 100;

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position" >
                <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
                    <Title>Guess My Number</Title>
                    <Card>
                        <InstructionText>Enter a Number</InstructionText>
                        <TextInput
                            style={styles.numberInput}
                            maxLength={2}
                            keyboardType="number-pad"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={numberInputHandler}
                            value={enteredNumber}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer} >
                                <PrimaryButton pressHandler={confirmInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View  style={styles.buttonContainer} >
                                <PrimaryButton pressHandler={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        padding: 12,
        alignItems: "center"
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colours.accent500,
        borderBottomWidth: 2,
        color:  Colours.accent500,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center"
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex:1
    }
})

