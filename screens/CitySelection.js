// screens/CitySelection.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const cities = ['Islamabad', 'Lahore', 'Faisalabad'];

export default function CitySelection({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/images/image1.jpg')} // Replace with your image path
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Select a city to view the Universities</Text>
        {cities.map((city, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cityButton}
            onPress={() => navigation.navigate('UniversityList', { city })}
          >
            <Text style={styles.cityText}>{city}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional transparency
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
  },
  cityButton: {
    backgroundColor: '#8B4513',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  cityText: {
    color: '#fff',
    fontSize: 18,
  },
});
