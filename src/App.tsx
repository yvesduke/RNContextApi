import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './containers/LoginScreen';
import HomeScreen from './containers/HomeScreen';
import {MyContextProvider, useMyContext} from './contexts/MyContext';

const Stack = createNativeStackNavigator();

const Nav = () => {

const {isLogin} = useMyContext();

const getAuthStack = () => {
  return (
    <Stack.Group>
      <Stack.Screen name="Login" component={LoginScreen}/>
    </Stack.Group>
  );
};

const getMainStack = () => {
  return (
    <Stack.Group>
      <Stack.Screen
      name="Home" 
      component={HomeScreen}
      options={{title: 'Home'}}
      />
    </Stack.Group>
  );
};

  return (
    <Stack.Navigator>
      {isLogin ? getMainStack() : getAuthStack() }
    </Stack.Navigator>
  );
};

function App(): JSX.Element {

  return (
    <MyContextProvider>
      <NavigationContainer>
          <Nav />
      </NavigationContainer>
    </MyContextProvider>
  );
}

export default App;
