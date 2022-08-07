import { useState } from 'react';
import { VStack, Heading, Icon, useTheme, Text, HStack } from "native-base";

import Logo from '../../assets/logo_primary_.svg';
import Image from '../../assets/image.svg';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {} from ''
import  Ionicons  from '@expo/vector-icons/Ionicons';

export function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { colors } = useTheme();

  return(
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={10} >
      <Logo />
      <Image />
      <Heading color="gray.100" fontSize="xl" mt={6} mb={6}>
        Acesse sua Conta
      </Heading>

      <Input 
        mb={4}
        placeholder="E-mail"
        onChangeText={setEmail}
        InputLeftElement={
          <Icon 
            as={
              <Ionicons 
                name="md-mail-outline" 
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
              <Ionicons 
                name="md-key-outline" 
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
      />
      <HStack 
        mt={2}
        w="full" 
        justifyContent="space-between" 
      >
        <Text 
          color="fuchsia.100" 
          fontSize={10} 
        >
          Novo Cadastro
        </Text>
        
        <Text 
          color="gray.100" 
          fontSize={10} 
        >
          Recuperar Senha
        </Text>
      </HStack>
    </VStack>    
  );
}