import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, TextInput, TouchableOpacity, Text} from 'react-native';
import { MyContextProvider, useMyContext } from '../../contexts/MyContext';

const LoginScreen = props => {

  const {updateData} = useMyContext();

  const {route} = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'linen',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}>
      <TextInput
        value={username}
        onChangeText={changedText => {
          setUsername(changedText);
        }}
        placeholder={'User name'}
        style={{
          backgroundColor: 'white',
          height: 45,
          marginHorizontal: 30,
          marginVertical: 18,
          alignSelf: 'stretch',
          fontSize: 18,
        }}
      />

      <TextInput
        value={password}
        onChangeText={changedText => {
          setPassword(changedText);
        }}
        placeholder={'Password'}
        style={{
          backgroundColor: 'white',
          height: 44,
          marginHorizontal: 30,
          marginVertical: 18,
          margin: 33,
          alignSelf: 'stretch',
          fontSize: 18,
        }}
      />

      <TouchableOpacity
        style={{
          height: 44,
          width: 150,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
        onPressIn={() => {
         
          updateData(true);

        }}>
        <Text style={{fontSize: 15, fontSize: 18}}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
