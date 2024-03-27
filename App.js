import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Login no Sistema</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.formInput}
        placeholder="Usuário"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.formInput}
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <Pressable style={styles.formButton}>
          <Text style={styles.textButton}> Logar </Text>
      </Pressable>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', // torna o fundo transparente
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to bottom, #fff, #FF69B4, #fff)', // gradiente linear de branco para rosa para branco
  },
  formTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FF69B4',
    margin: 10,
  },
  formInput: {
    borderColor: '#FF69B4',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 22,
    width: '80%',
    padding: 10,
    margin: 10,
  },
  formButton: {
    backgroundColor: '#FF69B4',
    width: '80%',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
