import { useState } from 'react';
import { VStack, Heading, Icon, useTheme } from "native-base";

import Logo from '../../assets/logo_primary_.svg';
import Image from '../../assets/image.svg';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Envelope, Key, UserCirclePlus } from 'phosphor-react-native';
import { Header } from '../../components/Header';

export function Register(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { colors } = useTheme();

  return(
    <>
      <Header title='Cadastro de Usuário' />
      <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={10} >
        <Logo />
        <Image />
        <Heading color="gray.100" fontSize="xl" mt={6} mb={6}>
          Cadastrar Usuário
        </Heading>

        <Input 
          mb={4}
          placeholder="E-mail"
          onChangeText={setEmail}
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
          title="Cadastrar"
          w="full"        
        />
        
      </VStack>  
    </>  
  );
}