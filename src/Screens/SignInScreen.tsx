import React, {useState} from 'react';
import {View, Image} from 'react-native';
import auth from '@react-native-firebase/auth'
import {styles} from './Styles';
import {MyButton} from '../Components/MyButton';
import {MyTextInput} from '../Components/MyTextInput';
import {MyLink} from '../Components/MyLInk';

export function SignInScreen() {
  const logo = require('../Assets/logo.png')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  function signUp(){
    auth().createUserWithEmailAndPassword(email,password)
    .then(userCredencial=>{
      console.log("User: ", userCredencial);
    }).catch(error => {
      if(error.code === 'auth/email-already-in-use'){
        console.log('email já existe');
      }
      if (error.code === 'auth/invalid-email'){
        console.log('email inválido');
      }
    });
  }

  function signIn(){
    auth().createUserWithEmailAndPassword(email, password)
    .then(() => console.log('usuario logado')).catch(error => {
      if (error.code === 'auth/email-already-in-use'){
        console.log('senha inválida');
      }
    });
  }

  return (
    <View style={[styles.container, {justifyContent: 'center'}]}>
      <Image resizeMode="contain" source={logo} style={{width: 200}} />
      <MyTextInput placeholder="E-mail" value={email} onChangeText={setEmail} />
      <MyTextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <MyButton title="Entrar no App" onPress={signIn} />

      <MyLink title="Cadastrar" onPress={signUp}/>
    </View>
  );
}