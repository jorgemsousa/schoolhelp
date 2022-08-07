import { VStack, Heading, Icon, useTheme } from "native-base";

import Logo from '../assets/logo_primary_.svg';
import Image from '../assets/image.svg';
import { Input } from '../components/Input';
import  Ionicons  from '@expo/vector-icons/Ionicons'

export function SignIn(){

  const { colors } = useTheme();
  return(
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24} >
      <Logo />
      <Image />
      <Heading color="gray.100" fontSize="xl" mt={6} mb={6}>
        Acesse sua Conta
      </Heading>

      <Input 
        placeholder="E-mail"
        mb={4}
        InputLeftElement={<Icon as={<Ionicons name="md-mail-outline" size={24} color={colors.gray[300]} />} ml/>}
      />
      <Input placeholder="Senha"/>
    </VStack>    
  );
}