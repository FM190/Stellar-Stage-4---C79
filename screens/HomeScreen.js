import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>✨ Stellar App ✨ </Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("SpaceCraft ")
                    }>
                        <Text style={styles.routeText}>Spacecrafts 🚀</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("StarMap")
                    }>
                        <Text style={styles.routeText}>Star Map ⭐</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("DailyPic")
                    }>
                        <Text style={styles.routeText}>Daily Pictures 📸</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.12,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        marginTop:5,
        marginLeft: 50,
        marginRight: 30,
        height: '10%',
        width: '70%',
        borderRadius: 90,
        borderWidth:3,
        backgroundColor: "'rgba(183, 183, 183, 0.5)'"
    },
    titleBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
      marginTop: -120,
        fontSize: 40,
        fontWeight: "400",
        color: "white"
    },
    routeText: {
        fontSize: 25,
        fontWeight: "400",
        color: 'black',
        justifyContent: "center",
        alignItems: "center"
    },
});