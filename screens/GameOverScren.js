import {StyleSheet, Text, Image, View, Dimensions, useWindowDimensions, ScrollView} from "react-native";
import Title from "../components/ui/Title";
import Colours from "../constants/colours";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    const {width, height} = useWindowDimensions();

    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }
    if (height < 400) {
        imageSize = 80;
    }

    const imageStyles = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }

    const marginTopDistance = height < 400 ? 0 : 50;

    return (
        <ScrollView style={styles.screen}>
            <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
                <Title>GAME OVER!</Title>
                <View style={[styles.imageContainer, imageStyles]}>
                    <Image style={styles.image} source={require('../assets/images/success.png')}/>
                </View>
                <Text style={styles.summaryText}>
                    Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds
                    to guess the number <Text style={styles.highlightText}>{userNumber}</Text></Text>
                <View style={styles.buttonContainer}>
                    <PrimaryButton pressHandler={onStartNewGame}>Start New Game</PrimaryButton>
                </View>
            </View>
        </ScrollView>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderWidth: 3,
        borderColor: Colours.primary800,
        overflow: "hidden",
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: "center",
        marginBottom: 24
    },
    highlightText: {
        fontFamily: 'open-sans-bold',
        color: Colours.primary500
    },
    buttonContainer: {
        flex: 1
    }
})
