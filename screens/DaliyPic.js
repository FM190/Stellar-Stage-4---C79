import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  StatusBar,
  SafeAreaView,
  Linking,
  ScrollView,
} from 'react-native';

import axios from 'axios';

export default class DailyPicScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apod: [],
    };
  }

  componentDidMount() {
    this.getAPOD();
  }

  getAPOD = () => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=COGdtQeIWk1mbziFVQgpfK3JfP4dBSAlQg8imDGw'
      )
      .then((response) => {
        this.setState({ apod: response.data });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };


  render() {
    const url = this.state.apod.url;
    if (Object.keys(this.state.apod).length === 0) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Loading</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <ImageBackground
            source={require('../assets/blackGalaxyStars.png')}
            style={styles.backgroundImage}>
            <View
              style={{
                flex: 0.15,
                justifyContent: 'center',
                textAlign: 'center',
              }}>
              <Text style={styles.routeText}>📸 Daily Pic 📸</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(this.state.apod.url).catch((err) =>
                  console.error("Sorry, Couldn't load page. Try Again. 😔", err)
                )
              }>
              <Image
                source={require('../assets/MarsWP.png')}
                style={styles.marsPic}></Image>
              <Image
                source={require('../assets/Mars.png')}
                style={styles.marsPic2}></Image>
                <Image
                source={require('../assets/marsLanding.png')}
                style={styles.marsPic2}></Image>
            </TouchableOpacity>
            <View style={{ padding: 20 }}>
              <Text style={styles.titleText}>Landing on Mars 🪐</Text>
              <Text style={styles.picText}>
                What would it look like to land on Mars? To better moniter the
                instruments involved in the Entry, Decent, and Landing of the
                Perseverance Rover on Mars last week, cameras with video
                capability wee included that have now returned thier images. The
                featured 3.5 minute composite video begins with the opening of a
                huge parachute that dramatically slows the speeding spacecraft
                as it enters the Martian atmosphere. Next the heat shield is
                seen seperating and falls ahead. As perseverance decends. Mars
                looms large and its surface becomes increasingly setailed. At
                just past 2 minutes into the video the parchute is released and
                persevearance begins to land with dust-scattering rockets. Soon
                the Sky Crane takes over and puts persevearnace down softly,
                then quickly jetting away. The robotic Persevearance rover will
                now begin exploring ancient Jexero Crater including a search for
                life on Mars ♂.
              </Text>
            </View>
          </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeText: {
    marginTop:70,
    marginBottom:40,
    fontSize: 35,
    fontWeight: '630',
    color: 'white',
    textAlign: 'center',
  },
  titleText: {
    marginTop: 40,
    fontSize: 25,
    fontWeight: '630',
    color: '#d67229',
    textAlign: 'center'
  },
  picText: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
    // margin: 10,
    textAlign: 'center'
  },
  listContainer: {
    backgroundColor: 'rgba(92, 52, 52, 0.5)',
    flex: 0.8,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  marsPic: {
    marginTop: 50,
    marginLeft: 13,
    marginRight: 10,
    height: 290,
    width: 290,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marsPic2: {
    marginTop: 10,
    marginLeft: 13,
    marginRight: 10,
    height: 290,
    width: 290,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marsPic3: {
    marginTop: 10,
    marginLeft: 13,
    marginRight: 10,
    height: 290,
    width: 290,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
