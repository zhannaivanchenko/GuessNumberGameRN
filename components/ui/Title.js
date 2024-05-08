import {StyleSheet, Text, Platform} from "react-native";

function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        fontWeight: "bold",
        color:  "white",
        textAlign: "center",
        padding: 16,
        borderWidth: Platform.select({ios: 0, android: 2}),
        borderColor:  "white",
        maxWidth: "80%",
        width: 300
    }
})
