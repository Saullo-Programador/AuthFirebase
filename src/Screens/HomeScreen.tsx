import React from 'react';
import {View, Text} from 'react-native';
import {MyButton} from '../Components/MyButton';
import {styles} from './Styles';
import auth from '@react-native-firebase/auth'

export function HomeScreen() {

  function signOut() {
    auth().signOut()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Essa tela só pode ser vista por usuários autenticados
      </Text>
      <MyButton title="Sair" onPress={signOut}/>
      <Text style={{color:'#000'}}>
        by <Text style={styles.coffText}>Coffstack</Text>
      </Text>
    </View>
  );
}