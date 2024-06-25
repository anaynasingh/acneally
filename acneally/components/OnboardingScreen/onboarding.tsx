// screens/OnboardingScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const OnboardingScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/humanfemaleface.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to Acne Ally</Text>
      <Text style={styles.subtitle}>
        Acne Ally is your go-to app for battling acne with confidence. Discover how you can take control of your skin health in a soothing and supporting environment.
      </Text>
      
      <TouchableOpacity
        style={[styles.secondaryButton1]}
        onPress={() => navigation.navigate('Dashboard')}> 
        <FontAwesome name="envelope" size={20} color="#007bff" style={styles.icon} />
        <Text style={styles.buttonText1}>Sign in with Email</Text>        
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.secondaryButton2]}
        onPress={() => navigation.navigate('Dashboard')}>
        <FontAwesome name="google" size={20} color="#007bff" style={styles.icon} />
        <Text style={styles.buttonText2}>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.secondaryButton3]}
        onPress={() => navigation.navigate('Dashboard')}>
        <FontAwesome name="apple" size={20} color="#007bff" style={styles.icon} />
        <Text style={styles.buttonText3}>Sign in with Apple ID</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 40,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 30,
  },
  secondaryButton1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#007bff',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
  secondaryButton2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#007bff',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
  secondaryButton3: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#007bff',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
  buttonText1: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  buttonText2: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  buttonText3: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  icon: {
    marginLeft: 10,
  },
});

export default OnboardingScreen;
