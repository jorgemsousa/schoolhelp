import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import  auth from '@react-native-firebase/auth';
import { VStack, Heading, Icon, useTheme, Text, HStack } from "native-base";

import Logo from '../../assets/logo_primary_.svg';
import Image from '../../assets/image.svg';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Envelope, Key } from 'phosphor-react-native';
import { Alert } from 'react-native';

export function SignIn(){
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { colors } = useTheme();

  function handleSignIn() {

    if(!email || !password){
      return Alert.alert("Login", "E-mail e Senha são obrigatórios")
    }

    setIsLoading(true);
    
    auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      setIsLoading(false);
      clearCredentials();
    })
    .catch((error) => {
      Alert.alert('SignIn', 'E-mail ou Senha Inválidos.');
      setIsLoading(false);
      clearCredentials();
    })
  }

  function handleNewRegister(){
    navigation.navigate('register')
  }

  function handleForgot(){
    navigation.navigate('forgot')
  }

  function clearCredentials(){
    setPassword('')
    setEmail('')
  }

  return(
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={20} >
      <Logo />
      <Image />
      <Heading color="gray.100" fontSize="xl" mt={6} mb={6}>
        Acesse sua Conta
      </Heading>

      <Input 
        mb={4}
        placeholder="E-mail"
        onChangeText={setEmail}
        value={email}
        InputLeftElement={
          <Icon 
            as={
              <Envelope
                color={colors.gray[300]} 
              />
            } 
            ml={4}
          />
        }
      />
      <Input 
        mb={8}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        InputLeftElement={
          <Icon 
            as={
              <Key
                color={colors.gray[300]} 
              />
            } 
            ml={4}
          />
        }
        secureTextEntry
      />

      <Button 
        title="Entrar"
        w="full"   
        onPress={handleSignIn} 
        isLoading={isLoading}    
      />
      <HStack 
        mt={3}
        w="full" 
        justifyContent="space-between" 
      >
        <Text 
          color="fuchsia.500" 
          fontSize={11} 
          onPress={handleNewRegister}
        >
          Novo Cadastro
        </Text>
        
        <Text 
          color="fuchsia.500" 
          fontSize={11} 
          onPress={handleForgot}
        >
          Recuperar Senha
        </Text>
      </HStack>
    </VStack>    
  );
}