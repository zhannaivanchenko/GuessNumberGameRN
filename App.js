import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import {useFonts} from "expo-font";
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import Colours from "./constants/colours";
import GameOverScreen from "./screens/GameOverScren";
import AppLoading from "expo-app-loading";


export default function App() {
    const [userNumber, setUserNumber] = useState(null);
    const [gameIsOver, setGameIsOver]  = useState(true);
    const [guessRounds, setGuessRounds] = useState(0)

    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function startNewGameHandler() {
        setUserNumber(null);
        setGuessRounds(0);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

    if (userNumber) {screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>}

    if (gameIsOver && userNumber) {
        screen  = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler} />
    }
    function gameOverHandler(numberOfRounds) {
        setGameIsOver(true);
        setGuessRounds(numberOfRounds)
    }

    return (
        <LinearGradient
            colors={[Colours.primary700, Colours.accent500]}
            style={styles.rootScreen}
        >
            <ImageBackground
                resizeMode={"cover"}
                source={require('./assets/images/background.png')}
                style={styles.rootScreen}
                imageStyle={{opacity: 0.15}}
            >
               <SafeAreaView style={styles.rootScreen}>
                   {screen}
               </SafeAreaView>
            </ImageBackground>
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1
    },
    backgroundImage: {
        opacity: 0.15
    }
});
