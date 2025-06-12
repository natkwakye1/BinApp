// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import AuthForm from './F_components/AuthForm';
import AboutScreen from './F_components/AboutScreen'; // import the new screen

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthWrapper} options={{ title: 'Login / Signup' }} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AuthWrapper = ({ navigation }) => {
  const [screen, setScreen] = React.useState('login');

  const toggleScreen = () => {
    setScreen(screen === 'login' ? 'signup' : 'login');
  };

  const handleSubmit = (data) => {
    console.log('Form submitted:', data);
    // You can navigate after successful login/signup like:
    // navigation.navigate('About');
  };

  return (
    <AuthForm
      type={screen}
      toggleScreen={toggleScreen}
      onSubmit={handleSubmit}
      goToAbout={() => navigation.navigate('About')} // Pass this down if needed
    />
  );
};

export default App;
