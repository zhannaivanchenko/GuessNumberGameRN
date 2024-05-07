import {Alert, FlatList, StyleSheet, Text, View} from "react-native";
import Title from "../components/ui/Title";
import {useEffect, useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Ionicons from "@expo/vector-icons/Ionicons";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let min = 1;
let max = 100;


function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess])

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
       min = 1;
       max = 100 ;
    }, [])

    function nextGuessHandler(direction) { // direction => "lower, "greater"
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie", 'You know that this is wrong ...', [
                {text: 'Sorry!', style: 'cancel'}
            ])
            return;
        }

        if (direction === "lower") {
            max = currentGuess;
        } else {
            min = currentGuess + 1;
        }
        const rndNumber = generateRandomBetween(min, max, currentGuess);
        setCurrentGuess(rndNumber);
        setGuessRounds(prevGuessRounds => [...prevGuessRounds, rndNumber])
    }

    return <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton pressHandler={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="add" size={24} color="white" />
                    </PrimaryButton>
                </View>

                <View style={styles.buttonContainer}>
                    <PrimaryButton pressHandler={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove" size={24} color="white" />
                    </PrimaryButton>
                </View>
            </View>
        </Card>
        <View style={styles.listContainer}>
            {/*{guessRounds.map(guessRound => (*/}
            {/*    <Text key={guessRound}>{guessRound}</Text>*/}
            {/*))}*/}
            <FlatList
                data={guessRounds}
                renderItem={(itemData) => (
                    <GuessLogItem
                        roundNumber={++itemData.index}
                        guess={itemData.item}
                    />)}
                keyExtractor={(item) => item}
            />
        </View>
    </View>
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12
    },
    instructionText: {
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        padding: 16
    }
})
