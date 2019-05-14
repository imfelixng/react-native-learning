import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";

import { fetchLocationId, fetchWeather } from "./utils/api";

import getImageForWeather from "./utils/getImageForWeather";

import { SearchInput } from "./components";

const App = () => {
  const [city, setCity] = React.useState("London");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [info, setInfo] = React.useState({
    location: "",
    temperature: 0,
    weather: ""
  });

  React.useEffect(
    () => {
      handleUpdateCity(city);
    },
    [] // componentDidMount
  )

  const handleUpdateCity = async city => {
    setCity(city);
    setLoading(true);
    try {
      const locationId = await fetchLocationId(city);
      const { location, weather, temperature } = await fetchWeather(locationId);
      setLoading(false);
      setError(false);
      setInfo({
        location,
        weather,
        temperature
      });
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <ImageBackground
        source={getImageForWeather(info.weather)}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <StatusBar barStyle="light-content" />
        <View style={styles.detailContainer}>
          <ActivityIndicator animating={loading} color="red" size="large" />
          {!loading && (
            <View>
              {error && (
                <Text style={[styles.smallText, styles.textStyle]}>
                  Could not load weather, please try a different city.
                </Text>
              )}
              {!error && (
                <View>
                  <Text style={[styles.largeText, styles.textStyle]}>
                    {info.location}
                  </Text>
                  <Text style={[styles.smallText, styles.textStyle]}>
                    {info.weather}
                  </Text>
                  <Text style={[styles.largeText, styles.textStyle]}>
                    {`${Math.round(info.temperature)}°`}
                  </Text>
                </View>
              )}
              <SearchInput
                placeholder="Search city"
                city={city}
                onSubmit={handleUpdateCity}
              />
            </View>
          )}
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  textStyle: {
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto"
  },
  largeText: {
    fontSize: 44
  },
  smallText: {
    fontSize: 18
  }
});

export default App;
