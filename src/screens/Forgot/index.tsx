import { useState } from 'react';
import { VStack, Heading, Icon, useTheme } from "native-base";

import Logo from '../../assets/logo_primary_.svg';
import Image from '../../assets/image.svg';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Envelope } from 'phosphor-react-native';

export function Forgot(){
  const [email, setEmail] = useState('');
  const { colors } = useTheme();

  return(
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={10} >
      <Logo />
      <Image />
      <Heading color="gray.100" fontSize="xl" mt={6} mb={6}>
        Recuperar Senha
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
     
      <Button 
        title="Enviar"
        w="full"        
      />      
    </VStack>    
  );
}