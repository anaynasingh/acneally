import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importing FontAwesome icons from react-native-vector-icons

const OnboardingScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/humanfemaleface.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to Acne Ally</Text>
      <Text style={styles.subtitle}>
        Acne Ally is your go-to app for battling acne with confidence. Discover how you can take control of your skin health in a soothing and supporting environment.
      </Text>
      
      <TouchableOpacity
        style={[styles.secondaryButton1]}
        onPress={() => signInWithEmail()}> 
        <View style={styles.icon1}><FontAwesome name="envelope" size={20} color="#007bff" /></View>
        <View><Text style={styles.buttonText1}>Sign in with Email</Text></View>        
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.secondaryButton2]}
        onPress={() => signInWithGoogle()}>
        <View style={styles.icon2}><FontAwesome name="google" size={20} color="#007bff" /></View>
        <View><Text style={styles.buttonText2}>Sign in with Google</Text></View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.secondaryButton3]}
        onPress={() => signInWithApple()}>
        <View style={styles.icon3}><FontAwesome name="apple" size={20} color="#007bff" /></View>
        <View><Text style={styles.buttonText3}>Sign in with Apple ID</Text></View>
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
    paddingHorizontal: 40, // Increase horizontal padding for more space from edges
  },
  logo: {
    width: 200, // Increase image width
    height: 200, // Increase image height
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
    marginBottom: 30, // Increase margin bottom for more space between text and button
  },
  secondaryButton1: {
    flexDirection: 'row', // Align icon and text horizontally
    //justifyContent: 'center', // Center icon and text horizontally
    //alignItems: 'center', // Center icon and text vertically
    backgroundColor: '#fff',
    borderColor: '#007bff',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10, // Make the button rectangle-shaped
    marginBottom: 20, // Increase space between buttons
    width: '100%', // Make the button wider
    
  },
  secondaryButton2: {
    flexDirection: 'row', // Align icon and text horizontally
    //justifyContent: 'center', // Center icon and text horizontally
    //alignItems: 'center', // Center icon and text vertically
    backgroundColor: '#fff',
    borderColor: '#007bff',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10, // Make the button rectangle-shaped
    marginBottom: 20, // Increase space between buttons
    width: '100%', // Make the button wider
  },
  secondaryButton3: {
    flexDirection: 'row', // Align icon and text horizontally
    //justifyContent: 'center', // Center icon and text horizontally
    //alignItems: 'center', // Center icon and text vertically
    backgroundColor: '#fff',
    borderColor: '#007bff',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10, // Make the button rectangle-shaped
    marginBottom: 20, // Increase space between buttons
    width: '100%', // Make the button wider
  },
  buttonText1: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 50
  },
  buttonText2: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 20,
  },
  buttonText3: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 20,
  },
  icon1: {
      paddingRight: 10, // Add padding to the right to create space between icon and text
  },
  icon2: {
    paddingRight: 40, // Add padding to the right to create space between icon and text
},
  icon3: {
    paddingRight: 40, // Add padding to the right to create space between icon and text
},

});

export default OnboardingScreen;
