// f_components/AboutScreen.js

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Smart Bin</Text>
      <Text style={styles.text}>
        Smart Bin is an IoT-based waste management system designed to optimize waste collection using sensor data and intelligent routing.
      </Text>
      <Text style={styles.text}>
        It uses ultrasonic sensors and MQTT or LoRa for communication, with a FastAPI + PostgreSQL backend and a mobile app built in React Native.
      </Text>
      <Text style={styles.text}>
        Features include real-time bin level monitoring, optimized route recommendations using OSRM/Google Maps API, and a modern UI/UX for waste management authorities.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9fafb',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#1f2937',
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 22,
    color: '#374151',
  },
});

export default AboutScreen;
