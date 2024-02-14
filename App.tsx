import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  View,
} from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { HomeScreen } from './src/Screens/HomeScreen';
import { SignInScreen } from './src/Screens/SignInScreen';
import { colors } from './src/colors';


function App() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [initializing, setInitializing] = useState(true)

  useEffect(() => {
    const unSubscribe = auth().onAuthStateChanged((_user) => {
      setUser(_user);
      if(initializing){
        setInitializing(false);
      }
    })
    return unSubscribe;
  }, [])

  if (initializing) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <ActivityIndicator size={50} color={colors.primary} />
      </View>
    )
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      {user ? <HomeScreen /> : <SignInScreen />}
    </SafeAreaView>
  );
}

export default App;
